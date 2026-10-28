"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SOFTWARE_PRODUCTS, SoftwareProduct } from "@/data/software";

interface ProprietarySoftwareProps {
  onContactClick?: () => void;
  className?: string;
  showAllInitially?: boolean;
}

export default function ProprietarySoftware({
  onContactClick,
  className = "",
  showAllInitially = true,
}: ProprietarySoftwareProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    showAllInitially ? "all" : "postbus"
  );

  const displayedProducts =
    selectedProductId === "all"
      ? SOFTWARE_PRODUCTS
      : SOFTWARE_PRODUCTS.filter((p) => p.id === selectedProductId);

  return (
    <section
      id="software-built-by-us"
      className={`py-[120px] px-6 md:px-12 bg-surface dark:bg-[#151515] relative overflow-hidden ${className}`}
    >
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#22c55e]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-[#E11D48]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 fade-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-light dark:bg-primary-container/20 border border-primary/10 text-primary dark:text-[#92ecb1] font-mono text-[11px] font-bold uppercase tracking-wider mb-5 select-none">
              <span className="material-symbols-outlined text-[15px]">code_blocks</span>
              <span>Proprietary SaaS Ecosystem</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-[1.1]">
              Software Built by Us
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant mt-3 leading-relaxed max-w-2xl">
              Beyond agency builds, we invent, engineer, and operate production-grade SaaS platforms
              powering thousands of ecommerce shipments and automated WhatsApp sales every day.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white dark:bg-surface-dark p-1.5 rounded-full border border-primary/10 shadow-sm select-none">
            <button
              onClick={() => setSelectedProductId("all")}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all cursor-pointer ${
                selectedProductId === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              All Software (2)
            </button>
            <button
              onClick={() => setSelectedProductId("postbus")}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedProductId === "postbus"
                  ? "bg-[#E11D48] text-white shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
              PostBus
            </button>
            <button
              onClick={() => setSelectedProductId("vachat")}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedProductId === "vachat"
                  ? "bg-[#03cf65] text-white shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#03cf65]" />
              VaChat
            </button>
          </div>
        </div>

        {/* Product Cards Stack */}
        <div className="space-y-12">
          {displayedProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white dark:bg-surface-dark rounded-[32px] border border-primary/10 dark:border-white/10 p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Product Top Bar */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-primary/5 dark:border-white/5 pb-8">
                {/* Brand Logo & Title */}
                <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="bg-white dark:bg-[#202020] p-3 rounded-2xl border border-primary/10 dark:border-white/10 shadow-xs flex items-center justify-center h-16 min-w-[160px] max-w-[200px]">
                    <img
                      src={product.logo}
                      alt={`${product.name} Logo`}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: product.accentBg,
                          color: product.accentColor,
                        }}
                      >
                        {product.badge}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-on-surface-variant/70 bg-black/5 dark:bg-white/5 px-2.5 py-0.5 rounded-full">
                        Built In-House
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-on-surface">
                      {product.name}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant font-medium">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* External Action Button */}
                <div className="lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-2.5 select-none">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200"
                    style={{ backgroundColor: product.accentColor }}
                  >
                    <span>Visit {product.displayUrl}</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>

                  <Link
                    href={
                      product.id === "postbus"
                        ? "/blogs/how-postbus-streamlines-india-post-shipping-for-shopify"
                        : "/blogs/how-vachat-recovers-abandoned-carts-with-ai-whatsapp-crm"
                    }
                    className="inline-flex items-center gap-1.5 border border-primary/20 dark:border-white/20 hover:border-primary text-on-surface px-4 py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold hover:bg-forest-light dark:hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <span>Read Guide</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>

                  {onContactClick && (
                    <button
                      onClick={onContactClick}
                      className="inline-flex items-center gap-1.5 border border-primary/10 dark:border-white/10 text-on-surface-variant hover:text-primary px-3 py-2.5 rounded-full font-sans text-xs font-medium hover:bg-forest-light dark:hover:bg-white/5 transition-all cursor-pointer"
                    >
                      <span>Inquire</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Main Content: Details + Dashboard Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
                {/* Left Side: Summary, Stats, Features */}
                <div className="lg:col-span-6 space-y-6">
                  <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlight Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 select-none">
                    {product.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-surface dark:bg-[#1f1f1f] border border-primary/5 dark:border-white/5 rounded-2xl p-3.5 text-center"
                      >
                        <div
                          className="font-display text-lg md:text-xl font-black"
                          style={{ color: product.accentColor }}
                        >
                          {stat.value}
                        </div>
                        <div className="font-sans text-[11px] text-on-surface-variant mt-0.5 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-secondary opacity-70">
                      Key Capabilities & Architecture
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-surface dark:bg-[#1b1b1b] p-3.5 rounded-2xl border border-primary/5 dark:border-white/5"
                        >
                          <span
                            className="material-symbols-outlined text-lg shrink-0 mt-0.5"
                            style={{ color: product.accentColor }}
                          >
                            {feat.icon}
                          </span>
                          <div>
                            <h5 className="font-sans text-xs font-bold text-on-surface leading-tight">
                              {feat.title}
                            </h5>
                            <p className="font-sans text-[11px] text-on-surface-variant mt-1 leading-snug">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Integrations Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant/70 font-bold mr-1">
                      Native Stack:
                    </span>
                    {product.integrations.map((item, idx) => (
                      <span
                        key={idx}
                        className="font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full bg-surface dark:bg-white/5 border border-primary/10 text-on-surface"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: High-Resolution Dashboard Mockup */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-primary/10 dark:border-white/10 shadow-lg bg-surface-container group/preview">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/10] w-full overflow-hidden"
                    >
                      <img
                        src={product.dashboardImage}
                        alt={`${product.name} Production Interface`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-end p-6 select-none">
                        <div className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full font-sans text-xs font-bold shadow-lg">
                          <span>Open Live Dashboard ({product.displayUrl})</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                      </div>
                    </a>

                    <div className="p-4 bg-white dark:bg-[#1a1a1a] flex items-center justify-between border-t border-primary/5 dark:border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span className="font-mono text-[11px] font-bold text-on-surface">
                          Status: Live Production SaaS
                        </span>
                      </div>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] font-bold text-primary hover:underline flex items-center gap-1"
                        style={{ color: product.accentColor }}
                      >
                        <span>{product.url}</span>
                        <span className="material-symbols-outlined text-xs">launch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
