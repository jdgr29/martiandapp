import { Dispatch, SetStateAction } from "react";

const UseTicketModal = ({setShowTicketModal} : {setShowTicketModal: Function}) => {

    function closeModal() {
        setShowTicketModal(false);
    }

    return(
        <div className="min-w-screen h-max animated fadeIn faster absolute bottom-0 left-0 flex m-2 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                {/* <div className="absolute bg-black opacity-80 inset-0 z-0"></div> */}
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <div className="">
                    <div className="text-center p-5 flex-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-sm text-gray-500 p-8">Please choose your ticket to use</p>    
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                                onClick={() => {closeModal()}}
                        >
                            Cancel
                        </button>
                        <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default UseTicketModal