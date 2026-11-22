export const RoutePaths = {
    empty: "",
    wallety: "wallety",
    clockmate: "clockmate",
    myFriendBullet: "my-friend-bullet",
    privacyPolicy: "privacy-policy",
    terms: "terms",
    support: "support",
    services: "services",
    blog: "blog",
}

export type RoutePath = (typeof RoutePaths)[keyof typeof RoutePaths];