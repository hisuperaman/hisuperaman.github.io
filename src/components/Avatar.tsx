import {ImgHTMLAttributes} from "react";
import {getInitial} from "@/utils";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    label: string;
}

export const Avatar = ({src, label, className = "", ...props}: AvatarProps) => {
    const baseClasses = "shrink-0 rounded-full border object-cover h-10 w-10";

    if (!src) {
        return (
            <div
                className={`flex items-center justify-center bg-muted font-semibold text-muted-foreground ${baseClasses} ${className}`.trim()}
                aria-label={label}
            >
                {getInitial(label)}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={label}
            className={`${baseClasses} ${className}`.trim()}
            {...props}
        />
    );
}