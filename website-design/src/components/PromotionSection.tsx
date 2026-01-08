'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    motion,
    useMotionValue,
    useAnimationFrame,
    PanInfo
} from 'motion/react';

const promotions = [
    {
        id: 1,
        title: 'Spring Season Sale',
        subtitle: 'Refresh your home security.',
        description: 'Up to 20% off outdoor cameras.',
        image: '/images/hero-banner.png',
        ctaText: 'Shop Deals',
        ctaLink: '/shop',
        color: 'from-slate-900/90',
    },
    {
        id: 2,
        title: 'Holiday Special',
        subtitle: 'Give the gift of safety.',
        description: 'Exclusive holiday bundles.',
        image: '/images/hero2.jpg',
        ctaText: 'View Offers',
        ctaLink: '/shop',
        color: 'from-[#2e2a3b]/90',
    },
    {
        id: 3,
        title: 'Tech Bundle',
        subtitle: 'Smart protection.',
        description: 'AI-powered NVR systems.',
        image: '/images/scenario-soho.png',
        ctaText: 'Explore',
        ctaLink: '/shop',
        color: 'from-[#1e293b]/90',
    },
];

const marqueePromotions = [...promotions, ...promotions, ...promotions, ...promotions];

const PromotionSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [cardStride, setCardStride] = useState(0); // Width of one card + gap
    const [viewportWidth, setViewportWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const x = useMotionValue(0);

    // Configuration for "Rhythm"
    const baseSpeed = 0.5;
    const maxSpeed = 2.5; // Fast movement
    const minSpeed = 0.1; // Slow dwell

    useEffect(() => {
        if (containerRef.current) {
            const updateMetrics = () => {
                if (containerRef.current) {
                    const totalWidth = containerRef.current.scrollWidth;
                    const vWidth = window.innerWidth;

                    // Total width of 4 sets. One set width = total / 4
                    const singleSetWidth = totalWidth / 4;

                    // One set has 3 cards.
                    // So card stride (card + gap) = singleSetWidth / 3
                    // Note: This logic assumes gap is consistent. 
                    // Our gap is 2rem (32px).
                    // Let's rely on calculation:
                    const calculatedStride = singleSetWidth / 3;

                    setContentWidth(singleSetWidth);
                    setCardStride(calculatedStride);
                    setViewportWidth(vWidth);
                }
            }

            updateMetrics();
            // Wait for images/layout?
            setTimeout(updateMetrics, 100);
            window.addEventListener('resize', updateMetrics);
            return () => window.removeEventListener('resize', updateMetrics);
        }
    }, []);

    // Simplified Constant Speed Logic
    const speed = 0.8; // Slightly faster constant speed

    useAnimationFrame((t, delta) => {
        if (!isDragging && contentWidth > 0) {
            // Constant movement
            let newX = x.get() - speed * (delta / 16);

            if (newX <= -contentWidth) {
                newX += contentWidth;
            }
            x.set(newX);
        }
    });

    const onDragStart = () => {
        setIsDragging(true);
    };

    const onDragEnd = () => {
        setIsDragging(false);
    };

    const onPan = (event: Event, info: PanInfo) => {
        if (contentWidth > 0) {
            let newX = x.get() + info.delta.x;
            if (newX > 0) {
                newX -= contentWidth;
            } else if (newX <= -contentWidth) {
                newX += contentWidth;
            }
            x.set(newX);
        }
    };


    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container-custom mb-10 flex justify-between items-end">
                <div className="max-w-2xl">
                    <h2 className="section-title text-4xl font-bold text-gray-main mb-4">Seasonal Promotions</h2>
                    <p className="text-gray-500 text-lg">Exclusive limited-time offers to secure your world.</p>
                </div>
            </div>

            <div className="relative w-full cursor-grab active:cursor-grabbing">
                {/* Gradient Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                <motion.div
                    ref={containerRef}
                    className="flex gap-8 pl-4 pr-4 w-max"
                    style={{ x }}
                    onPan={onPan}
                    onPanStart={onDragStart}
                    onPanEnd={onDragEnd}
                >
                    {marqueePromotions.map((promo, idx) => (
                        <motion.div
                            key={`${promo.id}-${idx}`}
                            className="relative w-[85vw] md:w-[700px] lg:w-[900px] h-[350px] md:h-[500px] shrink-0 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group select-none"
                        >
                            <Image
                                src={promo.image}
                                alt={promo.title}
                                fill
                                draggable={false}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} via-transparent to-transparent flex flex-col justify-center p-8 md:p-14`}>
                                <div className="max-w-lg transform transition-transform duration-300 group-hover:translate-x-2">
                                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold mb-4 border border-white/10 shadow-sm">
                                        Limited Offer
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
                                        {promo.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-normal opacity-90">
                                        {promo.subtitle}
                                    </p>
                                    <Link
                                        href={promo.ctaLink}
                                        className="inline-flex items-center justify-center px-8 py-3 bg-white/90 text-slate-900 rounded-full font-bold text-base hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
                                    >
                                        {promo.ctaText}
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PromotionSection;
