import { JSXElementConstructor, Key, ReactElement, ReactFragment, useContext, useEffect, useState } from "react";
import { Contract } from "web3-eth-contract";
import { getMaxMintPerTx, getMaxReservedSupply, getMintActive, getName, getOwner, getPaymentReceiver, getPreminted, getPrice, getSymbol, getTotalSupply, getUseable, getWhitelistOnly, getWhitelistSpotsOpen, getWhitelistSpotsTotal } from "../modules/core/erc721/view";
import { Skeleton, Tag } from "antd";
import { FaGem, FaTicketAlt } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { Web3ContextProps } from "../modules/core/web3/Web3Context";
import { EventDetails } from "../modules/events/types";


function EventDetailsCard({martianEvent, contract, web3Context, contractAddress} : {martianEvent: EventDetails, contract: Contract, web3Context: Web3ContextProps, contractAddress: string}) {

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

    const [eventDate, setEventDate] = useState<Date | null>(null);

    useEffect(() => {
        if(martianEvent) {
            setEventDate(new Date(martianEvent.startDate))
        }
    },[martianEvent]);

    // Refresh when screen opens
    useEffect(() => {refresh()}, []);

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
                <div className="flex flex-row lg:text-center mb-6">
                    <div className="">
                        <h2 className="text-lg font-semibold text-indigo-600">MMMC</h2>
                        <p className="mt-2 mb-2 text-3xl font-bold leading-8 tracking-tight text-white-700 sm:text-4xl">{martianEvent.title}</p>
                        <div className="flex flex-row">
                            {martianEvent.tags?.map((tag: string) => {
                                return <Tag key={tag} color="#2db7f5" className="m-2">{tag}</Tag>
                            })}
                        </div>
                    </div>
                    <div className="flex right-0 mr-10 mt-10">
                        {eventDate ? 
                            <div className="m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <div className="">
                                    <p className="">{eventDate.getDay()} {eventDate.getMonth()} {eventDate.getFullYear()}</p>
                                    <div className="m-1">
                                    </div>
                                </div>
                            </div>
                            :
                            <Skeleton active/>
                        }
                    </div>
                </div>
                <div className="bg-gray-800 py-3 px-3 w-80 rounded-lg ">
                    {martianEvent.description && 
                        <p style={{whiteSpace:'pre-line'}} className="mt-2 max-w-2xl text-l text-gray-200 lg:mx-auto">{martianEvent.description}</p>
                    }
                </div>

                <div className="mt-10 h-max mb-30">
                <dl className="space-y-10 mb-2 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                    <div className="relative">
                    <p className="mt-2 mb-4 text-xl font-regular leading-8 tracking-tight text-white-700 sm:text-4xl">Tickets</p>
                    <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">

                        <FaTicketAlt className="h-5 w-5"/>
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-white-700">Ticket Supply</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{totalSupply}</dd>
                    </div>

                    <div className="relative">
                    <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">

                        <FaGem className="h-5 w-5"/>
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-white-700">Mint Price</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{price}</dd>
                    </div>

                    <div className="relative">
                    <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">

                        <AiFillFile className="h-5 w-5"/>
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-white-700">Contract Address</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 text-ellipsis">{martianEvent.ticketContractAddress.substring(0,16)}...</dd>
                    </div>
                </dl>
                </div>
            </div>
            </div>
        </>
    )
}

export default EventDetailsCard