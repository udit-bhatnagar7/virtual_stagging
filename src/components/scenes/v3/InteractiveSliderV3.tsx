import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import { cn } from '../../../lib/utils';

const BEFORE_IMAGE = "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2500&auto=format&fit=crop";
const AFTER_IMAGE = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2500&auto=format&fit=crop";

export function InteractiveSliderV3() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
          <div className="lg:w-1/2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">Interactive Experience</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Drag to reveal the <span className="text-white/40">transformation.</span>
            </h2>
          </div>
        </div>

        <div className="relative aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden glass-panel border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          <div 
            ref={containerRef}
            className="absolute inset-0 select-none touch-none cursor-ew-resize"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* Base Image (After) */}
            <div className="absolute inset-0 select-none pointer-events-none">
              <img 
                src={AFTER_IMAGE} 
                alt="Staged Interior" 
                className="w-full h-full object-cover" 
                draggable={false}
              />
              {/* After Tag */}
              <div className="absolute top-6 right-6 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-white/90 shadow-xl z-20">
                Staged
              </div>
            </div>

            {/* Clipping Mask (Before Image) */}
            <div 
              className="absolute inset-0 select-none pointer-events-none" 
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={BEFORE_IMAGE} 
                alt="Empty Interior" 
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Before Tag */}
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-white/90 shadow-xl z-20">
                Empty
              </div>
            </div>

            {/* Drag Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] z-30 flex items-center justify-center transition-all duration-75"
              style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
              <div className={cn(
                "w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl transition-transform duration-200",
                isDragging ? "scale-90" : "scale-100"
              )}>
                <MoveHorizontal className="w-6 h-6" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
