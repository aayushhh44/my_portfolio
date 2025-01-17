"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FaArrowRightLong, FaX } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
// import { FaRss } from "react-icons/fa6";
import api from "@/api";
import { getAllBlogsAPI } from "@/api/backed-routes";
import Loading from "./Loading";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle, Terminal } from "lucide-react";

// export const runtime = "edge";

const Hero = () => {
  const [blogs, setBlogs] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const resp = await api.get(getAllBlogsAPI);
        setBlogs(resp?.data?.blogs);
        console.log(resp?.data);
        return resp.data;
      } catch (err) {
        setError(err?.response?.data?.err || "An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    getAllBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isloading) {
    return <Loading />;
  }

  return (
    <div className="p-8 dark:bg-[#1a1a1a]  min-h-[calc(100vh-150px)]">
      <div className="w-full lg:w-2/3 ">
        <div className="flex items-center my-4 space-x-2 font-poppins">
          <p className="font-poppins text-xl sm:text-4xl font-bold">
            Hi! <span className="motion-preset-shake">👋🏻</span> Its me Aayush
            Poudel
          </p>
          {/* <FaRss className="cursor-pointer text-[#d62727]" size={20} /> */}
        </div>

        <p className="font-poppins">
          I'm a full-stack developer with a passion for blockchain and Web3. I
          believe technology has the power to make a difference in the world.
          Here, I share my thoughts and experiences from my journey so far.
        </p>

        <div className="flex mt-4 mb-4 items-center space-x-2">
          <h1 className="font-poppins font-bold">Social Links:</h1>
          <Link
            target="_blank"
            href="https://github.com/aayushhh44?tab=overview&from=2025-01-01&to=2025-01-07"
          >
            <FaGithub
              className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]"
              size={20}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/aayush-tech-poudel/"
          >
            <FaLinkedin
              className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]"
              size={20}
            />
          </Link>

          <Link target="_blank" href="https://www.facebook.com/aayush4444">
            <FaFacebook
              className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]"
              size={20}
            />
          </Link>
          <Link target="_blank" href="https://x.com/aaymongush">
            <FaX
              className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]"
              size={20}
            />
          </Link>
        </div>
      </div>

      <hr />
      <div className="mt-16">
        <div>
          <p className="font-source-code italic mb-4">Recent Posts</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
            {error}
            </AlertDescription>
          </Alert>
        )}

        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {blogs?.map((blogContent) => (
            <div key={blogContent._id} className="hover:cursor-pointer">
              <Link
                href={`/posts/${blogContent?.slug}`}
                className="text-[#d62727] font-poppins hover:underline underline-offset-2"
              >
                {blogContent?.title}
              </Link>
              <div className="flex items-center font-source-code italic gap-2">
                <FaRegCalendarAlt />
                <p className="font-poppins text-gray-500">
                  {formatDate(blogContent?.date)}
                </p>
              </div>
              <div
                className="font-poppins text-justify blog-content"
                dangerouslySetInnerHTML={{
                  __html: blogContent?.content.substr(0, 250),
                }}
              />
            </div>
          ))}
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

// <div className="p-8 dark:bg-[#1a1a1a] ">
//       <div className="w-full sm:w-2/3">
//       <div className="flex items-center my-4 space-x-2">
//         <p className=" font-poppins text-xl sm:text-4xl  font-bold">
//           Hi! <span className="motion-preset-shake">👋🏻</span> Its me Aayush
//           Poudel
//         </p>
//         <FaRss className="cursor-pointer text-[#d62727]" size={20} />
//         </div>
//         <p>A full Stack developer with a knowledge of
//           blockchain and web3. I believe technology can be used to change the
//           world. I sometimes write my knowledge and past experience here. </p>

//         <div className="flex mt-4 mb-4 items-center space-x-2">
//           <h1 className="font-poppins font-bold">Social Links:</h1>
//           <Link target="_blank" href="https://github.com/aayushhh44?tab=overview&from=2025-01-01&to=2025-01-07">
//           <FaGithub className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20} /></Link>

//           <Link href="https://www.linkedin.com/in/aayush-tech-poudel/">

//           <FaLinkedin className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20}/>

//           </Link>
//           <FaFacebook className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20}/>
//           {/* <FaInstagram className="cursor-pointer hover:motion-preset-confetti" size={20}/> */}
//           <FaX className="cursor-pointer hover:motion-preset-confetti hover:text-[#d62727]" size={20}/>

//         </div>
//       </div>

//       <hr />
//       <div className="mt-16">
//         <div>
//           {/* <p className="text-3xl mb-4">Home</p> */}
//           <p className="font-source-code italic mb-4">Recent Posts</p>
//         </div>

//         <div className=" w-full sm:w-2/3 flex flex-col gap-6">
//           <div className="hover:cursor-pointer">
//             <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
//               AWS Student Community Day Nepal CTF Writeup
//             </p>
//             <div className="flex items-center font-source-code italic gap-2">
//               <FaRegCalendarAlt />
//               <p className="font-poppins text-gray-500">
//                 Oct 5, 2024 | 12:00 AM
//               </p>
//             </div>
//             <p className="font-poppins text-justify">
//               Explore the highlights and insights from AWS Student Community Day
//               Nepal's Capture The Flag (CTF) competition, focusing on
//               AWS-centric challenges and cloud security strategies
//             </p>
//           </div>

//           <div className="hover:cursor-pointer">
//             <Link
//               href="/blog-page"
//               className="text-[#d62727] font-poppins hover:underline underline-offset-2"
//             >
//               AWS Student Community Day Nepal CTF Writeup
//             </Link>
//             <div className="flex items-center font-source-code italic gap-2">
//               <FaRegCalendarAlt />
//               <p className="font-poppins text-gray-500">
//                 Oct 5, 2024 | 12:00 AM
//               </p>
//             </div>
//             <p className="font-poppins text-justify">
//               Explore the highlights and insights from AWS Student Community Day
//               Nepal's Capture The Flag (CTF) competition, focusing on
//               AWS-centric challenges and cloud security strategies
//             </p>
//           </div>

//           <div className="hover:cursor-pointer">
//             <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
//               AWS Student Community Day Nepal CTF Writeup
//             </p>
//             <div className="flex items-center font-source-code italic gap-2">
//               <FaRegCalendarAlt />
//               <p className="font-poppins text-gray-500">
//                 Oct 5, 2024 | 12:00 AM
//               </p>
//             </div>
//             <p className="font-poppins text-justify">
//               Explore the highlights and insights from AWS Student Community Day
//               Nepal's Capture The Flag (CTF) competition, focusing on
//               AWS-centric challenges and cloud security strategies
//             </p>
//           </div>

//           <div className="hover:cursor-pointer">
//             <p className="text-[#d62727] font-poppins hover:underline underline-offset-2">
//               AWS Student Community Day Nepal CTF Writeup
//             </p>
//             <div className="flex items-center font-source-code italic gap-2">
//               <FaRegCalendarAlt />
//               <p className="font-poppins text-gray-500">
//                 Oct 5, 2024 | 12:00 AM
//               </p>
//             </div>
//             <p className="font-poppins text-justify">
//               Explore the highlights and insights from AWS Student Community Day
//               Nepal's Capture The Flag (CTF) competition, focusing on
//               AWS-centric challenges and cloud security strategies
//             </p>
//           </div>
//         </div>
//       </div>

//       <Link
//         href="/blogs"
//         className="flex items-center gap-2 mt-4 cursor-pointer font-bold"
//       >
//         <h2>View All Posts</h2>
//         <FaArrowRightLong className="font-bold" />
//       </Link>
//     </div>
