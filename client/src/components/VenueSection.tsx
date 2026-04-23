"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const VenueSection = () => {
  const venues = [
    {
      type: 'Ceremony',
      title: 'Ceremony',
      name: 'Parish of the Immaculate Heart of Mary (Diocese of Antipolo)',
      address: 'Antipolo, Rizal',
      image: 'https://res.cloudinary.com/daywl1cgp/image/upload/v1774076058/Ceremony_pjnefk.jpg',
      mapUrl: 'https://maps.app.goo.gl/YymQvZ2B3nni3E4H6',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.031597849903!2d121.15774577487264!3d14.597275385888649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8b089fa70bb%3A0x3a2922d867e8bd24!2sImmaculate%20Heart%20of%20Mary%20(Diocese%20of%20Antipolo)!5e0!3m2!1sen!2sph!4v1774079203325!5m2!1sen!2sph',
      description: 'We will be exchanging our vows at the Parish of the Immaculate Heart of Mary, a sacred and beautiful venue that holds special meaning for us.',
      details: 'The ceremony begins at 3:30 PM.',
      startTime: '3:30 PM',
      locationGuide: 'View on Maps →'
    },
    {
      type: 'Reception',
      title: 'Reception',
      name: 'The Emerald Events Place',
      address: 'Antipolo, Rizal',
      image: 'https://res.cloudinary.com/daywl1cgp/image/upload/v1774076932/Reception_ubcwjs.webp',
      mapUrl: 'https://maps.app.goo.gl/pFrRvLPnfR1FkKtr8',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5174099227297!2d121.1626355748721!3d14.56956768591312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7fb8fce5735%3A0xc84901512d88bd1e!2sThe%20Emerald%20Events%20Place!5e0!3m2!1sen!2sph!4v1774079173198!5m2!1sen!2sph',
      description: 'Join us for an evening of celebration, food, and festivities at The Emerald Events Place, a sophisticated venue perfect for our reception.',
      details: 'Our reception begins at 5:00 PM with grazing and photobooth, followed by dinner and entertainment.',
      startTime: '5:00 PM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="bg-background py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 6.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 }}
        >
          <h1 className="text-4xl font-display font-light mb-2 text-[#004b4f]" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) }}
            >
              {/* Modern Creative Container */}
              <div className="relative max-w-5xl mx-auto">
                {/* Decorative background layers */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-60" />
                <div className="absolute -inset-2 bg-card/30 backdrop-blur-sm rounded-xl" />
                
                {/* Main Content Card */}
                <div className="relative bg-card rounded-xl shadow-elegant overflow-hidden border border-border">
                  {/* Header with decorative elements */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 border-b-2 border-primary/20">
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/40" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/40" />
                    
                    <div className="text-center relative z-10">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) }}
                      >
                        <h2 className="font-display mb-2 text-2xl md:text-3xl text-[#004B4F]" data-testid={`text-${venue.type.toLowerCase()}-title`}>
                          {venue.title}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-8 h-px bg-primary/40" />
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <div className="w-8 h-px bg-primary/40" />
                        </div>
                        <h3 className="font-body font-semibold text-lg md:text-xl text-[#004b4f]" data-testid={`text-${venue.type.toLowerCase()}-name`}>
                          {venue.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <MapPin className="w-4 h-4 text-primary" />
                          <p className="text-sm font-body text-[#333333]" data-testid={`text-${venue.type.toLowerCase()}-address`}>
                            {venue.address}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Image Section with Modern Frame */}
                  <div className="relative p-6 md:p-8">
                    <div className="relative overflow-hidden rounded-lg">
                      {/* Image frame decoration */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg" />
                      <img
                        src={venue.image}
                        alt={venue.name}
                        className="relative w-full h-96 md:h-[500px] object-cover rounded-lg shadow-xl"
                        loading="lazy"
                        data-testid={`img-${venue.type.toLowerCase()}-venue`}
                      />
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 px-6 md:px-8 pb-6">
                    {/* Left Column - Description */}
                    <div className="space-y-4 text-[#004b4f]">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#004b4f]">About the Venue</h4>
                      </div>
                      <p className="text-base font-body leading-relaxed text-[#333333]" data-testid={`text-${venue.type.toLowerCase()}-description`}>
                        {venue.description}
                      </p>
                      <p className="text-sm font-body italic text-[#333333]" data-testid={`text-${venue.type.toLowerCase()}-details`}>
                        {venue.details}
                      </p>
                    </div>

                    {/* Right Column - Map */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Location Map</h4>
                      </div>
                      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-xl border-2 border-primary/20">
                          <iframe
                            src={venue.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            data-testid={`map-${venue.type.toLowerCase()}-embed`}
                          />
                      </div>
                    </div>
                  </div>

                  {/* Footer with Time and Directions */}
                  <div className="relative bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-6 md:px-8 py-6 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-primary/20">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs text-[#333333] uppercase tracking-wide">Start Time</p>
                          <p className="text-base font-semibold text-foreground" data-testid={`text-${venue.type.toLowerCase()}-start-time`}>
                            {venue.startTime}
                          </p>
                        </div>
                      </div>
                      <a
                        href={venue.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg bg-[#004b4f]"
                        data-testid={`button-${venue.type.toLowerCase()}-location`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Get Directions</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VenueSection;
