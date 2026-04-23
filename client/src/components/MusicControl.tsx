import { useEffect } from 'react';

interface MusicControlProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const MusicControl = ({ audioRef }: MusicControlProps) => {
  // Set volume to 50% and auto-play music on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Auto-play failed:', error);
        });
      }
    }
  }, [audioRef]);

  return null;
};

export default MusicControl;