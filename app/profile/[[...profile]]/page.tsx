import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    redirect("/sign-in");
  }
  return (
    <div className="flex items-center justify-center flex-col mt-8 ">
      <h1 className="text-2xl">Hello,{user?.username?.toLocaleUpperCase()} </h1>
      {/* <UserProfile /> */}
    </div>
  );
};

export default Profile;
