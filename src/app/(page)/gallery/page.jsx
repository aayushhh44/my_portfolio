"use client"
import React from "react";
import Image from "next/image";



// export const runtime = "edge";


const Gallery = () => {
  return (
    <div className="dark:bg-[#1a1a1a] p-2 sm:p-4">
      <div className="columns-2 sm:columns-3 md:columns-4  gap-2">
        <Image
          src="./assets/IMG_3638.jpg"
          alt=""
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade loading- cursor-pointer mb-2"
        />
        <Image
          src="./assets/IMG_3721.png"
          alt=""
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="./assets/IMG_3722.jpg"
          alt=""
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="./assets/IMG_3723.jpg"
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="./assets/IMG_3723.jpg"
          alt=""
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="./assets/IMG_3725.jpg"
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
         <Image
          src='./assets/IMG_3726.jpg'
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
         <Image
          src='./assets/IMG_3727.jpg'
          loading="eager"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />

       
      </div>
    </div>
  );
};

export default Gallery;
