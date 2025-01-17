"use client";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import api from "@/api";
import { getAllBlogsAPI } from "@/api/backed-routes";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Loading from "@/components/Loading";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// export const runtime = "edge";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const resp = await api.get(
          `${getAllBlogsAPI}?page=${currentPage}&limit=6`
        );
        setBlogs(resp.data);
        setTotalPages(resp.data.totalPages);
        return resp.data;
      } catch (err) {
        setError(err?.response?.data?.err || "An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    getAllBlogs();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

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
    <div className="p-8 flex-col min-h-[calc(100vh-150px)]">
      <div className="flex flex-col flex-grow">
        <div>
          <p className="text-3xl mb-4">Posts</p>
          <p className="font-source-code italic mb-4">
            All the articles I've posted.
          </p>
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
          {blogs?.blogs?.map((blogContent) => (
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

      <Pagination className="font-poppins mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(1)}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          /
          <PaginationItem>
            <p>{blogs?.totalPages}</p>
            {/* <PaginationEllipsis /> */}
          </PaginationItem>
          <PaginationNext
            className="cursor-pointer font-poppins"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Blogs;
