import { Contract } from "web3-eth-contract";
import { openNotificationWithIcon } from "../../../components/Notification";
import { getPrice } from "./view";

/**
 * @notice Mint `_amount` nfts.
 * @param _amount: amount of nfts to mint
 */
 export async function mint(erc721Contract: Contract, amount: number, from: string) {
    openNotificationWithIcon('Mint','Minting', 'info');

    try {
        const price = await getPrice(erc721Contract, from);

        const totalValue = price!*amount;

        erc721Contract.methods.mint(amount).send({from: from, value: totalValue}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Mint','Minted Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Mint','Minting Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Mint `_amount` nfts for `_to`.
 * @param _to: wallet to mint nfts to
 * @param _amount: amount of nfts to mint
 * @dev Used by other contracts to mint nfts for user
 */
 export function mintFor(erc721Contract: Contract, to: string, amount: number, from: string) {
    openNotificationWithIcon('Mint','Minting', 'info');
    try { // todo! add value here
        erc721Contract.methods.mintFor(to, amount).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Mint','Minted Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Mint','Minting Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}

/**
 * @notice Premint `_amount` nfts for `_to`.
 * @param to: wallet to mint nfts to
 * @param amount: amount of nfts to mint
 * @dev Used by owner to premint nfts for marketplaces which require preminted tokens.
 */
// todo!! needs fixing hope3fully easy
 export function premint(erc721Contract: Contract, to: string, amount: number, from: string) {
    openNotificationWithIcon('Mint','Minting', 'info');
    try {
        erc721Contract.methods.premint(to, amount).send({from: from}).then((res: any) => {
            console.log(res);

            if(res.status == true){
                openNotificationWithIcon('Mint','Minted Successfully', 'success');
                return;
            } else {
                openNotificationWithIcon('Mint','Minting Failed', 'error');
            }
        });
    } catch (error) {
        console.log(error)
    }
}