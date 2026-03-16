"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with subtle parallax */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2070')" }}
                />
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
            </motion.div>

            {/* Content Container */}
            <div className="container relative z-10 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 border border-stone-100/30 rounded-full font-sans text-[10px] uppercase tracking-widest text-stone-100 font-bold backdrop-blur-md">
                            Your Basecamp for Inner Exploration
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-stone-100 leading-tight tracking-tight mb-8">
                            Explore with Kate<br />
                            <span className="italic text-stone-300">your inner and outer world</span>
                        </h1>
                        <p className="font-sans text-stone-200 text-base md:text-lg max-w-2xl mx-auto mb-12">
                            Welcome! Thank you for being here. My website is a hub for my coaching and yoga services, retreats, my travel and wellness blog and for you to learn a little bit more about me!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link href="/services" className="button-premium">
                            Explore Expeditions
                            <ArrowRight className="ml-3 w-4 h-4" />
                        </Link>
                        <Link
                            href="/story"
                            className="px-8 py-4 border border-stone-100/30 text-stone-100 font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
                        >
                            <Compass className="w-4 h-4" />
                            My Story
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <div className="flex items-center gap-4 text-stone-100/40">
                    <div className="h-[1px] w-12 bg-stone-100/40" />
                    <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Basecamp v1.0</span>
                </div>
            </div>
        </section>
    );
}
