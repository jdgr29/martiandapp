import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";
import { getUseable, tokensOfOwner } from "../../modules/core/erc721/view";
import LoadingView from "../Loading/LoadingView";
import {AiFillLock} from "react-icons/ai"
import React from "react";
import { Web3ContextProps } from "../../modules/core/web3/Web3Context";

const UseTicketButton = ({
    size,
    contract,
    web3Context,
    setShowTicketModal,
} : {
    size: string,
    contract: Contract,
    web3Context: Web3ContextProps,
    setShowTicketModal: Function,
}) => {

    const [useable, setUsable] = useState(true);
    const [addressHasTicket, setAddressHasTicket] = useState(false);
    const [tokenIds, setTokenIds] = useState<number[] | undefined>([]);

    const sizeClass = size == "large" ? 
        "w-72 h-16 bg-green-600 px-12 py-2 rounded-lg active:bg-green-500 shadow-lg drop-shadow-2xl shadow-green-500/50" : 
        "bg-green-600 px-12 py-2 rounded-lg hover:bg-green-400 border-white border-2 shadow-lg drop-shadow-2xl shadow-green-500/50";

    useEffect(() => {
        console.log(web3Context);
        console.log(web3Context.address);
        if(web3Context.address) {
            // Check for usability
            getUseable(contract, web3Context.address).then((useableResult) => {
                if(useableResult) {
                    setUsable(true);
                } else {
                    setUsable(false);
                }
            });
            console.log('about to get tokens of owner')
            // Check if address has tickets for event
            tokensOfOwner(contract, web3Context.address, web3Context.address).then((tokenIdsRes) => {
                console.log('f' + tokenIdsRes);
                setTokenIds(tokenIds);
                if(tokenIdsRes != undefined && tokenIdsRes.length > 0) {
                    console.log('has ticket!')
                    setAddressHasTicket(true);
                } else {
                    setAddressHasTicket(false);
                }
            });
        }
    }, [contract, tokenIds]);

    if(!useable) {
        return eventLockedButton(sizeClass)
    }

    if(!addressHasTicket) {
        return noValidTicket(sizeClass)
    }
    console.log(useable);
    console.log(tokenIds);
    if(useable && addressHasTicket && tokenIds) {
        return UseTicketButtonView(sizeClass, setShowTicketModal);
    }

    return(
        <LoadingView/>
    );
}

function UseTicketButtonView(sizeClass: string, setShowTicketModal: Function) {
    return(
        <div className="flex justify-center m-2">
            <button className={sizeClass} onClick={() => { setShowTicketModal(true) }}>
            <div className="flex flex-row justify-center gap-2"> 
                Use Ticket
            </div>
            </button>
        </div>
    );
}

const eventLockedButton = (sizeClass: string) => {
    return(
        <div className="flex justify-center m-2">
            <button className={sizeClass + " bg-gray-500 hover:bg-gray-500 shadow-gray-500/50"} onClick={() => {}}>
                <div className="flex flex-row justify-center gap-2">
                <AiFillLock className="mt-1" width={20} height={20}/> 
                Tickets not Usable
                </div>
            </button>
        </div>
    )
}

const noValidTicket = (sizeClass: string) => {
    return(
        <div className="flex justify-center m-2">
            <button disabled className={sizeClass + " bg-gray-500 hover:bg-gray-500 shadow-gray-500/50"} onClick={() => {}}>   
                <div className="flex flex-row justify-center gap-2">
                <AiFillLock className="mt-1"/> 
                No Tickets Found
                </div>
            </button>
        </div>
    )
}

// TODO
export async function useTicket() {
    // if(web3Context.setAddress){
    //     web3Context.setAddress("");
    // }
}

export default UseTicketButton