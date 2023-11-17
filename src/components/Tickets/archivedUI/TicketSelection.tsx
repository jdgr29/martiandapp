import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import useOwnedMartianTicketIds from "../../hooks/tickets/useOwnedMartianTicketIds";
import Select from 'react-select';
import { runBatchTicketUsageWithSystem } from "../../utils/runBatchTicketUsageWithSystem";
import Web3Context from "../../context/Web3Context";
import { used } from "../../core/erc721/use";
import { ERC721TicketContract } from "../../core/web3/abi";
import LoadingView from "../LoadingView";
import SuccessfulTicketUsage from "./SuccessfulTicketUsage";
import { useRouter } from "next/router";
import Web3 from "web3";

const TicketSelection = ({
    ticketContractAddress,
    setShowTicketModal,
} : {
    ticketContractAddress: string,
    setShowTicketModal: Function,
}) => {
    const router = useRouter();

    const [showTicketSuccess, setShowTicketSuccess] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<{label: any, value: number}[]>([]);

    // The tickets that are not used and owned by address
    const [validTicketIds, setValidTicketIds] = useState<number[]>([]);
    const [usingTickets, setUsingTickets] = useState(false);

    const [ticketIds, fetchingTicketIds, fetchingTicketIdsError, fetchOwnedTicketIds] = useOwnedMartianTicketIds(ticketContractAddress);
    //const [selectedIds, setSelectedIds] = useState<number[]>([]);


    const web3Props = useContext(Web3Context);

    // only show valid ticket ids
    useEffect(() => {
        validateTickets();
    });


    async function validateTickets() {
        if(web3Props.provider && web3Props.address && ticketIds && ticketIds.length > 0) {

            const web3 = new Web3(web3Props.provider as any);
            
            let validTicketIdsFromTickets: number[] = [];
            const ticketContractInstance = ERC721TicketContract(web3, ticketContractAddress);
            await Promise.all( ticketIds!.map(async (id) => {
                // check if ticket is used
                const isUsed = await used(ticketContractInstance, id, web3Props.address!);
                if(!isUsed) {
                    validTicketIdsFromTickets.push(id);
                }
                console.log('done');
            }));
            console.log(validTicketIdsFromTickets)
            setValidTicketIds(validTicketIdsFromTickets);
        }
    }

    
    function closeModal() {
        setShowTicketModal(false);
        setSelectedOptions([]);
    }

    // Use the selected ticket ids
    const useTickets = async () => {
        let listOfIds: number[] = [];
        selectedOptions.map((opt) => {
            console.log(opt);
            listOfIds.push(opt.value);
        })
        setUsingTickets(true);
        await runBatchTicketUsageWithSystem(listOfIds, web3Props, ticketContractAddress);
        setUsingTickets(false);
        // Ticket Usage screen
        setShowTicketSuccess(true);
        router
        //TODO Add here the screen to tweet martians are real 
        // --
        router.push('/events/success');

        closeModal();
    }

    // useEffect(() => {
    //     if(ticket) {}
    // }, [ticketIds]);

    // const addRemoveToSelected = (index: number) => {
    //     let newSelectedIds: number[] = selectedIds;
    //     console.log(newSelectedIds);

    //     const found = newSelectedIds.indexOf(index);
    //     console.log(found);
    //     if(found != -1) { // remove!
    //         const result = newSelectedIds.filter((id) => {
    //             return id != index;
    //         });
    //         setSelectedIds(result);
    //     } else { // Add!
    //         newSelectedIds.push(index);
    //         setSelectedIds(newSelectedIds);
    //     }
    // }
    if(showTicketSuccess) {
        return(
        <>
            <SuccessfulTicketUsage/>
        </>
        );
    }


    if(usingTickets) {
        return(
            <>
            <div className="flex justify-center text-center flex-col">
                <h2 className="text-2xl mt-4">Using Ticket</h2>
                <h2 className="text-2xl">Please Wait...</h2>
                <LoadingView/>
            </div>
            </>
        )
    }


    return(
        <div className="min-w-screen h-3/4 animated fadeIn faster absolute top-0 flex z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                {/* <div className="absolute bg-black opacity-80 inset-0 z-0"></div> */}
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-black ">
                <div className="">
                    <div className="text-center p-5 flex-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 -m-1 flex items-center text-indigo-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-l text-gray-500 p-8">Please choose a ticket to use</p>    
                    </div>
                    {ticketIds && <SelectionGrid  ticketIds={validTicketIds} setSelectedOptions={setSelectedOptions}/>}
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <h1 className="text-center text-white mb-2">{selectedOptions.length} selected</h1>
                        <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                                onClick={() => {closeModal()}}
                        >
                            Cancel
                        </button>
                        {selectedOptions && selectedOptions.length > 0 ?
                        <button className="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full active:shadow-lg active:bg-green-600 hover:shadow-lg hover:bg-green-600"
                                onClick={useTickets}>Use Selected</button>
                        :
                        <button disabled className="mb-2 md:mb-0 bg-gray-500 border border-gray-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full active:shadow-lg active:bg-gray-600 hover:shadow-lg hover:bg-gray-600"
                                onClick={() => {}}>Use Selected</button>}
                    </div>
                </div>
                </div>
        </div>
    );
}
{/* <SelectionGrid  ticketIds={ticketIds} addRemoveToSelected={addRemoveToSelected} selectedIds={selectedIds}/> */}
const SelectionGrid = ({
    ticketIds,
    setSelectedOptions,
} : {
    ticketIds: number[],
    setSelectedOptions: Function,
}) => {
    const [options, setOptions] = useState<any[]>([]);

    useEffect(() => {
        let newOptions: any[] = [];
        ticketIds.map((id) => {
            const opt = { // TODO!!!! NEED TO SHOW INDIVIDUAL PICTURES NOT SAME ONE
                label: <div><h1 className="text-black">{id}</h1><img loading="lazy" className="flex justify-center text-center" src="https://ipfs.io/ipfs/bafybeigwjd662alzjdyxfj36q3ar3tvlbe56sco7a5hgzbvqow5vchvv7m/Stamp_Render_1.jpg" height={80} width={80}/></div>,
                value: id,
            }
            newOptions.push(opt);
        })
        setOptions(newOptions);
        
    }, [ticketIds]);

    return(
    // <div className="grid grid-cols-2 justify-center overflow-auto">
        
    //     {ticketIds?.map((id) => {
    //         const customClassName = selectedIds.includes(id) ? "border-white border-6 rounded-lg m-2 bg-white" : "border-white border-6 rounded-lg m-2"
    //         return(
    //             <button key={id} className={customClassName}
    //                 onClick={() => addRemoveToSelected(id)}>
    //             <h1 className="text-center text-black">{id}</h1>
    //             <img className="w-fit" src="https://ipfs.io/ipfs/bafybeigwjd662alzjdyxfj36q3ar3tvlbe56sco7a5hgzbvqow5vchvv7m/Stamp_Render_1.jpg" width={100} height={100}/>
    //             </button>
    //         );
    //     })}
    // </div>
    <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={{}}
        onChange={(e) => {setSelectedOptions(e as []); console.log(e)}}
    />
    );
}

export default TicketSelection