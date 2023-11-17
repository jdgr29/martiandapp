import React from 'react';
import { useAppDispatch, useAppSelector, useAppThunkDispatch } from '../../modules/core/redux/hooks';
import { Ticket } from '../../modules/tickets/types';

const TicketView = ({ ticket: Ticket }) => {

    return(
        <div>
            <h1>just a view for tickets!!</h1>
        </div>
    )
}

export default TicketView