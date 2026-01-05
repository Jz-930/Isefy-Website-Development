import { products } from '../../data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function ShopPage() {
    const bestSellers = products.filter(p => p.badges.includes('Best Seller') || p.rating >= 4.8).slice(0, 3);

    return (
        <main>
            {/* Hero Banner */}
            <section className="relative bg-blue-600 text-white rounded-none py-24 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner_shop.png"
                        alt="Seasonal Sale"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>
                <div className="container-custom relative z-10">
                    <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
                        Limited Time Offer
                    </span>
                    <h1 className="text-5xl font-bold mb-6">Seasonal Sale is Live</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                        Up to 30% off on Security Kits. Upgrade your home security today.
                    </p>
                    <Link href="/products" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg inline-block">
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-16">Shop by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {['Outdoor', 'Indoor', 'Doorbells', 'Accessories'].map((cat, idx) => (
                            <Link href={`/products?category=${cat}`} key={idx} className="group bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                                <div className="aspect-square relative mb-4 bg-white rounded-xl overflow-hidden p-6">
                                    <Image
                                        src={`/images/cat_${cat.toLowerCase()}.png`}
                                        alt={cat}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{cat}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Sellers */}
            <section className="py-24 bg-gray-50">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-16">Featured Best Sellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {bestSellers.map((product) => (
                            <Link key={product.id} href={`/products/${product.slug}`} className="group bg-white rounded-2xl p-4 hover:shadow-xl transition-all">
                                <div className="aspect-video relative rounded-xl overflow-hidden mb-6 bg-gray-100">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {product.badges[0] && (
                                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                                            {product.badges[0]}
                                        </span>
                                    )}
                                </div>
                                <div className="px-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                                            <div className="flex items-center space-x-1 text-sm text-yellow-500 mt-1">
                                                <i className="fas fa-star"></i>
                                                <span className="font-bold text-slate-700">{product.rating}</span>
                                            </div>
                                        </div>
                                        <span className="font-bold text-xl text-slate-900">${product.price}</span>
                                    </div>
                                    <button className="w-full mt-4 bg-gray-50 text-slate-600 py-2 rounded-lg font-medium group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
