import { Check, Zap } from 'lucide-react';
import { cn } from '../../../lib/utils';

const TIERS = [
  {
    name: "Starter",
    price: "$29",
    billing: "per listing",
    description: "Perfect for single properties requiring basic virtual staging.",
    features: [
      "Up to 5 photos",
      "Standard 24h turnaround",
      "3 design styles included",
      "Basic lighting optimization",
      "Object removal (up to 3 items)"
    ],
    buttonText: "Start Staging",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99",
    billing: "per month",
    description: "Built for active agents aiming for premium listing presentations.",
    tag: "MOST POPULAR",
    features: [
      "Unlimited photos",
      "Priority 2h turnaround",
      "All 12+ premium design styles",
      "Advanced lighting & day-to-dusk",
      "Unlimited object removal",
      "AI architecture overlays"
    ],
    buttonText: "Subscribe Pro",
    highlighted: true,
  },
  {
    name: "Brokerage",
    price: "Custom",
    billing: "enterprise billing",
    description: "Scale your entire agency's visual standards effortlessly.",
    features: [
      "Custom volume pricing",
      "Instant API generation",
      "Dedicated account manager",
      "Custom corporate styles",
      "White-labeled platform",
      "SSO & strict security"
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  }
];

export function PricingV3() {
  return (
    <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(21,93,252,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-20">
          <div className="lg:w-1/2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">Simple Pricing</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Scale your visual presence.<br/><span className="text-white/50">Without scaling costs.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TIERS.map((tier, idx) => (
            <div 
              key={tier.name}
              className={cn(
                "relative p-8 lg:p-10 rounded-[2rem] border transition-all duration-300",
                tier.highlighted 
                  ? "bg-white/5 border-white/20 shadow-2xl" 
                  : "bg-black/40 border-white/10 hover:border-white/20 glass-panel"
              )}>
              {tier.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-white border border-white/20 rounded-full z-20 shadow-lg">
                   <Zap className="w-3 h-3 text-black" />
                   <span className="text-[9px] font-semibold tracking-wider text-black uppercase">{tier.tag}</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed h-10">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-end gap-2">
                <span className="text-5xl font-medium tracking-tight text-white">{tier.price}</span>
                <span className="text-sm text-zinc-500 mb-1">{tier.billing}</span>
              </div>

              <button 
                className={cn(
                  "w-full py-4 rounded-full font-semibold text-sm transition-all duration-300 mb-8 cursor-pointer shadow-lg",
                  tier.highlighted 
                    ? "bg-white text-black hover:bg-zinc-200" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                )}
              >
                {tier.buttonText}
              </button>

              <div className="space-y-4">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className={cn("w-4 h-4 shrink-0 mt-0.5", tier.highlighted ? "text-white" : "text-zinc-500")} />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
