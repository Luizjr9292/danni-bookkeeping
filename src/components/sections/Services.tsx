'use client';
import { Landmark, FileText, Users, BarChart3, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const serviceIcons = [Landmark, FileText, Users, BarChart3, Building2];

export function Services() {
    const { t } = useLanguage();
    return (
        <section id="services" className="bg-slate-50 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.services.title}</h2>
                    <p className="mt-4 text-lg text-slate-600">{t.services.subtitle}</p>
                </div>
                <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-5">
                    {t.services.items.map((service, index) => {
                        const Icon = serviceIcons[index];
                        return (
                            <div key={service.title} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4"><Icon className="h-6 w-6" aria-hidden="true" /></div>
                                <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-16 text-center">
                    <p className="text-lg text-slate-600 mb-6">Interested in our services? Let's talk.</p>
                    <Link href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-colors">Get in Touch</Link>
                </div>
            </div>
        </section>
    );
}
