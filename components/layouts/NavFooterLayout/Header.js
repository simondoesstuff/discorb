import React from 'react';
import {AppBar, Box, Button, Container, Stack, Toolbar, Typography} from "@mui/material";
import {DiscordLogoWithName} from "@/components/DiscordLogo";
import TextLink from "@/components/TextLink";

function Header({children}) {
  return (
    <header>
      {/*Banner*/}
      <box
        sx={{
          zIndex: -10,
          position: 'absolute'
        }}
      >
        {children}
      </box>

      <Toolbar>
        <Container sx={{padding: 0, paddingTop: '1.5rem'}}>
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
              gap={4}
            >
              {
                ['Download', 'Nitro', 'Safety', 'Support', 'Blog', 'Careers']
                  .map((e, i) => (
                    <TextLink key={i}>
                      {e}
                    </TextLink>
                  ))
              }
            </Stack>

            {/*Login Button*/}
            <Button
              variant='contained'
              elevation={0}
              sx={{
                bgcolor: '#ffffffff',
                color: theme => theme.discordPalette.brand
              }}
            >
              Login
            </Button>
          </Stack>
        </Container>
      </Toolbar>
    </header>
  )
}

export default Header;