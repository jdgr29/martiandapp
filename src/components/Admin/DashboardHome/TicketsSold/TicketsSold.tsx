import { BarChart } from "../../../BarChart/BarChart";
import { Ticket } from "./_Ticket";
import { DoughnutChart } from "./_DoughnutChart";
import { useState } from "react";
import Image from "next/image";
export const TicketOrCollectablesSold = ({
  expanded,
  ticketType,
  collectableType,
}: {
  expanded: boolean;
  ticketType?: boolean;
  collectableType?: boolean;
}) => {
  return (
    <section className="flex lg:flex-row flex-col   flex-wrap lg:mt-5 w-full gap-y-2 lg:w-full relative items-start justify-between gap-x-4 transition-all ease duration-1200  lg:mt-5 mt-2  rounded-lg lg:px-[40px]">
      <div className="lg:w-[38%] md:w-[22%] lg:order-first order-last lg:self-start self-center lg:justify-start justify-center  flex flex-wrap lg:gap-x-4 gap-x-6 mt-2 gap-y-3 lg:gap-y-6">
        <BarChart expanded={expanded} />
        <BarChart expanded={expanded} />
        <BarChart expanded={expanded} />
      </div>
      <div className="bg-[#0F0F13] rounded-lg lg:w-[58%] md:w-full  w-full  h-auto p-2 flex h-auto  flex-col ">
        <div className="lg:flex w-full lg:flex-row flex gap-y-1 flex-col justify-evenly items-center">
          {ticketType && (
            <p className="text-[white] text-xl">Total Tickets Sold</p>
          )}
          {collectableType && (
            <p className="text-[white] text-xl">Total Collectables Sold</p>
          )}
          <p className="text-[gray] text-xs">updated 2mins ago</p>
          <input
            className="px-12 py-2 rounded-xl text-center text-[black]"
            type="text"
            placeholder="Filter by event"
          />
        </div>

        <div className="flex lg:flex-row w-full flex-col justify-around mt-6">
          {/* TODO map over this to show actual tickets  */}
          <div className="flex flex-col w-full lg:justify-start justify-center">
            <div className="flex w-full gap-x-3 p-5 justify-center items-center">
              <div className="w-[150px]  rounded-full p-2  h-[150px] dark:bg-gray-700">
                <DoughnutChart />
              </div>
              <div className="flex flex-col">
                <p className="text-[white] font-semibold">Total Supply</p>
                <p>50/100</p>
              </div>
            </div>
            <div className="lg:h-[16em] h-auto p-2  w-full overflow-scroll">
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
              <Ticket title={"Collectable Title"} amount={20} />
            </div>
          </div>
          <div className="flex mx-5 p-5 self-center gap-y-3 lg:order-last order-first my-2 flex-col lg:justify-center relative w-auto lg:gap-y-9">
            <div className="flex justify-center flex-col">
              <div className="lg:w-[217px] h-[217px] relative">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80"
                  }
                  alt="event image"
                  layout="fill"
                  className="rounded"
                  objectFit="cover"
                />
              </div>
              <div className="lg:w-[218px] w-full">
                <p className="text-[white] my-1 text-md text-center">
                  WSTRN Official After Party @ BLVD Manchester
                </p>
              </div>
            </div>

            <button className="bg-[#2E3192] border-[3px] border-[#0071BC] lg:m-0 m-2 py-2 px-10 rounded-xl">
              {(ticketType && "View Event") ||
                (collectableType && "View Collectable")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
