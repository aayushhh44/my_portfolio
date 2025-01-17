"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import api from "@/api";
import { createBlogAPI } from "@/api/backed-routes";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const BlogEditor = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [tags, setTags] = useState("");
  const [isAuth, setisAuth] = useState(false);
  const reactQuillRef = useRef(null);

  const sanitizedHTML = DOMPurify.sanitize(value);

  const uploadToCloudinary = async (files) => {
    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "uploads");

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/dkjkzgj7t/upload`,
          { method: "POST", body: formData }
        );

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error?.message || "Upload failed");
        }

        const data = await res.json();
        return data.url;
      } catch (error) {
        console.error("Image upload error:", error);
        alert("Failed to upload image: " + error.message);
        return null;
      }
    });

    return Promise.all(uploadPromises);
  };

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (!token) {
      <h1>YOU"RE NOT AUTHENTICATED</h1>;
      router.push("/aayush");
    } else {
      setisAuth(true);
      setIsLoading(false);
    }
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  const tagsArray = tags.split(",").map((tag) => tag.trim());

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "true");
    input.click();

    input.onchange = async () => {
      if (input?.files?.length > 0) {
        setIsUploading(true);
        try {
          const urls = await uploadToCloudinary(input.files);

          if (urls.length > 0 && reactQuillRef.current) {
            const quill = reactQuillRef.current;
            const range = quill.getEditorSelection();

            let currentIndex = range ? range.index : 0;
            for (const url of urls) {
              if (url) {
                quill.getEditor().insertEmbed(currentIndex, "image", url);
                currentIndex += 1;
                quill.getEditor().insertText(currentIndex, "\n");
                currentIndex += 1;
              }
            }
          }
        } catch (error) {
          console.error("Error handling multiple images:", error);
          alert("Error uploading images. Please try again.");
        } finally {
          setIsUploading(false);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("AccessToken");
      setAccessToken(token);
    }
  }, []);

  const handleBlogSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a blog title");
      return;
    }

    if (!sanitizedHTML.trim()) {
      alert("Please add some content to your blog");
      return;
    }

    if (!accessToken) {
      alert("You must be logged in to submit a blog");
      return;
    }

    setIsSubmitting(true);

    try {
      const resp = await api.post(
        createBlogAPI,
        {
          title: title.trim(),
          content: sanitizedHTML,
          tags: tagsArray,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      alert("Blog posted successfully!");
      setTitle("");
      setValue("");
      return resp.data;
    } catch (err) {
      console.error("Error submitting blog:", err);
      alert(
        err.response?.data?.message ||
          "Failed to submit blog. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
        history: {
          delay: 500,
          maxStack: 100,
          userOnly: true,
        },
      },
    }),
    []
  );

  // useEffect(() => {
  //   if (isAuth) {
  //     router.push("/dashboard");
  //   }
  // }, [isAuth]);  
  

  if (isAuth) {
    return (
      <form onSubmit={handleBlogSubmit} className="max-w-4xl mx-auto">
        <div className="p-4 space-y-4">
          <input
            className="w-full border-black p-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter title of the blog"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting || isUploading}
          />
          <ReactQuill
            ref={reactQuillRef}
            theme="snow"
            value={value}
            modules={modules}
            onChange={setValue}
            readOnly={isSubmitting || isUploading}
          />
          {isUploading && (
            <div className="text-center text-gray-600">Uploading images...</div>
          )}
        </div>

        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border p-2 rounded-md"
          type="text"
          placeholder="Enter tags for the blog"
          name=""
          id=""
        />
        <button
          type="submit"
          disabled={isSubmitting || isUploading}
          className="w-full bg-[#d62727] text-white m-4 p-2 rounded-xl hover:bg-[#bf2121] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    );
  }
};

export default BlogEditor;
