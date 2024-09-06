import Head from 'next/head';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Pomodoro Timer App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pomodoro.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
