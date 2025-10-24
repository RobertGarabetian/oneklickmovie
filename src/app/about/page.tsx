"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="h-screen w-screen overflow-hidden bg-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-3 md:p-6">
                <div className="flex items-center gap-2 md:gap-4">
                    <Link href="/">
                        <button className="text-white hover:text-blood transition-colors">
                            <ArrowLeft className="h-6 w-6 md:h-8 md:w-8" />
                        </button>
                    </Link>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white hover:text-blood transition-colors"
                    >
                        <Menu className="h-6 w-6 md:h-8 md:w-8" />
                    </button>
                </div>
                <div className="flex gap-2 md:gap-4">
                    <Link href="/trailer">
                        <Button
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all text-sm md:text-base px-3 py-2 md:px-6 md:py-3"
                        >
                            Watch Trailer
                        </Button>
                    </Link>
                    {/* <Button className="bg-blood hover:bg-blood/90 text-white font-bold">
                        Get Tickets
                    </Button> */}
                </div>
            </nav>

            {/* Main Content - Centered and Fits Screen */}
            <div className="h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-16 md:pt-0">
                {/* Synopsis Section */}
                <div className="max-w-4xl mx-auto w-full">
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-800">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blood text-center">
                            SYNOPSIS
                        </h2>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 md:mb-4">
                                An epic day of off-roading and scenic hiking turns to horror
                                when three friends are attacked by an unseen foe. The motivation
                                of the killer is unknown to the victims, but he is part of the
                                most dangerous game of all… hunting humans.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 md:mb-4">
                                One by one, the predator aims to take out his prey before his
                                time runs out. The friends must use their wits in order to
                                survive the hunter as he moves in for the kill.
                            </p>
                            {/* Cast and Crew Information */}
                            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-zinc-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold text-blood mb-2 md:mb-3">
                                            DIRECTED BY
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-300">James Deveney</p>
                                        <h3 className="text-base md:text-lg font-bold text-blood mb-2 md:mb-3 mt-4">
                                            PRODUCED BY
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-300">Sara Beko</p>
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-bold text-blood mb-2 md:mb-3">
                                            STARRING
                                        </h3>
                                        <div className="text-sm md:text-base text-gray-300 space-y-1">
                                            <p>Jewelianna Ramos-Ortiz</p>
                                            <p>Vinny Balbo</p>
                                            <p>Nathan Kayn</p>
                                            <p>Justin Ortiz</p>
                                            <p>Bobby C. King</p>
                                            <p>Zinnett Hendrix</p>
                                            <p>Léa Cochet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
                    {/* <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-white text-4xl"
                    >
                        ×
                    </button> */}
                    <nav className="text-center space-y-6 md:space-y-8">
                        <Link
                            href="/"
                            className="block text-3xl md:text-4xl font-bold text-white hover:text-blood transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block text-3xl md:text-4xl font-bold text-white hover:text-blood transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/trailer"
                            className="block text-3xl md:text-4xl font-bold text-white hover:text-blood transition-colors"
                        >
                            Trailer
                        </Link>
                        {/* <a
                            href="#"
                            className="block text-4xl font-bold text-white hover:text-blood transition-colors"
                        >
                            Tickets
                        </a> */}
                    </nav>
                </div>
            )}
        </div>
    );
}
