import { Contract } from "web3-eth-contract";
import { openNotificationWithIcon } from "../../../components/Notification";

/**
 * @notice Use a ticket
 */
 export async function use(erc721Contract: Contract, _tokenId: number, from: string) : Promise<boolean> {
    openNotificationWithIcon('Transfer','Using Ticket', 'info');
    try {
        const res = await erc721Contract.methods.use(_tokenId).send({from: from}).then((res: any) => {
            console.log(res);
            console.log('omg');

            if(res.status == true){
                openNotificationWithIcon('Use','Used Ticket Successfully', 'success');
                return true;
            } else {
                openNotificationWithIcon('Use','Use Ticket Failed', 'error');
            }
            return false;
        });
        return res
    } catch (error) {
        console.log(error)
    }
    return false;
}

// check whether a ticket has been used
export async function used(erc721Contract: Contract, tokenId: number, from: string) : Promise<boolean|undefined> {
    try {
        const res = await erc721Contract.methods.ticketUsed(tokenId).call({from: from}).then((res: any) => {
            console.log(res)
            return res
        });
        return res
    } catch(error) {
        console.log(error)

    }
    return undefined
}