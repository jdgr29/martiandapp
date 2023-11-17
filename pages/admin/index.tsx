import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { AdminNav } from "../../src/components/Admin/AdminNav/AdminNav";
import { DashboardHome } from "../../src/components/Admin/DashboardHome/DashboardHome";
import { TicketsSales } from "../../src/components/Admin/DashboardHome/TicketsSales/TicketSales";
import { TicketOrCollectablesSold } from "../../src/components/Admin/DashboardHome/TicketsSold/TicketsSold";

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
            background: black;
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
          ticketType={true}
          setExpanded={setExpand}
          expanded={expand}
        />
        <TicketOrCollectablesSold ticketType={true} expanded={expand} />
      </>
    </>
  );
};

export default Home;
