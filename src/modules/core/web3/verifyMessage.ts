import { Contract, ethers } from "ethers";
import { MARTIAN_VERIFIER_CONTRACT_ADDRESS } from "../../constants/constants";
import { backendProvider } from "./web3";

// IMPORTANT! NOTE - THIS IS NOT CURRENTLY USED, USED FROM ETHER UTILS

let verifier_abi = [
    "function verifyString(string, uint8, bytes32, bytes32) public pure returns (address)"
];

// Backend provider


let contract = new Contract(MARTIAN_VERIFIER_CONTRACT_ADDRESS, verifier_abi, backendProvider);

export const verifyMessage = async (address: string, flatSig: string, message: string) : Promise<boolean> => {
    // For Solidity, we need the expanded-format of a signature
    let sig = ethers.utils.splitSignature(flatSig);

    // Call the verifyString function
    let recovered: string = await contract.verifyString(message, sig.v, sig.r, sig.s);

    // Check is expected pubkey
    console.log(recovered);
    console.log(address);
    console.log(recovered == address);
    if(recovered == address) {
        return true
    }
    return false
}