"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Arrival from "@/components/Arrival";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Contact Header */}
            <section className="relative pt-40 pb-20 px-6 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">Planned Arrival</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-stone-950 leading-tight tracking-tight mt-4">Check-In</h1>
                        <p className="font-sans text-stone-600 text-xl max-w-2xl mx-auto mt-6">
                            Whether you have a question or are ready to book your first expedition, reach out below.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Arrival />

            <section className="py-20 px-6 bg-white border-t border-stone-100">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-2">
                        <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">Write to</p>
                        <p className="font-serif text-xl text-stone-900">kate@lindley.com</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">Follow at</p>
                        <p className="font-serif text-xl text-stone-900">@katelindley</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">Based in</p>
                        <p className="font-serif text-xl text-stone-900">London / Global</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
