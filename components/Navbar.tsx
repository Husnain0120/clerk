"use client"; // Explicitly mark this as a client component

import { UserButton, useAuth, useUser } from "@clerk/nextjs"; // Import useUser for client-side user data
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons

const Navbar = () => {
  const { userId } = useAuth(); // Use client-side auth hook
  const { user } = useUser(); // Fetch user data from Clerk
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const isAuth = !!userId;

  return (
    <nav className="sticky top-0 z-50 m-4 p-4 md:p-6 shadow-lg bg-gradient-to-r from-black to-white rounded-xl w-[calc(100%-2rem)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-between w-full items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            {isAuth && user
              ? `Hello, ${user.firstName || user.username?.toUpperCase()}`
              : "Clerk Auth"}
          </Link>
          <button
            className="text-white"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left section with logo and client page */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-white">
              {isAuth && user
                ? `Hello, ${user.firstName || user.username?.toUpperCase()}`
                : "Clerk Auth"}
            </Link>
            <Link
              href="/client"
              className="font-mono text-white bg-pink-700 px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
            >
              Client Page
            </Link>
          </div>

          {/* Right section for Log In and Sign Up buttons */}
          <div className="flex items-center space-x-4">
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
                  <button className="animate-pulse font-bold bg-pink-950 p-2 rounded-3xl pt-0 pb-0 border border-pink-50 hover:bg-pink-800">
                    Profile
                  </button>
                </Link>
                <UserButton />
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-black text-white py-4 transition-transform duration-300`}
        >
          <Link
            href="/client"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Client Page
          </Link>

          {!isAuth ? (
            <>
              <Link
                href="/sign-in"
                className="block px-4 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/sign-up"
                className="block px-4 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                <button className="block w-full text-center px-4 py-2 bg-pink-950 hover:bg-pink-800">
                  Profile
                </button>
              </Link>

              <div className="block px-4 py-2">
                <UserButton />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
