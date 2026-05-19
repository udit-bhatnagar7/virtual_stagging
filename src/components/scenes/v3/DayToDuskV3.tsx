import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../../lib/utils';
import { Sun, CloudLightning, Sunset } from 'lucide-react';

const TIMELINE = [
  {
    id: 'day',
    label: 'DAY',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2500&auto=format&fit=crop',
    color: 'text-sky-400'
  },
  {
    id: 'sunset',
    label: 'SUNSET',
    icon: Sunset,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500&auto=format&fit=crop',
    color: 'text-cyan-400'
  },
  {
    id: 'twilight',
    label: 'TWILIGHT',
    icon: CloudLightning,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2500&auto=format&fit=crop',
    color: 'text-indigo-400'
  }
];

export function DayToDuskV3() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % TIMELINE.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-32 bg-black min-h-screen relative flex items-center">
      
      {/* Background layer crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeStep}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={TIMELINE[activeStep].image} className="w-full h-full object-cover blur-2xl opacity-50" alt="" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">
              Day to Dusk
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Luxury twilight visuals without reshooting.
            </h2>
            <p className="text-base md:text-lg text-zinc-300 leading-loose mb-12">
              Generate cinematic twilight property visuals from standard daytime photos in seconds. Create luxury evening ambiance, activate warm window glows, and enhance exterior lighting.
            </p>

            {/* Horizontal Timeline UI */}
            <div 
              className="relative mt-8 w-full max-w-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Background Line */}
              <div className="absolute top-[19px] left-5 right-5 h-[2px] bg-zinc-800 z-0" />
              {/* Progress Line */}
              <div 
                className="absolute top-[19px] left-5 h-[2px] bg-cyan-400 z-0 transition-all duration-700 ease-in-out"
                style={{ width: `calc(${(activeStep / (TIMELINE.length - 1)) * 100}% - 40px)` }}
              />
              
              <div className="flex flex-row justify-between relative z-10 w-full">
                {TIMELINE.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const isPassed = idx < activeStep;
                  const Icon = step.icon;
                  
                  return (
                    <div 
                      key={step.id} 
                      className="flex flex-col items-center gap-4 cursor-pointer group w-20"
                      onClick={() => setActiveStep(idx)}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0",
                        isActive ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110" : 
                        isPassed ? "bg-zinc-800 text-zinc-400" : "bg-black border border-zinc-800 text-zinc-600 group-hover:border-zinc-500 group-hover:text-zinc-300"
                      )}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-center">
                        <span className={cn(
                          "text-[10px] uppercase font-semibold transition-colors duration-300",
                          isActive ? "text-white" : isPassed ? "text-zinc-500" : "text-zinc-600 group-hover:text-zinc-400"
                        )}>
                          {step.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div 
            className="w-full lg:w-2/3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={activeStep}
                  src={TIMELINE[activeStep].image}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  alt={TIMELINE[activeStep].label}
                />
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
