"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCard {
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
}

const products: ProductCard[] = [
    {
        title: "Network Cameras",
        description: "Smart Tracking, Active Deterrence, Smart Color Night Vision, and AI detection help you stay protected day and night.",
        image: "/images/product-cameras.png",
        link: "/products?category=Outdoor",
        linkText: "View Collection"
    },
    {
        title: "Video Doorbell – Pivot",
        description: "30° pan lens + smart tracking, PIR + AI human & loitering detection, and a chime that works as a Wi‑Fi extender.",
        image: "/images/product-doorbell.png",
        link: "/products/pivot-video-doorbell",
        linkText: "Learn More"
    },
    {
        title: "Smart Lock – Sentinel",
        description: "Unlock in seconds with instant biometrics, and manage access through a Wi‑Fi enabled mobile app with real‑time alerts.",
        image: "/images/product-lock.png",
        link: "/products/sentinel-smart-lock",
        linkText: "Learn More"
    }
];

export default function ProductLineCards() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <div
                    key={product.title}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`
            group bg-white rounded-3xl overflow-hidden 
            hover:shadow-2xl transition-all duration-300 ease-out
            transform hover:-translate-y-1 border border-gray-100
            ${hoveredIndex !== null && hoveredIndex !== index
                            ? "blur-sm scale-[0.98] opacity-70"
                            : ""
                        }
          `}
                >
                    <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 text-gray-main group-hover:text-isefy-purple transition-colors">
                            {product.title}
                        </h3>
                        <p className="text-gray-text mb-6 leading-relaxed">
                            {product.description}
                        </p>
                        <Link
                            href={product.link}
                            className="inline-flex items-center font-semibold text-isefy-blue hover:text-isefy-dark-blue transition-colors"
                        >
                            {product.linkText} <i className="fas fa-arrow-right ml-2 text-sm"></i>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
