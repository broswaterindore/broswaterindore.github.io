import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Send,
  MessageCircle,
  Upload,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  FileText,
  CreditCard,
  Droplet,
  X,
  Phone,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  BOTTLE_SIZES,
  CAP_COLORS,
  INDORE_DELIVERY_HUBS,
  LABEL_FINISHES,
} from '../data/contentData';
import { BookingFormData, QuoteSummary } from '../types';

interface BookingFormSectionProps {
  initialConfig?: {
    bottleSize?: string;
    capColor?: string;
    labelFinish?: string;
    quantity?: number;
    eventName?: string;
    eventSubtitle?: string;
    logoPreviewUrl?: string | null;
  } | null;
  onQuoteGenerated: (quote: QuoteSummary) => void;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialConfig,
  onQuoteGenerated,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    eventOrBusinessName: '',
    bottleQuantity: 500,
    bottleSize: '250 ml Classic Sleek',
    capColor: 'Aqua Blue (Standard)',
    labelFinish: 'Gloss HD Waterproof Vinyl',
    requiredDeliveryDate: '',
    deliveryLocation: 'Dewas Naka',
    customLabelRequired: 'yes',
    logoFile: null,
    logoPreviewUrl: null,
    additionalRequirements: '',
    paymentOption: 'advance_30',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync with initialConfig if transferred from Studio or Gallery
  useEffect(() => {
    if (initialConfig) {
      setFormData((prev) => ({
        ...prev,
        bottleSize: initialConfig.bottleSize || prev.bottleSize,
        capColor: initialConfig.capColor || prev.capColor,
        labelFinish: initialConfig.labelFinish || prev.labelFinish,
        bottleQuantity: initialConfig.quantity || prev.bottleQuantity,
        eventOrBusinessName: initialConfig.eventName || prev.eventOrBusinessName,
        logoPreviewUrl: initialConfig.logoPreviewUrl || prev.logoPreviewUrl,
      }));
    }
  }, [initialConfig]);

  // Calculate pricing estimates
  const getSelectedSizeBasePrice = () => {
    const size = BOTTLE_SIZES.find((s) => formData.bottleSize.includes(s.volume) || s.name === formData.bottleSize);
    return size ? size.basePrice : 4.0;
  };

  const calculateUnitRate = () => {
    const base = getSelectedSizeBasePrice();
    const qty = formData.bottleQuantity;
    if (qty >= 5000) return (base * 0.75).toFixed(2);
    if (qty >= 2500) return (base * 0.82).toFixed(2);
    if (qty >= 1000) return (base * 0.88).toFixed(2);
    if (qty >= 500) return (base * 0.92).toFixed(2);
    if (qty >= 250) return (base * 0.96).toFixed(2);
    return base.toFixed(2);
  };

  const unitRate = parseFloat(calculateUnitRate());
  const estimatedTotal = Math.round(unitRate * formData.bottleQuantity);
  const advanceAmount = Math.round(estimatedTotal * 0.3);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        logoFile: file,
        logoPreviewUrl: previewUrl,
      }));
    }
  };

  const removeLogoFile = () => {
    setFormData((prev) => ({
      ...prev,
      logoFile: null,
      logoPreviewUrl: null,
    }));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Please enter your mobile number';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      errors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!formData.eventOrBusinessName.trim()) {
      errors.eventOrBusinessName = 'Please enter your event or company name';
    }
    if (!formData.deliveryLocation.trim()) {
      errors.deliveryLocation = 'Please specify your delivery location';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const quoteId = `BW-${Date.now().toString().slice(-6)}`;
    const quoteSummary: QuoteSummary = {
      quoteId,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      customerName: formData.fullName,
      phone: formData.mobileNumber,
      email: formData.email || 'Not provided',
      eventOrBusinessName: formData.eventOrBusinessName,
      bottleSize: formData.bottleSize,
      quantity: Number(formData.bottleQuantity),
      capColor: formData.capColor,
      unitPrice: unitRate,
      estimatedTotal,
      advanceAmount,
      deliveryLocation: formData.deliveryLocation,
      deliveryDate: formData.requiredDeliveryDate || 'Flexible / To be confirmed',
      customLabel: formData.customLabelRequired === 'yes',
      notes: formData.additionalRequirements || 'Standard packaging specifications',
      paymentOption:
        formData.paymentOption === 'advance_30'
          ? '30% Advance Booking'
          : formData.paymentOption === 'full'
          ? '100% Full Payment'
          : 'Request Official Quote First',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onQuoteGenerated(quoteSummary);
    }, 400);
  };

  const handleDirectWhatsAppOrder = () => {
    if (!formData.fullName.trim() || !formData.mobileNumber.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        fullName: !formData.fullName.trim() ? 'Enter name for WhatsApp order' : '',
        mobileNumber: !formData.mobileNumber.trim() ? 'Enter mobile for WhatsApp order' : '',
      }));
    }

    const message = `*NEW ORDER INQUIRY — BROS WATER (Indore)*\n\n` +
      `👤 *Customer Name:* ${formData.fullName || 'Customer'}\n` +
      `📞 *Mobile:* ${formData.mobileNumber || 'Not entered'}\n` +
      `📧 *Email:* ${formData.email || 'N/A'}\n` +
      `🎉 *Event/Business:* ${formData.eventOrBusinessName || 'General Inquiry'}\n` +
      `📦 *Bottle Quantity:* ${formData.bottleQuantity} bottles\n` +
      `🧴 *Bottle Size:* ${formData.bottleSize}\n` +
      `🎨 *Cap Color:* ${formData.capColor}\n` +
      `🏷️ *Custom Label Required:* ${formData.customLabelRequired === 'yes' ? 'YES' : 'NO'}\n` +
      `📅 *Required Delivery Date:* ${formData.requiredDeliveryDate || 'Earliest available'}\n` +
      `📍 *Delivery Location:* ${formData.deliveryLocation}\n` +
      `💰 *Estimated Total:* ₹${estimatedTotal.toLocaleString('en-IN')} (₹${unitRate}/pc)\n` +
      `💳 *Payment Option:* ${formData.paymentOption}\n` +
      `📝 *Notes/Requirements:* ${formData.additionalRequirements || 'None'}\n\n` +
      `Please provide instant confirmation and send 3D label proof!`;

    const encoded = encodeURI(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="book-order" className="py-20 bg-gradient-to-b from-white to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Online Booking & Quotation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Book Your Custom Water Bottle Order
          </h2>
          <p className="text-base text-slate-600">
            Fill in your event details below to get an instant digital quotation or order directly via WhatsApp. Free design mockup proofs included!
          </p>
        </div>

        {/* Main Form Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Columns (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90">
            <form onSubmit={handleSubmitQuote} className="space-y-6">
              {/* Personal / Contact Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 text-xs flex items-center justify-center font-black">
                    1
                  </span>
                  Customer & Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="booking-input-fullname"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        formErrors.fullName
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-rose-500 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile & WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      id="booking-input-mobile"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 7771081084"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        formErrors.mobileNumber
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                      }`}
                    />
                    {formErrors.mobileNumber && (
                      <p className="text-[11px] text-rose-500 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.mobileNumber}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="booking-input-email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. broswater001@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                    />
                  </div>

                  {/* Event / Business Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Event / Business / Couple Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="eventOrBusinessName"
                      id="booking-input-event-name"
                      value={formData.eventOrBusinessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Aarav & Priya Wedding / Indore Cafe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        formErrors.eventOrBusinessName
                          ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
                          : 'border-slate-300 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                      }`}
                    />
                    {formErrors.eventOrBusinessName && (
                      <p className="text-[11px] text-rose-500 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.eventOrBusinessName}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottle Specifications */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 text-xs flex items-center justify-center font-black">
                    2
                  </span>
                  Bottle Requirements & Quantity
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Bottle Size */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Bottle Size
                    </label>
                    <select
                      name="bottleSize"
                      id="booking-select-size"
                      value={formData.bottleSize}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-cyan-600 font-semibold"
                    >
                      {BOTTLE_SIZES.map((size) => (
                        <option key={size.id} value={size.name}>
                          {size.name} (₹{size.basePrice}/pc)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bottle Quantity */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Bottle Quantity (Min 100)
                    </label>
                    <input
                      type="number"
                      name="bottleQuantity"
                      id="booking-input-qty"
                      min={100}
                      step={50}
                      value={formData.bottleQuantity}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:border-cyan-600"
                    />
                  </div>

                  {/* Cap Color */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Cap Color
                    </label>
                    <select
                      name="capColor"
                      id="booking-select-cap"
                      value={formData.capColor}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-cyan-600"
                    >
                      {CAP_COLORS.map((cap) => (
                        <option key={cap.id} value={cap.name}>
                          {cap.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Custom Label Required Toggle */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-slate-900">
                      Custom Label Required?
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Personalized event branding, bride & groom names, or business logo.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      id="custom-label-yes-btn"
                      onClick={() => setFormData((prev) => ({ ...prev, customLabelRequired: 'yes' }))}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        formData.customLabelRequired === 'yes'
                          ? 'bg-cyan-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-300'
                      }`}
                    >
                      Yes (Custom Label)
                    </button>
                    <button
                      type="button"
                      id="custom-label-no-btn"
                      onClick={() => setFormData((prev) => ({ ...prev, customLabelRequired: 'no' }))}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        formData.customLabelRequired === 'no'
                          ? 'bg-slate-800 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-300'
                      }`}
                    >
                      No (Standard Pack)
                    </button>
                  </div>
                </div>

                {/* Logo / Design Upload */}
                {formData.customLabelRequired === 'yes' && (
                  <div className="p-4 rounded-2xl bg-cyan-50/50 border border-cyan-200/70 space-y-3">
                    <label className="block text-xs font-bold text-cyan-950">
                      Upload Logo / Design Artwork (Optional)
                    </label>
                    <p className="text-[11px] text-slate-600">
                      Upload PNG, JPG, PDF, or CDR file. If you don't have artwork, our design team will prepare it for you on WhatsApp for free!
                    </p>

                    <div className="flex items-center gap-3">
                      <label
                        htmlFor="booking-logo-file"
                        className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-cyan-300 hover:border-cyan-400 text-xs font-bold text-cyan-900 shadow-xs transition-colors"
                      >
                        <Upload className="w-4 h-4 text-cyan-600" />
                        <span>Upload Logo / Reference</span>
                      </label>
                      <input
                        id="booking-logo-file"
                        type="file"
                        accept="image/*,.pdf,.cdr"
                        onChange={handleFileUpload}
                        className="hidden"
                      />

                      {formData.logoPreviewUrl && (
                        <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-cyan-200">
                          <img
                            src={formData.logoPreviewUrl}
                            alt="Logo preview"
                            className="w-8 h-8 object-contain rounded"
                          />
                          <span className="text-xs text-emerald-600 font-semibold">File Attached</span>
                          <button
                            type="button"
                            onClick={removeLogoFile}
                            className="p-1 text-slate-400 hover:text-rose-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Delivery Details */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 text-xs flex items-center justify-center font-black">
                    3
                  </span>
                  Delivery Date & Location (Indore & MP)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Required Delivery Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Required Delivery Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="requiredDeliveryDate"
                        id="booking-input-delivery-date"
                        value={formData.requiredDeliveryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-cyan-600 text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Delivery Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Delivery Location / Venue <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="deliveryLocation"
                      id="booking-input-location"
                      value={formData.deliveryLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Sayaji Hotel, Vijay Nagar, Indore"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        formErrors.deliveryLocation
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-slate-300 focus:border-cyan-600'
                      }`}
                    />
                    {formErrors.deliveryLocation && (
                      <p className="text-[11px] text-rose-500 font-medium mt-1">
                        {formErrors.deliveryLocation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Quick Area Chips */}
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block mb-1.5">
                    Popular Delivery Hubs in Indore:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {INDORE_DELIVERY_HUBS.map((hub) => (
                      <button
                        type="button"
                        key={hub}
                        onClick={() => setFormData((prev) => ({ ...prev, deliveryLocation: hub }))}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border transition-colors ${
                          formData.deliveryLocation.includes(hub)
                            ? 'bg-cyan-100 border-cyan-300 text-cyan-900 font-bold'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                        }`}
                      >
                        {hub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Additional Requirements & Special Instructions
                  </label>
                  <textarea
                    name="additionalRequirements"
                    id="booking-textarea-requirements"
                    rows={3}
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    placeholder="e.g. Need golden foil finish labels, wedding hashtag #AaravWedsPriya, chilled delivery at 4 PM..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-cyan-600 text-slate-800"
                  />
                </div>
              </div>

              {/* Payment Option */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 text-xs flex items-center justify-center font-black">
                    4
                  </span>
                  Payment Preference (Pay Later / Advance)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      formData.paymentOption === 'advance_30'
                        ? 'border-cyan-600 bg-cyan-50/60 shadow-xs'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="advance_30"
                        checked={formData.paymentOption === 'advance_30'}
                        onChange={handleInputChange}
                        className="text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="text-xs font-bold text-slate-900">30% Advance Booking</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Pay ₹{advanceAmount.toLocaleString('en-IN')} after proof approval
                      </div>
                    </div>
                  </label>

                  <label
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      formData.paymentOption === 'quote_first'
                        ? 'border-cyan-600 bg-cyan-50/60 shadow-xs'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="quote_first"
                        checked={formData.paymentOption === 'quote_first'}
                        onChange={handleInputChange}
                        className="text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div className="mt-2">
                      <div className="text-xs font-bold text-slate-900">Request Official Quote</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Receive invoice & discuss specs first
                      </div>
                    </div>
                  </label>

                  <label
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      formData.paymentOption === 'full'
                        ? 'border-cyan-600 bg-cyan-50/60 shadow-xs'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="full"
                        checked={formData.paymentOption === 'full'}
                        onChange={handleInputChange}
                        className="text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div className="mt-2">
                      <div className="text-xs font-bold text-slate-900">100% Full Payment</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Priority automated express line
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Action Buttons: Request a Quote & Direct WhatsApp Order */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                {/* 1. Request a Quote Submit Button */}
                <button
                  type="submit"
                  id="booking-submit-quote-btn"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-4 px-6 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl shadow-cyan-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5 text-cyan-200" />
                  <span>{isSubmitting ? 'Generating Quotation...' : 'Request a Quote'}</span>
                </button>

                {/* 2. Direct WhatsApp Order Option */}
                <button
                  type="button"
                  id="booking-direct-whatsapp-btn"
                  onClick={handleDirectWhatsAppOrder}
                  className="w-full sm:w-auto py-4 px-6 rounded-2xl text-base font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 hover:bg-emerald-200 transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Summary Sidebar (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            {/* Live Order Quotation Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">
                  Instant Quotation Estimate
                </span>
                <span className="text-[11px] text-slate-400">BROS WATER</span>
              </div>

              {/* Itemized summary */}
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Size:</span>
                  <span className="font-semibold text-white">{formData.bottleSize.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Quantity:</span>
                  <span className="font-semibold text-white">{formData.bottleQuantity} units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cap Color:</span>
                  <span className="font-semibold text-white">{formData.capColor.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Custom Labels:</span>
                  <span className="font-semibold text-cyan-400">
                    {formData.customLabelRequired === 'yes' ? 'HD Waterproof (Included)' : 'Standard'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white truncate max-w-[150px]">
                    {formData.deliveryLocation || 'Indore'}
                  </span>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Unit Rate</span>
                  <span className="text-white font-bold">₹{unitRate} / bottle</span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-sm font-bold text-white">Estimated Total</span>
                  <div className="text-2xl font-black text-cyan-400 font-['Outfit',sans-serif]">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="flex justify-between text-xs text-slate-400 pt-1">
                  <span>Advance (30%)</span>
                  <span className="text-emerald-400 font-bold">₹{advanceAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Guarantee badges */}
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1.5 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Free Design Proof on WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Waterproof Synthetic Vinyl</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Doorstep delivery in Indore & MP</span>
                </div>
              </div>

              {/* Quick Call Assistance */}
              <div className="text-center pt-1">
                <p className="text-[11px] text-slate-400">Need immediate help with your order?</p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 mt-1"
                >
                  <Phone className="w-3.5 h-3.5" /> Call: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
