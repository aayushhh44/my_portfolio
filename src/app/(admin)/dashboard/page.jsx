"use client"
import React, { useMemo, useState } from 'react'
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

// export const runtime = "edge"

const page = () => {
    const [value, setValue] = useState('');

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
  
            [
              { indent: "-1" },
              { indent: "+1" },
              { align: [] },
            ],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            ["link", "image", "video"],
            ["clean"],
          ],
  
          handlers: {
            // image: handleClick,
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
  
    
  return (
    <div>
      <div className='p-4'>
        <ReactQuill  theme="snow" value={value} modules={modules} onChange={setValue} />

       
        </div>
        <button className=' text-center bg-[#d62727] text-white p-2 rounded-xl '>Submit</button>
    </div>
  )
}

export default page
