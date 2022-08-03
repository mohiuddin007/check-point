import React from "react";
import dynamic from "next/dynamic";

// components
const Navbar = dynamic(() => import('../components/Navbars'));
const Footer = dynamic(()=> import('../components/Footers'));

export default function Business({ children }) {
  return (
    <>
      <div className=" md:ml-64 bg-blueGray-100">
        <Navbar />
        <div className=" px-4 md:px-10 pt-12 pb-8 mx-auto w-full">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
