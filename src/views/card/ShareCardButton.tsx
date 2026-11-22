"use client";

import {useState} from "react";
import {Check, Share2} from "lucide-react";

export const ShareCardButton = ({url, title}: { url: string; title: string }) => {
    const [copied, setCopied] = useState(false);

    const share = async () => {
        if (navigator.share) {
            try {
                await navigator.share({title, url});
            } catch (error) {
                // Closing the share sheet rejects with AbortError, which isn't a failure
                if ((error as Error).name !== 'AbortError') console.error('Sharing failed:', error);
            }
            return;
        }

        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const Icon = copied ? Check : Share2;

    return (
        <button
            type="button"
            onClick={share}
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
            <Icon className="h-4 w-4"/> {copied ? 'Link copied' : 'Share card'}
        </button>
    );
}
