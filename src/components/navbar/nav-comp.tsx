"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerToggle = () => {
    setHamburger(!hamburger);
  };

  // Daftar item menu
  const menuItems = [
    { href: "/", text: "HOME" },
    { href: "/about", text: "ABOUT" },
    { href: "/experience", text: "EXPERIENCE" },
    { href: "/projects", text: "PROJECT" },
    { href: "/portfolio", text: "PORTFOLIO" },
    { href: "/education", text: "EDUCATION" },
    { href: "/skills", text: "SKILLS" },
  ];

  return (
    <header className="h-15 z-20 fixed dark:bg-black bg-white  w-10/12 pt-3 shadow-sm dark:border-b dark:border- dark:border-gray-00 border-white">
      <div className="container px-4 sm:px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-5 w-1/5">
            {/* Logo */}
            <div>
              <h1 className="font-bold text-2xl text-blue-900 dark:text-white">
                <Link href="/">&/{"<nabil>"}/</Link>
              </h1>
            </div>

            {/* Daftar item menu */}
          </div>
          <div
            className={`lg:flex text-lg w-3/5 font-semibold  space-x-5 hidden ${
              hamburger ? "block" : "hidden lg:block"
            }`}
          >
            {menuItems.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.href}
                className="text-blue-900 dark:text-white hover:text-opacity-50 dark:hover:text-opacity-50"
              >
                {menuItem.text}
              </Link>
            ))}
          </div>

          <div className="flex items-center w-1/5 space-x-2 justify-end">
            <button
              className="lg:hidden block text-gray-800 dark:text-white focus:outline-none"
              onClick={hamburgerToggle}
            >
              <svg
                className="w-6 h-6 fill-current text-blue-900 dark:text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {hamburger ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 6H4v2h16v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Daftar item menu untuk layar kecil */}
        {hamburger && (
          <div className="lg:hidden text-lg space-y-3 text-left  font-medium mt-5">
            {menuItems.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.href}
                className="block text-blue-900 dark:text-white hover:text-opacity-50 dark:hover:text-opacity-50"
              >
                {menuItem.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
