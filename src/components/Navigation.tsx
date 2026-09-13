import {ReactNode, ElementType} from 'react';
import {Sun, Moon} from 'lucide-react';
import {useTheme} from "@/hooks";
import {Link, useLocation} from "wouter";
import {isRouteActive} from "@/utils/url";

type DockItemBase = {
    icon: ElementType;
    label?: string;
    className?: string;
};

type DockItemLink = DockItemBase & {
    href: string;
    external?: boolean;
    onClick?: never;
};

type DockItemButton = DockItemBase & {
    onClick: () => void;
    href?: never;
    external?: never;
};

type DockItemProps = DockItemLink | DockItemButton;

export const DockItem = ({
                             icon: Icon,
                             label,
                             className = '',
                             ...props
                         }: DockItemProps) => {
    const [pathname] = useLocation();

    const baseClasses = `focus-ring flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground hover:-translate-y-1 cursor-pointer ${className}`.trim();

    if (props.href) {
        if (props.external) {
            return (
                <a
                    href={props.href}
                    target="_blank"
                    rel="noreferrer"
                    className={baseClasses}
                    aria-label={label}
                    title={label}
                >
                    <Icon size={20}/>
                </a>
            );
        }

        const isActive = isRouteActive(pathname, props.href, true);

        return (
            <Link
                href={props.href}
                className={`${baseClasses} ${isActive ? 'bg-secondary text-foreground' : ''}`}
                aria-label={label}
                title={label}
            >
                <Icon size={20}/>
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={props.onClick}
            className={baseClasses}
            aria-label={label}
            title={label}
        >
            <Icon size={20}/>
        </button>
    );
}

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
    const isLight = theme === "light";
    const Icon = isLight ? Sun : Moon;

    return (
        <DockItem
            icon={Icon}
            onClick={() => setTheme(isLight ? "dark" : "light")}
            label={`Switch to ${isLight ? "dark" : "light"} theme`}
        />
    );
}

export const Navigation = ({children, className = ""}: { children: ReactNode, className?: string }) =>
    <aside
        className={`fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-card/90 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,.45)] backdrop-blur-md ${className}`}
        aria-label="Site navigation"
    >
        {children}

        <ThemeToggle/>
    </aside>