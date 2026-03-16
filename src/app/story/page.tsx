"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Waves, Leaf, Sparkles, PersonStanding, Globe } from "lucide-react";

const storyChapters = [
    {
        label: "Origins",
        text: "I grew up in a small town just outside of Toronto, Canada, but I always felt a pull toward something bigger than the place I called home. From a young age, I was deeply curious about the world, different cultures, and the human experience. That curiosity eventually became a calling."
    },
    {
        label: "The Leap",
        text: "In 2011, I took a leap of faith and left Canada to begin living and working abroad. What started as a simple desire to explore quickly evolved into a life shaped by travel, growth, and transformation. Since then, I have lived in multiple countries, experienced diverse cultures, and learned that the most meaningful journeys are not only the ones that take us across the globe, but also the ones that take us deeper within ourselves."
    },
    {
        label: "The Present",
        text: "Today, I am living in the Maldives, where island life and the rhythm of the ocean offer daily reminders to slow down, stay present, and appreciate the beauty of simplicity."
    },
    {
        label: "The Lessons",
        text: "Like many meaningful journeys, my path has included both beautiful moments and difficult lessons. Through relationships and life experiences that challenged me, I was pushed to grow, reflect, and develop stronger boundaries and deeper self-awareness. These experiences ultimately strengthened my resilience and deepened my compassion for both myself and others."
    },
    {
        label: "Clarity",
        text: "In 2019, I made one of the most important decisions of my life — I chose to stop drinking alcohol. That decision marked the beginning of a new chapter rooted in clarity, self-respect, and intentional living. Letting go of alcohol opened the door to personal growth, healthier habits, and a deeper connection to my purpose."
    },
    {
        label: "Values",
        text: "Over time, my lifestyle naturally evolved to reflect my values. I adopted a vegan lifestyle out of compassion for animals, the environment, and a desire to live with greater awareness of how my choices impact the world around me."
    }
];

export default function StoryPage() {
    return (
        <main className="min-h-screen overflow-hidden" style={{ background: "#F9F6F1" }}>
            <Navbar />

            {/* ── HERO HEADER ── */}
            <section className="relative h-[70vh] md:h-[80vh] w-full flex items-end overflow-hidden">
                {/* Ocean background */}
                <motion.div
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2070')" }}
                    />
                    {/* Gradient wash */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(127,175,198,0.75) 0%, rgba(20,30,40,0.3) 60%, transparent 100%)" }} />
                </motion.div>

                {/* Header text */}
                <div className="relative z-10 w-full px-6 pb-14 md:pb-20">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                        >
                            <span
                                className="block text-[10px] uppercase tracking-[0.4em] font-bold mb-4"
                                style={{ color: "#F2C6A0" }}
                            >
                                Who I Am
                            </span>
                            <h1
                                className="font-serif font-bold leading-none mb-3"
                                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
                            >
                                My <em style={{ fontWeight: 300, fontStyle: "italic" }}>Story</em>
                            </h1>
                        </motion.div>
                    </div>
                </div>

                {/* Wave edge */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: "60px" }}>
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F9F6F1" />
                    </svg>
                </div>
            </section>

            {/* ── OPENING QUOTE ── */}
            <section className="px-6 py-16 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <motion.blockquote
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-sans text-2xl md:text-3xl leading-relaxed font-light"
                        style={{
                            color: "#3d5a6b",
                            borderLeft: "4px solid #F3A79A",
                            paddingLeft: "2rem",
                            fontStyle: "italic"
                        }}
                    >
                        &ldquo;Sometimes the most powerful journeys are the ones that transform us along the way.&rdquo;
                    </motion.blockquote>
                </div>
            </section>

            {/* ── STORY CHAPTERS ── */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                        {/* Vertical label column */}
                        <div className="hidden md:flex md:col-span-1 flex-col items-center pt-2">
                            <div
                                className="w-[2px] h-full min-h-[600px]"
                                style={{ background: "linear-gradient(to bottom, #7FAFC6, #F2C6A0)" }}
                            />
                        </div>

                        {/* Chapters */}
                        <div className="md:col-span-7 space-y-16">
                            {storyChapters.map((chapter, idx) => (
                                <motion.div
                                    key={chapter.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.7, delay: idx * 0.06 }}
                                    className="relative"
                                >
                                    <span
                                        className="block text-[9px] uppercase tracking-[0.35em] font-bold mb-3"
                                        style={{ color: "#7FAFC6" }}
                                    >
                                        {String(idx + 1).padStart(2, "0")} — {chapter.label}
                                    </span>
                                    <p
                                        className="font-sans text-lg leading-relaxed"
                                        style={{ color: "#4a4a4a" }}
                                    >
                                        {chapter.text}
                                    </p>
                                </motion.div>
                            ))}

                            {/* Explore with Kate closing */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="pt-4 border-t"
                                style={{ borderColor: "#E8DCC8" }}
                            >
                                <span
                                    className="block text-[9px] uppercase tracking-[0.35em] font-bold mb-3"
                                    style={{ color: "#7FAFC6" }}
                                >
                                    07 — The Mission
                                </span>
                                <p
                                    className="font-sans text-lg leading-relaxed mb-4"
                                    style={{ color: "#4a4a4a" }}
                                >
                                    Through travel, wellness practices, and personal reflection, I have come to understand that exploration is not only about discovering new places — it is also about discovering ourselves.
                                </p>
                                <p
                                    className="font-sans text-lg leading-relaxed"
                                    style={{ color: "#4a4a4a" }}
                                >
                                    <span className="font-semibold" style={{ color: "#3d5a6b" }}>Explore with Kate</span> was created from this belief. It is a space where travel, mindfulness, and personal growth intersect. My intention is to inspire others to explore both the outer world and their inner world with curiosity, courage, and an open heart.
                                </p>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="md:col-span-4 space-y-8">
                            {/* Photo */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="overflow-hidden"
                                style={{ borderRadius: "2rem", border: "4px solid #E8DCC8" }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                                    alt="Kate Lindley"
                                />
                            </motion.div>

                            {/* Values card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="p-8 space-y-5"
                                style={{
                                    background: "linear-gradient(135deg, #7FAFC6 0%, #7F9C84 100%)",
                                    borderRadius: "1.5rem",
                                    color: "#fff"
                                }}
                            >
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">At a Glance</p>
                                {[
                                    { icon: Waves, label: "Living in the Maldives" },
                                    { icon: Leaf, label: "Vegan lifestyle" },
                                    { icon: Sparkles, label: "Alcohol-free since 2019" },
                                    { icon: PersonStanding, label: "RYT 200HR Yoga" },
                                    { icon: Globe, label: "Lived in multiple countries" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-3 font-sans text-sm">
                                        <item.icon className="w-4 h-4 opacity-80 flex-shrink-0" />
                                        <span style={{ color: "rgba(255,255,255,0.92)" }}>{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Quote card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                className="p-8"
                                style={{
                                    background: "#fff",
                                    borderRadius: "1.5rem",
                                    border: "1px solid #E8DCC8",
                                    boxShadow: "0 4px 24px rgba(127,175,198,0.10)"
                                }}
                            >
                                <p className="font-sans text-lg italic leading-relaxed mb-4" style={{ color: "#3d5a6b" }}>
                                    &ldquo;The most important trip you will ever take is the one into yourself.&rdquo;
                                </p>
                                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#F3A79A" }}>— Kate Lindley</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA SECTION ── */}
            <section
                className="py-24 px-6 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3d5a6b 0%, #7FAFC6 100%)" }}
            >
                {/* Decorative waves */}
                <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 C200,180 600,20 800,100 L800,200 L0,200 Z" fill="white" />
                        <path d="M0,140 C200,80 600,160 800,140 L800,200 L0,200 Z" fill="white" opacity="0.5" />
                    </svg>
                </div>

                <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-5" style={{ color: "#F2C6A0" }}>
                            Begin Your Journey
                        </p>
                        <h2
                            className="font-serif font-bold mb-6 leading-tight"
                            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#ffffff", letterSpacing: "-0.02em" }}
                        >
                            Ready to explore your own path?
                        </h2>
                        <p className="font-sans text-lg mb-10 opacity-80" style={{ color: "#E8DCC8" }}>
                            Every journey starts with a single step. Let&apos;s map out your route together.
                        </p>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 px-10 py-4 font-sans font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1"
                            style={{
                                background: "#F3A79A",
                                color: "#fff",
                                borderRadius: "9999px",
                                boxShadow: "0 8px 30px rgba(243,167,154,0.35)"
                            }}
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
