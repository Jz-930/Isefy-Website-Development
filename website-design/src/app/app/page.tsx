import Link from 'next/link';
import Image from 'next/image';

export default function AppPage() {
    return (
        <main>
            {/* Hero */}
            {/* Hero */}
            <section className="bg-isefy-dark-blue text-white pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-isefy-purple/20 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Content */}
                        <div className="text-center lg:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-wider uppercase mb-6 border border-blue-500/30">
                                Total Control
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Your Home <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">In Your Pocket</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                                One intuitive app for everything. Monitor your smart cameras, answer the doorbell, and manage access—all from anywhere in the world.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-50 transition-all hover:-translate-y-1 shadow-lg shadow-white/5">
                                    <i className="fab fa-apple text-2xl"></i>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 leading-none mb-0.5">Download on the</div>
                                        <div className="text-base leading-none">App Store</div>
                                    </div>
                                </button>
                                <button className="bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-700 transition-all hover:-translate-y-1 shadow-lg shadow-black/20">
                                    <i className="fab fa-google-play text-2xl text-green-400"></i>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60 leading-none mb-0.5">Get it on</div>
                                        <div className="text-base leading-none">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Phone Mockup */}
                        <div className="relative mx-auto lg:mr-0 max-w-[320px] md:max-w-[380px]">
                            {/* Phone Frame */}
                            <div className="relative z-10 bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden aspect-[9/19] ring-1 ring-white/10">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-7 bg-slate-800 rounded-b-2xl z-20"></div>
                                {/* Image */}
                                <div className="relative w-full h-full bg-slate-800">
                                    <Image
                                        src="/images/app-interface.png"
                                        alt="ISEFY App Interface"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Elements / Decoration */}
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-dashed border-white/10 rounded-[3rem]"></div>
                            <div className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl animate-bounce duration-[3000ms]">
                                <i className="fas fa-shield-alt text-2xl text-green-400"></i>
                            </div>
                            <div className="absolute bottom-20 -left-12 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl animate-pulse">
                                <i className="fas fa-bell text-2xl text-yellow-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { title: 'Smart Color Night Vision', desc: 'Four smart night vision modes provide clear full‑color or black‑and‑white pictures even in complete darkness.' },
                            { title: 'Advanced AI Detection', desc: 'Proprietary algorithms enhance accuracy, minimize false alerts, and elevate home security.' },
                            { title: 'Detection Region', desc: 'Tap and select grids to set motion detection areas.' },
                            { title: 'Variable Voice Talk', desc: 'Interact with visitors or dissuade unwelcome people while protecting your privacy.' },
                            { title: 'Active Deterrence', desc: 'Built‑in spotlight and 110dB siren activate when intrusion is detected.' },
                            { title: 'Smart Control', desc: 'Create scenes, set routines, and schedule defense that adapts to your life.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex flex-col">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    <i className="fas fa-check text-xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Setup Guide */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="section-title">4 Easy Steps to Security</h2>
                        <p className="text-slate-500">Setup in minutes!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Download App', desc: 'Get the ISEFY app from the store.' },
                            { step: '02', title: 'Register', desc: 'Create your secure account.' },
                            { step: '03', title: 'Add Device', desc: 'Scan the QR code on the device.' },
                            { step: '04', title: 'Connect', desc: 'Follow in‑app prompts to connect Wi‑Fi.' }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center relative">
                                <div className="text-6xl font-black text-blue-100 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2 relative z-10">{item.title}</h3>
                                <p className="text-slate-600 relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
