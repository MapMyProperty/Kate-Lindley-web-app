"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
                        className="absolute inset-0 bg-cover bg-bottom"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2070')" }}
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
                            <span className="block text-[10px] uppercase tracking-[0.4em] font-bold mb-4" style={{ color: "#F2C6A0" }}>Let&apos;s Connect</span>
                            <h1 className="font-serif font-bold leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#ffffff", letterSpacing: "-0.02em" }}>
                                Get in <em style={{ fontWeight: 300, fontStyle: "italic" }}>Touch</em>
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

            {/* ── CONTACT BODY ── */}
            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <p className="font-sans text-lg leading-relaxed" style={{ color: "#57534e" }}>
                                Whether you have a question, want to learn more about working together, or are ready to take the first step — I&apos;d love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Mail,
                                    label: "Email",
                                    value: "kate@lindley.com",
                                    href: "mailto:kate@lindley.com"
                                },
                                {
                                    icon: Instagram,
                                    label: "Instagram",
                                    value: "@katelindley",
                                    href: "https://instagram.com/katelindley"
                                },
                                {
                                    icon: MapPin,
                                    label: "Based in",
                                    value: "Maldives · Remote Worldwide",
                                    href: null
                                }
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-5 group">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                                        style={{ background: "linear-gradient(135deg, #7FAFC6, #7F9C84)", color: "#fff" }}
                                    >
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-widest font-bold mb-0.5" style={{ color: "#a8a29e" }}>{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="font-sans text-lg font-medium hover:underline underline-offset-4 transition-colors" style={{ color: "#1c1917" }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-sans text-lg font-medium" style={{ color: "#1c1917" }}>{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative card */}
                        <div
                            className="p-8 rounded-2xl"
                            style={{ background: "linear-gradient(135deg, #7FAFC6, #7F9C84)", color: "#fff" }}
                        >
                            <p className="font-sans text-sm opacity-70 uppercase tracking-widest font-bold mb-3">A note from Kate</p>
                            <p className="font-sans text-lg italic leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
                                &ldquo;I respond to all messages personally. Please allow 1–2 business days and I&apos;ll be in touch soon.&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        style={{
                            background: "#fff",
                            borderRadius: "2rem",
                            border: "1px solid #E8DCC8",
                            padding: "2.5rem",
                            boxShadow: "0 8px 40px rgba(127,175,198,0.10)"
                        }}
                    >
                        <h2 className="font-serif font-bold text-2xl mb-8" style={{ color: "#1c1917", letterSpacing: "-0.01em" }}>
                            Send a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {[
                                    { label: "First Name", placeholder: "Kate", type: "text" },
                                    { label: "Email Address", placeholder: "kate@example.com", type: "email" }
                                ].map(field => (
                                    <div key={field.label} className="space-y-2">
                                        <label className="block text-[9px] uppercase tracking-widest font-bold" style={{ color: "#a8a29e" }}>
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full py-3.5 px-5 outline-none transition-all font-sans text-sm"
                                            style={{
                                                background: "#F9F6F1",
                                                border: "1px solid #E8DCC8",
                                                borderRadius: "0.875rem",
                                                color: "#1c1917"
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[9px] uppercase tracking-widest font-bold" style={{ color: "#a8a29e" }}>
                                    I&apos;m interested in
                                </label>
                                <select
                                    className="w-full py-3.5 px-5 outline-none transition-all font-sans text-sm"
                                    style={{ background: "#F9F6F1", border: "1px solid #E8DCC8", borderRadius: "0.875rem", color: "#1c1917" }}
                                >
                                    <option value="">Select a service</option>
                                    <option>1-1 Coaching</option>
                                    <option>Yoga & Nidra</option>
                                    <option>Wellness Retreat</option>
                                    <option>General Enquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[9px] uppercase tracking-widest font-bold" style={{ color: "#a8a29e" }}>
                                    Your Message
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell me a little about where you are and what you're looking for..."
                                    className="w-full py-3.5 px-5 outline-none transition-all font-sans text-sm resize-none"
                                    style={{ background: "#F9F6F1", border: "1px solid #E8DCC8", borderRadius: "0.875rem", color: "#1c1917" }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-4 font-sans font-bold uppercase tracking-widest text-sm rounded-full transition-all hover:-translate-y-1"
                                style={{ background: "linear-gradient(135deg, #7FAFC6, #3d5a6b)", color: "#fff", boxShadow: "0 8px 24px rgba(127,175,198,0.30)" }}
                            >
                                Send Message <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
