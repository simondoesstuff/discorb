import React from 'react';
import {AppBar, Box, Container, Link, Stack, Toolbar, Typography} from "@mui/material";
import {DiscordLogoWithName} from "@/components/DiscordLogo";
import DiscordButton from "@/components/DiscordButton";
import NextLink from 'next/link'

// todo looks terrible on error404 page
function Header() {
  return (
    <Box sx={{
      // position: 'absolute',
      // top: 0,
      // zIndex: 1,
      // width: '100%'
    }}
    >
      <Container sx={{
        p: '1.5rem 0',
        // margin: 'auto',
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

          {/*Login Button*/}
          <DiscordButton variant='white'>
            Login
          </DiscordButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Header;