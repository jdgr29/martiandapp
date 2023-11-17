import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { NextPage } from "next";
import Logo from "public/assets/naitramLogo.png";
import Image from "next/image";

const SignUp: NextPage = () => {
  const [userData, setUserData] = useState({
    Name: "",
    LastName: "",
    UserName: "",
    Email: "",
    Password: "",
  });

  const [name, setName] = useState("");
  const router = useRouter();

  const submitName = async () => {
    //TODO add logic to send info to back-end
  };

  return (
    <>
      <style jsx>
        {`
          ::placeholder {
            color: white;
          }
        `}
      </style>

      <div className="flex justify-center items-center">
        <div className="flex w-1/1 lg:mt-0 lg:justify-center items-center justify-center lg:p-0 p-4">
          <div className="  text-center lg:mt-4 mt-10  rounded-lg shadow-md bg-transparent flex justify-center items-center flex-col lg:gap-5  gap-3">
            <Image src={Logo} width={100} height={100} alt="logo" />
            <p className="mb-1 mt-1 text-2xl font-bold tracking-tight text-4xl text-gray-900 dark:text-white">
              Sign Up and Sign In
            </p>
            <div className="flex lg:w-full w-full justify-around items-center gap-3  lg:gap-4 lg:flex-row  px-2">
              <input
                className="rounded-md bg-[#104afb] bg-opacity-50  text-center py-3  lg:text-base text-sm font-medium text-white outline-none 
                     focus:shadow-md h-full w-1/2"
                placeholder="User Name"
              />
              <div
                className="rounded-md  w-1/2 text-gray  text-base font-medium  text-white outline-none 
                       focus:shadow-md h-full"
              >
                <p className="text-justify text-sm vertical-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex lg:w-full w-full justify-around items-center gap-3  lg:gap-4 lg:flex-row  px-2">
              <input
                className="rounded-md bg-[#104afb] bg-opacity-50 text-center py-3  text-base lg:text-base text-sm text-white outline-none 
                      focus:border-[#104afb] focus:shadow-md w-1/2 h-full"
                placeholder="First Name"
              />

              <input
                className="rounded-md w-1/2 bg-[#104afb] bg-opacity-50 text-center py-3  text-sm font-medium text-white outline-none 
                      focus:border-[#104afb] focus:shadow-md h-full"
                placeholder="Last Name"
              />
            </div>

            <div className="flex lg:w-full w-full justify-around items-center gap-3  lg:gap-4 lg:flex-row  px-2">
              <input
                className="rounded-md w-1/2 bg-[#104afb] bg-opacity-50 text-center py-3  lg:text-base text-sm font-medium text-white outline-none 
                   focus:border-[#104afb] focus:shadow-md h-full"
                placeholder="Email"
              />

              <input
                className="rounded-md w-1/2 bg-[#104afb] bg-opacity-50 text-center py-3  lg:text-base text-sm font-medium text-white outline-none 
                  focus:border-[#104afb] focus:shadow-md h-full"
                type={"password"}
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col">
              <button
                className="m-2 lg:self-center hover:shadow-form rounded-md bg-[#104afb] py-3 px-12 text-center text-base font-semibold text-white outline-none"
                // onClick={async () => await submitName()}
              >
                SignUp
              </button>

              <p>Or</p>
              <Link href={"/login"}>
                <button className="m-2 lg:self-center hover:shadow-form rounded-md bg-[#FB4570] py-3 px-12 text-center text-base font-semibold text-white outline-none">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
