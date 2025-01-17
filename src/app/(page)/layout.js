// import Footer from "@/components/Footer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NavbarAfterLogin from "@/components/NavbarAfterLogin";
import React from "react";

export default function ClientLayout({ children }) {
  return (
    <div className="dark:bg-[#1a1a1a]">
        
      {/* <Navbar /> */}
    {/* <Hero/> */}
    {/* <Navbar/> */}
      <main>
        <Navbar/>
        {children}
        <Footer/>
        </main>
      {/* <Footer/> */}

      {/* <Footer /> */}
    </div>
  );
}
