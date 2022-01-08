import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
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

function HomeHeadlineShowcase(props) {
  return (
    <>
      {/*Banner*/}
      <Banner/>

      <Container
        sx={{
          margin: '7.5rem auto',
          p: '0 14rem'
        }}
      >
        {/*Headline + Description*/}
        <HeadlineAndDescription/>

        {/*Buttons*/}
        <Buttons/>
      </Container>
    </>
  );
}

function HeadlineAndDescription() {
  return (
    <>
      {/*Headline*/}
      <Typography
        color={'textSecondary'}
        variant={'h2'}
        fontFamily={theme => theme.discordFonts.headline}
        align='center'
      >
        IMAGINE A PLACE...
      </Typography>

      {/*Description*/}
      {/*todo discord.com clamp()s this font size*/}
      <Typography
        color={'textSecondary'}
        align='center'
        p={'2.5rem 7.5rem'}
      >
        ...where you can belong to a school club, a gaming group,
        or a worldwide art community. Where just you and a handful
        of friends can spend time together. A place that makes it
        easy to talk every day and hang out more often.
      </Typography>
    </>
  )
}

function Buttons() {
  return (
    <Stack
      direction={'row'}
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
  )
}

function Banner() {
  return (
    <>
      <Box
        sx={{
          zIndex: -1,
          top: 0,
          position: 'absolute'
        }}
      >
        <Box
          sx={{
            bgcolor: '#404eed',
            position: 'relative',
            overflow: 'hidden',
            width: '100vw', // placeholder
            minHeight: '626px'  // placeholder
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