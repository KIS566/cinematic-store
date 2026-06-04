import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CinematicHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <motion.section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80" 
          alt="Cinematic"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 text-center px-6">
        <motion.div className="overflow-hidden">
          <motion.h1 
            className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-4"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          >
            THE ART OF
          </motion.h1>
        </motion.div>
        <motion.div className="overflow-hidden">
          <motion.h1 
            className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-8"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
          >
            ELEGANCE
          </motion.h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.8, delay: 1.5 }}
          className="text-xl text-gray-400 max-w-xl mx-auto font-light tracking-wider"
        >
          Curated collections for those who appreciate the finer details
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-16 bg-gradient-to-b from-amber-500 to-transparent"
        />
      </motion.div>
    </motion.section>
  );
}