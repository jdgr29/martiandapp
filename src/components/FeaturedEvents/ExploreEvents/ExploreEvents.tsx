import { useRouter } from "next/router";
import { EventDetails } from "../../../modules/events/types";
import { EventCard } from "../../Events/EventCard";

const ExploreEvents = () => {
  const router = useRouter();
  const events = [
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
    {
      eventName: "Event Name",
      eventHost: "Event host",
      eventDate: "Date",
      EventLocation: "Event Location",
    },
  ];
  return (
    <>
      <h1 className="ml-2 lg:ml-16 transition-all duration-1200 ease lg:mt-8 lg:text-start text-center my-2 text-5xl text-white ">
        Explore Events
      </h1>
      <h2 className="ml-2 lg:ml-16 transition-all duration-1200 ease lg:mt-8 lg:text-start text-center my-2 text-2xl text-white ">
        Filters
      </h2>

      <div className="lg:ml-[65px] transition-all duration-1200 ease flex lg:justify-start justify-center lg:w-[90%] w-[100%] p-3">
        <div className="flex lg:flex-row transition-all duration-1200 ease lg:self-end flex-col items-center text-center gap-1">
          <p>Featured Events</p>
          <input
            type="checkbox"
            className=" appearance-none border-sky-700 border-2  rounded-full  checked:bg-blue-500 w-[20px]  h-[20px] "
          />
        </div>
        <div className="flex ml-6 flex-col">
          <p className="text-xl transition-all duration-1200 ease lg:text-start text-center">
            Date
          </p>
          <div className="flex transition-all duration-1200 ease lg:flex-row flex-col gap-5 ">
            <div className="flex transition-all duration-1200 ease lg:flex-row flex-col items-center text-center gap-1">
              <p className="italic ">Today</p>
              <input
                type="checkbox"
                className=" appearance-none border-sky-700 border-2  rounded-full transition-all duration-1200 ease checked:bg-blue-500 w-[20px]  h-[20px] "
              />
            </div>
            <div className="flex lg:flex-row flex-col transition-all duration-1200 ease items-center text-center gap-1">
              <p className="italic ">This week</p>
              <input
                type="checkbox"
                className=" appearance-none border-sky-700 border-2  rounded-full  checked:bg-blue-500 w-[20px]  h-[20px] "
              />
            </div>
            <div className="flex lg:flex-row flex-col transition-all duration-1200 ease items-center text-center gap-1">
              <p className="italic ">This month</p>
              <input
                type="checkbox"
                className=" appearance-none border-sky-700 border-2  rounded-full  checked:bg-blue-500 w-[20px]  h-[20px] "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-6 ">
          <p className="text-xl">Price</p>
          <div className="flex lg:flex-row  transition-all duration-1200 ease flex-col gap-5">
            <div className="flex lg:flex-row  transition-all duration-1200 ease flex-col items-center text-center gap-1">
              <p className="italic ">0-50</p>
              <input
                type="checkbox"
                className=" appearance-none border-sky-700 border-2  rounded-full  checked:bg-blue-500 w-[20px]  h-[20px] "
              />
            </div>
            <div className="flex lg:flex-row flex-col transition-all duration-1200 ease items-center text-center gap-1">
              <p className="italic ">51-100</p>
              <input
                type="checkbox"
                className=" appearance-none border-sky-700 border-2 transition-all duration-1200 ease rounded-full  checked:bg-blue-500 w-[20px]  h-[20px] "
              />
            </div>
            <div className="flex lg:flex-row flex-col items-center transition-all duration-1200 ease text-center gap-1">
              <p className="italic ">100+</p>
              <input
                type="checkbox"
                className=" appearance-none border-sky-700 border-2  rounded-full  checked:bg-blue-500 w-[20px]  h-[20px] "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-6 self-start lg:w-auto md:w-auto sm:w-auto w-[100%]  transition-all duration-1200 ease justify-center ">
          <h1>Event Organizer</h1>
          <input
            className="px-3 w-[100%] placeholder:text-gray-200 h-[30px] rounded focus:outline-none text-black focus:ring focus:ring-blue-500 bg-neutral-400"
            placeholder="Search Event Organizer..."
          />
        </div>
      </div>
      <div className="lg:mt-12 mt-3 flex transition-all  duration-1200 ease flex-wrap gap-x-4 gap-y-12 justify-center items-center p-5 lg:w-full w-[98%]">
        {events?.map((event, index) => (
          <div
            key={index}
            onClick={() => router.push("/events/1")}
            className="mt-5 active:scale-90 hover:scale-110 flex justify-center transition-all duration-1200 ease transition ease duration-600 rounded relative lg:w-[20%] w-[90%] md:w-[25%]"
          >
            <EventCard event={event as unknown as EventDetails}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExploreEvents;
