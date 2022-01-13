import React from 'react';
import {Box, Container, Divider, Grid, Link, Stack, Typography} from "@mui/material";
import Image from 'next/image';
import EnglishLangImg from '@/public/customIcons/englishLangSymbol.png';
import {DiscordLogoWithName} from "@/components/DiscordLogo";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DiscordButton from "@/components/DiscordButton";

export default function Footer() {
  return (
    <Box
      sx={{
        p: '5rem 0 5rem 0',
        bgcolor: theme => theme.discordPalette.gray,
        width: '100%'
      }}
    >
      <Container sx={{p: "0 40px"}}>

        {/*Top Half Stack*/}
        <TopHalf/>

        {/*Divider*/}
        <Divider
          sx={{
            marginTop: '2rem',
            marginBottom: '2rem'
          }}
        />

        {/*Bottom Half Stack*/}
        <BottomHalf/>
      </Container>
    </Box>
  )
}

function TopHalf() {
  return (
    <Grid
      container
      direction='row'
      spacing={2}
      justifyContent={'space-between'}
      // direction={{
      //   'xs': 'column',
      //   'sm': 'row'
      // }}
    >

      {/*IMAGINE A PLACE - Block*/}
      <Grid item xs={12} sm={3}>
        <Typography
          color={theme => theme.discordPalette.brand}
          fontFamily={theme => theme.discordFonts.headline}
          variant={'h4'}
          lineHeight={'95%'}
          marginBottom={2}
          width={{
            'xs': '100%',
            'sm': '18rem'
          }}
        >
          IMAGINE A PLACE
        </Typography>

        {/*English, USA + Symbol Stack*/}
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
          spacing={1}
          marginBottom={2}
        >
          <Image
            src={EnglishLangImg}
            alt='USA'
            width={24}
            height={16}
          />
          <Typography variant='subtitle2' color={'textSecondary'}>
            English, USA
          </Typography>
        </Stack>

        {/*Social Links*/}
        <Stack
          direction={'row'}
          justifyContent={'flex-start'}
          spacing={2}
          marginBottom={6}
        >
          <TwitterIcon sx={{color: theme => theme.palette.text.secondary}}/>
          <InstagramIcon sx={{color: theme => theme.palette.text.secondary}}/>
          <FacebookIcon sx={{color: theme => theme.palette.text.secondary}}/>
          <YouTubeIcon sx={{color: theme => theme.palette.text.secondary}}/>
        </Stack>
      </Grid>

      {/*Footer Links*/}
      <Grid item xs={12} sm={6} md={8}>
        <FooterLinks/>
      </Grid>
    </Grid>
  )
}

function FooterLinks() {
  const footerLinks = [
    ['Product', 'Download', 'Nitro', 'Status'],
    ['Company', 'About', 'Jobs', 'Branding', 'Newsroom'],
    ['Resources', 'College', 'Support', 'Safety', 'Blog', 'Feedback', 'Developers', 'StreamKit'],
    ['Policies', 'Terms', 'Privacy', 'Cookie Settings', 'Guidelines', 'Acknowledgements', 'Licenses', 'Moderation'],
  ]

  // todo their blue texts appear weirdly bluer + white links less crisp -- rendering optimization?
  function LinkStack({links}) {
    // the first element becomes the title
    const title = (
      <Typography color={theme => theme.discordPalette.brand}>
        {links[0]}
      </Typography>
    );

    return (
      <>
        {title}
        {
          links
            .slice(1) // skip the first element
            .map((e, i) => (
              <Link
                key={i}
                color={theme => theme.palette.text.secondary}
                underline='hover'
              >
                <Typography>
                  {e}
                </Typography>
              </Link>
            ))
        }
      </>
    )
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems='flex-start'
      spacing={{
        'xs': 6,
        'sm': 3,
        'md': 6
      }}
    >
      {
        footerLinks.map((e, i) => (
          <Grid
            item
            key={i}
            xs={6}
            md={3}
          >
            <Stack
              direction="column"
              alignItems='flex-start'
              spacing={{
                'xs': 1.5
              }}
            >
              <LinkStack links={e}/>
            </Stack>
          </Grid>
        ))
      }
    </Grid>
  )
}

function BottomHalf() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >

      {/*Discord Logo*/}
      <DiscordLogoWithName/>

      {/*Sign Up Button*/}
      <DiscordButton variant='blue'>
        Sign Up
      </DiscordButton>
    </Stack>
  )
}