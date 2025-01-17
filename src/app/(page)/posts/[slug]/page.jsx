"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useParams } from "next/navigation";
import api from "@/api";
import { getIndividualBlogAPI } from "@/api/backed-routes";
import Loading from "@/components/Loading";

const BlogPage = () => {
  const router = useRouter();

  const [down, setDown] = useState(false);
  const [blogContent, setBlogContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  const onDown = () => {
    setDown(!down);
  };

  useEffect(() => {
    const getIndividualBlog = async () => {
      try {
        const resp = await api.get(`${getIndividualBlogAPI}/${slug}`);
        setBlogContent(resp.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getIndividualBlog();
  }, [slug]);

  const introContent = blogContent?.blog?.content?.split("<h2>")[0];
  const processContentWithIds = (content, toc) => {
    if (!content || !toc) return content;

    let updatedContent = content;
    toc.forEach((item) => {
      if (item.text && item.link) {
        const cleanText = item.text.replace(/<\/?[^>]+(>|$)/g, "");
        const headingRegex = new RegExp(
          `<h2>\\s*(?:<strong>)?\\s*(${cleanText})\\s*(?:</strong>)?\\s*</h2>`,
          "i"
        );
        const id = item.link.replace("#", "");
        updatedContent = updatedContent.replace(
          headingRegex,
          `<h2 id="${id}">$1</h2>`
        );
      }
    });

    updatedContent = updatedContent.replace(
      /<img[^>]*src="([^"]*)"[^>]*>/g,
      '<img src="$1" class="blog-image w-full h-64 object-contain my-4 rounded-lg shadow-lg">'
    );

    return updatedContent;
  };
  const restOfContent = processContentWithIds(
    blogContent?.blog?.content,
    blogContent?.blog?.toc
  );

  const validToc = blogContent?.blog?.toc?.filter(
    (item) => item.text && item.link && item.text.trim() !== ""
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="blog-content min-h-[calc(100vh-50px)]">
      <button
        onClick={router.back}
        className="bg-[#d62727] uppercase text-white m-4 p-1 px-6 text-xs font-bold"
      >
        back
      </button>
      <div className="p-4 mt-6 flex font-poppins justify-around">
        <div className="w-full sm:w-1/2">
          <p className="text-[#d62727] font-bold text-xl motion-preset-fade  font-poppins hover:underline underline-offset-2">
            {blogContent?.blog?.title}
          </p>
          <div className="flex items-center font-source-code my-3 italic gap-2">
            <FaRegCalendarAlt />
            <p className="font-poppins text-gray-500">
              {new Date(blogContent?.blog?.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="flex flex-col ">
            <p
              dangerouslySetInnerHTML={{
                __html: introContent,
              }}
              className="font-poppins text-justify"
            />
            <p></p>

            <div className="w-full font-poppins cursor-pointer p-4">
              <div onClick={onDown} className="flex items-center mb-3">
                {down ? <FaCaretDown /> : <FaCaretRight />}
                <h1 className="font-source-code font-bold">
                  Table of Contents
                </h1>
              </div>

              {down &&
                validToc?.map((tableofContent, index) => (
                  <div key={index} className="flex flex-col gap-6">
                    <p className="cursor-pointer flex gap-2 font-semibold text-[#d62727]">
                      {index + 1}
                      <a
                        href={tableofContent?.link}
                        className="underline underline-offset-2"
                      >
                        {tableofContent?.text}
                      </a>
                    </p>
                  </div>
                ))}
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: restOfContent,
              }}
              className="font-poppins text-justify"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
