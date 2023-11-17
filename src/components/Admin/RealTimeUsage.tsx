// import { useState } from "react";
// import { MartianEvent } from "../../types/types";
// import {Contract} from "web3-eth-contract";
// import { Web3ContextProps } from "../../context/Web3Context";
// import { SupabaseResult } from "../../core/db/supabase";
// import LoadingView from "../LoadingView";

// function RealTimeUsage({
//     contract,
//     web3Context,
//     ticketContractAddress,
// } : {
//     contract: Contract,
//     web3Context: Web3ContextProps,
//     ticketContractAddress: string,
// }) {
//     // recoverNonFungibleToken

//     // recoverToken
//     const [nameSearch, setNameSearch] = useState("");

//     // usage result
//     const [usageResult, setUsageResult] = useState<{name: string, address:string}[]>([]);
//     const [usageFetchError, setUsageFetchError] = useState(false);
//     const [fetchingUsers, setFetchingUsers] = useState(false);

//     // Get mmmc users that hace used a ticket with the specified ticket address
//     const searchForAttendees = () => {
//         setFetchingUsers(true);
//         if(nameSearch != "") {
//             fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/searchAttendees?ticketaddress=${ticketContractAddress}&namestring=${nameSearch}`)
//                 .then(async (users) => await users.json())
//                 .then((res: SupabaseResult) => {
//                     console.log('here');
//                     console.log(res);
//                     if(res.success) {
//                         setUsageFetchError(false);
//                         if((res.result as Array<{name: string, address:string}>).length > 0) {
//                             console.log('good');
//                             setUsageResult(res.result);
//                         } else {
//                             console.log('ohno');
//                             setUsageResult([]);
//                         }
//                     } else {
//                         setUsageFetchError(true);
//                     }
//                 });
//         } else {
//             setUsageResult([]);
//         }
//         setFetchingUsers(false);
//     }

//     if(fetchingUsers) {
//         return(<LoadingView/>)
//     }

//     return(
//         <div>
//             <div>
//                 <h1 className="text-xl m-6">Search for MMMC Users</h1>
//                 <h2>Search for Attendees</h2>
//                 <input type="text" className="" onChange={(e) => {setNameSearch(e.target.value)}}/>
//                 <input type="submit" onClick={() => searchForAttendees()}/>
//             </div>
//             {fetchingUsers && <h1>Loading please wait...</h1>}
//             {usageFetchError && <h1>Error while fetching please try again ${usageResult.length}</h1>}
//             {usageResult && usageResult.map((res) => {
//                 return <div key={res.name} className="bg-green-800 w-fit">
//                     <h2 className="m-1 mt-2">WALLET_ADDRESS: {res.address}</h2>
//                     <h2 className="m-1">NAME: {res.name}</h2>
//                 </div>
//             })}
//         </div>
//     );
// }

// export default RealTimeUsage

export {}