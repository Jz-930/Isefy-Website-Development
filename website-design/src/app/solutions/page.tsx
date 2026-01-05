import Link from 'next/link';
import Image from 'next/image';

export default function SolutionsPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-isefy-purple to-isefy-dark-blue"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Security solutions for every scenario</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Residential, retail, or SOHO—ISEFY integrates cameras, doorbells, smart locks, and cloud service into one app experience.
                    </p>
                </div>
            </section>

            {/* Scenarios Grid */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Residential */}
                        <div className="group border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all hover:border-blue-100">
                            <div className="h-48 relative rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src="/images/scenario-residential.png"
                                    alt="Residential"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Residential Home</h3>
                            <p className="text-slate-600 mb-6">
                                Comprehensive protection for your family and property.
                            </p>
                            <Link href="/solutions/residential" className="text-blue-600 font-semibold hover:tracking-wide transition-all">
                                Learn More &rarr;
                            </Link>
                        </div>

                        {/* Retail */}
                        <div className="group border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all hover:border-blue-100">
                            <div className="h-48 relative rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src="https://placehold.co/600x400/png?text=Retail+Store"
                                    alt="Retail Store"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Retail Store</h3>
                            <p className="text-slate-600 mb-6">
                                Deter suspicious activity and monitor key zones with smart tracking.
                            </p>
                            <Link href="/solutions/retail" className="text-blue-600 font-semibold hover:tracking-wide transition-all">
                                Learn More &rarr;
                            </Link>
                        </div>

                        {/* SOHO */}
                        <div className="group border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all hover:border-blue-100">
                            <div className="h-48 relative rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src="https://placehold.co/600x400/png?text=SOHO+Office"
                                    alt="SOHO Office"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">SOHO Office</h3>
                            <p className="text-slate-600 mb-6">
                                Secure your workspace and assets with easy‑to‑manage devices and access control.
                            </p>
                            <Link href="/solutions/soho" className="text-blue-600 font-semibold hover:tracking-wide transition-all">
                                Learn More &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Choose ISEFY Solutions?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 text-2xl">
                                <i className="fas fa-cubes"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">Unified Ecosystem</h3>
                            <p className="text-slate-600">Integrate all products into a single app for seamless interaction.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 text-2xl">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">Smart Control</h3>
                            <p className="text-slate-600">Flexible scheduling and customizable device actions.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 text-2xl">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">Quick Setup</h3>
                            <p className="text-slate-600">DIY‑friendly setup designed to get you protected fast.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
