import type {AppProps} from "next/app";
import Head from "next/head";

import CartContextProvider from "../contexts/CartContext";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta content="Coding challenge for basement.studio." name="description" />
      </Head>
      <CartContextProvider>
        <div className="w-11/12 max-w-1440 mx-auto overflow-hidden">
          <Component {...pageProps} />
        </div>
      </CartContextProvider>
    </>
  );
}
export default App;
