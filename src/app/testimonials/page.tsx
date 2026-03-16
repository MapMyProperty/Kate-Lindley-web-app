"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Quote, Star, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
    {
        name: "Dima",
        context: "1-1 Coaching",
        text: "Working with Kate has been transformational. Her ability to hold space for deep work while maintaining a grounded, practical approach is rare. I feel more regulated and authentic than ever.",
        rating: 5,
        tag: "Coaching"
    },
    {
        name: "Emma",
        context: "Retreat Participant",
        text: "The retreat was the reset I didn't know I needed. Kate's guidance through such raw beauty helped me rediscover a sense of calm that I've carried back into my daily life.",
        rating: 5,
        tag: "Wellness"
    },
    {
        name: "Roshan",
        context: "Yoga Regular",
        text: "Kate's Yoga Nidra sessions are my go-to for deep rest. She has a way of guiding you into your body that feels safe and expansive. Highly recommend for anyone with a busy mind.",
        rating: 5,
        tag: "Yoga & Nidra"
    },
    {
        name: "Maria",
        context: "Coaching Client",
        text: "Working with Kate helped me navigate a major life transition with grace. Her compassionate approach allowed me to express things I couldn't put into words and find a path forward.",
        rating: 5,
        tag: "Coaching"
    }
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen overflow-hidden" style={{ background: "#F9F6F1" }}>
            <Navbar />

            {/* ── HERO HEADER ── */}
            <section className="relative h-[50vh] w-full flex items-end overflow-hidden">
                <motion.div
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-[center_60%]"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2070')" }}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(63,90,107,0.85) 0%, rgba(20,30,40,0.2) 60%, transparent 100%)" }} />
                </motion.div>

                <div className="relative z-10 w-full px-6 pb-14">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                        >
                            <span className="block text-[10px] uppercase tracking-[0.4em] font-bold mb-4" style={{ color: "#F2C6A0" }}>Shared Journeys</span>
                            <h1 className="font-serif font-bold leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#ffffff", letterSpacing: "-0.02em" }}>
                                Testimonials
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: "60px" }}>
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F9F6F1" />
                    </svg>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="px-6 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-sans text-xl leading-relaxed italic"
                        style={{ color: "#57534e", borderLeft: "none" }}
                    >
                        Here are some reflections from those who have explored with me.
                    </motion.p>
                </div>
            </section>

            {/* ── TESTIMONIAL GRID ── */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto columns-1 md:columns-2 gap-8 space-y-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.7, delay: idx * 0.08 }}
                            className="break-inside-avoid"
                            style={{
                                background: "#fff",
                                borderRadius: "1.5rem",
                                border: "1px solid #E8DCC8",
                                padding: "2rem",
                                boxShadow: "0 4px 20px rgba(127,175,198,0.08)",
                                marginBottom: "2rem"
                            }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                                    style={{ background: "linear-gradient(135deg, #7FAFC6, #7F9C84)" }}
                                >
                                    <Quote className="w-5 h-5" style={{ color: "#fff" }} />
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4" style={{ fill: "#F2C6A0", color: "#F2C6A0" }} />
                                    ))}
                                </div>
                            </div>

                            <p
                                className="font-sans text-lg leading-relaxed italic mb-6"
                                style={{ color: "#292524", borderLeft: "3px solid #E8DCC8", paddingLeft: "1.25rem" }}
                            >
                                &ldquo;{item.text}&rdquo;
                            </p>

                            <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #F9F6F1" }}>
                                <div>
                                    <p className="font-sans font-bold text-base" style={{ color: "#1c1917" }}>{item.name}</p>
                                    <p className="font-sans text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: "#7FAFC6" }}>{item.context}</p>
                                </div>
                                <span
                                    className="font-sans text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full"
                                    style={{ background: "#F9F6F1", color: "#7F9C84", border: "1px solid #E8DCC8" }}
                                >
                                    {item.tag}
                                </span>
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
                        <Heart className="w-8 h-8 mx-auto mb-6" style={{ color: "#F3A79A" }} />
                        <h2
                            className="font-serif font-bold mb-5 leading-tight"
                            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#fff", letterSpacing: "-0.02em" }}
                        >
                            Ready to begin your own story?
                        </h2>
                        <p className="font-sans text-lg mb-10 opacity-80" style={{ color: "#E8DCC8" }}>
                            Every journey starts with a single step. Let&apos;s map out your route together.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-4 font-sans font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1"
                            style={{ background: "#F3A79A", color: "#fff", borderRadius: "9999px", boxShadow: "0 8px 30px rgba(243,167,154,0.35)" }}
                        >
                            Book Discovery Session <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
