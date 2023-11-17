import { AdminNav } from "../../../src/components/Admin/AdminNav/AdminNav";
import { SearchBar } from "../../../src/components/Admin/SearchBar";
import { AdminListItem } from "../../../src/components/Admin/Events/EventList";

const AdminCollectables = () => {
  return (
    <>
      <AdminNav />
      <div className="lg:px-[100px] px-[10px] lg:mt-16">
        <h1 className="text-5xl my-3 text-[white]">Collectables</h1>
        <SearchBar />
        <div className="mt-12 flex justify-center w-full">
          <AdminListItem isCollectable={true} />
        </div>
      </div>
    </>
  );
};

export default AdminCollectables;
