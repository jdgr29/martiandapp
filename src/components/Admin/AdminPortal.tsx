// import { Tabs } from "antd";
// import { useContext, useEffect, useState } from "react";
// import Web3Context from "../../modules/core/web3/Web3Context";
// import ConnectWalletButton from "../Account/ConnectWalletButton";
// import ConfigureTab from "./ConfigureTab";
// import EventDetails from "./EventDetails";
// import MintTab from "./MintTab";
// import RealTimeUsage from "./RealTimeUsage";
// import RecoverTab from "./RecoverTab";
// import ReserveTab from "./ReserveTab";
// import WhitelistTab from "./WhitelistTab";

// // TODO!! ENSURE ONLY ADMIN CAN SEE 

// const AdminPortal = () => {
//     const [selectedMartianEventId, setSelectedMartianEventId] = useState("");
//     const [connectedToEvent, setConnectedToEvent] = useState(false);

//     const web3Context = useContext(Web3Context);

//     const [martianEvent, fetchMartianEvent, martianEventFetchError, ticketContract, contractAddress] = useMartianEvent();

//     useEffect(() => {
//         if(martianEvent) {
//             setConnectedToEvent(true)
//         } else {
//             setConnectedToEvent(false)
//         }
//     },[martianEvent]);

//     useEffect(() => {
//         if(connectedToEvent) {
//             // Check if connected wallet is admin of the contract

//         }
//     },[connectedToEvent]);


//     const connectToEvent = () => {
//         if(selectedMartianEventId) {
//             // Fetch event details
//             fetchMartianEvent(selectedMartianEventId);
//         }
//     };


//     return(
//         <div>
//             <h2 className="text-center mt-6">Choose an event to connect with by inputting an selecting an event id.</h2>
//             <div className="flex flex-column text-center justify-center m-10">
//                     <ConnectWalletButton size={"large"} showUserDetails={false}/>
//                     <input type="number" onChange={(e) => setSelectedMartianEventId(e.target.value)}/>
//                     <button className="bg-white text-black p-5" onClick={connectToEvent}>Connect to Event</button>
//             </div>
//             <div className="text-white m-10">
//             {(ticketContract && web3Context.address) ?
//             <div>
//                 <EventDetails contract={ticketContract} web3Context={web3Context} contractAddress={contractAddress}/>
//                 {contractAddress && <RealTimeUsage contract={ticketContract} web3Context={web3Context} ticketContractAddress={contractAddress}/>}
//                 <Tabs defaultActiveKey="1" style={{color: 'white'}}>
//                     <Tabs.TabPane tab="Reserve" key="1">
//                         <ReserveTab contract={ticketContract} web3Context={web3Context}/>
//                     </Tabs.TabPane>
//                     <Tabs.TabPane tab="Recover" key="2" style={{}}>
//                         <RecoverTab contract={ticketContract} web3Context={web3Context}/>
//                     </Tabs.TabPane>
//                     <Tabs.TabPane tab="Whitelist" key="3">
//                         <WhitelistTab contract={ticketContract} web3Context={web3Context}/>
//                     </Tabs.TabPane>
//                     <Tabs.TabPane tab="Mint" key="4">
//                         <MintTab contract={ticketContract} web3Context={web3Context}/>
//                     </Tabs.TabPane>
//                     <Tabs.TabPane tab="Configure" key="5" style={{}}>
//                         <ConfigureTab contract={ticketContract} web3Context={web3Context}/>
//                     </Tabs.TabPane>
                    
//                 </Tabs>
//             </div>
//             :
//             <h1>Connect wallet and load an event.</h1>
//             }
//             </div>
//         </div>
//     );
// }

// export default AdminPortal

export {}