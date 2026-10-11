"use client";

import {type ReactNode, useEffect, useLayoutEffect, useState} from "react";
import {ThemeProviderContext} from "@/contexts/ThemeContext";
import type {Theme} from "@/definitions";

type ThemeProviderProps = {
    children: ReactNode
    defaultTheme?: Theme
    storageKey: string
}

export const ThemeProvider = ({
                                  children,
                                  defaultTheme = "system",
                                  storageKey,
                                  ...props
                              }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const [loaded, setLoaded] = useState(false)

    // localStorage is only available in the browser, so read the saved theme after hydration
    useLayoutEffect(() => {
        setTheme((localStorage.getItem(storageKey) as Theme) || defaultTheme)
        setLoaded(true)
    }, [storageKey, defaultTheme])

    useEffect(() => {
        if (!loaded) return

        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme, loaded])

    return (
        <ThemeProviderContext.Provider {...props} value={{
            theme,
            setTheme: (theme: Theme) => {
                localStorage.setItem(storageKey, theme)
                setTheme(theme)
            },
        }}>
            {children}
        </ThemeProviderContext.Provider>
    )
}