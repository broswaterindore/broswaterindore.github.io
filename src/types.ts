export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  popularFor: string[];
  recommendedSize: string;
  badge?: string;
}

export interface BottleSizeOption {
  id: string;
  name: string;
  volume: string;
  height: string;
  basePrice: number;
  popularFor: string;
  minOrder: number;
  description: string;
}

export interface CapColorOption {
  id: string;
  name: string;
  hex: string;
  category: 'standard' | 'premium';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'wedding' | 'corporate' | 'hotel' | 'birthday' | 'bulk';
  categoryLabel: string;
  client: string;
  size: string;
  capColor: string;
  imageAlt: string;
  accentColor: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'orders' | 'design' | 'delivery' | 'payment';
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  eventOrBusinessName: string;
  bottleQuantity: number;
  bottleSize: string;
  capColor: string;
  labelFinish: string;
  requiredDeliveryDate: string;
  deliveryLocation: string;
  customLabelRequired: 'yes' | 'no';
  logoFile?: File | null;
  logoPreviewUrl?: string | null;
  additionalRequirements: string;
  paymentOption: 'advance_30' | 'full' | 'quote_first';
}

export interface QuoteSummary {
  quoteId: string;
  date: string;
  customerName: string;
  phone: string;
  email: string;
  eventOrBusinessName: string;
  bottleSize: string;
  quantity: number;
  capColor: string;
  unitPrice: number;
  estimatedTotal: number;
  advanceAmount: number;
  deliveryLocation: string;
  deliveryDate: string;
  customLabel: boolean;
  notes: string;
  paymentOption: string;
}
