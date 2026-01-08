import React from 'react';

export default function ContactSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                    {/* Abstract Background Decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-isefy-purple rounded-full blur-[100px] opacity-30 pointer-events-none -mr-40 -mt-40"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-isefy-blue rounded-full blur-[100px] opacity-30 pointer-events-none -ml-20 -mb-20"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 lg:p-20 text-white relative z-10 flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                                Have a question about our products, partnership opportunities, or just want to say hello? We'd love to hear from you.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-envelope text-accent"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                        <a href="mailto:info@isefy.com" className="text-blue-200 hover:text-white transition-colors block">info@isefy.com</a>
                                        <a href="mailto:support@isefy.com" className="text-blue-200 hover:text-white transition-colors block">support@isefy.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-map-marker-alt text-accent"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                                        <p className="text-blue-200">Toronto, Canada</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-isefy-dark-blue transition-all">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-isefy-dark-blue transition-all">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-isefy-dark-blue transition-all">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-12 lg:p-20 relative z-10">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-isefy-blue focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-isefy-blue focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-isefy-blue focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-isefy-blue focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-gray-600">
                                        <option>General Inquiry</option>
                                        <option>Support</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-isefy-blue focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"></textarea>
                                </div>
                                <button type="button" className="w-full btn-primary py-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
