import React, {ReactNode} from 'react';

interface PortfolioSectionProps {
    id: string;
    title: string;
    delayClass?: string;
    className?: string;
    children: ReactNode;
}

export const PortfolioSection = ({
                                     id,
                                     title,
                                     delayClass = "",
                                     className = "py-11",
                                     children
                                 }: PortfolioSectionProps) => {
    const headingId = `${id}-heading`;

    return (
        <section
            id={id}
            className={`scroll-mt-8 animate-rise-in ${delayClass} ${className}`.trim()}
            aria-labelledby={headingId}
        >
            <h2 id={headingId}
                className="mb-6 font-display text-2xl font-bold text-foreground">
                {title}
            </h2>
            {children}
        </section>
    );
}