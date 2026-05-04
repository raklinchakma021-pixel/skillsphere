"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data, "data");
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log(data, "data");
  };

  return (
    <div className="flex gap-4 items-center mr-9 my-4 justify-end ">
      <h2 className="font-bold text-white ext-lg mb-4 items-center">Login with</h2>
        <button
          className="btn border-blue-500 text-indigo-500"
          onClick={handleGoogleSignin}
        >
          <FaGoogle />
          Login with google
        </button>
      
    </div>
  );
};

export default RightSidebar;