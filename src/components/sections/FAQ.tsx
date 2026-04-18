'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="bg-slate-50 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.faq.title}</h2>
                    <p className="mt-4 text-lg text-slate-600">{t.faq.subtitle}</p>
                </div>
                <div className="mx-auto mt-16 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-100 bg-white shadow-sm">
                    {t.faq.items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index}>
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base font-semibold text-slate-900">{item.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-5">
                                        <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
