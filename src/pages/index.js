import Head from "next/head";


import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Pomodoro Timer App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pomodoro.svg" />
      </Head>
    </>
  )
}
