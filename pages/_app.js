import '@/styles/global/styles.scss'
import DiscordDefaultLayout from "@/components/layouts/NavFooterLayout/DiscordDefaultLayout";
import {ThemeProvider} from "@mui/material";
import theme from "@/components/theming/rootTheme";

function MyApp({Component, pageProps}) {
  const getLayout = Component.getLayout || (
    // default layout
    page => (
      <DiscordDefaultLayout>
        {page}
      </DiscordDefaultLayout>
    )
  )

  return (
    <ThemeProvider theme={theme}>
      {
        getLayout(<Component {...pageProps} />)
      }
    </ThemeProvider>
  )
}

export default MyApp
