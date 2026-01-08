'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface KeyPointsProps {
    points: {
        title: string;
        description: string;
        whyBetter: string[];
        scenario: string;
        image?: string;
    }[];
}

const KeyFeaturesSection: React.FC<KeyPointsProps> = ({ points }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    if (!points || points.length === 0) return null;

    const activePoint = points[activeIndex];

    // Helper to switch to next slide
    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % points.length);
    };

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

            {/* CSS Animation for Fill Effect */}
            <style jsx global>{`
                @keyframes revealClip {
                    from { clip-path: inset(0 100% 0 0); }
                    to { clip-path: inset(0 0 0 0); }
                }
            `}</style>

            <div className="container-custom relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-isefy-dark-blue mb-4">Why It Stands Out</h2>
                    <p className="text-gray-500">Explore the key capabilities designed for your life.</p>
                </div>

                {/* 1. Chips Navigation as Timed Progress Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {points.map((point, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`relative px-8 py-3 rounded-full text-base font-bold transition-all duration-300 border overflow-hidden
                                    ${isActive
                                        ? 'border-isefy-dark-blue shadow-lg scale-105'
                                        : 'bg-white text-gray-400 border-gray-200 hover:border-isefy-blue hover:text-isefy-blue'
                                    }`}
                            >
                                {/* Invisible Text to set layout size */}
                                <span className={isActive ? 'opacity-0' : ''}>{getShortLabel(point.title)}</span>

                                {/* ACTIVE STATE OVERLAYS */}
                                {isActive && (
                                    <>
                                        {/* Base Layer: White Bg + Dark Text (Visible before fill covers it, technically redundant if clip path works perfectly, but good for safety) */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-white text-isefy-dark-blue">
                                            <span>{getShortLabel(point.title)}</span>
                                        </div>

                                        {/* Animation Layer: Blue Bg + White Text (Revealed via Clip Path) */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-isefy-dark-blue text-white"
                                            style={{
                                                animation: 'revealClip 5s linear forwards',
                                                animationPlayState: isPaused ? 'paused' : 'running'
                                            }}
                                            onAnimationEnd={handleNext}
                                        >
                                            <span>{getShortLabel(point.title)}</span>
                                        </div>
                                    </>
                                )}
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

                            {/* Why it's better */}
                            <div className="mb-8 bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                                <h4 className="text-sm font-bold text-isefy-purple uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-6 h-0.5 bg-isefy-purple block"></span>
                                    Why It's Better
                                </h4>
                                <ul className="space-y-3">
                                    {activePoint.whyBetter.map((reason, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                                                <i className="fas fa-check text-green-600 text-xs"></i>
                                            </div>
                                            <span className="text-gray-700">{reason}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Scenario */}
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-sm">
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    Real Life Scenario
                                </h4>
                                <p className="text-sm text-gray-600 italic leading-relaxed whitespace-pre-line pl-10 border-l-2 border-yellow-200 ml-4 py-1">
                                    {activePoint.scenario}
                                </p>
                            </div>
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
                            <Image
                                src={activePoint.image || '/images/hero-banner.png'}
                                alt={activePoint.title}
                                fill
                                className="object-cover"
                            />
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
