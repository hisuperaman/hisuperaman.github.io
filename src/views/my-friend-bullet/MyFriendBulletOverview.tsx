import { MyFriendBulletLayout } from "@/layouts";
import { HoverArrow } from "@/components";

export const MyFriendBulletOverview = () =>
    <MyFriendBulletLayout>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
                <div className="mb-6 flex items-center gap-4">
                    <img
                        src="/images/my-friend-bullet/icon.png"
                        alt="My Friend Bullet icon"
                        className="h-16 w-16 rounded-2xl border border-border"
                    />
                    <div
                        className="inline-block rounded-full border border-border bg-secondary px-3 py-1.5">
                        <p className="text-xs font-semibold uppercase text-muted-foreground">
                            Live Now
                        </p>
                    </div>
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                    Slow Down Time and Dodge Bullets in My Friend Bullet
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    My Friend Bullet is a bullet-time stickman shooter set on the rooftops of a city at night.
                    Slow the world to a crawl while you keep moving, weave between bullets frozen in the air
                    and land the perfect headshot. Chain quick kills for combo points, and see how long you
                    can survive as enemies pour in from every side.
                </p>

                <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hisuperaman.myfriendbullet"
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Get it on Google Play
                    </a>
                    <a
                        href="https://aman433.pythonanywhere.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                        Play on Web <HoverArrow />
                    </a>
                </div>

                <div className="flex gap-12 border-t border-border pt-8">
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-foreground">3</p>
                        <p className="mt-1 text-sm text-muted-foreground">Enemy types</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-foreground">100%</p>
                        <p className="mt-1 text-sm text-muted-foreground">Offline, no data collected</p>
                    </div>
                </div>
            </div>

            {/* the game is landscape, so the phone frame lies on its side */}
            <div className="flex justify-center lg:justify-end">
                <div
                    className="relative w-full max-w-xl overflow-hidden rounded-[32px] border-4 border-zinc-800 bg-black p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2)]">
                    <img
                        src="/images/my-friend-bullet/app-screen.jpg"
                        alt="My Friend Bullet gameplay screenshot"
                        className="aspect-video w-full rounded-3xl object-cover"
                    />
                </div>
            </div>

        </div>
    </MyFriendBulletLayout>
