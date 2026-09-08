"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Focus } from "lucide-react";

interface Bubble {
  id: number;
  color: string;
  size: number;
  delay: number;
  x: number;
  y: number;
}

const colors = [
  "from-red-200 to-red-100",
  "from-orange-200 to-orange-100",
  "from-yellow-200 to-yellow-100",
  "from-green-200 to-green-100",
  "from-blue-200 to-blue-100",
  "from-purple-200 to-purple-100",
  "from-pink-200 to-pink-100",
  "from-teal-200 to-teal-100",
];

export default function BubbleField({ onSelect }: { onSelect: () => void }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const constraintsRef = useRef(null);
  const dragControls = useAnimation();

  useEffect(() => {
    const bubbleCount = 100;
    const newBubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      // Fermat's spiral (Sunflower pattern) for beautiful circular distribution
      const angle = i * 137.5;
      const angleRad = (angle * Math.PI) / 180;
      // Start radius outside the center image, increase tightly as i goes up
      // 32 is roughly the average bubble radius, packing them tightly next to each other
      const radius = 140 + 32 * Math.sqrt(i);

      newBubbles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 20 + 40, // 40px to 60px to fit well
        delay: Math.random() * 0.5,
        x: Math.cos(angleRad) * radius,
        y: Math.sin(angleRad) * radius,
      });
    }
    setBubbles(newBubbles);
  }, []);

  const handleRecenter = () => {
    dragControls.start({ x: 0, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.8 } });
  };

  return (
    <motion.div
      ref={constraintsRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute inset-0 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-30 pb-16">
        <p className="text-base md:text-lg text-gray-600 font-medium tracking-wide bg-white/80 px-6 py-2 rounded-full backdrop-blur-md shadow-lg pointer-events-auto border border-white/50">
          अपना संकल्प चुनने के लिए किसी भी bubble पर click करें
        </p>
      </div>

      {/* Recenter Button */}
      <button 
        onClick={handleRecenter}
        className="absolute top-24 right-6 md:top-24 md:right-8 z-40 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/50 text-gray-500 hover:text-orange-500 hover:scale-110 transition-all pointer-events-auto cursor-pointer flex items-center justify-center"
        title="Recenter View"
      >
        <Focus size={24} />
      </button>

      <motion.div
        drag
        dragConstraints={{ top: -800, left: -800, right: 800, bottom: 800 }}
        dragElastic={0.2}
        animate={dragControls}
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing w-full h-full touch-none"
      >
        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white pointer-events-none"
        >
          <Image
            src="/jain-art.jpg"
            alt="Jain Art"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* 100 Bubbles distributed in a spiral */}
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className={`absolute rounded-full bg-gradient-to-tr ${b.color} border-2 border-white shadow-xl backdrop-blur-md hover:scale-110 z-0`}
            style={{
              width: b.size,
              height: b.size,
              left: '50%',
              top: '50%',
              marginLeft: -b.size / 2,
              marginTop: -b.size / 2,
            }}
            initial={{ x: 0, y: 0, scale: 0 }}
            animate={{ x: b.x, y: b.y, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: b.delay,
              type: "spring",
              bounce: 0.5
            }}
            onPointerDown={(e) => {
              // We only want to trigger select if it's a click, not a drag. 
              // Framer motion drag usually handles onClick fine without capturing it on drag end.
            }}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            {/* subtle inner float animation */}
            <motion.div
              className="w-full h-full pointer-events-none"
              animate={{
                y: [0, -10, 0, 10, 0],
                x: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
