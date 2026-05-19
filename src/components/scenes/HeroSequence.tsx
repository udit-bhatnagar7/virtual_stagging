import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Scan } from 'lucide-react';

const EMPTY_ROOM_IMAGE = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop';
const STAGED_ROOM_IMAGE = 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2500&auto=format&fit=crop';

export function HeroSequence({ version = 2 }: { version?: 1 | 2 }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // ================= SCENE 1 & 2: SCANNING =================
  // A subtle tech scanner line moving down during 0.1 -> 0.3
  const scanLineY = useTransform(scrollYProgress, [0.1, 0.3], ['0%', '100%']);
  const scanLineOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.3, 0.35], [0, 1, 1, 0]);

  // ================= SCENE 3: WIREFRAME / BLUEPRINT =================
  const blueprintOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.6], [0, 0.8, 0]);
  
  // ================= SCENE 4: MATERIALIZATION =================
  // Crossfade from empty to staged room
  const emptyOpacity = useTransform(scrollYProgress, [0.45, 0.7], [1, 0]);
  const stagedOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
  
  // ================= SCENE 5 & 6: ATMOSPHERIC WARMTH =================
  // Adding warm sunset bloom map
  const bloomOpacity = useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 0.4, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // ================= FLOATING SPATIAL UI LABELS =================
  const label1Y = useTransform(scrollYProgress, [0.1, 0.3], [50, -20]);
  const label1Op = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);

  const label2Y = useTransform(scrollYProgress, [0.35, 0.55], [50, -20]);
  const label2Op = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0]);

  const label3Y = useTransform(scrollYProgress, [0.6, 0.8], [50, -20]);
  const label3Op = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);

  const label4Y = useTransform(scrollYProgress, [0.85, 1], [50, -20]);
  const label4Op = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 0]);

  // Main text sequence
  const introOp = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const outroOp = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-black">
      {/* STICKY STAGE */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden">
        
        {/* BASE IMAGE: EMPTY ROOM */}
        <motion.div
          className="absolute inset-0 w-full h-full object-cover origin-center brightness-75"
          style={{
            backgroundImage: `url(${EMPTY_ROOM_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: emptyOpacity,
            scale: scale,
          }}
        />

        {/* MATERIALIZED IMAGE: STAGED ROOM */}
        <motion.div
          className="absolute inset-0 w-full h-full object-cover origin-center"
          style={{
            backgroundImage: `url(${STAGED_ROOM_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: stagedOpacity,
            scale: scale,
          }}
        />

        {/* WIREFRAME/BLUEPRINT OVERLAY */}
        <motion.div 
          className="absolute inset-0 mix-blend-screen opacity-50"
          style={{ 
            opacity: blueprintOpacity,
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}
        />

        {/* SCANNING LINE OVERLAY */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_20px_4px_rgba(21,93,252,0.5)] z-20"
          style={{
            top: scanLineY,
            opacity: scanLineOpacity,
          }}
        />

        {/* WARM SUNSET BLOOM OVERLAY */}
        <motion.div
          className="absolute inset-0 mix-blend-overlay pointer-events-none z-10"
          style={{
            opacity: bloomOpacity,
            background: 'radial-gradient(circle at 75% 25%, rgba(251, 146, 60, 0.4) 0%, transparent 60%)',
          }}
        />
        
        {/* CINEMATIC VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />

        {/* ======== SPATIAL FLOATING UI ======== */}
        <div className="absolute inset-0 z-30 pointer-events-none perspective-[1000px] flex items-center justify-center">
          
          {/* Label 1: Room Detected */}
          <motion.div 
            className="absolute left-[30%] top-[40%] glass-panel rounded-full px-4 py-2 flex items-center gap-2"
            style={{ opacity: label1Op, y: label1Y, rotateX: 10, rotateY: 15 }}
          >
            <Scan className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-100 tracking-wider">ROOM_DETECTED</span>
          </motion.div>

          {/* Label 2: Furniture Generated */}
          <motion.div 
            className="absolute right-[25%] top-[55%] glass-panel rounded-full px-4 py-2 flex items-center gap-2 border-amber-500/30"
            style={{ opacity: label2Op, y: label2Y, rotateX: -5, rotateY: -10 }}
          >
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono text-amber-100 tracking-wider">MESH_GENERATED</span>
          </motion.div>

          {/* Label 3: Atmosphere */}
          <motion.div 
            className="absolute left-[40%] top-[30%] glass-panel rounded-full px-4 py-2 flex items-center gap-2 border-rose-500/30"
            style={{ opacity: label3Op, y: label3Y, rotateX: 5, rotateY: -5 }}
          >
            <div className="w-4 h-[2px] bg-rose-400" />
            <span className="text-xs font-mono text-rose-100 tracking-wider">LIGHTING_RESOLVED</span>
          </motion.div>

          {/* Label 4: Output Ready */}
          <motion.div 
            className="absolute right-[40%] top-[60%] glass-panel rounded-full px-4 py-2 flex items-center gap-2 bg-white/10"
            style={{ opacity: label4Op, y: label4Y }}
          >
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
            <span className="text-xs font-mono tracking-widest uppercase">MLS PRESTIGE READY</span>
          </motion.div>

        </div>

        {/* ======== TYPOGRAPHY ======== */}
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
          <motion.div style={{ opacity: introOp }} className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tighter text-glow drop-shadow-2xl leading-[1.05]">
              {version === 1 ? (
                <>
                  The Cinematic AI OS
                  <br />
                  <span className="text-zinc-500">for Real Estate.</span>
                </>
              ) : (
                <>
                  The Operating System
                  <br />
                  <span className="text-zinc-500">for Luxury Real Estate Presentation.</span>
                </>
              )}
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] font-mono text-zinc-400">
              Scroll to begin transformation
            </p>
          </motion.div>

          {/* Outro text appearing at the very end of scroll */}
          <motion.div style={{ opacity: outroOp, position: 'absolute' }} className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-glow text-white leading-[1.1]">
              {version === 1 ? (
                "Emotion mapped to space."
              ) : (
                <>
                  RIA transforms perception,
                  <br/>
                  <span className="text-zinc-500">emotion, and buyer attention.</span>
                </>
              )}
            </h2>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
