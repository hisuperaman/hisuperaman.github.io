import Link from "next/link";
import {portfolio} from "@/data/portfolio";
import {HoverArrow} from "@/components/HoverArrow";

export const callbackHref = "/services/#contact";

export const BusinessCta = ({title = "Let's grow your business online"}: { title?: string }) =>
    <section className="rounded-2xl border border-border bg-card p-8 md:p-10" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="font-display text-2xl font-bold text-foreground">{title}</h2>
        <p className="mt-3 text-muted-foreground">
            Leave your number and I'll call you back within one working day. The first consultation is
            always free.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
                href={callbackHref}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
                Request a free call
            </Link>
            <a
                href={`mailto:${portfolio.contact.email}`}
                className="group focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-secondary"
            >
                {portfolio.contact.email} <HoverArrow/>
            </a>
        </div>
    </section>
