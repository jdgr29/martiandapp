import React from "react";
import Carousel from "../Carousel/Carousel";
import ExploreEvents from "./ExploreEvents/ExploreEvents";

const FeaturedEvents = () => {
  const events = [
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
      <style jsx global>
        {`
          height: 100%;
          width: 100%;
        `}
      </style>

      <div className="lg:mt-12 mt-12 transition-all duration-1200 ease lg:justify-start lg:mr-0 lg:ml-[16] lg:translate-x-[0%] mr-auto ml-[50%] translate-x-[-50%] lg:ml-16 w-[85%] justify-center gap-6 mt-5 flex lg:gap-16 items-center">
        <div className="bg-[#FB4570] p-2 rounded-2xl inline">
          Featurd Events
        </div>
        <div className="italic">{`Don't miss out`}</div>
      </div>
      <Carousel carouselItems={events} type={"event"} />
      <ExploreEvents />
    </>
  );
};

export default FeaturedEvents;
