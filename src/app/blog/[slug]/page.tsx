import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {BlogPostView} from "@/views";
import {blogPosts, getBlogPost} from "@/data/blog";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export const generateStaticParams = () => blogPosts.map((post) => ({slug: post.slug}));

export const generateMetadata = async ({params}: BlogPostPageProps): Promise<Metadata> => {
    const post = getBlogPost((await params).slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        alternates: {canonical: `/blog/${post.slug}/`},
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/blog/${post.slug}/`,
            type: "article",
            publishedTime: post.date,
        },
    };
};

export default async function BlogPostPage({params}: BlogPostPageProps) {
    const post = getBlogPost((await params).slug);
    if (!post) notFound();

    return <BlogPostView post={post}/>;
}
