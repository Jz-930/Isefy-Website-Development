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

    const [direction, setDirection] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % highlights.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [highlights.length, currentIndex]); // Reset timer on manual change

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let nextIndex = currentIndex + newDirection;
        if (nextIndex < 0) nextIndex = highlights.length - 1;
        if (nextIndex >= highlights.length) nextIndex = 0;
        setCurrentIndex(nextIndex);
    };

    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    if (!highlights || highlights.length === 0) return null;

    return (
        <section className="relative w-full h-[400px] md:h-[500px] bg-gray-900 overflow-hidden group">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -10000) {
                            paginate(1);
                        } else if (swipe > 10000) {
                            paginate(-1);
                        }
                    }}
                    className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black pointer-events-none">
                        <img
                            src={highlights[currentIndex].image}
                            alt={highlights[currentIndex].title}
                            className="w-full h-full object-cover opacity-60"
                            draggable="false"
                        />
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className={`absolute inset-0 flex flex-col justify-center px-4 md:px-24 transition-all duration-500 pointer-events-none ${currentIndex % 2 === 0 ? 'items-start text-left' : 'items-end text-right'
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
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Buttons (Optional - Good for desktop discoverability of slide) */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 hidden md:block z-10"
                onClick={() => paginate(-1)}
            >
                <i className="fas fa-chevron-left text-4xl"></i>
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 hidden md:block z-10"
                onClick={() => paginate(1)}
            >
                <i className="fas fa-chevron-right text-4xl"></i>
            </button>

        </section>
    );
}
