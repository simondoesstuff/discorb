import React from 'react';
import DiscordFooter from "@/components/layouts/NavFooterLayout/Footer";
import DiscordHeader from "@/components/layouts/NavFooterLayout/Header";

function HeaderFooterLayout({children}) {
  return (
    <>
      <DiscordHeader/>
      {children}
      <DiscordFooter/>
    </>
  );
}

export default HeaderFooterLayout;