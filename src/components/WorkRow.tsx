import {useState} from "react";
import {ChevronDown} from "lucide-react";
import {WorkExperience} from "@/definitions";
import {Avatar} from "@/components/Avatar";

export const WorkRow = ({work}: { work: WorkExperience }) => {
    const [open, setOpen] = useState(false);

    return (
        <article className="py-5 first:pt-0">
            <div
                role="button"
                tabIndex={0}
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpen(!open);
                    }
                }}
                className="group flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                aria-expanded={open}
            >
                <span className="flex min-w-0 items-center gap-4">
                    <Avatar
                        src={work.image}
                        label={work.company}
                    />

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
                    className="flex shrink-0 items-center gap-3 pt-1 text-right font-mono text-xs text-muted-foreground">
                    <span className="hidden sm:inline">{work.date}</span>

                    <ChevronDown
                        className={`h-4 w-4 transition-transform duration-100 ${
                            open
                                ? 'rotate-180 group-hover:-translate-y-0.5'
                                : 'group-hover:translate-y-0.5'
                        }`}
                    />
                </span>
            </div>

            <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="max-w-xl pl-14 pt-2 pb-4">
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
                </div>
            </div>
        </article>
    );
}