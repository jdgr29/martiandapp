import { SupabaseClient } from "@supabase/auth-helpers-react";
import { Ticket } from "../tickets/types";

export type CheckoutState = {
    checkoutOpen: boolean;
    quantity: number;
    loading: boolean; 
    error: CheckoutError;
    ticket?: Ticket;
}

export type FetchTicketParams = {
    ticketId: number;
}

export enum CheckoutError {
    NONE,
    LOADING_FAILED = 'Ticket details loading has failed',
}
