import { Contract } from "web3-eth-contract";


export async function getPrice(erc721Contract: Contract, from: string) : Promise<number|undefined> {
    try {
        const price = await erc721Contract.methods.price().call({from: from}).then((res: any) => {
            console.log(res);
            return res
        });
        return price
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

export async function getTotalSupply(erc721Contract: Contract, from: string) : Promise<number|undefined> {
    try {
        const supply = await erc721Contract.methods.maxSupply().call({from: from}).then((res: any) => {
            return res
        });
        return supply
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

export async function getMaxMintPerTx(erc721Contract: Contract, from: string) : Promise<number|undefined> {
    try {
        const price = await erc721Contract.methods.maxMintPerTx().call({from: from}).then((res: any) => {
            return res
        });
        return price
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

export async function getSymbol(erc721Contract: Contract, from: string) : Promise<string|undefined> {
    try {
        const symbol = await erc721Contract.methods.symbol().call({from: from}).then((res: any) => {
            return res
        });
        return symbol
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

export async function getName(erc721Contract: Contract, from: string) : Promise<string|undefined> {
    try {
        const name = await erc721Contract.methods.name().call({from: from}).then((res: any) => {
            return res
        });
        return name
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

export async function getMaxReservedSupply(erc721Contract: Contract, from: string) : Promise<number|undefined> {
    try {
        const supply = await erc721Contract.methods.maxReserved().call({from: from}).then((res: any) => {
            return res
        });
        return supply
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

export async function getWhitelistSpotsOpen(erc721Contract: Contract, from: string) : Promise<number|undefined> {
    try {
        const spots = await erc721Contract.methods.whitelistSpotsOpen().call({from: from}).then((res: any) => {
            return res
        });
        return spots
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

export async function getWhitelistSpotsTotal(erc721Contract: Contract, from: string) : Promise<number|undefined> {
    try {
        const spots = await erc721Contract.methods.whitelistSpotsTotal().call({from: from}).then((res: any) => {
            return res
        });
        return spots
    } catch(error) {
        console.log(error)

    }
    return undefined
}

export async function getWhitelistOnly(erc721Contract: Contract, from: string) : Promise<boolean|undefined> {
    try {
        const res = await erc721Contract.methods.whitelistOnly().call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch(error) {
        console.log(error)

    }
    return undefined
}

export async function getUseable(erc721Contract: Contract, from: string) : Promise<boolean|undefined> {
    try {
        const res = await erc721Contract.methods.useable().call({from: from}).then((res: any) => {
            console.log(res)
            return res
        });
        return res
    } catch(error) {
        console.log(error)

    }
    return undefined
}

export async function getMintActive(erc721Contract: Contract, from: string) : Promise<boolean|undefined> {
    try {
        const res = await erc721Contract.methods.mintActive().call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch(error) {
        console.log(error)

    }
    return undefined
}

export async function getPreminted(erc721Contract: Contract, from: string) : Promise<number|undefined> {
    try {
        const res = await erc721Contract.methods.preminted().call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch(error) {
        console.log(error)

    }
    return undefined
}

export async function getPaymentReceiver(erc721Contract: Contract, from: string) : Promise<string|undefined> {
    try {
        const res = await erc721Contract.methods.paymentReceiver().call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch(error) {
        console.log(error)

    }
    return undefined
}

export async function getOwner(erc721Contract: Contract, from: string) : Promise<string|undefined> {
    try {
        const res = await erc721Contract.methods.owner().call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch(error) {
        console.log(error)

    }
    return undefined
}

export async function getTokenURI(
    erc721Contract: Contract,
    tokenId: number,
    from: string
) : Promise<string|undefined> {
    try {
        const res = await erc721Contract.methods.tokenURI(tokenId).call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch(error) {
        console.log(error)
    }
    return undefined
}


/**
 * @notice Returns all tokenIds owned by `_owner`
 * @param _owner: owner
 */
export async function tokensOfOwner(erc721Contract: Contract, owner: string, from: string) : Promise<number[]|undefined>{
    console.log('called tokensofowenr');
    try {
        const res = erc721Contract.methods.tokensOfOwner(owner).call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch(error) {
        console.log(error)
        console.log('^^^^dfjkhgjksdfhkghkj');
    }
    return undefined
}

/**
 * @notice Returns a list of token IDs owned by `user` given a `cursor` and `size` of its token list
 * @param user: address
 * @param cursor: cursor
 * @param size: size
 */
export async function tokensOfOwnerBySize(erc721Contract: Contract, user: string, cursor: number, size: number, from: string) : Promise<number[]|undefined>{
    try {
        const res = erc721Contract.methods.tokensOfOwnerBySize(user, cursor, size).call({from: from}).then((res: any) => {
            return res
        });
        return res
    } catch (error) {
        console.log(error)
    }
    return undefined
}