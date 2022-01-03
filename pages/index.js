import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import DiscordButton from "@/components/DiscordButton";
import Image from 'next/image'
import waveForeground from '@/public/discordBanners/heroContainer/waveForeground.svg'


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
  <source src="/discordBanners/NitroAnimatedBanner.mp4"/>
</video>

*/


function Home(props) {
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
      <DiscordButton variant='white'>
        <DownloadIcon sx={{marginRight: 1}}/>
        <Typography variant='h6'>
          Download for Windows
        </Typography>
      </DiscordButton>

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
          bgcolor: '#404eed',
          top: 0,
          position: 'absolute',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Image
          src={waveForeground}
          layout='fixed'
          sx={{
            display: 'block',
            position: 'absolute',
            left: '50%'
          }}
        />
      </Box>
    </>
  )
}

export default Home;