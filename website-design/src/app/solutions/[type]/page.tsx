import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return [
        { type: 'residential' },
        { type: 'retail' },
        { type: 'soho' },
    ];
}

const solutionData: any = {
    residential: {
        title: 'Residential Home Security',
        subtitle: 'Protect what matters most.',
        intro: 'Whether you live in an apartment or a large home, ISEFY helps you build a complete home protection system.',
        challenges: [
            {
                title: 'Doorstep Monitoring',
                desc: 'Visitors, deliveries, and suspicious lingering.',
                solution: 'Pivot Video Doorbell (30° pan + smart tracking + loitering detection)'
            },
            {
                title: 'Home Break‑ins',
                desc: 'Deterrence & access control.',
                solution: 'Sentinel Smart Lock + AlertFlash active deterrence (spotlight + siren + red/blue warning lights)'
            },
            {
                title: 'Kid/Pet Safety',
                desc: 'Indoor awareness without compromising privacy.',
                solution: 'Voyager Indoor Camera (Abnormal Sound Alarm + Privacy Mode)'
            }
        ],
        products: [
            { name: 'Pivot Doorbell', image: '/images/product-doorbell.png', link: '/products/pivot-video-doorbell' },
            { name: 'Sentinel Lock', image: '/images/product-lock.png', link: '/products/sentinel-smart-lock' },
            { name: 'Voyager Camera', image: '/images/product-cameras.png', link: '/products/voyager-indoor-pt' }
        ]
    },
    retail: {
        title: 'Retail Store Security',
        subtitle: 'Smart surveillance for smarter business.',
        intro: 'Protect inventory, monitor operations, and provide visible deterrence for after‑hours peace of mind.',
        challenges: [
            {
                title: 'Shoplifting',
                desc: 'High‑traffic zone monitoring.',
                solution: 'Outdoor/indoor cameras with smart tracking + human detection + custom detection regions'
            },
            {
                title: 'After‑hours incidents',
                desc: 'Proactive deterrence.',
                solution: 'Active deterrence (spotlight + siren + warning lights) with detection schedules'
            }
        ],
        products: [
            { name: 'AlertFlash Camera', image: '/images/product-cameras.png', link: '/products/alertflash-active-deterrence' },
            { name: 'DualWatch Camera', image: '/images/product-cameras.png', link: '/products/dualwatch-outdoor-camera' }
        ]
    },
    soho: {
        title: 'SOHO Office Security',
        subtitle: 'Professional security for small offices.',
        intro: 'Focus on your work while ISEFY keeps your office secure, day and night.',
        challenges: [
            {
                title: 'Access Control',
                desc: 'Managing employee/visitor entry.',
                solution: 'Sentinel Smart Lock with user management and access logs'
            },
            {
                title: 'After‑hours Monitoring',
                desc: 'Alerts only when needed.',
                solution: 'Detection schedules + instant motion alerts + cloud playback for remote review'
            }
        ],
        products: [
            { name: 'Sentinel Lock', image: '/images/product-lock.png', link: '/products/sentinel-smart-lock' },
            { name: 'GuardianEye PTZ', image: '/images/product-cameras.png', link: '/products/guardianeye-ptz' }
        ]
    }
}

export default async function SolutionDetail({ params }: { params: Promise<{ type: string }> }) {
    const { type } = await params;
    const data = solutionData[type];

    if (!data) {
        notFound();
    }

    return (
        <main>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-isefy-purple to-isefy-dark-blue"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* Pain Points & Solutions */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-16">Challenges & Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.challenges.map((item: any, idx: number) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                                <p className="text-slate-500 mb-4 text-sm">{item.desc}</p>
                                <div className="pt-4 border-t border-gray-200">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">ISEFY Solution</span>
                                    <p className="text-slate-700 font-medium mt-1">{item.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended Products */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-16">Recommended Setup</h2>
                    <div className="flex flex-wrapjustify-center gap-8 justify-center">
                        {data.products.map((prod: any, idx: number) => (
                            <Link key={idx} href={prod.link} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all w-64 text-center">
                                <div className="relative w-40 h-40 mx-auto mb-6">
                                    <Image src={prod.image} alt={prod.name} fill className="object-contain" />
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{prod.name}</h4>
                                <span className="text-sm text-blue-500 font-medium">View Product</span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/shop" className="btn-primary">
                            Build Your Bundle
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
