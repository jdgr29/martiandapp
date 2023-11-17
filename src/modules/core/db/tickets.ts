import { SupabaseClient } from "@supabase/supabase-js";
import { EVENTS_TABLE_NAME, EVENT_TICKETS_TABLE_NAME, TICKETS_TABLE_NAME, TICKET_TABLE_QUERY } from "../../../constants"
import { Ticket, TicketPurchase } from "../../tickets/types";
import { SupabaseResult } from "./supabase"


export async function getTicketAddresses(sb: SupabaseClient) : Promise<SupabaseResult> {
    try {
        let data = await sb
            .from(EVENTS_TABLE_NAME)
            .select(
            `contract_address`
            )
            .then((res) => res);

        const ticketAddresses = data.data;

        return {
            result: ticketAddresses,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}

export async function getTicketsByEventId(sb: SupabaseClient, eventId: number) : Promise<SupabaseResult> {
    try {
        let data = await sb
            .from(EVENT_TICKETS_TABLE_NAME)
            .select(
            `event_ticketIds, event_id, ticketIds`
            )
            .eq('event_id', eventId)
            .then((res) => res);

        const ticketAddresses = data.data;

        return {
            result: ticketAddresses,
            success: true
        }
    } catch (error) {
        return {
            result: [error],
            success: false
        }
    }
}


// Get details for supplied ticket id
export async function getTicket(sb: SupabaseClient, ticketIds: number) : Promise<Ticket> {
    let res = await sb
        .from(TICKETS_TABLE_NAME)
        .select(
        `id, contract_address, owner_address, ticket_generation_available, fiat_cost, fiat_currency, number_of_reserved_tickets_for_fiat_payments, number_of_tickets_for_direct_minting`
        )
        .eq('id',ticketIds)
        .single();

    if(res.error) throw Error('Ticket Failure')

    const ticketData = res.data;

    // Process as ticket
    const ticket: Ticket = {
        id: ticketData.id,
        contractAddress: ticketData.contract_address,
        reserveAmount: ticketData.number_of_reserved_tickets_for_fiat_payments,
        onchainMintsAmount: ticketData.number_of_tickets_for_direct_minting,
        fiatCurrency: ticketData.fiat_currency,
        fiatCost: ticketData.fiat_cost,
        ticketGenerationAvailable: ticketData.ticket_generation_available,
    }

    return ticket
}

// Get details for supplied ticket ids
export async function getTickets(sb: SupabaseClient, ticketPurchases: TicketPurchase[]) : Promise<Ticket[]> {
    // Sort ticket purchases by ticket id
    const sortedTickets = ticketPurchases.sort((a, b) => a.ticketId - b.ticketId);

    // Build condition
    let condition = "id.in.(";
    let uniqueTicketLength = sortedTickets.length;
    sortedTickets.map((ticketPurchase,i) => {
        if(i == uniqueTicketLength-1)
            condition+=ticketPurchase.ticketId;
        else
            condition+=ticketPurchase.ticketId+',';
    });
    condition+=')';

    console.log(condition);

    let res = await sb
        .from(TICKETS_TABLE_NAME)
        .select(TICKET_TABLE_QUERY)
        .or(condition)
        .order('id', { ascending: true });

    if(res.error) throw Error('Ticket Fetch Failure')

    // Check all the correct tickets were returned
    for (const ticketPurchase of sortedTickets) {
        if (!res.data.some((element) => element.id === ticketPurchase.ticketId)) {
          throw new Error(`Ticket Fetch Failure`);
        }
    }

    // Process as tickets
    let tickets: Ticket[] = [];

    res.data.map((ticketRec) => {
        const ticket: Ticket = {
            id: ticketRec.id,
            contractAddress: ticketRec.contract_address,
            reserveAmount: ticketRec.number_of_reserved_tickets_for_fiat_payments,
            onchainMintsAmount: ticketRec.number_of_tickets_for_direct_minting,
            fiatCurrency: ticketRec.fiat_currency,
            fiatCost: ticketRec.fiat_cost,
            ticketGenerationAvailable: ticketRec.ticket_generation_available,
        }

        tickets.push(ticket);
    });

    return tickets
}



// // Get list of all martian events
// async function getAllTickets(sb: SupabaseClient) : Promise<SupabaseResult> {
//     try {
//         let data = await sb
//           .from(TICKETS_TABLE_NAME)
//           .select(
//             `ticketIds, contract_address, token_type, created, total_supply, reserve_amount, whitelisted_amount`
//           )
//           .then((res) => res)
//         const ticketsData = data.data;

//         // Process as tickets
//         let tickets: Ticket[] = [];
//         for (let i = 0; i < ticketsData.length; i++) {
//             const ticketData = ticketsData[i];

//             const ticketToAdd: Ticket = {
//                 id: ticketData["ticketIds"],
//                 contractAddress: ticketData["contract_address"],
//                 tokenType: ticketData["token_type"],
//                 created: ticketData["created"],
//                 totalSupply: ticketData["total_supply"],
//                 reserveAmount: ticketData["reserve_amount"],
//                 whitelistedAmount: ticketData["whitelisted_amount"],
//             }
//             tickets.push(ticketToAdd);
//         }

//         return {
//             result: tickets,
//             success: true
//         }
//     } catch (error) {
//         return {
//             result: [error],
//             success: false
//         }
//     }
// }


// // Get list of all martian tickets for a particular event
// async function getEventTickets(sb: SupabaseClient, event_id: number) : Promise<SupabaseResult> {
//     try {
//         // Get tickets for given event
//         let event_tickets = await sb
//           .from(EVENT_TICKETS_TABLE_NAME)
//           .select(`ticketIds`)
//           .eq('event_id', event_id)
//           .then((res) => res.data)

//         let tickets: Ticket[] = [];

//         for (let i = 0; i < event_tickets.length; i++) {
//             const ticketIds = event_tickets[i]["ticketIds"];

//             // Get data for ticket id
//             let ticketData = await sb
//             .from(TICKETS_TABLE_NAME)
//             .select(
//                 `ticketIds, contract_address, token_type, created, total_supply, reserve_amount, whitelisted_amount`
//             )
//             .eq('ticketIds', ticketIds)
//             .then((res) => res.data);

//             const ticketToAdd: Ticket = {
//                 id: ticketData["ticketIds"],
//                 contractAddress: ticketData["contract_address"],
//                 tokenType: ticketData["token_type"],
//                 created: ticketData["created"],
//                 totalSupply: ticketData["total_supply"],
//                 reserveAmount: ticketData["reserve_amount"],
//                 whitelistedAmount: ticketData["whitelisted_amount"],
//             }
//             tickets.push(ticketToAdd);
//         }

//         return {
//             result: tickets,
//             success: true
//         }
//     } catch (error) {
//         return {
//             result: [error],
//             success: false
//         }
//     }
// }