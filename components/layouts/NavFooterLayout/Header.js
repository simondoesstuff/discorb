import React, {useState} from 'react';
import {Box, Button, Container, Divider, Drawer, Link, Stack, Typography, useMediaQuery} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {DiscordLogoWithName} from "@/components/DiscordLogo";
import DiscordButton from "@/components/DiscordButton";
import NextLink from 'next/link'
import DownloadIcon from "@mui/icons-material/Download";

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

        <div>
          {/*Login Button*/}
          <LoginButton/>

          {/*  Menu Stack Button
          Only renders on small screens
        */}
          {onSmallScreen && (
            <DrawerButton/>
          )}
        </div>
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

function DrawerButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Menu Stack Button*/}
      <Button
        sx={{
          m: '0 -1.15rem 0 0'
        }}
      >
        <MenuIcon
          fontSize="large"
          onClick={() => setOpen(!open)}
          sx={{
            color: theme => theme.discordPalette.white,
          }}
        />
      </Button>

      {/*Drawer
          Dyanmically renders with 'open'
      */}
      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerMenu onClose={() => setOpen(false)}/>
      </Drawer>
    </>
  )
}

function DrawerMenu({onClose}) {
  return (
    <Box p={3} width={250}>
      <Stack
        direction="column"
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
        >

          {/*Discord Logo*/}
          <DiscordLogoWithName black/>

          {/*Close Button*/}
          <Button onClick={onClose}>
            <CloseIcon fontSize='medium' color={'secondary'}/>
          </Button>
        </Stack>

        {/*Divider*/}
        <Divider sx={{borderColor: '#ebedef'}}/>

        {/*Menu Links*/}
        {
          ['Home', 'Download', 'Nitro', 'Safety', 'Mod Academy', 'Support', 'Blog', 'Careers']
            .map((e, i) => (
              <Link
                key={i}
                color={theme => theme.palette.text.primary}
                underline='hover'
              >
                <Typography>
                  {e}
                </Typography>
              </Link>
            ))
        }
      </Stack>

      {/*Bottom Download Button*/}
      <Box
        sx={{
          position: 'fixed',
          margin: '1.5rem',
          bottom: 0
        }}
      >
        <DiscordButton variant='blue'>
          <DownloadIcon sx={{marginRight: 1}}/>
          <Typography variant='subtitle2'>
            Download for Windows
          </Typography>
        </DiscordButton>
      </Box>
    </Box>
  )
}

export default Header;