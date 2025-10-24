"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TrailerPage() {
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
          {/* <Link href="/about">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
            >
              About
            </Button>
          </Link> */}
          {/* <Button className="bg-blood hover:bg-blood/90 text-white font-bold">
                        Get Tickets
                    </Button> */}
        </div>
      </nav>

      {/* Main Content - Centered and Fits Screen */}
      <div className="h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        {/* <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-blood">
                        OFFICIAL TRAILER
                    </h1>
                    <div className="relative w-full max-w-2xl mx-auto mb-6">
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

        {/* YouTube Trailer Video Section */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-zinc-900">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9oqv2_0ZH9I?autoplay=0&rel=0&modestbranding=1&showinfo=0"
              title="One Klick Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

          {/* Trailer Description */}
          {/* <div className="mt-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blood">
              EXPERIENCE THE TERROR
            </h3>
            <p className="text-gray-300 text-lg">
              Watch the official trailer for One Klick - November 16, 2025
            </p>
          </div> */}
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
