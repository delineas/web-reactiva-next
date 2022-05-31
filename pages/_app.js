import '../styles/globals.css'
import { useState } from "react";
import AppContext from "../components/AppContext";
import AudioPlayer from "../components/AudioPlayer";

function MyApp({ Component, pageProps }) {
  const [activeAudio, setActiveAudio] = useState();

  return (
    <AppContext.Provider value={{ activeAudio, setActiveAudio }}>
      <Component {...pageProps} />
      <hr />
      <AudioPlayer file={activeAudio} />
      <div>Esto sale en todas las páginas</div>
    </AppContext.Provider>
  );
}

export default MyApp
