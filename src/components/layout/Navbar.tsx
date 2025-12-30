'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';



export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.nav.services, href: '#services' },
        { name: t.nav.process, href: '#process' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">{t.nav.title}</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 border-l border-slate-200 pl-6">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`transition-colors hover:text-primary ${language === 'en' ? 'text-primary font-bold' : 'text-slate-400'}`}
                        >
                            EN
                        </button>
                        <span className="text-slate-300">|</span>
                        <button
                            onClick={() => setLanguage('zh')}
                            className={`transition-colors hover:text-primary ${language === 'zh' ? 'text-primary font-bold' : 'text-slate-400'}`}
                        >
                            中文
                        </button>
                    </div>

                    <Link href="#contact" className={buttonVariants({ size: 'sm' })}>
                        {t.nav.bookConsultation}
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* Mobile Language Toggle */}
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 md:hidden">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`transition-colors hover:text-primary ${language === 'en' ? 'text-primary font-bold' : 'text-slate-400'}`}
                        >
                            EN
                        </button>
                        <span className="text-slate-300">|</span>
                        <button
                            onClick={() => setLanguage('zh')}
                            className={`transition-colors hover:text-primary ${language === 'zh' ? 'text-primary font-bold' : 'text-slate-400'}`}
                        >
                            中文
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="border-t border-slate-200 bg-white md:hidden">
                    <div className="space-y-1 px-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-2 text-base font-medium text-slate-600 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-2">
                            <Link
                                href="#contact"
                                className={buttonVariants({ className: 'w-full' })}
                                onClick={() => setIsOpen(false)}
                            >
                                {t.nav.bookConsultation}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
