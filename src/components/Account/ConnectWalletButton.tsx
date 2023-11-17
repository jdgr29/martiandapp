import Web3Modal from "web3modal";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Web3 from "web3";
import Web3Context, {
  Web3ContextProps,
} from "../../modules/core/web3/Web3Context";
import React from "react";
import { providerOptions } from "../../modules/core/web3/web3";

const ConnectWalletButton = ({
  size,
  showUserDetails,
}: {
  size: string;
  showUserDetails: boolean;
}) => {
  const web3Props = useContext(Web3Context);

  const [connected, setConnected] = useState(true);

  const sizeClass =
    size == "large"
      ? "w-72 h-16 bg-indigo-600 px-12 py-2 rounded-lg hover:bg-indigo-400 border-white border-2 shadow-lg shadow-indigo-500/50"
      : "bg-indigo-600 px-12 py-2 rounded-lg hover:bg-indigo-400 border-white border-2 shadow-sm shadow-indigo-500/50";

  useEffect(() => {
    if (web3Props.address) {
      setConnected(true);
    }
  }, [web3Props.address]);

  if (connected) {
    // Check if actually connected
    if (!web3Props.address || web3Props.address == "") {
      setConnected(false);
    }
    if (showUserDetails) {
      return (
        <div className="flex justify-center m-2">
          <button
            className={sizeClass}
            onClick={() => {
              setConnected(false);
              disconnectWallet(web3Props);
            }}
          >
            <div className="flex flex-row justify-center text-center align-middle">
              <img
                src="/mmmc_LogowithoutText_originalhead.png"
                width={20}
                height={20}
              />
              <h2 className="p-1 text-wrap text-center text-xs ">Martian: </h2>
            </div>
            Disconnect wallet
          </button>
        </div>
      );
    }
    return (
      <div className="flex justify-center m-2">
        <button
          className={sizeClass}
          onClick={() => {
            setConnected(false);
            disconnectWallet(web3Props);
          }}
        >
          Disconnect wallet
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center ">
      <button
        // className={sizeClass}
        // className="rounded-2xl"
        onClick={async () => {
          await connectWallet(web3Props);
        }}
      >
        Connect wallet
      </button>
    </div>
  );
};

// Just 'simulate' disconnecting
export async function disconnectWallet(web3Props: Web3ContextProps) {
  if (web3Props.setAddress && web3Props.setProvider) {
    web3Props.setAddress("");
    web3Props.setProvider(null);
  }
}

export async function connectWallet(web3Props: Web3ContextProps) {
  try {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const provider = await web3Modal.connect();
      if (web3Props.setProvider && web3Props.setAddress && provider) {
        web3Props.setProvider(provider);
        console.log("provider set" + provider);

        // Get a Web3 instance for the wallet
        const web3 = new Web3(provider);

        // Get list of accounts of the connected wallet
        const accounts = await web3.eth.getAccounts();

        // MetaMask does not give you all accounts, only the selected account
        console.log("Got accounts", accounts);
        const selectedAccount = accounts[0];
        web3Props.setAddress(selectedAccount);
      }
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }

    //     setWeb3Modal(newWeb3Modal)
    // }

    // if(web3Modal && setAddress) {
    //     console.log('gg');
    //     const provider = await web3Modal.connect();
    //     console.log(provider);
    //     const ethersProvider = getEthersProvider(provider);

    //     const userAddress = await ethersProvider.getSigner().getAddress();
    //     setAddress(userAddress);
    //     return;
    // }
  } catch (error) {}
}

export default ConnectWalletButton;
