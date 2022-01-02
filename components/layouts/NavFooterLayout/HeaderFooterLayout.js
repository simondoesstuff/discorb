import React from 'react';
import Footer from "@/components/layouts/NavFooterLayout/Footer";
import Header from "@/components/layouts/NavFooterLayout/Header";

function HeaderFooterLayout({children}) {
  return (
    <>
      <Header>
        <video
          autoPlay
          loop
          style={{
            width: '100%',
            zIndex: -10,
            position: 'absolute'
          }}
        >
          <source src="/discordBanners/NitroAnimatedBanner.mp4"/>
        </video>
      </Header>

      {children}
      <Footer/>
    </>
  );
}

export default HeaderFooterLayout;