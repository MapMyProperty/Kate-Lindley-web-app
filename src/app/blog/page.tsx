"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, Search, ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Logbook Header */}
            <section className="relative pt-40 pb-20 px-6 bg-stone-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10" />
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold mb-6 block">Chronicles of the Soul</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-white leading-tight tracking-tight">
                            The <span className="italic text-stone-400">Logbook</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Search & Categories */}
            <section className="py-12 bg-white border-b border-stone-200 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300" />
                        <input type="text" placeholder="Search the archives..." className="w-full bg-stone-50 border border-stone-200 rounded-full py-3 pl-12 pr-6 outline-none font-sans text-sm focus:border-accent-gold transition-colors" />
                    </div>
                    <div className="flex gap-8 font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                        {["All", "Coaching", "Yoga", "Retreats", "Sobriety"].map(cat => (
                            <button key={cat} className="hover:text-accent-gold transition-colors">{cat}</button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Post Grid Placeholder */}
            <section className="py-24 px-6 min-h-[60vh] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-accent-gold border border-stone-200 animate-pulse">
                        <Compass className="w-10 h-10" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl text-stone-900 italic">Journal Entries Pending...</h2>
                        <p className="font-sans text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">
                            I am currently recording my latest expeditions. Enter your email below to be the first to receive my log entries directly in your inbox.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Your email log..." className="flex-grow bg-white border border-stone-200 rounded-full py-4 px-8 outline-none font-sans text-sm shadow-sm focus:border-accent-gold transition-colors" />
                        <button className="button-premium">Stay Informed</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
