import { SmoothScroll } from '../components/layout/SmoothScroll';
import { Header } from '../components/layout/Header';
import { HeroV3 } from '../components/scenes/v3/HeroV3';
import { VirtualStagingV3 } from '../components/scenes/v3/VirtualStagingV3';
import { ImageEnhancementV3 } from '../components/scenes/v3/ImageEnhancementV3';
import { DayToDuskV3 } from '../components/scenes/v3/DayToDuskV3';
import { ObjectRemovalV3 } from '../components/scenes/v3/ObjectRemovalV3';
import { AIDesignStudioV3 } from '../components/scenes/v3/AIDesignStudioV3';
import { AgentProcessingV3 } from '../components/scenes/v3/AgentProcessingV3';
import { FAQV3 } from '../components/scenes/v3/FAQV3';
import { MetricsV3 } from '../components/scenes/v3/MetricsV3';
import { InteractiveSliderV3 } from '../components/scenes/v3/InteractiveSliderV3';
import { PricingV3 } from '../components/scenes/v3/PricingV3';

export default function HomeV3() {
  return (
    <SmoothScroll>
      <main className="bg-black text-zinc-200 min-h-screen relative selection:bg-white/10 selection:text-white font-sans">
        <div className="hidden"><Header /></div>
        
        <HeroV3 />
        <InteractiveSliderV3 />
        <MetricsV3 />
        <VirtualStagingV3 />
        <ImageEnhancementV3 />
        <DayToDuskV3 />
        <ObjectRemovalV3 />
        <AIDesignStudioV3 />
        <AgentProcessingV3 />
        <PricingV3 />
        <FAQV3 />

        <footer className="relative py-32 flex items-center justify-center bg-black overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.03)_0%,transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
              Ready to transform your listings?
            </h2>
            <button className="px-10 py-5 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors font-semibold text-sm hover:scale-105 active:scale-95 cursor-pointer shadow-xl">
              Get Started for Free
            </button>
            <p className="mt-6 text-zinc-400 text-[11px] font-semibold uppercase tracking-wider">No credit card required.</p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
