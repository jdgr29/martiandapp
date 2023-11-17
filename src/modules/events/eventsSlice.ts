import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExploreEventsError, ExploreEventsState, EventDetails } from "./types";
import { getAllEvents } from "../core/db/events";
import { SupabaseClient } from "@supabase/auth-helpers-react";

const initialState: ExploreEventsState = {
    constraints: null,
    events: [],
    loading: false, 
    error: ExploreEventsError.NONE,
}

export const fetchEvents = createAsyncThunk('events/fetchevents',
    async (sb: SupabaseClient) => {

    console.log('start');

    const eventsRes = await getAllEvents(sb);

    
    if(!eventsRes.success) Error("EVENT_FETCH_FAILURE")
    const events = eventsRes.result;

    return events as EventDetails[]
})

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        loading: (state) => { state.loading = true },
        fetched: (state) => { state.loading = false },
        clear: (state) => { state = initialState },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            console.log('PENDING');
            state.loading = true
        })
        builder.addCase(fetchEvents.fulfilled, (state, action: PayloadAction<EventDetails[]>) => {
            console.log('FULFILLED');
            state.events = action.payload;
            state.loading = false;
            state.error = ExploreEventsError.NONE;
        })
        builder.addCase(fetchEvents.rejected, (state) => {
            console.log('REJECTED');
            state.error = ExploreEventsError.LOADING_FAILED;
        })
    }
})

// Selectors
export const selectEvents = (state: ExploreEventsState) => state.events;
export const selectEventErrors = (state: ExploreEventsState) => state.error;
export const selectEventConstraints = (state: ExploreEventsState) => state.constraints;
export const selectLoadingStatus = (state: ExploreEventsState) => state.loading;

export default eventsSlice.reducer