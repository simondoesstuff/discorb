import '@/styles/global/styles.scss'
import {useEffect} from "react";
import NavFooterLayout from "../components/layouts/NavFooterLayout";

function MyApp({ Component, pageProps }) {
  // load the JS for bootstrap
  // (the css is loaded through the global style)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <NavFooterLayout>
      <Component {...pageProps} />
    </NavFooterLayout>
  )
}

export default MyApp
