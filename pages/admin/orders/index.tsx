import { AdminNav } from "../../../src/components/Admin/AdminNav/AdminNav";
import { SearchBar } from "../../../src/components/Admin/SearchBar";
import { AdminListItem } from "../../../src/components/Admin/Events/EventList";
import { useRouter } from "next/router";

const AdminCollectables = () => {
  const router = useRouter();
  return (
    <>
      <AdminNav />
      <div className="lg:px-[100px] flex flex-col px-[10px] lg:mt-16">
        <h1 className="text-5xl lg:text-start text-center my-3 text-[white]">
          Orders
        </h1>
        <button
          className="py-1 w-fit lg:self-start self-center px-5 bg-[#1C1C20] rounded"
          onClick={() => router.back()}
        >
          Back
        </button>
        <SearchBar />
        <div className="mt-12 flex justify-center w-full">
          <AdminListItem isOrder={true} />
        </div>
      </div>
    </>
  );
};

export default AdminCollectables;
