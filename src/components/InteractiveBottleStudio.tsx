import React, { useState } from 'react';
import { Sparkles, Check, Upload, Sliders, MessageCircle, ArrowRight, RefreshCw, Layers, ShieldCheck, Droplets } from 'lucide-react';
import { BOTTLE_SIZES, CAP_COLORS, LABEL_FINISHES, BUSINESS_INFO } from '../data/contentData';

interface InteractiveBottleStudioProps {
  onSelectConfiguration: (config: {
    bottleSize: string;
    capColor: string;
    labelFinish: string;
    quantity: number;
    eventName: string;
    eventSubtitle: string;
    logoPreviewUrl?: string | null;
  }) => void;
}

const THEME_PRESETS = [
  {
    id: 'wedding-gold',
    name: 'Royal Wedding (Gold & Navy)',
    bgGradient: 'from-slate-950 via-slate-900 to-slate-950',
    textColor: 'text-amber-300',
    accentBorder: 'border-amber-400',
    subTextColor: 'text-amber-100',
    defaultTitle: 'AARAV & PRIYA',
    defaultSubtitle: '24th Nov 2026 • Sayaji Hotel, Indore',
    category: 'Wedding',
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Summit (Tech Blue)',
    bgGradient: 'from-blue-950 via-slate-900 to-blue-950',
    textColor: 'text-cyan-300',
    accentBorder: 'border-cyan-400',
    subTextColor: 'text-slate-200',
    defaultTitle: 'MP TECH SUMMIT',
    defaultSubtitle: 'Innovate • Hydrate • Elevate',
    category: 'Corporate',
  },
  {
    id: 'hotel-minimal',
    name: 'Hotel & Cafe (Minimalist Black)',
    bgGradient: 'from-zinc-900 via-neutral-900 to-zinc-900',
    textColor: 'text-white',
    accentBorder: 'border-zinc-500',
    subTextColor: 'text-zinc-300',
    defaultTitle: 'THE URBAN BISTRO',
    defaultSubtitle: 'Artisanal Natural Drinking Water',
    category: 'Hospitality',
  },
  {
    id: 'birthday-pink',
    name: 'Birthday Party (Carnival Fun)',
    bgGradient: 'from-rose-900 via-purple-900 to-indigo-950',
    textColor: 'text-pink-300',
    accentBorder: 'border-pink-400',
    subTextColor: 'text-rose-100',
    defaultTitle: 'REYANSH TURNS 1',
    defaultSubtitle: 'Thank you for celebrating with us!',
    category: 'Celebration',
  },
];

export const InteractiveBottleStudio: React.FC<InteractiveBottleStudioProps> = ({
  onSelectConfiguration,
}) => {
  const [selectedSizeId, setSelectedSizeId] = useState('250ml');
  const [selectedCapColorId, setSelectedCapColorId] = useState('regal-gold');
  const [selectedFinishId, setSelectedFinishId] = useState('gloss-waterproof');
  const [selectedThemeId, setSelectedThemeId] = useState('wedding-gold');
  const [customTitle, setCustomTitle] = useState('AARAV & PRIYA');
  const [customSubtitle, setCustomSubtitle] = useState('24th Nov 2026 • Sayaji Hotel, Indore');
  const [quantity, setQuantity] = useState(500);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const currentSize = BOTTLE_SIZES.find((s) => s.id === selectedSizeId) || BOTTLE_SIZES[1];
  const currentCap = CAP_COLORS.find((c) => c.id === selectedCapColorId) || CAP_COLORS[2];
  const currentFinish = LABEL_FINISHES.find((f) => f.id === selectedFinishId) || LABEL_FINISHES[0];
  const currentTheme = THEME_PRESETS.find((t) => t.id === selectedThemeId) || THEME_PRESETS[0];

  // Dynamic pricing algorithm based on volume tiers
  const getUnitPrice = (qty: number, basePrice: number) => {
    if (qty >= 5000) return (basePrice * 0.75).toFixed(2);
    if (qty >= 2500) return (basePrice * 0.82).toFixed(2);
    if (qty >= 1000) return (basePrice * 0.88).toFixed(2);
    if (qty >= 500) return (basePrice * 0.92).toFixed(2);
    if (qty >= 250) return (basePrice * 0.96).toFixed(2);
    return basePrice.toFixed(2);
  };

  const unitPrice = parseFloat(getUnitPrice(quantity, currentSize.basePrice));
  const estimatedTotal = Math.round(unitPrice * quantity);
  const standardTotal = Math.round(currentSize.basePrice * quantity);
  const totalSavings = standardTotal - estimatedTotal;

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoPreview(url);
    }
  };

  const handleApplyPreset = (preset: typeof THEME_PRESETS[0]) => {
    setSelectedThemeId(preset.id);
    setCustomTitle(preset.defaultTitle);
    setCustomSubtitle(preset.defaultSubtitle);
  };

  const handleApplyToBooking = () => {
    onSelectConfiguration({
      bottleSize: currentSize.volume,
      capColor: currentCap.name,
      labelFinish: currentFinish.name,
      quantity,
      eventName: customTitle,
      eventSubtitle: customSubtitle,
      logoPreviewUrl: logoPreview,
    });
  };

  const generateWhatsAppInquiry = () => {
    const text = `Hi BROS WATER (Dewas Naka, Indore), I designed my custom water bottle on your website:\n\n*Bottle Size:* ${currentSize.name} (${currentSize.volume})\n*Cap Color:* ${currentCap.name}\n*Label Finish:* ${currentFinish.name}\n*Event/Brand Name:* ${customTitle}\n*Tagline/Date:* ${customSubtitle}\n*Quantity:* ${quantity} bottles\n*Est. Unit Rate:* ₹${unitPrice}/bottle\n*Est. Total:* ₹${estimatedTotal}\n\nPlease share the official quotation and 3D digital proof!`;
    const encoded = encodeURI(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  // Adjust visual height of the bottle preview based on size
  const getBottleHeightClass = () => {
    switch (selectedSizeId) {
      case '200ml':
        return 'h-36 w-28';
      case '250ml':
        return 'h-44 w-32';
      case '300ml':
        return 'h-48 w-32';
      case '500ml':
        return 'h-56 w-36';
      case '1000ml':
        return 'h-64 w-40';
      default:
        return 'h-44 w-32';
    }
  };

  return (
    <section id="customizer" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Interactive 3D Bottle Designer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Customized Bottles Studio
          </h2>
          <p className="text-base text-slate-600">
            Customize your bottle size, cap color, label artwork, and calculate instant bulk pricing in real time.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Live Bottle Preview (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 text-center relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-cyan-300">
                  {currentSize.volume}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {currentFinish.name.split(' ')[0]} Finish
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setLogoPreview(null)}
                  className="text-xs text-slate-400 hover:text-slate-600 p-1 flex items-center gap-1"
                  title="Reset Preview"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

              {/* BOTTLE CONTAINER VISUAL */}
              <div className="py-6 my-2 flex flex-col items-center justify-center min-h-[380px] bg-radial from-cyan-50/60 to-slate-50/80 rounded-2xl border border-slate-100 relative">
                {/* Bottle Cap */}
                <div
                  className="w-14 h-8 rounded-t-md shadow-md flex items-center justify-center border-t border-white/40 transition-all duration-300 relative z-10"
                  style={{ backgroundColor: currentCap.hex }}
                >
                  <div className="w-full h-1 bg-black/20" />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20" />
                </div>

                {/* Bottle Neck */}
                <div className="w-10 h-6 bg-gradient-to-r from-cyan-100/70 via-white to-cyan-100/70 border-x border-cyan-300/40" />

                {/* Bottle Shoulders */}
                <div
                  className={`bg-gradient-to-b from-cyan-100/90 via-white to-cyan-50/80 rounded-t-[28px] border-t border-x border-cyan-300/40 transition-all duration-300 ${
                    selectedSizeId === '1000ml' ? 'w-36 h-10' : 'w-28 h-8'
                  }`}
                />

                {/* Bottle Body & Live Custom Label */}
                <div
                  className={`bg-gradient-to-r from-cyan-100/70 via-white/95 to-cyan-100/70 border-x border-cyan-300/40 relative flex items-center justify-center shadow-inner overflow-hidden transition-all duration-300 ${getBottleHeightClass()}`}
                >
                  {/* Subtle water shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/10 to-cyan-400/20 pointer-events-none" />

                  {/* CUSTOM LABEL OVERLAY */}
                  <div
                    className={`w-full py-3 px-2 bg-gradient-to-r ${currentTheme.bgGradient} text-white shadow-xl border-y-2 ${currentTheme.accentBorder} text-center relative transition-all duration-300`}
                  >
                    {/* Optional Logo Preview */}
                    {logoPreview && (
                      <div className="mb-1 flex justify-center">
                        <img
                          src={logoPreview}
                          alt="Custom Logo"
                          className="h-8 max-w-[80px] object-contain rounded bg-white/20 p-0.5"
                        />
                      </div>
                    )}

                    <div className="text-[8px] uppercase tracking-widest text-cyan-300 font-bold">
                      {currentTheme.category} • BROS WATER
                    </div>

                    <div
                      className={`font-['Outfit',sans-serif] font-extrabold text-xs sm:text-sm tracking-wide px-1 line-clamp-2 uppercase ${currentTheme.textColor}`}
                    >
                      {customTitle || 'YOUR BRAND HERE'}
                    </div>

                    <div className={`text-[8px] sm:text-[9px] mt-0.5 line-clamp-1 ${currentTheme.subTextColor}`}>
                      {customSubtitle || 'Indore • Premium Water'}
                    </div>

                    <div className="mt-1 flex items-center justify-between text-[7px] text-slate-300/80 px-1 border-t border-white/10 pt-0.5">
                      <span>{currentSize.volume}</span>
                      <span>FSSAI Packaged</span>
                    </div>
                  </div>
                </div>

                {/* Bottle Bottom Base */}
                <div
                  className={`bg-gradient-to-b from-cyan-100/80 to-cyan-200/80 rounded-b-xl border-b border-x border-cyan-300/60 shadow-md transition-all duration-300 ${
                    selectedSizeId === '1000ml' ? 'w-40 h-8' : 'w-32 h-6'
                  }`}
                />
              </div>

              {/* Price Calculation Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 text-left mt-4 shadow-inner space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">Estimated Unit Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-cyan-400 font-['Outfit',sans-serif]">
                        ₹{unitPrice}
                      </span>
                      <span className="text-xs text-slate-400">/ bottle</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">
                      Total ({quantity} Bottles)
                    </span>
                    <div className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {totalSavings > 0 && (
                  <div className="py-1 px-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-[11px] text-emerald-300 flex items-center justify-between font-medium">
                    <span>Bulk Tier Savings Applied:</span>
                    <span className="font-bold">Save ₹{totalSavings.toLocaleString('en-IN')}!</span>
                  </div>
                )}

                {/* Buttons for Action */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleApplyToBooking}
                    id="studio-apply-booking-btn"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Use in Booking Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={generateWhatsAppInquiry}
                    id="studio-whatsapp-quote-btn"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Bottle Size */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-black flex items-center justify-center">
                    1
                  </span>
                  Select Bottle Size
                </h3>
                <span className="text-xs text-slate-500">Selected: {currentSize.name}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BOTTLE_SIZES.map((size) => {
                  const isSelected = size.id === selectedSizeId;
                  return (
                    <button
                      key={size.id}
                      id={`bottle-size-btn-${size.id}`}
                      onClick={() => setSelectedSizeId(size.id)}
                      className={`p-3 rounded-xl text-left border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-cyan-600 bg-cyan-50/60 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-slate-900">{size.volume}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-cyan-600" />}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{size.popularFor}</p>
                      </div>
                      <div className="text-[11px] font-bold text-cyan-700 mt-2">
                        ₹{size.basePrice.toFixed(2)}/pc
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Cap Color Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-black flex items-center justify-center">
                    2
                  </span>
                  Choose Cap Color
                </h3>
                <span className="text-xs font-semibold text-slate-700">{currentCap.name}</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {CAP_COLORS.map((cap) => {
                  const isSelected = cap.id === selectedCapColorId;
                  return (
                    <button
                      key={cap.id}
                      id={`cap-color-btn-${cap.id}`}
                      onClick={() => setSelectedCapColorId(cap.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50/70'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: cap.hex }}
                      />
                      <span>{cap.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Event Theme & Label Artwork */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-black flex items-center justify-center">
                    3
                  </span>
                  Label Design & Text Customization
                </h3>
              </div>

              {/* Theme Presets */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Quick Design Theme Presets
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {THEME_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      id={`theme-preset-btn-${preset.id}`}
                      onClick={() => handleApplyPreset(preset)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        selectedThemeId === preset.id
                          ? 'border-cyan-600 bg-cyan-50 font-bold text-cyan-900'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="block font-bold">{preset.category}</span>
                      <span className="text-[10px] text-slate-500 line-clamp-1">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Event / Business Name
                  </label>
                  <input
                    type="text"
                    id="studio-input-title"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="e.g. AARAV & PRIYA / APEX TECH"
                    maxLength={35}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tagline, Date or Venue
                  </label>
                  <input
                    type="text"
                    id="studio-input-subtitle"
                    value={customSubtitle}
                    onChange={(e) => setCustomSubtitle(e.target.value)}
                    placeholder="e.g. 24.11.2026 • Indore"
                    maxLength={45}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 text-slate-800"
                  />
                </div>
              </div>

              {/* Logo Upload Option */}
              <div className="pt-1">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Upload Logo / Graphic (Optional Instant Preview)
                </label>
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="studio-logo-file"
                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-300 transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5 text-cyan-700" />
                    <span>Choose Image</span>
                  </label>
                  <input
                    id="studio-logo-file"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  {logoPreview ? (
                    <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Logo Loaded on Bottle!
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">PNG, JPG, SVG supported</span>
                  )}
                </div>
              </div>
            </div>

            {/* Step 4: Label Finish & Quantity Slider */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-black flex items-center justify-center">
                    4
                  </span>
                  Label Finish & Quantity
                </h3>
              </div>

              {/* Finish Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {LABEL_FINISHES.map((finish) => (
                  <button
                    key={finish.id}
                    id={`finish-btn-${finish.id}`}
                    onClick={() => setSelectedFinishId(finish.id)}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                      selectedFinishId === finish.id
                        ? 'border-cyan-600 bg-cyan-50 font-bold text-cyan-900'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{finish.name}</span>
                  </button>
                ))}
              </div>

              {/* Quantity Slider */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Quantity Required
                  </label>
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-cyan-300 font-extrabold text-sm">
                    {quantity.toLocaleString('en-IN')} Bottles
                  </span>
                </div>

                <input
                  type="range"
                  id="studio-quantity-range"
                  min="100"
                  max="5000"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-medium px-1">
                  <span>100 (Min)</span>
                  <span>500 (Popular)</span>
                  <span>1,000</span>
                  <span>2,500</span>
                  <span>5,000+ (Factory)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
