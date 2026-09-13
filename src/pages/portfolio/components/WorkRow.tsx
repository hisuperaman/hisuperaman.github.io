import {WorkExperience} from "@/definitions";
import {Avatar, Accordion} from "@/components";

export const WorkRow = ({work}: { work: WorkExperience }) =>
    <article className="py-5 first:pt-0">
        <Accordion
            trigger={
                <div className="flex flex-1 items-start justify-between gap-4">
                        <span className="flex min-w-0 items-center gap-4">
                            <Avatar src={work.image} label={work.company}/>

                            <span className="min-w-0">
                                <span className="mb-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                                    {work.href ? (
                                        <a
                                            href={work.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="font-display text-base font-semibold text-foreground transition-colors hover:text-primary hover:underline"
                                        >
                                            {work.company}
                                        </a>
                                    ) : (
                                        <span
                                            className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                                            {work.company}
                                        </span>
                                    )}
                                </span>

                                <span className="block text-sm text-muted-foreground">{work.role}</span>

                                <span className="mt-1 block font-mono text-xs text-muted-foreground sm:hidden">
                                    {work.date}
                                </span>
                            </span>
                        </span>

                    <span
                        className="hidden shrink-0 pt-1 text-right font-mono text-xs text-muted-foreground sm:block">
                            {work.date}
                        </span>
                </div>
            }
        >
            <div className="max-w-xl pb-4 pl-14 pt-2">
                <p className="mb-3 font-mono text-xs text-muted-foreground">
                    {work.location}
                </p>

                <p className="mb-4 text-sm text-muted-foreground">
                    {work.summary}
                </p>

                <ul className="space-y-2 border-l border-primary/25 pl-4 text-sm text-muted-foreground">
                    {work.highlights.map((highlight) => (
                        <li
                            key={highlight}
                            className="relative before:absolute before:-left-5 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-primary"
                        >
                            {highlight}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                    {work.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                        >
                                {technology}
                            </span>
                    ))}
                </div>
            </div>
        </Accordion>
    </article>