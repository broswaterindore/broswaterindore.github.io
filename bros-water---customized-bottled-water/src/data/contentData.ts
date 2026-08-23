import { ServiceItem, BottleSizeOption, CapColorOption, GalleryItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'BROS WATER',
  tagline: 'Customized Water Bottles for Every Occasion',
  heroSubtitle:
    'Make your event, business, or celebration more memorable with professionally customized water bottles. Choose your bottle requirements, share your design, and place your order with BROS WATER.',
  phone: '7771081084',
  phoneFormatted: '+91 77710 81084',
  whatsappNumber: '917771081084',
  email: 'broswater001@gmail.com',
  address: 'Dewas Naka, Indore, Madhya Pradesh, India',
  city: 'Indore',
  state: 'Madhya Pradesh',
  country: 'India',
  pinCode: '452010',
  businessHours: 'Monday – Sunday | 9:00 AM – 8:00 PM',
  openingTime: '9:00 AM',
  closingTime: '8:00 PM',
  minOrderQuantity: 100,
  turnaroundStandard: '24 – 48 Hours in Indore',
  purityStandards: 'RO + UV + Ozone + Essential Minerals Processed (Food Grade & BPA-Free)',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'customized-water-bottles',
    title: 'Customized Water Bottles',
    tagline: 'Tailor-made packaged drinking water with complete customization',
    description:
      'Fully personalized packaged drinking water bottles customized to your preferred capacity, bottle profile, cap color, and label design. Crafted with premium food-grade PET and multi-stage purified drinking water.',
    iconName: 'Sparkles',
    popularFor: ['All Occasions', 'Brand Promotion', 'Gift Packs'],
    recommendedSize: '250ml & 500ml',
    badge: 'Flagship Service',
  },
  {
    id: 'custom-bottle-labels',
    title: 'Custom Bottle Labels',
    tagline: 'High-definition waterproof, tear-resistant custom printed labels',
    description:
      'Ultra-crisp gloss, matte, metallic foil, or transparent label printing that will never smudge, peel, or fade even in deep ice buckets and chilled coolers. 100% waterproof synthetic vinyl material.',
    iconName: 'Printer',
    popularFor: ['Product Launches', 'Personalised Names', 'QR Code Menus'],
    recommendedSize: 'Custom Die-Cut',
    badge: 'HD Waterproof',
  },
  {
    id: 'personalized-water-events',
    title: 'Personalized Water for Events',
    tagline: 'Elevate stage shows, concerts, exhibitions & community functions',
    description:
      'Turn standard hydration into an interactive branding medium. Ideal for music concerts, religious katha programs, trade expos, sports marathons, and cultural gatherings across Madhya Pradesh.',
    iconName: 'CalendarCheck',
    popularFor: ['Exhibitions', 'Conferences', 'Marathons', 'Satsangs'],
    recommendedSize: '250ml & 500ml',
  },
  {
    id: 'wedding-party-bottles',
    title: 'Wedding & Party Water Bottles',
    tagline: 'Luxury personalized bottles featuring the Bride & Groom monogram',
    description:
      'Add royal elegance to your Baraat, Mehendi, Sangeet, Reception, and Cocktail nights. Custom printed with royal floral designs, caricature artwork, hashtag emblems, and guest welcome greetings.',
    iconName: 'HeartHandshake',
    popularFor: ['Royal Weddings', 'Mehendi & Sangeet', 'Anniversaries', 'Receptions'],
    recommendedSize: '200ml & 250ml Mini',
    badge: 'Most Popular',
  },
  {
    id: 'corporate-business-branding',
    title: 'Corporate & Business Branding',
    tagline: 'Showcase your company logo in boardrooms, AGMs & client meets',
    description:
      'Impress VIP clients, investors, and conference delegates with high-end branded corporate water bottles. Includes your company logo, ISO taglines, social handles, and QR codes.',
    iconName: 'Building2',
    popularFor: ['Board Meetings', 'Annual General Meets', 'HR Onboarding', 'Tech Summits'],
    recommendedSize: '300ml & 500ml',
    badge: 'B2B Favorite',
  },
  {
    id: 'hotel-restaurant-bottles',
    title: 'Hotel & Restaurant Customized Bottles',
    tagline: 'Signature custom bottles for dining tables, banquets & room service',
    description:
      'Replace generic local market bottles with your own restaurant/resort branded bottles. Build immediate prestige, enhance food safety perception, and promote your brand with recurring bulk supplies.',
    iconName: 'UtensilsCrossed',
    popularFor: ['Fine Dine Restaurants', 'Boutique Hotels', 'Banquets', 'Cafes & Lounges'],
    recommendedSize: '500ml & 1000ml',
    badge: 'Recurring Supply',
  },
  {
    id: 'birthday-celebration-bottles',
    title: 'Birthday & Celebration Bottles',
    tagline: 'Fun, themed water bottles for kids birthdays, milestone parties & baby showers',
    description:
      'Bright, playful, and customized cartoon or elegant milestone themes with the celebrant’s photo, age badge, and personalized thank-you note for return gift hampers.',
    iconName: 'PartyPopper',
    popularFor: ['Kids Birthdays', '1st Birthday Parties', 'Baby Showers', 'Theme Parties'],
    recommendedSize: '200ml & 250ml',
  },
  {
    id: 'promotional-marketing-bottles',
    title: 'Promotional / Marketing Water Bottles',
    tagline: 'High-impact walking billboard for real estate, gyms & product launches',
    description:
      'High-recall promotional tool. Distribute your branded water bottles at trade fairs, real estate site visits, car showroom test drives, coaching institutes, and health clubs for 100% engaged viewing.',
    iconName: 'Megaphone',
    popularFor: ['Real Estate Site Visits', 'Auto Showrooms', 'Gyms & Salons', 'Political Rallies'],
    recommendedSize: '250ml & 500ml',
  },
  {
    id: 'bulk-water-orders',
    title: 'Bulk Water Bottle Orders',
    tagline: 'Direct wholesale pricing & factory capacity for large quantity orders',
    description:
      'High capacity automated bottling line capable of producing 10,000+ custom branded bottles daily. Tiered bulk discounts, priority pallet shipping, and scheduled staggered dispatch across Central India.',
    iconName: 'Boxes',
    popularFor: ['Event Planners', 'Catering Companies', 'Institutions', 'Government Expos'],
    recommendedSize: 'All Sizes Available',
    badge: 'Wholesale Rates',
  },
];

export const BOTTLE_SIZES: BottleSizeOption[] = [
  {
    id: '200ml',
    name: '200 ml Mini Cute',
    volume: '200 ml',
    height: '13.5 cm',
    basePrice: 3.5,
    popularFor: 'Weddings, Receptions, Car Desks, Kids Parties',
    minOrder: 100,
    description: 'Ultra-compact, pocket-friendly bottle perfect for welcoming guests without water wastage.',
  },
  {
    id: '250ml',
    name: '250 ml Classic Sleek',
    volume: '250 ml',
    height: '15.0 cm',
    basePrice: 4.0,
    popularFor: 'Conferences, Banquets, Seminars, Catering',
    minOrder: 100,
    description: 'Our most requested size for corporate seminars and luxury wedding dining tables.',
  },
  {
    id: '300ml',
    name: '300 ml Premium Club',
    volume: '300 ml',
    height: '16.5 cm',
    basePrice: 5.0,
    popularFor: 'Cafes, Lounges, Boardrooms, VIP Enclosures',
    minOrder: 100,
    description: 'Distinctive European cylindrical profile offering substantial branding canvas.',
  },
  {
    id: '500ml',
    name: '500 ml Standard Refresh',
    volume: '500 ml',
    height: '21.0 cm',
    basePrice: 7.0,
    popularFor: 'Outdoor Events, Sports, Marathons, Hotels',
    minOrder: 100,
    description: 'The universal hydration choice with wide panoramic label space for detailed branding.',
  },
  {
    id: '1000ml',
    name: '1000 ml (1 Litre) Jumbo',
    volume: '1000 ml',
    height: '27.5 cm',
    basePrice: 10.0,
    popularFor: 'Hotel Guest Rooms, Dining Halls, Long Travel',
    minOrder: 100,
    description: 'Full litre capacity for premium hospitality, travel groups, and all-day boardrooms.',
  },
];

export const CAP_COLORS: CapColorOption[] = [
  { id: 'royal-blue', name: 'Aqua Blue (Standard)', hex: '#0284c7', category: 'standard' },
  { id: 'jet-black', name: 'Onyx Black (Luxury)', hex: '#0f172a', category: 'premium' },
  { id: 'regal-gold', name: 'Imperial Gold (Wedding)', hex: '#d97706', category: 'premium' },
  { id: 'pure-white', name: 'Pure White (Minimalist)', hex: '#f8fafc', category: 'standard' },
  { id: 'ruby-red', name: 'Crimson Red (Festive)', hex: '#dc2626', category: 'standard' },
  { id: 'emerald-green', name: 'Emerald Green (Eco/Health)', hex: '#059669', category: 'standard' },
  { id: 'rose-gold', name: 'Rose Gold Metallic', hex: '#be185d', category: 'premium' },
];

export const LABEL_FINISHES = [
  { id: 'gloss-waterproof', name: 'Gloss HD Waterproof Vinyl', description: 'Vibrant colors, high shine, ice-resistant' },
  { id: 'matte-velvet', name: 'Matte Luxury Satin', description: 'Sophisticated non-reflective velvet texture' },
  { id: 'foil-accent', name: 'Gold/Silver Foil Accent', description: 'Metallic embossed border for royal wedding stationery' },
  { id: 'transparent-minimal', name: 'Clear Invisible Film', description: 'See-through floating print for modern aesthetics' },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'ShieldCheck',
    title: '100% FSSAI & ISI Purity Standards',
    description: '7-stage purification including Reverse Osmosis (RO), Ultra-Violet (UV) irradiation, Micron Filtration, and Ozonation with retained essential minerals.',
  },
  {
    icon: 'Droplets',
    title: '100% Waterproof & Ice-Proof Labels',
    description: 'Our high-grade synthetic labels will never tear, bleed, or slide off even when submerged inside ice tubs for 48+ hours.',
  },
  {
    icon: 'Zap',
    title: 'Superfast 24 – 48 Hour Turnaround',
    description: 'Located at Dewas Naka, Indore. We provide instant local dispatch across Vijay Nagar, Palasia, Bypass, Pithampur, Ujjain, and throughout MP.',
  },
  {
    icon: 'Palette',
    title: 'Free Graphic Design Assistance',
    description: 'Do not have a designer? Send us your logo, text, or wedding date on WhatsApp and our in-house designers create realistic 3D proofs within 30 minutes!',
  },
  {
    icon: 'Layers',
    title: 'Low Minimum Order Quantity (100 Bottles)',
    description: 'Whether you need 100 bottles for an intimate birthday or 25,000 bottles for an international summit, we provide competitive factory-direct pricing.',
  },
  {
    icon: 'Recycle',
    title: '100% Recyclable Food-Grade PET',
    description: 'Virgin food-grade BPA-free plastic containers, manufactured safely with strict hygiene protocols and eco-friendly recyclability.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Select Bottle Size & Quantity',
    description: 'Pick from 200ml, 250ml, 300ml, 500ml or 1L bottles. Select cap color, label finish, and required quantity.',
    icon: 'SlidersHorizontal',
  },
  {
    step: '02',
    title: 'Share Logo / Event Theme',
    description: 'Upload your high-res logo, wedding hashtag, or let our design team craft a custom label for you at zero extra charge.',
    icon: 'FileUp',
  },
  {
    step: '03',
    title: 'Approve 3D Mockup Proof',
    description: 'Receive an instant digital 3D proof on WhatsApp. Make unlimited revisions until you are 100% satisfied.',
    icon: 'CheckCircle2',
  },
  {
    step: '04',
    title: 'Automated Bottling & Fast Delivery',
    description: 'Your fresh, hygienically sealed customized bottles are printed, packed, and delivered directly to your venue in Indore or MP.',
    icon: 'Truck',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Monogram Wedding Edition',
    category: 'wedding',
    categoryLabel: 'Wedding & Reception',
    client: 'The Grand Rajputana Wedding (Indore)',
    size: '200 ml Mini',
    capColor: 'Imperial Gold',
    imageAlt: 'Luxury Gold Wedding Water Bottle with couple monogram',
    accentColor: '#d97706',
    description: 'Bespoke gold foil accented bottles placed on 45 banquet tables at Sayaji Hotel, Indore.',
  },
  {
    id: 'gal-2',
    title: 'Tech Summit 2026 Corporate Branding',
    category: 'corporate',
    categoryLabel: 'Corporate Summit',
    client: 'MP Tech Pioneers Forum, Super Corridor',
    size: '500 ml Standard',
    capColor: 'Onyx Black',
    imageAlt: 'Sleek Black Cap Tech Conference Water Bottle',
    accentColor: '#0284c7',
    description: 'QR Code linked water bottles that directed 1,200 delegates to the interactive speaker schedule.',
  },
  {
    id: 'gal-3',
    title: 'Boutique Fine-Dine Restaurant Table Water',
    category: 'hotel',
    categoryLabel: 'Hotel & Restaurant',
    client: 'The Olive Heritage Lounge, Vijay Nagar',
    size: '300 ml Cylindrical',
    capColor: 'Pure White',
    imageAlt: 'Modern Minimalist Glass-Style Cafe Water Bottle',
    accentColor: '#059669',
    description: 'Eco-styled matte labels with custom restaurant branding replaced generic market bottles.',
  },
  {
    id: 'gal-4',
    title: 'Aarav’s 1st Birthday Safari Theme',
    category: 'birthday',
    categoryLabel: 'Birthday Celebration',
    client: 'Brilliant Convention Centre, Indore',
    size: '250 ml Sleek',
    capColor: 'Aqua Blue',
    imageAlt: 'Playful Cartoon Themed Kids Birthday Water Bottle',
    accentColor: '#0284c7',
    description: 'Vibrant jungle safari graphic water bottles distributed with kids return gift boxes.',
  },
  {
    id: 'gal-5',
    title: 'Marathon 2026 Official Hydration Partner',
    category: 'bulk',
    categoryLabel: 'Bulk Sports Event',
    client: 'Indore City Marathon (10,000+ Runners)',
    size: '250 ml Fast-Cap',
    capColor: 'Aqua Blue',
    imageAlt: 'Sports Marathon Water Bottles in Bulk Crates',
    accentColor: '#dc2626',
    description: '15,000 custom branded hydration bottles supplied across 8 water stations along AB Road.',
  },
  {
    id: 'gal-6',
    title: 'Luxury Car Launch VIP Test Drive Series',
    category: 'corporate',
    categoryLabel: 'Product Launch',
    client: 'Prestige Motors, Dewas Naka Hub',
    size: '300 ml Club',
    capColor: 'Onyx Black',
    imageAlt: 'Sleek Black Label VIP Automotive Launch Water Bottle',
    accentColor: '#475569',
    description: 'Placed inside all luxury test drive vehicle cup holders with embossed black matte finish.',
  },
  {
    id: 'gal-7',
    title: 'Mehendi & Sangeet Floral Pastel Edition',
    category: 'wedding',
    categoryLabel: 'Wedding Function',
    client: 'Ananya & Rohan Sangeet, Bypass Resort',
    size: '200 ml Mini',
    capColor: 'Rose Gold',
    imageAlt: 'Pastel Floral Water Bottle for Mehendi Event',
    accentColor: '#be185d',
    description: 'Pastel peach & gold floral bottles perfectly matching the venue floral theme.',
  },
  {
    id: 'gal-8',
    title: 'Real Estate Township Site Visit Welcome',
    category: 'bulk',
    categoryLabel: 'Real Estate Branding',
    client: 'Skyline Green Valley Projects',
    size: '500 ml Standard',
    capColor: 'Emerald Green',
    imageAlt: 'Green Theme Real Estate Water Bottle with QR site brochure',
    accentColor: '#059669',
    description: 'Every visitor was handed a chilled branded bottle with QR code map to the master layout.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is the Minimum Order Quantity (MOQ) for custom labeled water bottles?',
    answer:
      'Our minimum order starts at just 100 bottles! This makes BROS WATER ideal for small intimate birthday parties, poojas, and boutique meetings as well as mega weddings and corporate expos with 10,000+ bottles.',
    category: 'orders',
  },
  {
    id: 'faq-2',
    question: 'How fast can BROS WATER deliver in Indore and nearby Madhya Pradesh areas?',
    answer:
      'For standard orders in Indore (Dewas Naka, Vijay Nagar, Palasia, Bypass, Bhawarkua, etc.), we usually dispatch within 24 to 48 hours after label artwork approval. Urgent same-day / express delivery options are also available on request.',
    category: 'delivery',
  },
  {
    id: 'faq-3',
    question: 'Are the bottle labels completely waterproof in ice tubs and coolers?',
    answer:
      'Yes, 100%! We utilize high-grade synthetic polypropylene vinyl labels with UV-cured waterproof printing. Even if kept submerged inside chilled ice water buckets for 48+ hours, the label will not peel, rip, bleed or fade.',
    category: 'design',
  },
  {
    id: 'faq-4',
    question: 'Can you help us design the label if we don’t have a designer?',
    answer:
      'Absolutely! We provide FREE graphic design assistance. Just send us your company logo, wedding couple name, event hashtag, or desired theme via WhatsApp (7771081084), and our design team will send you photorealistic 3D label proofs.',
    category: 'design',
  },
  {
    id: 'faq-5',
    question: 'What water purification standards does BROS WATER follow?',
    answer:
      'BROS WATER adheres to strict FSSAI food safety and packaged drinking water guidelines. The water undergoes a 7-stage purification treatment: Sand Filtration, Activated Carbon Filter, Micron Filtration, Reverse Osmosis (RO), Ultra-Violet (UV) Sterilization, Ozonation, and Essential Mineral Balancing.',
    category: 'orders',
  },
  {
    id: 'faq-6',
    question: 'How does payment and advance booking work?',
    answer:
      'You can submit your order quote request on the website or via WhatsApp. Once you approve the digital 3D label proof, a nominal 30% advance confirms your production slot, and the balance is payable upon delivery/dispatch confirmation. We accept UPI, GPay, PhonePe, Bank Transfer, and Cash.',
    category: 'payment',
  },
  {
    id: 'faq-7',
    question: 'What bottle sizes and cap colors are available?',
    answer:
      'We offer 200ml, 250ml, 300ml, 500ml, and 1000ml (1 Litre) bottles with multiple cap colors including Classic Aqua Blue, Luxury Onyx Black, Imperial Gold, Pure White, Crimson Red, and Emerald Green.',
    category: 'orders',
  },
  {
    id: 'faq-8',
    question: 'Can you deliver to locations outside Indore, like Ujjain, Dewas, Bhopal, or Pithampur?',
    answer:
      'Yes, we regularly supply customized water bottles across Central India including Ujjain, Dewas, Pithampur Industrial Area, Mhow, Bhopal, Ratlam, and surrounding districts via direct tempo transport and trusted logistics.',
    category: 'delivery',
  },
];

export const INDORE_DELIVERY_HUBS = [
  'Dewas Naka',
  'Vijay Nagar',
  'Palasia & Old Palasia',
  'Bhawarkua & Tower Square',
  'Bypass Road & Resorts',
  'Super Corridor & Airport Road',
  'AB Road & LIG Colony',
  'Annapurna & Rajwada Area',
  'Pithampur & Rau',
  'Ujjain Road & Sanwer',
  'Nipania & Mahalaxmi Nagar',
  'Other / Outside Indore',
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Vikram & Priya Malhotra',
    role: 'Wedding at Sayaji Hotel, Indore',
    content:
      'BROS WATER made our wedding reception look truly high-end! The 200ml gold-cap bottles with our wedding monogram were loved by all 600 guests. Prompt delivery right to the hotel banquet.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Rajesh Sharma',
    role: 'Managing Director, Apex Technologies (Indore)',
    content:
      'We ordered 1,500 branded 500ml bottles for our annual client conference at Brilliant Convention Centre. The print quality was impeccable and ice-proof. Exceptional service by the BROS WATER team!',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Chef Ankit Verma',
    role: 'Owner, The Urban Table Cafe & Lounge',
    content:
      'Switching to our own branded BROS WATER bottles increased our cafe’s brand perception immediately. Consistent supply at Dewas Naka with zero delays.',
    rating: 5,
  },
];
