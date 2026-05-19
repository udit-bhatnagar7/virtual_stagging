import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const MARKETING_IMAGE = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop';

export function MarketingOutput({ version = 2 }: { version?: 1 | 2 }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const mainOp = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  
  // Fanning out elements
  const leftX = useTransform(scrollYProgress, [0.5, 0.7], [0, -400]);
  const leftY = useTransform(scrollYProgress, [0.5, 0.7], [0, -100]);
  const leftRot = useTransform(scrollYProgress, [0.5, 0.7], [0, -15]);

  const rightX = useTransform(scrollYProgress, [0.5, 0.7], [0, 400]);
  const rightY = useTransform(scrollYProgress, [0.5, 0.7], [0, 100]);
  const rightRot = useTransform(scrollYProgress, [0.5, 0.7], [0, 15]);
  
  const topX = useTransform(scrollYProgress, [0.5, 0.7], [0, -150]);
  const topY = useTransform(scrollYProgress, [0.5, 0.7], [0, -300]);
  const topRot = useTransform(scrollYProgress, [0.5, 0.7], [0, -5]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-zinc-950">
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center perspective-[1200px]">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

        <motion.div 
          style={{ opacity: mainOp }}
          className="z-30 text-center mb-12 flex flex-col items-center max-w-4xl"
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6 block font-medium">
            The Engine
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-light tracking-tighter text-white leading-[1.05]">
            {version === 1 ? (
              <>One image. <br/><span className="text-zinc-500">Infinite touchpoints.</span></>
            ) : (
              <>One image becomes an entire <br/><span className="text-zinc-500">emotionally optimized marketing system.</span></>
            )}
          </h2>
        </motion.div>

        {/* Central Hub Image */}
        <div className="relative w-[300px] md:w-[600px] aspect-video">
          
          {/* Main */}
          <motion.div 
            className="absolute inset-0 rounded-xl overflow-hidden glass-panel z-20 shadow-2xl"
          >
            <img src={MARKETING_IMAGE} alt="Central Hub" className="w-full h-full object-cover opacity-80" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-mono tracking-widest text-white">{version === 1 ? "MLS MASTER" : "MLS LISTING"}</span>
            </div>
          </motion.div>

          {/* Left / Instagram */}
          <motion.div 
            className="absolute inset-0 rounded-xl overflow-hidden glass-panel border border-pink-500/20 z-10"
            style={{ x: leftX, y: leftY, rotateZ: leftRot, scale: 0.8 }}
          >
            <img src={MARKETING_IMAGE} alt="IG Ad" className="w-full h-full object-cover opacity-60" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] bg-pink-500/20 px-2 py-1 rounded font-mono tracking-widest text-pink-100">{version === 1 ? "SOCIAL AD" : "SOCIAL CAMPAIGN"}</span>
            </div>
          </motion.div>

          {/* Right / Brochure */}
          <motion.div 
            className="absolute inset-0 rounded-xl overflow-hidden glass-panel border border-cyan-500/20 z-10"
            style={{ x: rightX, y: rightY, rotateZ: rightRot, scale: 0.85 }}
          >
            <img src={MARKETING_IMAGE} alt="Brochure" className="w-full h-full object-cover opacity-60" />
            <div className="absolute bottom-4 right-4">
              <span className="text-[10px] bg-cyan-500/20 px-2 py-1 rounded font-mono tracking-widest text-cyan-100">PRINT BROCHURE</span>
            </div>
          </motion.div>
          
          {/* Top / Property Site */}
          <motion.div 
            className="absolute inset-0 rounded-xl overflow-hidden glass-panel border border-zinc-500/20 z-10"
            style={{ x: topX, y: topY, rotateZ: topRot, scale: 0.9 }}
          >
            <img src={MARKETING_IMAGE} alt="Website" className="w-full h-full object-cover opacity-40 blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border border-zinc-700/50 rounded flex flex-col p-4 bg-black/40">
                 <div className="h-4 w-1/3 bg-zinc-800 rounded mb-4" />
                 <div className="h-2 w-full bg-zinc-800 rounded mb-2" />
                 <div className="h-2 w-2/3 bg-zinc-800 rounded" />
              </div>
            </div>
            <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
              <span className="text-[10px] bg-zinc-500/20 px-2 py-1 rounded font-mono tracking-widest text-zinc-300">
                {version === 1 ? "PROPERTY SITE" : "LUXURY PROPERTY WEBSITE"}
              </span>
              {version === 2 && (
                <span className="text-[10px] bg-emerald-500/20 px-2 py-1 rounded font-mono tracking-widest text-emerald-300">AGENT BRANDING</span>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
