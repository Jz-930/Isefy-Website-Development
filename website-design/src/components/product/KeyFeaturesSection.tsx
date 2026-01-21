'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface KeyPointsProps {
    points: {
        title: string;
        description: string;
        whyBetter: string[];
        scenario: string;
        image?: string;
        video?: string;
    }[];
}

const KeyFeaturesSection: React.FC<KeyPointsProps> = ({ points }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-switch every 10 seconds
    useEffect(() => {
        if (isPaused || !points || points.length === 0) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % points.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [isPaused, points]);

    if (!points || points.length === 0) return null;

    const activePoint = points[activeIndex];

    const getShortLabel = (title: string) => {
        return title.split(/[:+]/)[0].trim();
    };

    return (
        <section
            className="py-24 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Blob Decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            {/* Top Fade Gradient for Smooth Blending */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

            {/* Dynamic Background Image Layer */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    style={{
                        maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)'
                    }}
                >
                    <Image
                        src={activePoint.image || '/images/hero-banner.png'}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <div className="container-custom relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-isefy-dark-blue mb-4">Why It Stands Out</h2>
                    <p className="text-gray-500">Explore the key capabilities designed for your life.</p>
                </div>

                {/* 1. Chips Navigation as Hover Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {points.map((point, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <button
                                key={idx}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => setActiveIndex(idx)}
                                className={`relative px-8 py-3 rounded-full text-base font-bold transition-all duration-300 border overflow-hidden
                                    ${isActive
                                        ? 'bg-isefy-dark-blue text-white border-isefy-dark-blue shadow-lg scale-105'
                                        : 'bg-white text-gray-400 border-gray-200 hover:border-isefy-blue hover:text-isefy-blue'
                                    }`}
                            >
                                <span>{getShortLabel(point.title)}</span>
                            </button>
                        );
                    })}
                </div>

                {/* 2. Content Display */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[550px]">

                    {/* Text Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-isefy-dark-blue mb-6 leading-tight">
                                {activePoint.title}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                                {activePoint.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Image Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="order-1 lg:order-2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white ring-1 ring-gray-100 transform hover:scale-[1.02] transition-transform duration-500"
                        >
                            {activePoint.video ? (
                                <video
                                    src={activePoint.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <Image
                                    src={activePoint.image || '/images/hero-banner.png'}
                                    alt={activePoint.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default KeyFeaturesSection;
