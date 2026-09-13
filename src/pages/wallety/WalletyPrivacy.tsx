import {WalletyLayout} from "@/layouts";
import {PageHeader} from "@/components";

export const WalletyPrivacy = () =>
    <WalletyLayout>
        <PageHeader
            title={'Privacy Policy'}
            desc={'Your privacy is important to us. Learn how Wallety handles your data.'}
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
                        1. Introduction
                    </h2>
                    <p className="leading-relaxed">
                        Wallety is a minimal expense tracker designed with privacy in mind. We do not have a
                        server—all your data is stored locally on your device or optionally backed up to
                        your Google Drive account.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        2. Data Collection
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Wallety does not collect, store, or share any personal or financial
                            information.
                        </li>
                        <li>All transaction data, balances, and analytics remain local to your device unless
                            you choose to back up to Google Drive.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        3. Google Drive Backup
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Backups stored in your own Google Drive account.</li>
                        <li>Wallety only accesses your Google account for backup/restore purposes.</li>
                        <li>You can enable automatic backups (daily, weekly, monthly, or manual).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        4. Local Storage
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>All app data, including transactions, settings, and analytics, are stored on
                            your device.
                        </li>
                        <li>Wallety does not transmit this data to any external servers.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        5. Privacy &amp; Security
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Since there is no server, your data stays private and secure.</li>
                        <li>Access to your Google Drive backup is managed solely through Google's
                            authentication.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        6. Third-Party Links
                    </h2>
                    <ul className="ml-6 list-disc space-y-2 leading-relaxed">
                        <li>Settings include links to our website for terms, privacy policy, and contact.
                        </li>
                        <li>Wallety is not responsible for third-party sites.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                        7. Changes to this Policy
                    </h2>
                    <p className="leading-relaxed">
                        Updates to this privacy policy will be reflected in the app and on the website.
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
    </WalletyLayout>