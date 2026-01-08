'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQ {
    question: string;
    answer: string;
}

interface ProductFAQProps {
    faqs: FAQ[];
}

export default function ProductFAQ({ faqs }: ProductFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="section bg-gray-50">
            <div className="container-custom max-w-3xl mx-auto">
                <h2 className="text-center text-3xl font-bold text-isefy-dark-blue mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full p-6 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-isefy-dark-blue">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-isefy-blue"
                                >
                                    <i className="fas fa-chevron-down"></i>
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
