import NavBar from "../src/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { fetchTicketsByEventId } from "../src/modules/tickets/ticketsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FetchTicketsByEventIdParams } from "../src/modules/tickets/ticketsSlice";
import { selectTickets } from "../src/modules/tickets/ticketsSlice";
const Home = () => {
  const supabase = useSupabaseClient();
  const dispatch = useDispatch();
  const eventId = useSelector(selectTickets);
  useEffect(() => {
    dispatch(fetchTicketsByEventId({ sb: supabase, event: 1 }));
  }, []);
  const Router = useRouter();
  console.log("event but by ID", eventId);
  return (
    <>
      <style jsx global>
        {`
          height: 100%;
          width: 100%;
        `}
      </style>
      <NavBar />

      <div className="h-full lg:h-full md:h-full sm:h-full w-full transition-all duration-1200 ease ">
        <h1 className="transition-all duration-1200 ease text-center my-2 text-4xl text-white ">
          Welcome Back, [USER NAME HERE] !
        </h1>

        <h1 className=" transition-all duration-1200 ease  lg:mt-4 text-2xl my-2 text-center text-white ">
          You have <strong>1</strong> upcoming event
        </h1>

        <div className=" transition-all duration-1200 ease   translate-x-[0%] mr-auto ml-[50%]  translate-x-[-50%]  w-[100%] justify-center gap-6 mt-5 flex items-center">
          <div className="bg-[#104afb] p-2 rounded-2xl">Upcoming</div>
          <div>Attended</div>
          <div>Past events</div>
          <div>Hosting</div>
        </div>

        <div className=" flex gap-5 transition-all duration-1200 ease justify-center">
          <div
            onClick={() => Router.push("/events")}
            className="hover:scale-110 active:scale-90 hover:border-[green] mt-5 border-dashed border-[gray] border-2 transition-all duration-1200 bg-[#D9D9D9] ease lg:w-[18%] w-[40%] h-[260px] flex flex-col justify-evenly items-center "
          ></div>
          <div
            onClick={() => Router.push("/events")}
            className="hover:scale-110 active:scale-90 hover:border-[green] mt-5 border-dashed border-[gray] border-2 transition-all duration-1200 ease lg:w-[18%] w-[40%] h-[260px] flex flex-col justify-evenly items-center "
          >
            <h1 className=" text-8xl font-thin"> + </h1>
            <h1>Explore Events</h1>
          </div>
          <div className="flex justify-center items-center lg:ml-10">
            <BsFillArrowRightCircleFill size={45} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
