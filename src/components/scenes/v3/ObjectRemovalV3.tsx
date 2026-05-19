import { Eraser, Trash2, BoxSelect } from 'lucide-react';

const IMAGE_BEFORE = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2500&auto=format&fit=crop';
const IMAGE_AFTER = 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2500&auto=format&fit=crop'; // representing a clean room, maybe empty

export function ObjectRemovalV3() {
  return (
    <section className="py-32 bg-zinc-950 min-h-screen relative flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
          <div className="lg:w-1/2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">
              Object Removal
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              Remove distractions.<br/>Highlight the space.
            </h2>
            <p className="text-base md:text-lg text-zinc-300 leading-loose">
              Present clean, distraction-free spaces that help buyers focus on the property. Remove furniture, clutter, or unwanted elements instantly.
            </p>
          </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col items-start bg-zinc-900/50">
             <Trash2 className="w-6 h-6 text-zinc-400 mb-4" />
             <h4 className="text-white text-lg font-medium mb-2">Furniture Removal</h4>
             <p className="text-sm text-zinc-400 leading-relaxed">Clear out existing tenant furniture to create a blank canvas.</p>
           </div>
           <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col items-start bg-zinc-900/50">
             <Eraser className="w-6 h-6 text-zinc-400 mb-4" />
             <h4 className="text-white text-lg font-medium mb-2">Clutter Cleanup</h4>
             <p className="text-sm text-zinc-400 leading-relaxed">Erase messy counters, wires, and distractions seamlessly.</p>
           </div>
           <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col items-start bg-zinc-900/50">
             <BoxSelect className="w-6 h-6 text-zinc-400 mb-4" />
             <h4 className="text-white text-lg font-medium mb-2">Empty Room Generation</h4>
             <p className="text-sm text-zinc-400 leading-relaxed">Prepare spaces for virtual renovation or showcasing raw structural beauty.</p>
           </div>
        </div>

        {/* Feature visualization */}
        {/* We use a static fade-over hover effect to represent the removal */}
        <div className="relative aspect-[16/7] md:aspect-[21/9] rounded-3xl overflow-hidden glass-panel border border-white/10 mx-auto group cursor-crosshair">
           <img src={IMAGE_BEFORE} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0" alt="Cluttered Room" />
           {/* In a real app we'd show the explicitly cleaned room. Reusing an airy room image for demo */}
           <img src={IMAGE_AFTER} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 grayscale hover:grayscale-0" alt="Clean Space" />
           <div className="absolute inset-0 bg-black/20 pointer-events-none" />
           
           <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
             <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-md bg-black/40 border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase">
               <Eraser className="w-4 h-4 text-zinc-400" />
               Hover to Clean Space
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
