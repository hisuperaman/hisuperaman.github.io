import type {Metadata} from "next";
import {BlogIndex} from "@/views";

export const metadata: Metadata = {
    title: "Blog — Websites & Local SEO Guides for Small Businesses",
    description: "Practical guides on small business websites, local SEO and Google Business Profile for business owners in Mandi, Himachal Pradesh and across India.",
    alternates: {canonical: "/blog/"},
    openGraph: {url: "/blog/", type: "website"},
};

export default BlogIndex;
