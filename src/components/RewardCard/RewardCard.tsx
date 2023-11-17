import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface rewardCard {
  color?: string;
  totalEarned?: number;
  eventTicket?: number;
  cardTitle?: string;
  CardIcon?: IconType;
}

export const RewardCard = ({
  color = "bg-[#FB4570]",
  totalEarned,
  eventTicket,
  cardTitle,
  CardIcon,
}: rewardCard) => {
  return (
    <>
      <div
        className={`mt-5 ${color} relative transition-all duration-1200 ease lg:w-[210px] w-[200px] h-[260px] flex flex-col gap-y-5 justify-center items-center rounded`}
      >
        {CardIcon && <CardIcon size={60} />}

        <h1 className="text-center text-2xl ">
          {eventTicket && eventTicket}
          {cardTitle && cardTitle}
        </h1>

        {totalEarned && (
          <>
            <h2 className="mb-4">{totalEarned}</h2>

            <h2 className="">Total Earned</h2>
          </>
        )}
      </div>
    </>
  );
};
