"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Instagram, ArrowRight, Compass } from "lucide-react";

export default function Arrival() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Branding & Info */}
                    <div className="space-y-10 lg:pr-12">
                        <div className="flex items-center gap-4">
                            <Compass className="w-10 h-10 text-accent-gold" />
                            <div className="h-[1px] w-12 bg-stone-200" />
                        </div>
                        <div className="space-y-4">
                            <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">The Final Waypoint</span>
                            <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight tracking-tight">Begin Your Descent</h2>
                        </div>
                        <p className="font-sans text-stone-600 text-lg leading-relaxed max-w-lg">
                            The most challenging expeditions aren&apos;t across continents, but within. Reach out to schedule your discovery call and begin your journey.
                        </p>

                        <div className="space-y-8 pt-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-stone-50 border border-stone-100 rounded-2xl flex items-center justify-center text-accent-gold group-hover:bg-stone-900 group-hover:text-stone-100 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Direct Record</p>
                                    <p className="font-serif text-xl text-stone-900">kate@lindley.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-stone-50 border border-stone-100 rounded-2xl flex items-center justify-center text-accent-gold group-hover:bg-stone-900 group-hover:text-stone-100 transition-colors">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Schedule Call</p>
                                    <p className="font-serif text-xl text-stone-900 underline decoration-accent-gold decoration-2 underline-offset-4 cursor-pointer">Book Discovery Session</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bento-card bg-stone-50/50 border-stone-200 shadow-xl p-10 lg:p-12 relative"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Kate Lindley"
                                        className="w-full bg-white border-stone-200 rounded-2xl py-4 px-6 focus:ring-accent-gold focus:border-accent-gold outline-none transition-all placeholder:text-stone-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="kate@example.com"
                                        className="w-full bg-white border-stone-200 rounded-2xl py-4 px-6 focus:ring-accent-gold focus:border-accent-gold outline-none transition-all placeholder:text-stone-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-2">Expedition Goal</label>
                                <select className="w-full bg-white border-stone-200 rounded-2xl py-4 px-6 focus:ring-accent-gold focus:border-accent-gold outline-none transition-all">
                                    <option>Select an Interest</option>
                                    <option>1-1 Coaching</option>
                                    <option>Yoga & Nidra</option>
                                    <option>Wellness Retreat</option>
                                    <option>Therapy</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold ml-2">Message Log</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your journey..."
                                    className="w-full bg-white border-stone-200 rounded-2xl py-4 px-6 focus:ring-accent-gold focus:border-accent-gold outline-none transition-all placeholder:text-stone-300 resize-none"
                                />
                            </div>

                            <button className="button-premium w-full group">
                                Submit Log Entry
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
