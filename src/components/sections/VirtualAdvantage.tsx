'use client';

import { Cloud, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const featureIcons = [Cloud, Clock, MapPin];

export function VirtualAdvantage() {
    const { t } = useLanguage();

    return (
        <section className="bg-primary py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {t.virtualAdvantage.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-200">
                        {t.virtualAdvantage.subtitle}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {t.virtualAdvantage.items.map((feature, index) => {
                            const Icon = featureIcons[index];
                            return (
                                <div key={feature.name} className="flex flex-col items-center text-center">
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
                                        <Icon className="h-8 w-8" aria-hidden="true" />
                                    </div>
                                    <dt className="text-xl font-bold leading-7 text-white">
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}
