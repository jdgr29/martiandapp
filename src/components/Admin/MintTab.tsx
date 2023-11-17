// import { Tabs } from "antd";
// import { useState } from "react";
// import { MartianEvent } from "../../types/types";
// import {Contract} from "web3-eth-contract";
// import Web3Context, { Web3ContextProps } from "../../context/Web3Context";
// import { forwardFunds, recoverNonFungibleToken, recoverToken } from "../../core/erc721/recover";
// import { grantWhitelistSpots } from "../../core/erc721/whitelist";
// import { mint, mintFor, premint } from "../../core/erc721/mint";

// function MintTab({contract, web3Context} : {contract: Contract, web3Context: Web3ContextProps}) {
//     // mint
//     const [amount1, setAmount1] = useState(0);
    
//     // mintFor
//     const [amount2, setAmount2] = useState(0);
//     const [address2, setAddress2] = useState("");

//     // premint
//     const [amount3, setAmount3] = useState(0);
//     const [address3, setAddress3] = useState("");

//     return(
//         <div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Mint Tickets</label>
//                 <i>mint</i>
//                 <input onChange={(e) => setAmount1(Number(e.target.value))} type="number" placeholder="Amount of Tickets to Mint"/>
//                 <button onClick={async () => await mint(contract, amount1, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Mint</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Mint Tickets For an address</label>
//                 <i>mintFor</i>
//                 <input onChange={(e) => setAmount2(Number(e.target.value))} type="number" placeholder="Amount of Tickets to Mint"/>
//                 <input onChange={(e) => setAddress2(e.target.value)} type="number" placeholder="Address to mint to"/>
//                 <button onClick={() => mintFor(contract, address2, amount2, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Mint</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Premint NFTs</label>
//                 <i>premint</i>
//                 <input onChange={(e) => setAmount3(Number(e.target.value))} type="number" placeholder="Amount of Tickets to Mint"/>
//                 <input onChange={(e) => setAddress3(e.target.value)} type="number" placeholder="Address to mint to"/>
//                 <button onClick={() => premint(contract, address3, amount3, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Premint</button>
//             </div>
//         </div>
//     );
// }

// export default MintTab
export {}