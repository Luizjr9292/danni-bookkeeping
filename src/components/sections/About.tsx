'use client';

import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="bg-slate-50 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
                    <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/danni-profile.jpg"
                            alt="Danni Wang - Chartered Accountant"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {t.about.title} <span className="block text-xl font-normal text-slate-600 mt-2">{t.about.subtitle}</span>
                        </h2>

                        <div className="space-y-6 mt-6">
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">{t.about.professionalProfileTitle}</h3>
                                <p className="text-base leading-7 text-slate-600">
                                    {t.about.professionalProfileText}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">{t.about.professionalValuesTitle}</h3>
                                <p className="text-base leading-7 text-slate-600">
                                    {t.about.professionalValuesText}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-slate-700">
                            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-slate-100">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span className="font-medium">{t.about.location}</span>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-slate-200 pt-8">
                            <blockquote className="text-lg font-medium italic text-slate-800">
                                {t.about.quote}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
