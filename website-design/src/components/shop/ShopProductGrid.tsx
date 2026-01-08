'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../data/products';

interface ShopProductGridProps {
    products: Product[];
}

const categories = ['All', 'Outdoor', 'Indoor', 'Doorbells', 'Locks', 'Accessories'];

export default function ShopProductGrid({ products }: ShopProductGridProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <section id="products" className="py-16 bg-white min-h-screen">
            <div className="container-custom">

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 sticky top-20 z-20 bg-whitepy-4 bg-white/90 backdrop-blur-md py-4 -mx-4 px-4 sticky-top-nav border-b border-gray-100">
                    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === cat
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 md:mt-0 text-gray-500 text-sm font-medium">
                        Showing {filteredProducts.length} Results
                    </div>
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="group relative bg-white border border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                {product.badges[0] && (
                                    <span className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                        {product.badges[0]}
                                    </span>
                                )}

                                {/* Image Container */}
                                <Link href={`/products/${product.slug}`}>
                                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Quick Add Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm">
                                            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs mb-2">
                                        <i className="fas fa-star"></i>
                                        <span className="text-slate-400 font-medium">({product.rating})</span>
                                    </div>
                                    <Link href={`/products/${product.slug}`}>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors clamp-1">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-1">{product.tagline || product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-slate-900">${product.price}</span>
                                        <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-24 text-center">
                        <div className="text-6xl text-gray-200 mb-4">
                            <i className="fas fa-search"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">No products found</h3>
                        <p className="text-slate-500">Try selecting a different category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
