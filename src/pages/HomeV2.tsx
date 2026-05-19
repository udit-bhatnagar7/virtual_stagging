import { Atmosphere } from '../components/canvas/Atmosphere';
import { SmoothScroll } from '../components/layout/SmoothScroll';
import { Header } from '../components/layout/Header';
import { HeroSequence } from '../components/scenes/HeroSequence';
import { CinematicFeature } from '../components/scenes/CinematicFeature';
import { StyleToggleScene } from '../components/scenes/StyleToggleScene';
import { SpatialCommandCenter } from '../components/scenes/SpatialCommandCenter';
import { MarketingOutput } from '../components/scenes/MarketingOutput';

export default function HomeV2() {
  return (
    <SmoothScroll>
      <main className="bg-black text-zinc-200 min-h-screen relative selection:bg-white/10 selection:text-white">
        <Atmosphere />
        <Header />
        
        <HeroSequence version={2} />

        <CinematicFeature 
          kicker="Virtual Staging"
          title="Physical Presence."
          description="We do not paste furniture onto an image. We simulate the physics of light, casting accurate shadows and mapping precise reflections onto marble, wood, and glass."
          imageUrl="https://images.unsplash.com/photo-1600607687931-cebf5871c0eb?q=80&w=2500&auto=format&fit=crop"
          align="left"
          gradientMode="clean"
        />

        <CinematicFeature 
          kicker="Day to Dusk"
          title="Cinematic Lighting."
          description="Transform the atmosphere of a property instantly. Our volumetric lighting system simulates sunset hour, activating interior lighting and casting deep, emotional warmth into every corner."
          imageUrl="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2500&auto=format&fit=crop"
          secondaryImageUrl="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2500&auto=format&fit=crop"
          align="right"
          gradientMode="dusk"
        />

        <CinematicFeature 
          kicker="Declutter / Enhance"
          title="Architectural Purity."
          description="Reveal the raw structural beauty. The AI identifies and spatially dissolves objects, rebuilding the obscured surfaces behind them with photorealistic precision."
          imageUrl="https://images.unsplash.com/photo-1601760562234-9814eea6663a?q=80&w=2500&auto=format&fit=crop"
          align="center"
          gradientMode="haze"
        />

        <SpatialCommandCenter />

        <StyleToggleScene />

        <MarketingOutput version={2} />

        <footer className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tighter text-white mb-10 leading-[1.05]">
              Step Into <br/> The Future.
            </h2>
            <button className="px-10 py-5 glass-panel rounded-full text-white hover:bg-white/10 transition-colors uppercase tracking-[0.25em] font-mono text-xs font-medium border-white/20 hover:scale-105 active:scale-95 cursor-pointer">
              Experience RIA
            </button>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
