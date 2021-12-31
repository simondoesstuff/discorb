import '@/styles/global/styles.scss'
import NavFooterLayout from "@/components/layouts/NavFooterLayout/NavFooterLayout";
import {ThemeProvider} from "@mui/material";
import theme from "@/components/theming/rootTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NavFooterLayout>
        <Component {...pageProps} />
      </NavFooterLayout>
    </ThemeProvider>
  )
}

export default MyApp
