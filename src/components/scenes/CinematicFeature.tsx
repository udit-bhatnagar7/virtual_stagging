import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '../../lib/utils';

interface CinematicFeatureProps {
  kicker: string;
  title: string;
  description: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  align?: 'left' | 'right' | 'center';
  gradientMode?: 'dusk' | 'haze' | 'clean';
}

export function CinematicFeature({ kicker, title, description, imageUrl, secondaryImageUrl, align = 'left', gradientMode = 'clean' }: CinematicFeatureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const primaryImgOpacity = useTransform(scrollYProgress, [0.35, 0.6], [1, secondaryImageUrl ? 0 : 1]);
  const secondaryImgOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [50, 0, 0, -50]);

  // Gradients for environmental storytelling
  const gradients = {
    dusk: 'bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.15)_0%,transparent_60%)]',
    haze: 'bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]',
    clean: 'bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0)_0%,transparent_100%)]'
  };

  return (
    <div ref={containerRef} className="relative h-[150vh] bg-black">
      {/* Sticky container handles the cinematic hold */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden flex items-center justify-center">
        
        {/* Parallax Image Background */}
        <motion.div
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            scale: imgScale,
            y: imgY,
            opacity: primaryImgOpacity,
          }}
        />

        {/* Secondary Parallax Image Background (for transitions) */}
        {secondaryImageUrl && (
          <motion.div
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              backgroundImage: `url(${secondaryImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              scale: imgScale,
              y: imgY,
              opacity: secondaryImgOpacity,
            }}
          />
        )}

        {/* Environmental Overlays */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-10" />
        <div className={cn("absolute inset-0 pointer-events-none z-10 mix-blend-screen", gradients[gradientMode])} />

        {/* Content Layers */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <motion.div 
            ref={textRef}
            className={cn(
              "max-w-2xl",
              align === 'left' && "mr-auto",
              align === 'right' && "ml-auto",
              align === 'center' && "mx-auto text-center"
            )}
            style={{
              opacity,
              y: textY
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-zinc-600" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
                {kicker}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-white mb-6 leading-[1.05]">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl font-light leading-relaxed tracking-tight">
              {description}
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
