import { ClockMateLayout } from "@/layouts";
import { PageHeader } from "@/components";

export const ClockMatePrivacy = () =>
    <ClockMateLayout>
        <PageHeader
            title={'Privacy Policy'}
            desc={'Your privacy is important to us. Learn how ClockMate handles your data.'}
        />

        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-8 border-b border-border pb-8">
                <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Effective Date:</span> October 10, 2026
                </p>
            </div>

            <div className="text-muted-foreground">
                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        1. Introduction
                    </h2>
                    <p className="leading-relaxed">
                        ClockMate is a simple chess clock for over-the-board play. It works fully offline, has no
                        accounts, and does not use a server. This policy explains what that means for your data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        2. Data Collection
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>ClockMate does not collect, store, or share any personal information.</li>
                        <li>There is no sign-in, and the app does not ask for your name, email, or any other
                            details.
                        </li>
                        <li>ClockMate does not include analytics, tracking, or advertising SDKs.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        3. Game Data
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Time controls, clock times, and game state exist only on your device while you use
                            the app.
                        </li>
                        <li>ClockMate does not send this data anywhere.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        4. Permissions
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>ClockMate uses your device's vibration for haptic feedback when you tap the clock.
                        </li>
                        <li>The app does not request access to your location, contacts, camera, microphone, or
                            files.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        5. Children's Privacy
                    </h2>
                    <p className="leading-relaxed">
                        ClockMate does not collect data from anyone, including children, so it can be used by
                        players of any age.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        6. Third-Party Links
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>This website may link to third-party sites such as GitHub or the Google Play Store.
                        </li>
                        <li>ClockMate is not responsible for the privacy practices of third-party sites.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        7. Changes to this Policy
                    </h2>
                    <p className="leading-relaxed">
                        Updates to this privacy policy will be posted on this page with a new effective date.
                    </p>
                </section>

                <section className="mb-2">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        8. Contact
                    </h2>
                    <p className="leading-relaxed">
                        For questions or concerns about privacy, please contact us via our website or
                        support email.
                    </p>
                </section>
            </div>
        </div>
    </ClockMateLayout>