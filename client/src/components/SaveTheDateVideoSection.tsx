import { motion } from 'framer-motion';
import { useEffect, useRef, RefObject } from 'react';

interface SaveTheDateVideoSectionProps {
  audioRef?: RefObject<HTMLAudioElement>;
}

const SaveTheDateVideoSection = ({ audioRef }: SaveTheDateVideoSectionProps) => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }
    }

    const initPlayer = () => {
      if (playerRef.current) return;
      if (!window.YT || !window.YT.Player) return;

      playerRef.current = new window.YT.Player('save-the-date-player-container', {
        height: '100%',
        width: '100%',
        videoId: '-vPZniifnO4',
        playerVars: {
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: (event: any) => {
            const playerState = event.data;

            if (playerState === window.YT.PlayerState.PLAYING && audioRef?.current) {
              audioRef.current.pause();
            } else if (
              (playerState === window.YT.PlayerState.ENDED ||
                playerState === window.YT.PlayerState.PAUSED) &&
              audioRef?.current
            ) {
              audioRef.current.play().catch(() => {
                console.log('Could not resume audio');
              });
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousCallback === 'function') {
          previousCallback();
        }
        initPlayer();
      };
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
        playerRef.current = null;
      }
    };
  }, [audioRef]);

  return (
    <motion.section
      id="save-the-date-video"
      className="relative w-full py-12 md:py-16 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light mb-4 text-[#004b4f]" data-testid="text-save-the-date-video-title">
            Save The Date Video
          </h2>
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="save-the-date-video-embed"
        >
          <div
            id="save-the-date-player-container"
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateVideoSection;
