import {Skill} from "@/definitions";

export const SkillBadge = ({skill}: { skill: Skill }) => {
    const Icon = skill.icon;

    return (
        <span
            className="flex items-center gap-2 rounded-full border bg-card cursor-pointer px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
            {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true"/>}
            {skill.name}
        </span>
    );
}