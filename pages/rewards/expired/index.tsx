import NavBar from "../../../src/components/Navbar/Navbar";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { RewardCard } from "../../../src/components/RewardCard/RewardCard";
import { RewardsNav } from "../../../src/components/RewardsNav/rewardsNav";
const ExpiredRewards: NextPage = () => {
  const expiredRewards = [
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
      <NavBar />
      <div className="w-[95%] lg:w-[90%] flex lg:mx-20 md:mx-15 mx-0 flex-col">
        <h1 className="lg:mt-8 transition-all duration-1200 ease lg:text-start text-center my-2 text-5xl text-white ">
          Rewards 🎉
        </h1>

        <h1 className=" lg:text-start transition-all duration-1200 ease my-9 text-2xl my-4 text-center text-white ">
          View Activity and Explore Rewards (Coming Soon!)
        </h1>
        <RewardsNav expired={true} />
        <section className="flex lg:gap-x-12 gap-x-8 gap-y-6 lg:justify-start w-full justify-center flex-wrap">
          <RewardCard eventTicket={20009} totalEarned={40} />
          <RewardCard eventTicket={20009} totalEarned={40} />
          <RewardCard eventTicket={20009} totalEarned={40} />
          <RewardCard eventTicket={20009} totalEarned={40} />
          <RewardCard eventTicket={20009} totalEarned={40} />
        </section>
      </div>
    </>
  );
};

export default ExpiredRewards;
