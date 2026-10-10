import { ClockMateLayout } from "@/layouts";
import { PageHeader } from "@/components";

export const ClockMateTerms = () =>
    <ClockMateLayout>
        <PageHeader
            title={'Terms and Conditions'}
            desc={'Please read these terms carefully before using ClockMate.'}
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
                        1. Acceptance of Terms
                    </h2>
                    <p className="leading-relaxed">
                        By using ClockMate, you agree to these Terms and Conditions. If you do not agree, please
                        do not use the app.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        2. App Purpose
                    </h2>
                    <p className="leading-relaxed">
                        ClockMate is a chess clock for over-the-board play. It keeps time for two players with
                        preset or custom time controls and optional increment. It is intended for casual and
                        personal use.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        3. Data and Privacy
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>ClockMate works offline and does not require an account.</li>
                        <li>ClockMate does not collect or share any personal data.</li>
                        <li>See the Privacy Policy for details.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        4. Timing Accuracy
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>ClockMate aims to keep accurate time, but timing can be affected by your device,
                            such as battery saving modes, the app being closed, or the screen turning off.
                        </li>
                        <li>ClockMate is not certified for official or rated tournament play. Follow your event
                            organizer's rules on approved clocks.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        5. User Responsibilities
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Players are responsible for choosing the right time control and for tapping the clock
                            to end their turn.
                        </li>
                        <li>Any disputes during a game are between the players.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        6. App Use Restrictions
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>You may not redistribute ClockMate under its name or branding or claim it as your own.
                        </li>
                        <li>ClockMate is provided "as is." We do not guarantee uninterrupted or error-free
                            operation.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        7. Limitation of Liability
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>ClockMate is not liable for lost games, results, or any other outcome from using the
                            app.
                        </li>
                        <li>Use of the app is at your own risk.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        8. Changes to Terms
                    </h2>
                    <p className="leading-relaxed">
                        These Terms may be updated. Continued use of ClockMate constitutes acceptance of changes.
                    </p>
                </section>

                <section className="mb-2">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        9. Contact
                    </h2>
                    <p className="leading-relaxed">
                        For questions, feedback, or issues, contact us via our website or support email.
                    </p>
                </section>
            </div>
        </div>
    </ClockMateLayout>