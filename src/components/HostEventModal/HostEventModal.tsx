import { useState, useEffect } from "react";
import { FcSettings } from "react-icons/Fc";
const HostEventModal = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Function;
}) => {
  const [page, setPage] = useState(0);

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
            className="
               bg-[#2F2F2F]
             duration-1200 ease transition-all  lg:w-[65%] md:w-[65%] h-[90%] w-[70%] h-[auto]  rounded flex flex-col   p-1 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <button
              className="w-auto rounded self-end text-[white] p-1 hover:scale-110 hover:text-[red] transition ease duration-800"
              onClick={() => setShow(false)}
            >
              Return to screen
            </button>

            {page === 0 && (
              <>
                <div className="lg:flex w-full h-full  overflow-scroll  justify-around items-center mt-5">
                  <div className="lg:w-[48%] w-[100%] lg:flex flex-col items-center justify-center gap-y-6">
                    <div className="flex h-[20em]  lg:w-[70%] w-[100%] bg-[#191919] border-[white] border-[6px] flex-col gap-y-1 justify-center items-center ">
                      <input
                        placeholder="Add Cover Image"
                        className="text-gray-900 rounded-lg cursor-pointer  dark:text-gray-400  focus:outline-none placeholder:text-center w-full px-16 py-43 placeholder:text-[white] "
                        type="file"
                      />
                    </div>
                    <div className="lg:w-[70%] w-[100%] h-[70px] lg:p-0 my-2 divide-x  grid grid-cols-4 place-content-center place-items-center rounded-3xl bg-[#191919]">
                      <div className="pl-6">Effect</div>

                      <div className="pl-2">Theme</div>

                      <div onClick={() => setPage(1)} className="px-2">
                        Settings
                      </div>

                      <div className="px-2">Preview</div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-col lg:w-[48%] w-[100%] h-auto lg:h-[30em] gap-y-1">
                    <input
                      placeholder="Untitled Event"
                      className=" bg-[#191919] lg:text-5xl text-2xl text-white w-full placeholder:text-[white] p-2"
                    />

                    <input
                      className="scheme:light text-[white] bg-[#191919] placeholder:italic w-full placeholder:text-[white] p-2"
                      placeholder="Date and Time TBD"
                      type={"date"}
                    />
                    <div className="p-2 flex  bg-[#191919]">
                      <p>Hosted by (name)</p>
                    </div>
                    <input
                      type="text"
                      placeholder="Location:name, address or link"
                      className="bg-[#191919] placeholder:italic w-full placeholder:text-[white] p-2"
                    />
                    <input
                      className="bg-[#191919] placeholder:italic w-full placeholder:text-[white] p-2"
                      type="text"
                      placeholder="Max capacity"
                    />
                    <input
                      className="bg-[#191919] placeholder:italic w-full placeholder:text-[white] p-2"
                      type="text"
                      placeholder="Price per person"
                    />
                    <input
                      className="bg-[#191919] placeholder:italic w-full placeholder:text-[white] p-2"
                      type="text"
                      placeholder="Add custom link or text"
                    />
                    <textarea
                      placeholder="Add a description of your event"
                      className="bg-[#191919] placeholder:italic w-full placeholder:text-[white] h-[100px] overflow-scroll lg:h-[350px] p-2"
                    />
                  </div>
                </div>
                <div className="w-full flex mb-2">
                  <button
                    onClick={() => setPage(1)}
                    className=" hover:bg-[green] lg:ml-[17%] ml-[30%] mt-[10px] w-[40%] transition ease duration-800 self-center rounded bg-[blue] py-3 lg:w-[15%]"
                  >
                    Publish Event 🎉
                  </button>
                </div>
              </>
            )}

            {page === 1 && (
              <>
                <div className="flex lg:ml-[40px]  items-center w-full justify-start gap-x-4">
                  <FcSettings className=" h-[35px] w-[35px]" />
                  <h1 className="text-start text-white text-xl">Settings</h1>
                </div>
                <div className="w-full h-full flex items-start  ">
                  <div className="flex h-full flex-col lg:gap-y-8 gap-y-5 justify-start lg:p-3 items-start mt-8">
                    <div className="lg:px-2 px-1">Hosts</div>
                    <div className="lg:px-2 px-1">RSVPs</div>
                    <div className="lg:px-2 px-1">Guest questionary</div>
                    <div className="lg:px-2 px-1">Display + Privacy</div>
                    <div className="lg:px-2 px-1">Payment Method</div>
                    <div className="lg:px-2 px-1">Auto-Reminders</div>
                    <div
                      onClick={() => setPage(0)}
                      className="italic lg:px-2 px-1 text-[gray] hover:text-[green] hover:scale-125 transition ease duration-800"
                    >
                      {" "}
                      Back{" "}
                    </div>
                  </div>
                  <div className="border-l-2 border-[gray] lg:px-0  lg:h-full h-[100%]"></div>
                  <div className="flex lg:p-4 flex-col lg:items-start lg:justify-start lg:gap-y-4 gap-y-2 lg:py-3 lg:px-8 mt-4">
                    <h1 className="text-2xl lg:text-start text-center">
                      Hosts
                    </h1>
                    <div className="flex lg:justify-between lg:justify-around justify-center flex-wrap p-1 w-full items-center">
                      <div className="flex items-center lg:justify-around justify-center lg:gap-x-3 gap-x-1">
                        <div className="h-[50px] w-[50px] rounded-full bg-[blue]"></div>
                        <p className="lg:text-xl text-lg lg:text-start text-center">
                          Present Username
                        </p>
                      </div>
                      <p className="italic text-[gray]">(Creator)</p>
                    </div>
                    <p className="p-1 text-justify">
                      Hosts can edit & manage this event, including
                      adding/removing other co-hosts
                    </p>
                    <p className="text-xl text-[white] lg:text-start text-center ">
                      + Add Co-Host
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HostEventModal;
