"use client";
import api from "@/api";
import { getAllTagsAPI } from "@/api/backed-routes";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [tags, setTags] = useState();
  const [isloading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getTags = async () => {
      try {
        const resp = await api.get(getAllTagsAPI);
        setTags(resp.data?.tags);
        return resp.data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTags();
  }, []);

  if (isloading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col min-h-[calc(100vh-150px)]">
      <div className=" p-8 flex flex-col gap-4  w-full lg:w-2/3 ">
        <h1 className="text-xl font-bold font-poppins">Tags</h1>
        <p className="italic font-poppins">
          All the tags I used for the posts:
        </p>

        <div className="flex flex-wrap gap-4 font-bold underline underline-offset-4">
          {tags?.map((tag, index) => (
            <p
              key={index}
              onClick={() => router.push(`/tags/${tag}`)}
              className="hover:motion-preset-fade text-[#d62727] font-poppins font-semibold  cursor-pointer "
            >
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
