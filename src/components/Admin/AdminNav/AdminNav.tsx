import { useRouter } from "next/router";
import Image from "next/image";
import naitramLogo from "../../../../public/assets/naitramlogo.png";
import profilePic from "../../../../public/sad-martian.png";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

export const AdminNav = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const routeName = router.pathname;
  const showNavBar = () => {
    setShow(!show);
  };

  return (
    <nav className="flex flex-wrap lg:mt-5 w-full relative items-start justify-between transition-all ease duration-1200  mt-2  lg:px-[100px] px-[10px] ">
      <div className="flex w-[48%] self-center items-center justify-start  divide-x">
        <div
          onClick={() => router.push("/admin")}
          className=" flex items-center divide-x-2 gap-x-2   flex-shrink-0 "
        >
          <Image
            height={70}
            width={70}
            objectFit="contain"
            src={naitramLogo}
            alt="mmmc logo"
          />
          <div className=" flex items-center justify-center">
            <p className="  text-xl">Admin</p>
          </div>
        </div>
      </div>
      <div className="w-[48%]  items-center  justify-end flex">
        <div
          onClick={() => showNavBar()}
          className="flex items-center justify-center"
        >
          <div>
            <p className="whitespace-nowrap">[Admin Name]</p>
          </div>
          <button className="flex items-center px-3 py-2 rounded-full text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <div className="flex w-[70px] h-[70px] rounded-full ">
              <Image
                className="rounded-full "
                objectFit="cover"
                src={profilePic}
                alt="profile pic"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full lg:mt-10 mt-4 lg:px-[150px] flex-wrap lg:gap-y-1 gap-y-3 flex justify-center gap-x-8 items-center ">
        <div
          className={` ${
            routeName === "/admin" ? "bg-[#1456D9]" : "bg-[#333333] "
          }  flex relative rounded-xl border-[2px] ${
            routeName === "/admin" ? "border-[#1456D9]" : "border-[#333333] "
          }  px-4 py-2  gap-x-2  items-center justify-center`}
        >
          <MdDashboard />
          <Link
            href={"/admin"}
            className=" text-xl block  text-white lg:inline-block    hover:text-green "
          >
            Dashboard
          </Link>
        </div>
        <div
          className={` ${
            routeName === "/admin/events" ? "bg-[#1456D9]" : "bg-[#333333] "
          }  flex relative rounded-xl border-[2px] ${
            routeName === "/admin/events"
              ? "border-[#1456D9]"
              : "border-[#333333] "
          }  px-4 py-2  gap-x-2  items-center justify-center`}
        >
          <MdDashboard />
          <Link
            href={"/admin/events"}
            className="block  text-white text-xl lg:inline-block  hover:text-green "
          >
            Events
          </Link>
        </div>
        <div
          className={` ${
            routeName === "/admin/collectables"
              ? "bg-[#1456D9]"
              : "bg-[#333333] "
          }  flex relative rounded-xl border-[2px] ${
            routeName === "/admin/collectables"
              ? "border-[#1456D9]"
              : "border-[#333333] "
          }  px-4 py-2  gap-x-2  items-center justify-center`}
        >
          <MdDashboard />
          <Link
            href={"/admin/collectables"}
            className="block  text-white text-xl lg:inline-block  hover:text-green "
          >
            Collectables
          </Link>
        </div>
        <div
          className={` ${
            routeName === "/admin/orders" ? "bg-[#1456D9]" : "bg-[#333333] "
          }  flex relative rounded-xl border-[2px] ${
            routeName === "/admin/orders"
              ? "border-[#1456D9]"
              : "border-[#333333] "
          }  px-4 py-2  gap-x-2  items-center justify-center`}
        >
          <MdDashboard />
          <Link
            href={"/admin/orders"}
            className="block text-white text-xl lg:inline-block hover:text-green "
          >
            Orders
          </Link>
        </div>
        <div
          className={` ${
            routeName === "/admin/settings" ? "bg-[#1456D9]" : "bg-[#333333] "
          }  flex relative rounded-xl border-[2px] ${
            routeName === "/admin/settings"
              ? "border-[#1456D9]"
              : "border-[#333333] "
          }  px-4 py-2  gap-x-2  items-center justify-center`}
        >
          <MdDashboard />
          <Link
            href={"/admin/settings"}
            className="block text-white text-xl lg:inline-block hover:text-green "
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};
