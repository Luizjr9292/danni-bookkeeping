"use client";

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Contact() {
    const { t } = useLanguage();
    // IMPORTANT: Replace "YOUR_FORM_ID" with your actual Formspree Form ID.
    // 1. Go to https://formspree.io/
    // 2. Create a new form
    // 3. Copy the Form ID
    // 4. Paste it below
    const [state, handleSubmit] = useForm("mwvkrayr");

    if (state.succeeded) {
        return (
            <section id="contact" className="bg-primary/5 py-20 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-xl">
                        <div className="bg-white px-8 py-16 shadow-lg rounded-2xl border border-slate-100 text-center animate-in fade-in zoom-in duration-500">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.contact.form.successTitle}</h3>
                            <p className="text-lg text-slate-600">
                                {t.contact.form.successMessage}
                            </p>
                            <Button
                                className="mt-8"
                                variant="outline"
                                onClick={() => window.location.reload()}
                            >
                                {t.contact.form.sendAnother}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="bg-primary/5 py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {t.contact.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-xl">
                    <form onSubmit={handleSubmit} className="bg-white px-8 py-10 shadow-lg rounded-2xl border border-slate-100">
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900">
                                    {t.contact.form.nameLabel}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        placeholder={t.contact.form.namePlaceholder}
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 text-sm text-red-600" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                                    {t.contact.form.emailLabel}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        placeholder={t.contact.form.emailPlaceholder}
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-sm text-red-600" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-slate-900">
                                    {t.contact.form.phoneLabel}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        placeholder={t.contact.form.phonePlaceholder}
                                    />
                                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-2 text-sm text-red-600" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-semibold leading-6 text-slate-900">
                                    {t.contact.form.locationLabel}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        placeholder={t.contact.form.locationPlaceholder}
                                    />
                                    <ValidationError prefix="Location" field="location" errors={state.errors} className="mt-2 text-sm text-red-600" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                                    {t.contact.form.messageLabel}
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-sm text-red-600" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
                                {state.submitting ? t.contact.form.sending : t.contact.form.submitButton}
                            </Button>
                            <p className="mt-4 text-xs text-center text-slate-500">
                                {t.contact.form.availabilityNote}
                            </p>
                        </div>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-slate-600 mb-4">{t.contact.form.emailDirectly}</p>
                        <a
                            href="mailto:dannibookkeeping@gmail.com"
                            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                            dannibookkeeping@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
