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

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          p: '5rem 0 5rem 0',
          bgcolor: theme => theme.discordPalette.gray,
          width: '100%'
        }}
      >

        {/*Top Half Stack*/}
        <Container
          // todo temp
          // sx={{overflow: 'hidden'}}
        >
          <Stack
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            direction={{
              'xs': 'column',
              'sm': 'row'
            }}
          >
            {/*IMAGINE A PLACE - Block*/}
            <Container>
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
            </Container>

            {/*Footer Links*/}
            <Container>
              <FooterLinks/>
            </Container>
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

            {/*Discord Logo*/}
            <DiscordLogoWithName/>

            {/*Sign Up Button*/}
            <DiscordButton variant='blue'>
              Sign Up
            </DiscordButton>
          </Stack>

        </Container>
      </Box>
    </footer>
  )
}

// todo "Acknowledgements" overflows the grid. Try switching to stack?
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