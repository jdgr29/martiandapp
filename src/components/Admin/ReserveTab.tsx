// import { Tabs } from "antd";
// import { useState } from "react";
// import { mintReserved, mintReservedFor, mintReservedTo, reserveTokens } from "../../core/erc721/reserve";
// import { MartianEvent } from "../../types/types";
// import {Contract} from "web3-eth-contract";
// import Web3Context, { Web3ContextProps } from "../../context/Web3Context";

// function ReserveTab({contract, web3Context} : {contract: Contract, web3Context: Web3ContextProps}) {
//     // reserveTokens
//     const [tokensToReserve1, setTokensToReserve1] = useState(0);
//     const [addressToReserveFor1, setAddressToReserveFor1] = useState("");

//     // mintReservedFor
//     const [tokensToMint2, setTokensToMint2] = useState(0);
//     const [addressToMintFor2, setAddressToMintFor2] = useState("");

//     // mintReserved
//     const [tokensToMint3, setTokensToMint3] = useState(0);
//     const [addressToSendTo3, setAddressToSendTo3] = useState("");

//     const [tokensToMint4, setTokensToMint4] = useState(1);
//     const [addressToSendTo4, setAddressToSendTo4] = useState("");

//     return(
//         <div>
//             <div className="bg-green-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Mint 1 reserved tokens of sender address to another address</label>
//                 <i>mintReserved</i>
//                 <input onChange={(e) => setTokensToMint4(Number(e.target.value))} type="number" placeholder="Number of tokens to mint" disabled defaultValue={1}/>
//                 <input onChange={(e) => setAddressToSendTo4(e.target.value)} placeholder="Wallet address to send to"/>
//                 <button onClick={() => mintReserved(contract, addressToSendTo4, tokensToMint4, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Mint Tokens</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Reserve a number of tokens to be minted by someone</label>
//                 <i>reserveTokens</i>
//                 <input onChange={(e) => setTokensToReserve1(Number(e.target.value))} type="number" placeholder="Number of tokens to reserve"/>
//                 <input onChange={(e) => setAddressToReserveFor1(e.target.value)} placeholder="Wallet address to reserve tokens for"/>
//                 <button onClick={() => reserveTokens(contract, addressToReserveFor1, tokensToReserve1, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Reserve Tokens</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Mint reserved tokens for an address</label>
//                 <i>mintReservedFor</i>
//                 <input onChange={(e) => setTokensToMint2(Number(e.target.value))} type="number" placeholder="Number of tokens to mint"/>
//                 <input onChange={(e) => setAddressToMintFor2(e.target.value)} placeholder="Wallet address with reserved tokens"/>
//                 <button onClick={() => mintReservedFor(contract, addressToMintFor2, tokensToMint2, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Mint Tokens</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Mint reserved tokens of sender address to another address</label>
//                 <i>mintReserved</i>
//                 <input onChange={(e) => setTokensToMint3(Number(e.target.value))} type="number" placeholder="Number of tokens to mint"/>
//                 <input onChange={(e) => setAddressToSendTo3(e.target.value)} placeholder="Wallet address to send to"/>
//                 <button onClick={() => mintReserved(contract, addressToSendTo3, tokensToMint3, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Mint Tokens</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <h1>Mint 1 reserved token to multiple addresses &#128679;</h1>
//             </div>
//         </div>
//     );
// }

// export default ReserveTab

export {}