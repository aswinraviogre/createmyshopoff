"use client";

import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ContentItem {
  title: string;
  tag: string;
  heroDescription: string;
  sectionTitle: string;
  sectionDescription: string;
  challengesTitle: string;
  challenges: string[];
  approachTitle: string;
  approach: { step: string; desc: string }[];
  isCaseStudy?: boolean;
  metrics?: string[];
  niche?: string;
  image?: string;
}

const servicesMap: Record<string, ContentItem> = {
  // Services
  "ecommerce-website-development": {
    title: "Store Builds",
    tag: "✦ E-commerce Builds",
    heroDescription: "We build custom, high-performance e-commerce experiences structured for conversion, speed, and long-term scale.",
    sectionTitle: "Growth Shift",
    sectionDescription: "Scaling brands require a robust online storefront that represents the brand and functions seamlessly across all screens.",
    challengesTitle: "Key Challenges in New Builds",
    challenges: [
      "Translating brand aesthetic to functional UI",
      "Ensuring page loads in under 1.5 seconds",
      "Seamless integrations with checkout funnels",
      "Highly responsive layouts for mobile audiences",
      "Building modular blocks for page editors",
    ],
    approachTitle: "Our Approach to Store Builds",
    approach: [
      { step: "Discovery", desc: "Understanding the brand's unique positioning and product portfolio details." },
      { step: "UX Wireframing", desc: "Drafting optimized user flows with absolute focus on checkout speed." },
      { step: "Frontend Build", desc: "Writing clean, optimized stylesheets and components for the frontend." },
      { step: "Go-Live", desc: "Rigorous QA testing across multiple viewport sizes before DNS point." },
    ],
  },
  "shopify-ecommerce-development": {
    title: "Shopify Builds",
    tag: "✦ Premium Shopify Systems",
    heroDescription: "Custom Shopify builds engineered to convert. We focus on theme structure, catalog management, and app integrations.",
    sectionTitle: "Optimizing the Shopify Stack",
    sectionDescription: "Shopify provides the ecosystem, but only careful theme craftsmanship ensures it loads fast and adapts easily to changes.",
    challengesTitle: "Theme & Catalog Bottlenecks",
    challenges: [
      "Bloated theme files slowing conversions",
      "Complex app conflicts breaking customer journeys",
      "Rigid schemas preventing flexible updates",
      "Untracked API integrations disrupting order flows",
    ],
    approachTitle: "Our Approach to Shopify Builds",
    approach: [
      { step: "Clean Architecture", desc: "Developing with custom lightweight sections rather than heavy pre-built templates." },
      { step: "App Audit", desc: "Evaluating and consolidating third-party apps to improve store speeds." },
      { step: "Schema Structuring", desc: "Enabling flexible editor schemas for internal team independence." },
    ],
  },
  "shopify-plus-enterprise": {
    title: "Enterprise Shopify",
    tag: "✦ Enterprise Scale",
    heroDescription: "We help high-volume businesses implement, migrate to, and optimize Shopify Plus—enabling global growth without operational friction.",
    sectionTitle: "Managing Scale & Governance",
    sectionDescription: "Enterprise brands require platforms that support multi-currency, custom automations, and robust internal permissions.",
    challengesTitle: "Key Challenges at Scale",
    challenges: [
      "Integrating ERP, CRM, OMS, and finance applications",
      "Managing multiple localized stores and warehouses",
      "Maintaining uptime and speeds during peak traffic",
      "Team collaboration permissions and governance",
    ],
    approachTitle: "Our Approach to Enterprise Plus",
    approach: [
      { step: "Discover & Assess", desc: "Thorough mapping of business workflows, integrations, and operational risks." },
      { step: "Architect", desc: "Designing secure API integrations, headless frontends, and backend structures." },
      { step: "Automate", desc: "Implementing Shopify Flow and Launchpad scripts to run manual processes automatically." },
    ],
  },
  "integrations-ecommerce-automation": {
    title: "Smart Automation",
    tag: "✦ System Integrations",
    heroDescription: "Connect your e-commerce storefront to your ERP, CRM, inventory manager, and shipping partners with automated workflows.",
    sectionTitle: "Eliminate Manual Tasks",
    sectionDescription: "Scale operations by automating order management, inventory updates, and multi-channel fulfillment syncs.",
    challengesTitle: "Integration Bottlenecks",
    challenges: [
      "Manual order reconciliations causing shipping delays",
      "Inventory mismatch across multiple selling channels",
      "Broken webhooks failing to update payment records",
      "Lack of real-time shipment updates for customers",
    ],
    approachTitle: "Our Approach to Automations",
    approach: [
      { step: "Map Workflows", desc: "Documenting all manual touchpoints across teams and systems." },
      { step: "API Connection", desc: "Building secure, low-latency API connections using robust middleware." },
      { step: "Audit & Monitor", desc: "Implementing alert notifications for any failed transactions or sync loops." },
    ],
  },
  "ecommerce-rebuilds-for-legacy-brands": {
    title: "Brand Rebuilds",
    tag: "✦ Legacy Migration",
    heroDescription: "Transform legacy architectures into fast, modern e-commerce storefronts without losing historical order records or SEO rankings.",
    sectionTitle: "Modernizing Commerce Engines",
    sectionDescription: "Legacy codebases limit growth. We build fast, composable solutions designed to withstand modern traffic patterns.",
    challengesTitle: "Legacy System Hurdles",
    challenges: [
      "Rigid code preventing minor layout edits",
      "Heavy maintenance and hosting overheads",
      "Poor search engine crawlability and mobile experience",
      "Complex legacy API structures lacking documentation",
    ],
    approachTitle: "Our Approach to Brand Rebuilds",
    approach: [
      { step: "Data Export", desc: "Exporting all customer records, order history, and product details securely." },
      { step: "Re-architecting", desc: "Restructuring URLs and catalog filters to maximize user ease." },
      { step: "Launch Strategy", desc: "Coordinated deployment with 301 redirects to protect all search rankings." },
    ],
  },
  "platform-migration": {
    title: "Safe Migration",
    tag: "✦ Platform Migration",
    heroDescription: "Safely move from Magento, WooCommerce, or custom databases to Shopify or Shopify Plus with zero downtime.",
    sectionTitle: "Risk-Free Platform Shift",
    sectionDescription: "Migrating platforms involves critical risks. We protect your customer data, historical records, and SEO rankings.",
    challengesTitle: "Migration Risks",
    challenges: [
      "Data corruption during database transitions",
      "Broken payment gateway tokens and account resets",
      "Drastic drop in organic search traffic rankings",
      "Temporary site downtime interrupting daily sales",
    ],
    approachTitle: "Our Approach to Migration",
    approach: [
      { step: "Data Audit", desc: "Sanitizing old database structures to fit the new platform requirements." },
      { step: "Redirect Mapping", desc: "Mapping 1:1 old URLs to new endpoints to retain authority." },
      { step: "Sandbox Testing", desc: "Testing complete customer checkouts on staging before final DNS propagation." },
    ],
  },
  "conversion-rate-optimisation": {
    title: "CRO Growth",
    tag: "✦ Conversion Rate Optimisation",
    heroDescription: "Data-driven experiments to improve checkout rates, reduce cart abandonment, and increase Average Order Value (AOV).",
    sectionTitle: "Scientific Growth",
    sectionDescription: "We do not guess layouts. We study session recordings, analyze heatmaps, and run tests to optimize growth.",
    challengesTitle: "Conversion Bottlenecks",
    challenges: [
      "High drop-offs on product pages and cart steps",
      "Complicated checkout forms causing checkout drops",
      "Lack of clear trust signals and product clarity",
      "Slow loading times on mobile network connections",
    ],
    approachTitle: "Our Approach to CRO",
    approach: [
      { step: "Analyze Heatmaps", desc: "Identifying where customers click and where they lose attention." },
      { step: "A/B Testing", desc: "Deploying targeted variations to test headlines, buttons, and layouts." },
      { step: "Refine checkout", desc: "Minimizing steps required to complete an order on mobile checkouts." },
    ],
  },
  "checkout-funnel-optimisation": {
    title: "Funnel Optimisation",
    tag: "✦ Funnel Optimisation",
    heroDescription: "Frictionless checkout paths. We build customized checkouts that reduce purchase resistance and increase conversions.",
    sectionTitle: "Maximising Final Purchase Intent",
    sectionDescription: "The checkout page is where revenue is won or lost. We design clean, conversion-focused checkout flows.",
    challengesTitle: "Checkout Drop-off Points",
    challenges: [
      "Hidden shipping fees shown late in the funnel",
      "Mandatory account sign-ups preventing guest checkout",
      "Limited local payment options causing exit drops",
      "Slow payment processing scripts raising error pages",
    ],
    approachTitle: "Our Approach to Funnel Design",
    approach: [
      { step: "Simplify Fields", desc: "Reducing checkout forms to the absolute minimum required fields." },
      { step: "Integrate Gateways", desc: "Enabling quick checkout options like Razorpay, Shopflo, or GoKwik." },
      { step: "Order Bump", desc: "Adding low-risk checkout add-ons to increase final cart sizes." },
    ],
  },
  "retention-ltv-revenue-expansion": {
    title: "Revenue Expansion",
    tag: "✦ LTV & Customer Retention",
    heroDescription: "Increase Customer Lifetime Value (LTV) through automated email sequences, loyalty setups, and subscription commerce.",
    sectionTitle: "Growth Beyond First Order",
    sectionDescription: "Acquisition costs are rising. E-commerce success requires returning customers who buy repeatedly.",
    challengesTitle: "Retention Hurdles",
    challenges: [
      "High single-purchase customer ratios",
      "Low open rates on email automations",
      "Difficult subscription editing interfaces",
      "Underperforming loyalty or discount schemes",
    ],
    approachTitle: "Our Approach to Retention",
    approach: [
      { step: "RFM Segmentation", desc: "Segmenting buyers based on Recency, Frequency, and Monetary values." },
      { step: "Flow Automation", desc: "Creating triggered flows for cart abandonment, welcome loops, and re-orders." },
      { step: "Subscriptions", desc: "Implementing seamless Shopify subscription tools (e.g. Recharge, Loop)." },
    ],
  },
  "ecommerce-analytics": {
    title: "Commerce Insights",
    tag: "✦ Ecommerce Analytics",
    heroDescription: "Clean data setups. We implement server-side tracking and attribution tools to track your metrics accurately.",
    sectionTitle: "Unify Performance Data",
    sectionDescription: "iOS updates broke standard pixel tracking. We build robust server-side attribution to audit marketing spend.",
    challengesTitle: "Tracking Anomalies",
    challenges: [
      "Mismatched Shopify orders vs. Google Analytics records",
      "Inaccurate Meta Pixel purchase events tracking",
      "Ad spend attribution loss due to ad-blockers",
      "Complicated custom conversion loops untracked",
    ],
    approachTitle: "Our Approach to Analytics",
    approach: [
      { step: "GTM Server Side", desc: "Setting up Google Tag Manager Container hosted on cloud servers." },
      { step: "Conversion API", desc: "Direct server-to-server triggers for Meta and Google Ads pixels." },
      { step: "Custom Dashboards", desc: "Unifying traffic, cost, and order data in readable layouts." },
    ],
  },
  "ecommerce-consultation": {
    title: "Strategic Advisory",
    tag: "✦ Ecommerce Consultation",
    heroDescription: "Expert consultancy for complex commerce architecture choices, multi-channel strategy, and vendor selection.",
    sectionTitle: "Unbiased Technical Guidance",
    sectionDescription: "Choosing the wrong stack wastes years. We provide objective consulting to help you make correct tech investments.",
    challengesTitle: "Decision Paralysis at Scale",
    challenges: [
      "Choosing between headless architecture vs. Monolithic Shopify",
      "Evaluating ERP vendors (SAP, NetSuite, Dynamics) for commerce",
      "Structuring multi-currency logistics and warehousing",
      "Budgeting team capabilities for internal engineering",
    ],
    approachTitle: "Our Approach to Strategy",
    approach: [
      { step: "Systems Review", desc: "Auditing current software platforms, speeds, and team capacities." },
      { step: "Target Design", desc: "Mapping target architecture showing software dependencies." },
      { step: "Vendor Selection", desc: "Assisting with specifications, RFPs, and developer assessments." },
    ],
  },

  // Case Studies
  "kalyan-silks-india": {
    title: "Kalyan Silks India",
    tag: "✦ Case Study",
    niche: "Apparel & Fashion Retail",
    heroDescription: "We reimagined the digital experience for India's leading traditional wear brand, creating an editorial visual narrative paired with extreme loading speed optimization.",
    sectionTitle: "Migration & Redesign Impact",
    sectionDescription: "Kalyan Silks required an online architecture capable of representing high-end silks, supporting localized shopping experiences, and preserving thousands of search rankings.",
    challengesTitle: "Technical Migration Bottlenecks",
    challenges: [
      "Migrating legacy database tables containing over 100,000 order records safely",
      "Retaining historical customer credentials and passwords to prevent checkout frictions",
      "Setting up high-performance search queries for traditional catalog browsing",
      "Achieving mobile loading speeds under 1.8 seconds on 4G cellular grids",
    ],
    approachTitle: "Our Project Roadmap",
    approach: [
      { step: "Discover & Prep", desc: "Auditing organic ranking backlinks to prepare a clean SEO redirect sheet." },
      { step: "Architecture Design", desc: "Developing a custom lightweight theme stack with minimal script bloat." },
      { step: "Data Import", desc: "Executing secure database scripts to migrate customer profiles, reviews, and historical data." },
    ],
    isCaseStudy: true,
    metrics: ["+45% Conversions", "+40% Speed", "−20% Bounce Rate"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0hSBZLdZED1L5sm8ECvHbqgf3k8HWmQ_F-tHG3ox5-n54G8xfB47tu5qK4b37lfHaQ6RmubU5_F9DZkveoLr-BatRZVoxVzvIMqH0mGJzoEmE9Y3YlgZK_TS-mCDGbY35nVwG_-ysI6-BMj94MEwqVJDWH8eRLGb-DYflgMoHQoCSTr9LuPLOEoq_xCawu8RAmqHp6-xFACiyAxaspjWbMDbxv2ramcd2FqJBfrZUOQlWBOKK0jzy",
  },
  "dotch-leather-uk": {
    title: "Dötch Leather UK",
    tag: "✦ Case Study",
    niche: "Premium Leather Goods",
    heroDescription: "Elevating a premium leather goods brand through a headless architecture rebuild, focusing on editorial layouts, fast load times, and custom checkout flows.",
    sectionTitle: "Speed & Cost Impact",
    sectionDescription: "Dötch Leather needed to scale their Average Order Value (AOV) while decreasing hosting fees and custom maintenance overheads.",
    challengesTitle: "Checkout Friction & Bloat",
    challenges: [
      "Overloading shop pages with heavy media files slowing conversions",
      "Rigid checkout pathways raising mobile abandonment rates",
      "High monthly maintenance costs on legacy virtual private servers",
    ],
    approachTitle: "Our Project Roadmap",
    approach: [
      { step: "Design Optimization", desc: "Drafting high-conversion product pages with minimal visual layout shifts." },
      { step: "Shopify Upgrade", desc: "Rebuilding on Shopify Plus with highly customized Liquid schemas." },
      { step: "Gateway Integration", desc: "Implementing friction-free checkout workflows to lower card abandonments." },
    ],
    isCaseStudy: true,
    metrics: ["−22% Bounce Rate", "+18% AOV", "−30% Costs"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaScbkagc4rKDV2-bz_aCGS0hcI1KtlTrq7k6Om5E58I8rbvG-bTiH-JY9k_I7O76Ecu2qjyMwHNZlKqfoaIuno18nf93ZTytP55PU1nXEFXLboesIrfwpeU8eM14xBttUGI33Le10oovbj0LajdJIrPqzPx8xxVYMUX7ne4KQ0rnIsNz7GZXAfVBN7pTDn8roKQfCLmoiRrrlRaHluaXe5x3drMM6jWxT_RyTZAfLydBJ3sDpf3X0",
  },
  "fazyo": {
    title: "Fazyo",
    tag: "✦ Case Study",
    niche: "Fast Fashion Retail",
    heroDescription: "A full platform rebuild optimized for mobile conversions. We structured quick search filtering and checkout flows to maximize repeated purchases.",
    sectionTitle: "Traffic & CVR Impact",
    sectionDescription: "Fazyo required an agile frontend that loads instantaneous product filter results to match user search velocity.",
    challengesTitle: "Mobile Search Hurdles",
    challenges: [
      "Poor product categorization hindering organic search results discovery",
      "High bounce rates during mobile catalog browsing on slow networks",
      "Failing to capture repeat purchase intentions due to slow account dashboards",
    ],
    approachTitle: "Our Project Roadmap",
    approach: [
      { step: "Re-indexing Catalog", desc: "Structuring search terms, tags, and product variants logically." },
      { step: "Frontend Dev", desc: "Optimizing image pipelines and JavaScript bundles for instant rendering." },
      { step: "User Loop Flows", desc: "Deploying automated email flows and discount setups to increase customer retention." },
    ],
    isCaseStudy: true,
    metrics: ["+58% Searches", "+41% Traffic", "+33% Mobile CVR", "+26% Repeat Visits"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDczYFqFqhPU3US2kwHES4q7fwJWY_GQ0prCmffCdU-I93ivetPDISl1BV9Hr52JWXd-vkS9IOneRZwqPzK-vkZBXa0lyxKCIXMoJ_Ahz1yzgG8nnzN7hX3qikO3ol-mu7ihgEmHtxFNf2n8Oxn6FOPsDvd12_YIVpwrxU2SEJNe27-HCyCVP-UgEfkyH3BXNh0B38VPs0ZIe015z8IXspvkKNLqexPUnnq_FnGopu4bMahX5qbDb57jJ1Ug4tq7aVYwA",
  },
  "graamyam": {
    title: "Graamyam",
    tag: "✦ Case Study",
    niche: "Fast Fashion Retail",
    heroDescription: "Safe migration from legacy platform to Shopify with complete SEO ranking preservation, zero order record drops, and high-performance frontend engineering.",
    sectionTitle: "SEO & Speed Impact",
    sectionDescription: "Graamyam needed to switch to a stable SaaS platform to support traffic growth without losing historical organic ranking authority.",
    challengesTitle: "Safe Platform Shift Risks",
    challenges: [
      "High danger of dropping hard-earned search rankings on Google",
      "Mapping customer passwords and addresses cleanly to the new database",
      "Mitigating site speed bottlenecks caused by old tracking pixels",
    ],
    approachTitle: "Our Project Roadmap",
    approach: [
      { step: "URL Integrity Audit", desc: "Listing every indexed page to guarantee complete 301 redirect cover." },
      { step: "Clean Store Setup", desc: "Configuring a lightweight Shopify theme, removing all obsolete integrations." },
      { step: "DNS Propagation", desc: "Carefully timed midnight cutover to ensure zero downtime." },
    ],
    isCaseStudy: true,
    metrics: ["100% Data Preserved", "0 Downtime", "+47% Speed", "+34% Engagement"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpfYXvMb4O_LRnRR_OpH4sxQKE3ddgEVwSm3uOiYPwv4vaeqOCpb9wOmpbIDsLYo99w-MScE-xrKoIKTGXh9k_0Z4S7BGbWFsTBFqZ5LKc0L3T5Bb_q6PUBcv3kVpjedSBiqVafgDAvm_jpdK5ArvAeY89BtFABV2uz0WQO5mjil1Rm3vtju76ULAVeTQjP3jMkYmeIxuGMQ4hOdyCsNHoKKqkJ-iyFpf5Kr-CaHHlB_VHIx7y3oVYYdptRdH1jly06A",
  },
};

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = use(params);
  const service = resolvedParams.service;
  const content = servicesMap[service];

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
  }, [service]);

  if (!content) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-[160px] pb-12 px-6 md:px-12 max-w-[1200px] mx-auto fade-up relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-light text-primary font-mono text-[12px] font-medium uppercase tracking-widest mb-8 border border-primary/10 select-none">
            <span className="material-symbols-outlined text-[14px]">
              {content.isCaseStudy ? "verified" : "architecture"}
            </span>
            {content.tag}
          </div>
          <h1 className="font-display text-[44px] md:text-[68px] font-black text-on-surface mb-8 tracking-tighter leading-tight uppercase">
            {content.title}
          </h1>
          {content.niche && (
            <p className="font-mono text-xs text-on-surface-variant mb-4 select-none">
              Niche: {content.niche}
            </p>
          )}
          <p className="font-sans text-[18px] leading-[30px] text-secondary max-w-2xl pl-0 md:pl-8 border-l-2 border-primary">
            {content.heroDescription}
          </p>
        </div>
      </section>

      {/* Case Study Metrics Banner */}
      {content.isCaseStudy && content.metrics && (
        <section className="py-12 bg-forest-light border-y border-primary/10 fade-up select-none">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {content.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display text-4xl md:text-5xl font-black text-primary uppercase">
                  {metric.split(" ")[0]}
                </div>
                <div className="font-sans text-xs font-bold text-secondary uppercase tracking-wider">
                  {metric.split(" ").slice(1).join(" ")}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Details section */}
      <section className="py-[80px] px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-5 space-y-6 fade-up">
            <div className="inline-flex items-center gap-2 bg-forest-light text-primary-container px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-[16px]">info</span>
              {content.sectionTitle}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight">
              {content.isCaseStudy ? "The Outcome" : "Operational Focus"}
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              {content.sectionDescription}
            </p>
          </div>

          {/* Key Challenges Checklist */}
          <div className="lg:col-span-7 bg-white dark:bg-surface-dark border border-primary/10 rounded-3xl p-8 shadow-sm fade-up">
            <h3 className="font-sans text-base font-bold text-on-surface mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">warning</span>
              {content.challengesTitle}
            </h3>
            <ul className="space-y-4">
              {content.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-0.5 text-lg">check_circle</span>
                  <span className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study Details Image */}
      {content.isCaseStudy && content.image && (
        <section className="py-8 bg-white dark:bg-[#181818] px-6 md:px-12 fade-up">
          <div className="max-w-[1200px] mx-auto h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-md border border-primary/10 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${content.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </section>
      )}

      {/* Approach Timeline */}
      <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#181818]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">settings</span>
              <span className="text-primary font-semibold">Our Blueprint</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              {content.approachTitle}
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              A careful, step-by-step roadmap to minimize migration and operational risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            {content.approach.map((item, idx) => (
              <div key={idx} className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 relative flex flex-col justify-between hover:scale-102 transition-transform duration-300">
                <div>
                  <span className="font-mono text-xs text-primary font-bold bg-forest-light px-2.5 py-1 rounded-md">
                    0{idx + 1}
                  </span>
                  <h4 className="font-sans text-base font-bold text-on-surface mt-6 mb-3 uppercase tracking-tight">{item.step}</h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
