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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="text-white hover:text-blood transition-colors">
              <ArrowLeft className="h-8 w-8" />
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-blood transition-colors"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
        <div className="flex gap-4">
          <Link href="/trailer">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
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
      <div className="h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        {/* <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-blood">
                        ABOUT THE FILM
                    </h1>
                    <div className="relative w-full max-w-2xl mx-auto mb-8">
                        <Image
                            src="./ONE_KLICK_TITLE_MAIN-FINAL.png"
                            alt="One Klick"
                            width={800}
                            height={200}
                            className="w-full h-auto mix-blend-screen"
                            priority
                        />
                    </div>
                </div> */}

        {/* Synopsis Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-zinc-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blood text-center">
              SYNOPSIS
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                An epic day of off-roading and scenic hiking turns to horror
                when three friends are attacked by an unseen foe. The motivation
                of the killer is unknown to the victims, but he is part of the
                most dangerous game of all… hunting humans.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                One by one, the predator aims to take out his prey before his
                time runs out. The friends must use their wits in order to
                survive the hunter as he moves in for the kill.
              </p>
              {/* Cast and Crew Information */}
              <div className="mt-8 pt-6 border-t border-zinc-700">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-blood mb-3">
                      DIRECTED BY
                    </h3>
                    <p className="text-gray-300">James Deveney</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blood mb-3">
                      STARRING
                    </h3>
                    <div className="text-gray-300 space-y-1">
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
          <nav className="text-center space-y-8">
            <Link
              href="/"
              className="block text-4xl font-bold text-white hover:text-blood transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-4xl font-bold text-white hover:text-blood transition-colors"
            >
              About
            </Link>
            <Link
              href="/trailer"
              className="block text-4xl font-bold text-white hover:text-blood transition-colors"
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
