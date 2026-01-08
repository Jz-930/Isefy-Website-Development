import Link from 'next/link';
import Image from 'next/image';

export default function CloudPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero.jpg"
                        alt="Cloud Service Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
                </div>

                <div className="container-custom relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg tracking-tight">ISEFY Protect <span className="text-blue-400 font-light">(Cloud)</span></h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Comprehensive Security Service Plan. Enhance your ISEFY products with advanced cloud computing.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
                        View Plans
                    </button>
                </div>
            </section>

            {/* Introduction & Why Cloud */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="section-title text-4xl font-bold text-slate-900 mb-6">Why Cloud?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            ISEFY Protect is a subscription service that enhances your ISEFY products with advanced cloud computing technology, providing upgraded security features and a smarter, more reliable protection experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'fa-cloud', title: 'Cloud Storage', desc: 'Secure off-site backup.', color: 'from-blue-500 to-cyan-500' },
                            { icon: 'fa-history', title: '30 Days History', desc: 'Review past events anytime.', color: 'from-purple-500 to-indigo-500' },
                            { icon: 'fa-infinity', title: 'Unlimited Storage', desc: 'Never run out of space.', color: 'from-emerald-500 to-teal-500' },
                            { icon: 'fa-robot', title: 'Enhanced AI', desc: 'Smarter detection accuracy.', color: 'from-orange-500 to-amber-500' },
                            { icon: 'fa-share-alt', title: 'Device Sharing', desc: 'Share with up to 20 people.', color: 'from-pink-500 to-rose-500' },
                            { icon: 'fa-file-download', title: 'Remote Download', desc: 'Save clips from anywhere.', color: 'from-violet-500 to-purple-500' },
                            { icon: 'fa-heartbeat', title: 'Health Guard', desc: 'Monitor device status.', color: 'from-red-500 to-rose-600' },
                            { icon: 'fa-shield-alt', title: 'Security Report', desc: 'Daily security insights.', color: 'from-sky-500 to-blue-600' }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100/50 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                    <i className={`fas ${item.icon} text-2xl`}></i>
                                </div>
                                <h3 className="font-bold text-xl text-slate-800 mb-3 text-center">{item.title}</h3>
                                <p className="text-sm text-slate-500 text-center leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plans Placeholder */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="container-custom text-center">
                    <h2 className="section-title mb-8">Choose Your Plan</h2>
                    <div className="max-w-2xl mx-auto p-8 border-2 border-dashed border-gray-300 rounded-3xl bg-white/50">
                        <p className="text-slate-500 italic">
                            Plan names, pricing, and region availability will be inserted here once finalized.
                        </p>
                    </div>
                </div>
            </section>

            {/* Voucher Guide */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="section-title text-left mb-6">Have a Voucher Code?</h2>
                            <p className="text-slate-600 mb-8">Easily redeem your cloud service voucher in the app.</p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Log in to the ISEFY App</h4>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Go to the Cloud tab</h4>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Enter your voucher code and redeem</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                            <Image
                                src="/images/cloud-services.png"
                                alt="Voucher Redemption"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
