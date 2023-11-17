// import { useContext, useEffect, useState } from "react";
// import { Contract } from "web3-eth-contract";
// import { Web3ContextProps } from "../../context/Web3Context";
// import { getMaxMintPerTx, getMaxReservedSupply, getMintActive, getName, getOwner, getPaymentReceiver, getPreminted, getPrice, getSymbol, getTotalSupply, getUseable, getWhitelistOnly, getWhitelistSpotsOpen, getWhitelistSpotsTotal } from "../../core/erc721/view";

// function EventDetails({contract, web3Context, contractAddress} : {contract: Contract, web3Context: Web3ContextProps, contractAddress: string | undefined}) {

//     const [price, setPrice] = useState<number|null>(null);
//     const [totalSupply, setTotalSupply] = useState<number|null>(null);
//     const [maxMintPerTx, setMaxMintPerTx] = useState<number|null>(null);
//     const [symbol, setSymbol] = useState<string|null>(null);
//     const [name, setName] = useState<string|null>(null);

//     const [maxReservedSupply, setMaxReservedSupply] = useState<number|null>(null);

//     const [whitelistSpotsTotal, setWhitelistSpotsTotal] = useState<number|null>(null);
//     const [WhitelistSpotsOpens, setWhitelistSpotsOpen] = useState<number|null>(null);

//     const [whitelistOnly, setWhitelistOnly] = useState<boolean|null>(null);
//     const [useable, setUsable] = useState<boolean|null>(null);
//     const [mintActive, setMintActive] = useState<boolean|null>(null);

//     const [preminted, setPreminted] = useState<number|null>(null);
//     const [paymentReceiver, setPaymentReceiver] = useState<string|null>(null);

//     const [owner, setOwner] = useState<string|null>(null);

//     // Refresh when screen opens
//     useEffect(() => {refresh()});

//     // Get info again
//     const refresh = async () => {
//         if(contract && web3Context.address) {
//             const from = web3Context.address;

//             const _price = await getPrice(contract, from);
//             if(_price) { setPrice(_price)}

//             const _maxMintPerTx = await getMaxMintPerTx(contract, from);
//             if(_maxMintPerTx) { setMaxMintPerTx(_maxMintPerTx) }

//             const _totalSupply = await getTotalSupply(contract, from);
//             if(_totalSupply) { setTotalSupply(_totalSupply) }

//             const _symbol = await getSymbol(contract, from);
//             if(_symbol) { setSymbol(_symbol) }

//             const _name = await getName(contract, from);
//             if(_name) { setName(_name) }

//             const _maxReservedSupply = await getMaxReservedSupply(contract, from);
//             if(_maxReservedSupply) { setMaxReservedSupply(_maxReservedSupply) }

//             const _whitelistSpotsTotal = await getWhitelistSpotsTotal(contract, from);
//             if(_whitelistSpotsTotal) { setWhitelistSpotsTotal(_whitelistSpotsTotal) }

//             const _whitelistSpotsOpen = await getWhitelistSpotsOpen(contract, from);
//             if(_whitelistSpotsOpen) { setWhitelistSpotsOpen(_whitelistSpotsOpen) }

//             const _whitelistOnly = await getWhitelistOnly(contract, from);
//             if(_whitelistOnly) { setWhitelistOnly(_whitelistOnly) }

//             const _usable = await getUseable(contract, from);
//             console.log('is' + _usable);
//             if(_usable) { setUsable(_usable) }

//             const _mintActive = await getMintActive(contract, from);
//             if(_mintActive) { setMintActive(_mintActive) }

//             const _preminted = await getPreminted(contract, from);
//             if(_preminted) { setPreminted(_preminted) }

//             const _paymentReceiver = await getPaymentReceiver(contract, from);
//             if(_paymentReceiver) { setPaymentReceiver(_paymentReceiver) }

//             const _owner = await getOwner(contract, from);
//             if(_owner) { setOwner(_owner) }
//         }
//     }

//     return(
//         <div>
//             <h3>Price: {price}</h3>
//             <h3>Total Supply: {totalSupply}</h3>
//             <h3>Max Mint Per Tx: {maxMintPerTx}</h3>
//             <h3>Symbol: {symbol}</h3>
//             <h3>Name: {name}</h3>
//             <h3>Max Reserved Supply: {maxReservedSupply}</h3>
//             <h3>Whitelist Spots Total: {whitelistSpotsTotal}</h3>
//             <h3>Whitelist Spots Open: {WhitelistSpotsOpens}</h3>
//             <h3>Whitelist Only? {String(whitelistOnly)}</h3>
//             <h3>Usable? {String(useable)}</h3>
//             <h3>Mint Is Active? {String(mintActive)}</h3>
//             <h3>Preminted Amount: {preminted}</h3>
//             <h3>Payment Receiver: {paymentReceiver}</h3>
//             <h3>Owner: {owner}</h3>
//             <h3>Contract: {contractAddress}</h3>
//         </div>
//     )
// }

// export default EventDetails

export {}