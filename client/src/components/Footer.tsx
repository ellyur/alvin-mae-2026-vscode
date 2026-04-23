import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-white text-foreground py-16 px-4 relative overflow-hidden border-t-2 border-primary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-2 text-[#333333]" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Alvin
              <span className="text-[#004b4f] mx-3">&</span>
              Mae
            </h2>
            <p className="text-lg text-[#333333]">
              May 23, 2026 • The Emerald Events Place
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-border"></div>
            <Heart className="w-6 h-6 text-[#004b4f] animate-float" />
            <div className="w-16 h-px bg-border"></div>
          </div>

          {/* Confidentiality Message */}
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-sm text-[#333333]" data-testid="text-confidentiality">
              We kindly request that you treat this invitation with utmost confidentiality. Our wedding is an intimate and small ceremony, reserved for our dearest and closest loved ones. We trust that only those invited will be present, so we ask that you refrain from sharing this information with others. Your understanding and respect for our privacy are sincerely appreciated. Thank you for being part of our special day.
            </p>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="leading-relaxed italic text-[#333333]">
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="pt-8">
            <p className="text-sm text-[#333333]">
              With love and gratitude,
            </p>
            <p className="text-[#333333]" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Alvin & Mae
            </p>
          </div>

          {/* Website Design Credit */}
          <div className="pt-8">
            <p className="text-[#333333] text-xs" data-testid="text-design-credit">
              © website designed by MadDog of inviteee
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;