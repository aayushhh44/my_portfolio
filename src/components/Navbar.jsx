"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import Hamburger from "./Hamburger";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };


  return (
    <div>
      <div
        className={`p-6 sm:p-8 flex justify-between ${
          theme === "dark"
            ? "bg-[#1a1a1a] text-white"
            : "bg-white text-[#1a1a1a]"
        }`}
      >
        <div className="font-source-code hidden sm:flex gap-x-6">
          <Link
            href="/"
            className={`hover:text-[#d62727] ${
              isActive("/") ? "font-bold text-[#d62727]" : ""
            }`}
          >
            HOME
          </Link>
          <Link
            href="/blogs"
            className={`hover:text-[#d62727] ${
              isActive("/blogs") ? "font-bold text-[#d62727]" : ""
            }`}
          >
            BLOGS
          </Link>
          <Link
            href="/tags"
            className={`hover:text-[#d62727] ${
              isActive("/tags") ? "font-bold text-[#d62727]" : ""
            }`}
          >
            TAGS
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-[#d62727] ${
              isActive("/gallery") ? "font-bold text-[#d62727]" : ""
            }`}
          >
            GALLERY
          </Link>
          <Link
            href="/contacts"
            className={`hover:text-[#d62727] ${
              isActive("/contacts") ? "font-bold text-[#d62727]" : ""
            }`}
          >
            ABOUT & CONTACTS
          </Link>
        </div>

        {/* Rest of the component remains the same */}
        {theme === "dark" ? (
          <CiSun
            aria-label="Switch to light theme"
            className="cursor-pointer hidden sm:block"
            size={20}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaRegMoon
            className="cursor-pointer hidden sm:block"
            size={20}
            onClick={toggleDarkMode}
          />
        )}

        {theme === "dark" ? (
          <CiSun
            className="cursor-pointer absolute right-4 top-4 sm:hidden"
            size={25}
            onClick={toggleDarkMode}
          />
        ) : (
          <FaRegMoon
            className="cursor-pointer sm:hidden absolute right-4 top-5"
            size={25}
            onClick={toggleDarkMode}
          />
        )}

        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={`${
          isOpen
            ? "transform relative translate-x-0 opacity-100 visibility-visible transition-all duration-300"
            : "transform -translate-x-full opacity-0 visibility-hidden transition-all duration-300"
        } font-source-code dark:bg-[#d62727] mt-5 flex flex-col gap-4 items-center justify-center h-screen -top-8 left-0 sm:hidden w-3/4 gap-y-6 text-white bg-black z-50 absolute`}
      >
        <Link
          href="/"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>
        <Link
          href="/blogs"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          BLOGS
        </Link>

        <Link
          href="/tags"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
         TAGS
        </Link>
        <Link
          href="/gallery"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          GALLERY
        </Link>
        <Link
          href="/contacts"
          className="text-2xl text-center hover:text-[#d62727]"
          onClick={() => setIsOpen(false)}
        >
          ABOUT & CONTACTS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
