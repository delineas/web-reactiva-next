import '../styles/globals.css'
import { useState } from "react";
import { AppWrapper } from "../state/AppContext";
import AudioPlayer from "../components/AudioPlayer";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp
