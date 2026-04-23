import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const landscapeImages = [
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928158/1_hip8m8.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928159/2_nf4hh4.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928159/3_mwenm1.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928159/4_v0ol4w.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928160/5_mxetbc.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928159/6_bmkn7b.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928161/7_uli3pm.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928161/8_a0sqa6.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928161/9_g7xrdv.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928162/10_alxnoj.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928175/11_m8brd8.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928193/12_obywzq.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928211/13_qcsmqe.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928616/14_p0fcne.jpg",
];

const portraitImages = [
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928679/port1_jicp6x.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928679/port2_w4f5it.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928679/port3.1_yqbset.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928680/port4_w6ounb.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928680/port5_vqkxmy.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928680/port6_hkrwry.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928161/7port_uyqbtn.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928680/port8_ifluum.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928678/port_ptx1hr.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928680/portport_rnu7hf.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928680/portportport_yzycyi.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928681/portportportport_pdyelk.jpg",
  "https://res.cloudinary.com/dmdxbaecc/image/upload/q_auto/f_auto/v1776928159/1port2_lqedoy.jpg",
];

interface PhotoCarouselProps {
  images: string[];
  aspectClass: string;
  label: string;
  testIdPrefix: string;
}

const PhotoCarousel = ({ images, aspectClass, label, testIdPrefix }: PhotoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, images.length]);

  useEffect(() => {
    if (autoPlay) return;
    const timer = setTimeout(() => setAutoPlay(true), 6000);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? handleNext() : handlePrevious();
    }
    touchStartX.current = null;
  };

  return (
    <div className="mb-16">
      <div className="relative group">
        <div
          className={`relative w-full ${aspectClass} overflow-hidden rounded-xl shadow-2xl bg-[#f8f7f4]`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${label} photo ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              data-testid={`img-${testIdPrefix}-${currentIndex}`}
            />
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 md:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
            aria-label="Previous image"
            data-testid={`button-${testIdPrefix}-prev`}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black rounded-full p-2 md:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
            aria-label="Next image"
            data-testid={`button-${testIdPrefix}-next`}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="absolute bottom-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-5 flex-wrap">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentIndex(index); setAutoPlay(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#004b4f] w-8' : 'bg-[#004b4f]/30 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`button-${testIdPrefix}-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MemorableMomentsSection = () => {
  return (
    <motion.section
      id="prenup-photos"
      className="section-hard-blue bg-white relative overflow-hidden py-12 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <h2 className="text-5xl font-display font-light italic mb-4 text-[#004B4F]" data-testid="text-prenup-photos-title">
              Save the Date Photos
            </h2>
            <p className="text-xl font-script italic text-[#333333]">
              Captured moments before forever begins
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          {/* Landscape — full width */}
          <div className="w-full px-4 md:px-8 lg:px-16 mb-16">
            <PhotoCarousel
              images={landscapeImages}
              aspectClass="aspect-video"
              label="Landscape"
              testIdPrefix="landscape"
            />
          </div>

          {/* Portrait — constrained width */}
          <div className="max-w-lg mx-auto px-4">
            <PhotoCarousel
              images={portraitImages}
              aspectClass="aspect-[3/4]"
              label="Portrait"
              testIdPrefix="portrait"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
