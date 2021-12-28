import '../styles/globals.scss'
import {useEffect} from "react"; // bootstrap

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
