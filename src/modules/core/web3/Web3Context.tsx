import React, { Dispatch, SetStateAction } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

export type Web3ContextProps = {
    //web3: Web3 | null;
    //setWeb3: Dispatch<SetStateAction<Web3 | null>> | null;
    address: string | null;
    setAddress: Dispatch<SetStateAction<string | null>> | null;
    provider: ethers.providers.Provider | null;
    setProvider: Dispatch<SetStateAction<ethers.providers.Provider | null>> | null;
}

const Web3Context = React.createContext<Web3ContextProps>({
    //web3: null,
    //setWeb3: null,
    address: null,
    setAddress: null,
    provider: null,
    setProvider: null, 

});

export default Web3Context;