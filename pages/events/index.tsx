import { NextPage } from "next";
import React from "react";
import NavBar from "../../src/components/Navbar/Navbar";
import Carousel from "../../src/components/Carousel/Carousel";
import { EventList } from "../../src/components/EventList/EventList";
import {
  useAppDispatch,
  useAppSelector,
  useAppThunkDispatch,
} from "../../src/modules/core/redux/hooks";
import {
  selectEventConstraints,
  selectEventErrors,
  selectEvents,
  selectLoadingStatus,
} from "../../src/modules/events/eventsSlice";
import { useRouter } from "next/router";

const Events: NextPage = () => {
  const router = useRouter();
  // const events = useAppSelector((state) => selectEvents(state.events));
  const error = useAppSelector((state) => selectEventErrors(state.events));
  const status = useAppSelector((state) =>
    selectEventConstraints(state.events)
  );
  const loading = useAppSelector((state) => selectLoadingStatus(state.events));
  const dispatch = useAppDispatch();
  const thunkDispatch = useAppThunkDispatch();

  const goToDetailedTicketPage = (id: number) => {
    router.push(`tickets/${id}`);
  };

  const events = [
    {
      photo:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex lg:justify-start justify-center">
        <h1 className="lg:ml-[160px] text-center w-fit my-5 text-white transition-all duration-500 ease bg-[#E42256] lg:w-fit p-2 rounded-2xl">
          Featured Event
        </h1>
      </div>

      <Carousel carouselItems={events} type={"event"} />
      {/* TODO make this items only featured */}

      <h2 className="lg:my-4 lg:ml-[120px] self-center text-center text-white transition-all duration-500 text-4xl ease lg:w-fit my-5 p-2 rounded-2xl">
        Explore Events
      </h2>
      <EventList carouselItems={events} showFilter={true} attended={false} />
    </div>
  );
};

export default Events;
