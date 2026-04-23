import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock, Camera, Utensils, Music, Heart, Users, Wine, PartyPopper, Sparkles } from 'lucide-react';

interface TimelineEvent {
    time: string;
    event: string;
    description: string;
    icon: React.ComponentType<any>;
    hueA: number;
    hueB: number;
}

interface TimelineCardProps {
    timelineEvent: TimelineEvent;
    i: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ timelineEvent, i }) => {
    const IconComponent = timelineEvent.icon;
    const isEven = i % 2 === 0;

    return (
        <motion.div
            className="relative py-6 md:py-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            data-testid={`timeline-card-${i}`}
        >
            {/* Timeline dot in center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center z-20 bg-[#004b4f]"
                style={{
                    background: 'hsl(var(--primary))',
                    boxShadow: '0 0 0 4px rgba(0, 75, 79, 0.2)'
                }}
            >
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            {/* Connecting line between dots */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/30 to-primary/20 z-10"></div>
            {/* Content alternating left/right */}
            <div className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                {/* Left side content */}
                {isEven ? (
                    <>
                        <motion.div 
                            className="w-[45%] pr-4 md:pr-8 text-right"
                            variants={cardVariants}
                        >
                            <div className="space-y-1">
                                {timelineEvent.time && (
                                    <div className="text-xs font-bold text-[#004b4f]">
                                        {timelineEvent.time}
                                    </div>
                                )}
                                <h3 className="text-sm md:text-base font-serif font-semibold uppercase tracking-wide text-[#004b4f]">
                                    {timelineEvent.event}
                                </h3>
                                <p className="text-[10px] md:text-xs leading-tight text-[#333333]">
                                    {timelineEvent.description}
                                </p>
                            </div>
                        </motion.div>
                        <div className="w-[10%]"></div>
                        <motion.div 
                            className="w-[45%] pl-4 md:pl-8"
                            variants={cardVariants}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-2 border-primary/30 flex items-center justify-center">
                                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#004b4f]" />
                            </div>
                        </motion.div>
                    </>
                ) : (
                    <>
                        <motion.div 
                            className="w-[45%] pr-4 md:pr-8 text-right"
                            variants={cardVariants}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-2 border-primary/30 flex items-center justify-center ml-auto">
                                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#004b4f]" />
                            </div>
                        </motion.div>
                        <div className="w-[10%]"></div>
                        <motion.div 
                            className="w-[45%] pl-4 md:pl-8"
                            variants={cardVariants}
                        >
                            <div className="space-y-1">
                                {timelineEvent.time && (
                                    <div className="text-xs font-bold text-[#004b4f]">
                                        {timelineEvent.time}
                                    </div>
                                )}
                                <h3 className="text-sm md:text-base font-serif font-semibold uppercase tracking-wide text-[#004b4f]">
                                    {timelineEvent.event}
                                </h3>
                                <p className="text-[10px] md:text-xs leading-tight text-[#333333]">
                                    {timelineEvent.description}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        x: -30,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5,
            delay: 0.1
        },
    },
};

const hue = (h: number, s: number = 100, l: number = 50): string => `hsl(${h}, ${s}%, ${l}%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px 10px',
};

/**
 * ==============   Data   ================
 */

const timelineEvents: TimelineEvent[] = [
    {
        time: "3:00 PM",
        event: "ASSEMBLY",
        description: "Guest arrival and registration.",
        icon: Users,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "3:30 PM",
        event: "CEREMONY",
        description: "Join us as we exchange vows.",
        icon: Heart,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "5:00 PM",
        event: "GRAZING & PHOTOBOOTH",
        description: "Capture beautiful moments and enjoy refreshments.",
        icon: Camera,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "6:30 PM",
        event: "1ST PART PROGRAM",
        description: "Special presentations and entertainment.",
        icon: Sparkles,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "7:30 PM",
        event: "DINNER",
        description: "A hearty meal served with love and gratitude.",
        icon: Utensils,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "8:30 PM",
        event: "2ND PART PROGRAM",
        description: "More entertainment and special performances.",
        icon: Music,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "10:00 PM",
        event: "SEND OFF",
        description: "Say goodbye as we start our new life together.",
        icon: PartyPopper,
        hueA: 40,
        hueB: 40,
    },
];

export default function ScrollTriggeredTimeline() {
    return (
        <motion.section 
            id="timeline" 
            className="section-pastel-blue bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Enhanced Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-primary/30 rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-primary/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-primary/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/2 right-1/5 w-8 h-8 bg-primary/40 rotate-45"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-40 right-20 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
                <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>
            </div>
            <div className="relative z-10 py-12 md:py-20">
                <motion.h2 
                    className="text-center text-4xl md:text-5xl lg:text-6xl font-display font-light mb-12 md:mb-20 text-[#004b4f]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Timeline
                </motion.h2>
                <div style={container}>
                    {timelineEvents.map((event, index) => (
                        <TimelineCard key={index} timelineEvent={event} i={index} />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center mt-12 md:mt-16 max-w-md mx-auto">
                    <div className="border-2 border-primary/30 rounded-2xl p-8 md:p-10 text-center bg-white/50 backdrop-blur-sm">
                        <Camera className="w-12 h-12 md:w-16 md:h-16 text-[#004b4f] mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3 text-[#004b4f]">
                            Oh Snap!
                        </h3>
                        <p className="text-sm md:text-base mb-6 text-[#333333]">
                            Help us capture moments on our special day by using the hashtag
                        </p>
                        <div className="border-2 border-primary rounded-lg px-4 py-3 inline-block">
                            <p className="text-center text-lg md:text-xl font-semibold tracking-wide text-[#004b4f]">
                                #MAEntToVIN
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
