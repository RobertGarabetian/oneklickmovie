"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Play, ChevronDown, Instagram, Youtube, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OneClickMovie() {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Show content after title animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-blood transition-colors"
        >
          <Menu className="h-8 w-8" />
        </button>
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

      {/* Hero Section with Title Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}

        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/trailer.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01488-Enhanced-NR-TynIsDoyHY2r5gjyZLzgiqET3efwka.jpg"
              alt="One Klick Movie Scene"
              fill
              className="object-cover"
            />
          </video>
          <div className="absolute inset-0 " />
        </div>

        {/* Animated Title */}
        <div className="relative z-30 text-center px-4">
          <div className="relative w-full max-w-6xl mx-auto animate-title-reveal">
            <Image
              src="./ONE_KLICK_TITLE_MAIN-FINAL.png"
              alt="One Klick"
              width={1600}
              height={400}
              className="w-full h-auto mix-blend-screen"
              priority
            />
          </div>
          <p
            className={`text-xl md:text-2xl font-bold mt-6 text-blood transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"
              }`}
          >
            DIRECTED BY JAMES DEVENEY
          </p>
          <p
            className={`text-2xl md:text-3xl font-bold mt-4 tracking-widest transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"
              }`}
          >
            NOVEMBER 16, 2025 6PM PST
          </p>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"
            }`}
        >
          <ChevronDown className="h-12 w-12 animate-bounce text-blood" />
        </div> */}
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/about">
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-blood hover:text-blood/80 transition-colors cursor-pointer">
                  YOUR TIMER BEGINS... NOW
                </h2>
              </Link>
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
              {/* <Link href="/about">
                <Button className="bg-blood hover:bg-blood/90 text-white font-bold">
                  Read Full Synopsis
                </Button>
              </Link> */}
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="./Stills2(1).jpg"
                alt="Horror scene"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center text-blood">
            WITNESS THE SPECTACLE
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="./Stills17(1).jpg"
                alt="Movie still 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stills%203-y8Cob2tq1mbSwE7UdbY5XBMsTFwwJ6.jpg"
                alt="Movie still 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01488-Enhanced-NR-TynIsDoyHY2r5gjyZLzgiqET3efwka.jpg"
                alt="Movie still 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cast & Crew Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center text-blood">
            CAST & CREW
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-800">
              <h3 className="text-2xl md:text-3xl font-bold text-blood mb-6">
                CREATIVE TEAM
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-blood mb-2">DIRECTED BY</h4>
                  <p className="text-gray-300 text-lg">James Deveney</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blood mb-2">PRODUCED BY</h4>
                  <p className="text-gray-300 text-lg">Sara Beko</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-zinc-800">
              <h3 className="text-2xl md:text-3xl font-bold text-blood mb-6">
                CAST
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-lg">Jewelianna Ramos-Ortiz</p>
                <p className="text-gray-300 text-lg">Vinny Balbo</p>
                <p className="text-gray-300 text-lg">Nathan Kayn</p>
                <p className="text-gray-300 text-lg">Justin Ortiz</p>
                <p className="text-gray-300 text-lg">Bobby C. King</p>
                <p className="text-gray-300 text-lg">Zinnett Hendrix</p>
                <p className="text-gray-300 text-lg">Léa Cochet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
            <a
              href="https://www.instagram.com/oneklickfilm/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 text-white hover:text-blood transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-zinc-800/50"
            >
              <Instagram className="h-6 w-6 sm:h-8 sm:w-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-lg font-semibold">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=9oqv2_0ZH9I"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 text-white hover:text-blood transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-zinc-800/50"
            >
              <Youtube className="h-6 w-6 sm:h-8 sm:w-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-lg font-semibold">YouTube</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61582805934472"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 text-white hover:text-blood transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-zinc-800/50"
            >
              <Facebook className="h-6 w-6 sm:h-8 sm:w-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-lg font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-blood">
            ARE YOU READY?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">November 16, 2025 6PM PST</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/trailer">
              <Button
                size="lg"
                className="bg-blood hover:bg-blood/90 text-white font-bold text-xl px-12 py-6"
              >
                Watch Trailer
              </Button>
            </Link>
            {/* <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-blood text-blood hover:bg-blood hover:text-white font-bold text-xl px-12 py-6"
            >
              Get Notified
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p className="text-sm">
            © 2025 One Klick. All rights reserved. | A Horror Experience
          </p>
        </div>
      </footer>

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
              onClick={() => setMenuOpen(false)}

              className="block text-4xl font-bold text-white hover:text-blood transition-colors"
            >
              Home
            </Link>
            {/* <Link
              href="/about"
              className="block text-4xl font-bold text-white hover:text-blood transition-colors"
            >
              About
            </Link> */}
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
