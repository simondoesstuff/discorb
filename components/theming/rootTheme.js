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
    ...createFontFamily(theme.discordFonts.primary)
  }
});

/*

OVERRIDE MUI COMPONENTS
        // todo button padding needs to be adjusted

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