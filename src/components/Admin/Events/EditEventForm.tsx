import Image from "next/image";
import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
export const EditEventForm = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggle = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      <div className="flex lg:flex-row md:flex-row lg:flex-nowrap md:flex-nowrap flex-wrap flex-col mb-6  mt-5 gap-x-6 justify-evenly">
        <div className="flex flex-col gap-y-5 lg:w-[60%] md:w-[50%] w-full">
          <input
            className="rounded py-4 px-1"
            placeholder="EVENT TITLE"
            type="text"
          />
          <input
            className="rounded py-4 px-1"
            placeholder="Hosted by (Default Admin userName)"
            type="text"
          />
          <input
            className="rounded py-4 px-1"
            placeholder="Event description"
            type="text"
          />
          <input
            className="rounded py-4 px-1"
            placeholder="Date"
            type="date"
            onChange={(date) => console.log("date", date.target.value)}
          />
          <input
            className="rounded py-4 px-1"
            placeholder="Location Address"
            type="text"
          />
        </div>
        <div className="lg:h-auto lg:order-last md:order-last order-first lg:my-0 md:my-0 my-3 lg:w-[600px] w-full h-[400px] w-[400px] relative">
          <Image
            alt="Admin Event Edit Photo"
            className="rounded"
            layout="fill"
            src={
              "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
          />
        </div>
      </div>
      <div className="w-full my-8 flex justify-between">
        <div
          className={`  w-full transition-all ease duration-900
          bg-[#1A1A1A]  flex flex-col justify-between items-center py-3 px-2 lg:w-[46%] w-[48%] rounded`}
        >
          <div className="flex lg:flex-row md:flex-row flex-col justify-between w-full">
            <p className="lg:text-4xl text-2xl lg:text-start text-center lg:my-0 md:my-0 my-2 whitespace-nowrap">
              Live Activity
            </p>
            <div
              onClick={() => toggle()}
              className={`flex p-1 bg-[#060606] rounded-lg gap-x-1 items-center`}
            >
              <IoSettings />
              <p className="lg:my-0 md:my-0 my-3">Settings</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div
            className={`${
              showSettings ? "h-[10em]" : "h-[0px]"
            } overflow-hidden transition-all ease duration-300`}
          >
            <p className="py-3 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              asperiores recusandae exercitationem. Mollitia, excepturi ipsam
              maiores autem repellat quis voluptatem, ea ad dolore aspernatur
              eum dicta, quasi magnam nisi nesciunt.
            </p>
          </div>
        </div>

        <div
          className={`  w-full transition-all ease duration-900
          bg-[#1A1A1A]  flex flex-col justify-between items-center py-3 px-2 w-[46%] rounded`}
        >
          <div className="flex lg:flex-row md:flex-row flex-col justify-between w-full">
            <p className="lg:text-4xl text-2xl lg:text-start text-center lg:my-0 md:my-0 my-2 whitespace-nowrap">
              Photo Roll
            </p>
            <div
              onClick={() => toggle()}
              className={`flex p-1 bg-[#060606] rounded-lg gap-x-1 items-center`}
            >
              <IoSettings />
              <p className="lg:my-0 md:my-0 my-3">Settings</p>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div
            className={`${
              showSettings ? "h-[10em]" : "h-[0px]"
            } overflow-hidden transition-all ease duration-300`}
          >
            <p className="py-3 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              asperiores recusandae exercitationem. Mollitia, excepturi ipsam
              maiores autem repellat quis voluptatem, ea ad dolore aspernatur
              eum dicta, quasi magnam nisi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
