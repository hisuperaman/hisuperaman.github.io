import {ArrowUpRight} from "lucide-react";

export const HoverArrow = ({className = ""}: { className?: string }) =>
    <ArrowUpRight
        className={`h-4 w-4 inline-block shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`.trim()}
    />