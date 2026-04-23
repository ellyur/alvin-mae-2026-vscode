import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
import CountdownSection from '@/components/CountdownSection';
import TimelineCardsSection from '@/components/TimelineCardsSection';
import ProposalSection from '@/components/ProposalSection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import SaveTheDateVideoSection from '@/components/SaveTheDateVideoSection';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { FallingLeaves } from '@/components/effects/FallingLeaves';
import { AnimationContext } from '@/contexts/AnimationContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;
    }
  }, []);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    
    // Scroll to hero section
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
        console.log('Audio playing after user consent');
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
    }
  };

  return (
    <ErrorBoundary>
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/dbciwaal4/video/upload/v1771321849/Donna_Lewis_-_I_Love_You_Always_Forever_piano_tutorial_hkjbbq.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <CoverSection
          imageUrl="https://res.cloudinary.com/daywl1cgp/image/upload/v1774076056/5_jtxzjo.jpg"
          alt="Cover 1"
        />
        <ProposalSection audioRef={audioRef} />
        <ScrollTriggeredTimeline />
        <CoverSection
          imageUrl="https://res.cloudinary.com/daywl1cgp/image/upload/v1774076056/6_yzbs4a.jpg"
          alt="Cover 2"
        />
        <VenueSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/daywl1cgp/image/upload/v1774076056/7_kcwosw.jpg"
          alt="Cover 3"
        />
        <DressCodeSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/daywl1cgp/image/upload/v1774159748/8_kcnyjq.jpg"
          alt="Cover 4"
        />
        <HashtagGiftsSection />
        <SaveTheDateVideoSection />
        <MemorableMomentsSection />
        <RSVPSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/daywl1cgp/image/upload/v1774076057/9_eyhsfv.jpg"
          alt="Cover 5"
        />
        <EntourageSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/daywl1cgp/image/upload/v1774076058/10_lkw4rg.jpg"
          alt="Cover 6"
        />
        <FAQSection />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
    </ErrorBoundary>
  );
};

export default Index;
