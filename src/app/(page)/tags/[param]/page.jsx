"use client";
import api from "@/api";
import { getBlogsByTagsAPI } from "@/api/backed-routes";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const page = () => {
  const { param } = useParams();
  const[isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const getBlogsByTag = async () => {
      try {
        const resp = await api.get(`${getBlogsByTagsAPI}/${param}`);
        setBlogs(resp?.data?.message);
        return resp.data;
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    };
    getBlogsByTag();
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

  if(isLoading) {
    return <Loading />
  }

  return (
    <div className="w-full p-8">
      <div className="flex-col min-h-[calc(100vh-150px)] space-y-4">
        <h1 className="font-poppins italic">
          Blog Tag: <span className="font-bold">{param}</span>
        </h1>
        <p className="font-poppins">All the Articles with the tag : {param}</p>

        <div className="w-full lg:w-2/3  flex flex-col gap-6">
          {blogs?.map((blog) => (
            <div key={blog?.id} className="hover:cursor-pointer">
              <Link
                href={`/posts/${blog?.slug}`}
                className="text-[#d62727] font-poppins hover:underline underline-offset-2"
              >
                {blog?.title}
              </Link>
              <div className="flex items-center font-source-code italic gap-2">
                <FaRegCalendarAlt />
                <p className="font-poppins text-gray-500">
                  {formatDate(blog?.date)}
                </p>
              </div>

              <div
                className="font-poppins text-justify blog-content"
                dangerouslySetInnerHTML={{
                  __html: blog?.content.substr(0, 250),
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
