import Link from 'next/link';
import Image from 'next/image';

export default function CloudPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-isefy-dark-blue text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-isefy-purple to-isefy-dark-blue"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-5xl font-bold mb-4">ISEFY Protect (Cloud)</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        Comprehensive Security Service Plan. Enhance your ISEFY products with advanced cloud computing.
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                        View Plans
                    </button>
                </div>
            </section>

            {/* Introduction & Why Cloud */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="section-title">Why Cloud?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            ISEFY Protect is a subscription service that enhances your ISEFY products with advanced cloud computing technology, providing upgraded security features and a smarter, more reliable protection experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: 'fa-cloud', title: 'Cloud Storage', desc: 'Secure off-site backup.' },
                            { icon: 'fa-history', title: '30 Days History', desc: 'Review past events anytime.' },
                            { icon: 'fa-infinity', title: 'Unlimited Storage', desc: 'Never run out of space.' },
                            { icon: 'fa-robot', title: 'Enhanced AI', desc: 'Smarter detection accuracy.' },
                            { icon: 'fa-share-alt', title: 'Device Sharing', desc: 'Share with up to 20 people.' },
                            { icon: 'fa-file-download', title: 'Remote Download', desc: 'Save clips from anywhere.' },
                            { icon: 'fa-heartbeat', title: 'Health Guard', desc: 'Monitor device status.' },
                            { icon: 'fa-shield-alt', title: 'Security Report', desc: 'Daily security insights.' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-gray-50 rounded-2xl text-center hover:bg-blue-50 transition-colors">
                                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mb-4">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
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
