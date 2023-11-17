// import { Tabs } from "antd";
// import { useState } from "react";
// import {Contract} from "web3-eth-contract";
// import { Web3ContextProps } from "../../modules/core/web3/Web3Context";

// function ConfigureTab({contract, web3Context} : {contract: Contract, web3Context: Web3ContextProps}) {
//     const [price, setStatePrice] = useState(0);
//     const [mintActive, setStateMintActive] = useState(false);
//     const [usable, setStateUsable] = useState(false);
//     const [whitelistOnly, setStateWhitelistOnly] = useState(false);
//     const [receiver, setStateReceiver] = useState("");
//     const [URL, setStateURL] = useState("");

//     return(
//         <div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Set price in Wei (1000000000000000000 Wei = 1 Ether)</label>
//                 <i>setPrice</i>
//                 <input onChange={(e) => setStatePrice(Number(e.target.value))} type="number" placeholder="Price in Wei"/>
//                 <button onClick={() => setPrice(contract, price, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Set Price</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Set mint as active/inactive</label>
//                 <i>setMintActive</i>
//                 <input onChange={(e) => setStateMintActive(Boolean(e.target.value))} type="checkbox"/>
//                 <button onClick={() => setMintActive(contract, mintActive, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Update</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Set ticket as usable/not usable</label>
//                 <i>setUsable</i>
//                 <input onChange={(e) => setStateUsable(Boolean(e.target.value))} type="checkbox"/>
//                 <button onClick={() => setUsable(contract, usable, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Update</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Set whitelist only to mint as active/disactive.</label>
//                 <i>setWhitelistOnly</i>
//                 <input onChange={(e) => setStateWhitelistOnly(Boolean(e.target.value))} type="checkbox"/>
//                 <button onClick={() => setWhitelistOnly(contract, whitelistOnly, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Update</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Set payment receiver</label>
//                 <i>setPaymentReceiver</i>
//                 <input onChange={(e) => setStateReceiver(e.target.value)}/>
//                 <button onClick={() => setPaymentReceiver(contract, receiver, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Set Receiver</button>
//             </div>
//             <div className="bg-cyan-700" style={{display:'flex', flexDirection:'column', gap:'10px', margin: '20px', padding: '10px'}}>
//                 <label>Set base url</label>
//                 <i>setBaseUrl</i>
//                 <input onChange={(e) => setStateURL(e.target.value)}/>
//                 <button onClick={() => setBaseUrl(contract, URL, web3Context.address!)}
//                 style={{backgroundColor:'white', color:'black', borderRadius: '16px', padding:'10px', maxWidth:'800px', alignSelf:'center'}}
//                 >Set URL</button>
//             </div>
//         </div>
//     );
// }

// export default ConfigureTab

export {}