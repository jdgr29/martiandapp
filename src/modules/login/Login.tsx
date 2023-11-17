import { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/assets/naitramlogo.png";

const LoginView = ({
  session,
  supabase,
}: {
  session: Session | null;
  supabase: SupabaseClient;
}) => {
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to home (will now be logged in)
      router.push("/");
    }
  }, []);

  return (
    <div className=" mr-auto ml-[50%] translate-x-[-50%] h-full  lg:w-1/3 md:w-[70%] w-[90%]">
      {!session ? (
        <>
          <div className="flex justify-center mt-7">
            <Image
              className="text-center"
              src={logo}
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <h1 className="text-white text-4xl text-center mb-7 ">Sign In</h1>
          <Auth
            providers={["google", "twitter", "apple"]}
            supabaseClient={supabase}
            // appearance={{ theme: ThemeSupa }}
            appearance={{
              style: {
                button: {
                  color: "white",
                  backgroundColor: "#E42256",
                  borderColor: "#E42256",
                  borderRadius: "9px",
                  padding: "5px",
                },
                input: {
                  backgroundColor: "#104afb",
                  borderColor: "#104afb",
                  borderRadius: "9px",
                  padding: "5px",
                  textAlign: "center",
                  color: "white",
                },
              },
            }}

            // theme="dark"
          />
        </>
      ) : (
        <p>Success!</p>
      )}
    </div>
  );
};

export default LoginView;
