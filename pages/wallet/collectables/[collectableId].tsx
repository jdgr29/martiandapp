import NavBar from "../../../src/components/Navbar/Navbar";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const CollectableDetail: NextPage = () => {
  const router = useRouter();
  const [show, setShow] = useState(true);

  return (
    <div className="w-full ">
      <NavBar />
      <div className="flex mb-5 lg:w-full transition-all duration-500 ease w-full  gap-y-3 lg:items-start mt-4 lg:flex-row justify-center flex-col">
        <div className="flex flex-col transition-all duration-500 ease flex-wrap lg:w-[35%]">
          <div className="rounded self-center relative w-[98%] md:w-[80%] h-[560px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={"https://i.redd.it/lasw889lest71.jpg"}
              alt="Collectable Image"
            />
          </div>
        </div>

        <div className="lg:w-[40%] transition-all duration-500 ease w-full flex flex-col justify-center lg:items-start items-center">
          <p className="text-white transition-all duration-500 ease italic text-thin w-fit p-2 rounded-2xl">
            Transaction: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. In assumenda impedit necessitatibus.
          </p>
          <h1 className="text-white  transition-all duration-500 ease text-5xl mt-5 lg:text-start text-center">
            VIP Acces Yearly Membership
          </h1>
          <div className="flex text-xl transition-all duration-500 ease lg:justify-start md:justify-center justify-center w-[93%] items-start gap-x-5 mt-3">
            <div className="flex transition-all duration-500 ease justify-center lg:justify-start items-center lg:gap-x-2 gap-x-1">
              <FaUserCircle />
              <p>Smade Lounge</p>
            </div>
            <div className="flex items-center gap-x-1">
              <AiOutlineInfoCircle />
              <p>Smade</p>
            </div>
          </div>
          <p className="mt-5 text-3xl">Description</p>
          <p className="mt-5 text-xl font-thin text-center lg:text-start mb-5">
            Claim a VIP yearly access to Smade Lounge events with VIP packages
            included.
          </p>
          <p>Claimables: </p>
          <ul className="list-disc mt-5 text-lg font-thin">
            <li>Meet And Greet</li>
            <li>Drink Packages</li>
            <li>Private Booth with upto 20 Guests per visit</li>
            <li>Shisha</li>
            <li>x2 Food platters served at booths</li>
            <li>Priority booth service</li>
            <li>Queue jump</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center lg:gap-y-6  gap-y-5 lg:w-[15%] w-[100%] lg:order-last order-first">
          <p className="text-3xl ">Item #</p>
          <div className="w-[150px] h-[150px] bg-[#E42256] rounded-full flex justify-center items-center text-center">
            <p className="text-5xl font-bold">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectableDetail;
