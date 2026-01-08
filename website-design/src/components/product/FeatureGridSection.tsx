'use client';

import React from 'react';
import Image from 'next/image';

// This component is for the "Reference Image 2" style: small stacked cards/grid.
// Since the user provided "Key Selling Points" (Primary) and the standard "Features" (Secondary),
// we might iterate primarily on the Key Selling Points.
// However, if there are secondary features not in the big list, we display them here.

// For now, I'll allow this to take generic features or just reuse the Highlight/Icons from page.tsx logic
// but styled as Cards with Images as requested ("Small图堆叠排放").

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

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <h2 className="text-center text-3xl font-bold text-isefy-dark-blue mb-16">More Features</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            {/* Card Image Area - half height roughly or square? "Small tile stacking" */}
                            {/* Reference image 2 shows square-ish graphical icons/images on top, text below. */}
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                {feature.image ? (
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-isefy-blue text-5xl">
                                        <i className={`fas fa-${feature.icon || 'star'}`}></i>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGridSection;
