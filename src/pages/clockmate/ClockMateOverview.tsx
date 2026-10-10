import { ClockMateLayout } from "@/layouts";
import { HoverArrow } from "@/components";

export const ClockMateOverview = () =>
    <ClockMateLayout>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
                <div
                    className="mb-6 inline-block rounded-full border border-border bg-secondary px-3 py-1.5">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                        Live Now
                    </p>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                    A Distraction-Free Chess Clock with ClockMate
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    ClockMate is a simple chess clock for over-the-board play. Pick a Bullet, Blitz, Rapid or
                    Classical preset or set your own time control with increment, then tap your side to pass
                    the turn. The running clock is always the white side, so you can tell whose move it is
                    from across the table.
                </p>

                <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="https://github.com/hisuperaman/clockmate/releases/latest"
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Download for Android
                    </a>
                    <a
                        href="https://github.com/hisuperaman/clockmate"
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                        Source Code <HoverArrow />
                    </a>
                </div>

                <div className="flex gap-12 border-t border-border pt-8">
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-foreground">4</p>
                        <p className="mt-1 text-sm text-muted-foreground">Time control presets</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-foreground">100%</p>
                        <p className="mt-1 text-sm text-muted-foreground">Offline, no data collected</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div
                    className="relative h-142.5 w-70 overflow-hidden rounded-[40px] border-4 border-zinc-800 bg-black p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2)]">
                    <div
                        className="absolute left-1/2 top-0 z-10 h-6.25 w-37.5 -translate-x-1/2 rounded-b-[20px] bg-black"></div>

                    <img
                        src="/images/clockmate/app-screen.jpeg"
                        alt="ClockMate App Screenshot"
                        className="h-full w-full rounded-3xl object-cover"
                    />
                </div>
            </div>

        </div>
    </ClockMateLayout>