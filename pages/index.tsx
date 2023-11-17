import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Meta from "../src/components/Meta";
import SignUp from "../src/components/Auth/SignUp";
import { fetchEvents } from "../src/modules/events/eventsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectEvents } from "../src/modules/events/eventsSlice";

const Home = () => {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents(supabase));
  }, [supabase]);

  console.log("events", events);

  return (
    <>
      <Meta title="Naitram" />
      <SignUp />
    </>
  );
};

export default Home;
