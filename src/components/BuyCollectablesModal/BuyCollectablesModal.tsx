import { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";

const BuyCollectablesModal = ({
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
            } duration-1200 ease transition-all  lg:w-[40%] md:w-[50%] w-[70%] h-[auto]  rounded flex flex-col justify-center   items-center p-1 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}
          >
            {page === 0 && (
              <>
                <div className="w-full flex  flex-col lg:ml-[10%] md:ml-[10%] ">
                  <h1 className="text-start text-4xl text-white mb-3">
                    Collectable Supply
                  </h1>
                  <p className="text-start text-[11px] text-gray w-fit">{`Please select your collectable, then proceed to 'Buy now'.`}</p>
                </div>
                <div className="flex w-full justify-center items-center gap-y-3 flex-col mt-5">
                  <div className="w-[90%] h-[100px] flex  justify-between items-start pt-2  pl-4 rounded bg-[#23272A]">
                    <div className="flex flex-col justify-start gap-y-2">
                      <p className="text-start text-gray">Collectable Name</p>
                    </div>

                    <div className="flex flex-col gap-y-1 justify-end items-end mr-2">
                      <div className="flex items-center justify-end gap-x-3">
                        <p className="text-[10px] italic font-thin">Item #</p>
                        <input
                          className="appearance-none text-xl w-[50%] bg-[#E42256] rounded p-1 placeholder:align-middle placeholder:text-[white] placeholder:text-xl text-end"
                          type={"number"}
                          placeholder="0"
                        />
                      </div>
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
                      <p className="text-start text-gray">Collectable Name</p>
                    </div>

                    <div className="flex flex-col gap-y-1 justify-end items-end mr-2">
                      <div className="flex items-center justify-end gap-x-3">
                        <p className="text-[10px] italic font-thin">Item #</p>
                        <input
                          className="appearance-none text-xl w-[50%] bg-[#E42256] rounded p-1 placeholder:align-middle placeholder:text-[white] placeholder:text-xl text-end"
                          type={"number"}
                          placeholder="0"
                        />
                      </div>
                      <button
                        onClick={() => setPage(1)}
                        className=" hover:bg-[green] transition ease duration-800 rounded bg-[blue] p-1  w-[50%]"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="w-fit rounded mt-3 text-[white] p-2  hover:scale-125 transition ease duration-800"
                  onClick={() => {
                    setShow(false);
                    setPage(0);
                  }}
                >
                  Return to screen
                </button>
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
                        className="shadow appearance-none border rounded w-[100%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#23272A] placeholder:text-[gray]"
                        id="card-number"
                        type="text"
                        placeholder="John Cena"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                      />

                      <input
                        className=" bg-[#23272A] placeholder:text-[gray] shadow appearance-none border rounded w-[50%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="card-number"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                      />

                      <input
                        className="bg-[#23272A] placeholder:text-[gray] shadow appearance-none border rounded w-[25%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="expiration-date"
                        type="text"
                        placeholder="MM/YYYY"
                        value={expirationDate}
                        onChange={(event) =>
                          setExpirationDate(event.target.value)
                        }
                      />

                      <input
                        className="bg-[#23272A] placeholder:text-[gray] shadow appearance-none border rounded w-[15%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="security-code"
                        type="text"
                        placeholder="123"
                        value={securityCode}
                        onChange={(event) =>
                          setSecurityCode(event.target.value)
                        }
                      />

                      <input
                        className="bg-[#23272A] placeholder:text-[gray] shadow appearance-none border rounded w-[70%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
                        className="bg-[#23272A] placeholder:text-[gray] shadow appearance-none border mt-3 rounded w-[100%] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="card-number"
                        type="text"
                        placeholder="Wallet Address"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-[95%] p-3">
                  <button
                    className="w-fit rounded mt-3 text-[white] self-end  p-2   hover:scale-125 transition ease duration-800"
                    onClick={() => {
                      setShow(false);
                      setPage(0);
                    }}
                  >
                    Return to screen
                  </button>
                  <button
                    className="w-fit rounded mt-3 text-[white] self-end border-2 rounded-lg border-[white] px-9 py-1 bg-[blue]   hover:scale-125 transition ease duration-800"
                    onClick={() => setPage(2)}
                  >
                    Pay Now
                  </button>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <div className="w-full flex lg:flex-row flex-col items-center justify-around p-2">
                  <div className="w-[60%] h-auto flex lg:gap-y-8 gap-y-4 lg:gap-x-4 gap-x-2 flex-col justify-start items-center">
                    <h1 className=" w-[100%] text-center text-white text-2xl">
                      Collectable Purchase Confirmation:
                    </h1>
                    <p className="lg:text-start text-center text-xl text-gray font-thin">
                      Collectable Info
                    </p>

                    <p className="text-center text-xl text-gray">
                      Payment Method Used
                    </p>
                    <div className="w-full">
                      <p className="text-center text-xl text-gray w-full border-t-2 border-[white] border-dashed">
                        Total Collectable price paid
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

                <button
                  className="w-fit rounded-xl text-[white] bg-[blue] py-3 lg:px-8 px-4 border-[white] border-2 my-16 hover:scale-110 transition ease duration-800"
                  onClick={() => {
                    setShow(false);
                    setPage(0);
                  }}
                >
                  Return to screen
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BuyCollectablesModal;
