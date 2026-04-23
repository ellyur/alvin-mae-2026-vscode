import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect, useRef } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { optimizeCloudinaryVideo } from '@/lib/cloudinaryOptimize';

const heroVideo = "https://res.cloudinary.com/daywl1cgp/image/upload/v1774159747/MAIN_1_jtkr1b.jpg";

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const HeroSection = ({ audioRef }: HeroSectionProps) => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section 
      className="hero-section bg-white relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroVideo}
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="hero-image"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content - Centered Names */}
      <div className="relative z-10 flex flex-col items-center justify-start -mt-32 md:-mt-56 text-center px-6">
        {/* Names */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-wide whitespace-nowrap" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
          {animationsEnabled ? (
            <TypeAnimation
              sequence={[
                'ALVIN & MAE',
                () => {
                  setShowElements(true);
                }
              ]}
              wrapper="span"
              speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
              style={{ 
                display: 'inline-block'
              }}
              cursor={true}
              repeat={0}
              className="typewriter-text"
            />
          ) : (
            <span 
              style={{ 
                display: 'inline-block'
              }}
              className="typewriter-text"
            >
              ALVIN & MAE
            </span>
          )}
        </h1>

        {/* Wedding Date */}
        <p className={`text-white text-sm sm:text-base md:text-lg tracking-widest mt-4 transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`} style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }} data-testid="text-wedding-date">MAY 23, 2026</p>

        {/* CTA Button */}
        <div className={`transition-all duration-700 mt-6 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <a 
            href="#rsvp" 
            className="inline-block px-8 py-3 border border-[#004B4F] bg-[#004B4F] text-white hover:bg-transparent hover:text-white transition-all duration-300 tracking-[0.2em] text-sm"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="button-hero-rsvp"
          >
            RSVP NOW
          </a>
        </div>
      </div>
      {/* Scroll Down Arrow - Bottom of screen */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
        <div className="flex flex-col items-center justify-center space-y-2 text-center pl-[-21px] pr-[-21px] ml-[-27px] mr-[-27px]">
          <span className="text-xs sm:text-sm text-white/80">Scroll down</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
          </svg>
        </div>
      </div>
      {/* Styles */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 2.5rem !important;
            line-height: 1.1 !important;
            white-space: nowrap !important;
          }
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: #111827;
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
