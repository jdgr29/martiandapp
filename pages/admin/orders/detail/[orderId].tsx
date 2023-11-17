import { useRouter } from "next/router";
import React from "react";
import { AdminNav } from "../../../../src/components/Admin/AdminNav/AdminNav";
import Image from "next/image";
const OrderDetail = () => {
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
          Orders
        </h1>
        <button
          className="py-1 mb-3 w-fit lg:self-start self-center px-5 bg-[#0E0E0E] rounded"
          onClick={() => router.back()}
        >
          Back
        </button>
        <div className="w-full bg-[#0E0E0E]">
          <div className="flex bg-[#1A1A1A] px-4 py-8 justify-between">
            <p className="lg:px-3 text-2xl">Transaction History</p>
            <p className="px-3 py-1 rounded bg-[green]">Sale</p>
          </div>
          <div className="overflow-x-scroll">
            <table
              className="
            lg:my-6  lg:w-full bg-[#060606] "
            >
              <tr>
                <td className="text-center whitespace-nowrap  text-[gray]">
                  Order ID
                </td>
                <td className="text-center whitespace-nowrap  text-[gray]">
                  Transaction ID
                </td>
                <td className="text-center whitespace-nowrap text-[gray]">
                  Order Date
                </td>
                <td className="text-center  whitespace-nowrap text-[gray]">
                  Order Time
                </td>
                <td className="text-center whitespace-nowrap  text-[gray]">
                  Payment Method
                </td>
                <td className="text-center whitespace-nowrap  text-[gray]">
                  Amount
                </td>
                <td className="text-center whitespace-nowrap  text-[gray]">
                  Wallet Address
                </td>
              </tr>
              <tr>
                <td className="text-center whitespace-nowrap">#000001</td>
                <td className="text-center whitespace-nowrap">
                  hasdiuhaisuyae92739172412
                </td>
                <td className="text-center whitespace-nowrap">20/03/2023</td>
                <td className="text-center whitespace-nowrap">14:54</td>
                <td className="text-center whitespace-nowrap flex justify-center items-center gap-x-3">
                  <p className="text-start whitespace-nowrap inline">Fiat</p>
                  <p className=" text-center  whitespace-nowrap inline px-2 bg-[red] rounded">
                    Visa
                  </p>
                </td>
                <td className="text-center whitespace-nowrap">£15.00</td>
                <td className="text-center whitespace-nowrap">-----</td>
              </tr>
            </table>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-6 lg:justify-center items-center lg:mt-0 mt-6 lg:h-[30em] mb-5 gap-x-6">
            <div className="lg:basis-[45%] w-full  h-full rounded bg-[#161616]">
              <div className="flex my-2 justify-center px-4 py-8">
                <p className="lg:px-3 text-2xl">Ticket Information</p>
              </div>
              <div className="flex  lg:justify-around justify-center lg:items-start h-full items-center lg:flex-row flex-col ">
                <div>
                  <div className="relative basis-[47%]  h-[230px] w-[220px] ">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt="event photo"
                      className="rounded-md p-3"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button className="self-center lg:mb-0 mb-5 mt-5 w-fit px-3 py-1 bg-[blue] rounded">
                      View Event
                    </button>
                  </div>
                </div>
                <div className="flex flex-col basis-[47%]">
                  <div className="pb-2">
                    <p className=" text-[gray] lg:text-start text-center">
                      Ticket Name
                    </p>
                    <p className="lg:text-start text-center">
                      WSTRN Official After Party @ BLVD Manchester - Standard
                      Admission Ticket
                    </p>
                  </div>
                  <div className="py-2">
                    <p className="lg:text-start text-center text-[gray]">
                      Event Name
                    </p>
                    <p className="lg:text-start text-center">
                      WSTRN Official After Party @ BLVD Manchester
                    </p>
                  </div>
                  <div className="py-2">
                    <p className="lg:text-start text-center text-[gray]">
                      Location
                    </p>
                    <p className="lg:text-start text-center">
                      BLVD, Manchester, UK
                    </p>
                  </div>
                  <div className="flex lg:justify-between justify-around items-center py-2">
                    <div>
                      <p className=" text-[gray]">Date</p>
                      <p>20/03/2023</p>
                    </div>
                    <div>
                      <p className=" text-[gray]">time</p>
                      <p>19:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:basis-[45%] w-full rounded h-full bg-[#161616]">
              <div className="flex justify-center my-2 px-4 py-8">
                <p className="lg:px-3 text-2xl">Customer Information</p>
              </div>
              <div className="flex lg:justify-around justify-center items-center lg:flex-row flex-col  ">
                <div className="">
                  <div className="relative basis-[47%]  h-[230px] w-[220px] ">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1616428362406-4ffd9fcbf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt="event photo"
                      className="rounded-full p-3"
                    />
                  </div>
                  <div className="flex flex-col mt-6 justify-center items-center">
                    <p className="lg:text-start text-center text-[gray]">
                      Username
                    </p>
                    <p className="lg:text-start text-center">Omglookatthis22</p>
                  </div>
                </div>
                <div className="flex flex-col basis-[47%]">
                  <div className="pb-2 lg:pt-0 pt-5">
                    <p className="lg:text-start text-center text-[gray]">
                      Wallet Address
                    </p>
                    <p className="lg:text-start text-center">
                      Wwiauwudasoduisadasdo
                    </p>
                  </div>
                  <div className="py-2">
                    <p className="lg:text-start text-center text-[gray]">
                      Email
                    </p>
                    <p className="lg:text-start text-center">
                      Omglookatthis22@gmail.com
                    </p>
                  </div>
                  <div className="py-2">
                    <p className="lg:text-start text-center text-[gray]">
                      Transaction ID
                    </p>
                    <p className="lg:text-start text-center">
                      BWadjaow714asdas23sdasd112313
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <div>
                      <p className=" text-[gray]">Date</p>
                      <p>20/03/2023</p>
                    </div>
                    <div>
                      <p className=" text-[gray]">time</p>
                      <p>19:00</p>
                    </div>
                    <div>
                      <p className=" text-[gray]">amount</p>
                      <p>£15.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
