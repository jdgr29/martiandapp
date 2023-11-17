import { Contract } from "web3-eth-contract";
import { openNotificationWithIcon } from "../../../components/Notification";

/**
 * @notice Forward BNB which ended up in this contract by accident to paymentReceiver. Only owner.
 */
export function setPrice(erc721Contract: Contract, price: number, from: string) {
    openNotificationWithIcon('Configure','Setting Price', 'info');
    try {
        erc721Contract.methods.setPrice(price).send({from: from}).then((res: any) => {
            console.log(res);
    
            if(res.status == true){
                openNotificationWithIcon('Configure','Set Price Successful', 'success');
                return;
            } else {
                openNotificationWithIcon('Configure','Set Price Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * @notice Set mintActive to `_mintActive`. Only callable by owner.
 */
 export function setMintActive(erc721Contract: Contract, _mintActive: boolean, from: string) {
    openNotificationWithIcon('Configure','Setting Mint Active/Disactive', 'info');
    try {
        erc721Contract.methods.setMintActive(_mintActive).send({from: from}).then((res: any) => {
            console.log(res);
    
            if(res.status == true){
                openNotificationWithIcon('Configure','Set Mint Active/Disactive Successful', 'success');
                return;
            } else {
                openNotificationWithIcon('Configure','Set Mint Active/Disactive Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Set usable to `_usable`. Only callable by owner.
 */
 export function setUsable(erc721Contract: Contract, _usable: boolean, from: string) {
    openNotificationWithIcon('Configure','Setting Usable', 'info');
    try {
        erc721Contract.methods.setUsable(_usable).send({from: from}).then((res: any) => {
            console.log(res);
    
            if(res.status == true){
                openNotificationWithIcon('Configure','Set Usable Successful', 'success');
                return;
            } else {
                openNotificationWithIcon('Configure','Set Usable Failed', 'error');           
            }
        });
    } catch (error) {
        console.log(error)
    }
}

// Sets whether only whitelist holders can mint the NFTs
export function setWhitelistOnly(erc721Contract: any, whitelistOnly: boolean, from: string) {
    openNotificationWithIcon('Use', 'Setting Whitelist Only', 'info');
    try {
        erc721Contract.methods.setWhitelistOnly(whitelistOnly).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Use','Set Whitelist Only Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Use','Set Whitelist Only Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Set payment receiver to `_paymentReceiver`. Only callable by owner.
 */
 export function setPaymentReceiver(erc721Contract: Contract, _paymentReceiver: string, from: string) {
    openNotificationWithIcon('Configure','Setting Payment Receiver', 'info');
    try {
        erc721Contract.methods.setPaymentReceiver(_paymentReceiver).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Configure','Set Payment Receiver', 'success');
                return;
            } else {
                openNotificationWithIcon('Configure','Set Payment Receiver Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Set provenance once it's calculated.
 */
 export function setProvenanceHash(erc721Contract: Contract, provenanceHash: string, from: string) {
    openNotificationWithIcon('Configure','Setting Provenance Hash', 'info');
    try{
        erc721Contract.methods.setProvenanceHash(provenanceHash).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Configure','Set Provenance Hash Successful', 'success');
                return;
            } else {
                openNotificationWithIcon('Configure','Set Provenance Hash Failed', 'error');
            }
        });
    } catch(error) {
        console.log(error)
    }
}

/**
 * @notice Allows the owner to set the base URI to be used for all not revealed token IDs
 * @param _uri: base URI
 * @dev Callable by owner
*/
 export function setBaseUrl(erc721Contract: Contract, _uri: string, from: string) {
    openNotificationWithIcon('Configure','Setting Base URL', 'info');
    try {
        erc721Contract.methods.setBaseURI(_uri).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Configure','Set Base URL Successful', 'success');
                return;
            } else {
                openNotificationWithIcon('Configure','Set Base URL Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}