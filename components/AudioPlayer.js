import { useEffect, useState, useRef } from 'react';

import { useAppContext } from '../state/AppContext';

export default function AudioPlayer({file}) {

  //const { activeAudio, setActiveAudio } = useAppContext();
  const [audio, setAudio] = useState(file);

  const audioRef = useRef();

  useEffect(() => {
    setAudio(file);
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
  }, [file]);

  return (
    <div>
      <audio controls ref={audioRef}>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}