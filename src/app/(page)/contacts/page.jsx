"use client"
import React from "react";


// export const runtime = "edge";


const Contacts = () => {
  return (
    <div className="p-4 sm:p-8">
      <div>
        <p className="font-poppins">Contact</p>
        <p className="font-poppins font-bold text-3xl">About</p>
      </div>

      <div className="font-poppins mt-20">
        <p className="text-3xl">I am Aayush Poudel</p>
        <p>I love creating functional websites.</p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row font-poppins items-center justify-center gap-6">
        <div className="flex flex-col w-full sm:w-1/2">
          <p className="font-poppins font-bold">
            My tech stacks are:
            <span className="text-[#d62727] motion-preset-shrink   font-bold font-poppins">
              JavaScript, TypeScript, React.js, Node.js, MongoDB, PostgreSQL,
              MySQL, Docker, Python, Solidity, Rust, Express.js, Tailwind CSS,
              Redux, Next.js, Git, Web3.js, Firebase.
            </span>
          </p>

          <p className="font-semibold font-poppins text-xl my-6">Bio</p>

          <p>From Biology to Computer Science</p>
          <hr className=" border-black border-1 dark:border-white" />
        </div>

        <div className=" w-full motion-preset-flomoji-🚀 sm:w-1/2">
          <img
            loading="eager"
            className="rounded-full  w-80 h-80 object-cover motion-preset-compress "
            src="/my_image.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full sm:w-1/2">
        <p className="font-poppins text-justify ">
          Before starting with computer science and programming,
          <span className="text-[#d62727] font-bold">
            I studied taking biology as my major till grade 12th
          </span>
          . I enjoyed studying biology and had dreams of becoming a doctor. This
          was also because my parents encouraged me, as I was a good student
          from the beginning.
          <br />
          Over time, I realized I was more interested in technology. I decided
          to switch to computer science, and started exploring new tools and
          technologies to create new things. I now enjoy learning about web
          development, blockchain, and other technologies. My journey has
          changed, but my passion for learning and creating will continue.
        </p>

        <p className="my-6 font-poppins">
          I began working as a frontend developer in{" "}
          <span className="text-[#d62727] font-bold">February 2024</span>. Over
          time, I’ve not only improved my frontend skills but also tried out
          different technologies to expand my knowledge.
        </p>

        <p className="mt-16 font-poppins">Before Lockdown</p>
        <hr className="dark:border-white border-black border-1" />

        <p className="my-6 font-poppins">
          Back in 9th and 10th grade, I hadn’t explored anything in tech. Most
          of my time was spent playing video games and outdoor games. My routine
          was simple:{" "}
          <span className="font-bold">
            going to school, studying, and coming back home
          </span>
          .
        </p>

        <p className="mt-16 font-poppins">During Lockdown</p>
        <hr className="dark:border-white border-black border-1" />

        <p className="my-6 font-poppins">
          During the lockdown, I spent most of my time playing video games while
          attending online classes. Haha, it wasn’t just me, we whole classmates
          used to do that. I did read some medical books, but I wasn’t really
          focused on programming. Looking back, the things I regret not doing
          during that time are not learning how to play the guitar and
          programming.
        </p>

        <p className="mt-16 font-poppins">After Lockdown</p>
        <hr className="dark:border-white border-black border-1" />

        <p className="my-6 font-poppins">
          After the lockdown, I attended various seminars and events, where I
          had the chance to network with different people. It was also when I
          started learning programming, beginning with C and Java, and gradually
          moving into web development.
        </p>

        <p className="mt-16 font-poppins">Now</p>
        <hr className="dark:border-white border-black border-1" />

        <p className="my-6 font-poppins">
          I’m currently working as a full stack web developer, and I’m always
          learning new technologies. I'm fascinated by{" "}
          <span className="text-[#d62727] font-bold">blockchain and web3</span>,
          so I’ve started exploring and learning them, and I’m also actively
          involved in various communities.
        </p>
      </div>

      <div className="w-full sm:w-1/2 mt-24 font-poppins">
        <h1 className="text-3xl font-poppins">Behind the Code</h1>
        <p className="font-poppins font-normal text-xl my-6">
          I love to explore new things
        </p>
        <p className="font-poppins">
          Whether it’s exploring new technologies or discovering new places, I’m
          always curious. I love to travel. To learn new things.
        </p>
        <a className="text-[#d62727] font-poppins font-bold" href="">
          View my Linkedin Profile
        </a>
        .
        <br />
        <div className="mt-12">
          <a className="text-[#d62727] font-poppins font-bold " href="">
            📄Download my Resume
          </a>
          .
          <p className="font-light  font-poppins">
            to learn more about my experience
          </p>
        </div>
        <h1 className="text-3xl font-poppins my-8">
          Connections spark new stories.
        </h1>
        <p>
          Reach out, and let's see where the conversation takes us. Feel free to
        </p>
        <a className="text-[#d62727] font-bold" href="">
          connect with me on X
        </a>
        <span>and</span>
        <br />
        <a href="" className="text-[#d62727] font-bold">
          Instagram
        </a>
        . <span>Check</span>
        <p>out my Linktree for</p>
        <a className="text-[#d62727] font-bold" href="">
          any other stuff.
        </a>
      </div>
    </div>
  );
};

export default Contacts;
