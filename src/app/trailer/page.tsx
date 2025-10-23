"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TrailerPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVideoClick = () => {
        if (isPlaying) {
            setShowControls(true);
            setTimeout(() => setShowControls(false), 3000);
        } else {
            togglePlay();
        }
    };

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
                    <Link href="/about">
                        <Button
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
                        >
                            About
                        </Button>
                    </Link>
                    <Button className="bg-blood hover:bg-blood/90 text-white font-bold">
                        Get Tickets
                    </Button>
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

                {/* Trailer Video Section */}
                <div className="max-w-4xl mx-auto w-full">
                    <div
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 cursor-pointer"
                        onMouseEnter={() => setShowControls(true)}
                        onMouseLeave={() => isPlaying && setShowControls(false)}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01488-Enhanced-NR-TynIsDoyHY2r5gjyZLzgiqET3efwka.jpg"
                            controls={false}
                            muted={isMuted}
                            onClick={handleVideoClick}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src="/ONEKLICK-Teaser.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Custom Video Controls Overlay */}
                        <div className={`absolute inset-0 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                            {/* Play/Pause Overlay */}
                            {!isPlaying && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <button
                                        onClick={togglePlay}
                                        className="bg-blood/80 hover:bg-blood text-white rounded-full p-6 transition-all duration-300 hover:scale-110"
                                    >
                                        <Play className="h-16 w-16 ml-2" />
                                    </button>
                                </div>
                            )}

                            {/* Controls Bar */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <div className="flex items-center justify-between">
                                    {/* Play/Pause Button */}
                                    <button
                                        onClick={togglePlay}
                                        className="bg-blood/80 hover:bg-blood text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                                    >
                                        {isPlaying ? (
                                            <Pause className="h-8 w-8" />
                                        ) : (
                                            <Play className="h-8 w-8 ml-1" />
                                        )}
                                    </button>

                                    {/* Volume Control */}
                                    <button
                                        onClick={toggleMute}
                                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="h-6 w-6" />
                                        ) : (
                                            <Volume2 className="h-6 w-6" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trailer Description */}
                    <div className="mt-8 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blood">
                            EXPERIENCE THE TERROR
                        </h3>

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
