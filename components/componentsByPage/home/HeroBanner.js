import React from 'react';
import {Box, useMediaQuery} from "@mui/material";
import NextImage from 'next/image'
import LeftShoe from '@/public/banners/heroContainer/leftShoe.svg'
import RightParty from '@/public/banners/heroContainer/rightParty.svg'
import WaveForeground from '@/public/banners/heroContainer/waveForeground.svg'

export default function HeroBanner() {
  return (
    <Box
      sx={{
        zIndex: '0',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Heroes/>
    </Box>
  );
}

function Heroes() {
  let size = "lg";

  if (useMediaQuery(theme => theme.breakpoints.down('md')))
    size = "md";
  if (useMediaQuery(theme => theme.breakpoints.down('sm')))
    size = "sm";

  switch (size) {
    case "lg":
      return (
        <>
          <HeroGraphic
            src={WaveForeground}
            leftMargin={'-1320px'}
          />

          <HeroGraphic
            src={LeftShoe}
            leftMargin={'-1030px'}
          />

          <HeroGraphic
            src={RightParty}
            leftMargin={'370px'}
          />
        </>
      );
    case "md":
      return (
        <>
          <HeroGraphic
            src={WaveForeground}
            leftMargin={'-1320px'}
          />

          <HeroGraphic
            src={RightParty}
            leftMargin={'-70px'}
          />
        </>
      );
    case "sm":  // sm and xs
      return (
        <HeroGraphic
          src={LeftShoe}
          leftMargin='-315px'
          width={486.4}
          height={248.2}
        />
      );
  }
}

function HeroGraphic({src, leftMargin, width, height}) {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        marginLeft: leftMargin
      }}
    >
      <NextImage
        src={src}
        layout="fixed"
        height={height}
        width={width}
      />
    </Box>
  )
}
