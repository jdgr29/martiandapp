import React from 'react';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '../../modules/core/redux/hooks';
import { selectTickets } from '../../modules/tickets/ticketsSlice'
import TicketView from './TicketView';

export const TicketGrid = () => {

    const tickets = useAppSelector((state) => selectTickets(state.ticket));

    return(
        <div>
            {tickets.map((ticket) => {
                return <TicketView key={ticket.id} ticket={ticket}/>
            })}
        </div>
    )
}

export default TicketGrid