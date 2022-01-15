import React from 'react';
import DiscordFooter from "@/components/layouts/NavFooterLayout/Footer";
import DiscordHeader from "@/components/layouts/NavFooterLayout/Header";
import {Box} from "@mui/material";

function DiscordDefaultLayout({
                              bannerColor = (theme => theme.discordPalette.gray),
                              headerChildren, // holds the page's banner
                              children // the page
                            }) {
  return (
    <>
      <Box
        sx={{
          bgcolor: bannerColor,
          height: '100%',
          width: '100%',
          position: 'relative'
        }}
      >
        <DiscordHeader/>
        {headerChildren}
      </Box>

      {children}
      <DiscordFooter/>
    </>
  )
    ;
}

export default DiscordDefaultLayout;