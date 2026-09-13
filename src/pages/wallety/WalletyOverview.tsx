import {WalletyLayout} from "@/layouts";
import {HoverArrow} from "@/components";

export const WalletyOverview = () =>
    <WalletyLayout>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
                <div
                    className="mb-6 inline-block rounded-full border border-border bg-secondary px-3 py-1.5">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                        Live Now
                    </p>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                    Take Control of Your Finances with Wallety
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    Wallety is a minimal, privacy-first expense tracker that lets you deposit and withdraw
                    money, categorize transactions, and visualize your spending—all locally or backed up to
                    your
                    Google Drive.
                </p>

                <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hisuperaman.wallety"
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Download for Android
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1geYQAaGYGKs0rfFBpZ2agWDNlOOd6PV_/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                        Demo Video <HoverArrow/>
                    </a>
                </div>

                <div className="flex gap-12 border-t border-border pt-8">
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-foreground">4.9★</p>
                        <p className="mt-1 text-sm text-muted-foreground">2+ reviews</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-foreground">10+</p>
                        <p className="mt-1 text-sm text-muted-foreground">Active users</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div
                    className="relative h-142.5 w-70 overflow-hidden rounded-[40px] border-4 border-zinc-800 bg-black p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2)]">
                    <div
                        className="absolute left-1/2 top-0 z-10 h-6.25 w-37.5 -translate-x-1/2 rounded-b-[20px] bg-black"></div>

                    <img
                        src="/images/wallety/app-screen.jpg"
                        alt="Wallety App Screenshot"
                        className="h-full w-full rounded-3xl object-cover"
                    />
                </div>
            </div>

        </div>
    </WalletyLayout>