import NavBar from "../../../src/components/Navbar/Navbar";
import Carousel from "../../../src/components/Carousel/Carousel";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { IoTicket } from "react-icons/io5";
import { useState } from "react";

const WalletCollectables: NextPage = () => {
  const router = useRouter();

  const goToDetailedTicketPage = (id: number) => {
    router.push(`tickets/${id}`);
  };

  const [closeSideNav, setCloseSideNav] = useState(false);
  const walletCollectables = [
    {
      eventName: "event",
      eventDate: "date",
      eventPhoto:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      eventName: "event",
      eventDate: "date",
      eventPhoto:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      eventName: "event",
      eventDate: "date",
      eventPhoto:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      eventName: "event",
      eventDate: "date",
      eventPhoto:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      eventName: "event",
      eventDate: "date",
      eventPhoto:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      eventName: "event",
      eventDate: "date",
      eventPhoto:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      eventName: "event",
      eventDate: "date",
      eventPhoto:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <>
      <NavBar closeSideMenu={closeSideNav} />
      <div className="w-[95%] lg:w-[90%] flex lg:mx-20 md:mx-15 mx-0 flex-col">
        <div className="flex justify-center items-center gap-x-5">
          <h1 className="lg:mt-5  transition-all duration-1200 ease  text-center my-2 text-5xl text-white ">
            Wallet Tickets
          </h1>
          <IoTicket size={70} className="self-center mt-5" />
        </div>

        <h1 className=" lg:text-start transition-all duration-1200 ease my-9 text-2xl my-4 text-center text-white ">
          Your Tickets
        </h1>
        <nav className="flex w-full lg:justify-start items-center justify-center lg:gap-x-20 gap-x-10">
          <div
            className="bg-[blue] py-2 px-6 rounded-3xl"
            onClick={() => router.push("/wallet/tickets/")} //TODO ad params
          >
            Tickets
          </div>

          {/* <div onClick={() => router.push("/wallet/pasttickets")}>
            Past Tickets
          </div> */}
        </nav>
        <Carousel
          carouselItems={walletCollectables}
          goToDetailedPage={goToDetailedTicketPage}
        />
      </div>
    </>
  );
};

export default WalletCollectables;
