"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Play, ChevronDown } from "lucide-react";
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
            COMING SOON
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"
            }`}
        >
          <ChevronDown className="h-12 w-12 animate-bounce text-blood" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/about">
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-blood hover:text-blood/80 transition-colors cursor-pointer">
                  THE TERROR BEGINS
                </h2>
              </Link>
              {/* <p className="text-xl text-gray-300 leading-relaxed mb-6">
                In a world where technology controls everything, One Klick can
                unleash unspeakable horror. When a group of friends stumbles
                upon a mysterious website, they trigger a chain of events that
                will test their survival instincts.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Every click brings them closer to the truth... and closer to
                their doom.
              </p> */}
              <Link href="/about">
                <Button className="bg-blood hover:bg-blood/90 text-white font-bold">
                  Read Full Synopsis
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stills%202-kWuTS2ymHOMxAu3avJi2RQUToCfWRl.jpg"
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
            WITNESS THE HORROR
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stills%2017-a9jBMy2bBZuYpXcw99NdaLBMw8lRpE.jpg"
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

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-blood">
            ARE YOU READY?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">Coming Soon</p>
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
