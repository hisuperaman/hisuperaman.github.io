import {Education} from "@/definitions";
import {Avatar, HoverArrow} from "@/components";

export const EducationRow = ({education}: { education: Education }) =>
    <a
        href={education.href}
        target={education.href ? '_blank' : undefined}
        rel={education.href ? 'noreferrer' : undefined}
        className="group flex items-start justify-between gap-4 mb-4"
    >
        <div className="flex gap-4">
            <Avatar
                src={education.image}
                label={education.school}
            />

            <div>
                <h3 className="font-display font-semibold transition-colors group-hover:text-primary">
                    {education.school}
                    {education.href && (
                        <HoverArrow className={'ml-1'}/>
                    )}
                </h3>

                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {education.degree}
                </p>

                <p className="mt-1 font-mono text-xs text-muted-foreground sm:hidden">
                    {education.date}
                </p>

                {education.detail && (
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                        {education.detail}
                    </p>
                )}
            </div>
        </div>

        <span className="hidden shrink-0 font-mono text-xs text-muted-foreground sm:block sm:mt-1">
            {education.date}
        </span>
    </a>