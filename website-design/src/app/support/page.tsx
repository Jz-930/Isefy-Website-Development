import Link from 'next/link';

export default function SupportPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-isefy-purple to-slate-900"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">How can we help you?</h1>
                    <div className="max-w-2xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search for products or issues..."
                            className="w-full px-6 py-4 rounded-full bg-white text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-lg placeholder:text-slate-400"
                        />
                        <button className="absolute right-2 top-2 bg-blue-600 text-white w-10 h-10 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { icon: 'fa-question-circle', title: 'FAQ Center', desc: 'Find answers to common questions about your device.' },
                            { icon: 'fa-book', title: 'Setup Guides', desc: 'Step‑by‑step installation instructions and videos.' },
                            { icon: 'fa-download', title: 'Downloads', desc: 'User manuals, software, and firmware updates.' },
                            { icon: 'fa-shield-alt', title: 'Warranty & RMA', desc: 'Check warranty status or submit a return request.' },
                            { icon: 'fa-envelope', title: 'Contact Us', desc: 'Get in touch with our technical support team.' }
                        ].map((item, idx) => (
                            <Link href="#" key={idx} className="group p-6 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-blue-100 transition-all text-center">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <i className={`fas ${item.icon} text-xl`}></i>
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Topics */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="section-title mb-12">Popular Topics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: 'Wi-Fi Connection', icon: 'fa-wifi', color: 'bg-blue-50 text-blue-600' },
                            { title: 'Reset Camera', icon: 'fa-sync-alt', color: 'bg-purple-50 text-purple-600' },
                            { title: 'SD Card Format', icon: 'fa-sd-card', color: 'bg-orange-50 text-orange-600' },
                            { title: 'Cloud Plans', icon: 'fa-cloud', color: 'bg-sky-50 text-sky-600' },
                            { title: 'Share Device', icon: 'fa-share-alt', color: 'bg-teal-50 text-teal-600' }
                        ].map((topic, idx) => (
                            <Link href="#" key={idx} className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 flex flex-col items-center">
                                <div className={`w-20 h-20 rounded-full ${topic.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                    <i className={`fas ${topic.icon}`}></i>
                                </div>
                                <h3 className="font-bold text-slate-700 group-hover:text-slate-900 text-center leading-tight">{topic.title}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-16 pt-16 border-t border-gray-200">
                        <p className="text-slate-500 mb-2">Still need help?</p>
                        <a href="mailto:support@isefy.com" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                            support@isefy.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
