import { Contract } from "web3-eth-contract";
import { openNotificationWithIcon } from "../../../components/Notification";

// Add 'amount' whitelist spots to the wallet address 'address'
export function grantWhitelistSpots(erc721Contract: Contract, to: String, amount: number, from: string) {
    openNotificationWithIcon('Use', 'Granting Whitelist Spots', 'info');
    try {
        erc721Contract.methods.grantWhitelistSpots(to, amount).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Use','Granted Whitelist Spots Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Use', 'Granting Whitelist Spots Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

// Adds amount whitelist spots to each of the wallet addresses
export function grantWhitelistSpotsBatch(erc721Contract: Contract, to: String[], amounts: number[], from: string) {
    openNotificationWithIcon('Use', 'Granting Whitelist Spots', 'info');
    try {
        erc721Contract.methods.grantWhitelistSpots(to, amounts).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Use','Granted Whitelist Spots Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Use', 'Granting Whitelist Spots Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}