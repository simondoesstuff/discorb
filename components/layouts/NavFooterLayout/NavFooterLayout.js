import React from 'react';
import Footer from "@/components/layouts/NavFooterLayout/Footer";
import Header from "@/components/layouts/NavFooterLayout/Header";

function NavFooterLayout({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default NavFooterLayout;