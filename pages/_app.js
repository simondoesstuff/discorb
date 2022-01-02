import '@/styles/global/styles.scss'
import HeaderFooterLayout from "@/components/layouts/NavFooterLayout/HeaderFooterLayout";
import {ThemeProvider} from "@mui/material";
import theme from "@/components/theming/rootTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderFooterLayout>
        <Component {...pageProps} />
      </HeaderFooterLayout>
    </ThemeProvider>
  )
}

export default MyApp
