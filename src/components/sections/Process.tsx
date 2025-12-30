'use client';

import { FileInput, Calculator, BadgeCheck, PieChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const stepIcons = [FileInput, Calculator, BadgeCheck, PieChart];

export function Process() {
    const { t } = useLanguage();

    return (
        <section id="process" className="py-20 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {t.process.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        {t.process.subtitle}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
                        {t.process.steps.map((step, stepIdx) => {
                            // Generate ID based on index + 1, e.g. "01", "02"
                            const id = (stepIdx + 1).toString().padStart(2, '0');

                            return (
                                <div key={step.name} className="relative flex flex-col items-center text-center">
                                    {stepIdx !== t.process.steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-1/2 w-full border-t-2 border-slate-100 -z-10" />
                                    )}
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 border-2 border-primary text-primary z-10 bg-white">
                                        <span className="text-xl font-bold">{id}</span>
                                    </div>
                                    <h3 className="mt-6 text-lg font-semibold leading-8 text-slate-900">
                                        {step.name}
                                    </h3>
                                    <p className="mt-2 text-base leading-7 text-slate-600">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
