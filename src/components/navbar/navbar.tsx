import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import naitramLogo from "../../../public/assets/naitramlogo.png";
import ConnectWalletButton from "../Account/ConnectWalletButton";
import profilepic from "../..//../public/sad-martian.png";
import HostEventModal from "../HostEventModal/HostEventModal";
import calendar from "../../../public/assets/calendar.png";
import collectable from "../../../public/assets/collectable.png";
import reward from "../../../public/assets/rewardicon.png";
import wallet from "../../../public/assets/walleticon.png";
import connectWallet from "../../../public/assets/connectwalleticon.png";

const NavBar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showHostEvent, setShowHostEvent] = useState(false);

  const showNavBar = () => {
    setShow(!show);
  };

  useEffect(() => {
    return () => setShow(false);
  }, []);

  return (
    <nav className="flex lg:mt-5 w-full relative items-center justify-between transition-all ease duration-1200  mt-2  lg:ml-10 lg:px-6 px-3">
      {/* <HostEventModal show={showHostEvent} setShow={setShowHostEvent} /> */}
      <div
        onClick={() => router.push("/home")}
        className="flex items-center justify-between flex-shrink-0 mr-2"
      >
        <Image
          height={70}
          width={100}
          objectFit="contain"
          src={naitramLogo}
          alt="mmmc logo"
        />
      </div>

      <div className="w-full items-center flex">
        <div
          className={`lg:w-full  lg:z-0 z-50 lg:h-auto h-screen  ${
            show ? "md:w-[50%] w-[50%]" : "w-[0px] md:w-[0px]"
          } transition-all duration-1200 ease lg:bg-transparent bg-[#2D3552F2] lg:relative  absolute overflow-hidden top-[-10px] right-0 flex flex-col items-center gap-2 justify-around lg:justify-around  lg:flex-row lg:items-center`}
        >
          <div onClick={() => showNavBar()} className="block lg:hidden">
            <button className="flex items-center px-3 py-2 rounded-full text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <div className="flex w-[70px] h-[70px] rounded-full ">
                <Image
                  className="rounded-full "
                  objectFit="cover"
                  src={profilepic}
                  alt="profile pic"
                />
              </div>
            </button>
          </div>
          <div className="bg-[#333333] flex relative rounded-2xl border-[2px] border-[#666666] px-2 py-1  gap-x-2  items-center justify-center">
            <Image
              height={24}
              width={22}
              objectFit="contain"
              src={calendar}
              alt="mmmc logo"
            />
            <Link
              href={"/events"}
              className=" text-xl block  text-white lg:inline-block    hover:text-green "
            >
              Events
            </Link>
          </div>
          <div className=" gap-x-2 bg-[#333333] flex py-1 relative rounded-2xl border-[2px] border-[#666666] px-2 items-center justify-center">
            <Image
              height={24}
              width={22}
              objectFit="contain"
              src={collectable}
              alt="mmmc logo"
            />
            <Link
              href={"/collectables"}
              className="block  text-white text-xl lg:inline-block  hover:text-green "
            >
              Collectables
            </Link>
          </div>
          <div className=" gap-x-2 bg-[#333333] py-1 flex relative rounded-2xl border-[2px] border-[#666666] px-2 items-center justify-center">
            <Image
              height={24}
              width={22}
              objectFit="contain"
              src={reward}
              alt="mmmc logo"
            />
            <Link
              href={"/rewards"}
              className="block  text-white text-xl lg:inline-block  hover:text-green "
            >
              Rewards
            </Link>
          </div>
          <div className=" gap-x-2 bg-[#333333] py-1 flex relative rounded-2xl border-[2px] border-[#666666] px-2 items-center  justify-center">
            <Image
              height={24}
              width={22}
              objectFit="contain"
              src={wallet}
              alt="mmmc logo"
            />
            <Link
              href={"/wallet"}
              className="block text-white text-xl lg:inline-block hover:text-green "
            >
              Wallet
            </Link>
          </div>

          <div className="flex bg-[#2E3192] border-[#0071BC] items-start w-fit relative gap-x-2 flex relative rounded-2xl border-[2px] items-center py-1 px-2  justify-center">
            <Image
              height={24}
              width={22}
              objectFit="contain"
              src={connectWallet}
              alt="mmmc logo"
            />
            <ConnectWalletButton size="10" showUserDetails={true} />
          </div>
          <div className="lg:hidden">
            <Link
              href={"/profile"}
              className="hidden text-white text-xl  hover:text-green "
            >
              Profile
            </Link>
          </div>
          <div
            onClick={() => router.push("/profile")}
            className="flex lg:relative rounded-full w-[95px] h-[95px] lg:inline md:hidden hidden"
          >
            <Image
              layout="fill"
              src={profilepic}
              alt="profile pic"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => showNavBar()}
        className={` transition-all ease duration-1200 ${
          show ? "hidden" : "block"
        }`}
      >
        <button className=" lg:hidden flex items-center px-3 py-2 rounded-full text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <div className="flex w-[70px] h-[70px] rounded-full ">
            <Image
              className="rounded-full "
              objectFit="cover"
              src={profilepic}
              alt="profile pic"
            />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
