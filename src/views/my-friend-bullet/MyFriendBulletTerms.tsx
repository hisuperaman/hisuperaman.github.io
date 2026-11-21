import { MyFriendBulletLayout } from "@/layouts";
import { PageHeader } from "@/components";

export const MyFriendBulletTerms = () =>
    <MyFriendBulletLayout>
        <PageHeader
            title={'Terms and Conditions'}
            desc={'Please read these terms carefully before playing My Friend Bullet.'}
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
                        1. Acceptance of Terms
                    </h2>
                    <p className="leading-relaxed">
                        By playing My Friend Bullet, you agree to these Terms and Conditions. If you do not agree,
                        please do not use the app.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        2. About the Game
                    </h2>
                    <p className="leading-relaxed">
                        My Friend Bullet is a single-player arcade shooter with cartoon violence: stick figures
                        shooting at each other in a fictional setting. It is intended for entertainment only.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        3. Data and Privacy
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>The Android app works offline and does not require an account.</li>
                        <li>The Android app does not collect or share any personal data.</li>
                        <li>See the Privacy Policy for details.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        4. Scores and Progress
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Your high score is stored only on your device. It cannot be recovered if you
                            uninstall the app, clear its data, or change devices.
                        </li>
                        <li>Game rules, scoring, and balance may change in updates.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        5. App Use Restrictions
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>You may not redistribute My Friend Bullet under its name or branding or claim it as
                            your own.
                        </li>
                        <li>My Friend Bullet is provided "as is." We do not guarantee uninterrupted or error-free
                            operation.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        6. Limitation of Liability
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>My Friend Bullet is not liable for lost scores or any other outcome from using the
                            app.
                        </li>
                        <li>Use of the app is at your own risk.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        7. Changes to Terms
                    </h2>
                    <p className="leading-relaxed">
                        These Terms may be updated. Continued use of My Friend Bullet constitutes acceptance of
                        changes.
                    </p>
                </section>

                <section className="mb-2">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        8. Contact
                    </h2>
                    <p className="leading-relaxed">
                        For questions, feedback, or issues, contact us via our website or support email.
                    </p>
                </section>
            </div>
        </div>
    </MyFriendBulletLayout>
