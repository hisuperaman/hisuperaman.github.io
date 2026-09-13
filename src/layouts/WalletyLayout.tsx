import {PropsWithChildren} from "react";
import {CircleHelp, FileText, Home, ShieldCheck} from "lucide-react";
import {DockItem, Navigation, PageContainer} from "@/components";
import {Path} from "@/utils";
import {RoutePaths} from "@/enums";


export const WalletyLayout = ({children}: PropsWithChildren) => {
    return (
        <PageContainer>
            <main className={'flex flex-col justify-center min-h-[calc(100vh-73px)] py-12'}>
                {children}
            </main>

            <Navigation>
                <DockItem
                    icon={Home}
                    href={Path.getExactRoutePath(RoutePaths.wallety)}
                />

                <DockItem
                    href={Path.getExactRoutePath(RoutePaths.wallety, RoutePaths.privacyPolicy)}
                    icon={ShieldCheck}
                />

                <DockItem
                    href={Path.getExactRoutePath(RoutePaths.wallety, RoutePaths.terms)}
                    icon={FileText}
                />

                <DockItem
                    href={Path.getExactRoutePath(RoutePaths.wallety, RoutePaths.support)}
                    icon={CircleHelp}
                />
            </Navigation>
        </PageContainer>
    );
}