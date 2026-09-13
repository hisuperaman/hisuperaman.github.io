import {ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react';
import {Home, Sun, Moon} from 'lucide-react';
import {Social} from "@/definitions";
import {useTheme} from "@/hooks";

type DockItemAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

type DockItemAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
}

type DockItemProps = (DockItemAsLink | DockItemAsButton) & {
    children: ReactNode;
    className?: string;
}

const DockItem = ({children, className = "", ...props}: DockItemProps) => {
    const combinedClasses = `focus-ring flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground hover:-translate-y-1 cursor-pointer ${className}`.trim();

    if ('href' in props && props.href) {
        return (
            <a className={combinedClasses} {...(props as DockItemAsLink)}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={combinedClasses} {...(props as DockItemAsButton)}>
            {children}
        </button>
    );
}

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
    const isLight = theme === "light";
    const Icon = isLight ? Sun : Moon;

    return (
        <DockItem
            onClick={() => setTheme(isLight ? "dark" : "light")}
            aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
        >
            <Icon size={24}/>
        </DockItem>
    );
}

export const Navigation = ({socials}: { socials: Social[] }) =>
    <aside
        className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-card/90 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,.45)] backdrop-blur-md"
        aria-label="Site navigation"
    >
        <DockItem
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            aria-label="Back to top"
            title="Home"
        >
            <Home size={24}/>
        </DockItem>

        {socials.map((social) => {
            const Icon = social.icon;
            const isEmail = social.href.startsWith('mailto:');

            return (
                <DockItem
                    key={social.label}
                    href={social.href}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noreferrer'}
                    aria-label={`${social.label}: ${social.handle}`}
                    title={social.handle}
                >
                    <Icon size={24}/>
                </DockItem>
            );
        })}

        <ThemeToggle/>
    </aside>