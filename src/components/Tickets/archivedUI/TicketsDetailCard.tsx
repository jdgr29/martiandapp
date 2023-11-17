import { Tag } from "antd";
import { useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";
import { Web3ContextProps } from "../../context/Web3Context";
import { getMaxMintPerTx, getMaxReservedSupply, getMintActive, getName, getOwner, getPaymentReceiver, getPreminted, getPrice, getSymbol, getTotalSupply, getUseable, getWhitelistOnly, getWhitelistSpotsOpen, getWhitelistSpotsTotal } from "../../core/erc721/view";
import { MartianEvent } from "../../types/types";

function TicketsDetailCard({martianEvent, contract, web3Context, contractAddress} : {martianEvent: MartianEvent, contract: Contract, web3Context: Web3ContextProps, contractAddress: string}) {

    const [price, setPrice] = useState<number|null>(null);
    const [totalSupply, setTotalSupply] = useState<number|null>(null);
    const [maxMintPerTx, setMaxMintPerTx] = useState<number|null>(null);
    const [symbol, setSymbol] = useState<string|null>(null);
    const [name, setName] = useState<string|null>(null);

    const [maxReservedSupply, setMaxReservedSupply] = useState<number|null>(null);

    const [whitelistSpotsTotal, setWhitelistSpotsTotal] = useState<number|null>(null);
    const [WhitelistSpotsOpens, setWhitelistSpotsOpen] = useState<number|null>(null);

    const [whitelistOnly, setWhitelistOnly] = useState<boolean|null>(null);
    const [useable, setUsable] = useState<boolean|null>(null);
    const [mintActive, setMintActive] = useState<boolean|null>(null);

    const [preminted, setPreminted] = useState<number|null>(null);
    const [paymentReceiver, setPaymentReceiver] = useState<string|null>(null);

    const [owner, setOwner] = useState<string|null>(null);

    // Refresh when screen opens
    useEffect(() => {refresh()});

    // Get info again
    const refresh = async () => {
        console.log(contract);
        console.log(web3Context.address);
        if(contract && web3Context.address) {
            const from = web3Context.address;

            const _price = await getPrice(contract, from);
            if(_price) { setPrice(_price)}

            const _totalSupply = await getTotalSupply(contract, from);
            console.log('successful ' + _totalSupply);
            if(_totalSupply) { setTotalSupply(_totalSupply) }

            const _maxMintPerTx = await getMaxMintPerTx(contract, from);
            if(_maxMintPerTx) { setMaxMintPerTx(_maxMintPerTx) }

            const _symbol = await getSymbol(contract, from);
            if(_symbol) { setSymbol(_symbol) }

            const _name = await getName(contract, from);
            if(_name) { setName(_name) }

            const _maxReservedSupply = await getMaxReservedSupply(contract, from);
            if(_maxReservedSupply) { setMaxReservedSupply(_maxReservedSupply) }

            const _whitelistSpotsTotal = await getWhitelistSpotsTotal(contract, from);
            if(_whitelistSpotsTotal) { setWhitelistSpotsTotal(_whitelistSpotsTotal) }

            const _whitelistSpotsOpen = await getWhitelistSpotsOpen(contract, from);
            if(_whitelistSpotsOpen) { setWhitelistSpotsOpen(_whitelistSpotsOpen) }

            const _whitelistOnly = await getWhitelistOnly(contract, from);
            if(_whitelistOnly) { setWhitelistOnly(_whitelistOnly) }

            const _usable = await getUseable(contract, from);
            if(_usable) { setUsable(_usable) }

            const _mintActive = await getMintActive(contract, from);
            if(_mintActive) { setMintActive(_mintActive) }

            const _preminted = await getPreminted(contract, from);
            if(_preminted) { setPreminted(_preminted) }

            const _paymentReceiver = await getPaymentReceiver(contract, from);
            if(_paymentReceiver) { setPaymentReceiver(_paymentReceiver) }

            const _owner = await getOwner(contract, from);
            if(_owner) { setOwner(_owner) }
        }
    }

    return(
        <>
        <div className="bg-black py-4">
            <div className="mb-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
            </div>
        </div>
        </>
    )
}

export default TicketsDetailCard