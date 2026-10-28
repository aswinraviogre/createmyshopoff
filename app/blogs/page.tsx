"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";

export default function Blogs() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filteredPosts =
    selectedTag === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.productTag === selectedTag);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-36 pb-[160px] w-full max-w-[1050px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <section className="mb-14 fade-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider mb-6 select-none border border-primary/10">
              <span className="material-symbols-outlined text-[14px]">feed</span>
              E-Commerce &amp; Engineering Insights
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-on-surface mb-6 uppercase leading-tight">
              Blogs &amp; News
            </h1>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant max-w-2xl">
              In-depth engineering breakdowns, Shopify CRO guides, India Post shipping with PostBus, and WhatsApp AI automation with VaChat.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 select-none">
            {["All", "PostBus", "VaChat", "Shopify"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full font-sans text-xs font-bold transition-all cursor-pointer ${
                  selectedTag === tag
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white dark:bg-surface-dark border border-primary/10 text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {tag === "All" ? "All Articles" : tag}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Post List */}
        <section className="space-y-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group bg-white dark:bg-surface-dark border border-primary/10 rounded-3xl p-6 md:p-8 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col md:flex-row gap-6 md:gap-8 justify-between fade-up items-stretch block"
            >
              <div className="w-full md:w-[290px] shrink-0 aspect-[16/10] rounded-2xl overflow-hidden bg-surface-container shadow-sm border border-primary/5 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {post.productTag && post.productTag !== "Shopify" && (
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider text-white shadow-sm ${
                      post.productTag === "PostBus"
                        ? "bg-[#E11D48]"
                        : "bg-[#03cf65]"
                    }`}
                  >
                    {post.productTag}
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-center gap-2 select-none mb-3 text-[11px] font-sans text-on-surface-variant">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span className="bg-forest-light text-primary px-2 py-0.5 rounded font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-on-surface dark:text-white group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm text-on-surface-variant dark:text-white/70 leading-relaxed mt-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-primary/5 mt-6 flex justify-between items-center select-none">
                  <span className="font-mono text-xs font-bold text-primary flex items-center gap-1 group-hover:underline">
                    Read Full Article
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                  <span className="font-sans text-xs text-on-surface-variant opacity-75">
                    By {post.author.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Blog CTA */}
        <section className="mt-[120px] bg-forest-light dark:bg-primary-container/10 rounded-[24px] p-10 md:p-16 border border-primary/10 fade-up text-center select-none">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-black text-on-surface uppercase font-bold">Want to stay updated?</h2>
            <p className="font-sans text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              We periodically write about Shopify API changes, optimization strategies, and payment settlements in India and globally.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-forest-deep text-white px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md select-none active:scale-95 duration-150"
            >
              Subscribe to Insights
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
