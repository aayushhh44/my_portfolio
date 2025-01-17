"use client";
import api from "@/api";
import { deleteBlogByIdAPI, getAllBlogsAPI } from "@/api/backed-routes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Page = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [blogId, setBlogId] = useState();
  console.log('access tokken', accessToken)

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (!token) {
      router.push("/aayush");
    } else {
      setIsAuth(true);
    }
  }, [router]);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const resp = await api.get(`${getAllBlogsAPI}`);
        setBlogs(resp?.data?.blogs2);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getAllBlogs();
  }, []);

  useEffect(() => {
    setAccessToken(localStorage.getItem("AccessToken"));
  }, []);

  const deleteBlog = async () => {
    try {
      const resp = await api.delete(`${deleteBlogByIdAPI}/${blogId}`,{
        headers:{
          Authorization: `Bearer ${accessToken}`,
        }
      });
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = (id) => {
    setBlogId(id);
    setShowModal(!showModal);
  };

  const Modal = () => {
    if (!showModal) return null;
    return (
      <div className="fixed p-8 sm:p-2 inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow">
          <h3>Are you sure you want to delete this product?</h3>
          <div className="mt-4 flex justify-end">
            <button
              onClick={deleteBlog}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Yes, Delete
            </button>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-300 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (!isAuth) {
    return <h1>YOU'RE NOT AUTHENTICATED</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-8">
      <div className="flex flex-col gap-8">
        {blogs?.map((blog, index) => (
          <div
            key={index}
            className="border rounded-md flex items-center justify-around"
          >
            <div className="w-1/2">
              <h1 className="text-2xl">{blog?.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: blog?.content.slice(0, 200),
                }}
              ></div>
            </div>
            <FaDeleteLeft
              onClick={() => toggleModal(blog?._id)}
              size={40}
              color="red"
            />
          </div>
        ))}
      </div>
      <Modal />
    </div>
  );
};

export default Page;
