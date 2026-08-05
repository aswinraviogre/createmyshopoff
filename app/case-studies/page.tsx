"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

interface CaseStudy {
  title: string;
  niche: string;
  tag: string;
  metrics: string[];
  description: string;
  image: string;
  slug: string;
}

export default function CaseStudies() {
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

  const cases: CaseStudy[] = [
    {
      title: "Kalyan Silks India",
      niche: "Apparel & Fashion Retail",
      tag: "Shopify Redesign",
      metrics: ["+45% Conversions", "+40% Speed", "−20% Bounce Rate"],
      description:
        "We reimagined the digital experience for India's leading traditional wear brand, creating an editorial visual narrative paired with extreme loading speed optimization.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0hSBZLdZED1L5sm8ECvHbqgf3k8HWmQ_F-tHG3ox5-n54G8xfB47tu5qK4b37lfHaQ6RmubU5_F9DZkveoLr-BatRZVoxVzvIMqH0mGJzoEmE9Y3YlgZK_TS-mCDGbY35nVwG_-ysI6-BMj94MEwqVJDWH8eRLGb-DYflgMoHQoCSTr9LuPLOEoq_xCawu8RAmqHp6-xFACiyAxaspjWbMDbxv2ramcd2FqJBfrZUOQlWBOKK0jzy",
      slug: "kalyan-silks-india",
    },
    {
      title: "Dötch Leather UK",
      niche: "Premium Leather Goods",
      tag: "Shopify Redesign",
      metrics: ["−22% Bounce Rate", "+18% AOV", "−30% Costs"],
      description:
        "Elevating a premium leather goods brand through a headless architecture rebuild, focusing on editorial layouts, fast load times, and custom checkout flows.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaScbkagc4rKDV2-bz_aCGS0hcI1KtlTrq7k6Om5E58I8rbvG-bTiH-JY9k_I7O76Ecu2qjyMwHNZlKqfoaIuno18nf93ZTytP55PU1nXEFXLboesIrfwpeU8eM14xBttUGI33Le10oovbj0LajdJIrPqzPx8xxVYMUX7ne4KQ0rnIsNz7GZXAfVBN7pTDn8roKQfCLmoiRrrlRaHluaXe5x3drMM6jWxT_RyTZAfLydBJ3sDpf3X0",
      slug: "dotch-leather-uk",
    },
    {
      title: "Fazyo",
      niche: "Fast Fashion Retail",
      tag: "Shopify Build",
      metrics: ["+58% Searches", "+41% Traffic", "+33% Mobile CVR", "+26% Repeat Visits"],
      description:
        "A full platform rebuild optimized for mobile conversions. We structured quick search filtering and checkout flows to maximize repeated purchases.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDczYFqFqhPU3US2kwHES4q7fwJWY_GQ0prCmffCdU-I93ivetPDISl1BV9Hr52JWXd-vkS9IOneRZwqPzK-vkZBXa0lyxKCIXMoJ_Ahz1yzgG8nnzN7hX3qikO3ol-mu7ihgEmHtxFNf2n8Oxn6FOPsDvd12_YIVpwrxU2SEJNe27-HCyCVP-UgEfkyH3BXNh0B38VPs0ZIe015z8IXspvkKNLqexPUnnq_FnGopu4bMahX5qbDb57jJ1Ug4tq7aVYwA",
      slug: "fazyo",
    },
    {
      title: "Graamyam",
      niche: "Fast Fashion Retail",
      tag: "Shopify Build",
      metrics: ["100% Data Preserved", "0 Downtime", "+47% Speed", "+34% Engagement"],
      description:
        "Safe migration from legacy platform to Shopify with complete SEO ranking preservation, zero order record drops, and high-performance frontend engineering.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpfYXvMb4O_LRnRR_OpH4sxQKE3ddgEVwSm3uOiYPwv4vaeqOCpb9wOmpbIDsLYo99w-MScE-xrKoIKTGXh9k_0Z4S7BGbWFsTBFqZ5LKc0L3T5Bb_q6PUBcv3kVpjedSBiqVafgDAvm_jpdK5ArvAeY89BtFABV2uz0WQO5mjil1Rm3vtju76ULAVeTQjP3jMkYmeIxuGMQ4hOdyCsNHoKKqkJ-iyFpf5Kr-CaHHlB_VHIx7y3oVYYdptRdH1jly06A",
      slug: "graamyam",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-36 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <section className="mb-20 fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider mb-6 select-none border border-primary/10">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              Growth Stories
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-on-surface mb-6 uppercase leading-tight">
              Case Studies
            </h1>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant">
              See how ambitious brands transformed traffic, engagement, and conversions through focused digital experiences. Evidence-based growth.
            </p>
          </div>
        </section>

        {/* Case Studies Bento Grid */}
        <section className="space-y-12">
          {cases.map((cs, idx) => (
            <Link
              key={idx}
              href={`/${cs.slug}`}
              className="group bg-white dark:bg-surface-dark border border-primary/10 rounded-[28px] overflow-hidden hover:shadow-lg transition-shadow duration-300 fade-up block cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row h-auto lg:h-[450px]">
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 select-none mb-6">
                      <span className="bg-surface-container text-on-surface font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md font-bold">
                        {cs.tag}
                      </span>
                      <span className="text-xs text-on-surface-variant">• {cs.niche}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface uppercase mb-4 group-hover:text-primary transition-colors">
                      {cs.title}
                    </h2>
                    <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 mt-8 select-none">
                    {cs.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="bg-forest-light text-primary border border-primary/5 rounded-full px-4 py-1.5 text-xs font-bold shadow-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-full overflow-hidden bg-surface-variant">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-103"
                    style={{ backgroundImage: `url('${cs.image}')` }}
                    aria-label={cs.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-surface-dark via-white/40 dark:via-surface-dark/40 to-transparent lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-dark via-white/40 dark:via-surface-dark/40 to-transparent block lg:hidden" />
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
