import Image from "next/image";
import { BsCalendar } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { EventDetails } from "../../modules/events/types";

export const EventCard = ({ event }: { event: EventDetails }) => {
  return (
    <div className="mt-5 lg:h-[300px] relative transition-all duration-1200 ease lg:w-[260px] w-[260px] h-[260px] flex flex-col justify-end items-start">
      <Image
        src={
          "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        layout="fill"
        objectFit="cover"
        className="rounded"
        alt="featured Naitram event image"
      />
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.9290091036414566) 3%, rgba(255,255,255,0) 99%)",
        }}
        className="relative flex flex-col justify-around gap-y-2 p-2   w-full"
      >
        <h1 className="lg:text-start text-center px-3">{event.title}</h1>
        <div className="flex lg:flex-row flex-col w-full justify-around  pb-2">
          <div className="flex gap-x-1 justify-center items-center">
            <BsCalendar />
            <h2 className="text-[12px]">
              {new Date(event.startDate).toLocaleString()}
            </h2>
          </div>
          <div className="flex gap-x-1  justify-center items-center">
            <IoLocationOutline />
            <h2 className="">location</h2>
          </div>
        </div>
        <h1 className="absolute bottom-[-25px] text-sm">Hosted by: host</h1>
      </div>
    </div>
  );
};
