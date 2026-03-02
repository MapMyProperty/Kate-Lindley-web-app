"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Droplet, ShieldCheck, Leaf, Compass, ArrowRight, Sparkles } from "lucide-react";

export default function ProvisionsPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Provisions Header */}
            <section className="relative pt-40 pb-20 px-6 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">The Stores</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-stone-950 leading-tight tracking-tight mt-4">Essential Provisions</h1>
                        <p className="font-sans text-stone-600 text-xl max-w-2xl mx-auto mt-6">
                            Curated botanical wisdom to support your nervous system and somatic wellbeing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why doTERRA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-square">
                            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="doTERRA Sourcing" />
                        </div>
                        <div className="md:w-1/2 space-y-8">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-4xl text-stone-900">The doTERRA Difference</h2>
                            <p className="font-sans text-stone-600 leading-relaxed text-lg">
                                I exclusively partner with doTERRA because of their commitment to CPTG (Certified Pure Tested Grade) standards. Every drop is rigorously tested for purity, potency, and consistency.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Ethically and sustainably sourced globally.",
                                    "Zero fillers, synthetics, or contaminants.",
                                    "Rigorous multi-stage laboratory testing."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 font-sans text-sm text-stone-500">
                                        <Leaf className="w-5 h-5 text-accent-sage flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Usage Methods */}
            <section className="py-20 bg-stone-100 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">Application</span>
                        <h2 className="font-serif text-5xl text-stone-900 leading-tight">How to Use Your Provisions</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: Compass, title: "Aromatic", desc: "Inhaling essential oils can instantly shift your emotional state and regulate your nervous system." },
                            { icon: Droplet, title: "Topical", desc: "Applying to pulse points allows for steady absorption and provides somatic support throughout the day." },
                            { icon: Sparkles, title: "Internal", desc: "Select CPTG oils can be used to support overall cellular health and internal wellness systems." }
                        ].map((method) => (
                            <div key={method.title} className="bento-card bg-white p-10 space-y-6">
                                <div className="w-16 h-16 bg-stone-50 border border-stone-100 rounded-full flex items-center justify-center mx-auto text-accent-gold">
                                    <method.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-3xl text-stone-900">{method.title}</h3>
                                <p className="font-sans text-stone-500 leading-relaxed">{method.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop CTA */}
            <section className="py-24 text-center px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="font-serif text-4xl md:text-6xl text-stone-950 leading-tight">Ready for Your First Expedition Kit?</h2>
                    <p className="font-sans text-stone-600 text-lg">Explore the full range of doTERRA oils and start your botanical journey today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="button-premium">Shop doTERRA</button>
                        <button className="px-8 py-4 bg-white border border-stone-200 text-stone-950 font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-stone-50 transition-all">Book Consultation</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
