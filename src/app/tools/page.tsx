"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Download, Compass, ArrowRight, NotebookIcon as Notebook, PenTool, Lightbulb, Play, Music } from "lucide-react";

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-stone-50 overflow-hidden">
            <Navbar />

            {/* Archival Header */}
            <section className="relative pt-40 pb-20 px-6 bg-stone-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold mb-6 block">The Equipment Room</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-stone-100 leading-tight tracking-tight mb-8">
                            The <span className="italic text-stone-400">Archive</span>
                        </h1>
                        <p className="font-sans text-stone-300 text-xl font-light">Instruments for your ongoing exploration.</p>
                    </motion.div>
                </div>
            </section>

            {/* Featured: Journaling Guide */}
            <section className="py-24 px-6 border-b border-stone-200">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold">
                                <PenTool className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl text-stone-950 leading-tight">Release, Reflect, Reclaim.</h2>
                            <div className="space-y-6 font-sans text-stone-600 leading-relaxed text-lg">
                                <p>
                                    Are you wanting to reflect and begin journaling although you&apos;re not sure how to start?
                                    This guide is designed for you to ruminate about where you are currently and how small changes lead to big shifts.
                                </p>
                                <blockquote className="font-serif italic text-2xl border-l-4 border-stone-100 pl-6 py-2">
                                    &quot;Journaling is a great way to release emotions, reflect and deepen
                                    your awareness and understanding of yourself and the world.&quot;
                                </blockquote>
                            </div>
                            <button className="button-premium group">
                                Download Journaling Guide
                                <Download className="ml-3 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                        <div className="bg-stone-100 rounded-[40px] p-12 flex items-center justify-center shadow-inner relative">
                            <div className="absolute top-10 left-10 opacity-5">
                                <Compass className="w-64 h-64" />
                            </div>
                            <Notebook className="w-full h-full text-stone-200" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Meditation Section */}
            <section className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <span className="font-sans text-xs uppercase tracking-widest text-accent-gold font-bold">Restraint & Recovery</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-white">Yoga Nidra Tracks</h2>
                            <p className="font-sans text-stone-400 text-lg leading-relaxed">
                                Access deep rest on demand. Listen to my tracks online via Insight Timer and begin your somatic descent into stillness.
                            </p>
                            <button className="px-8 py-4 bg-white text-stone-950 font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-stone-50 transition-all flex items-center gap-3">
                                <Play className="w-4 h-4" />
                                Listen on Insight Timer
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Nervous System Reset", duration: "15 mins", icon: Music },
                                { title: "Coming Home to Self", duration: "20 mins", icon: Music },
                                { title: "Grounding Expedition", duration: "10 mins", icon: Music }
                            ].map((track, i) => (
                                <div key={i} className="bento-card bg-white/5 border-white/10 p-6 flex items-center justify-between group hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent-gold">
                                            <track.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl">{track.title}</h4>
                                            <p className="font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">{track.duration}</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-stone-700 group-hover:text-accent-gold transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Podcasts Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
                    <Lightbulb className="w-12 h-12 text-accent-gold" />
                    <h2 className="font-serif text-5xl text-stone-950">In the Ear of the Beholder</h2>
                    <p className="font-sans text-stone-600 text-xl leading-relaxed">
                        Deep dives into the sober journey and travel experiences. Featured on:
                    </p>
                    <div className="w-full space-y-4">
                        {[
                            { title: "Feel the Fear & Do it Anyway", show: "Sober Yoga Girl Podcast" },
                            { title: "Imagine the Possibility in Letting Alcohol Go", show: "Sober Yoga Girl Podcast" },
                            { title: "Authenticate Your Life", show: "Living outside the Lines Podcast" }
                        ].map((item, i) => (
                            <div key={i} className="bento-card bg-stone-50 border-stone-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-accent-gold">
                                <div className="text-center md:text-left space-y-2">
                                    <h3 className="font-serif text-2xl text-stone-900 italic">&quot;{item.title}&quot;</h3>
                                    <p className="font-sans text-xs text-stone-400 font-bold uppercase tracking-widest">{item.show}</p>
                                </div>
                                <button className="text-stone-950 hover:text-accent-gold font-sans font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                    Listen Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
