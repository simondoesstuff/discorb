import {createTheme} from "@mui/material";

/*

SPECIFY DISCORD COLORS

 */

let theme = createTheme({
  discordPalette: {
    brand: '#5865f2',
    lighterBrand: '#7983f5',  // used in button
    black: '#000000',
    gray: '#23272a',
    lighterGray: '#36393f', // used in button
    white: '#ffffff',
    offWhite: '#f6f6f6',
    red: '#de2761',
    green: '#43b581'
  }
})

theme = createTheme(theme, {
  shape: {
    borderRadius: 28
  },
  palette: {
    type: 'light',
    primary: {
      main: theme.discordPalette.brand,
    },
    secondary: {
      main: theme.discordPalette.gray,
    },
    background: {
      default: theme.discordPalette.offWhite,
    },
    error: {
      main: theme.discordPalette.red,
    },
    success: {
      main: theme.discordPalette.green,
    },
    text: {
      primary: theme.discordPalette.gray,
      secondary: '#ffffff',
    },
    divider: theme.discordPalette.brand,
  },
});

/*

SPECIFY DISCORD FONTS

 */

// for use in importing fonts without fonts.scss
// const WhitneyBook = "/fonts/WhitneyBookRegular.woff";
// const WhitneyMedium = "/fonts/WhitneyMediumRegular.woff";
// const WhitneySemibold = "/fonts/WhitneySemiboldRegular.woff";
// const GintoNormal = "/fonts/GintoNormal.woff2";
// const GintoNord = "/fonts/GintoNord.woff2";
// const ArchivoBlack = "/fonts/ArchivoBlack.ttf";
// const ReenieBeanie = "/fonts/ReenieBeanie-Regular.ttf";

theme = createTheme(theme, {
  discordFonts: {
    primary: '"Whitney","Helvetica Neue","Helvetica","Arial",sans-serif',
    display: '"Ginto Normal","Whitney","Helvetica Neue","Helvetica","Arial",sans-serif',
    headline: '"Ginto Nord","Whitney","Helvetica Neue","Helvetica","Arial",sans-serif',
    monospace: '"Menlo","Consolas","Monaco",monospace',
    glitch: '"ArchivoBlack","Whitney","Helvetica Neue","Helvetica","Arial",sans-serif',
    cursive: '"Reenie Beanie","Comic Sans MS",cursive,sans-serif'
  }
});

function createFontFamily(fontFamily) {
  return {
    h1: {fontFamily},
    h2: {fontFamily},
    h3: {fontFamily},
    h4: {fontFamily},
    h5: {fontFamily},
    h6: {fontFamily},
    subtitle1: {fontFamily},
    subtitle2: {fontFamily},
    body1: {fontFamily},
    body2: {fontFamily},
    button: {fontFamily},
    caption: {fontFamily},
    overline: {fontFamily},
  };
}

theme = createTheme(theme, {
  typography: {
    fontFamily: theme.discordFonts.primary,
    ...createFontFamily(theme.discordFonts.primary), // changes every default font family
  }
});

/*

OVERRIDE TYPOGRAPHY

hooking into all font sizes

 */

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)'
    },
    h2: {
      fontSize: '3rem'
      // fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)'
    },
    h3: {
      fontSize: '2rem',
      // fontSize: '2.25rem'
    },
    h4: {
      fontSize: '1.75rem'
    },
    h5: {
      fontSize: '1.5rem'
    },
    h6: {
      fontSize: '1.25rem'
    },
    body1: {
      fontSize: '1rem'
    },
    body2: {
      fontSize: '0.875rem'
    },
    button: {
      fontSize: '0.875rem'
    },
    caption: {
      fontSize: '0.75rem'
    },
    subtitle1: {
      fontSize: '1.125rem'
      // fontSize: '1rem'
    },
    subtitle2: {
      fontSize: '0.875rem'
    },
    overline: {
      fontSize: '0.75rem'
    }
  }
});

/*

OVERRIDE MUI COMPONENTS
        // todo button padding needs to be adjusted -- make it wider on 'sm' screens

 */

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true
      }
    },
  },
});

export default theme