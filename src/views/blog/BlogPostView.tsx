import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import {BlogPost} from "@/definitions";
import {BusinessLayout} from "@/layouts";
import {BusinessCta, JsonLd} from "@/components";
import {formatPostDate} from "@/data/blog";
import {portfolio} from "@/data/portfolio";
import {siteUrl} from "@/data/site";

export const BlogPostView = ({post}: { post: BlogPost }) => {
    const postUrl = `${siteUrl}/blog/${post.slug}/`;
    const postSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        keywords: post.keywords.join(', '),
        url: postUrl,
        mainEntityOfPage: postUrl,
        author: {'@type': 'Person', name: portfolio.identity.name, url: siteUrl},
    };

    return (
        <BusinessLayout>
            <JsonLd schema={postSchema}/>

            <Link
                href="/blog/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4"/> All articles
            </Link>

            <article className="animate-rise-in pb-12 pt-8">
                <header className="pb-8">
                    <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
                        {formatPostDate(post.date)} · by {portfolio.identity.name}
                    </time>
                    <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{post.title}</h1>
                    <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
                </header>

                <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-display">
                    {post.sections.map((section, i) => (
                        <section key={i}>
                            {section.heading && <h2>{section.heading}</h2>}
                            {section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}
                            {section.list && (
                                <ul>
                                    {section.list.map((item, j) => <li key={j}>{item}</li>)}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </article>

            <BusinessCta title="Need help with your business website?"/>
        </BusinessLayout>
    );
}
