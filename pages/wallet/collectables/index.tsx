import React, { useState } from "react";
import Carousel from "../../../src/components/Carousel/Carousel";
import collectableSupplyIcon from "../../../public/assets/collectablesupply.png";
import NavBar from "../../../src/components/Navbar/Navbar";

import Image from "next/image";

const WalletCollectablesDetails = () => {
  const collectables = [
    {
      collectableName: "collectable",
      collectablePhoto: "https://i.redd.it/lasw889lest71.jpg",
    },
    {
      collectableName: "collectable",
      collectablePhoto: "https://i.redd.it/lasw889lest71.jpg",
    },
    {
      collectableName: "collectable",
      collectablePhoto: "https://i.redd.it/lasw889lest71.jpg",
    },
    {
      collectableName: "collectable",
      collectablePhoto: "https://i.redd.it/lasw889lest71.jpg",
    },
    {
      collectableName: "collectable",
      collectablePhoto: "https://i.redd.it/lasw889lest71.jpg",
    },
    {
      collectableName: "collectable",
      collectablePhoto: "https://i.redd.it/lasw889lest71.jpg",
    },
    {
      collectableName: "collectable",
      collectablePhoto: "https://i.redd.it/lasw889lest71.jpg",
    },
  ];

  return (
    <>
      <style jsx global>
        {`
          height: 100%;
          width: 100%;
        `}
      </style>
      <NavBar />

      <div className="lg:mx-[80px] lg:my-[35px] mx-3">
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col gap-y-4 lg:gap-y-6">
            <h1 className="lg:text-5xl text-2xl  text-[white]">
              Collectable Namess
            </h1>
            <p className="text-2xl text-[white]">Creator ---</p>
            <p>Collectable Description</p>
            <p>Claimables:</p>
            <div className="flex lg:mt-7 flex-col h-[500px] overflow-scroll   lg:w-[500px] w-full gap-y-6 mb-[100px] lg:order-1 order-last">
              {collectables.map((claimable, index: number) => (
                <div
                  key={index}
                  className="flex gap-x-10 justify-between items-center bg-[#3E3E3E40] "
                >
                  <div className="flex flex-col gap-x-6 items-start p-2 ">
                    <p>Claimable Title</p>
                    <p>Claimable Description</p>
                  </div>
                  <div className=" w-[90px] h-[90px] bg-[#09090940] flex items-center justify-center">
                    <p className="text-2xl text-[white] font-bold">X1</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-5 mx-12 order-2 justify-center items-center lg:hidden md:hidden xl:hidden">
              <h1 className="text-xl text-[white] z-10 text-center">Item #</h1>
              <div className="w-[170px] h-[170px] relative flex justify-center items-center">
                <Image
                  src={collectableSupplyIcon}
                  layout="fill"
                  objectFit="contain"
                  alt="collectable Icon"
                />
                <h1 className="text-4xl text-[white] z-10 text-center">10</h1>
              </div>
              <button className=" text-[#6EDB47] lg:block hidden bg-[black] border-[3px] border-[#6EDB47] lg:m-0 m-2 py-2 px-3 rounded-xl">
                Owned
              </button>
              <div className="lg:hidden flex absolute z-50 bottom-0 left-[50%] translate-x-[-50%]">
                <button className="bg-[black] border-[3px] border-[#6EDB47] text-[#6EDB47] lg:m-0 m-2 py-2 px-10 rounded-xl">
                  Owned
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:order-last order-first">
            <div className="flex w-full justify-between items-start">
              <h1 className="text-center w-fit text-white transition-all duration-500 ease bg-[#E42256] lg:w-fit p-2 rounded-2xl">
                Featured Event
              </h1>
              <p className="text-white transition-all duration-500 ease text-[#ED7CFF] border-[#ED7CFF] border-[2px] w-fit px-3 py-1 rounded-2xl">
                Share
              </p>
            </div>
            <div className="p-4 lg:order-last order-first">
              <Image
                src={
                  "https://images.unsplash.com/photo-1643941687361-7101751cf89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                }
                className="rounded"
                height={525}
                width={525}
                alt="collectable photo"
              />
            </div>
          </div>
          <div className="lg:flex flex-col gap-y-5 mx-12 order-3 hidden">
            <h1 className="text-xl text-[white] z-10 text-center">Item #</h1>
            <div className="w-[170px] h-[170px] relative flex justify-center items-center">
              <Image
                src={collectableSupplyIcon}
                layout="fill"
                objectFit="contain"
                alt="collectable Icon"
              />
              <h1 className="text-4xl text-[white] z-10 text-center">10</h1>
            </div>
            <button className=" border-[3px] border-[#6EDB47] text-[#6EDB47] lg:m-0 m-2 py-2 px-3 rounded-xl">
              Owned
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletCollectablesDetails;
