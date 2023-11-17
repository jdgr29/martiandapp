import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export const AdminListItem = ({
  isEvent,
  isCollectable,
  isOrder,
}: {
  isEvent?: boolean;
  isCollectable?: boolean;
  isOrder?: boolean;
}) => {
  const mockObject = [
    { event: "event" },
    { event: "event" },
    { event: "event" },
  ];

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 3;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleViewItem = () => {
    if (isCollectable) {
      router.push(`/admin/collectables/edit/${2 + 3}`);
    }
    if (isEvent) {
      router.push(`/admin/events/edit/${1}`);
    }
    if (isOrder) {
      router.push(`/admin/orders/detail/${1}`);
    }
  };
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
          <div className="w-full overflow-x-scroll">
            <table className="w-full ">
              <tr className="]">
                <td></td>
                <td className=" p-1 text-center text-[lightgray] ">
                  {isEvent && "Event Name"}
                  {isCollectable && "Collectable Name"}
                  {isOrder && "Order Id"}
                </td>
                <td className=" p-1 text-center text-[lightgray]">
                  {isEvent && "Date & Time"}
                  {isCollectable && "Release Date"}
                  {isOrder && "Transaction Id"}
                </td>
                <td className=" p-1 text-center text-[lightgray]">
                  {isEvent && "Location"}
                  {isCollectable && "Total Supply"}
                  {isOrder && "Customer  UserName"}
                </td>
                <td className=" p-1 text-center text-[lightgray]">
                  {isEvent || (isCollectable && "Status")}

                  {isOrder && "Order Date"}
                </td>
                <td className=" p-1 text-center text-[lightgray]">
                  {(isEvent && "Actions") || (isCollectable && "Actions")}

                  {isOrder && "Last sale price"}
                </td>

                {isOrder && (
                  <td className=" p-1 text-center text-[lightgray]">Status</td>
                )}
              </tr>
              {mockObject.map((event: { event: string }, index: number) => (
                <tr className=" bg-[#1e1e1e]" key={index}>
                  <td className="rounded  flex justify-center">
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
                    {isEvent && "WSTRN Official After  Party @ BLVD Manchester"}
                    {isCollectable && "PLACES + FACES X TRENDY Membership"}
                    {isOrder && "#0000001"}
                  </td>
                  <td className="text-center">
                    <div className=" p-2 text-center flex flex-col items-center justify-center">
                      {isEvent && (
                        <>
                          <p>20/01/20</p>
                          <p>7:00 - 9:00 AM</p>
                        </>
                      )}
                      {isCollectable && "20/01/20"}
                      {isOrder && "Wweadjasdhashdashdoasdadasda3213"}
                    </div>
                  </td>
                  <td className=" p-2 text-center ">
                    {isEvent && "BLVD, Manchester"}
                    {isCollectable && "200"}
                    {isOrder && "Martian2023omg"}
                  </td>
                  <td className=" p-2 text-center ">
                    {isEvent || (isCollectable && "Live")}
                    {isOrder && "20/03/2023"}
                  </td>
                  <td className=" p-2 text-center ">
                    {isEvent && (
                      <button
                        onClick={() => handleViewItem()}
                        className="bg-[#1A63F1] lg:m-0 m-2 py-2 px-4 rounded-xl"
                      >
                        View Event
                      </button>
                    )}
                    {isCollectable && (
                      <button
                        onClick={() => handleViewItem()}
                        className="bg-[#1A63F1] lg:m-0 m-2 py-2 px-4 rounded-xl"
                      >
                        View Collectable
                      </button>
                    )}
                    {isOrder && "£15.00 "}
                  </td>
                  {isOrder && (
                    <td
                      onClick={() => handleViewItem()}
                      className=" p-2 text-center "
                    >
                      <p className="bg-[green] py-1 px-3 rounded-md">Sale</p>
                    </td>
                  )}
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
