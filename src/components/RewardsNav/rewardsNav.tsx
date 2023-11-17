import { useRouter } from "next/router";

export const RewardsNav = ({
  activity,
  explore,
  expired,
}: {
  activity?: boolean;
  explore?: boolean;
  expired?: boolean;
}) => {
  const router = useRouter();

  return (
    <nav className="flex w-full my-8  items-center justify-center lg:gap-x-20 gap-x-10">
      <div
        onClick={() => {
          router.push("/rewards");
        }}
        className={` ${
          activity ? "bg-[blue]" : "bg-none"
        } hover:scale-110 active:scale-90 transition-all ease duration-500 py-2 px-6 rounded-3xl`}
      >
        My Activity
      </div>
      <div
        className={` ${
          explore ? "bg-[blue]" : "bg-none"
        } hover:scale-110 active:scale-90 transition-all  py-2 px-6 ease duration-500 rounded-3xl`}
        onClick={() => {
          router.push("/rewards/explore");
        }}
      >
        Explore Rewards
      </div>
      <div
        className={` ${
          expired ? "bg-[blue]" : "bg-none"
        } hover:scale-110 active:scale-90 transition-all  py-2 px-6 ease duration-500 rounded-3xl`}
        onClick={() => router.push("/rewards/expired")}
      >
        Expired
      </div>
    </nav>
  );
};
