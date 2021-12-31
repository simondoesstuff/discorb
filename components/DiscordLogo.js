import React from 'react';
import {Stack, Typography} from "@mui/material";
import DiscordLogoWithTextSvg from '@/public/discordSvgs/DiscordLogoWithText.svg'
import DiscordLogoSvg from '@/public/discordSvgs/DiscordSymbol.svg'
import Image from 'next/image'

export function DiscordLogo({height, width}) {
  return (
    <Image
      src={DiscordLogoSvg}
      height={height}
      width={width}
    />
  );
}

export function DiscordLogoWithName({height= 34, width = 124}) {
  return (
    <Image
      src={DiscordLogoWithTextSvg}
      height={height}
      width={width}
    />
  )
}