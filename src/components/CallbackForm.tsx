"use client";

import {SubmitEvent, useState} from "react";
import {Loader2} from "lucide-react";
import {services} from "@/data/services";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses = "focus-ring w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground";
const labelClasses = "mb-2 block text-sm font-medium text-foreground";

export const CallbackForm = () => {
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus('submitting');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {method: 'POST', body: new FormData(form)});
            const body = await res.json();
            if (!res.ok || !body.success) throw new Error(body.message ?? `Request failed with ${res.status}`);

            setStatus('success');
            form.reset();
        } catch (error) {
            console.error('Callback request failed:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10" role="status">
                <h3 className="font-display text-xl font-semibold text-foreground">Thanks — request received!</h3>
                <p className="mt-3 text-muted-foreground">
                    I'll call or message you within one working day at the time you prefer.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="focus-ring mt-6 text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-10">
            <input type="hidden" name="access_key" value="f09237c0-fb6f-4310-b7b7-1ebe6c860f85"/>
            <input type="hidden" name="subject" value="New callback request from website"/>
            <input type="hidden" name="from_name" value="hisuperaman.me"/>
            {/* Honeypot: Web3Forms drops submissions where this is checked */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off"/>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="callback-name" className={labelClasses}>Your name</label>
                    <input id="callback-name" name="name" required autoComplete="name" className={inputClasses}/>
                </div>
                <div>
                    <label htmlFor="callback-business" className={labelClasses}>Business name</label>
                    <input id="callback-business" name="business" autoComplete="organization" className={inputClasses}/>
                </div>
                <div>
                    <label htmlFor="callback-phone" className={labelClasses}>Phone / WhatsApp</label>
                    <input
                        id="callback-phone"
                        name="phone"
                        type="tel"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        pattern="[0-9+\s\-]{10,16}"
                        title="Enter a valid phone number, e.g. +91 98765 43210"
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                    />
                </div>
                <div>
                    <label htmlFor="callback-email" className={labelClasses}>
                        Email <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <input id="callback-email" name="email" type="email" autoComplete="email" className={inputClasses}/>
                </div>
                <div>
                    <label htmlFor="callback-service" className={labelClasses}>What do you need?</label>
                    <select id="callback-service" name="service" className={inputClasses} defaultValue="">
                        <option value="" disabled>Choose a service</option>
                        {services.map((service) => (
                            <option key={service.title}>{service.title}</option>
                        ))}
                        <option>Not sure yet</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="callback-time" className={labelClasses}>Best time to call</label>
                    <select id="callback-time" name="preferred_time" className={inputClasses} defaultValue="Anytime">
                        <option>Anytime</option>
                        <option>Morning (9am–12pm)</option>
                        <option>Afternoon (12pm–5pm)</option>
                        <option>Evening (5pm–8pm)</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="callback-message" className={labelClasses}>
                    Tell me about your business <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <textarea
                    id="callback-message"
                    name="message"
                    rows={4}
                    placeholder="e.g. I run a homestay in Kullu and want a website where guests can see rooms and enquire."
                    className={`${inputClasses} resize-none`}
                />
            </div>

            {status === 'error' && (
                <p className="text-sm font-medium text-red-500" role="alert">
                    Something went wrong sending your request. Please try again, or email me directly.
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="focus-ring flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
            >
                {status === 'submitting' ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin"/> Sending...</>
                ) : 'Request a free call'}
            </button>

            <p className="text-xs text-muted-foreground">
                Your number is only used to contact you about this request. No spam, ever.
            </p>
        </form>
    );
}
