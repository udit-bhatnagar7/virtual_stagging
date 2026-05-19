import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Scan, BoxSelect, Lightbulb, Layers, Maximize, BrainCircuit } from 'lucide-react';
import { cn } from '../../../lib/utils';

const EMPTY_ROOM = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop';
const STYLE_MODERN = 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2500&auto=format&fit=crop';
const STYLE_SCANDI = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop';
const STYLE_INDUSTRIAL = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2500&auto=format&fit=crop';

export function VirtualStagingV3() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 1. Intro & Full Screen Expansion (0.00 - 0.05)
  const containerWidth = useTransform(scrollYProgress, [0, 0.05], ['90vw', '100vw']);
  const containerHeight = useTransform(scrollYProgress, [0, 0.05], ['80vh', '100vh']);
  const containerRadius = useTransform(scrollYProgress, [0, 0.05], ['2rem', '0rem']);
  
  const introOp = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.04], [0, -50]);

  // Overall Global Camera Push
  const cameraScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // 2. AI Scanning (0.05 - 0.20)
  const scannerY = useTransform(scrollYProgress, [0.06, 0.18], ['-10%', '110%']);
  const scannerOp = useTransform(scrollYProgress, [0.05, 0.06, 0.17, 0.18], [0, 1, 1, 0]);

  const badge1Op = useTransform(scrollYProgress, [0.07, 0.09, 0.23, 0.25], [0, 1, 1, 0]);
  const badge2Op = useTransform(scrollYProgress, [0.10, 0.12, 0.23, 0.25], [0, 1, 1, 0]);
  const badge3Op = useTransform(scrollYProgress, [0.13, 0.15, 0.23, 0.25], [0, 1, 1, 0]);
  const badge4Op = useTransform(scrollYProgress, [0.15, 0.17, 0.23, 0.25], [0, 1, 1, 0]);

  // 3. AI Thinking & Blueprint (0.20 - 0.32)
  const gridOp = useTransform(scrollYProgress, [0.18, 0.22, 0.30, 0.32], [0, 1, 1, 0]);
  const darkOverlayOp = useTransform(scrollYProgress, [0.0, 0.05, 0.18, 0.22, 0.40, 0.43], [0.6, 0.4, 0.4, 0.85, 0.85, 0.3]);

  // 4. Style DNA Selection (0.33 - 0.42)
  const dnaCardsOp = useTransform(scrollYProgress, [0.33, 0.36, 0.41, 0.43], [0, 1, 1, 0]);
  const dnaCardsY = useTransform(scrollYProgress, [0.33, 0.36, 0.41, 0.43], [60, 0, 0, -60]);
  const baseImageOp = useTransform(scrollYProgress, [0, 0.41, 0.49], [1, 1, 0]);

  // 5. Modern Minimal (0.43 - 0.62)
  const modernOp = useTransform(scrollYProgress, [0.43, 0.49, 0.58, 0.63], [0, 1, 1, 0]);
  const modernTextOp = useTransform(scrollYProgress, [0.47, 0.51, 0.56, 0.61], [0, 1, 1, 0]);

  // 6. Scandinavian Harmony (0.57 - 0.78)
  const scandiOp = useTransform(scrollYProgress, [0.58, 0.63, 0.72, 0.78], [0, 1, 1, 0]);
  const scandiTextOp = useTransform(scrollYProgress, [0.61, 0.65, 0.70, 0.76], [0, 1, 1, 0]);

  // 7. Industrial Loft (0.72 - 1.0)
  const industrialOp = useTransform(scrollYProgress, [0.72, 0.78, 1, 1], [0, 1, 1, 1]);
  const industrialTextOp = useTransform(scrollYProgress, [0.76, 0.80, 0.86, 0.90], [0, 1, 1, 0]);

  // 8. Final Payoff & CTA (0.90 - 1.0)
  const payoffOp = useTransform(scrollYProgress, [0.88, 0.92, 1, 1], [0, 1, 1, 1]);
  const payoffY = useTransform(scrollYProgress, [0.88, 0.92], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[1600vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Intro Text */}
        <motion.div 
           style={{ opacity: introOp, y: introY }} 
           className="absolute top-[8%] md:top-[12%] left-1/2 -translate-x-1/2 text-center w-full z-10 px-6 pointer-events-none"
        >
           <div className="absolute inset-0 -top-32 h-[150%] w-[150%] -left-[25%] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.5)_0%,transparent_70%)] pointer-events-none -z-10" />
           <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block drop-shadow-md">Virtual Staging</span>
           <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-medium tracking-tight drop-shadow-2xl">
             Turn Empty Spaces into<br/>
             <span className="text-white/80">Fully Designed Interiors.</span>
           </h2>
        </motion.div>

        {/* Central Cinematic Canvas Container */}
        <motion.div
          className="relative overflow-hidden z-0"
          style={{
            width: containerWidth,
            height: containerHeight,
            borderRadius: containerRadius,
          }}
        >
          {/* Inner camera transform */}
          <motion.div className="w-full h-full absolute inset-0 transform-gpu" style={{ scale: cameraScale }}>
            
            {/* The Base Room Image */}
            <motion.img 
              src={EMPTY_ROOM} 
              className="absolute inset-0 w-full h-full object-cover origin-center" 
              style={{ opacity: baseImageOp }}
              alt="Empty Base Room" 
            />

            {/* Generated Styles Overlays */}
            <motion.img src={STYLE_MODERN} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: modernOp }} alt="Modern Minimal" />
            <motion.img src={STYLE_SCANDI} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: scandiOp }} alt="Scandinavian" />
            <motion.img src={STYLE_INDUSTRIAL} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: industrialOp }} alt="Industrial Loft" />
            
            {/* Darkening during analysis */}
            <motion.div style={{ opacity: darkOverlayOp }} className="absolute inset-0 bg-black" />

            {/* AI Scanner Line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[30vh] pointer-events-none z-10"
              style={{ top: scannerY, opacity: scannerOp }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-300 shadow-[0_0_20px_4px_rgba(21,93,252,0.7),0_0_60px_10px_rgba(21,93,252,0.4)]" />
              <div className="absolute top-[2px] left-0 w-full h-full bg-gradient-to-b from-cyan-400/20 to-transparent mix-blend-screen" />
            </motion.div>

            {/* Blueprint / Spatial Grid Overlay */}
            <motion.div style={{ opacity: gridOp }} className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
               <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color" />
               <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="stroke-emerald-400/40 stroke-[0.1] mix-blend-screen">
                  {/* Floor grid effect */}
                  <line x1="0" y1="100" x2="50" y2="50" strokeDasharray="1, 1" />
                  <line x1="100" y1="100" x2="50" y2="50" strokeDasharray="1, 1" />
                  <line x1="0" y1="90" x2="100" y2="90" />
                  <line x1="0" y1="80" x2="100" y2="80" />
                  <line x1="0" y1="70" x2="100" y2="70" />
                  <line x1="0" y1="60" x2="100" y2="60" />
                  {/* Perspective Walls */}
                  <line x1="0" y1="0" x2="50" y2="50" />
                  <line x1="100" y1="0" x2="50" y2="50" />
               </svg>
               {/* Anchor points */}
               <div className="absolute top-[40%] left-[45%] w-3 h-3 rounded-full border border-emerald-400 bg-emerald-400/20 animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
               <div className="absolute top-[65%] left-[25%] w-3 h-3 rounded-full border border-emerald-400 bg-emerald-400/20 animate-pulse delay-75 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
               <div className="absolute top-[55%] right-[30%] w-3 h-3 rounded-full border border-emerald-400 bg-emerald-400/20 animate-pulse delay-150 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
            </motion.div>
          </motion.div>
          
          {/* Spatial Overlays & Badges */}
          <motion.div style={{ opacity: badge1Op }} className="absolute top-[18%] left-[8%] lg:left-[12%] z-20">
             <div className="px-4 py-2.5 rounded-full flex items-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
               <Maximize className="w-4 h-4 text-zinc-400" />
               <span className="text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">Room Geometry Detected</span>
             </div>
             <div className="w-[1px] h-16 bg-white/20 ml-8 mt-2" />
          </motion.div>

          <motion.div style={{ opacity: badge2Op }} className="absolute top-[65%] left-[12%] lg:left-[20%] z-20">
             <div className="px-4 py-2.5 rounded-full flex items-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
               <Layers className="w-4 h-4 text-zinc-400" />
               <span className="text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">Spatial Depth Mapping</span>
             </div>
             <div className="w-16 h-[1px] bg-white/20 -ml-16 mt-4" />
          </motion.div>

          <motion.div style={{ opacity: badge3Op }} className="absolute top-[25%] right-[10%] lg:right-[15%] z-20">
             <div className="px-4 py-2.5 rounded-full flex items-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
               <Lightbulb className="w-4 h-4 text-zinc-400" />
               <span className="text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">Natural Lighting Analysis</span>
             </div>
             <div className="w-[1px] h-20 bg-white/20 mr-8 mt-2 ml-auto" />
          </motion.div>

          <motion.div style={{ opacity: badge4Op }} className="absolute top-[70%] right-[8%] lg:right-[15%] z-20">
             <div className="px-4 py-2.5 rounded-full flex items-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
               <BoxSelect className="w-4 h-4 text-zinc-400" />
               <span className="text-[10px] font-semibold tracking-wider text-zinc-300 uppercase">Furniture Layout Planning</span>
             </div>
          </motion.div>

          {/* Style DNA Cards (Center Screen) */}
          <motion.div 
            style={{ opacity: dnaCardsOp, y: dnaCardsY }}
            className="absolute inset-x-0 bottom-[8vh] flex flex-col items-center justify-end z-30 pointer-events-none"
          >
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full px-6 pointer-events-auto">
                {[
                  { name: "Modern Horizon", desc: "Quiet luxury with intentional space.", tag: "STRUCTURAL" },
                  { name: "Standard Harmony", desc: "Balanced, everyday comfort.", tag: "BALANCED" },
                  { name: "Industrial Loft", desc: "Architectural urban sophistication.", tag: "RAW METALS" },
                  { name: "Farmhouse Heritage", desc: "Warm, rustic meets modern.", tag: "TEXTURAL" },
                  { name: "Luxury Prestige", desc: "High-end aesthetic materials.", tag: "PREMIUM" },
                  { name: "Scandinavian Airy", desc: "Soft natural living for calm.", tag: "ORGANIC" },
                  { name: "Coastal Breeze", desc: "Bright, breezy, and relaxed.", tag: "NATURAL" },
                  { name: "Designer's Choice", desc: "Curated avant-garde arrangements.", tag: "CURATED" }
                ].map((dna, idx) => (
                  <div key={idx} className="p-5 md:p-6 rounded-2xl bg-black/80 backdrop-blur-3xl border border-white/5 shadow-2xl flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                     <h4 className="text-base md:text-lg font-medium text-white mb-2 relative z-10">{dna.name}</h4>
                     <p className="text-xs text-zinc-400 leading-relaxed mb-6 relative z-10 flex-1">{dna.desc}</p>
                     <div className="mt-auto items-start shrink-0">
                       <span className="px-2.5 py-1 bg-white/10 rounded-full text-[9px] font-semibold text-zinc-300 tracking-wider uppercase inline-block relative z-10 border border-white/5">
                         {dna.tag}
                       </span>
                     </div>
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Environmental Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        </motion.div>

        {/* Text descriptions overlaying the generated styles */}
        <div className="absolute inset-0 pointer-events-none z-30 flex items-end justify-center pb-24 md:pb-32 px-6">
           <motion.div style={{ opacity: modernTextOp }} className="absolute text-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-4 block drop-shadow-md">AI Generated 01</span>
              <h3 className="text-4xl md:text-6xl text-white font-medium tracking-tight drop-shadow-xl">Modern Minimal</h3>
           </motion.div>
           
           <motion.div style={{ opacity: scandiTextOp }} className="absolute text-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-4 block drop-shadow-md">AI Generated 02</span>
              <h3 className="text-4xl md:text-6xl text-white font-medium tracking-tight drop-shadow-xl">Scandinavian Harmony</h3>
           </motion.div>

           <motion.div style={{ opacity: industrialTextOp }} className="absolute text-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70 mb-4 block drop-shadow-md">AI Generated 03</span>
              <h3 className="text-4xl md:text-6xl text-white font-medium tracking-tight drop-shadow-xl">Industrial Loft</h3>
           </motion.div>
        </div>

        {/* Final Payoff Modal / CTA UI */}
        <motion.div 
           style={{ opacity: payoffOp, y: payoffY }}
           className="absolute inset-0 pointer-events-none flex items-center justify-center z-40 bg-black/40 backdrop-blur-sm"
        >
           <div className="glass-panel p-12 md:p-16 rounded-3xl border-white/20 bg-black/80 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.8)] text-left max-w-xl mx-6 pointer-events-auto">
             <span className="inline-block mb-6 text-zinc-400 font-semibold text-[11px] uppercase tracking-wider">
               Optimized for Buyer Engagement
             </span>
             <h3 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-8">
               AI-Powered Architectural Staging.
             </h3>
             <ul className="text-left space-y-5 mb-12 text-zinc-300 text-base border-t border-white/10 pt-8">
               <li className="flex items-center gap-4">
                 <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                 Generated visually in 12 seconds
               </li>
               <li className="flex items-center gap-4">
                 <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                 Structural layout preserved 100%
               </li>
               <li className="flex items-center gap-4">
                 <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                 Lighting mathematically calculated
               </li>
             </ul>
             <button className="w-full py-4 bg-white text-black rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors cursor-pointer shadow-lg">
               Stage My Listing Now
             </button>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
