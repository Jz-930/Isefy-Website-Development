import React from 'react';
import ContactSection from '@/components/ContactSection';

export const metadata = {
    title: 'Privacy Policy | ISEFY',
    description: 'Learn how ISEFY collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
    return (
        <main>
            {/* Header / Title Section */}
            <section className="bg-slate-900 py-20 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-blue-200 text-lg">Last Updated: December 18, 2024</p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-gray-600 mb-12">
                            At ISEFY, your privacy is at the core of everything we build. We believe that protecting your home shouldn't mean compromising your personal data. This policy outlines exactly what we collect and how we use it.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-isefy-blue p-6 rounded-r-xl mb-12">
                            <h3 className="text-isefy-blue font-bold text-lg mt-0 mb-2">Our Privacy Promise</h3>
                            <p className="mb-0 text-gray-700">
                                Your video footage is yours alone. We do not access, watch, or sell your camera recordings. All video data is encrypted end-to-end.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-main mt-12 mb-6">1. Information We Collect</h2>
                        <p>We collect information to provide better services to all our users. This includes:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                            <li><strong>Account Information:</strong> Name, email address, and phone number when you create an account.</li>
                            <li><strong>Device Data:</strong> Model, serial number, and network status of your ISEFY devices.</li>
                            <li><strong>Usage Data:</strong> How you interact with our app (e.g., feature usage frequency) to improve user experience.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-main mt-12 mb-6">2. How We Use Information</h2>
                        <p className="text-gray-600 mb-6">
                            We use the information we collect to operate, charge for, and provide our Services. This typically involves:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                            <li>Providing customer support and troubleshooting.</li>
                            <li>Sending you technical notices, updates, and security alerts.</li>
                            <li>Detecting and preventing fraud and abuse of our systems.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-main mt-12 mb-6">3. Data Security</h2>
                        <p className="text-gray-600 mb-6">
                            We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                            <li>AES-256 encryption for all stored video footage.</li>
                            <li>TLS/SSL encryption for data in transit.</li>
                            <li>Strict access controls for our internal employees.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-main mt-12 mb-6">4. Your Rights</h2>
                        <p className="text-gray-600 mb-6">
                            You have the right to request access to your personal data, correct inaccurate data, or request deletion of your account and associated data at any time through the ISEFY app settings or by contacting support.
                        </p>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
