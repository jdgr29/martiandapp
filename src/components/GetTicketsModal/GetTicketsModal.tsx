import { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";

const GetTicketsModal = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Function;
}) => {
  const [page, setPage] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    const cleanup = () => {
      setPage(0);
      setShow(false);
    };

    return cleanup;
  }, []);

  return (
    <>
      <style jsx>
        {`
          body {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full  backdrop-blur-sm z-50 ">
          <div
            className={`${
              page === 0 ? "bg-[#1F51FF]" : "bg-[#2F2F2F]"
            } duration-1200 ease transition-all  lg:w-[40%] md:w-[50%] h-[90%] w-[70%] h-[auto]  rounded flex flex-col   p-1 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}
          >
            {page === 0 && (
              <>
                <div className="w-full flex mt-10 justify-around">
                  <div className="flex flex-col ml-5 ">
                    <h1 className=" text-4xl text-white w-fit">
                      Tickets for this Event
                    </h1>
                    <p className=" text-[11px] text-gray w-fit">{`Please select your ticket type and quantity, then proceed to 'Buy now'.`}</p>
                  </div>
                  <button
                    className="w-auto rounded self-start text-[white]   hover:scale-125 transition ease duration-800"
                    onClick={() => setShow(false)}
                  >
                    Return to screen
                  </button>
                </div>
                <div className="flex w-full justify-center items-center gap-y-3 flex-col mt-5">
                  <div className="w-[90%] h-[100px] flex  justify-between items-start pt-2  pl-4 rounded bg-[#23272A]">
                    <div className="flex flex-col justify-start gap-y-2">
                      <p className="text-start text-gray">Ticket Title</p>
                      <p className="text-start text-sm text-gray">
                        Ticket description
                      </p>
                    </div>

                    <div className="flex flex-col gap-y-1 justify-end items-end mr-2">
                      <p className="text-[10px]">Quantity</p>
                      <input
                        className="appearance-none text-black w-[50%] rounded p-1 placeholder:text-[gray] text-end"
                        type={"number"}
                        placeholder="0"
                      />
                      <button
                        onClick={() => setPage(1)}
                        className=" hover:bg-[green] transition ease duration-800 rounded bg-[blue] p-1  w-[50%]"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                  <div className="w-[90%] h-[100px] flex  justify-between items-start pt-2  pl-4 rounded bg-[#23272A]">
                    <div className="flex flex-col justify-start gap-y-2">
                      <p className="text-start text-gray">Ticket Title</p>
                      <p className="text-start text-sm text-gray">
                        Ticket description
                      </p>
                    </div>

                    <div className="flex flex-col gap-y-1 justify-end items-end mr-2">
                      <p className="text-[10px]">Quantity</p>
                      <input
                        className="appearance-none w-[50%] text-black rounded p-1 placeholder:text-[gray] text-end"
                        type={"number"}
                        placeholder="0"
                      />
                      <button
                        onClick={() => setPage(1)}
                        className=" hover:bg-[green] transition ease duration-800 rounded bg-[blue] p-1  w-[50%]"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {page === 1 && (
              <>
                <div className="w-full flex items-center justify-around  ">
                  <div>
                    <h1 className="text-start text-white text-3xl">
                      Purchase Ticket
                    </h1>
                    <p className="text-start text-[11px] text-gray w-fit">{`Ticket name, ticket description, ticket quantity`}</p>
                  </div>
                  <div className="border-l-2 border-[gray] h-full"></div>

                  <div className="flex flex-col items-center mt-4">
                    <p>Time Remaining</p>
                    <p className="text-4xl text-[#00ff00]">5:00</p>
                  </div>
                </div>

                <div className="flex w-full justify-center items-center gap-y-3 flex-col mt-5">
                  <div className="w-[90%] flex flex-col  justify-center items-center pt-2  rounded">
                    <form className="flex flex-wrap justify-between p-3 items-center gap-y-4">
                      <p className="self-start text-[16px]">
                        Pay by debit or credit card
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#23272A] placeholder:text-[white]"
                        id="card-number"
                        type="text"
                        placeholder="John Cena"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                      />

                      <input
                        className=" bg-[#23272A] placeholder:text-[white] shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="card-number"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                      />

                      <input
                        className="bg-[#23272A] placeholder:text-[white] shadow appearance-none border rounded w-[25%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="expiration-date"
                        type="text"
                        placeholder="MM/YYYY"
                        value={expirationDate}
                        onChange={(event) =>
                          setExpirationDate(event.target.value)
                        }
                      />

                      <input
                        className="bg-[#23272A] placeholder:text-[white] shadow appearance-none border rounded w-[15%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="security-code"
                        type="text"
                        placeholder="123"
                        value={securityCode}
                        onChange={(event) =>
                          setSecurityCode(event.target.value)
                        }
                      />

                      <input
                        className="bg-[#23272A] placeholder:text-[white] shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="card-number"
                        type="text"
                        placeholder="Info about the ticket you're buying"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                      />
                      <div className="text-2xl text-start text-[gray] mr-3 ">
                        <p className="text-[#00ff00]">$95.00</p>
                      </div>
                    </form>
                    <div className="border-b-2 border-[gray] my-3 w-full"></div>
                    <div className="w-full justify-around items-center p-3 flex flex-col">
                      <p className="self-start text-[14px]">
                        Pay by wallet address
                      </p>
                      <p className="self-start text-[10px] italic">
                        Binance Smart Chain, Ethereum wallet addresses only
                      </p>
                      <input
                        className="bg-[#23272A] placeholder:text-[white] shadow appearance-none border mt-3 rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="card-number"
                        type="text"
                        placeholder="Wallet Address"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex justify-between w-[90%] items-center p-3">
                    <button
                      className="w-fit rounded mt-3 text-[white]  border-2 rounded-lg border-[white] px-9 py-1 bg-[blue]   hover:scale-125 transition ease duration-800"
                      onClick={() => setPage(2)}
                    >
                      Pay Now
                    </button>
                    <button
                      className="w-fit rounded mt-3 text-[white] self-end  p-2   hover:scale-125 transition ease duration-800"
                      onClick={() => setShow(false)}
                    >
                      Return to screen
                    </button>
                  </div>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <div className="w-full flex justify-around p-2">
                  <div className="w-[60%] h-auto flex gap-y-8 gap-x-4 flex-col justify-start items-center">
                    <h1 className="text-start text-white text-3xl">
                      Ticket Confirmation:
                    </h1>
                    <p className="self-start text-xl text-gray">
                      Ticket name, ticket description, ticket quantity
                    </p>
                    <button
                      className="w-fit rounded-xl text-[white] bg-[blue] py-3 px-8 border-[white] border-2 my-16 hover:scale-110 transition ease duration-800"
                      onClick={() => {
                        setShow(false);
                        setPage(0);
                      }}
                    >
                      Return to screen
                    </button>

                    <p className="self-start text-xl text-gray">
                      Payment Method Used
                    </p>
                    <div className="w-full">
                      <p className="self-start text-xl text-gray w-fit border-t-2 border-[white] border-dashed">
                        Total ticket price paid
                      </p>
                    </div>
                  </div>

                  <BsCheckCircle
                    size={"160px"}
                    color="#00ff00"
                    fill="#00ff00"
                    className="h-auto w-[40$] mt-5 h-[160px] self-center "
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GetTicketsModal;
