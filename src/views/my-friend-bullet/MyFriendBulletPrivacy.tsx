import { MyFriendBulletLayout } from "@/layouts";
import { PageHeader } from "@/components";

export const MyFriendBulletPrivacy = () =>
    <MyFriendBulletLayout>
        <PageHeader
            title={'Privacy Policy'}
            desc={'Your privacy is important to us. Learn how My Friend Bullet handles your data.'}
        />

        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-8 border-b border-border pb-8">
                <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Effective Date:</span> November 21, 2026
                </p>
            </div>

            <div className="text-muted-foreground">
                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        1. Introduction
                    </h2>
                    <p className="leading-relaxed">
                        My Friend Bullet is a bullet-time shooter game for Android. The app works fully offline,
                        has no accounts, and does not use a server. This policy explains what that means for
                        your data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        2. Data Collection
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>My Friend Bullet does not collect, share, or sell any personal information.</li>
                        <li>There is no sign-in, and the app does not ask for your name, email, or any other
                            details.
                        </li>
                        <li>The app does not include ads, analytics, tracking, or crash-reporting services.</li>
                        <li>The app contains no in-app purchases.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        3. Game Data
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>The app saves your high score, your sound setting, and your fire mode (single shot
                            or automatic) on your device, so they are still there next time you play.
                        </li>
                        <li>This data never leaves your device. It is not sent to us or to anyone else.</li>
                        <li>Uninstalling the app or clearing its data in Android settings deletes it.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        4. Permissions
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>My Friend Bullet does not request any Android permissions, including internet
                            access.
                        </li>
                        <li>The app does not access your location, contacts, camera, microphone, photos, or
                            files.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        5. Children's Privacy
                    </h2>
                    <p className="leading-relaxed">
                        My Friend Bullet does not collect personal data from anyone, including children under 13.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        6. Browser Version
                    </h2>
                    <p className="leading-relaxed">
                        This policy covers the Android app. The browser version of the game has an online
                        leaderboard, where the player name you choose is shown publicly with your score.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        7. Third-Party Links
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>This website may link to third-party sites such as the GameBox website or the Google Play Store.
                        </li>
                        <li>My Friend Bullet is not responsible for the privacy practices of third-party sites.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        8. Changes to this Policy
                    </h2>
                    <p className="leading-relaxed">
                        Updates to this privacy policy will be posted on this page with a new effective date.
                    </p>
                </section>

                <section className="mb-2">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        9. Contact
                    </h2>
                    <p className="leading-relaxed">
                        For questions or concerns about privacy, please contact us via our website or
                        support email.
                    </p>
                </section>
            </div>
        </div>
    </MyFriendBulletLayout>
