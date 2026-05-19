import React from 'react';
import { motion } from 'motion/react';
import { Layers, Bot, CheckCircle2, RotateCcw, Crosshair, ImageIcon, Sparkles } from 'lucide-react';

export function AgentProcessingV3() {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
          <div className="lg:w-3/4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">
              Processing Scale
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Curate individual photos.<br />
              <span className="text-white/50">Or deploy the autonomous agent for bulk portfolios.</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-300 leading-loose max-w-2xl">
              Scale your workflow to match your volume. Stage a single hero shot with exacting precision, or upload an entire unsorted property folder and let our architectural AI handle the rest.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Manual Mode */}
          <div className="glass-panel p-6 md:p-6 rounded-3xl border-white/10 bg-white/[0.02] flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:bg-white/[0.04]">
            <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
                <Layers className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-medium text-white relative z-10">Manual Precision</h3>
            </div>
            
            <div className="h-48 my-8 rounded-2xl border border-white/5 bg-black/40 relative overflow-hidden flex items-center justify-center group z-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
              <div className="w-48 h-32 bg-zinc-900/50 rounded-lg border border-white/10 relative overflow-hidden backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  animate={{ x: ["-100%", "100%", "-100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-[1px] bg-white/30 shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20"
                />
                <Crosshair className="w-8 h-8 text-zinc-600 relative z-10" />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-semibold tracking-wider uppercase text-zinc-300 border border-white/10 z-20">1 / 1 Frame</div>
            </div>

            <p className="text-base text-zinc-400 leading-relaxed mb-10 flex-1 relative z-10">
              Select and process images one by one. Perfect for specific hero shots where you need granular control over styling, lighting, and exact furniture selections.
            </p>
            
            <ul className="space-y-4 text-sm text-zinc-300 relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" />
                <span>Granular control over interior design prompts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" />
                <span>Iterative revisions for exact staging requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" />
                <span>Immediate visual feedback per frame</span>
              </li>
            </ul>
          </div>

          {/* AI Agent Mode */}
          <div className="glass-panel p-6 md:p-6 rounded-3xl border-white/10 bg-zinc-900/50 flex flex-col h-full relative shadow-2xl overflow-hidden transition-all duration-500">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center relative z-10 shadow-lg">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-medium text-white relative z-10">Autonomous Agent</h3>
            </div>
            <div className="h-48 my-8 rounded-2xl border border-white/5 bg-black/40 relative overflow-hidden z-10">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none" />
              <motion.div
                animate={{ y: ["0%", "-30%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 top-0 flex flex-col gap-2 p-4"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                     <ImageIcon className="w-5 h-5 text-zinc-600" />
                     <div className="flex-1">
                       <div className="h-1.5 w-24 bg-zinc-700 rounded-full mb-1.5" />
                       <div className="h-1 w-12 bg-zinc-800 rounded-full" />
                     </div>
                     <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                     >
                        <Sparkles className="w-4 h-4 text-zinc-400" />
                     </motion.div>
                  </div>
                ))}
              </motion.div>
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-semibold tracking-wider uppercase text-zinc-300 border border-white/10 flex items-center gap-2 z-20">
                <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-white" />
                Processing 142 Images
              </div>
            </div>

            <p className="text-base text-zinc-300 leading-relaxed mb-8 relative z-10">
              Upload hundreds of raw property photos at once. The AI agent analyzes your entire batch, selects the best angles, stages each room based on detected geometry, and evaluates its own output.
            </p>
            
            <div className="p-6 rounded-2xl bg-black/60 border border-white/5 relative z-10 mb-10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                    <RotateCcw className="w-4 h-4 text-zinc-400" />
                  </motion.div>
                  <span className="text-[11px] font-semibold tracking-wider text-zinc-300 uppercase">Self-Correcting Loop</span>
                </div>
                <div className="flex gap-1.5">
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: 1.2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                If the agent determines a staging output isn't photorealistic, it automatically regenerates 2 to 3 alternative versions until perfection is achieved—delivering only the highest quality final images.
              </p>
              <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden relative">
                <motion.div
                   className="absolute inset-y-0 bg-zinc-500/50"
                   animate={{ left: ["0%", "40%", "100%"], right: ["100%", "40%", "0%"] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>

            <ul className="space-y-4 text-sm text-zinc-300 relative z-10 mt-auto border-t border-white/10 pt-8">
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                 <span>Automatic sorting and culling of sub-optimal photos</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                 <span>Context-aware design consistency across all rooms</span>
              </li>
              <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                 <span>Multi-generation evaluation network ensures quality</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
