interface CoverSectionProps {
  imageUrl?: string;
  videoUrl?: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, videoUrl, alt, className = "" }: CoverSectionProps) => {
  return (
    <section className={`bg-white relative w-full overflow-hidden ${className}`}>
      {/* Full Width Media Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              margin: 0,
              padding: 0
            }}
            data-testid={`cover-video-${alt}`}
          />
        ) : (
          <img 
            src={imageUrl}
            alt={alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              margin: 0,
              padding: 0
            }}
          />
        )}
      </div>
    </section>
  );
};

export default CoverSection;