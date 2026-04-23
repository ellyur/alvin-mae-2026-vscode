import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  
  // Create array of repeated text
  const invitations = Array(20).fill("YOU'RE INVITED!");

  return (
    <section id="invitation" className="section-hard-blue bg-white w-full overflow-hidden py-8">
      <div className="invitation-loop-container">
        <div className={`${animationsEnabled ? 'invitation-loop-track' : 'invitation-loop-track-static'}`}>
          {/* First set */}
          {invitations.map((text, index) => (
            <div key={`set1-${index}`} className="invitation-loop-item">
              <p 
                className="text-sm sm:text-base md:text-lg font-light tracking-[0.3em] uppercase whitespace-nowrap text-[#262626]" 
                data-testid={`text-invitation-${index}`}
                style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
              >
                {text}
              </p>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {invitations.map((text, index) => (
            <div key={`set2-${index}`} className="invitation-loop-item">
              <p 
                className="text-sm sm:text-base md:text-lg text-foreground font-light tracking-[0.3em] uppercase whitespace-nowrap" 
                data-testid={`text-invitation-dup-${index}`}
                style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
