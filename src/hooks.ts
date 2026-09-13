import {useContext} from "react";
import {ThemeProviderContext, ThemeContextType} from "@/contexts";

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeProviderContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
}