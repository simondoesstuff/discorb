import React from 'react';
import {Button, useTheme} from "@mui/material";

function sxFrom(theme, variant) {
  function specificSx() {
    switch (variant) {
      case 'white': return (
        {
          color: theme.discordPalette.black,
          backgroundColor: theme.discordPalette.white,

          '&:hover': {
            color: theme.discordPalette.brand,
            backgroundColor: theme.discordPalette.white,
          },
        }
      )

      case 'black': return (
        {
          color: theme.discordPalette.white,
          backgroundColor: theme.discordPalette.gray,

          '&:hover': {
            backgroundColor: theme.discordPalette.lighterGray,
          },
        }
      )

      case 'blue': return (
        {
          color: theme.discordPalette.white,
          backgroundColor: theme.discordPalette.brand,

          '&:hover': {
            backgroundColor: theme.discordPalette.lighterBrand,
          },
        }
      )
    }
  }

  // here we return the default style
  // that rides above all the specific
  // styles.
  //
  // These styles are merged
  // (along with others)
  // in the calling function.

  return [
    {
      textTransform: 'initial',
      transition: 'background-color, color, box-shadow',
      transitionDuration: '.2s',
      transitionTimingFunction: 'ease-in-out',

      '&:hover': {
        boxShadow: '0 8px 15px rgba(0,0,0,.2)'
      }
    },

    specificSx()
  ]
}

/**
 * @param variant
 *  Support variants: 'black', 'white', 'blue'
 */
function DiscordButton({
                         children,
                         sx,
                         variant
                       }) {

  const theme = useTheme();

  return (
    <Button
      variant='contained'
      disableRipple
      disableElevation
      elevation={0}

      sx={[
        ...sxFrom(theme, 'blue'),

        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Button>
  );
}

export default DiscordButton;