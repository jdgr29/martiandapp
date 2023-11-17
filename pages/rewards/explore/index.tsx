import NavBar from "../../../src/components/Navbar/Navbar";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { RewardCard } from "../../../src/components/RewardCard/RewardCard";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { RewardsNav } from "../../../src/components/RewardsNav/rewardsNav";
import Image from "next/image";
import { useState } from "react";
import rewardIcon from "../../../public/assets/rewardicon.png";
const WalletCollectables: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <NavBar />

      <div className="w-[100%] mt-2 lg:w-[80%]  flex ml-[50%] mr-auto translate-x-[-50%]  flex-col">
        <div className="flex gap-x-4  mt-8 justify-center items-center">
          <Image
            src={rewardIcon}
            alt="reward icon"
            height={40}
            width={40}
            objectFit="contain"
          />
          <h1 className=" transition-all duration-1200 ease lg:text-start text-center text-5xl text-white ">
            Rewards 🎉
          </h1>
        </div>

        <h1 className=" = transition-all duration-1200 ease my-9 text-2xl my-4 text-center text-white ">
          View Activity and Explore Rewards
        </h1>

        <div className="my-4 ">
          <h2 className="text-3xl font-bold my-4 text-[white]">Total Earned</h2>
          <div className="flex gap-x-10 lg:w-[80%] w-[95%] ml-[50%] mr-auto translate-x-[-50%] justify-between items-center bg-[#AD00BCA6] ">
            <div className="flex flex-col content-center w-[80%] gap-x-6  p-2 ">
              <p className="lg:text-5xl text-2xl text-center">
                ...............10.763
              </p>
            </div>
            <div className=" w-[90px] h-[90px] p-3 lg:text-3xl text-lg bg-[#09090940] flex items-center justify-center">
              <p>$MRT</p>
            </div>
          </div>
        </div>
        <RewardsNav explore={true} />
      </div>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 content-center lg:gap-y-5 ml-[50%] mr-auto translate-x-[-50%] lg:w-[80%] w-[100%] ">
        <RewardCard color="bg-[#D219A9]" eventTicket={20009} totalEarned={40} />
        <RewardCard color="bg-[#E98B1C]" eventTicket={20009} totalEarned={40} />
        <RewardCard color="bg-[#2653C8]" eventTicket={20009} totalEarned={40} />
        <RewardCard color="bg-[#32A32F]" eventTicket={20009} totalEarned={40} />
        <RewardCard color="bg-[#8A2D93]" eventTicket={20009} totalEarned={40} />
      </section>
    </>
  );
};

export default WalletCollectables;
