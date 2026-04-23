import { motion } from 'framer-motion';

const RSVPSection = () => {
  
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 10.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.8 }}
        >
          <h2 
            className="text-[48px] md:text-5xl text-[#004B4F]" 
            style={{ fontFamily: 'Boska, serif', fontWeight: 300, fontStyle: 'normal' }} 
            data-testid="text-rsvp-header"
          >
            RSVP Here
          </h2>
        </motion.div>

        {/* RSVP Content */}
        <div className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center">
          {/* Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            {/* "RSVP" - Split into RS and VP */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 11.2 }}
            >
              <span 
                className="text-[150px] md:text-[240px] lg:text-[320px] leading-[0.8] tracking-tight block text-[#004B4F]"
                style={{ fontFamily: 'Boska, serif', fontWeight: 350 }}
                data-testid="text-rsvp-title"
              >
                RS<br />VP
              </span>
            </motion.div>

            {/* Deadline and Button */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 11.4 }}
            >
              <a 
                href="https://alvin-mae-rsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-white text-sm md:text-base font-display tracking-wider hover:bg-[#004b4f] transition-colors duration-300 border-2 border-[#004B4F] uppercase bg-[#004B4F]"
                data-testid="button-rsvp"
              >RSVP HERE!</a>

              {/* Message below button with white container */}
              <div className="mt-8 bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl border border-gray-100">
                <p 
                  className="font-body text-base md:text-lg text-black font-medium text-center mb-4"
                  data-testid="text-rsvp-message"
                >
                  Please confirm your attendance by responding to our invitation. Click the RSVP HERE! button above.
                </p>
                <p className="text-center">
                  <span className="font-body md:text-lg font-bold px-3 py-1 rounded whitespace-nowrap text-[12px] text-[#ffffff] bg-[#004b4f]">THE DEADLINE IS ON MAY 08, 2026</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
