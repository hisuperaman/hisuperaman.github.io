"use client";

import { PropsWithChildren } from "react";
import { CircleHelp, FileText, Home, ShieldCheck } from "lucide-react";
import { DockItem, Navigation, PageContainer } from "@/components";
import { Path } from "@/utils";
import { RoutePaths } from "@/enums";


export const MyFriendBulletLayout = ({ children }: PropsWithChildren) => {
    return (
        <PageContainer>
            <main className={'flex flex-col justify-center min-h-[calc(100vh-73px)] py-12'}>
                {children}
            </main>

            <Navigation>
                <DockItem
                    icon={Home}
                    href={Path.getExactRoutePath(RoutePaths.myFriendBullet)}
                />

                <DockItem
                    href={Path.getExactRoutePath(RoutePaths.myFriendBullet, RoutePaths.privacyPolicy)}
                    icon={ShieldCheck}
                />

                <DockItem
                    href={Path.getExactRoutePath(RoutePaths.myFriendBullet, RoutePaths.terms)}
                    icon={FileText}
                />

                <DockItem
                    href={Path.getExactRoutePath(RoutePaths.myFriendBullet, RoutePaths.support)}
                    icon={CircleHelp}
                />
            </Navigation>
        </PageContainer>
    );
}
