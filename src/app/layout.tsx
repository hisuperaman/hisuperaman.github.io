import type {Metadata} from "next";
import type {ReactNode} from "react";
import {ThemeProvider} from "@/contexts";
import "@/index.css";

export const metadata: Metadata = {
    title: "Aman | Portfolio",
    description: "Personal portfolio of Aman. Software Engineer specializing in Agentic AI and Full Stack Development, focusing on intelligent models and user-facing applications.",
    icons: {
        apple: {url: "/apple-touch-icon.png", sizes: "180x180"},
        icon: [
            {url: "/favicon-32x32.png", type: "image/png", sizes: "32x32"},
            {url: "/favicon-16x16.png", type: "image/png", sizes: "16x16"},
        ],
    },
    manifest: "/site.webmanifest",
};

// Applies the saved theme before first paint to avoid a flash of the wrong theme
const themeScript = `
(function () {
    const theme = localStorage.getItem('portfolio-ui-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!theme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
})();
`;

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{__html: themeScript}}/>
        </head>
        <body>
        <ThemeProvider storageKey="portfolio-ui-theme">
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
