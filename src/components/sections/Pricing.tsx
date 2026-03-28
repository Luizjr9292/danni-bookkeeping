'use client';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Pricing() {
    const { t } = useLanguage();

    return (
        <section id="pricing" className="bg-white py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {t.pricing.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        {t.pricing.subtitle}
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3">
                    {t.pricing.items.map((plan) => (
                        <div
                            key={plan.name}
                            className={`flex flex-col rounded-2xl p-8 shadow-sm border ${
                                plan.highlight
                                    ? 'bg-primary text-white border-primary scale-105'
                                    : 'bg-white text-slate-900 border-slate-100'
                            }`}
                        >
                            <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                {plan.name}
                            </h3>
                            <div className="mt-4 flex items-baseline gap-1">
                                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-slate-500'}`}>
                                    {plan.period}
                                </span>
                            </div>
                            <p className={`mt-3 text-sm ${plan.highlight ? 'text-white/80' : 'text-slate-500'}`}>
                                {plan.description}
                            </p>
                            <ul className="mt-6 space-y-3 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-primary'}`} />
                                        <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-slate-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            
                                href="#contact"
                                className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                                    plan.highlight
                                        ? 'bg-white text-primary hover:bg-slate-100'
                                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                                }`}
                            >
                                {t.pricing.cta}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-slate-500">
                    {t.pricing.note}
                </p>
            </div>
        </section>
    );
}
