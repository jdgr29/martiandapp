import { AdminNav } from "../../../../src/components/Admin/AdminNav/AdminNav";
import { EditEventNav } from "../../../../src/components/Admin/Events/EditEventNav";
import { EditEventForm } from "../../../../src/components/Admin/Events/EditEventForm";
import { EditEventTicketList } from "../../../../src/components/Admin/Events/EditEventTicketList";
const AdminEditEvent = () => {
  return (
    <>
      <style jsx global>
        {`
          body {
            background-color: #0f0f13;
            background: #0f0f13;
          }
        `}
      </style>
      <AdminNav />
      <div className="lg:px-[100px] px-[10px] lg:mt-16">
        <h1 className="text-5xl my-3 text-[white]">Events</h1>
        <EditEventNav />
        <EditEventForm />
        <h1 className="text-3xl my-3 text-[white] w-full px-3 py-5 rounded bg-[#1A1A1A]">
          Tickets
        </h1>
        <EditEventTicketList />
      </div>
    </>
  );
};

export default AdminEditEvent;
