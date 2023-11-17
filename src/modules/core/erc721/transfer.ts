import { Contract } from "web3-eth-contract";
import { openNotificationWithIcon } from "../../../components/Notification";

/*
* Batch transfer NFTs
*/
export function safeBatchTransferFrom(erc721Contract: Contract, _from: string, _to: string, tokenIds: number[], sender:string) {
    openNotificationWithIcon('Transfer','Minted Reserved Tokens Successfully', 'info');
    try {
        erc721Contract.methods.safeBatchTransferFrom(_from, _to, tokenIds).send({from: sender}).then((res: any) => {
            console.log(res);
    
            if(res.status == true){
                openNotificationWithIcon('Transfer','Minted Reserved Tokens Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Transfer','Minted Reserved Tokens Successfully', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}