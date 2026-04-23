import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DressCodeSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const attireGuide = [
    {
      id: 'principal-sponsors',
      label: 'PRINCIPAL SPONSORS',
      description: 'FORMAL ATTIRE',
      details: 'Ninong: Barong and Khaki Slacks\nNinang: Beige-Long Dress',
      image: 'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1771075029/5_qtvwsj.jpg',
      colors: ['#d4af86', '#c9a9a6', '#b8956a']
    },
    {
      id: 'bridesmaids',
      label: 'BRIDESMAIDS',
      description: 'FORMAL GREEN',
      image: 'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1771075029/4_oomnci.jpg',
      colors: ['#1a5d3a']
    },
    {
      id: 'groomsmen',
      label: 'GROOMSMEN',
      description: 'FORMAL GRAY',
      image: 'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1771075029/1_oynuv0.jpg',
      colors: ['#5c5c5c']
    },
    {
      id: 'ladies-guests',
      label: 'LADIES GUESTS',
      description: 'CREAM',
      image: 'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1771075029/3_yhi0q7.jpg',
      colors: ['#f5e6d3']
    },
    {
      id: 'gentlemen-guests',
      label: 'GENTLEMEN GUESTS',
      description: 'CREAM AND KHAKI',
      image: 'https://res.cloudinary.com/dpzxdmqqg/image/upload/v1771075029/2_iohylm.jpg',
      colors: ['#e8d7c3', '#b8956a']
    }
  ];

  return (
    <motion.section
      id="dresscode"
      className="bg-white relative overflow-hidden py-16 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2
            className="font-light italic text-4xl md:text-6xl"
            style={{ fontFamily: "'Dancing Script', 'Playfair Display', Georgia, serif", color: '#004B4F' }}
            data-testid="text-dresscode-title"
          >
            Attire and Motif
          </h2>
        </motion.div>

        {/* Desktop: Category Labels Row */}
        <motion.div
          className="hidden md:grid grid-cols-5 gap-4 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 8.0 }}
        >
          {attireGuide.map((item) => (
            <h3
              key={`label-${item.id}`}
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: '#004B4F', letterSpacing: '0.1em' }}
            >
              {item.label}
            </h3>
          ))}
        </motion.div>

        {/* Desktop Grid Layout */}
        <motion.div
          className="hidden md:grid grid-cols-5 gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 8.1 }}
        >
          {attireGuide.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 8.2 + index * 0.08 }}
            >
              {/* Image Container with Light Background */}
              <motion.div
                className="w-full bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center min-h-64 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="object-contain max-h-full w-auto"
                  data-testid={`image-${item.id}`}
                />
              </motion.div>

              {/* Description */}
              <p
                className="text-xs font-semibold tracking-wider uppercase text-center mb-2"
                style={{ color: '#004B4F', letterSpacing: '0.06em' }}
              >
                {item.description}
              </p>

              {/* Details - only for principal sponsors */}
              {item.details && (
                <p
                  className="text-xs text-center mb-3 leading-snug whitespace-pre-line"
                  style={{ color: '#333333', fontSize: '0.7rem' }}
                >
                  {item.details}
                </p>
              )}

              {/* Color Palette Dots */}
              <div className="flex justify-center gap-3">
                {item.colors.map((color, colorIndex) => (
                  <motion.div
                    key={colorIndex}
                    className="w-4 h-4 rounded-full border-2 border-gray-300 shadow-sm"
                    style={{ backgroundColor: color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 8.3 + index * 0.08 + colorIndex * 0.05 }}
                    data-testid={`color-${item.id}-${colorIndex}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Vertical Stack */}
        <motion.div
          className="md:hidden space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 8.1 }}
        >
          {attireGuide.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 8.2 + index * 0.1 }}
            >
              {/* Category Label */}
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-4 text-center"
                style={{ color: '#004B4F', letterSpacing: '0.1em' }}
              >
                {item.label}
              </h3>

              {/* Image Container - Clickable */}
              <motion.div
                className="w-full bg-gray-100 rounded-lg p-6 mb-4 flex items-center justify-center min-h-64 cursor-pointer active:scale-95 transition-all"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="object-contain max-h-full w-auto"
                  data-testid={`image-mobile-${item.id}`}
                />
              </motion.div>

              {/* Description */}
              <p
                className="text-xs font-semibold tracking-wider uppercase text-center mb-2"
                style={{ color: '#004B4F', letterSpacing: '0.06em' }}
              >
                {item.description}
              </p>

              {/* Details */}
              {item.details && (
                <p
                  className="text-xs text-center mb-3 leading-snug whitespace-pre-line"
                  style={{ color: '#333333', fontSize: '0.7rem' }}
                >
                  {item.details}
                </p>
              )}

              {/* Color Palette Dots */}
              <div className="flex justify-center gap-3">
                {item.colors.map((color, colorIndex) => (
                  <motion.div
                    key={colorIndex}
                    className="w-4 h-4 rounded-full border-2 border-gray-300 shadow-sm"
                    style={{ backgroundColor: color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 8.3 + index * 0.1 + colorIndex * 0.05 }}
                    data-testid={`color-mobile-${item.id}-${colorIndex}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Note Section */}
        <motion.div
          className="mt-12 md:mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.6 }}
        >
          <div className="bg-gray-100 rounded-3xl p-8 md:p-10 text-center border border-gray-200">
            <motion.h3
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: '#004B4F' }}
              data-testid="text-important-note-title"
              animate={{
                scale: [1, 1.06, 1],
                color: ['#004B4F', '#007a80', '#004B4F'],
                textShadow: [
                  '0 0 0px rgba(0,75,79,0)',
                  '0 0 12px rgba(0,75,79,0.5)',
                  '0 0 0px rgba(0,75,79,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              IMPORTANT NOTE
            </motion.h3>
            <p className="text-sm md:text-base leading-relaxed text-[#333333]" style={{ color: '#333333' }} data-testid="text-important-note-content">
              Please <span className="font-semibold">DO NOT wear White or Black</span>, as these colors are strictly reserved for the Bride and Groom.
              <br /><br />
              We also kindly ask to <span className="font-semibold">avoid denims, shorts, slippers, and sneakers</span>.
            </p>
          </div>
        </motion.div>
      </div>
      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            data-testid="image-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-lg p-6 md:p-8 max-w-2xl w-full max-h-96 md:max-h-[600px] overflow-auto flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Attire illustration"
                className="object-contain max-h-full w-auto"
                data-testid="modal-image"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                data-testid="button-close-modal"
              >
                <X className="w-6 h-6" style={{ color: '#004B4F' }} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default DressCodeSection;
