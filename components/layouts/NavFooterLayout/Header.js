import React from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";

function Header() {
  return (
    <header>
      <AppBar
        elevation={0}
        sx={{
          position: 'static'
        }}
      >
        <Toolbar>
            <Typography color="textSecondary">
              D I S C O R B

              Download
              Nitro
              Safety
              Support
              Blog
              Careers

            </Typography>

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
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header;