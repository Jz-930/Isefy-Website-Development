import Link from 'next/link';
import Image from 'next/image';
import { cloudPageContent } from '../../data/product_content';

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
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg tracking-tight">ISEFY Cloud</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Comprehensive Security Service Plan. Enhance your ISEFY products with advanced cloud computing.
                    </p>
                    <Link href="#pricing" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 inline-block">
                        View Plans
                    </Link>
                </div>
            </section>

            {/* Visual Features */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="section-title text-4xl font-bold text-slate-900 mb-6">Unlock Full Potential</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Experience the power of cloud computing with enhanced features designed for your security.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {cloudPageContent.visualFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                                <div className="relative h-64 w-full bg-slate-200">
                                    {/* Placeholder for feature image if it doesn't exist */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                        <span className="text-lg font-medium">Image: {feature.title}</span>
                                    </div>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Table */}
            <section id="pricing" className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="section-title text-4xl font-bold text-slate-900 mb-6">Choose Your Plan</h2>
                        <p className="text-lg text-slate-600">Flexible options tailored to your security needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                        {cloudPageContent.pricingPlans.map((plan, idx) => (
                            <div key={idx} className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col ${plan.highlight ? 'bg-white border-2 border-blue-500 shadow-2xl scale-105 z-10' : 'bg-white border border-slate-200 shadow-md hover:shadow-lg'}`}>
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                        Best Value
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <div className="flex items-start gap-3">
                                        <i className="fas fa-database text-blue-500 mt-1"></i>
                                        <span className="font-semibold text-slate-700">{plan.storage}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fas fa-robot text-blue-500 mt-1"></i>
                                        <span className="font-semibold text-slate-700">{plan.ai}</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <i className="fas fa-file-alt text-blue-500 mt-1"></i>
                                        <span className="text-slate-600">{plan.reporting}</span>
                                    </div>
                                    {plan.commonFeatures.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 text-slate-500">
                                            <i className="fas fa-check text-green-500 mt-1"></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center mt-auto">
                                    <p className="text-sm text-slate-400 italic mb-4">In-app purchase only</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Subscribe Guide */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="section-title text-4xl font-bold text-slate-900 mb-6">How to Subscribe</h2>
                        <p className="text-lg text-slate-600">Get started with ISEFY Cloud in 3 simple steps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cloudPageContent.subscriptionGuide.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="relative w-64 h-[500px] bg-slate-100 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden mb-8 transition-transform hover:-translate-y-2">
                                    {/* Phone Screen Placeholder */}
                                    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-4">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-2xl">
                                            {step.step}
                                        </div>
                                        <span className="text-slate-400 font-medium">Screen: {step.title}</span>
                                        {/* Fallback image */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-slate-50/50 backdrop-blur-sm">
                                            <p className="text-slate-800 font-bold px-4">{step.description}</p>
                                        </div>
                                        {/* Ideally a real screenshot would go here */}
                                        {/* <Image src={step.image} alt={step.title} fill className="object-cover" /> */}
                                    </div>
                                    {/* Phone Notch/Camera */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl"></div>
                                </div>
                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                                <p className="text-slate-600 max-w-xs">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
