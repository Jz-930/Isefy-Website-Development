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
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-base-dark mb-4">More Detailed Features</h2>
                    <p className="text-gray-500">Everything else you need to know.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-isefy-blue/10 flex items-center justify-center text-isefy-blue text-xl">
                                <i className={`fas fa-${feature.icon || 'check-circle'}`}></i>
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGridSection;
