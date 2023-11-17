import React from "react";
import CollectablesDetails from "../../../../src/components/Collectables/Collectables";
import { AdminNav } from "../../../../src/components/Admin/AdminNav/AdminNav";
import { useRouter } from "next/router";
const Collectable = () => {
  const router = useRouter();
  return (
    <>
      <style jsx global>
        {`
          body {
            background: #1e1e1e;
            width: 100wv;
            height: 100%;
          }
        `}
      </style>
      <AdminNav />
      <button
        className="lg:ml-[70px] ml-[20px] py-1 px-3 bg-[#1C1C20] rounded"
        onClick={() => router.back()}
      >
        Back to Collectables
      </button>
      <CollectablesDetails />
    </>
  );
};

export default Collectable;
