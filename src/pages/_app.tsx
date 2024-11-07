import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Only log the route in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log("Current Route:", router.pathname);
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
