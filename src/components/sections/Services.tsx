'use client';

import { Landmark, FileText, Users, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceIcons = [Landmark, FileText, Users, BarChart3];

export function Services() {
    const { t } = useLanguage();

    return (
        <section id="services" className="bg-slate-50 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {t.services.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        {t.services.subtitle}
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-center sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:text-left">
                    {t.services.items.map((service, index) => {
                        const Icon = serviceIcons[index];
                        return (
                            <div key={service.title} className="flex flex-col items-center lg:items-start p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
