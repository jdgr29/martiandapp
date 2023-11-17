// import Slider from "react-slick";
import { useEffect } from "react";
import { EventDetails } from "../../modules/events/types";
import { Ticket } from "../../modules/tickets/types";
import { EventCard } from "../Events/EventCard";
import dynamic from "next/dynamic";

type CarouselType = "event" | "collectable" | "ticket";

const Carousel = ({
  carouselItems,
  type,
}: {
  carouselItems: any[];
  type: CarouselType;
}) => {
  const settings = {
    dots: true,
    infinite: carouselItems.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    rows: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: carouselItems.length > 1 ? true : false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log("items", carouselItems.length);

  const Slider = dynamic(() => import("react-slick"), {
    ssr: false,
  });

  return (
    <>
      <div className=" lg:w-[85%] md:w-[75%]  w-[55%]  mt-4 mr-auto ml-[50%] translate-x-[-50%]  ">
        <Slider {...settings}>
          {carouselItems.map((item: any, index: number) => {
            if (type == "event") {
              const event = item as EventDetails;
              return (
                <div
                  key={index}
                  className="lg:mx-[47.5px] self-center ml-4 w-[100%] h-[320px] "
                >
                  <EventCard event={event} />
                </div>
              );
            } else if (type == "collectable")
              return (
                <div
                  key={index}
                  className="lg:mx-[47.5px] self-center ml-4 w-[100%] h-[320px] "
                ></div>
              );
            else
              return (
                <div
                  key={index}
                  className="lg:mx-[47.5px] self-center ml-4 w-[100%] h-[320px] "
                ></div>
              );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
