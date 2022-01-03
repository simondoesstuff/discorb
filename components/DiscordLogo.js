import React from 'react';
import {Box, Link as MuiLink} from "@mui/material";
import NextLink from 'next/link'
import DiscordLogoWithTextSvg from '@/public/discordSvgs/DiscordLogoWithText.svg'
import DiscordLogoSvg from '@/public/discordSvgs/DiscordSymbol.svg'
import Image from 'next/image'

function LogoBox({src, height, width, black}) {
  let innerLink = (
    <MuiLink
      underline="hover"
      href='/'
    >
      <Image
        src={src}
        height={height}
        width={width}
      />
    </MuiLink>
  );

  if (black) {
    innerLink = (
      <Box sx={{
        filter: 'brightness(0)'
      }}>
        {innerLink}
      </Box>
    );
  }

  return (
    <NextLink
      href={'/'}
      alt="HomePage"
      passRef
    >
      {innerLink}
    </NextLink>
  );
}

// todo does this need to pass the height & width props?
export function DiscordLogo({black}) {
  return (
    <LogoBox black={black} src={DiscordLogoSvg}/>
  )
}

// these height and width parameters are not applied to the svg
export function DiscordLogoWithName({height = '34px', width = '124px', black}) {
  return (
    <LogoBox
      src={DiscordLogoWithTextSvg}
      height={height}
      wdith={width}
      black={black}
    />
  )
}