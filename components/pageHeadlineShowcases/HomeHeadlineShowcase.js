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

/*
todo embed this into a dynamic layout
and get access to the nav bar
to include in the banner box.

will probably have to make a special
component that takes in the components
for the headline & banner 'hero's.
 */

function HomeHeadlineShowcase(props) {
  const onSmallMediumScreen = useMediaQuery((theme => theme.breakpoints.down('md')));
  const onTinyScreen = useMediaQuery((theme => theme.breakpoints.down('sm')));

  let textAlign, shouldCompressButtons, shouldShrinkText;
  let containerMargin, containerPadding, containerWidth;
  let bottomMargin;

  if (onSmallMediumScreen) {
    textAlign = "left";
    shouldCompressButtons = true;

    containerWidth = 'sm';
    containerMargin = '3rem 2rem';
    containerPadding = '0 7rem 0 0';

    bottomMargin = '0rem';  // todo remove?
  } else {
    // (onBigScreen)
    textAlign = "center";
    shouldCompressButtons = false;

    containerWidth = 'md';
    containerMargin = '7.5rem auto';
    containerPadding = '0 6rem';

    bottomMargin = null; // default margin
  }

  if (onTinyScreen) {
    shouldShrinkText = true;
  } else {
    shouldShrinkText = false;
  }

  return (
    <Box sx={{
      p: `0 0 ${bottomMargin} 0`
    }}>
      {/*Banner*/}
      <Banner/>

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

// todo button sizes are off. maybe put them inside containers (in <DiscordButton> file)?
function Buttons({compress}) {
  let direction, containerWidth, containerPadding;

  if (compress) {
    direction = 'column';
    containerWidth = 'sm';
    containerPadding = '0 0 0 0';    // todo with mobile responsive buttons, is this still necessary?
  } else {
    // (not compress)
    direction = 'row';
    containerWidth = 'lg';
    containerPadding = null;  // default padding
  }

  return (
    <Container maxWidth={containerWidth} sx={{p: containerPadding}}>
      <Stack
        direction={direction}
        justifyContent={'center'}
        spacing={3}
      >
        {/*Download for Windows Button*/}
        <DiscordButton variant='white'>
          <DownloadIcon sx={{marginRight: 1}}/>
          <Typography variant='h6'>
            Download for Windows
          </Typography>
        </DiscordButton>

        {/*Open in Browser Button*/}
        <DiscordButton variant='black'>
          <Typography variant='h6'>
            Open Discord in your browser
          </Typography>
        </DiscordButton>
      </Stack>
    </Container>
  )
}

// todo banner still not working
function Banner() {
  return (
    <>
      <Box
        sx={{
        }}
      >
        <Box
          sx={{
            zIndex: -1,
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '750px',
            bgcolor: '#404eed',
          }}
        >

          {/*Wave Foreground*/}
          {/*<Image*/}
          {/*  src={waveForeground}*/}
          {/*  layout='fixed'*/}
          {/*  sx={{*/}
          {/*    display: 'block',*/}
          {/*    position: 'absolute',*/}
          {/*    left: '50%'*/}
          {/*  }}*/}
          {/*/>*/}

          {/*Left Shoe*/}
          {/*<Image*/}
          {/*  src={leftShoe}*/}
          {/*  layout='fixed'*/}
          {/*  sx={{*/}
          {/*    display: 'inline',*/}
          {/*    position: 'absolute',*/}
          {/*    left: '50%',*/}
          {/*    bottom: 0,*/}
          {/*    width: 'auto',*/}
          {/*    height: 'auto'*/}
          {/*  }}*/}
          {/*/>*/}

          {/*Right Party*/}
          {/*<Image*/}
          {/*  src={rightParty}*/}
          {/*  layout='fixed'*/}
          {/*  sx={{*/}
          {/*    display: 'inline',*/}
          {/*    position: 'absolute',*/}
          {/*    left: '50%',*/}
          {/*    bottom: 0,*/}
          {/*    width: 'auto',*/}
          {/*    height: 'auto'*/}
          {/*  }}*/}
          {/*/>*/}
        </Box>
      </Box>
    </>
  )
}

export default HomeHeadlineShowcase;