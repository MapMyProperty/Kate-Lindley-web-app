"use client";

import { motion } from "framer-motion";
import { Trees, Compass, Sparkles } from "lucide-react";

const waypoints = [
    {
        icon: Trees,
        tag: "The Space",
        title: "Sacred Ground",
        desc: "A soft, non-judgmental territory where you can safely unburden your nervous system.",
        notes: ["Trauma-Informed", "Body Awareness", "Safe Expression"]
    },
    {
        icon: Compass,
        tag: "The Process",
        title: "Guided Passage",
        desc: "A collaborative roadmap to navigate your emotions and uncover your internal compass.",
        notes: ["Step-by-Step", "Emotional Safety", "Real Results"]
    },
    {
        icon: Sparkles,
        tag: "The Experience",
        title: "Inner Horizon",
        desc: "Living with confidence and calm, reclaiming authority over your own inner world.",
        notes: ["Confidence", "Joyful Living", "Self-Agency"]
    }
];

export default function Waypoints() {
    return (
        <section className="py-24 px-6 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">Our Path</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-tight tracking-tight">Three Foundational Waypoints</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {waypoints.map((waypoint, idx) => (
                        <motion.div
                            key={waypoint.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bento-card group h-full flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:text-stone-100 transition-colors">
                                <waypoint.icon className="w-6 h-6" />
                            </div>

                            <div className="space-y-4 mb-8">
                                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">{waypoint.tag}</span>
                                <h3 className="font-serif text-3xl text-stone-900">{waypoint.title}</h3>
                                <p className="font-sans text-stone-600 leading-relaxed">{waypoint.desc}</p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-stone-50">
                                <ul className="space-y-3">
                                    {waypoint.notes.map((note) => (
                                        <li key={note} className="flex items-center gap-3 font-sans text-xs text-stone-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
