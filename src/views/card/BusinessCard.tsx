import Link from "next/link";
import {Briefcase, Download, Newspaper, PhoneCall} from "lucide-react";
import {ElementType} from "react";
import {Avatar, callbackHref} from "@/components";
import {portfolio} from "@/data/portfolio";
import {ShareCardButton} from "@/views/card/ShareCardButton";

const cardLinkClasses = "focus-ring flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary";

type CardLink = { label: string; href: string; icon: ElementType; external?: boolean };

const cardLinks: CardLink[] = [
    {label: 'Services', href: '/services/', icon: Briefcase},
    ...portfolio.socials.map((social) => ({
        label: social.label === 'Email' ? social.handle : social.label,
        href: social.href,
        icon: social.icon,
        external: true,
    })),
    {label: 'Free guides for business owners', href: '/blog/', icon: Newspaper},
];

export const BusinessCard = ({cardUrl, qrSvg}: { cardUrl: string; qrSvg: string }) =>
    <div className="noise-layer relative min-h-dvh">
        <div className="dotted-banner absolute inset-x-0 top-0 h-40" aria-hidden="true"/>

        <main className="relative mx-auto flex min-h-dvh max-w-sm flex-col justify-center px-4 py-10">
            <article className="animate-rise-in rounded-3xl border border-border bg-card p-6 shadow-[0_8px_30px_rgba(0,0,0,.25)]">
                <header className="flex flex-col items-center text-center">
                    <Avatar src={portfolio.identity.image} label={portfolio.identity.name} className="h-24 w-24"/>
                    <h1 className="mt-4 font-display text-3xl font-bold">{portfolio.identity.name}</h1>
                    <p className="mt-1 font-medium text-foreground">Web Developer for Small Businesses</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Websites · Maintenance · SEO · Digital growth
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase text-muted-foreground">
                        Mandi, Himachal Pradesh · Working remotely
                    </p>
                </header>

                <Link
                    href={callbackHref}
                    className="focus-ring mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    <PhoneCall className="h-4 w-4"/> Request a free call
                </Link>

                <nav className="mt-3 space-y-2.5" aria-label="Contact links">
                    {cardLinks.map(({label, href, icon: Icon, external}) => (
                        external ? (
                            <a key={href} href={href} target="_blank" rel="noreferrer" className={cardLinkClasses}>
                                <Icon className="h-4 w-4 text-muted-foreground"/> <span className="truncate">{label}</span>
                            </a>
                        ) : (
                            <Link key={href} href={href} className={cardLinkClasses}>
                                <Icon className="h-4 w-4 text-muted-foreground"/> {label}
                            </Link>
                        )
                    ))}
                </nav>

                <div className="mt-3 flex gap-2.5">
                    <a
                        href="/card/contact.vcf"
                        download="aman-contact.vcf"
                        className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                        <Download className="h-4 w-4"/> Save contact
                    </a>
                    <ShareCardButton url={cardUrl} title={`${portfolio.identity.name} — Web Developer`}/>
                </div>

                <figure className="mt-6 flex flex-col items-center border-t border-border pt-6">
                    {/* White backing keeps the QR scannable in dark mode */}
                    <div
                        className="w-40 rounded-xl bg-white p-2.5"
                        role="img"
                        aria-label={`QR code linking to ${cardUrl}`}
                        dangerouslySetInnerHTML={{__html: qrSvg}}
                    />
                    <figcaption className="mt-3 text-xs text-muted-foreground">Scan to open this card</figcaption>
                </figure>
            </article>
        </main>
    </div>
