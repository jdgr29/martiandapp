// import { useRouter } from "next/router";
// import Image from "next/image";
// import { BsCalendar } from "react-icons/bs";
// import { IoLocationOutline } from "react-icons/io5";
// import { EventCard } from "../../Events/EventCard";

// const ExploreCollectables = () => {
//   const router = useRouter();
//   const collectables = [
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//     {
//       collectableName: "Event Name",
//       collectableCreator: "Event host",
//       collectableDate: "Date",
//     },
//   ];
//   return (
//     <>
//       <h1 className="ml-2 lg:ml-16 transition-all duration-1200 ease lg:mt-8 lg:text-start text-center my-2 text-5xl text-white ">
//         Explore Collectables
//       </h1>
//       <h2 className="ml-2 lg:ml-16 transition-all duration-1200 ease lg:mt-8 lg:text-start text-center my-2 text-2xl text-white ">
//         Filters
//       </h2>

//       <div className="lg:ml-[65px] transition-all duration-1200 ease flex lg:justify-start justify-center lg:w-[90%] w-[100%] p-3">
//         <div className="flex lg:flex-row transition-all duration-1200 ease lg:self-end flex-col items-center text-center gap-1">
//           <p>Featured Events</p>
//           <input
//             type="checkbox"
//             className=" appearance-none border-sky-700 border-2  rounded-full  checked:bg-blue-500 w-[20px]  h-[20px] "
//           />
//         </div>

//         <div className="flex flex-col ml-6 self-start  transition-all duration-1200 ease justify-center ">
//           <h1>Creator</h1>
//           <input
//             className="px-3 w-[100%] placeholder:text-gray-200 h-[30px] rounded focus:outline-none text-black focus:ring focus:ring-green-300 bg-neutral-400"
//             placeholder="Search Collectables"
//           />
//         </div>
//       </div>
//       <div className="lg:mt-12 mt-3 flex transition-all duration-1200 ease flex-wrap gap-x-4 gap-y-12 justify-evenly p-5 lg:w-full w-[90%]">
//         {collectables?.map((event, index) => (
//           <div
//             key={index}
//             onClick={() => router.push("/collectables/1")}
//             className="mt-5 active:scale-90 hover:scale-110 flex justify-center transition-all duration-1200 ease transition ease duration-600 rounded relative lg:w-[20%] w-[90%] md:w-[25%]"
//           >
//             <EventCard />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ExploreCollectables;

export {}