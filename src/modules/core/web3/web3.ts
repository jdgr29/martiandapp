import { ethers, providers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Web3ContextProps } from './Web3Context';
import Web3 from 'web3';
import Web3Modal, { IProviderOptions } from "web3modal";

// // Convert web3provider to ethersprovider as they are better
// export function getEthersProvider(provider: any) {
//     const ethersProvider = new providers.Web3Provider(provider);
//     return ethersProvider;
// }

// sign a message
export const signMessage = async (messageVal: string, web3props: Web3ContextProps) : Promise<string | null> => {
    try {
        const web3 = new Web3(web3props.provider as any);
        if(web3props.address) {
            const hashMessage = web3.eth.accounts.hashMessage(messageVal);
            const sign = web3.eth.sign(hashMessage, web3props.address);
            console.log('sign : ' + sign);
            return sign
        }
        // const sign = await web3.eth.request({
        //     method: 'personal_sign',
        //     params: [messageVal, web3props.address],
        // });

    } catch(error) {
        return null
    }
    return null
}

export const providerOptions: IProviderOptions = {
    // metamask: {
    //     id: "injected",
    //     name: "MetaMask",
    //     type: "injected",
    //     check: "isMetaMask"
    // },
    // walletconnect: {
    //     package: WalletConnectProvider,
    //     options: {
    //         rpc: {
    //             56: 'https://bsc-dataseed.binance.org/'
    //         },
    //         network: 'binance',
    //     }
    // },
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            rpc: {
                //97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
                97: 'https://old-tame-glitter.bsc.quiknode.pro'
            },
            network: 'binance',
        }
    }
  };