import React from 'react';
import {AppBar, Container, Link, Stack, Toolbar, Typography} from "@mui/material";
import {DiscordLogoWithName} from "@/components/DiscordLogo";
import DiscordButton from "@/components/DiscordButton";
import NextLink from 'next/link'

function Header() {
  return (
    <header>
      <Toolbar>
        {/*
        This AppBar will only show when the page
        is without a banner. Eg: Error404 Page.
        Otherwise, the banner will cover it up.
        */}
        <AppBar
          sx={{
            position: 'absolute',
            zIndex: -10,
            bgcolor: theme => theme.palette.secondary.main,
            width: '100%',
            height: '100%'
          }}
        />

        <Container sx={{p: '1.5rem 0'}}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width={'100%'}
          >
            {/*Discord Logo*/}
            <DiscordLogoWithName/>

            {/*Page Links*/}
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
                        <Typography variant={'subtitle1'}>
                          {e}
                        </Typography>
                      </Link>
                    </NextLink>
                  ))
              }
            </Stack>

            {/*Login Button*/}
            <DiscordButton variant='white'>
              Login
            </DiscordButton>
          </Stack>
        </Container>
      </Toolbar>
    </header>
  )
}

export default Header;