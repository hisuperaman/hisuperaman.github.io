import {Globe} from "lucide-react";
import {FaGithub} from "react-icons/fa6";
import {Project} from "@/definitions";
import {HoverArrow} from "@/components/HoverArrow";
import {getInitial} from "@/utils";
import {ElementType} from "react";


interface ProjectLinkProps {
    href: string;
    label: string;
    icon: ElementType;
}

const ProjectLink = ({
                         href,
                         label,
                         icon: Icon
                     }: ProjectLinkProps) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/80"
        aria-label={label}
    >
        <Icon size={16}/>
    </a>
);

export const ProjectCard = ({project}: { project: Project }) =>
    <div
        className="group relative block overflow-hidden rounded-2xl border bg-card transition-colors hover:border-primary/50"
    >
        {project.website && (
            <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Visit ${project.name} website`}
            />
        )}

        <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-muted">
            {project.image ? (
                <img
                    src={project.image}
                    alt={`${project.name} cover`}
                    className="h-full w-full object-cover"
                />
            ) : (
                <span
                    className="font-display text-6xl font-bold text-muted-foreground/30"
                >
                        {getInitial(project.name)}
                </span>
            )}

            <div className="absolute right-3 top-3 z-20 flex gap-2">
                {project.source && (
                    <ProjectLink
                        href={project.source}
                        label={`View ${project.name} source code`}
                        icon={FaGithub}
                    />
                )}
                {project.website && (
                    <ProjectLink
                        href={project.website}
                        label={`Visit ${project.name} website`}
                        icon={Globe}
                    />
                )}
            </div>
        </div>

        <div className="relative z-20 p-5 pointer-events-none">
            <div className="flex items-center gap-2">
                <h3 className="flex items-center gap-1.5 font-display text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                    {project.website && (
                        <HoverArrow/>
                    )}
                </h3>

                <span className="ml-auto font-mono text-xs text-muted-foreground">
                        {project.date}
                </span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                            {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>