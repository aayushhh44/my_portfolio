"use client"
import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


// export const runtime = "edge";


const Footer = () => {
  return (
    <div className="dark:bg-[#1a1a1a]">
      <hr className="border-1 dark:border-white border-black" />

      <div className="p-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 sm:w-1/3 w-full">
          <FaHandsHelping />

          <p className="text-sm font-extralight font-poppins">
            Thank you for visiting my website
          </p>

          <div className="flex items-center">
            <CiMail color="#d62727" className="text-[#d62727" />
            <a className="text-[#d62727] text-sm font-poppins" href="">
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <FiGithub />
          <a className="text-[#d62727] text-sm font-poppins" href="https://github.com/aayushhh44">
            git me
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Footer;
