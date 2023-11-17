// import { Tabs } from "antd";
// import { useState } from "react";
// import { mintReserved, mintReservedFor, mintReservedTo, reserveTokens } from "../../core/erc721/reserve";
// import { MartianEvent } from "../../types/types";
// import {Contract} from "web3-eth-contract";
// import Web3Context, { Web3ContextProps } from "../../context/Web3Context";
// import { forwardFunds, recoverNonFungibleToken, recoverToken } from "../../core/erc721/recover";

// function RecoverTab({contract, web3Context} : {contract: Contract, web3Context: Web3ContextProps}) {
//     // recoverNonFungibleToken
//     const [tokenId1, setTokenId1] = useState(0);
//     const [tokenAddress1, setTokenAddress1] = useState("");

//     // recoverToken
//     const [tokenAddress2, setTokenAddress2] = useState("");

//     return(
//         <div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Recover a NFT sent to the ticket contract</label>
//                 <i>recoverNonFungibleToken</i>
//                 <input onChange={(e) => setTokenId1(Number(e.target.value))} type="number" placeholder="ID of token"/>
//                 <input onChange={(e) => setTokenAddress1(e.target.value)} placeholder="Address of Token"/>
//                 <button onClick={() => recoverNonFungibleToken(contract, tokenAddress1, tokenId1, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Recover NFT</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Recover tokens sent to the ticket contract</label>
//                 <i>recoverToken</i>
//                 <input onChange={(e) => setTokenAddress2(e.target.value)} placeholder="Address of Token"/>
//                 <button onClick={() => recoverToken(contract, tokenAddress2, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Recover Tokens</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Forward funds to the payment receiver</label>
//                 <i>forwardFunds</i>
//                 <button onClick={() => forwardFunds(contract, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Forward Funds</button>
//             </div>
//         </div>
//     );
// }

// export default RecoverTab

export {}