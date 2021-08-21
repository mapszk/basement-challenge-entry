import type {AppProps} from "next/app";
import Head from "next/head";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta content="Coding challenge for basement.studio." name="description" />
      </Head>
      <div className="w-11/12 max-w-1440 mx-auto overflow-hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default App;
