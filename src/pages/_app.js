import '@/styles/globals.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Router from "next/router";
import Loading from '../../components/Loading';

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const start = () => {
        setLoading(true);
      };
      const end = () => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);

      return () => {
        Router.events.off("routeChangeStart", start);
        Router.events.off("routeChangeComplete", end);
        Router.events.off("routeChangeError", end);
      };
    }, []);
    return(
      <>
      {loading ? <Loading></Loading> : <Component {...pageProps} />}
      </>
    )
}
