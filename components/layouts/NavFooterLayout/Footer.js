import React from 'react';
import {Box, Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import Image from 'next/image';
import EnglishLangImg from '@/public/discordIcons/englishLangSymbol.png';
import {DiscordLogoWithName} from "@/components/DiscordLogo";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextLink from "@/components/TextLink";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          padding: '5rem 1.5rem 5rem 1.5rem',
          bgcolor: theme => theme.discordPalette.gray
        }}
      >

        {/*Top Half Stack*/}
        <Container sx={{padding: 0}}>
          <Stack
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            direction={{
              'xs': 'column',
              'sm': 'row'
            }}
          >
            {/*IMAGINE A PLACE - Block*/}
            <Container sx={{padding: 0}}>
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
                <Typography color={'textSecondary'} fontSize={14}>
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
            </Container>

            {/*Footer Links*/}
            <FooterLinks/>
          </Stack>

          {/*Divider*/}
          <Divider
            variant={'middle'}
            sx={{
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
          />

          {/*Bottom Half Stack*/}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <DiscordLogoWithName/>
            <Button
              variant={'contained'}
            >
              Sign Up
            </Button>
          </Stack>

        </Container>
      </Box>
    </footer>
  )
}

const footerLinks = [
  ['Product', 'Download', 'Nitro', 'Status'],
  ['Company', 'About', 'Jobs', 'Branding', 'Newsroom'],
  ['Resources', 'College', 'Support', 'Safety', 'Blog', 'Feedback', 'Developers', 'StreamKit'],
  ['Policies', 'Terms', 'Privacy', 'Cookie Settings', 'Guidelines', 'Acknowledgements', 'Licenses', 'Moderation'],
]

function FooterLinks() {
  function LinkStack({links}) {
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
            .slice(1)
            .map((e, i) => (
              <TextLink key={i}>
                {e}
              </TextLink>
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
        'xs': 6
      }}
    >
      {
        footerLinks.map((e, i) => (
          <Grid
            key={i}
            item
            md={3}
            xs={6}
          >
            <LinkStack links={e}/>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Footer;