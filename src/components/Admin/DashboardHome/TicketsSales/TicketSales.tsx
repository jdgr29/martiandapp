import { TicketSalesChart } from "./TicketSalesChart";
export const TicketsSales = ({
  expanded,
  setExpanded,
  collectableType,
  ticketType,
}: {
  expanded: boolean;
  setExpanded: Function;
  collectableType?: boolean;
  ticketType?: boolean;
}) => {
  return (
    <div className="flex w-full justify-center">
      <section className="flex p-4 flex-wrap lg:mt-5 w-full lg:w-[95%]  relative items-start justify-between gap-x-4 transition-all ease duration-1200  lg:mt-20 mt-2 bg-[#0F0F13] rounded-lg lg:px-[100px]">
        <div className="flex lg:w-auto w-full flex-col lg:justify-start justify-center">
          <div className="flex lg:justify-start justify-center items-center lg:gap-x-10 gap-x-1 lg:mb-10 mb-2">
            {collectableType && <p>Total Collectables Sales</p>}
            {ticketType && <p>Total Ticket Sales</p>}
            <p className="text-[#39FF14] font-semibold">↑ +23%</p>
            <label className="text-sm text-[gray]">(via last week)</label>
          </div>

          <div className=" mt-4 lg:mt-0 flex flex-col lg:items-start items-center lg:auto w-full">
            <p className="text-5xl text-[white] font-semibold">£123456.7.8</p>
            <p className="text-sm text-[gray]">British Pound (GBP)</p>
          </div>
        </div>

        <div className="mt-4 lg:mt-0 lg:w-auto w-full flex flex-col justify-center items-center ">
          <p className="text-sm text-[gray] lg:text-start text-semibold text-center">
            Updated 2 mins ago
          </p>
          <div
            className={`flex justify-center transition-all ease duration-1200 ${
              expanded ? "lg:w-[180%]" : "lg:w-[600px] w-[150px]"
            } ${expanded ? "lg:h-[500px]" : "lg:h-[150px]"}`}
          >
            <TicketSalesChart expanded={expanded} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:w-auto w-full lg:gap-y-20">
          <div className="lg:w-auto flex flex-col">
            <div className="flex items-center gap-x-1">
              <div className="rounded-full  h-[10px] w-[10px] bg-[#39FF14]"></div>
              <p>Crypto Payments</p>
            </div>
            <div className="flex items-center gap-x-1">
              <div className="rounded-full flex h-[10px] w-[10px] bg-[#CF9016]"></div>
              <p>Fiat Payments</p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-[#0071BC]    lg:m-0 m-2 py-2 px-10 rounded-xl"
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
        </div>
      </section>
    </div>
  );
};
