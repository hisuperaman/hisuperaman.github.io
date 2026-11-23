import type {MetadataRoute} from "next";
import {blogPosts} from "@/data/blog";
import {siteUrl} from "@/data/site";

export const dynamic = "force-static";

const staticRoutes = [
    "/",
    "/services/",
    "/blog/",
    "/card/",
];

const appRoutes = ["wallety", "clockmate", "my-friend-bullet"];
const appSubRoutes = ["", "privacy-policy/", "terms/", "support/"];

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...staticRoutes.map((route) => ({url: `${siteUrl}${route}`})),
        ...appRoutes.flatMap((app) => appSubRoutes.map((sub) => ({url: `${siteUrl}/${app}/${sub}`}))),
        ...blogPosts.map((post) => ({url: `${siteUrl}/blog/${post.slug}/`, lastModified: post.date})),
    ];
}
