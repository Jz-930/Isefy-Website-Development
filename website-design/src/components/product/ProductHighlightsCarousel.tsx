'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Highlight {
    title: string;
    desc: string;
    image: string;
}

interface ProductHighlightsCarouselProps {
    highlights: Highlight[];
}

export default function ProductHighlightsCarousel({ highlights }: ProductHighlightsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % highlights.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [highlights.length]);

    if (!highlights || highlights.length === 0) return null;

    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-gray-900 overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black">
                        <img
                            src={highlights[currentIndex].image}
                            alt={highlights[currentIndex].title}
                            className="w-full h-full object-cover opacity-60"
                        />
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className={`absolute inset-0 flex flex-col justify-center px-4 md:px-24 transition-all duration-500 ${currentIndex % 2 === 0 ? 'items-start text-left' : 'items-end text-right'
                        }`}>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="max-w-3xl"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                                {highlights[currentIndex].title}
                            </h3>
                            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed drop-shadow-md backdrop-blur-sm bg-black/10 rounded-xl p-2 md:p-0 md:bg-transparent">
                                {highlights[currentIndex].desc}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-3">
                {highlights.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
