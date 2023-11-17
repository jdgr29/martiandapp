import Link from "next/link";
import { useRouter } from "next/router";

export const DashboardHome = () => {
  const router = useRouter();
  const routeName = router.pathname;

  return (
    <>
      <header className="flex lg:mt-20 flex-wrap lg:mt-5 w-full relative items-start justify-between transition-all ease duration-1200  mt-2  lg:px-[100px] px-[10px] ">
        <div className="flex lg:justify-start justify-center lg:my-0 my-6 lg:w-[48%] w-full lg:gap-x-5 gap-x-2">
          <div
            className={`gap-x-2 ${
              routeName === "/admin" ? "bg-[#1456D9]" : "bg-[#333333] "
            }  flex py-2 relative rounded-xl border-[2px] ${
              routeName === "/admin" ? "border-[#1456D9]" : "border-[#666666]"
            } px-4 items-center justify-center`}
          >
            <Link
              href={"/admin/"}
              className="block  text-white text-xl lg:inline-block  hover:text-green "
            >
              Tickets
            </Link>
          </div>
          <div
            className={`gap-x-2 ${
              routeName === "/admin/collectables-info"
                ? "bg-[#1456D9]"
                : "bg-[#333333] "
            }  flex py-2 relative rounded-xl border-[2px] ${
              routeName === "/admin/collectables-info"
                ? "border-[#1456D9]"
                : "border-[#666666]"
            } px-4 items-center justify-center`}
          >
            <Link
              href={"/admin/collectables-info"}
              className="block  text-white text-xl lg:inline-block  hover:text-green "
            >
              Collectables
            </Link>
          </div>
        </div>
        <div className="flex lg:w-[48%] lg:justify-end lg:order-last md:order-last order-first lg:my-0 my-5  justify-center w-full lg:gap-x-5 gap-x-1">
          <div className=" gap-x-2 bg-[#1456D9] flex py-2 relative rounded-xl  px-4 items-center justify-center">
            <Link
              href={"/#"}
              className="block  text-white text-xl lg:inline-block  hover:text-green "
            >
              Week
            </Link>
          </div>
          <div className=" gap-x-2 bg-transparent flex py-2 relative rounded-xl   px-4 items-center justify-center">
            <Link
              href={"/#"}
              className="block  text-white text-xl lg:inline-block  hover:text-green "
            >
              Month
            </Link>
          </div>
          <div className=" gap-x-2 bg-transparent flex py-2 relative rounded-xl   px-4 items-center justify-center">
            <Link
              href={"/#"}
              className="block  text-white text-xl lg:inline-block  hover:text-green "
            >
              Custom
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
