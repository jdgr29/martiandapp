import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export const EditEventTicketList = () => {
  const router = useRouter();
  const mockObject = [
    { event: "event" },
    { event: "event" },
    { event: "event" },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 3;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #0f0f13;
          background: #0f0f13;
        }
      `}</style>
      <div className="flex flex-col  gap-x-5 w-full items-center p-2 rounded">
        <div className="w-full">
          <div className="w-full">
            <table className="w-full ">
              <tr className="]">
                <td></td>
                <td className=" p-1 text-center text-[lightgray] ">
                  Ticket Name
                </td>
                <td className=" p-1 text-center text-[lightgray]">
                  Ticket Price(Fiat/Crypto)
                </td>
                <td className=" p-1 text-center text-[lightgray]">
                  Quantity Available
                </td>
                <td className=" p-1 text-center text-[lightgray]">Status</td>
                <td className=" p-1 text-center text-[lightgray]">Actions</td>
              </tr>
              {mockObject.map((event: { event: string }, index: number) => (
                <tr className=" bg-[#1e1e1e]" key={index}>
                  <td className="rounded flex justify-center">
                    <div className="w-[150px] h-[150px] my-5 relative">
                      <Image
                        alt="Admin Event Photo"
                        layout="fill"
                        className="rounded"
                        src={
                          "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        }
                      />
                    </div>
                  </td>
                  <td className=" p-2 text-center ">
                    WSTRN Official After {"\n"} Party @ BLVD Manchester
                  </td>
                  <td className="text-center">
                    <div className=" p-2 text-center flex gap-x-6  items-center justify-center">
                      <div>
                        <p className="text-[lightgray]">fiat</p>
                        <p className="text-bold text-[white]">£15.00</p>
                      </div>
                      <div>
                        <p className="text-[lightgray]">crypto</p>
                        <p className="text-bold text-[white]">ETH 0.04</p>
                      </div>
                    </div>
                  </td>
                  <td className=" p-2 text-center ">250</td>
                  <td className=" p-2 text-center ">Live</td>
                  <td className=" p-2 text-center ">
                    <button
                      onClick={() =>
                        router.push(`/admin/events/edit/ticket/${1 + 2}`)
                      }
                      className="bg-[#1A63F1] lg:m-0 m-2 py-2 px-4 rounded-xl"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div>
          <nav className="flex justify-center my-4">
            <ul className="flex items-center">
              {currentPage > 1 && (
                <li>
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l hover:bg-gray-300"
                    onClick={() => onPageChange(currentPage - 1)}
                  >
                    {`<`}
                  </button>
                </li>
              )}
              {pageNumbers.map((page) => (
                <li key={page}>
                  <button
                    className={`px-3 py-1 mx-1 rounded ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
              {currentPage < totalPages && (
                <li>
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r hover:bg-gray-300"
                    onClick={() => onPageChange(currentPage + 1)}
                  >
                    {`>`}
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
