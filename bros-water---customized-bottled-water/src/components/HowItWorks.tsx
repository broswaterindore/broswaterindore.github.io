import React from 'react';
import { SlidersHorizontal, FileUp, CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/contentData';

interface HowItWorksProps {
  onStartOrder: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartOrder }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-cyan-600' };
    switch (iconName) {
      case 'SlidersHorizontal':
        return <SlidersHorizontal {...props} />;
      case 'FileUp':
        return <FileUp {...props} />;
      case 'CheckCircle2':
        return <CheckCircle2 {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      default:
        return <SlidersHorizontal {...props} />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold uppercase tracking-wider">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-white">
            How It Works
          </h2>
          <p className="text-base text-slate-300">
            From your concept to doorstep delivery in Indore & MP in 4 seamless steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
              key={item.step}
              id={`how-step-${item.step}`}
              className="bg-slate-800/80 hover:bg-slate-800 rounded-3xl p-6 border border-slate-700/80 hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step indicator and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-['Outfit',sans-serif] text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                </div>

                <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-cyan-400 font-semibold">
                <span>Phase {index + 1}</span>
                <span className="text-slate-400">Guaranteed Quality</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 bg-gradient-to-r from-cyan-950 via-slate-800 to-cyan-950 rounded-3xl p-6 sm:p-8 border border-cyan-800/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-bold font-['Outfit',sans-serif] text-white">
              Ready to create your custom bottles?
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Free digital label design proofs sent within 30 minutes on WhatsApp!
            </p>
          </div>

          <button
            onClick={onStartOrder}
            id="how-it-works-order-cta"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 flex items-center gap-2 shrink-0"
          >
            <span>Book Your Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
