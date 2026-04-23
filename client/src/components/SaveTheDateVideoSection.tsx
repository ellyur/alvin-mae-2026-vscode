import { motion } from 'framer-motion';

const SaveTheDateVideoSection = () => {
  return (
    <motion.section
      id="save-the-date-video"
      className="relative w-full py-12 md:py-16 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light mb-4 text-[#004b4f]" data-testid="text-save-the-date-video-title">
            Save The Date Video
          </h2>
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="save-the-date-video-embed"
        >
          <iframe
            src="https://www.youtube.com/embed/-vPZniifnO4?rel=0&modestbranding=1"
            title="Save The Date Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateVideoSection;
