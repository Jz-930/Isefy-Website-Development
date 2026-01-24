'use client';

import React from 'react';
import Image from 'next/image';

interface FeatureGridProps {
    features: {
        title: string;
        description: string;
        image?: string;
        icon?: string;
    }[];
}

const FeatureGridSection: React.FC<FeatureGridProps> = ({ features }) => {
    if (!features || features.length === 0) return null;

    // Split features into two columns for controlled masonry
    const leftColumn = features.filter((_, i) => i % 2 === 0);
    const rightColumn = features.filter((_, i) => i % 2 !== 0);

    // Function to determine aspect ratio based on index for visual variety
    const getAspectRatioClass = (index: number, isRight: boolean) => {
        // Pattern: [Tall, Squat, Square] repeating
        const patterns = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-square'];
        // Offset pattern for right column so they don't always match
        const offset = isRight ? 1 : 0;
        return patterns[(index + offset) % patterns.length];
    };

    const renderCard = (feature: any, idx: number, isRight: boolean) => (
        <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-8 border border-gray-100">
            {/* Image Area with dynamic aspect ratio */}
            <div className={`relative w-full ${getAspectRatioClass(idx, isRight)} bg-gray-200`}>
                <Image
                    src={feature.image || '/hero/homepage-slide-1.jpg'}
                    alt={feature.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Area */}
            <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                    {feature.description}
                </p>
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-base-dark mb-6">More Detailed Features</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Discover the advanced capabilities designed to enhance your security experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col">
                        {leftColumn.map((feature, idx) => renderCard(feature, idx, false))}
                    </div>

                    {/* Right Column - Staggered with margin */}
                    <div className="flex flex-col md:mt-16">
                        {rightColumn.map((feature, idx) => renderCard(feature, idx, true))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureGridSection;
