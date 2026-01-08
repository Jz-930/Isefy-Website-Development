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
        subtitle: '20% Off Cameras',
        image: '/images/hero-banner.png',
        ctaLink: '#products',
        bg: 'bg-slate-900',
    },
    {
        id: 2,
        title: 'Bundle & Save',
        subtitle: 'Complete Protection',
        image: '/images/hero2.jpg',
        ctaLink: '#products',
        bg: 'bg-blue-900',
    },
    {
        id: 3,
        title: 'New Arrivals',
        subtitle: 'Latest Tech',
        image: '/images/scenario-soho.png',
        ctaLink: '#products',
        bg: 'bg-indigo-900',
    },
];

const marqueePromotions = [...promotions, ...promotions, ...promotions, ...promotions];

export default function ShopPromoCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const x = useMotionValue(0);
    const speed = 0.5;

    useEffect(() => {
        if (containerRef.current) {
            const updateMetrics = () => {
                if (containerRef.current) {
                    setContentWidth(containerRef.current.scrollWidth / 4);
                }
            }
            updateMetrics();
            window.addEventListener('resize', updateMetrics);
            return () => window.removeEventListener('resize', updateMetrics);
        }
    }, []);

    useAnimationFrame((t, delta) => {
        if (!isDragging && contentWidth > 0) {
            let newX = x.get() - speed * (delta / 16);
            if (newX <= -contentWidth) newX += contentWidth;
            x.set(newX);
        }
    });

    const onPan = (event: Event, info: PanInfo) => {
        if (contentWidth > 0) {
            let newX = x.get() + info.delta.x;
            if (newX > 0) newX -= contentWidth;
            else if (newX <= -contentWidth) newX += contentWidth;
            x.set(newX);
        }
    };

    return (
        <section className="py-12 bg-gray-50 overflow-hidden border-b border-gray-200">
            <div className="container-custom mb-8 flex justify-between items-end">
                <h2 className="text-2xl font-bold text-slate-900">Current Offers</h2>
                <Link href="#products" className="text-blue-600 font-semibold hover:underline">View All &rarr;</Link>
            </div>

            <div className="relative w-full cursor-grab active:cursor-grabbing">
                <motion.div
                    ref={containerRef}
                    className="flex gap-6 pl-4 w-max"
                    style={{ x }}
                    onPan={onPan}
                    onPanStart={() => setIsDragging(true)}
                    onPanEnd={() => setIsDragging(false)}
                >
                    {marqueePromotions.map((promo, idx) => (
                        <div
                            key={`${promo.id}-${idx}`}
                            className={`relative w-[300px] md:w-[400px] h-[200px] shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group select-none ${promo.bg}`}
                        >
                            <Image
                                src={promo.image}
                                alt={promo.title}
                                fill
                                draggable={false}
                                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="bg-white/20 backdrop-blur-sm self-start text-white text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase tracking-wider">Limited Time</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{promo.title}</h3>
                                <p className="text-gray-200 text-sm font-medium">{promo.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
