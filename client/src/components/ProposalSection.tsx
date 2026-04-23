import { motion } from 'framer-motion';
import { useEffect, useRef, RefObject } from 'react';

interface ProposalSectionProps {
  audioRef?: RefObject<HTMLAudioElement>;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const ProposalSection = ({ audioRef }: ProposalSectionProps) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Set up callback
    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) return;
      
      playerRef.current = new window.YT.Player('youtube-player-container', {
        height: '100%',
        width: '100%',
        videoId: 'rbiwhViunWQ',
        events: {
          onReady: (event: any) => {
            // Set video quality to 1080p when player is ready
            event.target.setPlaybackQuality('hd1080');
          },
          onStateChange: (event: any) => {
            const playerState = event.data;
            
            // YouTube player states:
            // 0: ENDED
            // 1: PLAYING
            // 2: PAUSED
            // 3: BUFFERING
            // 5: CUED
            
            if (playerState === window.YT.PlayerState.PLAYING && audioRef?.current) {
              audioRef.current.pause();
              console.log('Video playing - music paused');
            } else if ((playerState === window.YT.PlayerState.ENDED || playerState === window.YT.PlayerState.PAUSED) && audioRef?.current) {
              audioRef.current.play().catch(() => {
                console.log('Could not resume audio');
              });
              console.log('Video stopped/paused - music resumed');
            }
          }
        }
      });
    };

    // If API is already loaded, call the callback
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      // Cleanup if needed
    };
  }, [audioRef]);

  return (
    <motion.section
      id="proposal"
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
          <h2 className="text-4xl md:text-5xl font-display font-light text-[#004b4f]" data-testid="text-proposal-title">
            The Proposal
          </h2>
        </motion.div>

        {/* YouTube Embed - Normal Width */}
        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={containerRef}
        >
          <div
            id="youtube-player-container"
            className="w-full h-full"
            data-testid="video-proposal"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProposalSection;
