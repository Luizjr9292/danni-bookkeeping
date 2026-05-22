'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function TrustBar() {
    const { t } = useLanguage();

    return (
        <section className="border-y border-slate-100 bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
                    {t.trustBar.text}
                </p>
                {/* Replace this SVG with the official badge PNG from xero.com/nz/partners once downloaded */}
                <div className="flex flex-wrap justify-center items-center">
                    <div className="opacity-90 hover:opacity-100 transition-all duration-300">
                        <svg width="180" height="56" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Xero Certified Advisor">
                            <rect width="180" height="56" rx="6" fill="#0D91D8" />
                            <text x="90" y="24" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" letterSpacing="-0.5">xero</text>
                            <line x1="20" y1="32" x2="160" y2="32" stroke="white" strokeOpacity="0.4" strokeWidth="0.75" />
                            <text x="90" y="46" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="600" letterSpacing="2">CERTIFIED ADVISOR</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
