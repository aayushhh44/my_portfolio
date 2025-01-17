import Link from "next/link";
import React from "react";

const NavbarAfterLogin = () => {
  return (
    <div>
      <div className="flex space-x-4 justify-end p-4 font-poppins">
        <Link href='/dashboard'>Home</Link>
        <Link href='/admin-blogs' >Blogs</Link>
      </div>
    </div>
  );
};

export default NavbarAfterLogin;
