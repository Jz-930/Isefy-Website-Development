'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const HERO_CONTENT = [
    {
        image: '/images/hero.jpg',
        title: <>Complete Home Protection<br />by <span className="text-accent">ISEFY</span></>,
        description: "ISEFY's smart solution integrates all our products into a single app for seamless interaction."
    },
    {
        image: '/images/hero.jpg',
        title: <>Complete Home Protection<br />by <span className="text-accent">ISEFY</span></>,
        description: "ISEFY's smart solution integrates all our products into a single app for seamless interaction."
    },
    {
        image: '/images/hero.jpg',
        title: <>Complete Home Protection<br />by <span className="text-accent">ISEFY</span></>,
        description: "ISEFY's smart solution integrates all our products into a single app for seamless interaction."
    },
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

const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export default function HeroSection() {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 items, so we wrap the index
    const index = Math.abs(page % HERO_CONTENT.length);
    const content = HERO_CONTENT[index];

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const setIndex = (newIndex: number) => {
        const newDirection = newIndex > index ? 1 : -1;
        setPage([newIndex, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 3000);

        return () => clearInterval(interval);
    }, [page]);

    return (
        <section className="relative h-screen flex items-center bg-black overflow-hidden">
            {/* Background Images */}
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
                            src={content.image}
                            alt={`Hero Background ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={true}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full px-6 md:px-20 text-left pointer-events-none">
                <div className="max-w-xl md:max-w-none md:w-1/2 pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page} // Re-trigger animation on page change
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={textVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
                                {content.title}
                            </h1>
                            <p className="text-base md:text-lg text-gray-200 mb-10 font-light">
                                {content.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Static Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <Link href="/products" className="btn-primary !px-6 !py-2.5 !text-base">
                            View Products
                        </Link>
                        <Link href="/solutions" className="px-6 py-2.5 text-base rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-isefy-dark-blue transition-all text-center">
                            Explore Solutions
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {HERO_CONTENT.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-3 rounded-full transition-all duration-300 shadow-sm ${i === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80 w-3'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
