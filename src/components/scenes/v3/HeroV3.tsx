import { motion } from 'motion/react';

const BG_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop';

export function HeroV3() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      <motion.div
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(40%)',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Powered By Sofo AI Real Estate Image Transformation
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white max-w-4xl"
        >
          Make every property photo impossible to ignore.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-lg text-zinc-300 font-medium max-w-lg leading-relaxed"
        >
          Elevate your presentations effortlessly.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors font-semibold text-sm cursor-pointer shadow-lg">
            Upload Property Photo
          </button>
          <button className="px-8 py-4 rounded-full text-white bg-white/5 hover:bg-white/10 transition-colors font-semibold text-sm border border-white/10 hover:border-white/20 cursor-pointer">
            Try AI Staging
          </button>
        </motion.div>
      </div>
    </section>
  );
}
