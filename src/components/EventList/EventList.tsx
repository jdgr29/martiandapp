import Image from "next/image";
import calendar from "../../../public/assets/calendar_event.png";
import pin from "../../../public/assets/pin_icon.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EventDetails } from "../../modules/events/types";
const Event = ({
  attended,
  goToEventPage,
  data,
}: {
  attended: boolean;
  goToEventPage: Function;
  data: EventDetails;
}) => {
  console.log("data", data);
  return (
    <div className="lg:w-[880px] lg:h-[232px] w-auto h-auto lg:gap-x-0 gap-x-2  items-center flex bg-[#41414180] mx-2 rounded-2xl">
      <div className="relative h-[100%] w-[231px] ">
        <Image
          src={
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          alt="photo of event"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="lg:ml-[75px]">
        <div className="flex w-full lg:gap-x-[160px] lg:gap-x-10 ">
          <div className="flex flex-col gap-y-3 ">
            <h1 className="lg:m-0 mx-2 py-1">{data.title}</h1>
            <p className="lg:m-0 mx-2">hosted by...</p>
            <div className="flex gap-x-2 lg:p-0 p-1">
              <div className="bg-[#3E3E3E80]  p-1  rounded flex items-center justify-center relative h-[50px] w-[50px]">
                <Image
                  src={calendar}
                  alt="calendar icon for event"
                  width={20}
                  height={20}
                  objectFit="contain"
                />
              </div>
              <div className="lg:text-lg text-sm">
                <p>December 17, 2022 </p>
                <p>Saturday, 4:00 - 10:00PMa</p>
              </div>
            </div>
            <div className="flex gap-x-2 lg:p-0 p-1">
              <div className="bg-[#3E3E3E80] rounded flex items-center justify-center relative h-[50px] w-[50px]">
                <Image
                  src={pin}
                  alt="calendar icon for event"
                  width={20}
                  height={20}
                  objectFit="contain"
                />
              </div>
              <div className="lg:text-lg text-sm">
                <p>Building/ Venue name</p>
                <p>location address</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  gap-x-2 flex-col ">
            <div className="flex gap-x-1">
              {!attended && (
                <>
                  <div className="flex mr-[20px] items-center ">
                    <div className=" lg:translate-x-[30px]">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        }
                        width={34}
                        height={34}
                        className="rounded-full z-10 "
                        alt="user profile"
                        objectFit="cover"
                      />
                    </div>
                    <div className=" lg:translate-x-[20px]">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        }
                        width={34}
                        height={34}
                        className="rounded-full z-20 "
                        alt="user profile"
                        objectFit="cover"
                      />
                    </div>
                    <div className="lg:translate-x-[10px] ">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        }
                        width={34}
                        height={34}
                        className="rounded-full z-30 "
                        alt="user profile"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <p className="lg:text-xl text-xs lg:p-0 py-4 mr-1 w-fit">
                    Friends going
                  </p>
                </>
              )}
              {attended && (
                <p className="lg:text-2xl text-2xl font-bold  lg:p-0 py-4 mr-1 w-fit">
                  Active
                </p>
              )}
            </div>
            <div className="self-end">
              <button
                onClick={() => goToEventPage(2)} //TODO use real event id
                className="bg-[#1A63F1] lg:m-0 m-2 py-2 px-4 rounded-xl"
              >
                View Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggler = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    return setShowFilters(false);
  }, []);
  return (
    <>
      <div
        className={`lg:w-[265px] md:w-[265px] lg:h-screen md:h-screen lg:p-3 p-1 lg:flex lg:relative absolute top-0 ${
          showFilters ? "w-[265px] px-3" : " md:w-[0px] w-[0px] px-0"
        }  overflow-hidden transition-all ease duration-800 right-0 h-screen lg:z-0 md:z-0 z-50 pt-7  flex-col gap-y-5 bg-[#202020D9]`}
      >
        <h1 className="text-3xl lg:text-start md:text-start text-center">
          filters
        </h1>
        <div>
          <h1 className="text-xl lg:text-start md:text-start text-center font-thin">
            Featured Events
          </h1>
        </div>
        <div>
          <h1 className="text-xl lg:text-start md:text-start text-center font-thin">
            Friends Going
          </h1>
        </div>
        <div className="flex gap-y-3 flex-col my-1">
          <h1>Price</h1>
          <input
            className="bg-[#141414] py-2 px-4 rounded"
            placeholder="from"
            type="number"
          />
          <input
            className="bg-[#141414] py-2 px-4 rounded"
            placeholder="to"
            type="number"
          />
        </div>

        <div className="flex gap-y-3 flex-col">
          <h1>Date</h1>
          <input
            className="bg-[#141414] py-2 px-4 rounded"
            placeholder="from"
            type="date"
          />
          <input
            className="bg-[#141414] py-2 px-4 rounded"
            placeholder="to"
            type="date"
          />
        </div>
        <div className="flex gap-y-3 flex-col">
          <h1>Event Organizer</h1>
          <input
            className="bg-[#141414] py-2 px-4 rounded"
            placeholder="Search..."
            type="text"
          />
        </div>
        <button
          onClick={() => toggler()}
          className="mt-4 lg:hidden block bg-[#2E3192] border-[3px] border-[#0071BC] lg:m-0  py-2 px-10 rounded-xl"
        >
          Apply Filters
        </button>
      </div>
      <button
        onClick={() => toggler()}
        className={`lg:hidden  absolute bottom-0 left-0 z-40 ml-4 mb-4 bg-[#2E3192] border-[3px] ${
          showFilters ? "hidden" : "block "
        } border-[#0071BC] lg:m-0  py-2 px-10 rounded-xl`}
      >
        Filters
      </button>
    </>
  );
};
export const EventList = ({
  showFilter,
  attended,
  carouselItems,
}: {
  showFilter: boolean;
  attended: boolean;
  carouselItems: any[];
}) => {
  const router = useRouter();
  const goToEventPage = (id: number) => {
    router.push(`events/${id}`);
  };
  return (
    <div className="flex justify-around lg:ml-[120px]">
      {showFilter && <Filters />}
      <div className="w-full flex-col flex gap-y-4  mb-[50px]">
        {carouselItems?.map((event, index: number) => (
          <Event
            key={index}
            goToEventPage={goToEventPage}
            attended={attended}
            data={event}
          />
        ))}
      </div>
    </div>
  );
};
