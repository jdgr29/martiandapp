import {Contract} from "web3-eth-contract";
import { openNotificationWithIcon } from "../../../components/Notification";

// Reserve `amount` tokens to be minted by `to`. Only callable by owner.
export function reserveTokens(erc721Contract: Contract, to: string, amount: number, from: string) {
    openNotificationWithIcon('Reserve','Reserving Tokens', 'info');
    try {
        erc721Contract.methods.reserve(to, amount).send({from: from, value: 0}).then((res: any) => {
            console.log(res);

            // Check status
            if(res.status == true){
                openNotificationWithIcon('Reserve','Reserved Tokens Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Reserve','Failed to Reserve Tokens', 'error');
            }
        });
    } catch(error) {
        console.log(error);
    } 
}

/**
 * @notice Mint `amount` reserved tokens for `user`. Only callable by owner.
 * @dev This method is meant to only be used to make sure all reserved mints are beeing used.
 */
export function mintReservedFor(erc721Contract: Contract, user: string, amount: number, from: string) {
    openNotificationWithIcon('Reserve','Minting Reserved Tokens', 'info');
    try{ 
        erc721Contract.methods.mintReservedFor(user, amount).send({from: from}).then((res: any) => {
            console.log(res);
            // Check status
            if(res.status == true){
                openNotificationWithIcon('Reserve','Minted Reserved Tokens Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Reserve','Failed to Mint Reserved Tokens', 'error');
            }
        });
    } catch(error) {
        console.log(error);
    }
}

/**
 * @notice Mint `amount` reserved tokens of sender to `to`.
 */
export function mintReserved(erc721Contract: Contract, to: string, amount: number, from: string) {
    openNotificationWithIcon('Reserve','Minting Reserved Tokens', 'info');
    try {
        erc721Contract.methods.mintReserved(to, amount).send({from: from, value: 0}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Reserve','Minted Reserved Tokens Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Reserve','Failed to Mint Reserved Tokens', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Mint reserved tokens of sender to `to`, one token each.
 */
export function mintReservedTo(erc721Contract: Contract, to: string[], from: string) {
    openNotificationWithIcon('Reserve','Minting Reserved Tokens', 'info');
    try {
        erc721Contract.methods.mintReservedTo(to).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Reserve','Minted Reserved Tokens Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Reserve','Failed to Mint Reserved Tokens', 'error');
            }
        });
    } catch (error) {
        console.log(error)   
    }
}

