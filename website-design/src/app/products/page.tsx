'use client';

import { useState } from 'react';
import { products } from '../../data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Featured');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory || (activeCategory === 'Outdoor' && p.category === 'Outdoor')); // Expanded logic if needed

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-border">
                <div className="container-custom py-16 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-main">Shop ISEFY Products</h1>
                    <p className="text-gray-text max-w-2xl mx-auto text-lg">
                        Find the right security device for your home or business—smart tracking, AI detection, and clear video day or night.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-main mb-4 text-lg">Categories</h3>
                            <div className="space-y-2">
                                {['All', 'Outdoor', 'Indoor', 'Doorbells', 'Locks', 'Accessories'].map((cat) => (
                                    <label key={cat} className="flex items-center space-x-2 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={activeCategory === cat}
                                            onChange={() => setActiveCategory(cat)}
                                            className="w-4 h-4 text-isefy-blue border-gray-300 focus:ring-isefy-blue"
                                        />
                                        <span className={`text-gray-text group-hover:text-isefy-blue transition-colors ${activeCategory === cat ? 'font-semibold text-isefy-blue' : ''}`}>
                                            {cat === 'All' ? 'All Products' : cat === 'Doorbells' ? 'Video Doorbells' : cat === 'Locks' ? 'Smart Locks' : cat + ' Cameras'}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-main mb-4 text-lg">Filter By Features</h3>
                            <div className="space-y-2">
                                {['Wire-Free', 'Color Night Vision', 'Active Deterrence', 'Privacy Mode', 'Dual-Band Wi-Fi'].map((feature) => (
                                    <label key={feature} className="flex items-center space-x-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-isefy-blue rounded border-gray-300 focus:ring-isefy-blue"
                                        />
                                        <span className="text-gray-text group-hover:text-isefy-blue transition-colors">{feature}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-text">{filteredProducts.length} Products Found</span>
                            <select
                                className="border-gray-300 rounded-lg text-sm focus:ring-isefy-blue focus:border-isefy-blue text-gray-main"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option>Featured</option>
                                <option>New Arrivals</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Top Rated</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <Link key={product.id} href={`/products/${product.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="aspect-square relative bg-gray-100">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {product.badges && product.badges.length > 0 && (
                                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                {product.badges.map(badge => (
                                                    <span key={badge} className="bg-isefy-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                        {badge}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-1 mb-2">
                                            <i className="fas fa-star text-yellow-400 text-xs"></i>
                                            <span className="text-sm font-bold text-gray-main">{product.rating}</span>
                                            <span className="text-xs text-gray-text">({product.reviews})</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-main mb-2 group-hover:text-isefy-purple transition-colors">{product.name}</h3>
                                        <p className="text-sm text-gray-text mb-4 line-clamp-2">{product.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-gray-main">${product.price}</span>
                                            <button className="w-8 h-8 rounded-full bg-blue-50 text-isefy-blue flex items-center justify-center hover:bg-isefy-blue hover:text-white transition-all">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
