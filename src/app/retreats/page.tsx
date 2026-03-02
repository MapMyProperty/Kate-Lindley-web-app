"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, CreditCard, ArrowRight, Download, Trees, Sparkles, Compass } from "lucide-react";

export default function RetreatsPage() {
    return (
        <main className="min-h-screen bg-stone-50 overflow-hidden">
            <Navbar />

            {/* Retreat Header */}
            <section className="relative pt-48 pb-24 px-6 bg-stone-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30" />
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold mb-6 block">Annual Expedition</span>
                        <h1 className="font-serif text-6xl md:text-9xl text-stone-100 leading-tight tracking-tighter">
                            Base<span className="italic text-stone-400">Camp</span>
                        </h1>
                        <p className="font-sans text-stone-300 text-xl md:text-2xl italic font-light">
                            &quot;Socotra is the ideal place where life slows down, giving you a chance to reset and reconnect with the rawest parts of your nature.&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Retreat Details */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Info Side */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Trees className="w-10 h-10 text-accent-gold" />
                                    <div className="h-px w-12 bg-stone-200" />
                                </div>
                                <h2 className="font-serif text-5xl text-stone-950 leading-tight">Root to Rise in Socotra</h2>
                                <p className="font-sans text-stone-600 text-xl leading-relaxed">
                                    Experience the prehistoric beauty of Socotra Island through a curated 4-night journey of yoga, meditation, and deep somatic grounding.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bento-card border-none bg-stone-100 p-8 space-y-4">
                                    <Compass className="w-8 h-8 text-accent-gold" />
                                    <h3 className="font-serif text-2xl">Nature Immersion</h3>
                                    <p className="font-sans text-sm text-stone-500 leading-relaxed">Disconnect from modern noise and reconnect with the rhythm of the land.</p>
                                </div>
                                <div className="bento-card border-none bg-stone-100 p-8 space-y-4">
                                    <Sparkles className="w-8 h-8 text-accent-gold" />
                                    <h3 className="font-serif text-2xl">Daily Rituals</h3>
                                    <p className="font-sans text-sm text-stone-500 leading-relaxed">Morning yoga flows and sunset nidra sessions for complete restoration.</p>
                                </div>
                            </div>

                            <div className="prose prose-stone prose-lg max-w-none">
                                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                                    Our retreat is designed for the sensitive soul who seeks a raw and authentic encounter with both the world and themselves. Guided by Kate, you will explore the island&apos;s unique flora and fauna while utilizing somatic tools to regulate your system.
                                </p>
                            </div>
                        </div>

                        {/* Booking Side */}
                        <div className="lg:col-span-5 space-y-8 sticky top-32">
                            <div className="bento-card bg-white border-2 border-stone-100 p-10 space-y-10 shadow-xl">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-accent-gold group-hover:bg-stone-900 group-hover:text-white transition-all">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Departure</p>
                                            <p className="font-serif text-xl text-stone-900">Dec 12-16, 2025</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-accent-gold group-hover:bg-stone-900 group-hover:text-white transition-all">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Location</p>
                                            <p className="font-serif text-xl text-stone-900">Socotra Island, Yemen</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-accent-gold group-hover:bg-stone-900 group-hover:text-white transition-all">
                                            <CreditCard className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Full Ticket</p>
                                            <p className="font-serif text-xl text-stone-900">$2100 or 7700 AED</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-stone-50">
                                    <button className="button-premium w-full group">
                                        Download Brochure
                                        <Download className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                    </button>
                                    <button className="w-full py-4 bg-white border border-stone-200 text-stone-950 font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-stone-50 transition-all">
                                        Check-in for Availability
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
