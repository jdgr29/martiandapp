import { useRouter } from "next/router";

export const EditEventNav = () => {
  const router = useRouter();
  return (
    <nav className="flex flex-wrap lg:justify-between mt-16 ">
      <div className="flex lg:w-auto w-full">
        <button
          onClick={() => router.push("/admin/events")}
          className=" py-2 px-3 bg-[#1C1C20] rounded"
        >
          Back to events
        </button>
      </div>
      <div className="flex lg:my-0 md:my-0 my-3 lg:gap-y-0 md:gap-y-0 gap-y-2 flex-wrap lg:w-[60%] justify-around">
        <button className="py-2 px-3 bg-[#1C1C20] rounded">Magic</button>
        <button className="py-2 px-3 bg-[#1C1C20] rounded">Vibe</button>
        <button className="py-2 px-3 bg-[#1C1C20] rounded">
          Discard Changes
        </button>
        <button className="py-2 px-3 bg-[#1C1C20] rounded">Save Edit</button>
        <button className="py-2 px-3 bg-[#1C1C20] rounded">
          Save as Draft
        </button>
        <button className="py-2 px-3 bg-[#1C1C20] rounded">Preview</button>
      </div>
    </nav>
  );
};
