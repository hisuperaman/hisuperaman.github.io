import Link from "next/link";
import {BusinessLayout} from "@/layouts";
import {BusinessCta, HoverArrow} from "@/components";
import {blogPosts, formatPostDate} from "@/data/blog";

export const BlogIndex = () =>
    <BusinessLayout>
        <section className="animate-rise-in pb-10" aria-labelledby="blog-heading">
            <h1 id="blog-heading" className="font-display text-4xl font-bold sm:text-5xl">Blog</h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Practical guides on websites, local SEO and growing a small business online — written for
                business owners in Himachal Pradesh and across India.
            </p>
        </section>

        <div className="animate-rise-in delay-1 space-y-5 pb-12">
            {blogPosts.map((post) => (
                <article key={post.slug} className="group relative rounded-2xl border bg-card p-6 transition-colors hover:border-primary/50">
                    <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
                        {formatPostDate(post.date)}
                    </time>
                    <h2 className="mt-2 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                        <Link href={`/blog/${post.slug}/`} className="after:absolute after:inset-0">
                            {post.title}
                        </Link>
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                        Read article <HoverArrow/>
                    </span>
                </article>
            ))}
        </div>

        <BusinessCta/>
    </BusinessLayout>
