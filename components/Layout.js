import { useAppContext } from "../state/AppContext";
import AudioPlayer from "./AudioPlayer";

export default function Layout({ children }) {

  const { activeAudio, setActiveAudio } = useAppContext();

  return (
    <>
      <div>arriba</div>
      <AudioPlayer file={activeAudio} />
      <hr />
      <main>{children}</main>
      <hr />
      <div>abajo</div>
    </>
  );
}
