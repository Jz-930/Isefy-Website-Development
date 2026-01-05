'use client';

import { useEffect, useState } from 'react';

interface Star {
    id: number;
    top: string;
    left: string;
    size: string;
    animationDuration: string;
    animationDelay: string;
    opacity: number;
}

export default function StarBackground() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const count = 25; // Reduced star count for less density
        const newStars: Star[] = [];

        for (let i = 0; i < count; i++) {
            newStars.push({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: `${Math.random() * 15 + 10}px`, // 10px to 25px for better visibility
                animationDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3,
            });
        }
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                        animationDuration: star.animationDuration,
                        animationDelay: star.animationDelay,
                    }}
                >
                    {/* Fine cross-shaped sparkle */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Horizontal beam - thin sharp line */}
                        <div
                            className="absolute bg-white"
                            style={{
                                width: '100%',
                                height: '8%',
                                boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)',
                            }}
                        />
                        {/* Vertical beam - thin sharp line */}
                        <div
                            className="absolute bg-white"
                            style={{
                                width: '8%',
                                height: '100%',
                                boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)',
                            }}
                        />
                        {/* Center bright point */}
                        <div
                            className="absolute bg-white rounded-full"
                            style={{
                                width: '20%',
                                height: '20%',
                                boxShadow: '0 0 4px 1px rgba(255, 255, 255, 1)',
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
