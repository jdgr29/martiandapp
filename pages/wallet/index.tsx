import NavBar from "../../src/components/Navbar/Navbar";
import { EventCard } from "../../src/components/Events/EventCard";
import { useRouter } from "next/router";
import walletIcon from "../../public/assets/connectwalleticon.png";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const Wallet = () => {
  const router = useRouter();

  return (
    <div>
      <NavBar />

      <div className="w-[95%] lg:w-[90%] flex lg:mx-20 md:mx-15 mx-0 flex-col">
        <div className="flex items-center justify-center gap-x-2 lg:mt-6">
          <Image
            src={walletIcon}
            height={40}
            width={40}
            objectFit="contain"
            alt="wallet icon"
          />
          <h1 className=" transition-all duration-1200 ease lg:text-start text-center  text-5xl text-white ">
            Wallet
          </h1>
        </div>

        <h1 className="font-thin transition-all duration-1200 ease my-9 text-2xl my-4 text-center text-white ">
          See your purchases!
        </h1>

        <nav className="flex lg:w-full w-[80%] items-center justify-center self-center lg:gap-x-20 gap-x-5">
          <p className="lg:text-3xl text-md font-bold">Tickets</p>
          <div className="bg-[blue] py-2 px-6 rounded-3xl">
            <p className="lg:text-xl text-md">Tickets</p>
          </div>
          <div onClick={() => router.push("/wallet/collectables")}>
            <p className="lg:text-xl text-smd ">In-active</p>
          </div>
          <div
            onClick={() => router.push("wallet/collectables")}
            className="bg-transparent py-2 px-6 rounded-3xl"
          >
            <p className="lg:text-xl text-md">Collectables</p>
          </div>
          {/* <div onClick={() => router.push("/wallet/pasttickets")}>
            <p className="lg:text-xl text-md ">Past Tickets</p>
          </div> */}
        </nav>

        <section className="flex lg:gap-x-12 gap-x-8  w-full justify-center">
          <div className="hover:scale-110 active:scale-90 hover:border-[green] mt-5 border-dashed border-[gray] border-2 transition-all duration-1200 bg-[white] ease lg:w-[23%] w-[40%] h-[260px] flex flex-col justify-evenly items-center "></div>
          <div
            onClick={() => router.push("/wallet/tickets")}
            className="hover:scale-110 active:scale-90 hover:border-[green] mt-5 border-dashed border-[gray] border-2 transition-all duration-1200 ease lg:w-[23%] w-[40%] h-[260px] flex flex-col justify-evenly items-center "
          >
            <h1 className=" text-8xl font-thin"> + </h1>
            <h1>Explore Events</h1>
          </div>
          <div className="lg:flex hidden justify-center items-center lg:ml-10">
            <BsFillArrowRightCircleFill size={45} />
          </div>
        </section>
        {/* <div className="flex flex-col lg:mt-8 self-center w-full"> */}
        {/* <nav className="flex lg:w-full w-[80%] self-center lg:mt-8 mt-4 lg:text-2xl   items-center justify-center lg:gap-x-20 gap-x-5">
            <p className="lg:text-3xl text-md font-bold">Collectables</p>
            <div className="bg-[blue] py-2 lg:px-6 px-2 rounded-3xl">
              <p className="lg:text-xl text-md ">Tickets</p>
            </div>
            <div onClick={() => router.push("/wallet/collectables")}>
              <p className="lg:text-xl text-md ">In-active</p>
            </div> */}
        {/* <div onClick={() => router.push("/wallet/pasttickets")}>
              <p className="lg:text-xl text-md ">Past Tickets</p>
            </div> */}
        {/* </nav> */}

        {/* <section className="flex lg:gap-x-12 gap-x-8 w-full justify-center mb-10">
            <div className="hover:scale-110 active:scale-90 hover:border-[green] mt-5 border-dashed border-[gray] border-2 transition-all duration-1200 bg-[white] ease lg:w-[23%] w-[40%] h-[260px] flex flex-col justify-evenly items-center "></div>
            <div
              onClick={() => router.push("/wallet/collectables")}
              className="hover:scale-110 active:scale-90 hover:border-[green] mt-5 border-dashed border-[gray] border-2 transition-all duration-1200 ease lg:w-[23%] w-[40%] h-[260px] flex flex-col justify-evenly items-center "
            >
              <h1 className=" text-8xl font-thin"> + </h1>
              <h1>Explore Collectables</h1>
            </div>
            <div className="lg:flex hidden justify-center items-center lg:ml-10">
              <BsFillArrowRightCircleFill size={45} />
            </div>
          </section> */}
      </div>
    </div>
    // </div>
  );
};

export default Wallet;
