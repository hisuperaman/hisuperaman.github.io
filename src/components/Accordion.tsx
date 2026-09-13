import {ReactNode, useState} from 'react';
import {ChevronDown} from 'lucide-react';

interface AccordionProps {
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
}

export const Accordion = ({
                              trigger,
                              children,
                              className = '',
                          }: AccordionProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={className}>
            <button
                type="button"
                onClick={() => setOpen((open) => !open)}
                className="group flex w-full items-start justify-between gap-4 text-left cursor-pointer"
                aria-expanded={open}
            >
                {trigger}

                <ChevronDown
                    className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-100 ${
                        open
                            ? 'rotate-180 group-hover:-translate-y-0.5'
                            : 'group-hover:translate-y-0.5'
                    }`}
                />
            </button>

            <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    open
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="min-h-0 overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}