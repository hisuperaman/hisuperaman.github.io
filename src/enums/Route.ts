export const RoutePaths = {
    empty: "",
    wallety: "wallety",
    clockmate: "clockmate",
    privacyPolicy: "privacy-policy",
    terms: "terms",
    support: "support",
}

export type RoutePath = (typeof RoutePaths)[keyof typeof RoutePaths];