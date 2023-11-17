import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';
import stripe from '../../../src/modules/core/singletons/stripe';
import amqp from "amqplib";


const fulfillOrder = async (session: any) => {
    const con = await amqp.connect(process.env.AMQP_URL!);
    
    const channel = await con.createChannel();

    // Send to worker
    channel.sendToQueue(CONTRACT_CONFIG_QUEUE,
        Buffer.from(JSON.stringify(params)),{
            correlationId: correlationId,
            replyTo: assertQueue.queue });
    console.log("Fulfilling order", session);
  }
  
const createOrder = (session: any) => {
    // TODO: fill me in
    console.log("Creating order", session);
}

const emailCustomerAboutFailedPayment = (session: any) => {
    // TODO: fill me in
    console.log("Emailing customer", session);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    try {

        //validation
        if (!req.body) throw new Error("No request body!");

        const event = JSON.parse(req.body);

        const validEvent: Stripe.Event = stripe.webhooks.constructEvent(
            event.body,
            event.headers["Stripe-Signature"],
            process.env.PAYMENT_WEBHOOK_SECRET!
          );

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                // Save an order in your database, marked as 'awaiting payment'
                createOrder(session);
          
                // Check if the order is paid (for example, from a card payment)
                //
                // A delayed notification payment will have an `unpaid` status, as
                // you're still waiting for funds to be transferred from the customer's
                // account.
                if (session.payment_status === 'paid') {
                  fulfillOrder(session);
                }
          
                break;
            }
            case 'checkout.session.async_payment_succeeded': {
                const session = event.data.object;
            
                // Fulfill the purchase...
                fulfillOrder(session);
            
                break;
            }
              
            case 'checkout.session.async_payment_failed': {
                const session = event.data.object;
            
                // Send an email to the customer asking them to retry their order
                emailCustomerAboutFailedPayment(session);
            
                break;
            }
            default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
        }

        res.status(200).send({ success: true})
    } catch (err) {
        res.status(400).send({ success: false, message: err})
      }
}
