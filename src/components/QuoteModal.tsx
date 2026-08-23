import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { QuoteSummary } from '../types';
import { BUSINESS_INFO } from '../data/contentData';
import {
  CheckCircle2,
  X,
  MessageCircle,
  Printer,
  Phone,
  Droplets,
  Calendar,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface QuoteModalProps {
  quote: QuoteSummary;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ quote, onClose }) => {
  useEffect(() => {
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const handleSendToWhatsApp = () => {
    const message =
      `*OFFICIAL QUOTATION REQUEST — BROS WATER INDORE*\n\n` +
      `📄 *Quotation Ref ID:* ${quote.quoteId}\n` +
      `📅 *Date:* ${quote.date}\n` +
      `👤 *Client Name:* ${quote.customerName}\n` +
      `📞 *Mobile:* ${quote.phone}\n` +
      `🎉 *Event / Brand:* ${quote.eventOrBusinessName}\n\n` +
      `📦 *Order Specifications:*\n` +
      `• *Size:* ${quote.bottleSize}\n` +
      `• *Cap Color:* ${quote.capColor}\n` +
      `• *Quantity:* ${quote.quantity} Bottles\n` +
      `• *Custom Label:* ${quote.customLabel ? 'Yes (HD Waterproof Vinyl)' : 'No'}\n` +
      `• *Delivery Date:* ${quote.deliveryDate}\n` +
      `• *Delivery Venue:* ${quote.deliveryLocation}\n\n` +
      `💰 *Financial Breakdown:*\n` +
      `• *Unit Rate:* ₹${quote.unitPrice}/bottle\n` +
      `• *Estimated Total:* ₹${quote.estimatedTotal.toLocaleString('en-IN')}\n` +
      `• *30% Advance Booking:* ₹${quote.advanceAmount.toLocaleString('en-IN')}\n` +
      `• *Payment Preference:* ${quote.paymentOption}\n` +
      `• *Special Instructions:* ${quote.notes}\n\n` +
      `Please confirm slot availability at Dewas Naka Plant and send 3D label proof!`;

    const encoded = encodeURI(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="quote-modal-close-btn"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pb-5 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Quotation Generated Successfully!
          </h3>
          <p className="text-xs text-slate-500">
            Reference ID: <span className="font-bold text-slate-900 font-mono">{quote.quoteId}</span> • Generated on {quote.date}
          </p>
        </div>

        {/* Printable Quotation Slip */}
        <div id="printable-quote-slip" className="my-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs text-slate-700">
          {/* Header in slip */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <div className="font-extrabold text-slate-900 text-sm font-['Outfit',sans-serif]">
                BROS WATER
              </div>
              <div className="text-[10px] text-slate-500">Dewas Naka, Indore (M.P.) • {BUSINESS_INFO.phone}</div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-900">
              Proforma Estimate
            </span>
          </div>

          {/* Customer Meta */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-slate-500">Customer:</span>
              <div className="font-bold text-slate-900">{quote.customerName}</div>
            </div>
            <div>
              <span className="text-slate-500">Mobile:</span>
              <div className="font-bold text-slate-900">{quote.phone}</div>
            </div>
            <div>
              <span className="text-slate-500">Event / Brand:</span>
              <div className="font-bold text-slate-900 truncate">{quote.eventOrBusinessName}</div>
            </div>
            <div>
              <span className="text-slate-500">Delivery Venue:</span>
              <div className="font-bold text-slate-900 truncate">{quote.deliveryLocation}</div>
            </div>
          </div>

          {/* Order Details Table */}
          <div className="pt-2 border-t border-slate-200">
            <div className="flex justify-between py-1 border-b border-slate-200/60 font-bold text-slate-800 text-[11px]">
              <span>Item & Specification</span>
              <span>Rate</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between py-1.5 text-slate-700">
              <span>
                {quote.bottleSize} ({quote.quantity} pcs)
                <br />
                <span className="text-[10px] text-slate-500">
                  Cap: {quote.capColor} • HD Waterproof Vinyl
                </span>
              </span>
              <span className="font-mono">₹{quote.unitPrice}</span>
              <span className="font-bold font-mono text-slate-900">
                ₹{quote.estimatedTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Totals */}
          <div className="pt-2 border-t border-slate-200 space-y-1 text-right">
            <div className="flex justify-between text-xs font-bold text-slate-900">
              <span>Estimated Total:</span>
              <span className="text-cyan-700 text-sm">₹{quote.estimatedTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-[11px] text-emerald-700 font-semibold">
              <span>30% Advance for Confirmation:</span>
              <span>₹{quote.advanceAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleSendToWhatsApp}
            id="quote-modal-whatsapp-btn"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Quotation to BROS WATER on WhatsApp</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlePrint}
              id="quote-modal-print-btn"
              className="py-2.5 px-3 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print Quotation</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="quote-modal-call-btn"
              className="py-2.5 px-3 rounded-xl font-semibold text-xs text-cyan-800 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
