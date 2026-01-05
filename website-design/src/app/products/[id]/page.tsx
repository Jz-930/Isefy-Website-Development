import { products } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.slug,
    }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.slug === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <section className="pt-24 pb-16 border-b border-gray-100">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Gallery Placeholder */}
                    <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center h-[500px]">
                        <img src={product.gallery && product.gallery.length > 0 ? product.gallery[0] : product.image} alt={product.name} className="max-h-full object-contain" />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col h-full justify-center">
                        <div className="text-isefy-purple font-bold tracking-wider uppercase mb-2 text-sm">{product.category} Series</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-isefy-dark-blue mb-4">{product.name}</h1>
                        <p className="text-xl text-gray-text mb-8 italic">"{product.tagline}"</p>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                            <div className="flex items-center text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? '' : 'text-gray-300'}`}></i>
                                ))}
                                <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <div className="text-gray-600 mb-8 leading-relaxed text-lg space-y-4">
                            {product.longDesc && product.longDesc.map((desc, idx) => (
                                <p key={idx}>{desc}</p>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <button className="btn btn-primary flex-1 py-4 text-lg">Add to Cart</button>
                            <button className="btn border border-isefy-purple text-isefy-purple flex-1 py-4 text-lg hover:bg-isefy-purple hover:text-white">Buy Now</button>
                        </div>

                        {/* Upsell */}
                        <div className="mt-8 bg-blue-50 p-4 rounded-xl flex items-center gap-4 border border-blue-100">
                            <div className="bg-isefy-blue text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-cloud"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-isefy-dark-blue">Add ISEFY Cloud</h4>
                                <p className="text-xs text-gray-600">30-day history & unlimited storage from $2.99/mo.</p>
                            </div>
                            <input type="checkbox" className="ml-auto w-5 h-5 text-isefy-purple rounded focus:ring-isefy-purple" />
                        </div>
                    </div>
                </div>
                {/* Gallery */}
                {product.gallery && product.gallery.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {product.gallery.map((img, index) => (
                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                                <img src={img} alt={`Gallery ${index}`} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* 2. Key Highlights */}
            <section className="section bg-white">
                <div className="container-custom">
                    <h2 className="text-center text-3xl font-bold text-isefy-dark-blue mb-16">Features that Matter</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {product.highlights && product.highlights.map((highlight, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center">
                                {/* Check if highlight has icon property if strictly typed, or assume it does if data is consistent. Adding minimal check per lint */}
                                <div className="text-4xl text-isefy-blue mb-4">
                                    <i className={`fas fa-${(highlight as any).icon || 'check'}`}></i>
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-slate-800">{highlight.title}</h3>
                                <p className="text-slate-600">{highlight.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Specs Section */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-center text-3xl font-bold text-isefy-dark-blue mb-12">Tech Specs</h2>
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden max-w-4xl mx-auto">
                        <table className="w-full">
                            <tbody>
                                {Object.entries(product.specs).map(([key, value], idx) => (
                                    <tr key={key} className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <td className="p-5 font-semibold text-gray-700 capitalize w-1/3">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                                        <td className="p-5 text-gray-600">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. What's in the box */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-isefy-dark-blue mb-8">What's in the Box</h2>
                            <ul className="space-y-4">
                                {product.boxContent ? product.boxContent.map((item, i) => (
                                    <li key={i} className="flex items-center text-lg text-gray-700 border-b border-gray-100 pb-2">
                                        <span className="text-isefy-purple mr-4">0{i + 1}</span>
                                        {item}
                                    </li>
                                )) : <p>Package content info unavailable.</p>}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img src="/images/box-content.png" alt="In the box" className="rounded-xl shadow-lg border border-gray-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="section bg-gray-50">
                <div className="container-custom max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl font-bold text-isefy-dark-blue mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {product.faqs ? product.faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-isefy-dark-blue">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )) : <p>No FAQs available for this product.</p>}
                    </div>
                </div>
            </section>

            {/* Bottom Buy CTA */}
            <section className="py-12 bg-isefy-dark-blue text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to secure your home?</h2>
                <Link href="#" className="btn bg-white text-isefy-dark-blue font-bold px-12 py-4 hover:bg-gray-100">
                    Buy {product.name} Now
                </Link>
            </section>
        </div>
    );
}
