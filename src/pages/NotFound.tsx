import {Link} from "wouter";
import {Home} from "lucide-react";

export const NotFound = () =>
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="font-display text-8xl font-bold tracking-tighter text-foreground sm:text-9xl">
            404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Page not found
        </h2>

        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-10">
            <Link
                href="/"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
                <Home size={18}/>
                Back to Home
            </Link>
        </div>
    </div>