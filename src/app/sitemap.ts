import type {MetadataRoute} from "next";
import {blogPosts} from "@/data/blog";
import {siteUrl} from "@/data/site";

export const dynamic = "force-static";

const staticRoutes = [
    "/",
    "/services/",
    "/blog/",
    "/card/",
    "/wallety/",
    "/clockmate/",
    "/my-friend-bullet/",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...staticRoutes.map((route) => ({url: `${siteUrl}${route}`})),
        ...blogPosts.map((post) => ({url: `${siteUrl}/blog/${post.slug}/`, lastModified: post.date})),
    ];
}
