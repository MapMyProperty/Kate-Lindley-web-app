"use client";

import Link from "next/link";
import { Compass, Instagram, Mail, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-100 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Compass className="w-8 h-8 text-accent-gold transition-transform group-hover:rotate-45" />
                            <span className="font-serif text-2xl font-bold tracking-tighter uppercase text-white">Kate Lindley</span>
                        </Link>
                        <p className="font-sans text-stone-400 text-sm max-w-sm leading-relaxed">
                            Guiding sensitive souls through the complexities of their inner landscape. Embark on a journey to regulate your nervous system and reclaim yourself.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Mail, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="p-3 bg-stone-800 rounded-xl hover:bg-stone-700 transition-colors text-stone-300 hover:text-white">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans text-xs uppercase tracking-widest text-accent-gold font-bold">The Map</h4>
                        <nav className="flex flex-col gap-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Story", href: "/story" },
                                { name: "Services", href: "/services" },
                                { name: "Testimonials", href: "/testimonials" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link key={link.name} href={link.href} className="font-sans text-sm text-stone-400 hover:text-white transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans text-xs uppercase tracking-widest text-accent-gold font-bold">Basecamp</h4>
                        <div className="space-y-4 font-sans text-sm text-stone-400">
                            <p>Email: kate@lindley.com</p>
                            <p>Location: Travel-based / Remote</p>
                            <Link href="/contact" className="inline-block mt-4 text-accent-gold hover:underline underline-offset-4">
                                Book Discovery Session
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                    <p>© {new Date().getFullYear()} Kate Lindley. Documented by The Explorer.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Map</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Journey</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
