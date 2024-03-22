import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Buttons } from "./button";

export function Nav() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const showMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <div className="mx-10">
      <div className="bg-white flex justify-between my-4">
        <div className="text-xl text-blue lg:text-2xl font-semibold">
          CHATTER
        </div>
        <button className="md:hidden lg:hidden mt-1" onClick={showMenu}>
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {hamburgerMenu ? (
          <div className="full-screen inset-0 space-y-4 z-10">
            <button className="" onClick={showMenu}>
              <svg
                className="cancel-button"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.415 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.585 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.415l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center space-y-4">
              <ul className="md:hidden lg:hidden text-sm font-semibold space-y-2">
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
              <div className="flex flex-col md:hidden lg:hidden space-y-2">
                <Link to="/login">
                  <Buttons
                    styles="rounded px-4 py-1 border-purple text-sm font-semibold"
                    content="Log in"
                  />
                </Link>
                <Link to="/signup">
                  <Buttons
                    styles="bg-blue text-white rounded px-4 py-1 text-sm font-semibold"
                    content="Sign up"
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <ul className="hidden md:flex lg:flex text-sm font-semibold gap-4">
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
            <div className="hidden md:flex lg:flex gap-4">
              <Link to="/login">
                <Buttons
                  styles="rounded px-4 py-1 border-purple text-sm font-semibold"
                  content="Log in"
                />
              </Link>
              <Link to="/signup">
                <Buttons
                  styles="bg-blue text-white rounded px-4 py-1 text-sm font-semibold"
                  content="Sign up"
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// <span className="sansserif text-3xl font-semibold">&#8801;</span>
