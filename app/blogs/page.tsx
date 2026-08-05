"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
  excerpt: string;
}

export default function Blogs() {
  const [contactOpen, setContactOpen] = useState(false);

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

  const posts: BlogPost[] = [
    {
      title: "Why Shopify Transaction Fees Don’t Apply to Quick Checkouts Like GoKwik, Razorpay Magic Checkout & Shopflo in India — and How Long This Will Last",
      date: "July 27, 2026",
      readTime: "8 min Read",
      category: "Shopify / Checkouts",
      href: "/why-shopify-transaction-fees-dont-apply-to-quick-checkouts-like-gokwik-razorpay-magic-checkout-shopflo-in-india-and-how-long-this-will-last",
      excerpt:
        "Understand the mechanics behind third-party checkout redirects in India, why they bypass standard Shopify transaction fees, and Vercel/Shopify's upcoming policy updates on headless integrations.",
    },
    {
      title: "Payment Gateway Reconciliation for Indian E-commerce: Methods, Software, GST & Best Practices",
      date: "June 11, 2026",
      readTime: "8 min Read",
      category: "Ecommerce / Payment Gateway",
      href: "/payment-gateway-reconciliation-for-indian-e-commerce-methods-software-gst-best-practices",
      excerpt:
        "A practical blueprint on accounting reconciliation. How to automatically audit settlement accounts against orders, manage refunds, verify transaction charges, and audit GST invoicing.",
    },
    {
      title: "Engineering Greener Ecosystems: The Mayday Internet Sustainability Framework",
      date: "June 8, 2026",
      readTime: "8 min Read",
      category: "Shopify",
      href: "/sustainability-roadmap",
      excerpt:
        "Reducing carbon footprints on modern headless storefronts. How we design asset pipelines, optimize hosting infrastructure, and minimize execution queries to build green eco-conscious ecommerce.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-36 pb-[160px] w-full max-w-[1000px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <section className="mb-20 fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider mb-6 select-none border border-primary/10">
              <span className="material-symbols-outlined text-[14px]">feed</span>
              Latest Updates
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-on-surface mb-6 uppercase leading-tight">
              Blogs &amp; News
            </h1>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant">
              Stay ahead of trends, updates, and growth strategies with our expert-written insights.
            </p>
          </div>
        </section>

        {/* Blog Post List */}
        <section className="space-y-8">
          {posts.map((post, idx) => (
            <article key={idx} className="group bg-white dark:bg-surface-dark border border-primary/10 rounded-3xl p-8 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between fade-up">
              <div>
                <div className="flex items-center gap-2 select-none mb-4 text-[10px] font-mono text-on-surface-variant">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="bg-forest-light text-primary px-2 py-0.5 rounded font-bold">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-extrabold text-on-surface group-hover:text-primary transition-colors uppercase leading-snug">
                  {post.title}
                </h2>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mt-4">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-6 border-t border-primary/5 mt-6 flex justify-between items-center select-none">
                <span className="font-mono text-xs font-bold text-primary flex items-center gap-1">
                  Read Full Article
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
                <span className="font-sans text-xs text-on-surface-variant opacity-75">By Mayday Editorial</span>
              </div>
            </article>
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
