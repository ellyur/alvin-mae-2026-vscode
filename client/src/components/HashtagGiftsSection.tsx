import { motion } from 'framer-motion';

const qrCodeBackgroundImage = "https://res.cloudinary.com/daywl1cgp/image/upload/v1774076057/svd14_zbv3jf.jpg";

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 mt-[-34px] mb-[-34px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="md:text-5xl font-display font-light text-primary text-[36px]" data-testid="text-gifts-header">Gift Guide</h2>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Background Image */}
          <div className="relative h-96 md:h-[500px]">
            <img 
              src={qrCodeBackgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
              data-testid="img-gifts-background"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          </div>

          {/* Text Card - Half on image, half outside */}
          <div className="relative -mt-32 md:-mt-40 px-4 md:px-8 pb-8">
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="font-script italic mb-6 text-3xl md:text-4xl lg:text-5xl text-center text-[#004B4F]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                data-testid="text-gifts-title"
              >
                Gift Guide
              </motion.h2>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p 
                  className="text-sm md:text-base leading-relaxed text-[#333333]"
                  data-testid="text-gifts-message"
                >
                  Since love is what today celebrates, having you with us is the greatest gift of all.
                  <br /><br />
                  Should you wish to give a gift, a monetary contribution for our future would be warmly appreciated.
                  <br /><br />
                  With love and gratitude,
                  <br />
                  Alvin and Mae
                </p>

                {/* QR Codes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">GCash</p>
                    <div className="aspect-square rounded-xl overflow-hidden border border-primary/30 shadow-sm">
                      <img src="https://res.cloudinary.com/daywl1cgp/image/upload/v1774154025/gcash_qdztmi.jpg" alt="GCash QR" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">MetroBank</p>
                    <div className="aspect-square rounded-xl overflow-hidden border border-primary/30 shadow-sm">
                      <img src="https://res.cloudinary.com/daywl1cgp/image/upload/v1774154025/metrobank_ruoxoi.jpg" alt="MetroBank QR" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">ChinaBank</p>
                    <div className="aspect-square rounded-xl overflow-hidden border border-primary/30 shadow-sm">
                      <img src="https://res.cloudinary.com/daywl1cgp/image/upload/v1774154025/chinabank_izi7m6.jpg" alt="ChinaBank QR" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
