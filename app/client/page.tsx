"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className=" h-full flex flex-col items-center justify-center text-2xl bg-white text-black rounded-md m-4">
      <h2 className="bg-pink-500 px-3 text-white rounded-2xl py-0 hover:animate-pulse">
        {" "}
        Assalamalikum,{" "}
        {user.firstName?.toLocaleUpperCase() ||
          user.username?.toLocaleUpperCase()}{" "}
        Wellcome to Clerk..❤️
      </h2>
    </div>
  );
};

export default ClientPage;
