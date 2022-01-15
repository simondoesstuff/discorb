import React from 'react';
import {Box, Container, Stack, Typography, useMediaQuery} from "@mui/material";
import DiscordButton from "@/components/DiscordButton";
import DownloadIcon from "@mui/icons-material/Download";


// todo nitro video:
/*

<video
  autoPlay
  loop
  style={{
    width: '100%',
    zIndex: -1,
    top: 0,
    position: 'absolute'
  }}
>
  <source src="/banners/NitroAnimatedBanner.mp4"/>
</video>

*/

export default function HeadlineText() {
  const onSmallMediumScreen = useMediaQuery((theme => theme.breakpoints.down('md')));
  const onSmallScreen = useMediaQuery((theme => theme.breakpoints.down('sm')));

  let textAlign, containerMargin, containerPadding, containerWidth;
  let bottomMargin = '3rem';
  let shouldShrinkText = false;
  let shouldCompressButtons = false;

  if (!onSmallMediumScreen) { // (onBigScreen and above)
    textAlign = "center";
    containerWidth = 'md';
    containerMargin = '7.5rem auto';
    containerPadding = '0 6rem';

  } else {  // (onSmallMediumScreen and below)
    shouldCompressButtons = true;
    textAlign = "left";
    containerWidth = 'xs';
    containerMargin = '3rem 0';
    containerPadding = '0 2rem';
  }

  if (onSmallScreen) {  // (onSmallScreen and below)
    bottomMargin = '15rem';
    shouldShrinkText = true;
  }

  return (
    <Box sx={{
      zIndex: 1,
      position: 'relative',
      p: `0 0 ${bottomMargin} 0`
    }}>
      <Container
        maxWidth={containerWidth}
        sx={{
          m: containerMargin,
          p: containerPadding
        }}
      >
        {/*Headline + Description*/}
        <HeadlineAndDescription align={textAlign} smallText={shouldShrinkText}/>

        {/*Buttons*/}
        <Buttons compress={shouldCompressButtons}/>
      </Container>
    </Box>
  );
}

function HeadlineAndDescription({align, smallText}) {
  let headlineTextSize, descriptionTextSize, internalPadding;

  if (smallText) {
    headlineTextSize = 'h5';
    descriptionTextSize = 'body1';
    internalPadding = '1.5rem';
  } else {
    // (largeText)
    headlineTextSize = 'h1';
    descriptionTextSize = 'subtitle1';
    internalPadding = '2rem';
  }

  return (
    <>
      {/*Headline*/}
      <Typography
        variant={headlineTextSize}
        color={'textSecondary'}
        fontFamily={theme => theme.discordFonts.headline}
        align={align}
      >
        IMAGINE A PLACE...
      </Typography>

      {/*Description*/}
      <Typography
        variant={descriptionTextSize}
        color={'textSecondary'}
        align={align}
        p={`${internalPadding} 0`}
      >
        ...where you can belong to a school club, a gaming group,
        or a worldwide art community. Where just you and a handful
        of friends can spend time together. A place that makes it
        easy to talk every day and hang out more often.
      </Typography>
    </>
  )
}

function Buttons({compress}) {
  let direction = compress ? 'column' : 'row';

  return (
    <Stack
      direction={direction}
      justifyContent={'center'}
      spacing={3}
    >

      {/*Download for Windows Button*/}
      <DiscordButton
        variant='white'
        sx={{
          p: '0.5rem 1.5rem'
        }}
      >
        <DownloadIcon
          sx={{
            marginRight: 1,
          }}
        />
        <Typography variant='h6'>
          Download for Windows
        </Typography>
      </DiscordButton>


      {/*Open in Browser Button*/}
      <DiscordButton
        variant='black'
        sx={{
          p: '0.5rem 1.5rem'
        }}
      >
        <Typography variant='h6'>
          Open Discord in your browser
        </Typography>
      </DiscordButton>
    </Stack>
  )
}