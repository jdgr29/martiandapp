import NavBar from "../../src/components/Navbar/Navbar";
import { EventCard } from "../../src/components/Events/EventCard";
import { RewardCard } from "../../src/components/RewardCard/RewardCard";
import rewardIcon from "../../public/assets/rewardicon.png";
import Image from "next/image";
import { RewardsNav } from "../../src/components/RewardsNav/rewardsNav";
import { EventList } from "../../src/components/EventList/EventList";
const Rewards = () => {
  return (
    <>
      <NavBar />

      <div className="w-[95%] lg:w-[80%]  flex ml-[50%] mr-auto translate-x-[-50%]  flex-col">
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

        <div className="my-4 flex-col flex justify-center items-center">
          <h2 className="text-3xl font-bold my-4 text-[white]">Total Earned</h2>
          <div className="flex gap-x-10 lg:w-[80%] h-[180px] w-[95%] ml-[50%] mr-auto translate-x-[-50%] justify-between items-center bg-[#AD00BCA6] ">
            <div className="flex flex-col content-center w-[80%] gap-x-6  p-2 ">
              <p className="lg:text-5xl text-2xl text-center">
                ...............10.763
              </p>
            </div>
            <div className=" w-[180px] h-[180px] p-3 lg:text-3xl text-lg bg-[#09090940] flex items-center justify-center">
              <p>$MRT</p>
            </div>
          </div>
        </div>

        <RewardsNav activity={true} />

        <nav className="lg:flex md:flex hidden w-full bg-[#2020208C] h-[90px] rounded  items-center justify-center lg:gap-x-7 my-5 gap-x-10">
          <div className="flex justify-center items-center w-full">
            <p className="text-center text-2xl font-bold">Filters</p>
          </div>
          <div className="border-[gray] border-r-[2px] h-[90px]"></div>
          <div className="flex gap-x-4 items-center justify-center">
            <label className="font-bold text-lg">Date</label>
            <label className="text-sm">from</label>{" "}
            <input type="date" placeholder="From" />
            <label className="text-sm">to</label>
            <input type="date" placeholder="to" />
          </div>
          <div className="flex gap-x-3">
            <h2 className="w-fit">Event Organizer</h2>
            <input
              className="px-2 rounded bg-[black] placeholder:text-[white]"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="flex gap-x-3 p-5 items-center w-full">
            <label>Active</label>
            <input type="checkbox" />
            <label className="w-fit">In-active</label>
            <input type="checkbox" />
            <label>Expired</label>
            <input type="checkbox" />
          </div>
        </nav>
        <EventList showFilter={false} attended={true} />
      </div>
    </>
  );
};

export default Rewards;
