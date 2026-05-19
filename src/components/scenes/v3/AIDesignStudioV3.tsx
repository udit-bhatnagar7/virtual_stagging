import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Wand2 } from 'lucide-react';

const PLACEHOLDER_PROMPT = "Create a warm luxury living room with beige tones and modern lighting.";
const GENERATED_PROMPT = "Luxury contemporary living room with warm beige palette, soft ambient lighting, modern furniture, marble accents, cinematic interior photography.";

const VARIATION_IMAGES = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
];

export function AIDesignStudioV3() {
  const [step, setStep] = useState(0); // 0: Input, 1: Generating Prompt, 2: Generating Variations, 3: Done
  const [inputText, setInputText] = useState('');

  // Auto-play demo simulation
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (step === 0) {
      // simulate typing
      let i = 0;
      const type = setInterval(() => {
        if (i <= PLACEHOLDER_PROMPT.length) {
          setInputText(PLACEHOLDER_PROMPT.substring(0, i));
          i++;
        } else {
          clearInterval(type);
          timeout = setTimeout(() => setStep(1), 1000);
        }
      }, 50);
      return () => {
        clearInterval(type);
        clearTimeout(timeout);
      };
    } else if (step === 1) {
      timeout = setTimeout(() => setStep(2), 2000);
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(3), 2500);
    } else if (step === 3) {
      timeout = setTimeout(() => {
        setStep(0);
        setInputText('');
      }, 6000);
    }
    
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <section className="py-32 bg-black min-h-screen relative flex items-center overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
          <div className="lg:w-1/2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              AI Design Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Describe your vision.<br/>AI creates it.
            </h2>
            <p className="text-base md:text-lg text-zinc-300 leading-loose">
              Use natural language to generate consistent interior designs and AI-powered staging variations automatically.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Input */}
          <div className="glass-panel p-2 rounded-2xl flex items-center mb-8 border-white/10 bg-white/5 relative shadow-2xl">
            <div className="pl-6 w-full py-4 text-white text-lg tracking-wide bg-transparent outline-none">
              {inputText}
              <span className="w-0.5 h-6 bg-zinc-400 inline-block align-middle ml-1 animate-pulse" />
            </div>
            <button className="h-12 w-12 rounded-full bg-white text-black hover:bg-zinc-200 flex items-center justify-center mr-2 shrink-0 cursor-pointer shadow-lg transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative min-h-[400px]">
            {/* Step 2: Prompt Optimization */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-panel p-6 rounded-2xl border-white/10 bg-zinc-900/50 mb-8"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Wand2 className="w-4 h-4 text-zinc-400" />
                    <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Optimized Design Prompt</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed pl-7 border-l-2 border-zinc-800">
                    "{step >= 1 ? GENERATED_PROMPT : '...'}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Variations */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {VARIATION_IMAGES.map((img, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 * i + (step === 2 ? 0.5 : 0) }}
                      className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 group aspect-[4/5]"
                    >
                      {step === 2 ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50">
                          <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                      ) : (
                        <>
                          <img src={img} alt="Variation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded font-mono text-[10px] text-white">
                            VAR_0{i+1}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
