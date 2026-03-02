"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Compass,
        title: "1-1 Coaching",
        subtitle: "Inner Navigation",
        description: "Personalized expeditions into the depths of your nervous system and subconscious.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
    },
    {
        icon: Sparkles,
        title: "Yoga & Nidra",
        subtitle: "Somatic Embodiment",
        description: "Restorative practices to ground your energy and expand your somatic awareness.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
    },
    {
        icon: Heart,
        title: "Therapy",
        subtitle: "Healing Waypoints",
        description: "Compassionate support for navigating life's complex transitions and emotional landscapes.",
        image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200"
    }
];

export default function Expeditions() {
    return (
        <section className="py-24 px-6 bg-stone-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">The Routes</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight tracking-tight text-gradient">Available Expeditions</h2>
                    <p className="font-sans text-stone-600 text-lg max-w-xl mx-auto">
                        Choose the mode of exploration that best suits your current location on your inner map.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors" />
                                <div className="absolute top-6 left-6">
                                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-stone-900 shadow-sm">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 space-y-4">
                                <span className="font-sans text-[10px] uppercase tracking-widest text-accent-gold font-bold underline underline-offset-8">{service.subtitle}</span>
                                <h3 className="font-serif text-3xl text-stone-900 pt-2">{service.title}</h3>
                                <p className="font-sans text-stone-600 leading-relaxed">{service.description}</p>
                                <div className="pt-6 flex justify-between items-center border-t border-stone-100">
                                    <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">Ticket for Exploration</span>
                                    <Link href="/services" className="text-stone-900 hover:text-accent-gold flex items-center gap-2 group/btn">
                                        <span className="font-sans font-bold uppercase tracking-widest text-xs">Book Package</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
