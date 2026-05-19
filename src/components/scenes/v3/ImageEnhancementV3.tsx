import { ImagePlus, Sun, Contrast, Droplets } from 'lucide-react';

const CARDS = [
  {
    title: 'Interior Enhancement',
    description: 'Balance exposure, restore window views, and enhance color vibrancy in poorly lit rooms.',
    icon: ImagePlus,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1500&auto=format&fit=crop',
    color: 'text-cyan-400'
  },
  {
    title: 'Exterior Enhancement',
    description: 'Sharpen facades, fix perspective distortions, and enrich landscaping colors.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1500&auto=format&fit=crop',
    color: 'text-cyan-400'
  },
  {
    title: 'Sky Replacement',
    description: 'Swap overcast skies with vibrant blue skies, rich sunsets, or dramatic clouds.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1500&auto=format&fit=crop',
    color: 'text-cyan-400'
  },
  {
    title: 'Premium Lighting',
    description: 'Intelligent HDR balancing to highlight architectural details and premium materials.',
    icon: Contrast,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1500&auto=format&fit=crop',
    color: 'text-cyan-400'
  }
];

export function ImageEnhancementV3() {
  return (
    <section className="py-32 bg-zinc-950 min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
          <div className="lg:w-1/2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">
              AI Enhancement
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Professional real estate<br/>photography in one click.
            </h2>
            <p className="text-base md:text-lg text-zinc-300 max-w-lg leading-loose">
              Transform ordinary property photos into listing-ready visuals. Instantly improve lighting, sky, colors, and sharpness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="group relative rounded-3xl overflow-hidden glass-panel border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                </div>
                <div className="p-6 relative z-20 flex-1 flex flex-col bg-zinc-950/80">
                  <Icon className={`w-8 h-8 mb-4 ${card.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <h3 className="text-lg text-white font-medium mb-2">{card.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-sm flex-1">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
