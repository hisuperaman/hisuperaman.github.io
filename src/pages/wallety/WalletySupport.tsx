import {SubmitEvent, useState} from "react";
import {Loader2} from "lucide-react";
import {WalletyLayout} from "@/layouts";
import {PageHeader, Accordion} from "@/components";

const faqs = [
    {
        q: "How do I add a transaction?",
        a: "Use the on-screen numpad, select type, category, date, and comment, then tap 'check' button."
    },
    {
        q: "How do I edit or delete?",
        a: "To edit, tap on a transaction to open the edit screen. To delete, tap and hold the backspace button in numpad until the icon changes to a trash can, then release."
    },
    {
        q: "How do I back up my data?",
        a: "After signing in with Google, go to Backup & Restore settings screen and tap \"Backup\". You can also enable automatic backups."
    },
    {
        q: "How do I restore a backup?",
        a: "After signing in with the same Google account, go to Backup & Restore settings screen and tap \"Restore\"."
    }
];

export const WalletySupport = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                setFormStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }

        setTimeout(() => setFormStatus('idle'), 5000);
    };

    return (
        <WalletyLayout>
            <PageHeader
                title="Support"
                desc="We're here to help. Find answers to common questions or get in touch."
            />

            <div className="space-y-8">
                <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
                        Send Feedback
                    </h2>

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <input type="hidden" name="access_key" value="f09237c0-fb6f-4310-b7b7-1ebe6c860f85"/>

                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                                className="focus-ring w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                                className="focus-ring w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us what you think..."
                                rows={5}
                                required
                                className="focus-ring w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-foreground"
                            ></textarea>
                        </div>

                        {formStatus === 'success' && (
                            <p className="text-sm font-medium text-emerald-500">
                                Thank you for your feedback! We'll get back to you soon.
                            </p>
                        )}
                        {formStatus === 'error' && (
                            <p className="text-sm font-medium text-red-500">
                                There was an error submitting your feedback. Please try again.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className="focus-ring flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
                        >
                            {formStatus === 'submitting' ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin"/>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>

                    <div className="mt-8 border-t border-border pt-8">
                        <p className="mb-2 text-sm text-muted-foreground">Or email directly at:</p>
                        <a
                            href="mailto:hisuperamanx@gmail.com"
                            className="break-all font-medium text-foreground underline-offset-4 hover:underline"
                        >
                            hisuperamanx@gmail.com
                        </a>
                    </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">FAQ</h2>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                className="rounded-xl border border-border bg-secondary p-4"
                                trigger={<span className="text-sm font-medium">{faq.q}</span>}
                            >
                                <div
                                    className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                                    {faq.a}
                                </div>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </WalletyLayout>
    );
}