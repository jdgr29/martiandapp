import { createAsyncThunk, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketsError, Ticket, TicketsState } from "./types";
import { SupabaseClient } from "@supabase/auth-helpers-react";
import { getTicketsByEventId } from "../core/db/tickets";

const initialState: TicketsState = {
    tickets: [],
    loading: false, 
    error: TicketsError.NONE,
}

export type FetchTicketsByEventIdParams = {
    sb: SupabaseClient;
    event: number;
}

export const fetchTicketsByEventId = createAsyncThunk('tickets/fetchTicketsByEventId',
    async (args: FetchTicketsByEventIdParams) => {
      
    console.log('start');
    const ticketsRes = await getTicketsByEventId(args.sb, args.event);

    if(!ticketsRes.success) Error("TICKETS_FETCH_FAILURE");

    const events = ticketsRes.result;

    return events as Ticket[]
})

export const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        loading: (state) => { state.loading = true },
        fetched: (state) => { state.loading = false },
        clear: (state) => { state = initialState },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTicketsByEventId.pending, (state) => {
            console.log('PENDING');
            state.loading = true
        })
        builder.addCase(fetchTicketsByEventId.fulfilled, (state, action: PayloadAction<Ticket[]>) => {
            console.log('FULFILLED');
            state.tickets = action.payload;
            state.loading = false;
            state.error = TicketsError.NONE;
        })
        builder.addCase(fetchTicketsByEventId.rejected, (state) => {
            console.log('REJECTED');
            state.loading = false;
            state.error = TicketsError.LOADING_FAILED;
        })
    }
})

// Selectors
export const selectTickets = (state: TicketsState) => state.tickets;
export const selectTicketsErrors = (state: TicketsState) => state.error;
export const selectLoadingStatus = (state: TicketsState) => state.loading;

export default ticketSlice.reducer