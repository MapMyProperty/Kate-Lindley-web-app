"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";

const testimonials = [
    {
        name: "Dima",
        location: "Sober Visionary",
        text: "Working with Kate has been transformational. Her ability to hold space for deep somatic work while maintaining a grounded, practical approach is rare. I feel more regulated and authentic than ever.",
        rating: 5,
        tag: "1-1 Coaching"
    },
    {
        name: "Emma",
        location: "Retreat Participant",
        text: "The Socotra retreat was the reset I didn't know I needed. Kate's guidance through the island's raw beauty helped me rediscover a sense of calm that I've carried back into my daily life.",
        rating: 5,
        tag: "Wellness Retreat"
    },
    {
        name: "Roshan",
        location: "Yoga Regular",
        text: "Kate's Yoga Nidra tracks are my go-to for deep rest. She has a way of guiding you into your body that feels safe and expansive. Highly recommend for anyone with a busy mind.",
        rating: 5,
        tag: "Yoga & Nidra"
    },
    {
        name: "Maria",
        location: "Therapy Client",
        text: "The therapy sessions with Kate helped me navigate a major life transition with grace. Her compassionate, creative approach allowed me to express things I couldn't put into words.",
        rating: 5,
        tag: "Drama Therapy"
    }
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Testimonials Header */}
            <section className="relative pt-40 pb-20 px-6 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold">Travel Records</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-stone-950 leading-tight tracking-tight mt-4">Shared Journeys</h1>
                        <p className="font-sans text-stone-600 text-xl max-w-2xl mx-auto mt-6 italic">
                            &quot;The path is made by walking.&quot; Here are some reflections from those who have traveled with me.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 md:columns-2 gap-8 space-y-8">
                        {testimonials.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="break-inside-avoid bento-card space-y-8 group hover:border-accent-gold transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-accent-gold border border-stone-100">
                                        <Quote className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                                        ))}
                                    </div>
                                </div>

                                <p className="font-serif text-2xl text-stone-800 leading-relaxed italic border-l-2 border-stone-100 pl-6">
                                    &quot;{item.text}&quot;
                                </p>

                                <div className="pt-6 border-t border-stone-50 flex items-center justify-between">
                                    <div>
                                        <p className="font-serif text-lg text-stone-900">{item.name}</p>
                                        <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                                            <MapPin className="w-3 h-3" />
                                            {item.location}
                                        </div>
                                    </div>
                                    <span className="font-sans text-[9px] uppercase tracking-widest text-stone-500 font-bold bg-stone-100 px-3 py-1 rounded-full">
                                        {item.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <div className="inline-block p-1 bg-stone-100 rounded-2xl mb-10">
                            <div className="px-8 py-10 bg-white rounded-xl border border-stone-200 shadow-sm space-y-6 max-w-2xl mx-auto">
                                <h3 className="font-serif text-3xl text-stone-900 italic">Ready to Begin Your Own Story?</h3>
                                <p className="font-sans text-stone-600">Every record starts with a single step. Let&apos;s map out your route together.</p>
                                <button className="button-premium">Book Discovery Session</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
