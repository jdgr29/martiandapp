import NavBar from "../../../src/components/Navbar/Navbar";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const RewardDetail: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div className="w-full mt-[70px] flex justify-center items-center">
        <h1 className="text-5xl">In Construction... 🛠️</h1>
      </div>
    </>
  );
};

export default RewardDetail;
