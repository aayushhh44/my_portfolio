"use client";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";


// export const runtime = "edge";

const BlogPage = () => {
  const router = useRouter();
  const[down, setDown] = useState(false);
  console.log(down)

  // if(!router.isReady){
  //   return <div>Loading</div>
  // }

  const onDown = () =>{
    setDown(!down)
  }

  return (
    <div>
      <button
        onClick={router.back}
        className="bg-[#d62727] uppercase text-white m-4 p-1 px-6 text-xs font-bold"
      >
        back
      </button>
      <div className="p-4 mt-6 flex font-poppins justify-around">
        <div className="w-full sm:w-1/2">
          <p className="text-[#d62727] font-bold text-xl motion-preset-expand  font-poppins hover:underline underline-offset-2">
            AWS Student Community Day Nepal CTF Writeup
          </p>
          <div className="flex items-center font-source-code my-3 italic gap-2">
            <FaRegCalendarAlt />
            <p className="font-poppins text-gray-500">Oct 5, 2024 | 12:00 AM</p>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-poppins text-justify">
              AWS Student Community Day Nepal was a remarkable event that
              brought together cloud-enthusiast students and professionals
              across Nepal from all regions. Once again kudos to AWS Cloud Club
              Nepal for this event that empowered students by offering good
              exposure on AWS including travel scholarships. It was an honor to
              be part of this event, contributing in shades of shadow by
              creating challenges for the Capture The Flag(CTF) competition.
            </p>

            <div className=" w-full font-poppins  cursor-pointer  p-4">
              <div onClick={onDown} className="flex items-center mb-3">
                {
                  down ? <FaCaretDown/> : <FaCaretRight />
                }
                {/* <FaCaretRight /> */}
                <h1 className="font-source-code font-bold">
                  Table of Contents
                </h1>
              </div>

              {
                down &&  <div className="flex flex-col gap-4">
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  1.{" "}
                  <span className="underline underline-offset-2">
                    What is AWS?
                  </span>
                </p>
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  2.
                  <span className="underline underline-offset-2">
                    What are the things I should know before using AWS?
                  </span>
                </p>
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  3.{" "}
                  <span className="underline underline-offset-2">
                    Key AWS Services and Their Uses
                  </span>
                </p>
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  4.{" "}
                  <span className="underline underline-offset-2">
                    {" "}
                    How to Set Up an AWS Account
                  </span>
                </p>
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  5.{" "}
                  <span className="underline underline-offset-2">
                    Pricing and Cost Management in AWS
                  </span>
                </p>
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  6.{" "}
                  <span className="underline underline-offset-2">
                    Security Best Practices in AWS
                  </span>
                </p>
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  7.{" "}
                  <span className="underline underline-offset-2">
                    {" "}
                    Common AWS Use Cases
                  </span>
                </p>
                <p className="cursor-pointer font-semibold text-[#d62727]">
                  8.{" "}
                  <span className="underline underline-offset-2">
                    {" "}
                    Tips for Beginners in AWS
                  </span>
                </p>
                </div>
              }

             
            </div>

            <img
              className="my-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s"
              alt="AWS Event"
            />
          </div>

          <div className="w-full font-poppins">
            <p>
              Amazon Web Services (AWS) is a comprehensive cloud computing
              platform offered by Amazon. It provides on-demand cloud computing
              services and products to individuals, companies, and governments.
              AWS allows users to rent computing power, storage, and various
              other IT resources, enabling them to scale up or down quickly
              based on their needs.
            </p>

            <div>
              <h1>What are the Things I Should Know Before Using AWS?</h1>
              <p>
                Before getting started with AWS, here are some key things to
                understand:
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
            </div>

            <div>
              <h1>Key AWS Services and Their Uses</h1>
              <p>
                Before getting started with AWS, here are some key things to
                understand:
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
              <p>
                <strong>Cloud Computing:</strong> AWS delivers services via the
                cloud, which means you access services over the internet rather
                than relying on physical hardware in your local environment.
              </p>
            </div>

            <div className=" mt-8">
              <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto">
                <code id="code-block" className="text-sm">
                  {`const greet = () => {
  return "Hello, World!";
};
greet();`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
