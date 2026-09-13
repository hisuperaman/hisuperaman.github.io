import {Hackathon} from "@/definitions";
import {Avatar} from "@/components/Avatar";
import {HoverArrow} from "@/components/HoverArrow";

export const HackathonRow = ({hackathon}: { hackathon: Hackathon }) =>
    <div className="flex flex-col justify-between gap-4 py-5 sm:flex-row sm:items-start">
        <div className="flex gap-4">
            <Avatar
                src={hackathon.image}
                label={hackathon.name}
            />

            <div className="flex flex-col">
                    <span className="mb-1 font-mono text-xs text-muted-foreground">
                        {hackathon.location}
                        <span className="sm:hidden px-1">·</span>
                        <span className="sm:hidden">{hackathon.date}</span>
                    </span>

                <h3 className="font-display font-semibold">
                    {hackathon.name}
                </h3>

                <p className="mt-1 max-w-md text-sm text-muted-foreground">
                    {hackathon.description}
                </p>

                {hackathon.result && (
                    <span className="mt-2 inline-block font-mono text-xs uppercase text-primary">
                            {hackathon.result}
                        </span>
                )}

                {hackathon.links && hackathon.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-4">
                        {hackathon.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-1 font-display text-sm font-semibold transition-colors hover:text-primary"
                            >
                                {link.label}
                                <HoverArrow/>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>

        <span className="hidden shrink-0 font-mono text-xs text-muted-foreground sm:block sm:mt-1">
                {hackathon.date}
            </span>
    </div>