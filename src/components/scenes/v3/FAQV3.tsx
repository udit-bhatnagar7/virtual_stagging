import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';

const FAQS = [
  {
    question: "How does AI virtual staging work?",
    answer: "Our engine analyzes room geometry, depth, and natural lighting, then mathematically projects realistic furniture, materials, and shadows into the space. This ensures structurally accurate staging that feels physically believable."
  },
  {
    question: "Does the AI keep the original room structure?",
    answer: "Yes. The AI preserves the architectural integrity of your room—walls, windows, perspective, and lighting direction remain identical. Only the furnishings and interior styling are transformed."
  },
  {
    question: "How long does staging take?",
    answer: "Most transformations are generated and finalized within seconds, allowing for real-time iterative design adjustments."
  },
  {
    question: "Can I choose different interior styles?",
    answer: "We support a wide array of curated design DNA, including Modern Minimal, Scandinavian Harmony, Industrial Loft, Luxury Contemporary, and Coastal."
  },
  {
    question: "Is this suitable for real estate listings?",
    answer: "Absolutely. Our platform is trained to generate emotional connection and high-end aesthetics, significantly improving listing engagement, click-through rates, and perceived property value."
  },
  {
    question: "Can I remove furniture or clutter?",
    answer: "Yes, our spatial detection algorithms can cleanly erase existing furniture, clutter, or tenant items, restructuring the background to generate an empty canvas for staging."
  },
  {
    question: "Does it work for exterior properties too?",
    answer: "Our exterior intelligence handles sky replacements, day-to-dusk conversions, landscape enhancements, and architectural lighting activation."
  }
];

export function FAQV3() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black relative flex items-center justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-end mb-16">
          <div className="lg:w-full">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-6 block">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Frequently Asked.
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={cn(
                  "glass-panel rounded-2xl overflow-hidden transition-colors duration-500 cursor-pointer border border-white/5 hover:border-white/20",
                  isOpen ? "bg-white/5" : "bg-transparent"
                )}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="px-6 md:px-8 py-6 flex justify-between items-center bg-transparent">
                  <h3 className="text-base md:text-lg font-medium text-white tracking-tight">{faq.question}</h3>
                  <div className={cn("transition-transform duration-500 ml-4 shrink-0", isOpen ? "rotate-180" : "rotate-0")}>
                    <ChevronDown className="w-5 h-5 text-zinc-500" />
                  </div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-zinc-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
