import { products } from '@/data/products';
import { productContent } from '@/data/product_content';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import KeyFeaturesSection from '@/components/product/KeyFeaturesSection';
import FeatureGridSection from '@/components/product/FeatureGridSection';
import ProductHighlightsCarousel from '@/components/product/ProductHighlightsCarousel';
import ProductFAQ from '@/components/product/ProductFAQ';

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.slug,
    }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.slug === id);
    // Get extended rich content
    const extendedContent = productContent[id];

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <section className="pt-24 pb-16">
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

                        {/* UPSLELL HIDDEN PER REQUEST */}
                        {/* <div className="mt-8 bg-blue-50 p-4 rounded-xl flex items-center gap-4 border border-blue-100"> ... </div> */}
                    </div>
                </div>
            </section>

            {/* 2. Key Selling Points (Interactive Tabs) */}
            {extendedContent && extendedContent.keySellingPoints && (
                <KeyFeaturesSection points={extendedContent.keySellingPoints} />
            )}

            {/* 3. Secondary Features / Grid (If available, or fallback to Highlights from data/products) */}
            {extendedContent && extendedContent.secondaryFeatures ? (
                <FeatureGridSection features={extendedContent.secondaryFeatures} />
            ) : (
                /* Fallback to existing highlights if new rich content isn't fully populated for "secondary" */
                product.highlights && product.highlights.length > 0 && (
                    <ProductHighlightsCarousel highlights={product.highlights} />
                )
            )}

            {/* 4. Specs Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <h2 className="text-center text-3xl font-bold text-isefy-dark-blue mb-12">Tech Specs</h2>
                    <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto shadow-inner">
                        <table className="w-full">
                            <tbody>
                                {Object.entries(product.specs).map(([key, value], idx) => (
                                    <tr key={key} className={`border-b border-gray-200 ${idx === Object.entries(product.specs).length - 1 ? 'border-none' : ''}`}>
                                        <td className="p-4 font-bold text-gray-700 w-1/3 align-top">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                                        <td className="p-4 text-gray-600 align-top">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. What's in the box */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                        {/* Text Left */}
                        <div className="flex-1 order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-isefy-dark-blue mb-8">What's in the Box</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.boxContent ? product.boxContent.map((item, i) => (
                                    <li key={i} className="flex items-center text-base text-gray-700">
                                        <span className="w-8 h-8 rounded-full bg-isefy-blue/10 text-isefy-blue flex items-center justify-center mr-3 font-bold text-sm">
                                            {i + 1}
                                        </span>
                                        {item}
                                    </li>
                                )) : <p>Package content info unavailable.</p>}
                            </ul>
                        </div>
                        {/* Image Right */}
                        <div className="flex-1 order-1 md:order-2">
                            {/* Keep the placeholder box content image or the product image if generic */}
                            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <img src="/images/box-content.png" alt="In the box" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ (Accordion) */}
            {product.faqs && product.faqs.length > 0 && (
                <ProductFAQ faqs={product.faqs} />
            )}

            {/* Bottom Buy CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to secure your home?</h2>
                <Link href="#" className="btn bg-white text-isefy-dark-blue font-bold px-12 py-4 hover:bg-gray-100 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                    Buy {product.name} Now
                </Link>
            </section>
        </div>
    );
}
