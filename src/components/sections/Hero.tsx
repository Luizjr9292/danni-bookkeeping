'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        {t.hero.titlePart1} <span className="text-primary">{t.hero.titlePart2}</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        {t.hero.subtitle}
                    </p>
                    <div className="mt-8 flex gap-x-4">
                        <Link
                            href="#contact"
                            className={buttonVariants({ size: 'lg', className: "group flex items-center gap-2" })}
                        >
                            {t.hero.ctaPrimary}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#services"
                            className={buttonVariants({ variant: 'outline', size: 'lg' })}
                        >
                            {t.hero.ctaSecondary}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
