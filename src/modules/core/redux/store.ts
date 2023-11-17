import { Action, AsyncThunkAction, combineReducers, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";


// Reducers
import eventsReducer from "../../events/eventsSlice";
import ticketReducer from "../../tickets/ticketsSlice";
import checkoutReducer from "../../checkout/checkoutSlice";


const persistConfig = {
    key: "root",
    storage,
    //blacklist: [],
    whitelist: ['events','tickets'],
};


const rootReducer = combineReducers({
    events: eventsReducer,
    ticket: ticketReducer,
    checkout: checkoutReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const makeStore = () => configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store)

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<any, void, Action>

export const wrapper = createWrapper<AppStore>(makeStore);