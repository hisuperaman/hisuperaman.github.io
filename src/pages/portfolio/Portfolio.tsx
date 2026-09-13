import {portfolio} from '@/data/portfolio';
import {
    Avatar,
    EducationRow,
    HackathonRow, HoverArrow,
    Navigation,
    PortfolioSection,
    ProjectCard,
    SkillBadge,
    WorkRow
} from "@/components";


export const Portfolio = () => {
    return (
        <div className="noise-layer relative min-h-dvh">
            <div className="dotted-banner absolute inset-x-0 top-0 h-40 sm:h-48" aria-hidden="true"/>

            <main id="top" className="relative mx-auto max-w-2xl px-6 pb-32 pt-14 sm:px-8 sm:pt-20">
                <section
                    className="animate-rise-in flex items-start justify-between gap-6 pb-12"
                    aria-labelledby="intro-heading"
                >
                    <div>
                        <h1 id="intro-heading" className="font-display font-bold text-4xl sm:text-5xl">
                            Hi, I'm {portfolio.identity.name.split(' ')[0]}
                        </h1>
                        <p className="mt-3 max-w-md text-lg text-muted-foreground">{portfolio.identity.intro}</p>
                        <p className="mt-3 font-mono text-xs sm:text-sm uppercase text-primary">
                            {portfolio.identity.availability}
                        </p>
                    </div>
                    <Avatar
                        src={portfolio.identity.image}
                        label={portfolio.identity.name}
                        className="h-20 w-20 sm:h-24 sm:w-24"
                    />
                </section>

                <PortfolioSection id="about" title={portfolio.sectionLabels.about} delayClass="delay-1">
                    <div className="space-y-4 text-muted-foreground">
                        {portfolio.about.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection id="work" title={portfolio.sectionLabels.work} delayClass="delay-2">
                    <div>
                        {portfolio.work.map((work, i) => (
                            <WorkRow key={i} work={work}/>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection id="education" title={portfolio.sectionLabels.education} delayClass="delay-3">
                    {portfolio.education.map((education, i) => (
                        <EducationRow key={i} education={education}/>
                    ))}
                </PortfolioSection>

                <PortfolioSection id="skills" title={portfolio.sectionLabels.skills} delayClass="delay-3">
                    <div className="flex flex-wrap gap-2.5">
                        {portfolio.skills.map((skill, i) => (
                            <SkillBadge key={i} skill={skill}/>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection id="projects" title={portfolio.sectionLabels.projects} delayClass="delay-3">
                    <p className="mb-6 text-muted-foreground">
                        A few favorites, from a browser extension to a small publishing engine.
                    </p>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {portfolio.projects.map((project, i) => (
                            <ProjectCard key={i} project={project}/>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection id="hackathons" title={portfolio.sectionLabels.hackathons} delayClass="delay-4">
                    <div>
                        {portfolio.hackathons.map((hackathon, i) => (
                            <HackathonRow key={i} hackathon={hackathon}/>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection
                    id="contact"
                    title={portfolio.sectionLabels.contact}
                    delayClass="delay-4"
                    className="pb-8 pt-11"
                >
                    <p className="text-muted-foreground">{portfolio.contact.body}</p>
                    <a
                        href={`mailto:${portfolio.contact.email}`}
                        className="group mt-5 inline-flex items-center gap-2 border-b border-foreground pb-1 font-display font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                        {portfolio.contact.email}
                        <HoverArrow/>
                    </a>
                </PortfolioSection>

                <footer className="pt-7 text-sm text-muted-foreground animate-rise-in delay-4">
                    <p>{portfolio.contact.footer}</p>
                </footer>
            </main>

            <Navigation socials={portfolio.socials}/>
        </div>
    );
}