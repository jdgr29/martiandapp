import React from "react";
import { useContext, useEffect } from "react";
import Web3Context from "../../../modules/core/web3/Web3Context";

const TicketCollectionCard = ({
    ticketsInside,
    ticketAddress,
} : {
    ticketsInside: number,
    ticketAddress: string
}) => {
    const web3Context = useContext(Web3Context);


    // const [
    //     ticketCollectionImageUrl,
    //     ticketCollectionName,
    //     ticketCollectionSymbol,
    //     fetchingTicketCollectionDetails,
    //     fetchingTicketCollectionError,
    // ] = useTicketCollectionDetails(ticketAddress, web3Context);

    const linkUrl = `/mytickets/${ticketAddress}`;

    return(
        // <div className="m-4 w-2/5 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style={{
        //     backgroundImage: "url("+ticketCollectionImageUrl+")",
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //     backgroundBlendMode: "multiply",
        // }}>
        //         <a href={linkUrl}>
        //     <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
        //     <div className="w-full text-right text-gray-700 font-semibold relative pt-1 md:pt-0">
        //         <div className="text-l text-white leading-tight">{ticketCollectionName}</div>
        //         <div className="text-normal text-gray-300  cursor-pointer"><span className="border-b border-dashed border-gray-500 pb-1">{ticketCollectionSymbol}</span></div>
        //         <div className="text-sm text-gray-300  cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">{ticketsInside}</div>
        //     </div>
        //     </div>
        // </a>
        // </div>
        <h1>placeholder</h1>
    );
}

export default TicketCollectionCard