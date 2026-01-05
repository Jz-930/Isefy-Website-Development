export function generateStaticParams() {
    return [
        { slug: 'privacy-policy' },
        { slug: 'terms-of-use' },
        { slug: 'refund-policy' },
        { slug: 'news' } // Added newsroom as a potential slug
    ];
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <main>
            <section className="bg-white py-24 min-h-screen">
                <div className="container-custom max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 text-slate-900">{title}</h1>
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            This is a placeholder for the {title}. Full legal text regarding {title} for ISEFY Technologies LTD. will be inserted here.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">1. Introduction</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">2. Data Collection</h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">3. Contact</h2>
                        <p>
                            If you have any questions about this {title}, please contact us at <a href="mailto:support@isefy.com" className="text-blue-600 hover:underline">support@isefy.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
