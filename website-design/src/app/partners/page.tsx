import Link from 'next/link';

export default function PartnersPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-isefy-dark-blue text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-isefy-purple to-isefy-dark-blue"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Build with ISEFY</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Whether you are a developer, distributor, or installer, join our ecosystem to create value together.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="#open-platform" className="btn-primary">
                            Open Platform
                        </Link>
                        <Link href="#distributor" className="btn-secondary">
                            Become a Partner
                        </Link>
                    </div>
                </div>
            </section>

            {/* Open Platform */}
            <section id="open-platform" className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="section-title text-left mb-6">ISEFY Open Platform</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Integration for your business and your home with ISEFY solutions. Unlock the full potential of our devices with robust APIs and SDKs.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'REST (HTTP) API',
                                    'Mobile SDK (iOS / Android)',
                                    'App/Client integration',
                                    'Web Service events'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                                        <i className="fas fa-code text-blue-600"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-colors">
                                Read Documentation
                            </button>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-2xl text-green-400 font-mono text-sm shadow-2xl">
                            <p className="opacity-50 mb-4">// Example API Request</p>
                            <p>
                                <span className="text-purple-400">GET</span> /api/v1/devices/status <span className="text-yellow-400">{'{'}</span>
                            </p>
                            <div className="pl-4">
                                <p><span className="text-blue-400">"device_id"</span>: <span className="text-orange-400">"dev_8823_xyz"</span>,</p>
                                <p><span className="text-blue-400">"token"</span>: <span className="text-orange-400">"auth_token_123"</span></p>
                            </div>
                            <p><span className="text-yellow-400">{'}'}</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Become a Distributor */}
            <section id="distributor" className="py-24 bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="section-title mb-8">Become a Distributor</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
                        Grow your business with ISEFY's competitive pricing, marketing support, and reliable supply chain.
                    </p>

                    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Sales Team</h3>
                        <div className="flex items-center justify-center space-x-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <a href="mailto:sales@isefy.com" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                                sales@isefy.com
                            </a>
                        </div>
                        <button className="w-full btn-primary">
                            Apply Now
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
