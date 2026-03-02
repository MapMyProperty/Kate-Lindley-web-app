"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, Sparkles, Heart, Check, ArrowRight, Star, Anchor, Zap } from "lucide-react";

const serviceCategories = [
    {
        id: "coaching",
        title: "1-1 Coaching",
        tagline: "Inner Navigation",
        icon: Compass,
        color: "accent-gold",
        bg: "bg-accent-gold/5",
        description: "Personalized expeditions into the depths of your nervous system and subconscious. Ideal for those seeking clarity, regulation, and a sense of direction.",
        tiers: [
            {
                name: "Single Session",
                price: "$150",
                duration: "90 Minutes",
                features: ["Initial assessment", "Goal setting", "Actionable takeaway plan"],
                icon: Anchor
            },
            {
                name: "Momentum Pack",
                price: "$600",
                duration: "5 Sessions",
                features: ["Nervous system regulation", "Somatic tracking", "Integration support", "Priority email access"],
                icon: Zap,
                highlight: true
            },
            {
                name: "Deep Expedition",
                price: "$1100",
                duration: "10 Sessions",
                features: ["Full journey mapping", "Deep subconscious work", "Custom meditation kit", "Lifestyle audit"],
                icon: Star
            }
        ]
    },
    {
        id: "yoga",
        title: "Yoga & Nidra",
        tagline: "Somatic Embodiment",
        icon: Sparkles,
        color: "accent-sage",
        bg: "bg-accent-sage/5",
        description: "Restorative practices to ground your energy and expand your somatic awareness. Available for groups, corporations, and specialized kids yoga sessions.",
        features: [
            "Vinyasa & Hatha Yoga (200HR)",
            "Trauma-Informed Practice",
            "Yoga Nidra & Deep Rest",
            "Kids Yoga Specialized Sessions",
            "Corporate Wellness Programs"
        ],
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "therapy",
        title: "Drama Therapy",
        tagline: "Healing Waypoints",
        icon: Heart,
        color: "accent-clay",
        bg: "bg-accent-clay/5",
        description: "Compassionate support for navigating life's complex transitions through the power of movement and expression. A BA Hons qualified approach.",
        features: [
            "Somatic Expression",
            "Grief & Loss Support",
            "Inner Child Integration",
            "Authenticity Work",
            "BA HONS Drama Therapy Approach"
        ],
        image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Expedition Header */}
            <section className="relative pt-40 pb-20 px-6 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">Planned Routes</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-stone-950 leading-tight tracking-tight mt-4">Expedition Services</h1>
                        <p className="font-sans text-stone-600 text-xl max-w-2xl mx-auto mt-6">
                            Navigate your path through tailored coaching, somatic movement, and therapeutic waypoints.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Navigation / Anchor Links */}
            <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 py-4 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex justify-center gap-12">
                    {serviceCategories.map(cat => (
                        <a
                            key={cat.id}
                            href={`#${cat.id}`}
                            className="font-sans text-[10px] uppercase tracking-widest text-stone-500 hover:text-accent-gold font-bold transition-colors"
                        >
                            {cat.title}
                        </a>
                    ))}
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-32">
                    {serviceCategories.map((cat, idx) => (
                        <div key={cat.id} id={cat.id} className="scroll-mt-32">
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Info Side */}
                                <div className={`space-y-10 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div className={`w-16 h-16 ${cat.bg} rounded-2xl flex items-center justify-center text-${cat.color}`}>
                                        <cat.icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-4">
                                        <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold underline underline-offset-8 decoration-accent-gold">{cat.tagline}</span>
                                        <h2 className="font-serif text-5xl md:text-6xl text-stone-950 pt-2">{cat.title}</h2>
                                    </div>
                                    <p className="font-sans text-stone-600 text-lg leading-relaxed">
                                        {cat.description}
                                    </p>

                                    {cat.features && !cat.tiers && (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {cat.features.map(f => (
                                                <li key={f} className="flex items-center gap-3 font-sans text-sm text-stone-500">
                                                    <Check className="w-4 h-4 text-accent-gold" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {!cat.tiers && (
                                        <button className="button-premium group">
                                            Book {cat.title}
                                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    )}
                                </div>

                                {/* Content Side (Image or Tiers) */}
                                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                                    {cat.tiers ? (
                                        <div className="space-y-6">
                                            {cat.tiers.map(tier => (
                                                <motion.div
                                                    key={tier.name}
                                                    whileHover={{ scale: 1.02 }}
                                                    className={`bento-card border-2 ${tier.highlight ? 'border-accent-gold shadow-lg relative overflow-hidden' : 'border-stone-100'}`}
                                                >
                                                    {tier.highlight && (
                                                        <div className="absolute top-0 right-0 bg-accent-gold text-white text-[8px] font-bold uppercase tracking-widest py-1 px-4">
                                                            Recommended Pack
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="space-y-2">
                                                            <h3 className="font-serif text-2xl text-stone-900">{tier.name}</h3>
                                                            <p className="font-sans text-xs text-stone-400 font-bold uppercase">{tier.duration}</p>
                                                        </div>
                                                        <p className="font-serif text-3xl text-stone-950">{tier.price}</p>
                                                    </div>
                                                    <ul className="space-y-4 mb-8">
                                                        {tier.features.map(f => (
                                                            <li key={f} className="flex items-center gap-3 font-sans text-xs text-stone-500">
                                                                <Check className="w-3 h-3 text-accent-gold" />
                                                                {f}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <button className={`w-full py-3 rounded-xl font-sans text-[10px] uppercase tracking-widest font-bold transition-all ${tier.highlight ? 'bg-stone-900 text-white hover:bg-stone-800' : 'bg-stone-50 text-stone-900 hover:bg-stone-100'}`}>
                                                        Reserve Package
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                                            <img src={cat.image} className="w-full h-full object-cover" alt={cat.title} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
