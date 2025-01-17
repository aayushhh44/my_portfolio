"use client";
import React from "react";
import Image from "next/image";

// export const runtime = "edge";

const Gallery = () => {
  return (
    <div className="dark:bg-[#1a1a1a] p-2 sm:p-4">
      <div className="columns-2 sm:columns-3 md:columns-4  gap-2">
        <Image
          src="/assets/IMG_3638.jpg"
          alt="hero"
          loading="lazy"
          // placeholder="blur"
          layout="responsive"
          width={500}
          height={500}
          className="w-full motion-preset-fade loading- cursor-pointer mb-2"
        />
        <Image
          src="/assets/IMG_3721.png"
          alt="hero"
          loading="lazy"
          width={500}
          // placeholder="blur"
          height={500}
          layout="responsive"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="/assets/IMG_3722.jpg"
          alt="hero"
          // placeholder="blur"
          layout="responsive"
          loading="lazy"
          width={500}
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="/assets/IMG_3723.jpg"
          loading="lazy"
          width={500}
          alt="hero"
          height={500}
          layout="responsive"
          // placeholder="blur"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="/assets/IMG_3723.jpg"
          alt="hero"
          loading="lazy"
          // placeholder="blur"
          width={500}
          layout="responsive"
          height={500}
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="/assets/IMG_3725.jpg"
          loading="lazy"
          layout="responsive"
          // placeholder="blur"
          width={500}
          height={500}
          alt="hero"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="/assets/IMG_3726.jpg"
          loading="lazy"
          width={500}
          layout="responsive"
          height={500}
          // placeholder="blur"
          alt="hero"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
        <Image
          src="/assets/IMG_3727.jpg"
          // placeholder="blur"
          loading="lazy"
          width={500}
          height={500}
          layout="responsive"
          alt="hero"
          className="w-full motion-preset-fade  cursor-pointer mb-2"
        />
      </div>
    </div>
  );
};

export default Gallery;
