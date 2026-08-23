import React from 'react';
import { BUSINESS_INFO } from '../data/contentData';
import { Droplets, CheckCircle2, Factory, Heart, Award, MapPin, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              About BROS WATER
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900 leading-tight">
              Indore’s Leading Specialists in <span className="text-cyan-600">Customized Bottled Water</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Headquartered at <strong>Dewas Naka, Indore</strong>, <strong>BROS WATER</strong> was founded with a single mission: to transform standard drinking water bottles into memorable, branded experiences for weddings, corporate summits, hotels, cafes, and festive celebrations across Madhya Pradesh.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We operate an automated bottling and high-speed precision label printing unit. Every bottle undergoes a stringent 7-stage purification process ensuring crisp taste, balanced mineral content, and total food safety compliance. Combined with our 100% waterproof synthetic labels, your brand looks immaculate whether sitting at a royal wedding banquet or chilling in an ice bucket.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Modern Bottling Facility</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Automated filling & sealing at Dewas Naka</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Multi-Stage Purification</h4>
                  <p className="text-xs text-slate-500 mt-0.5">RO, UV, Ozone & Mineral balancing</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">High Definition Printing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Waterproof, ice-proof gloss/matte labels</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Indore & MP Logistics</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Fast delivery direct to your event venue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Business Highlight Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-8 text-white shadow-2xl border border-slate-700/80 relative">
              <div className="absolute top-4 right-4">
                <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                    BW
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-['Outfit',sans-serif]">BROS WATER</h3>
                    <p className="text-xs text-cyan-400 font-medium">Customized Bottled Water Plant</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Plant Location:</span>
                    <span className="font-semibold text-white">Dewas Naka, Indore (M.P.)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Working Hours:</span>
                    <span className="font-semibold text-emerald-400">9:00 AM – 8:00 PM Daily</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Daily Capacity:</span>
                    <span className="font-semibold text-cyan-300">15,000+ Custom Bottles</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Direct Contact:</span>
                    <span className="font-semibold text-white">{BUSINESS_INFO.phone}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px]">
                    Why Event Planners Trust Us in Indore:
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Zero peeling labels during chilling & ice-bath setups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Free customized 3D mockup proofs before bulk printing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Flexible advance booking with safe digital receipts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
