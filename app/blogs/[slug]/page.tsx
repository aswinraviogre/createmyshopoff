import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Create My Shop",
    };
  }

  return {
    title: `${post.title} | Create My Shop Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: [
      post.category,
      post.productTag || "Shopify",
      "Shopify development",
      "e-commerce engineering",
      "Create My Shop",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Create My Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org BlogPosting Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.image.startsWith("http") ? post.image : `https://createmyshop.com${post.image}`,
    datePublished: post.isoDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Create My Shop",
      url: "https://createmyshop.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://createmyshop.com/blogs/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen pt-36 pb-28 px-6 md:px-12 bg-surface dark:bg-[#121212]">
        <div className="max-w-[860px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-on-surface-variant/70 mb-8 select-none">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-primary transition-colors">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-on-surface font-semibold truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Meta Header */}
          <header className="space-y-6 mb-10">
            <div className="flex flex-wrap items-center gap-3 select-none">
              <span className="bg-forest-light text-primary border border-primary/10 px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs font-sans text-on-surface-variant">
                {post.date}
              </span>
              <span>•</span>
              <span className="text-xs font-sans text-on-surface-variant">
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface dark:text-white tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-4 border-t border-primary/10 select-none">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-mono text-sm border border-primary/20">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-sans text-sm font-bold text-on-surface dark:text-white">
                  {post.author.name}
                </div>
                <div className="font-sans text-xs text-on-surface-variant">
                  {post.author.role}
                </div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden border border-primary/10 dark:border-white/10 shadow-lg mb-12 aspect-[16/9] bg-surface-container relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="space-y-10 text-on-surface/90 dark:text-white/90 font-sans leading-relaxed text-[16px] sm:text-[17px]">
            {/* Lead Paragraph */}
            <p className="text-lg sm:text-xl font-medium leading-relaxed text-on-surface dark:text-white/95 border-l-4 border-primary pl-5 py-1 bg-primary/5 rounded-r-2xl">
              {post.content.lead}
            </p>

            {/* Article Sections */}
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4 pt-4">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-on-surface dark:text-white tracking-tight leading-snug">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-on-surface-variant dark:text-white/80 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bulletPoints && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {section.bulletPoints.map((point, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-on-surface-variant dark:text-white/80">
                        <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="my-6 p-6 rounded-2xl bg-[#f4f7f4] dark:bg-white/5 border border-primary/15 dark:border-white/10 space-y-2">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        tips_and_updates
                      </span>
                      {section.callout.title}
                    </div>
                    <p className="text-sm font-sans text-on-surface-variant dark:text-white/80 leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Product Integration Card for PostBus or VaChat */}
            {post.productTag === "PostBus" && (
              <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#E11D48]/10 via-white to-white dark:from-[#E11D48]/20 dark:via-surface-dark dark:to-surface-dark border border-[#E11D48]/30 shadow-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-mono text-[10px] font-bold uppercase tracking-wider">
                      Built In-House
                    </div>
                    <h3 className="font-display text-2xl font-bold text-on-surface dark:text-white">
                      Experience PostBus For India Post
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant dark:text-white/70 max-w-md">
                      Slash logistics costs, generate thermal labels instantly, and track orders across 19,000+ pin codes.
                    </p>
                  </div>
                  <a
                    href="https://www.postbus.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E11D48] hover:bg-[#be123c] text-white px-6 py-3 rounded-full font-sans text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                  >
                    Visit postbus.in
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </a>
                </div>
              </div>
            )}

            {post.productTag === "VaChat" && (
              <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#03cf65]/10 via-white to-white dark:from-[#03cf65]/20 dark:via-surface-dark dark:to-surface-dark border border-[#03cf65]/30 shadow-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03cf65]/10 text-[#00a84d] font-mono text-[10px] font-bold uppercase tracking-wider">
                      Built In-House
                    </div>
                    <h3 className="font-display text-2xl font-bold text-on-surface dark:text-white">
                      Recover Abandoned Carts with VaChat
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant dark:text-white/70 max-w-md">
                      Automate WhatsApp abandoned checkout recovery, verify COD orders, and boost conversions with official Meta API.
                    </p>
                  </div>
                  <a
                    href="https://vachat.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#03cf65] hover:bg-[#02b356] text-white px-6 py-3 rounded-full font-sans text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
                  >
                    Visit vachat.in
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <footer className="mt-16 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary hover:underline"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to All Insights
            </Link>
            <Link
              href="/contact-us"
              className="bg-primary hover:bg-forest-deep text-white px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Start a Conversation
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}
