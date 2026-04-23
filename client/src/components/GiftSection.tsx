import { Heart, Gift, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import giftSectionBg from '@assets/gift-section_1760518273235.png';

const GiftSection = () => {
  return (
    <motion.section 
      className="section-hard-blue bg-white py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 9.5 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-gold-bright mb-8" data-testid="text-gifts-title">
            Wedding Gifts
          </h2>
        </motion.div>

        {/* Main Gift Message */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.1 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-12 shadow-soft hover-elegant">
            {/* Icon */}
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[#004b4f]" />
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <p className="text-xl font-body text-[#004b4f] leading-relaxed whitespace-pre-line">
                Since love is what today celebrates, having you with us is the greatest gift of all.
                Should you wish to give a gift, a monetary contribution for our future would be warmly appreciated.

                With love and gratitude,
                Amiel and Raquel
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
              <div className="w-3 h-3 bg-[#ffffff] rounded-full animate-float"></div>
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
            </div>
          </div>
        </motion.div>

        {/* Payment Options */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/30 border border-border rounded-xl p-6 shadow-soft hover-elegant text-center">
              <h3 className="text-lg font-display font-semibold text-gold-bright mb-4">GCash</h3>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-primary/20">
                <img src="https://res.cloudinary.com/dkazjosk5/image/upload/v1770292964/gcash_efqcbn.png" alt="GCash QR Code" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6 shadow-soft hover-elegant text-center">
              <h3 className="text-lg font-display font-semibold text-gold-bright mb-4">BDO</h3>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-primary/20">
                <img src="https://res.cloudinary.com/dkazjosk5/image/upload/v1770292963/bdo_hylmxu.png" alt="BDO QR Code" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6 shadow-soft hover-elegant text-center">
              <h3 className="text-lg font-display font-semibold text-gold-bright mb-4">BPI</h3>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden border border-primary/20">
                <img src="https://res.cloudinary.com/dkazjosk5/image/upload/v1770292961/bpi_glqiye.png" alt="BPI QR Code" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;