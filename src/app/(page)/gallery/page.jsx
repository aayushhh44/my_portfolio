"use client"
import React from "react";
import Image from "next/image";
import Image1 from "../../../assets/IMG_3638.jpg";
import Image2 from '../../../assets/IMG_3721.png'
import Image3 from '../../../assets/IMG_3722.jpg'
import Image4 from '../../../assets/IMG_3723.jpg'
import Image5 from '../../../assets/IMG_3724.jpg'
import Image6 from '../../../assets/IMG_3725.jpg'
import Image7 from '../../../assets/IMG_3726.jpg'
import Image8 from '../../../assets/IMG_3727.jpg'


// export const runtime = "edge";


const Gallery = () => {
  return (
    <div className="dark:bg-[#1a1a1a] p-2 sm:p-4">
      <div className="columns-2 sm:columns-3 md:columns-4  gap-2">
        <Image
          src={Image1}
          alt=""
          loading="eager"
          className="w-full motion-preset-fade loading- cursor-pointer mb-2"
        />
        <Image
          src={Image2}
          alt=""
          loading="eager"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src={Image3}
          alt=""
          loading="eager"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src={Image4}
          loading="eager"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src={Image5}
          alt=""
          loading="eager"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src={Image6}
          loading="eager"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
         <Image
          src={Image7}
          loading="eager"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
         <Image
          src={Image8}
          loading="eager"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />

       
      </div>
    </div>
  );
};

export default Gallery;
