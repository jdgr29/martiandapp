import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckoutError, CheckoutState, FetchTicketParams } from "./types";
import { getTicket } from "../core/db/tickets";
import { Ticket } from "../tickets/types";

const initialState: CheckoutState = {
    quantity: 0,
    loading: false, 
    error: CheckoutError.NONE,
    checkoutOpen: false
}

export const fetchTicketById = createAsyncThunk('checkout/fetchTicketDetails',
    async (args: FetchTicketParams) => {
    console.log('start');
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ticket/${args.ticketId}`);
    
    if(res.status != 200) throw Error('Could not fetch ticket details')
    
    const ticket: Ticket = await res.json();
    return ticket
});

export const checkoutSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        loading: (state) => { state.loading = true },
        fetched: (state) => { state.loading = false },
        clear: (state) => { state = initialState },
        openCheckout: (state) => { state.checkoutOpen = true},
        closeCheckout: (state) => { state.checkoutOpen = false}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTicketById.pending, (state) => {
            console.log('PENDING');
            state.loading = true
        })
        builder.addCase(fetchTicketById.fulfilled, (state, action: PayloadAction<Ticket>) => {
            console.log('FULFILLED');
            state.ticket = action.payload;
            state.loading = false;
            state.error = CheckoutError.NONE;
        })
        builder.addCase(fetchTicketById.rejected, (state) => {
            console.log('REJECTED');
            state.error = CheckoutError.LOADING_FAILED;
        })
    }
})

// Selectors
export const selectTicket = (state: CheckoutState) => state.ticket;
export const selectCheckoutOpen = (state: CheckoutState) => state.checkoutOpen;
export const selectCheckoutError = (state: CheckoutState) => state.error;
export const selectCheckoutLoadingStatus = (state: CheckoutState) => state.loading;

export const { 
    clear,
    loading,
    fetched,
    openCheckout,
    closeCheckout
} = checkoutSlice.actions;

export default checkoutSlice.reducer