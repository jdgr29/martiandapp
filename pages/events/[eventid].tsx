import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import GetTicketsModal from "../../src/components/GetTicketsModal/GetTicketsModal";
import { useState } from "react";
import calendar from "../../public/assets/calendar_event.png";
import pin from "../../public/assets/pin_icon.png";
import { UserComments } from "../../src/components/UserComments/UserComments";
import { CarouselPhoto } from "../../src/components/Carousel/CarouselPhotos";
import { PhotoGalleryModal } from "../../src/components/PhotoGalleryModal/PhotoGalleryModal";
import NavBar from "../../src/components/Navbar/Navbar";

const Event: NextPage = () => {
  const router = useRouter();
  console.log("page query", router.query);
  const [show, setShow] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showGalleryModal, setShowGalleryModal] = useState<boolean>(true);
  const [expandPhotoRoll, setExpandPhotoRoll] = useState<boolean>(false);

  const carouselPhotosItems = [
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
      <GetTicketsModal show={show} setShow={setShow} />
      <div className="lg:flex flex lg:flex-row flex-col justify-center gap-x-10 lg:ml-10 lg:px-0 px-2">
        <div className="lg:hidden flex absolute z-50 bottom-0 left-[50%] translate-x-[-50%]">
          <button className="bg-[#2E3192] border-[3px] border-[#0071BC] lg:m-0 m-2 py-2 px-10 rounded-xl">
            Buy now
          </button>
        </div>
        <div className="basis-5/12">
          <h1 className="lg:text-start text-center text-white text-3xl">
            Event Title
          </h1>
          <h2 className="lg:text-start text-center text-white text-xl lg:my-1">
            Hosted by...
          </h2>
          <p className="lg:text-start text-center text-white text-lg lg:my-5">
            Event Description...
          </p>
          <div className="flex flex-col lg:gap-y-5 lg:my-[80px] my-[10px]">
            <div className="flex gap-x-9 lg:p-0 p-2 ">
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
            <div className="flex gap-x-9 lg:p-0 p-2 ">
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
          <div className="flex justify-between">
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
                  className="rounded-full z-30 "
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
                  className="rounded-full z-50 "
                  alt="user profile"
                  objectFit="cover"
                />
              </div>
              <h1 className="lg:ml-6 text-xl ml-3 font-thin">Friends Going</h1>
            </div>
            <div className="lg:self-end lg:flex hidden">
              <button className="bg-[#2E3192] border-[3px] border-[#0071BC] lg:m-0 m-2 py-2 px-4 rounded-xl">
                Buy now
              </button>
            </div>
          </div>
          <h1 className="text-center text-5xl text-white mt-[20px] lg:mt-[100px]">
            LIVE ACTIVITY
          </h1>
          <p className="text-center mt-4 mb-7">
            Submit your attendance before you join
          </p>
          <div className="flex w-full lg:mb-7 justify-around lg:my-7 lg:mb-0 mb-[40px]">
            <p className="text-center text-5xl">
              🥳 <br /> <p className="text-2xl mt-1">Going</p>
            </p>
            <p className="text-center text-5xl">
              👀 <br /> <p className="text-2xl mt-1">Maybe</p>
            </p>
            <p className="text-center text-5xl">
              👎 <br /> <p className="text-2xl mt-1">Not Going</p>
            </p>
          </div>
          <div className="flex mt-8 flex-col transition-all ease duration-800 gap-y-10 h-[440px] mb-5 overflow-scroll">
            <UserComments order={true} />
            <UserComments order={false} />
            <UserComments order={true} />
            <UserComments order={false} />
            <UserComments order={true} />
            <UserComments order={false} />
            <UserComments order={true} />
            <UserComments order={false} />
          </div>
        </div>
        <div className="basis-5/12 flex flex-col lg:order-last order-first">
          <div className="flex justify-between lg:mt-8 lg:mb-2 my-[10px] lg:order-first ">
            <p className="text-white transition-all duration-500 ease bg-[#AD00BC] w-fit px-3 py-1 rounded-2xl">
              Featured
            </p>
            <div className="flex gap-x-2">
              <p className="text-white transition-all duration-500 ease border-[#43BBFF]  text-[#43BBFF] border-[2px] w-fit px-3 py-1 rounded-2xl">
                + Add To Calendar
              </p>
              <p className="text-white transition-all duration-500 ease text-[#ED7CFF] border-[#ED7CFF] border-[2px] w-fit px-3 py-1 rounded-2xl">
                Share
              </p>
            </div>
          </div>
          <div className="flex h-[408px] lg:mx-0 order-first  mx-3 relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="event photo"
              objectFit="cover"
              layout="fill"
              className="rounded"
            />
          </div>
          <div className="flex justify-between lg:mt-4 lg:mb-3 my-3 items-center ">
            <p className="text-[white] text-2xl">Photo Roll</p>
            <p
              onClick={() => setExpandPhotoRoll(!expandPhotoRoll)}
              className="text-[white] text-lg lg:hidden"
            >
              Expand
            </p>
            <p
              onClick={() => setShowGalleryModal(!showGalleryModal)}
              className="text-[white] text-lg lg:block hidden  "
            >
              View All
            </p>
          </div>
          <PhotoGalleryModal
            photos={carouselPhotosItems}
            show={showGalleryModal}
            setShow={setShowGalleryModal}
          />
          <div className="flex transition-all ease duration-800 lg:hidden my-6">
            <CarouselPhoto
              expand={expandPhotoRoll}
              photos={carouselPhotosItems}
            />
          </div>

          <div className="lg:grid hidden grid-cols-3 gap-x-3 gap-y-3 ">
            <Image
              src={
                "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt="event photos"
              objectFit="cover"
              height={170}
              width={170}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
