import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return <>
   <Head>
      <title>Api-routes-test</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  <Component {...pageProps} />
  </>
}
