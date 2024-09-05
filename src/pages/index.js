import Head from "next/head";
import { Inter } from "next/font/google";
import HeaderBar from "./components/Headbar";


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

      <HeaderBar></HeaderBar>

      <body>
        <div class="center-box">
          <h1>Welcome!</h1>
          <p>This is a responsive light pink box in the center of the page.</p>
        </div>
      </body>

     
    </>
  )
}
