// import { Tabs } from "antd";
// import { useState } from "react";
// import { MartianEvent } from "../../types/types";
// import {Contract} from "web3-eth-contract";
// import Web3Context, { Web3ContextProps } from "../../context/Web3Context";
// import { forwardFunds, recoverNonFungibleToken, recoverToken } from "../../core/erc721/recover";
// import { grantWhitelistSpots } from "../../core/erc721/whitelist";

// function WhitelistTab({contract, web3Context} : {contract: Contract, web3Context: Web3ContextProps}) {
//     // grantWhitelistSpots
//     const [amount1, setAmount1] = useState(0);
//     const [tokenAddress1, setTokenAddress1] = useState("");

//     return(
//         <div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Give whitelist spots to an address</label>
//                 <i>grantWhitelistSpots</i>
//                 <input onChange={(e) => setAmount1(Number(e.target.value))} type="number" placeholder="Amount of Spots"/>
//                 <input onChange={(e) => setTokenAddress1(e.target.value)} placeholder="Address of Token"/>
//                 <button onClick={() => grantWhitelistSpots(contract, tokenAddress1, amount1, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Grant Whitelist Spots</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Grant whitelist spots batch &#128679;</label>
//                 <i>grantWhitelistSpotsBatch</i>
//                 {/* <input onChange={(e) => setTokenAddress2(e.target.value)} placeholder="Address of Token"/>
//                 <button onClick={() => recoverToken(contract, tokenAddress2, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Recover Tokens</button> */}
//             </div>
//         </div>
//     );
// }

// export default WhitelistTab

export {}