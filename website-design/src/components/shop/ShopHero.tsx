import Image from 'next/image';
import Link from 'next/link';

export default function ShopHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center bg-slate-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/banner_shop.png" // Fallback to banner_shop if dedicated not available, or hero.jpg
                    alt="Shop Hero"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl text-white">
                    <span className="inline-block py-1 px-3 rounded text-xs font-bold uppercase tracking-widest bg-blue-600 text-white mb-6">
                        Official Store
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Secure Your World <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            With Confidence
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                        Browse our complete range of smart security cameras, doorbells, and locks.
                        Enjoy free shipping on orders over $150 and 30-day money-back guarantee.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#products" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Shop All Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
