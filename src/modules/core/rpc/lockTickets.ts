import amqp from "amqplib";
import { NextApiResponse } from "next";
import { LOCK_TICKET_QUEUE, RPC_TIMEOUT_MS } from "../../../constants";
import { generateUuid } from "../../../utils";
import { TicketPurchase } from "../../tickets/types";
import RabbitMQConnection from "../singletons/rabbitMQ";

// Lock a set of tickets for a user
async function lockTickets(
    ticketPurchases: TicketPurchase[],
    userId: string
) : Promise<boolean> {

    const con = await RabbitMQConnection.getInstance();
    const channel = con.getChannel();

    if(channel == undefined) throw Error('Could not establish channel')

    if(!channel) throw Error('Could not establish channel')

    const assertQueue = await channel.assertQueue('', {
        exclusive: true,
        durable: false
    });

    let correlationId = generateUuid();

    await channel.prefetch(1);

    const replyPromise = new Promise<string>((resolve, reject) => {
        // Set up a timeout for the RPC reply
        const timeoutId = setTimeout(() => {
          reject(new Error(`RPC call timed out after ${RPC_TIMEOUT_MS} ms`));
        }, RPC_TIMEOUT_MS);
        
        // Listen for the RPC reply
        channel.consume(assertQueue.queue, (msg) => {
            if (msg && msg.properties.correlationId == correlationId) {
                console.log('!!!!!! [.] Received: %s', msg.content.toString());
                clearTimeout(timeoutId); // Clear the timeout if the reply arrives on time
                resolve(msg.content.toString());
            }
        },{noAck: true});
    });

    // Construct params to send
    const reqParams = {
        ticketPurchases,
        userId,
    }
    
    // Send to worker
    const res = channel.sendToQueue(LOCK_TICKET_QUEUE,
        Buffer.from(JSON.stringify(reqParams)),{
            correlationId: correlationId,
            replyTo: assertQueue.queue });


    // Wait for the reply or timeout
    const rpcResponse = await Promise.race([replyPromise, new Promise<string>((_, reject) => {
        setTimeout(() => reject(new Error(`RPC call timed out after ${RPC_TIMEOUT_MS} ms`)), RPC_TIMEOUT_MS);
    })]);

    console.log(rpcResponse);

    const lockTicketResponse = JSON.parse(rpcResponse);
    return lockTicketResponse.lockSuccess as boolean;
}

export default lockTickets