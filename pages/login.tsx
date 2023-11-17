import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";
import Meta from "../src/components/Meta";
import LoginView from "../src/modules/login/Login";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <Meta title="Naitram Login" />
      <LoginView session={session} supabase={supabase} />
    </>
  );
};

export default Login;
