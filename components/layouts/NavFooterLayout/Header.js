import React from 'react';
import {Box, Button, Container, Link, Stack, Typography, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {DiscordLogoWithName} from "@/components/DiscordLogo";
import DiscordButton from "@/components/DiscordButton";
import NextLink from 'next/link'

// todo looks terrible on error404 page
function Header() {
  const onSmallScreen = useMediaQuery((theme => theme.breakpoints.down('md')));

  return (
    <Container sx={{
      p: '1.5rem',
    }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={'100%'}
      >
        {/*Discord Logo*/}
        <DiscordLogoWithName/>

        {/*Page Links
            Does not render on small screens
        */}
        {
          !onSmallScreen && (
            <Stack
              direction="row"
              gap={5}
            >
              {
                // the values in this array refer to page routes
                ['Download', 'Nitro', 'Safety', 'Support', 'Blog', 'Careers']
                  .map((e, i) => (
                    <NextLink
                      key={i}
                      href={`/${e}`}
                      passHref
                    >
                      <Link
                        color={theme => theme.palette.text.secondary}
                        underline='hover'
                      >
                        <Typography
                          variant={'subtitle1'}
                          fontWeight={600}
                        >
                          {e}
                        </Typography>
                      </Link>
                    </NextLink>
                  ))
              }
            </Stack>
          )
        }

        <Box>
          {/*Login Button*/}
          <LoginButton/>

          {/*  Menu Stack Button
          Only renders on small screens
        */}
          {onSmallScreen && (
            <MenuButton/>
          )}
        </Box>
      </Stack>
    </Container>
  )
}

function LoginButton() {
  return (
    <DiscordButton variant='white'>
      Login
    </DiscordButton>
  )
}

function MenuButton() {
  return (
    <Button>
      <MenuIcon
        fontSize="large"
        sx={{
          color: theme => theme.discordPalette.white
        }}
      />
    </Button>
  )
}

export default Header;