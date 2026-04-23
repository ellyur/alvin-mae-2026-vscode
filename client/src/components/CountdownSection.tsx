import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('May 23, 2026 15:30:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      id="countdown" 
      className="section-pastel-blue bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-4xl font-display font-light mb-2 text-[#004B4F]" data-testid="text-countdown-title">
            Forever starts soon
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.8 + (index * 0.1) 
              }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <motion.div 
                className="text-5xl md:text-6xl lg:text-7xl font-display mb-1 text-[#004b4f]"
                key={item.value}
                initial={{ opacity: 0.7, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs font-body uppercase tracking-wider text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default CountdownSection;