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
                <div className="flex flex-wrap justify-center items-center">
                    {/* Xero Badge Placeholder */}
                    <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-all duration-300">
                        <div className="h-12 w-12 rounded-full bg-[#0D91D8] flex items-center justify-center text-white font-bold text-xl shadow-sm">X</div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-[#0D91D8] tracking-tight leading-none">Xero</span>
                            <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-widest border-t border-slate-300 mt-1 pt-0.5">Certified Advisor</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
