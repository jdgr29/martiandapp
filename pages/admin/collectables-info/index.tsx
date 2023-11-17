import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import Web3 from "web3";
import { AdminNav } from "../../../src/components/Admin/AdminNav/AdminNav";
import { DashboardHome } from "../../../src/components/Admin/DashboardHome/DashboardHome";
import { TicketsSales } from "../../../src/components/Admin/DashboardHome/TicketsSales/TicketSales";
import { TicketOrCollectablesSold } from "../../../src/components/Admin/DashboardHome/TicketsSold/TicketsSold";

const Home: NextPage = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [address, setAddress] = useState("");
  const [expand, setExpand] = useState<boolean>(false);
  // const [provider, setProvider] = useState<ethers.providers.Provider | null>(null);

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
      {/* <Meta title="Naitram Login" /> */}
      <>
        <AdminNav />
        <DashboardHome />
        <TicketsSales
          collectableType={true}
          setExpanded={setExpand}
          expanded={expand}
        />
        <TicketOrCollectablesSold collectableType={true} expanded={expand} />
      </>
    </>
  );
};

export default Home;
