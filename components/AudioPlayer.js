import { useEffect, useState, useRef } from 'react';

export default function AudioPlayer({file}) {

  const [audioFile, setAudioFile] = useState(null);
  const audioRef = useRef();

  useEffect(() => {
    setAudioFile(file);
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
  }, [file]);

  return (
    <div>
      <audio controls ref={audioRef}>
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}