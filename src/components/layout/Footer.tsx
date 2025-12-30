'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-primary text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold">Danni Bookkeeping</h3>
                        <p className="mt-4 max-w-sm text-sm text-slate-300">
                            {t.footer.expertVirtual}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-100">{t.footer.quickLinks}</h4>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                            <li><Link href="#services" className="hover:text-white">{t.nav.services}</Link></li>
                            <li><Link href="#process" className="hover:text-white">{t.nav.process}</Link></li>
                            <li><Link href="#about" className="hover:text-white">{t.nav.about}</Link></li>
                            <li><Link href="#contact" className="hover:text-white">{t.nav.contact}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-100">{t.footer.contact}</h4>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                            <li className="flex items-center space-x-2">
                                <MapPin size={16} />
                                <span>Tauranga, Bay of Plenty</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail size={16} />
                                <span>dannibookkeeping@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-700 pt-8 text-center text-xs text-slate-400">
                    <p className="mb-2">
                        {t.footer.disclaimer}
                    </p>
                    <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
