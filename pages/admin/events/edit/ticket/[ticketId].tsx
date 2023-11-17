import React from "react";
import { AdminNav } from "../../../../../src/components/Admin/AdminNav/AdminNav";
import Image from "next/image";
import calendar from "../../../../../public/assets/calendar_event.png";
import pin from "../../../../../public/assets/pin_icon.png";
import { useRouter } from "next/router";

const Tickets = () => {
  const router = useRouter();
  const claimables = [
    { something: "" },
    { something: "" },
    { something: "" },
    { something: "" },
    { something: "" },
    { something: "" },
  ];
  return (
    <>
      <style jsx global>
        {`
          body {
            background-color: #0f0f13;
            background: #0f0f13;
          }
        `}
      </style>
      <AdminNav />
      <div className="lg:px-[100px] px-[10px] lg:mt-16">
        <h1 className="text-5xl my-3 lg:text-start md:text-start text-center text-[white]">
          Events
        </h1>

        <div className="flex mt-5 justify-between mb-10 items-center w-full">
          <div>
            <button
              className="px-6 py-2 rounded bg-[#1C1C20]"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
          <div className="flex gap-x-2 items-center">
            <p>Status</p>
            <p className="bg-[green] rounded px-7 py-1">Live</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-col">
            <div>
              <h3 className="text-3xl">Ticket Name</h3>
              <p className="text-lg">Ticket Description</p>
            </div>
            <div>
              <div className="flex flex-col lg:gap-y-5 lg:my-[80px] my-[10px]">
                <div className="flex gap-x-9 lg:p-0 p-2 ">
                  <div className="bg-[#3E3E3E80]  p-1  rounded flex items-center justify-center relative h-[50px] w-[50px]">
                    <Image
                      src={calendar}
                      alt="calendar icon for event"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </div>
                  <div className="lg:text-lg text-sm">
                    <p>December 17, 2022 </p>
                    <p>Saturday, 4:00 - 10:00PMa</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-x-9 lg:p-0 p-2 ">
                  <div className="bg-[#3E3E3E80] rounded flex items-center justify-center relative h-[50px] w-[50px]">
                    <Image
                      src={pin}
                      alt="calendar icon for event"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </div>
                  <div className="lg:text-lg text-sm">
                    <p>Building/ Venue name</p>
                    <p>location address</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last lg:mb-0 md:m-0 mb-4 w-[465px]  h-[425px]">
            <Image
              src={
                "https://images.unsplash.com/photo-1549499090-d7ac0cec89f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              }
              alt="ticket image"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
        <div className="bg-[#1E1E1E] mb-10 mt-5">
          <div className="bg-[#1A1A1A] mt-3 px-3 py-6 w-full justify-start items-center">
            <h2 className="text-2xl">Ticket Details</h2>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col w-full justify-between">
            <div className="lg:basis-[30%] md:basis-[30%] basis-[90%] text-center mt-3 px-3 py-6 ">
              <p className="text-xl mb-4">About Ticket</p>
              <div>
                <p className="text-[gray] text-lg">Date Created</p>
                <p>01/01/23</p>
              </div>
              <div className="my-6">
                <p className="text-[gray]">Time Created</p>
                <p>00:00</p>
              </div>

              <div>
                <p className="text-[gray] mb-3">Created By</p>
                <p className="font-bold">NAITRAM Ltd</p>
              </div>
            </div>
            <div className="lg:basis-[30%] md:basis-[30%] basis-[95%] py-6 ">
              <p className="bold text-xl lg:ml-0 md:ml-0 ml-3 my-3">
                Payment Method
              </p>
              <div>
                <p className="text-lg my-3 lg:ml-0 md:ml-0 ml-3">Fiat</p>
                <div className="lg:ml-0 md:ml-0 ml-3 flex items-center gap-x-3">
                  <div className="flex flex-col ">
                    <div className="flex justify-center gap-x-4 items-center w-full">
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-[gray]">Card Type</p>
                        <p>Visa</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-[gray]">Expiry Date</p>
                        <p>01/25</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-[gray]">Card Number</p>
                        <p>01/25</p>
                      </div>
                    </div>
                  </div>
                  <button className="py-2 px-6 bg-[green] rounded">Edit</button>
                </div>
                <div className="lg:ml-0 md:ml-0 ml-3 flex items-center gap-x-3">
                  <p className="text-3xl my-2">+</p>
                  Assign New Payment
                </div>
                <p className="my-5 text-lg lg:ml-0 md:ml-0 ml-3">Crypto</p>
                <div className="lg:ml-0 md:ml-0 mx-3  flex justify-center flex-col ">
                  <div className="flex lg:justify-between md:justify-between justify-center lg:gap-x-4 md:gap-x-3 lg:flex-nowrap md:flex-nowrap flex-wrap items-center w-full">
                    <div className="flex flex-col  justify-center items-center">
                      <p className="whitespace-nowrap text-[gray]">
                        Chain Type
                      </p>
                      <div className="flex items-center gap-x-1 justify-center">
                        <div className="h-[18px] w-[18px] bg-[yellow] rounded-full"></div>
                        <p>BNB</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-[gray]">Wallet Address</p>
                      <p>Wweaouweoausiodasdausd9123</p>
                    </div>
                    <button className="lg:my-0 md:my-0 my-3 py-2 px-6 bg-[green] rounded">
                      Edit
                    </button>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <p className="text-3xl my-2">+</p>
                    Assign New Payment
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-[30%] lg:basis-[30%] md:basis-[30%] basis-[95%] py-8">
              <p className="text-2xl lg:ml-0 md:ml-0 ml-2">Claimables</p>
              <div className="overflow-scroll h-[300px] ">
                {claimables.map((_, index: number) => (
                  <div key={index} className="flex m-2 flex-col">
                    <div className="  flex justify-between rounded-md p-5 bg-[#3E3E3E40]">
                      <div className="flex flex-col">
                        <p className="text-xl">Claimable Title</p>
                        <p className="text-sm">Claimable description</p>
                      </div>
                      <button className=" px-6 bg-[#060606] rounded-lg">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
