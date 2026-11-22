"use client";

import {PropsWithChildren} from "react";
import {Briefcase, Home, Mail, Newspaper} from "lucide-react";
import {DockItem, Navigation} from "@/components";
import {portfolio} from "@/data/portfolio";
import {Path} from "@/utils";
import {RoutePaths} from "@/enums";

export const BusinessLayout = ({children}: PropsWithChildren) =>
    <div className="noise-layer relative min-h-dvh">
        <div className="dotted-banner absolute inset-x-0 top-0 h-40 sm:h-48" aria-hidden="true"/>

        <main className="relative mx-auto max-w-3xl px-6 pb-32 pt-14 sm:px-8 sm:pt-20">
            {children}

            <footer className="pt-12 text-sm text-muted-foreground">
                <p>{portfolio.contact.footer}</p>
            </footer>
        </main>

        <Navigation>
            <DockItem icon={Home} href={Path.getExactRoutePath(RoutePaths.empty)} label="Home"/>
            <DockItem icon={Briefcase} href={Path.getExactRoutePath(RoutePaths.services)} label="Services"/>
            <DockItem icon={Newspaper} href={Path.getExactRoutePath(RoutePaths.blog)} label="Blog"/>
            <DockItem icon={Mail} href={`mailto:${portfolio.contact.email}`} external label="Email"/>
        </Navigation>
    </div>
