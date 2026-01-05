import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-isefy-dark-blue">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero2.jpg"
                        alt="About ISEFY"
                        fill
                        className="object-cover opacity-50 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-isefy-dark-blue/40 to-isefy-dark-blue"></div>
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                        Innovating <span className="text-accent">Security</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        We are building the future of home protection, seamlessly blending advanced AI with intuitive design.
                    </p>
                </div>
            </section>

            {/* Mission & Vision - Split Layout */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero.jpg"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-isefy-purple font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
                            <h2 className="text-4xl font-bold text-gray-main mb-8">Empowering Safety Through Intelligence</h2>
                            <p className="text-lg text-gray-text mb-6 leading-relaxed">
                                Founded in 2024 in Toronto, Canada, ISEFY was born from a simple belief: security should be smart, simple, and accessible to everyone. We don't just build cameras; we build peace of mind.
                            </p>
                            <p className="text-lg text-gray-text mb-10 leading-relaxed">
                                Our commitment drives us to push the boundaries of what's possible in home security, integrating state-of-the-art AI detection with robust, privacy-focused hardware.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-100 pt-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-isefy-blue mb-2">24/7</h3>
                                    <p className="text-gray-500 font-medium">Protection</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-isefy-blue mb-2">100%</h3>
                                    <p className="text-gray-500 font-medium">Privacy Focused</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-main mb-4">Our Core Values</h2>
                        <p className="text-lg text-gray-text max-w-2xl mx-auto">The principles that guide every product we design and every line of code we write.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Innovation', icon: 'fa-lightbulb', desc: 'We constantly challenge the status quo to bring you the latest in security tech.' },
                            { title: 'Reliability', icon: 'fa-shield-alt', desc: 'Our products are built to withstand the elements and perform when it matters most.' },
                            { title: 'Simplicity', icon: 'fa-user-friends', desc: 'Technology should serve you, not complicate your life. Ease of use is our priority.' }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-isefy-blue text-2xl mb-6 group-hover:scale-110 group-hover:bg-isefy-blue group-hover:text-white transition-all duration-300">
                                    <i className={`fas ${value.icon}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-main mb-4">{value.title}</h3>
                                <p className="text-gray-text leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Resources / Entry Points */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Newsroom Entry */}
                        <a href="/about/newsroom" className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Image
                                src="/images/hero2.jpg" // Reusing hero2 as placeholder
                                alt="Newsroom"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <div className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Company News</div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">Newsroom</h3>
                                        <p className="text-gray-300 font-light">Latest updates, press releases, and stories.</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-accent group-hover:text-isefy-dark-blue transition-all">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* Privacy Policy Entry */}
                        <a href="/about/privacy" className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Image
                                src="/images/hero.jpg" // Reusing hero as placeholder
                                alt="Privacy Policy"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <div className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Legal & Trust</div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">Privacy Center</h3>
                                        <p className="text-gray-300 font-light">How we protect you and your data.</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-accent group-hover:text-isefy-dark-blue transition-all">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
