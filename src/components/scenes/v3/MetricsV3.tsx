import { motion } from 'motion/react';
import { TrendingUp, Clock, DollarSign, Eye } from 'lucide-react';
import { cn } from '../../../lib/utils';

const METRICS = [
  {
    id: 1,
    value: "73%",
    label: "Faster Closing Time",
    description: "Homes staged with AI spend significantly less time on the market.",
    icon: Clock,
  },
  {
    id: 2,
    value: "8.5%",
    label: "Higher Sale Price",
    description: "Virtual staging increases perceived value and final offers.",
    icon: TrendingUp,
  },
  {
    id: 3,
    value: "10x",
    label: "Return on Investment",
    description: "Fraction of the cost of physical staging with higher flexibility.",
    icon: DollarSign,
  },
  {
    id: 4,
    value: "300%",
    label: "More Online Views",
    description: "Eye-catching staged photos dramatically increase click-through rates.",
    icon: Eye,
  }
];

export function MetricsV3() {
  return (
    <section className="py-32 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-20">
          <div className="lg:w-1/2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">The ROI of AI Staging</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Design that drives <span className="text-white/50">performance.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              className="glass-panel p-8 rounded-3xl border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <metric.icon className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="text-5xl font-medium text-white tracking-tighter mb-4">{metric.value}</div>
              <div className="text-sm font-medium tracking-wide text-zinc-300 mb-2">{metric.label}</div>
              <div className="text-sm text-zinc-400 leading-relaxed">{metric.description}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
