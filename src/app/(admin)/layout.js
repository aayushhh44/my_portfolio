// import Footer from "@/components/Footer";
import NavbarAfterLogin from "@/components/NavbarAfterLogin";
import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div>
      <NavbarAfterLogin />

      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
