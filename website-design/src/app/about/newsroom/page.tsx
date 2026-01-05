import React from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
    title: 'Newsroom | ISEFY',
    description: 'Latest news, press releases, and updates from ISEFY.',
};

export default function NewsroomPage() {
    const newsItems = [
        {
            id: 1,
            title: 'ISEFY Included in "Top 10 Smart Home Securities of 2024"',
            date: 'December 10, 2024',
            category: 'Awards',
            image: '/images/hero.jpg', // Placeholder
            excerpt: 'We are honored to be recognized for our commitment to privacy and AI innovation in the home security space.',
        },
        {
            id: 2,
            title: 'Launching the New Pro Series: AI Detection Redefined',
            date: 'November 22, 2024',
            category: 'Product Launch',
            image: '/images/hero2.jpg', // Placeholder
            excerpt: 'Introducing our advanced Pro Series cameras with edge-based AI that detects packages, pets, and familiar faces instantly.',
        },
        {
            id: 3,
            title: 'ISEFY Partners with GreenEnergy for Sustainable Security',
            date: 'October 15, 2024',
            category: 'Partnership',
            image: '/images/hero.jpg', // Placeholder
            excerpt: 'A new collaboration to power our outdoor cameras with high-efficiency solar panels, reducing carbon footprint.',
        },
        {
            id: 4,
            title: 'Community Safety Initiative: Giving Back to Local Neighborhoods',
            date: 'September 05, 2024',
            category: 'Community',
            image: '/images/hero2.jpg', // Placeholder
            excerpt: 'We believe safety is a right. Learn about our new program donating security systems to community centers.',
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-isefy-dark-blue">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero2.jpg"
                        alt="Newsroom Hero"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-isefy-dark-blue via-isefy-dark-blue/60 to-transparent"></div>
                </div>
                <div className="container-custom relative z-10 text-center">
                    <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Press & Media</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Newsroom
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Stay up to date with the latest from ISEFY.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {newsItems.map((item) => (
                            <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-isefy-blue uppercase tracking-wide">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-400 mb-3">{item.date}</div>
                                    <h3 className="text-2xl font-bold text-gray-main mb-4 group-hover:text-isefy-blue transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-text leading-relaxed mb-6 flex-grow">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center text-isefy-purple font-bold group-hover:underline">
                                        Read Story <i className="fas fa-arrow-right ml-2 text-sm transform group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Contact / Media Kit (Optional small section) */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-gray-main mb-4">Media Inquiries</h2>
                    <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8">
                        For press kits, high-res assets, or interview requests, please contact our media team.
                    </p>
                    <a href="mailto:press@isefy.com" className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-main rounded-full font-bold hover:bg-gray-200 transition-colors">
                        <i className="fas fa-envelope mr-3"></i> press@isefy.com
                    </a>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
