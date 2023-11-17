import { useContext, useEffect } from "react";
import Web3Context from "../../context/Web3Context";
import { getEventsByTicketAddress } from "../../core/db/events";
import useTicketCollectionDetails from "../../hooks/tickets/useTicketCollectionDetails";

const ShowAllOwnedTickets = ({
    ownedTickets,
} : {
    ownedTickets: Map<string, number[]>,
}) => {
    const web3Context = useContext(Web3Context);

    return(
        <h1>TEMP TODO</h1>
    );
}

export default ShowAllOwnedTickets