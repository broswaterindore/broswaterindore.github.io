```tsx
import React from 'react';
import {
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Droplet,
  Award,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data/contentData';

interface HeroProps {
  onBookNow: () => void;
  onExploreCustomizer: () => void;
  onExploreServices: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero: React.FC<HeroProps> = ({
  onBookNow,
  onExploreCustomizer,
  onExploreServices,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50/80 via-white to-slate-50 pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24">

      {/* Animated background glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
          x: ['-50%', '-47%', '-50%'],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl"
        animate={{
          y: [0, 35, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-teal-200/20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* LEFT SIDE */}
          <motion.div
            className="space-y-8 text-center lg:col-span-7 lg:text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >

            {/* Status badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/80 px-4 py-2 text-xs font-semibold text-cyan-900 shadow-sm backdrop-blur-md sm:text-sm"
            >
              <motion.span
                className="flex h-2.5 w-2.5 rounded-full bg-emerald-500"
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [1, 0.65, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />
              <span>
                Indore’s Premier Custom Bottled Water Plant • Dewas Naka
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
                <span className="text-slate-900">BROS WATER — </span>

                <motion.span
                  className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Customized Water Bottles
                </motion.span>

                <span> for Every Occasion</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
                Make your event, business, or celebration more memorable with
                professionally customized water bottles. Choose your bottle
                requirements, share your design, and place your order with
                BROS WATER.
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-3.5 pt-1 lg:justify-start"
            >
              <motion.button
                onClick={onBookNow}
                id="hero-book-order-btn"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-cyan-600/30 transition-shadow hover:shadow-cyan-600/50"
              >
                <Sparkles className="h-5 w-5 text-cyan-100" />
                <span>Book Your Order</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20BROS%20WATER,%20I%20want%20to%20place%20an%20order%20for%20customized%20water%20bottles`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-100/90 px-6 py-3.5 text-base font-bold text-emerald-800 shadow-sm"
              >
                <MessageCircle className="h-5 w-5 fill-emerald-600/20 text-emerald-600" />
                <span>WhatsApp Us</span>
              </motion.a>

              <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="hero-call-now-btn"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-slate-800 shadow-sm"
              >
                <Phone className="h-5 w-5 text-cyan-600" />
                <span>Call Now</span>
              </motion.a>
            </motion.div>

            {/* TRUST BADGES */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-6 text-left sm:grid-cols-4"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: 'FSSAI Certified',
                  text: '7-Stage RO + UV',
                  bg: 'bg-cyan-100',
                  color: 'text-cyan-700',
                },
                {
                  icon: Droplet,
                  title: 'Waterproof HD',
                  text: 'Ice-Bucket Proof',
                  bg: 'bg-blue-100',
                  color: 'text-blue-700',
                },
                {
                  icon: Zap,
                  title: '24-48h Dispatch',
                  text: 'Dewas Naka Plant',
                  bg: 'bg-amber-100',
                  color: 'text-amber-700',
                },
                {
                  icon: Award,
                  title: 'Low 100 MOQ',
                  text: 'Free Design Proof',
                  bg: 'bg-purple-100',
                  color: 'text-purple-700',
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.12,
                      duration: 0.5,
                    }}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-2.5"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — PREMIUM BOTTLE */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, x: 50, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: 'easeOut',
            }}
          >

            {/* Glow behind bottle */}
            <motion.div
              className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative mx-auto max-w-md rounded-3xl border border-white/70 bg-white/80 p-5 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl sm:p-6"
            >

              {/* Browser-style top bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />

                  <span className="ml-1 text-xs font-bold text-slate-600">
                    Live Bottle Preview
                  </span>
                </div>

                <motion.span
                  animate={{
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[11px] font-bold text-cyan-700"
                >
                  HD Waterproof Vinyl
                </motion.span>
              </div>

              {/* Bottle stage */}
              <div className="relative my-6 flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-cyan-200 bg-gradient-to-b from-slate-50 to-cyan-50/60">

                {/* Moving light */}
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  animate={{
                    x: ['-120%', '120%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                />

                {/* Bottle */}
                <motion.div
                  className="relative z-10 flex flex-col items-center"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >

                  {/* Cap */}
                  <motion.div
                    animate={{
                      rotateY: [0, 8, 0, -8, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex h-7 w-14 items-center justify-center rounded-t-md border-t border-amber-300 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 shadow-md"
                  >
                    <div className="h-1 w-full bg-amber-700/40" />
                  </motion.div>

                  {/* Neck */}
                  <div className="h-6 w-10 border-x border-cyan-300/40 bg-gradient-to-r from-cyan-100/90 via-white to-cyan-100/90" />

                  {/* Shoulders */}
                  <div className="h-8 w-28 rounded-t-[28px] border-x border-t border-cyan-300/40 bg-gradient-to-b from-cyan-100/90 via-white to-cyan-50/80" />

                  {/* Bottle body */}
                  <div className="relative flex h-44 w-32 items-center justify-center overflow-hidden border-x border-cyan-300/40 bg-gradient-to-r from-cyan-100/80 via-white/95 to-cyan-100/80 shadow-inner">

                    {/* Water shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-200/30 to-cyan-400/20"
                      animate={{
                        y: ['-10%', '10%', '-10%'],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Label */}
                    <motion.div
                      className="relative w-full border-y-2 border-amber-400/80 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 px-2 py-3 text-center text-white shadow-lg"
                      animate={{
                        boxShadow: [
                          '0 0 0 rgba(34,211,238,0)',
                          '0 0 22px rgba(34,211,238,0.22)',
                          '0 0 0 rgba(34,211,238,0)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      <div className="absolute right-1 top-0.5 font-mono text-[8px] text-amber-300">
                        250ml
                      </div>

                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        Royal Wedding
                      </div>

                      <div className="font-['Outfit',sans-serif] text-sm font-bold tracking-wide text-white">
                        AARAV & PRIYA
                      </div>

                      <div className="mt-0.5 text-[9px] text-slate-300">
                        24.11.2026 • Sayaji Indore
                      </div>

                      <div className="mt-1 flex items-center justify-center gap-1 text-[8px] font-semibold text-cyan-300">
                        <Sparkles className="h-2.5 w-2.5" />
                        BROS WATER
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottle base */}
                  <div className="h-6 w-32 rounded-b-xl border-x border-b border-cyan-300/60 bg-gradient-to-b from-cyan-100/80 to-cyan-200/80 shadow-md" />
                </motion.div>

                {/* Floating left badge */}
                <motion.div
                  className="absolute left-2 top-8 z-20 rounded-xl border border-slate-100 bg-white/95 p-2.5 text-left shadow-lg backdrop-blur-md sm:-left-3"
                  animate={{
                    y: [0, -7, 0],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="text-[10px] font-bold uppercase text-slate-500">
                    Cap Options
                  </p>
                  <p className="text-xs font-extrabold text-slate-900">
                    Gold • Black • Blue
                  </p>
                </motion.div>

                {/* Floating right badge */}
                <motion.div
                  className="absolute bottom-12 right-2 z-20 rounded-xl border border-slate-100 bg-white/95 p-2.5 text-left shadow-lg backdrop-blur-md sm:-right-3"
                  animate={{
                    y: [0, 7, 0],
                    rotate: [1, -1, 1],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="text-[10px] font-bold uppercase text-slate-500">
                    Local Delivery
                  </p>
                  <p className="text-xs font-extrabold text-emerald-600">
                    Free at Dewas Naka
                  </p>
                </motion.div>
              </div>

              {/* Designer button */}
              <motion.button
                onClick={onExploreCustomizer}
                id="hero-try-studio-btn"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-100/80 py-3 font-bold text-sm text-cyan-800 transition-colors hover:bg-cyan-200/80"
              >
                <Sparkles className="h-4 w-4 text-cyan-600" />
                <span>Open Interactive 3D Bottle Designer</span>
              </motion.button>

              {/* Features */}
              <div className="flex items-center justify-between px-1 pt-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  100% Leak Proof
                </span>

                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  Recyclable PET
                </span>

                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  Fast Proofs
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-xs font-semibold text-slate-400"
          animate={{
            y: [0, 6, 0],
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span>Scroll to explore</span>
          <div className="h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
```
