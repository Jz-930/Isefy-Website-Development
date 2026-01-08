'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const MENU_CONTENT = {
    Products: [
        {
            category: 'Network Cameras',
            items: [
                { name: 'DualWatch Outdoor', image: '/images/product-cameras.png', tag: 'NEW', href: '/products/dualwatch-outdoor-camera' },
                { name: 'AlertFlash Deterrence', image: '/images/product-cameras.png', tag: 'BEST', href: '/products/alertflash-active-deterrence' },
                { name: 'GuardianEye PTZ', image: '/images/product-cameras.png', href: '/products/guardianeye-ptz' },
                { name: 'Voyager Indoor', image: '/images/product-cameras.png', href: '/products/voyager-indoor-pt' }
            ]
        },
        {
            category: 'Video Doorbell – Pivot',
            items: [
                { name: 'Pivot Video Doorbell', image: '/images/product-doorbell.png', tag: '2K', href: '/products/pivot-video-doorbell' }
            ]
        },
        {
            category: 'Smart Lock – Sentinel',
            items: [
                { name: 'Sentinel Smart Lock', image: '/images/product-lock.png', tag: 'NEW', href: '/products/sentinel-smart-lock' }
            ]
        }
    ],
    Solutions: [
        {
            category: 'Scenarios',
            items: [
                { name: 'Residential Security', image: '/images/scenario-residential.png', desc: 'Complete home protection', href: '/solutions/residential' },
                { name: 'Retail Business', image: '/images/scenario-retail.png', desc: 'Secure your shop', href: '/solutions/retail' },
                { name: 'SOHO / Office', image: '/images/scenario-soho.png', desc: 'Smart office monitoring', href: '/solutions/soho' }
            ]
        }
    ]
};

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Products', href: '/products', hasMenu: true },
        { name: 'Solutions', href: '/solutions', hasMenu: true },
        { name: 'App', href: '/app' },
        { name: 'Cloud', href: '/cloud' },
        { name: 'Support', href: '/support' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header
            className="fixed top-0 w-full h-20 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all"
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="container-custom flex justify-between items-center w-full h-full relative">
                <Link href="/" className="logo flex-shrink-0 z-50">
                    <Image src="/logo.png" alt="ISEFY Logo" width={150} height={45} className="h-[40px] w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:block h-full">
                    <ul className="flex gap-8 font-medium text-gray-main text-[15px] h-full items-center">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className="h-full flex items-center"
                                onMouseEnter={() => link.hasMenu && setActiveMenu(link.name)}
                            >
                                <Link
                                    href={link.href}
                                    className={`transition-colors h-full flex items-center border-b-2 border-transparent ${activeMenu === link.name ? 'text-isefy-purple border-isefy-purple' : 'hover:text-isefy-purple'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:flex gap-5 items-center text-gray-main text-lg">
                    <Link href="/shop" className="text-sm font-bold text-isefy-purple border border-isefy-purple px-4 py-1.5 rounded-full hover:bg-isefy-purple hover:text-white transition-colors mr-2">
                        Shop
                    </Link>
                    <i className="fas fa-search cursor-pointer hover:text-isefy-purple transition-colors"></i>
                    <Link href="/shop/cart"><i className="fas fa-shopping-cart cursor-pointer hover:text-isefy-purple transition-colors"></i></Link>
                    <Link href="/shop/account"><i className="fas fa-user cursor-pointer hover:text-isefy-purple transition-colors"></i></Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-gray-main text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu Overlay - Uses absolute positioning with explicit height to avoid backdrop-blur containing block issue */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: 'tween', duration: 0.25 }}
                        className="absolute top-full left-0 w-full h-[calc(100vh-5rem)] bg-white md:hidden px-6 py-8 overflow-y-auto shadow-xl border-t border-gray-100"
                        style={{ zIndex: 9999 }}
                    >
                        <ul className="flex flex-col space-y-4 text-lg font-semibold text-gray-700">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between py-3 px-4 rounded-xl bg-gray-50 hover:bg-isefy-purple/10 hover:text-isefy-purple transition-all"
                                    >
                                        <span>{link.name}</span>
                                        <i className="fas fa-chevron-right text-sm text-gray-400"></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Shop Button */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <Link
                                href="/shop"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center py-3 bg-isefy-purple text-white font-bold rounded-full hover:bg-isefy-purple/90 transition-colors"
                            >
                                Shop Now
                            </Link>
                        </div>

                        {/* Bottom Icons */}
                        <div className="mt-6 flex justify-center gap-8 text-2xl text-gray-500">
                            <Link href="/shop/cart" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-isefy-purple transition-colors">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                            <Link href="/shop/account" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-isefy-purple transition-colors">
                                <i className="fas fa-user"></i>
                            </Link>
                            <button className="hover:text-isefy-purple transition-colors">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mega Menu Dropdown (Desktop) */}
            <AnimatePresence>
                {activeMenu && MENU_CONTENT[activeMenu as keyof typeof MENU_CONTENT] && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-10"
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <div className="container-custom">
                            {/* Centered Content Layout */}
                            <div className="flex gap-12 justify-center max-w-6xl mx-auto">
                                {(MENU_CONTENT[activeMenu as keyof typeof MENU_CONTENT] as any[]).map((section, idx) => (
                                    <div key={idx} className="flex-1 max-w-sm">
                                        <h3 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2 text-center">
                                            {section.category}
                                        </h3>
                                        <div className={`grid gap-4 ${activeMenu === 'Solutions' ? 'grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
                                            {section.items.map((item: any, i: number) => (
                                                <Link href={item.href} key={i} className="group flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-transparent hover:border-isefy-blue/30 hover:shadow-lg transition-all duration-300">
                                                    <div className="relative w-24 h-24 mb-3">
                                                        {item.tag && (
                                                            <span className="absolute -top-1 -right-1 bg-isefy-blue text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-10">
                                                                {item.tag}
                                                            </span>
                                                        )}
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fill
                                                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <h4 className="font-semibold text-sm text-gray-700 group-hover:text-isefy-purple transition-colors mb-1 leading-tight">
                                                        {item.name}
                                                    </h4>
                                                    {item.desc && <p className="text-[10px] text-gray-400">{item.desc}</p>}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom CTA for Products */}
                            {activeMenu === 'Products' && (
                                <div className="mt-8 pt-4 border-t border-gray-100 text-center">
                                    <Link href="/products" className="text-isefy-blue hover:text-isefy-dark-blue font-semibold text-sm inline-flex items-center">
                                        Compare all products <i className="fas fa-arrow-right ml-2"></i>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
