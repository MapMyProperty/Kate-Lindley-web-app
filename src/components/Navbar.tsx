"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Compass, Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Story", href: "/story" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled ? "bg-stone-50/80 backdrop-blur-xl border-b border-stone-200 py-4 shadow-sm" : "bg-transparent py-8"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.6, ease: "anticipate" }}
                    >
                        <Compass className={cn("w-7 h-7 transition-colors", scrolled ? "text-stone-900" : "text-stone-100")} />
                    </motion.div>
                    <span className={cn(
                        "font-serif text-xl font-bold tracking-tighter transition-colors uppercase",
                        scrolled ? "text-stone-900" : "text-stone-100"
                    )}>
                        Kate Lindley
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-sans text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group",
                                scrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-300 hover:text-stone-100"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className={cn(
                            "p-2 rounded-full border transition-all",
                            scrolled ? "border-stone-200 text-stone-600 hover:bg-stone-100" : "border-stone-100/20 text-stone-300 hover:bg-white/10"
                        )}
                    >
                        <Instagram className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn("md:hidden transition-colors", scrolled ? "text-stone-900" : "text-stone-100")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-stone-950 flex flex-col items-center justify-center gap-12 md:hidden"
                    >
                        <div className="absolute top-8 right-6">
                            <button onClick={() => setIsOpen(false)} className="text-white">
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="font-serif text-4xl font-light text-stone-100 hover:text-accent-gold transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
