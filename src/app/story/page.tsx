"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Compass, Book, ArrowRight } from "lucide-react";

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-stone-50 overflow-hidden">
            <Navbar />

            {/* Travelogue Header */}
            <section className="relative pt-40 pb-20 px-6 bg-stone-200">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-accent-gold font-bold mb-6 block">The Traveler&apos;s Entry</span>
                        <h1 className="font-serif text-5xl md:text-8xl text-stone-950 leading-tight tracking-tight mb-8">
                            My <span className="italic text-stone-600">Story</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Journal Content */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                        <div className="md:col-span-8 space-y-12">
                            <article className="prose prose-stone prose-lg max-w-none">
                                <p className="font-serif text-3xl leading-relaxed text-stone-800 italic border-l-4 border-accent-gold pl-8 py-4 mb-12">
                                    &quot;Hello, I&apos;m Kate. I&apos;ve always been a traveler—not just of lands, but of landscapes. Specifically, the intricate and often untamed landscapes of the human nervous system.&quot;
                                </p>

                                <div className="space-y-8 font-sans text-stone-600 leading-relaxed text-xl">
                                    <p>
                                        My mission is to hold space for you to express yourself, as you are. To unburden your nervous system from the weights it was never meant to carry alone. My passion is working with 1-1 clients and creating safe spaces for people to share their lived experiences and move forward with their lives in a way which feels authentic and empowering.
                                    </p>
                                    <p>
                                        I qualify with a BA HONS in Drama Therapy, RYT 200 HR in Hatha and Vinyasa Yoga, and various specialized certifications in Kids Yoga and Trauma Informed practices. My journey has taken me through intense corporate environments to serene ashrams, and it&apos;s this blend of real-world pressure and internal peace that I bring to our sessions.
                                    </p>
                                    <p>
                                        Whether we are working through coaching, yoga, or therapy, the destination is always the same: **Coming Home to Yourself.**
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div className="md:col-span-4 space-y-12">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover"
                                    alt="Kate Lindley"
                                />
                            </div>
                            <div className="bento-card bg-stone-100/50 p-8 space-y-6">
                                <div className="flex items-center gap-3 text-accent-gold">
                                    <Book className="w-5 h-5" />
                                    <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Field Records</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-serif text-xl text-stone-900 italic">&quot;The most important trip you will ever take is the one into yourself.&quot;</p>
                                    <p className="font-sans text-xs text-stone-400 font-bold uppercase">— Log Entry 01</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Journey */}
            <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-10 opacity-10">
                    <Compass className="w-96 h-96 rotate-12" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
                    <h2 className="font-serif text-4xl md:text-6xl italic leading-tight">Are you ready to start <br />your expedition?</h2>
                    <p className="font-sans text-stone-400 text-lg">Every journey starts with a single check-in. Let&apos;s map out your route together.</p>
                    <button className="button-premium">
                        Book Discovery Session
                        <ArrowRight className="ml-3 w-4 h-4" />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
