import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const STYLES = [
  {
    id: 'industrial',
    name: 'Industrial Loft',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2500&auto=format&fit=crop',
    color: 'bg-zinc-800'
  },
  {
    id: 'luxury',
    name: 'Luxury Prestige',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2500&auto=format&fit=crop',
    color: 'bg-amber-900'
  },
  {
    id: 'scandi',
    name: 'Scandinavian Airy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop',
    color: 'bg-slate-300'
  }
];

export function StyleToggleScene() {
  const [active, setActive] = useState(STYLES[1]);

  return (
    <div className="relative h-[100vh] bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Images Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={active.id}
          src={active.image}
          alt={active.name}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center max-w-3xl mx-auto px-6 text-center">
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-300 mb-6 block font-medium">
          Redefine Style
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-light tracking-tighter text-white mb-12 leading-[1.05]">
          Architecture is fluid.
        </h2>

        {/* Spatial Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 p-2 glass-panel rounded-full">
          {STYLES.map((style) => {
            const isActive = active.id === style.id;
            return (
              <button
                key={style.id}
                onClick={() => setActive(style)}
                className={cn(
                  "relative px-6 py-3 rounded-[2rem] text-sm font-medium transition-all duration-300 outline-none",
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-style-bg"
                    className="absolute inset-0 bg-white/10 rounded-[2rem] border border-white/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  <div className={cn("w-2 h-2 rounded-full", style.color)} />
                  {style.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
