"use client";
// import { useRouter } from "next/router";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";


// export const runtime = "edge";


const BlogPage = () => {
  // const router = useRouter();

  // if(!router.isReady){
  //   return <div>Loading</div>
  // }




  return (
    <div>
      <button
        onClick={() => window.history.back}
        className="bg-[#d62727] uppercase text-white p-1 px-6 text-xs font-bold"
      >
        back
      </button>
      <div className="p-4 mt-6 flex font-poppins justify-around">
        <div className="w-1/2">
          <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
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

            <img
              className="my-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s"
              alt="AWS Event"
            />

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

        <div className="w-1/4 bg-[#d62727] h-96   p-4 sticky top-0">
          <h1 className="font-source-code font-bold">Table of Contents</h1>
          <p className="cursor-pointer">1. What is AWS?</p>
          <p className="cursor-pointer">
            2. What are the things I should know before using AWS?
          </p>
          <p className="cursor-pointer">3. Key AWS Services and Their Uses</p>
          <p className="cursor-pointer">4. How to Set Up an AWS Account</p>
          <p className="cursor-pointer">
            5. Pricing and Cost Management in AWS
          </p>
          <p className="cursor-pointer">6. Security Best Practices in AWS</p>
          <p className="cursor-pointer">7. Common AWS Use Cases</p>
          <p className="cursor-pointer">8. Tips for Beginners in AWS</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
