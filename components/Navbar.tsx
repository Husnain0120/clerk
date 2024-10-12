"use client"; // Explicitly mark this as a client component

import { UserButton, useAuth, useUser } from "@clerk/nextjs"; // Import useUser for client-side user data
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { userId } = useAuth(); // Use client-side auth hook
  const { user } = useUser(); // Fetch user data from Clerk

  const isAuth = !!userId;

  return (
    <nav className="sticky top-0 z-50 m-4 p-4 md:p-6 shadow-lg bg-gradient-to-r from-black to-white rounded-xl w-[calc(100%-2rem)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Display username in place of logo if authenticated */}
        <Link href="/" className="text-2xl font-bold mb-4 md:mb-0 text-white">
          {isAuth && user
            ? `Hello, ${user.firstName || user.username?.toLocaleUpperCase()}`
            : "Clerk Auth"}
        </Link>

        <div className="flex items-center">
          <Link href="/client" className="font-mono">
            Client Page
          </Link>
        </div>

        {/* Log In and Sign Up buttons */}
        <div className="flex space-x-4">
          {!isAuth ? (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition duration-300"
              >
                Log In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <button
                  className={`animate-pulse font-bold bg-pink-950 p-2 rounded-3xl pt-0 pb-0 border border-pink-50 hover:bg-pink-800`}
                >
                  Profile
                </button>
              </Link>

              <li className="flex items-center  ">
                <UserButton />
              </li>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
