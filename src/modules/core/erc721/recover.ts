import {Contract} from "web3-eth-contract";
import { openNotificationWithIcon } from "../../../components/Notification";

/**
 * @notice Allows the owner to recover non-fungible tokens sent to the contract by mistake
 * @param _token: NFT token address
 * @param _tokenId: tokenId
 * @dev Callable by owner
 */
export function recoverNonFungibleToken(erc721Contract: Contract, tokenAddress: string, tokenId: number, from: string) {
    openNotificationWithIcon('Recover','Recovering NFT', 'info');
    try {
        erc721Contract.methods.recoverNonFungibleToken(tokenAddress, tokenId).send({from: from}).then((res: any) => {
            console.log(res);
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Allows the owner to recover non-fungible tokens sent to the contract by mistake
 * @param _token: NFT token address
 * @param _tokenId: tokenId
 * @dev Callable by owner
 */
export function recoverToken(erc721Contract: Contract, tokenAddress: string, from: string) {
    openNotificationWithIcon('Recover','Recovering Token', 'info');
    try {
        erc721Contract.methods.recoverToken(tokenAddress).send({from: from}).then((res: any) => {
            console.log(res);
    
            if(res.status == true){
                openNotificationWithIcon('Recover','Recovered', 'success');
                return;
            } else {
                openNotificationWithIcon('Recover','Recovery Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Forward BNB which ended up in this contract by accident to paymentReceiver. Only owner.
 */
export function forwardFunds(erc721Contract: Contract, from: string) {
    openNotificationWithIcon('Recover','Forwarding Funds', 'info');
    try {
        erc721Contract.methods.forwardFunds().send({from: from}).then((res: any) => {
            console.log(res);
    
            if(res.status == true){
                openNotificationWithIcon('Recover','Forwarded Funds Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Recover','Forward Funds Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}