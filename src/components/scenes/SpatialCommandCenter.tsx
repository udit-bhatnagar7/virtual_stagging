import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SlidersHorizontal, Sparkles, Sun } from 'lucide-react';

const BG_IMAGE = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop';

export function SpatialCommandCenter() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  
  const panel1Y = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const panel2Y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const panel3Y = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden flex items-center justify-center">
        
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale, opacity }}
        >
          <img src={BG_IMAGE} className="w-full h-full object-cover opacity-30 blur-md" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-cyan-400 mb-6 block font-medium">
              Spatial Command Center
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-light tracking-tighter text-white mb-8 leading-[1.05]">
              AI + Human Taste.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed tracking-tight">
              A cinematic spatial visualization environment where intelligence feels invisible, and presentation is emotionally optimized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
             {/* Panels */}
             <motion.div style={{ y: panel1Y, rotateY: 5, rotateX: 5 }} className="glass-panel p-8 rounded-3xl border-white/10 hover:border-white/30 transition-colors bg-white/5 backdrop-blur-2xl">
               <SlidersHorizontal className="w-6 h-6 text-zinc-400 mb-6" />
               <h3 className="text-xl md:text-2xl text-white font-light tracking-tight mb-4">Style Matrices</h3>
               <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed tracking-wide">
                 Explore transformations across architectural eras. Control mood presets and compare emotional presentation modes instantly.
               </p>
             </motion.div>

             <motion.div style={{ y: panel2Y }} className="glass-panel p-8 rounded-3xl border-white/20 hover:border-white/40 transition-colors translate-z-10 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-3xl">
               <Sun className="w-6 h-6 text-amber-400 mb-6" />
               <h3 className="text-xl md:text-2xl text-white font-light tracking-tight mb-4">Cinematic Lighting</h3>
               <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed tracking-wide">
                 Activate volumetric lighting environments. Shift from raw daylight to an emotionally resonant dusk with physically accurate shadows.
               </p>
             </motion.div>

             <motion.div style={{ y: panel3Y, rotateY: -5, rotateX: 5 }} className="glass-panel p-8 rounded-3xl border-white/10 hover:border-white/30 transition-colors bg-white/5 backdrop-blur-2xl">
               <Sparkles className="w-6 h-6 text-purple-400 mb-6" />
               <h3 className="text-xl md:text-2xl text-white font-light tracking-tight mb-4">Emotional Impact</h3>
               <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed tracking-wide">
                 Trained on luxury spatial computing paradigms. The AI remains invisible, exposing a seamless surface of architecturally intelligent taste.
               </p>
             </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
