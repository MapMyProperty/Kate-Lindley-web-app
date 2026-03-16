"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Compass, Sparkles, Check, ArrowRight,
    Anchor, Zap, Star, Waves
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
    {
        id: "coaching",
        title: "1-1 Coaching",
        tagline: "Inner Navigation",
        icon: Compass,
        description: "Personalized coaching sessions to help you get clarity, build self-awareness, and create intentional change in your life. Each session is tailored to where you are and where you want to go.",
        tiers: [
            {
                name: "Single Session",
                price: "$150",
                duration: "90 Minutes",
                features: ["Initial assessment", "Goal setting", "Actionable takeaway plan"],
                icon: Anchor,
                highlight: false
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
                icon: Star,
                highlight: false
            }
        ]
    },
    {
        id: "yoga",
        title: "Yoga & Nidra",
        tagline: "Somatic Embodiment",
        icon: Sparkles,
        description: "Restorative practices to ground your energy and expand your somatic awareness. Available for groups, corporations, and specialized kids yoga sessions.",
        features: [
            "Vinyasa & Hatha Yoga (200HR RYT)",
            "Trauma-Informed Practice",
            "Yoga Nidra & Deep Rest",
            "Kids Yoga Specialized Sessions",
            "Corporate Wellness Programs"
        ],
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen overflow-hidden" style={{ background: "#F9F6F1" }}>
            <Navbar />

            {/* ── HERO HEADER ── */}
            <section className="relative h-[50vh] md:h-[60vh] w-full flex items-end overflow-hidden">
                <motion.div
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2070')" }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(63,90,107,0.85) 0%, rgba(20,30,40,0.25) 60%, transparent 100%)" }} />
                </motion.div>

                <div className="relative z-10 w-full px-6 pb-14 md:pb-18">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                        >
                            <span className="block text-[10px] uppercase tracking-[0.4em] font-bold mb-4" style={{ color: "#F2C6A0" }}>What I Offer</span>
                            <h1 className="font-serif font-bold leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#ffffff", letterSpacing: "-0.02em" }}>
                                My <em style={{ fontWeight: 300, fontStyle: "italic" }}>Services</em>
                            </h1>
                        </motion.div>
                    </div>
                </div>

                {/* Wave edge */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: "60px" }}>
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F9F6F1" />
                    </svg>
                </div>
            </section>

            {/* ── ANCHOR LINKS ── */}
            <div className="sticky top-20 z-40 px-6 py-4 hidden md:block" style={{ background: "rgba(249,246,241,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E8DCC8" }}>
                <div className="max-w-6xl mx-auto flex justify-center gap-12">
                    {serviceCategories.map(cat => (
                        <a
                            key={cat.id}
                            href={`#${cat.id}`}
                            className="font-sans text-[10px] uppercase tracking-widest font-bold transition-colors"
                            style={{ color: "#7FAFC6" }}
                        >
                            {cat.title}
                        </a>
                    ))}
                </div>
            </div>

            {/* ── SERVICES ── */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto space-y-32">
                    {serviceCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            id={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8 }}
                            className="scroll-mt-32"
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`}>
                                {/* Info */}
                                <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div
                                        className="w-14 h-14 flex items-center justify-center rounded-2xl"
                                        style={{ background: "linear-gradient(135deg, #7FAFC6, #7F9C84)", color: "#fff" }}
                                    >
                                        <cat.icon className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-3">
                                        <span
                                            className="block text-[9px] uppercase tracking-[0.35em] font-bold"
                                            style={{ color: "#F3A79A" }}
                                        >
                                            {cat.tagline}
                                        </span>
                                        <h2
                                            className="font-serif font-bold leading-tight"
                                            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#1c1917", letterSpacing: "-0.02em" }}
                                        >
                                            {cat.title}
                                        </h2>
                                    </div>
                                    <p className="font-sans text-lg leading-relaxed" style={{ color: "#57534e" }}>
                                        {cat.description}
                                    </p>

                                    {cat.features && !cat.tiers && (
                                        <>
                                            <ul className="space-y-3">
                                                {cat.features.map(f => (
                                                    <li key={f} className="flex items-center gap-3 font-sans text-sm" style={{ color: "#57534e" }}>
                                                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#7F9C84" }} />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                href="/contact"
                                                className="inline-flex flex-col items-center gap-1 px-8 py-4 font-sans font-bold uppercase tracking-widest text-xs rounded-full transition-all hover:-translate-y-1"
                                                style={{ background: "#7FAFC6", color: "#fff", boxShadow: "0 8px 24px rgba(127,175,198,0.3)" }}
                                            >
                                                <span className="flex items-center gap-2">Book {cat.title} <ArrowRight className="w-4 h-4" /></span>
                                                <span className="text-[9px] opacity-70 font-normal normal-case tracking-normal">Set up with PayPal</span>
                                            </Link>
                                        </>
                                    )}
                                </div>

                                {/* Content: tiers or image */}
                                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                                    {cat.tiers ? (
                                        <div className="space-y-5">
                                            {cat.tiers.map(tier => (
                                                <motion.div
                                                    key={tier.name}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="relative overflow-hidden"
                                                    style={{
                                                        background: tier.highlight ? "linear-gradient(135deg, #3d5a6b, #7FAFC6)" : "#fff",
                                                        borderRadius: "1.5rem",
                                                        border: tier.highlight ? "none" : "1px solid #E8DCC8",
                                                        padding: "1.75rem",
                                                        boxShadow: tier.highlight ? "0 16px 40px rgba(63,90,107,0.25)" : "0 2px 12px rgba(0,0,0,0.04)"
                                                    }}
                                                >
                                                    {tier.highlight && (
                                                        <div
                                                            className="absolute top-0 right-0 text-[8px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-bl-2xl"
                                                            style={{ background: "#F3A79A", color: "#fff" }}
                                                        >
                                                            Most Popular
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between items-start mb-5">
                                                        <div>
                                                            <h3 className="font-sans font-bold text-xl mb-1" style={{ color: tier.highlight ? "#fff" : "#1c1917" }}>
                                                                {tier.name}
                                                            </h3>
                                                            <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: tier.highlight ? "rgba(255,255,255,0.6)" : "#a8a29e" }}>
                                                                {tier.duration}
                                                            </p>
                                                        </div>
                                                        <p className="font-sans font-bold text-3xl" style={{ color: tier.highlight ? "#F2C6A0" : "#1c1917" }}>
                                                            {tier.price}
                                                        </p>
                                                    </div>
                                                    <ul className="space-y-2.5 mb-6">
                                                        {tier.features.map(f => (
                                                            <li key={f} className="flex items-center gap-3 font-sans text-sm">
                                                                <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: tier.highlight ? "#F2C6A0" : "#7F9C84" }} />
                                                                <span style={{ color: tier.highlight ? "rgba(255,255,255,0.85)" : "#57534e" }}>{f}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <Link
                                                        href="/contact"
                                                        className="flex flex-col items-center w-full py-3 rounded-xl font-sans text-[10px] uppercase tracking-widest font-bold transition-all hover:opacity-90"
                                                        style={{
                                                            background: tier.highlight ? "rgba(255,255,255,0.15)" : "#F9F6F1",
                                                            color: tier.highlight ? "#fff" : "#1c1917",
                                                            border: tier.highlight ? "1px solid rgba(255,255,255,0.25)" : "1px solid #E8DCC8"
                                                        }}
                                                    >
                                                        <span>Reserve Package</span>
                                                        <span className="text-[8px] mt-0.5 opacity-60 font-normal normal-case tracking-normal">Set up with PayPal</span>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="overflow-hidden" style={{ borderRadius: "2rem", border: "4px solid #E8DCC8", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
                                            <img src={cat.image} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" alt={cat.title} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section
                className="py-24 px-6 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3d5a6b 0%, #7FAFC6 100%)" }}
            >
                <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 C200,180 600,20 800,100 L800,200 L0,200 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-5" style={{ color: "#F2C6A0" }}>Not sure where to start?</p>
                        <h2 className="font-serif font-bold mb-5 leading-tight" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#fff", letterSpacing: "-0.02em" }}>
                            Book a free discovery call
                        </h2>
                        <p className="font-sans text-lg mb-10 opacity-80" style={{ color: "#E8DCC8" }}>
                            Let&apos;s chat about where you are and what feels aligned for your journey.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-4 font-sans font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1"
                            style={{ background: "#F3A79A", color: "#fff", borderRadius: "9999px", boxShadow: "0 8px 30px rgba(243,167,154,0.35)" }}
                        >
                            Get in Touch <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
