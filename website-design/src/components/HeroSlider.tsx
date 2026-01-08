'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const HERO_IMAGES = [
    '/images/hero.jpg',
    '/images/hero.jpg',
    '/images/hero.jpg',
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 1,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 1,
    }),
};

export default function HeroSlider() {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, so we wrap the index
    const imageIndex = Math.abs(page % HERO_IMAGES.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const setIndex = (index: number) => {
        const newDirection = index > imageIndex ? 1 : -1;
        setPage([index, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 3000);

        return () => clearInterval(interval);
    }, [page]);

    return (
        <>
            <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={HERO_IMAGES[imageIndex]}
                            alt={`Hero Background ${imageIndex + 1}`}
                            fill
                            className="object-cover"
                            priority={true}
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Subtle overlay for text readability - moved outside AnimatePresence to always show */}
                <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {HERO_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setIndex(index)}
                        className={`h-3 rounded-full transition-all duration-300 shadow-sm ${index === (imageIndex) ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80 w-3'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
}
