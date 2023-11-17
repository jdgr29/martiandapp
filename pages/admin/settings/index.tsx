import { useRouter } from "next/router";
import React from "react";
import { AdminNav } from "../../../src/components/Admin/AdminNav/AdminNav";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";

const AdminSettings = () => {
  const router = useRouter();
  return (
    <>
      <style jsx global>
        {`
          body {
            background: black;
            width: 100wv;
            height: 100%;
          }
        `}
      </style>
      <AdminNav />
      <div className="lg:px-[100px] flex flex-col px-[10px] lg:mt-16">
        <h1 className="text-5xl lg:text-start text-center my-3 text-[white]">
          Settings
        </h1>

        <div className="w-full bg-[#0E0E0E]">
          <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:justify-center items-center lg:mt-0 mt-6 lg:h-[30em] mb-5 gap-x-6">
            <div className=" w-full rounded h-full bg-[#161616]">
              <div className="flex lg:justify-start text-3xl justify-center my-2 px-4 py-8">
                <p className="lg:px-3 text-2xl">Account</p>
              </div>
              <div className="flex lg:justify-around justify-center items-center lg:flex-row flex-col  ">
                <div>
                  <div className="relative basis-[47%]  h-[230px] w-[220px] ">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=368&q=80"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt="event photo"
                      className="rounded-full p-3"
                    />
                  </div>
                  <div className="flex items-center gap-x-3 justify-center  py-2">
                    <p className="lg:text-start text-center">
                      Edit Profile Image
                    </p>

                    <div className="self-end py-1">
                      <FaEdit size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="pb-2 lg:pt-0 pt-5">
                    <p className="lg:text-start text-center text-[gray]">
                      Username
                    </p>
                    <p className="lg:text-start text-center">OmgIamAnAdmin</p>
                  </div>
                  <div className="flex items-center gap-x-3 justify-center  py-2">
                    <div className="flex flex-col ">
                      <p className="lg:text-start text-center text-[gray]">
                        Email
                      </p>
                      <p className="lg:text-start text-center">
                        Omglookatthis22@gmail.com
                      </p>
                    </div>
                    <div className="self-end py-1">
                      <FaEdit size={20} />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 lg:justify-start justify-center  py-2">
                    <div className="flex flex-col ">
                      <p className="lg:text-start text-center text-[gray]">
                        Contact Number
                      </p>
                      <p className="lg:text-start text-center">
                        +44 7134234232
                      </p>
                    </div>
                    <div className="self-end py-1">
                      <FaEdit size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                  <div className="pb-2 lg:pt-0 pt-5">
                    <p className="lg:text-start text-center text-2xl text-[white]">
                      Payment Method
                    </p>
                  </div>
                  <p className="lg:text-start text-center text-[white]">Fiat</p>
                  <div className="py-2 flex items-center">
                    <div className="flex items-center lg:gap-x-2 gap-x-3">
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[gray]">Card Type</p>
                        <p className="px-3  bg-[red] text-[white] w-fit rounded">
                          Visa
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[gray]">Expiry Date</p>
                        <p className="">01/25</p>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[gray]">Card Number</p>
                        <p className="">3234*</p>
                      </div>
                      <FaEdit size={20} />
                    </div>
                  </div>
                  <p className="lg:text-start mt-4 text-center text-[white]">
                    Crypto
                  </p>
                  <div className="py-2 flex items-center">
                    <div className="flex items-center lg:gap-x-5 gap-x-3">
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[gray]">Chain type</p>
                        <div className="flex gap-x-3">
                          <div className="h-[20px] w-[20px] rounded-full bg-[yellow]"></div>
                          <p>BNB CHAIN</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[gray]">Wallet Address</p>
                        <p className="">Woiasopdiiasd23801823</p>
                      </div>

                      <FaEdit size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mb-6 lg:w-1/2 w-full  ">
            <div className="flex lg:justify-between text-3xl bg-[#1A1A1A]  rounded  justify-center my-3  px-4 py-8">
              <p className="lg:px-3 text-2xl">QR Scanner Devices</p>
              <button className="px-3 text-sm rounded py-1 bg-[#0B0B0B]">
                Add Device
              </button>
            </div>
            <div className=" w-full">
              <table className="w-full">
                <tr>
                  <td className="p-2 text-center">Device Id</td>
                  <td className="p-2 text-center">Password</td>
                  <td className="p-2 text-center">Date Created</td>
                  <td className="p-2 text-center">Action</td>
                </tr>
                {/* //TODO map over this to display scanned devices */}
                <tr className="bg-[#060606] h-[50px]">
                  <td className="p-2 text-center">#00001</td>
                  <td className="p-2 text-center">Wasiudiasu8a7s9da</td>
                  <td className="p-2 text-center">20/01/2023</td>
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center gap-x-3">
                      <p>Edit</p>
                      <FaEdit />
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#060606] h-[50px]">
                  <td className="p-2 text-center">#00001</td>
                  <td className="p-2 text-center">Wasiudiasu8a7s9da</td>
                  <td className="p-2 text-center">20/01/2023</td>
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center gap-x-3">
                      <p>Edit</p>
                      <FaEdit />
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#060606] h-[50px]">
                  <td className="p-2 text-center">#00001</td>
                  <td className="p-2 text-center">Wasiudiasu8a7s9da</td>
                  <td className="p-2 text-center">20/01/2023</td>
                  <td className="p-2 text-center">
                    <div className="flex items-center justify-center gap-x-3">
                      <p>Edit</p>
                      <FaEdit />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettings;
