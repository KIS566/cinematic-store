import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const products = [
  { id: 1, name: "Noir Timepiece", price: "$2,400", emoji: "⌚", desc: "Swiss precision" },
  { id: 2, name: "Aviator Shades", price: "$890", emoji: "👓", desc: "Italian acetate" },
  { id: 3, name: "Leather Satchel", price: "$1,650", emoji: "👜", desc: "Full-grain leather" },
  { id: 4, name: "Crystal Pendant", price: "$3,200", emoji: "💎", desc: "Hand-cut stone" },
];

function ProductCard({ product }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="group cursor-pointer">
      <div className="relative overflow-hidden bg-zinc-900 aspect-[3/4] flex items-center justify-center">
        <motion.span 
          className="text-7xl filter grayscale group-hover:grayscale-0 transition-all duration-1000"
          whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.8 }}
        >
          {product.emoji}
        </motion.span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
          <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-2">{product.desc}</p>
          <h3 className="text-xl font-semibold tracking-wider mb-1">{product.name}</h3>
          <p className="text-3xl font-light text-white/80">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductReveal() {
  return (
    <section className="bg-black py-32 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="mb-20 text-center"
      >
        <p className="text-amber-500/70 tracking-[0.3em] text-xs uppercase mb-3">Curated Selection</p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Collection</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}