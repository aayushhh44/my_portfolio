"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong, FaX } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaRss } from "react-icons/fa6";



// export const runtime = "edge";

const Hero = () => {
  return (
    <div className="p-8 dark:bg-[#1a1a1a] ">
      <div className="w-full sm:w-2/3">
      <div className="flex items-center my-4 space-x-2">
        <p className=" font-poppins text-xl sm:text-4xl  font-bold">
          Hi! <span className="motion-preset-shake">👋🏻</span> Its me Aayush
          Poudel
        </p>
        <FaRss className="cursor-pointer text-[#d62727]" size={20} />
        </div>
        <p>A passionate frontend developer with a strong fundamentals of
          blockchain and web3. I believe technology can be used to change the
          world. I sometimes write my knowledge and past experience here. </p>

        <div className="flex mt-4 mb-4 items-center space-x-2">
          <h1 className="font-poppins font-bold">Social Links:</h1>
          <Link target="_blank" href="https://github.com/aayushhh44?tab=overview&from=2025-01-01&to=2025-01-07">
          <FaGithub className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20} /></Link>

          <Link href="https://www.linkedin.com/in/aayush-tech-poudel/">
          
          <FaLinkedin className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20}/>
          
          </Link>
          <FaFacebook className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20}/>
          {/* <FaInstagram className="cursor-pointer hover:motion-preset-confetti" size={20}/> */}
          <FaX className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20}/>


        </div>
      </div>

      <hr />
      <div className="mt-16">
        <div>
          {/* <p className="text-3xl mb-4">Home</p> */}
          <p className="font-source-code italic mb-4">Recent Posts</p>
        </div>

        <div className=" w-full sm:w-2/3 flex flex-col gap-6">
          <div className="hover:cursor-pointer">
            <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
              AWS Student Community Day Nepal CTF Writeup
            </p>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>

          <div className="hover:cursor-pointer">
            <Link
              href="/blog-page"
              className="text-[#d62727] font-poppins hover:underline underline-offset-2"
            >
              AWS Student Community Day Nepal CTF Writeup
            </Link>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>

          <div className="hover:cursor-pointer">
            <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
              AWS Student Community Day Nepal CTF Writeup
            </p>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>

          <div className="hover:cursor-pointer">
            <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
              AWS Student Community Day Nepal CTF Writeup
            </p>
            <div className="flex items-center font-source-code italic gap-2">
              <FaRegCalendarAlt />
              <p className="font-poppins text-gray-500">
                Oct 5, 2024 | 12:00 AM
              </p>
            </div>
            <p className="font-poppins text-justify">
              Explore the highlights and insights from AWS Student Community Day
              Nepal's Capture The Flag (CTF) competition, focusing on
              AWS-centric challenges and cloud security strategies
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/blogs"
        className="flex items-center gap-2 mt-4 cursor-pointer font-bold"
      >
        <h2>View All Posts</h2>
        <FaArrowRightLong className="font-bold" />
      </Link>
    </div>
  );
};

export default Hero;
