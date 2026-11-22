import Link from "next/link";
import {Check} from "lucide-react";
import {BusinessLayout} from "@/layouts";
import {Accordion, CallbackForm, HoverArrow, JsonLd} from "@/components";
import {industries, processSteps, serviceAreas, serviceFaqs, services} from "@/data/services";
import {blogPosts} from "@/data/blog";
import {portfolio} from "@/data/portfolio";
import {siteUrl} from "@/data/site";
import {PortfolioSection} from "@/views/portfolio/components";

const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Aman — Web Development & SEO for Small Businesses',
    url: `${siteUrl}/services/`,
    image: `${siteUrl}${portfolio.identity.image}`,
    email: portfolio.contact.email,
    description: 'Website design, development, maintenance, local SEO and Google Business Profile services for small businesses in Mandi and across Himachal Pradesh.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mandi',
        addressRegion: 'Himachal Pradesh',
        addressCountry: 'IN',
    },
    areaServed: [
        ...serviceAreas.map((name) => ({'@type': 'City', name})),
        {'@type': 'State', name: 'Himachal Pradesh'},
        {'@type': 'Country', name: 'India'},
    ],
    founder: {'@type': 'Person', name: portfolio.identity.name, url: siteUrl},
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Small business digital services',
        itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {'@type': 'Service', name: service.title, description: service.description},
        })),
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {'@type': 'Answer', text: faq.answer},
    })),
};

export const Services = () =>
    <BusinessLayout>
        <JsonLd schema={businessSchema}/>
        <JsonLd schema={faqSchema}/>

        <section className="animate-rise-in pb-12" aria-labelledby="services-heading">
            <p className="font-mono text-xs uppercase text-primary sm:text-sm">
                For local businesses · Mandi, Himachal Pradesh
            </p>
            <h1 id="services-heading" className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                Websites, SEO & digital growth for small businesses
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                I'm {portfolio.identity.name}, a web developer based in Mandi. I help cafes, hotels, clinics,
                shops and other local businesses across Himachal Pradesh get online, rank on Google and win more
                customers — with affordable websites that are fast, modern and easy to manage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                    href="#contact"
                    className="focus-ring inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    Request a free call
                </a>
                <a
                    href="#process"
                    className="focus-ring inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-secondary"
                >
                    How it works
                </a>
            </div>
        </section>

        <PortfolioSection id="what-i-do" title="What I do" delayClass="delay-1">
            <div className="grid gap-5 sm:grid-cols-2">
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <article key={service.title} className="rounded-2xl border bg-card p-6">
                            <Icon className="h-6 w-6 text-primary" aria-hidden="true"/>
                            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                            <ul className="mt-4 space-y-2">
                                {service.points.map((point) => (
                                    <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true"/>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </div>
        </PortfolioSection>

        <PortfolioSection id="who-i-help" title="Who I work with" delayClass="delay-2">
            <p className="mb-6 text-muted-foreground">
                If your customers are local, your website should be built to bring them through the door.
            </p>
            <div className="flex flex-wrap gap-2.5">
                {industries.map((industry) => (
                    <span key={industry} className="rounded-full border bg-card px-4 py-2 text-sm text-foreground">
                        {industry}
                    </span>
                ))}
            </div>
        </PortfolioSection>

        <PortfolioSection id="process" title="How it works" delayClass="delay-3">
            <ol className="grid gap-5 sm:grid-cols-2">
                {processSteps.map((step, i) => (
                    <li key={step.title} className="rounded-2xl border bg-card p-6">
                        <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                        <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </li>
                ))}
            </ol>
        </PortfolioSection>

        <PortfolioSection id="why-me" title="Why work with me" delayClass="delay-3">
            <ul className="space-y-4 text-muted-foreground">
                <li>
                    <strong className="text-foreground">Direct and reachable.</strong> You work with me directly
                    over calls, WhatsApp and email — no call centres, no middlemen, wherever your business is.
                </li>
                <li>
                    <strong className="text-foreground">Built by a real software engineer.</strong> I build
                    production web applications professionally, so your site is fast, secure and built to last —
                    not a slow drag-and-drop template.
                </li>
                <li>
                    <strong className="text-foreground">You own everything.</strong> Your domain, website and
                    content stay in your name. No lock-in.
                </li>
                <li>
                    <strong className="text-foreground">Proven work.</strong> I designed and developed the
                    official website for{' '}
                    <a
                        href="https://gurukripainstitution.in"
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground underline underline-offset-4 hover:text-primary"
                    >
                        Guru Kripa Institution
                    </a>{' '}
                    in Sundernagar, along with the other projects on{' '}
                    <Link href="/#projects" className="text-foreground underline underline-offset-4 hover:text-primary">
                        my portfolio
                    </Link>.
                </li>
            </ul>
        </PortfolioSection>

        <PortfolioSection id="areas" title="Areas I serve" delayClass="delay-4">
            <p className="text-muted-foreground">
                Web design and SEO services for businesses in {serviceAreas.join(', ')} and across Himachal
                Pradesh. I also work remotely with small businesses anywhere in India.
            </p>
        </PortfolioSection>

        <PortfolioSection id="faq" title="Frequently asked questions" delayClass="delay-4">
            <div className="space-y-3">
                {serviceFaqs.map((faq) => (
                    <Accordion
                        key={faq.question}
                        className="rounded-xl border border-border bg-card p-4"
                        trigger={<h3 className="text-sm font-medium">{faq.question}</h3>}
                    >
                        <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                            {faq.answer}
                        </p>
                    </Accordion>
                ))}
            </div>
        </PortfolioSection>

        <PortfolioSection id="guides" title="Free guides for business owners" delayClass="delay-4">
            <ul className="space-y-3">
                {blogPosts.slice(0, 4).map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}/`}
                            className="group inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
                        >
                            {post.title}
                            <HoverArrow/>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link
                href="/blog/"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
                All articles <HoverArrow/>
            </Link>
        </PortfolioSection>

        <PortfolioSection id="contact" title="Request a free call" delayClass="delay-4">
            <p className="mb-6 text-muted-foreground">
                Leave your number and a few details. I'll call you back within one working day to understand
                your business and suggest what will help most — no obligation.
            </p>
            <CallbackForm/>
        </PortfolioSection>
    </BusinessLayout>
