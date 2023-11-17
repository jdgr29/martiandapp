import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { Web3ContextProps } from "../../../modules/core/web3/Web3Context";
import ConnectWalletButton from "../../Account/ConnectWalletButton";
import LoadingView from "../../Loading/LoadingView";
import NoOwnedTickets from "./NoOwnedTicketsView";
import TicketCollectionCard from "./TicketCollectionCard";

// 
function MyTickets({
    address,
    web3Context
} : {
    address: string,
    web3Context: Web3ContextProps
}) {
    const [ownedTickets, setOwnedTickets] = useState<Map<string, number[]>>(new Map<string, number[]>());
    const [fetchingOwnedTickets, setFetchingOwnedTickets] = useState(false);
    const [ownsNoTickets, setOwnsNoTickets] = useState(false);

    //const  [ticketAddresses, fetchingTickets, fetchingTicketsError, fetchTicketAddresses] = useMartianTickets(web3Context);

    const web3: Web3 | null = web3Context.provider ?  new Web3(web3Context.provider as any) : null;

    // useEffect(() => { fetchTicketAddresses(address) }, [web3Context]);

    // useEffect(() => {
    //     const addOwnedTokensToState = (ticketAddressToSet: string, tokenIds: number[]) => {
    //         // Grab existing state
    //         let ownedTicketsTemp = ownedTickets;
    //         ownedTicketsTemp.set(ticketAddressToSet, tokenIds);
    //         setOwnedTickets(ownedTicketsTemp);
    //     }

    //     const fetchCurrentlyOwnedTickets = async () => {
    //         if(web3 && ticketAddresses){
    //             setFetchingOwnedTickets(true);
    //             // Get tickets for each ticket address
    //             let ownedTokenIdsForTicketAddresses = new Map<string, number[]>();

    //             // fetch owned tickets of ticket addresses
    //             let noticketsfound = true;
    //             await Promise.all( ticketAddresses?.map(async (tAddress) => {
    //                 const tContract = ERC721TicketContract(web3!, tAddress);

    
    //                 await tokensOfOwner(tContract, address, address).then((tokenIdsOwned) => {
    //                     console.log('Fetching tokens - ' + tokenIdsOwned);
    //                     if(tokenIdsOwned && tokenIdsOwned.length > 0) {
    //                         addOwnedTokensToState(tAddress, tokenIdsOwned);
    //                         setOwnsNoTickets(false);
    //                         noticketsfound = false;
    //                     }
    
    //                 })
    //             }));
    
    //             if(noticketsfound) { setOwnsNoTickets(true) }
    //             setFetchingOwnedTickets(false);
    //         }
    //     }
    //     // RUN FETCH
    //     fetchCurrentlyOwnedTickets()
    // }, [ticketAddresses]);

    // if(!web3Context.address) {
    //     return(
    //         <h1>No Martian User Detected.</h1>
    //     );
    // }


    // if(fetchingTickets || fetchingOwnedTickets) {
    //     return(
    //         <div>
    //             <LoadingView/>
    //         </div>
    //     );
    // }

    // // SHOW THE NFT TICKETS
    // // TODO commented out the showing of different collections, for now just going to show all NFTs through this
    // if(!ownsNoTickets) {
    //     return(
    //         <div>
    //             <h1 className="flex justify-center text-center text-2xl">My Tickets</h1>
    //             {Array.from(ownedTickets.keys()).map((ticketContractAddress) => {
    //               return <TicketCollectionCard
    //                         key={ticketContractAddress}
    //                         ticketsInside={ownedTickets.get(ticketContractAddress)!.length}
    //                         ticketAddress={ticketContractAddress}
    //                     />
    //             })}
    //         </div>
    //     );
    // }

    // if(ownsNoTickets) {
    //     return(
    //         <>
    //             <h1 className="flex justify-center text-center text-2xl">My Tickets</h1>
    //             <NoOwnedTickets/>
    //             <br/>
    //         </>
    //     );
    // }

    // if(fetchingTicketsError) {
    //     return(
    //         <div>
    //             <h1>Something went wrong</h1>
    //         </div>
    //     )
    // }

    return(
        <div>
            {/* <LoadingView/> */}
            
        </div>
    );
}

export default MyTickets