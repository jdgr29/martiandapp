// import { useContext } from "react";
// import Web3Context from "../context/Web3Context";
// import useMartianUser from "../hooks/useMartianUser";

// const DisplayLoggedUser = () => {
//     const web3Props = useContext(Web3Context);

//     const [martianUserDetails, isMartianAccount, checkingMartianUser] = useMartianUser(web3Props.address? web3Props.address : "");

//     if(!web3Props.address || web3Props.address == "") {
//         return(
//             <div className="flex jsutify-center bg-gray-500 p-4 mx-2 rounded-lg flex-col">
//                 <h1>Martian not Detected</h1>
//             </div>
//         );
//     }

//     return(
//         <div className="flex justify-center bg-[#36A9E1] py-2 px-1 mx-4 rounded-lg flex-col">
//             <div className="m-2 flex flex-row justify-center text-center align-middle">
//                 <img src="/mmmc_LogowithoutText_originalhead.png" width={20} height={20}/>
//                 <h2 className="p-1 text-wrap text-center text-xs ">Martian: {martianUserDetails?.name}</h2>
//             </div>
//             <h2 className="text-wrap text-center text-xs">Address: {martianUserDetails?.address}</h2>
//         </div>
//     );
// }

// export default DisplayLoggedUser

export {}