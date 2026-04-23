import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';

gsap.registerPlugin(ScrollTrigger);

const TimelineCardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineCards = [
    {
      id: 1,
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dr3xey7h9/image/upload/v1760179831/f16846e9-82d9-4b4c-9197-935b9ac83617.png", { width: 800, quality: 'auto:good' }),
      title: "Our first day as a couple",
      date: "09.17.18"
    },
    {
      id: 2,
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dr3xey7h9/image/upload/v1760106977/513281087_10081304398590972_8164128154106684885_n_1_fore49.jpg", { width: 800, quality: 'auto:good' }),
      title: "The day diana said \"Yes\"",
      date: "12.17.24"
    },
    {
      id: 3,
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dr3xey7h9/image/upload/v1760106974/JAH02565_1_upazo1.jpg", { width: 800, quality: 'auto:good' }),
      title: "The day we'll say \"I do\"",
      date: "12.26.25"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".timeline-card", 
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return null;
};

export default TimelineCardsSection;
