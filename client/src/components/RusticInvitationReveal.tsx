import { Heart } from 'lucide-react';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';

const flowerTopLeft = 'https://res.cloudinary.com/daywl1cgp/image/upload/v1774101817/Teal_Green_Rose_2-removebg-preview_tlwwcw.png';
const flowerTopRight = 'https://res.cloudinary.com/daywl1cgp/image/upload/v1774101817/Teal_Green_Rose_1-removebg-preview_mjnytg.png';
const flowerBottomLeft = 'https://res.cloudinary.com/daywl1cgp/image/upload/v1774101817/Teal_Green_Rose_1-removebg-preview_mjnytg.png';
const flowerBottomRight = 'https://res.cloudinary.com/daywl1cgp/image/upload/v1774101817/Teal_Green_Rose_2-removebg-preview_tlwwcw.png';

// Local images
import groomImage from '@assets/groom_1760518273235.jpg';
import brideImage from '@assets/bride_1760518273232.jpg';

// Optimized Cloudinary image
const coupleImage = optimizeCloudinaryUrl(
  'https://res.cloudinary.com/dr3xey7h9/image/upload/v1760104739/Screenshot_2025-10-10_212037_w2gbpn.png',
  { width: 1200, quality: 'auto:good' }
);

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const polaroids = [
    { src: "https://res.cloudinary.com/daywl1cgp/image/upload/v1774076055/2_hbrqbe.jpg", alt: 'Soulmates' },
    { src: "https://res.cloudinary.com/daywl1cgp/image/upload/v1774076055/3_tnn42z.jpg", alt: 'Forever' },
    { src: "https://res.cloudinary.com/daywl1cgp/image/upload/v1774076055/4_aejlst.jpg", alt: 'Beloved' }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      {/* Modern Minimalist Invitation */}
      <div
        className="relative z-10 max-w-2xl w-full mb-20"
        data-testid="invitation-paper"
      >
        {/* Layered background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-lg transform rotate-1" />
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg transform -rotate-1" />
        
        {/* Main Container */}
        <div 
          className="relative bg-white p-12 md:p-16 shadow-[0_20px_50px_rgba(65,42,21,0.35)] rounded-sm overflow-hidden border border-primary/20"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/30" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
          
          {/* Decorative Flowers on Edges */}
          <img 
            src={flowerTopLeft} 
            alt="" 
            className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float pointer-events-none"
            data-testid="decoration-flower-invitation-topleft"
          />
          <img 
            src={flowerTopRight} 
            alt="" 
            className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float-delayed pointer-events-none"
            data-testid="decoration-flower-invitation-topright"
          />
          <img 
            src={flowerBottomLeft} 
            alt="" 
            className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float-delayed pointer-events-none transform rotate-45"
            data-testid="decoration-flower-invitation-bottomleft"
          />
          <img 
            src={flowerBottomRight} 
            alt="" 
            className="absolute bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 animate-float pointer-events-none transform -rotate-12"
            data-testid="decoration-flower-invitation-bottomright"
          />

          {/* Content */}
          <div className="text-center relative z-10 space-y-8">
            {/* Heart Icon with modern styling */}
            <div className="flex justify-center">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-white border-2 border-primary/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#004b4f] fill-[#004b4f]" />
                </div>
              </div>
            </div>

            {/* Modern divider above title */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <span 
              className="text-5xl md:text-6xl text-[#004b4f] relative block"
              style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
            >
              You're Invited
              {/* Subtle underline accent */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </span>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"/>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-light text-[#333333]"
            >
              Come witness the moment we tie the knot and start our greatest adventure together
            </p>

            {/* Stylized divider */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="w-12 h-px bg-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="w-12 h-px bg-primary/30" />
            </div>

            <div className="text-base md:text-lg italic space-y-2 text-[#333333]">
              <p>with love, laughter,</p>
              <p>and a lifetime of memories</p>
            </div>

            {/* Modern Hearts decoration */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#004b4f] fill-[#004b4f] animate-pulse" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#004b4f] fill-[#004b4f] animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#004b4f] fill-[#004b4f] animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Polaroid Photos */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 max-w-6xl">
        {polaroids.map((polaroid, index) => (
        <div
          key={index}
          className="relative group"
          data-testid={`polaroid-${index}`}
        >
          {/* Modern Minimalist Frame with Accent */}
          <div className="relative">
            {/* Decorative background layer */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Main card */}
            <div 
              className="relative bg-white p-6 shadow-[0_10px_40px_rgba(65,42,21,0.2)] hover:shadow-[0_20px_50px_rgba(65,42,21,0.3)] transition-all duration-300 border-t-2 border-primary rounded-sm"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary/30" />
              
              <div className="relative overflow-hidden bg-gray-50 rounded-sm" style={{ width: '240px', height: '240px' }}>
                <img
                  src={polaroid.src}
                  alt={polaroid.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>
              
              {/* Modern caption with accent */}
              <div className="mt-4 text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <p className="text-gray-700 text-sm font-medium tracking-wider uppercase">
                  {polaroid.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default RusticInvitationReveal;
