import {WalletyLayout} from "@/layouts";
import {PageHeader} from "@/components";

export const WalletyTerms = () =>
    <WalletyLayout>
        <PageHeader
            title={'Terms and Conditions'}
            desc={'Please read these terms carefully before using Wallety.'}
        />

        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="mb-8 border-b border-border pb-8">
                <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Effective Date:</span> February 15, 2026
                </p>
            </div>

            <div className="text-muted-foreground">
                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        1. Acceptance of Terms
                    </h2>
                    <p className="leading-relaxed">
                        By using Wallety, you agree to these Terms and Conditions. If you do not agree, please do
                        not use the app.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        2. App Purpose
                    </h2>
                    <p className="leading-relaxed">
                        Wallety is a minimal expense tracker that helps you deposit/withdraw money, track
                        transactions, and visualize spending. It is intended for personal use and does not provide
                        financial advice.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        3. Data and Privacy
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>All data is stored locally on your device.</li>
                        <li>Optional backups are stored in your Google Drive account.</li>
                        <li>Wallety does not collect or share your financial or personal data.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        4. User Responsibilities
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>You are responsible for maintaining the security of your device and Google account.</li>
                        <li>Ensure correct input of transaction data. Wallety is not liable for any inaccurate data
                            entry.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        5. Backup and Restore
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Users may back up and restore data via Google Drive.</li>
                        <li>Automatic backup frequency can be set by the user.</li>
                        <li>Wallety is not responsible for lost or corrupted backups.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        6. App Use Restrictions
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>You may not reverse-engineer, copy, or redistribute Wallety.</li>
                        <li>Wallety is provided "as is." We do not guarantee uninterrupted or error-free operation.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        7. Limitation of Liability
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Wallety is not liable for any financial losses resulting from the use of the app.</li>
                        <li>All transactions and decisions are the responsibility of the user.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        8. Changes to Terms
                    </h2>
                    <p className="leading-relaxed">
                        These Terms may be updated. Continued use of Wallety constitutes acceptance of changes.
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
    </WalletyLayout>