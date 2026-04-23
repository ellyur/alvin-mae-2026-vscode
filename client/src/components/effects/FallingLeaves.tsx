import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback, useRef } from 'react';

const LEAF_IMAGES = [
  "https://res.cloudinary.com/dkazjosk5/image/upload/v1770297724/262c0dfe-7e5f-4073-baa5-eca2f73a9599.png",
  "https://res.cloudinary.com/dkazjosk5/image/upload/v1770297729/e2c829b5-a976-41ba-afd1-34164e91d6cc.png",
  "https://res.cloudinary.com/dkazjosk5/image/upload/v1770297737/6ad69fe9-b8f3-4228-96d0-4130e743f893.png"
];

interface Leaf {
  id: string;
  x: number;
  duration: number;
  delay: number;
  imageIndex: number;
  size: number;
  rotation: number;
  initialY: number;
}

export const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const idCounter = useRef(0);

  const createLeaf = useCallback((isInitial = false): Leaf => {
    const x = Math.random() * 100;
    idCounter.current += 1;
    return {
      id: `${Date.now()}-${idCounter.current}-${Math.random()}`,
      x,
      duration: 15 + Math.random() * 10,
      delay: isInitial ? Math.random() * -30 : 0,
      imageIndex: Math.floor(Math.random() * LEAF_IMAGES.length),
      size: 20 + Math.random() * 20,
      rotation: Math.random() * 360,
      initialY: isInitial ? (Math.random() * 100) : -20
    };
  }, []);

  useEffect(() => {
    // Initial batch spread across the viewport
    const initialLeaves: Leaf[] = Array.from({ length: 30 }).map(() => createLeaf(true));
    setLeaves(initialLeaves);

    const interval = setInterval(() => {
      setLeaves(prev => {
        // Add 5 leaves every 4 seconds
        const newBatch = Array.from({ length: 5 }).map(() => createLeaf());
        const nextLeaves = [...prev, ...newBatch];
        // Clean up old leaves to keep performance stable
        if (nextLeaves.length > 60) {
          return nextLeaves.slice(-50);
        }
        return nextLeaves;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [createLeaf]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden touch-none" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 9999999, 
        backgroundColor: 'transparent'
      }}
    >
      <AnimatePresence initial={false}>
        {leaves.map(leaf => (
          <motion.img
            key={leaf.id}
            src={LEAF_IMAGES[leaf.imageIndex]}
            alt=""
            initial={{ 
              top: leaf.initialY < 0 ? `${leaf.initialY}%` : `${leaf.initialY}vh`,
              left: `${leaf.x}%`, 
              opacity: 0, 
              rotate: leaf.rotation,
              scale: 0.8
            }}
            animate={{ 
              top: '120vh',
              opacity: [0, 0.9, 0.9, 0],
              rotate: leaf.rotation + 1080,
              scale: 1
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: leaf.duration, 
              delay: leaf.delay,
              ease: "linear",
              repeat: Infinity,
              opacity: { duration: 3, times: [0, 0.1, 0.9, 1] },
            }}
            className="fixed select-none pointer-events-none"
            style={{ 
              width: `${leaf.size}px`,
              height: 'auto',
              filter: 'drop-shadow(2px 4px 6px rgba(0, 75, 79, 0.4))',
              willChange: 'transform',
              maxWidth: 'none',
              zIndex: 9999999,
              position: 'fixed',
              transformOrigin: 'center'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};