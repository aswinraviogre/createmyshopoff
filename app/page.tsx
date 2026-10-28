"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";
import { CLIENT_PROJECTS, FEATURED_PROJECTS } from "@/data/projects";
import ShopifyAppDev from "@/components/ShopifyAppDev";
import WhatsAppAutomation from "@/components/WhatsAppAutomation";
import ProprietarySoftware from "@/components/ProprietarySoftware";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activePlatformTab, setActivePlatformTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "Shopify",
    challenge: "",
  });
  const [isHumanVerified, setIsHumanVerified] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const platformFeatures = [
    {
      id: "ecommerce-builds",
      title: "Ecommerce Builds",
      subtitle: "Stable ecommerce foundations for growth.",
      href: "/ecommerce-website-development",
      icon: "shopping_bag",
      image: "/projects/taruni.webp",
      badge1: "⚡ Sub-1s Fast Load Time",
      badge2: "✦ 100% Mobile Optimized",
      badge3: "✦ Scalable Architecture",
      badge4: "✦ High Conversion UX",
      accent: "#22c55e",
    },
    {
      id: "shopify-dev",
      title: "Shopify Development",
      subtitle: "Clean Shopify systems built to scale.",
      href: "/shopify-ecommerce-development",
      icon: "paid",
      image: "/projects/malika-clothing.webp",
      badge1: "✦ Liquid & Hydrogen Experts",
      badge2: "✦ 99.99% Guaranteed SLA",
      badge3: "✦ Zero-Friction Checkout",
      badge4: "✦ Custom App Integrations",
      accent: "#10b981",
    },
    {
      id: "platform-migration",
      title: "Platform Migration",
      subtitle: "Safe migrations protecting revenue and SEO.",
      href: "/platform-migration",
      icon: "dns",
      image: "/projects/beyond-be-bella.webp",
      badge1: "✦ 100% SEO Retention",
      badge2: "✦ Zero Downtime Switch",
      badge3: "✦ Full Order & Data Transfer",
      badge4: "✦ Automated URL Mapping",
      accent: "#16a34a",
    },
  ];

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



  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] md:pt-[180px] pb-12 px-6 md:px-12 max-w-[1400px] mx-auto fade-up relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="text-on-surface/80 dark:text-white/80 font-sans text-[13px] md:text-[14px] font-medium tracking-wide mb-6 select-none flex items-center justify-center gap-1.5">
            <span className="text-[12px] text-on-surface/60 dark:text-white/60 font-semibold">+</span>
            Premium Shopify Developers
          </div>
          <h1 className="font-sans text-[44px] md:text-[80px] font-normal text-on-surface dark:text-white mb-6 tracking-tight leading-[1.1] max-w-4xl">
            Build e-commerce
            <br />
            that scales with confidence
          </h1>
          <div className="flex flex-col items-center gap-8 mt-4 w-full">
            <p className="font-sans text-base md:text-[18px] leading-relaxed text-secondary dark:text-white/60 max-w-2xl">
              Trusted e-commerce solutions designed to scale with your brand.
            </p>
            <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto select-none">
              <button
                onClick={() => setContactOpen(true)}
                className="bg-[#b3e620] hover:bg-[#a6d71b] text-on-surface px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 duration-150 cursor-pointer shrink-0"
              >
                Start a Conversation
              </button>
              <Link
                href="/recent-projects"
                className="text-center bg-white dark:bg-transparent border border-outline-variant/60 dark:border-white/10 hover:border-primary text-on-surface dark:text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 duration-150 shrink-0"
              >
                View Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Logo-Style Marquee Ticker (Matching Reference Image) */}
      <section className="py-12 bg-white dark:bg-[#181818] border-y border-primary/5 dark:border-white/5 select-none overflow-hidden relative fade-up">
        {/* Soft edge gradient fades */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-36 bg-gradient-to-r from-white to-transparent dark:from-[#181818] z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-36 bg-gradient-to-l from-white to-transparent dark:from-[#181818] z-10 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 mb-8 text-center">
          <p className="font-sans text-xs md:text-sm font-medium tracking-normal text-on-surface/80 dark:text-white/80">
            Trusted by growing brands across industries
          </p>
        </div>

        <div className="w-full overflow-hidden relative">
          <div className="flex animate-marquee gap-14 md:gap-20 items-center whitespace-nowrap">
            {[...CLIENT_PROJECTS, ...CLIENT_PROJECTS, ...CLIENT_PROJECTS].map((project, idx) => (
              <a 
                key={`${project.id}-${idx}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${project.name} · ${project.category}`}
                className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 select-none cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.alt || project.name}
                  className="h-7 md:h-9 w-auto max-w-[150px] md:max-w-[180px] object-contain pointer-events-none select-none"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>



      {/* Statement & Values Section (Dark variant) */}
      <section className="py-[120px] bg-primary-container text-white px-6 md:px-12 fade-up relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-widest mb-8 border border-white/20 select-none">
            <span className="material-symbols-outlined text-[14px]">info</span>
            Who We Are
          </div>
          <h2 className="font-display text-[28px] md:text-[40px] font-semibold leading-tight mb-16 tracking-tight">
            We started Mayday to be the kind of partner we wished existed when we were building complex systems ourselves — one that does things properly, even when it takes longer.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white text-on-surface p-6 rounded-3xl flex flex-col items-center text-center shadow-md">
              <div className="w-12 h-12 bg-[#b3e620] rounded-full flex items-center justify-center shrink-0 mb-4 shadow-sm">
                <span className="material-symbols-outlined text-on-surface">handshake</span>
              </div>
              <h4 className="font-sans text-base font-bold">Long-Term Thinking</h4>
              <p className="text-xs text-secondary mt-1">Built for years</p>
            </div>
            <div className="bg-white text-on-surface p-6 rounded-3xl flex flex-col items-center text-center shadow-md">
              <div className="w-12 h-12 bg-[#b3e620] rounded-full flex items-center justify-center shrink-0 mb-4 shadow-sm">
                <span className="material-symbols-outlined text-on-surface">psychology</span>
              </div>
              <h4 className="font-sans text-base font-bold">Thoughtful Decisions</h4>
              <p className="text-xs text-secondary mt-1">No shortcuts</p>
            </div>
            <div className="bg-white text-on-surface p-6 rounded-3xl flex flex-col items-center text-center shadow-md">
              <div className="w-12 h-12 bg-[#b3e620] rounded-full flex items-center justify-center shrink-0 mb-4 shadow-sm">
                <span className="material-symbols-outlined text-on-surface">diamond</span>
              </div>
              <h4 className="font-sans text-base font-bold">Clear Communication</h4>
              <p className="text-xs text-secondary mt-1">Always informed</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-deep/20 to-transparent pointer-events-none"></div>
      </section>

      {/* Shopify App Development Section */}
      <ShopifyAppDev onContactClick={() => setContactOpen(true)} />

      {/* WhatsApp Ecommerce Automation Section */}
      <WhatsAppAutomation onContactClick={() => setContactOpen(true)} />

      {/* Proprietary Software Built By Us - PostBus & VaChat */}
      <ProprietarySoftware onContactClick={() => setContactOpen(true)} />

      {/* Selected Works - Real Client Projects */}
      <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#181818] border-b border-primary/5">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 fade-up">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
                <span className="material-symbols-outlined text-primary text-[14px]">star</span>
                <span className="text-primary font-semibold">Our Recent Work</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
                Featured Projects
              </h2>
              <p className="font-sans text-base text-on-surface-variant mt-2">
                A selection of brands we've helped build, transform and grow across fashion, beauty, wellness, food, gifting and more.
              </p>
            </div>
            <Link
              href="/recent-projects"
              className="border border-primary text-primary px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2 w-max select-none cursor-pointer"
            >
              All 16 Projects
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
            {FEATURED_PROJECTS.map((project) => (
              <article key={project.id} className="group bg-surface dark:bg-surface-dark rounded-[24px] border border-primary/10 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div>
                  <div className="h-[220px] relative bg-surface-container overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                      aria-label={project.alt}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-surface-dark/90 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-primary border border-primary/5 select-none shadow-sm font-bold">
                      {project.category} {project.location ? `· ${project.location}` : ""}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[20px] font-extrabold text-on-surface mb-2 uppercase line-clamp-1">
                      {project.name}
                    </h3>
                    <p className="font-sans text-xs text-on-surface-variant opacity-80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 select-none">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-primary hover:text-forest-deep transition-colors"
                  >
                    Visit Website
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">open_in_new</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-[120px] px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Phone Mockup with 3 floating notifications */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 fade-up">
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/18] bg-surface-container rounded-[40px] overflow-hidden border-[6px] border-on-surface shadow-2xl select-none image-container">
              <img 
                src="/phone_mockup.png"
                alt="Shopify Phone Mockup"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badge 1 (Top-Left): 73.6% Conversion Rate */}
            <div className="absolute top-[10%] -left-4 md:-left-8 z-30 flex">
              <div className="animate-float-slow bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ 73.6% Conversion Rate</span>
              </div>
            </div>

            {/* Badge 2 (Middle-Right): 145.4% YoY Growth */}
            <div className="absolute top-[40%] -right-4 md:-right-8 z-30 flex">
              <div className="animate-float-medium bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ 145.4% YoY Growth</span>
              </div>
            </div>

            {/* Badge 3 (Bottom-Left): 2.8s Load Speed */}
            <div className="absolute bottom-[15%] -left-6 md:-left-12 z-30 flex">
              <div className="animate-float-fast bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ 2.8s Load Speed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title and stats list */}
          <div className="lg:col-span-6 space-y-6 fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-6 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">verified</span>
              <span className="text-primary font-semibold">Proven Results</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface mb-6 uppercase">
              What Careful Work Looks Like
            </h2>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant max-w-lg">
              When you do ecommerce work properly and without shortcuts, the outcomes tend to take care of themselves.
            </p>
            
            {/* Stats List */}
            <div className="space-y-4 pt-4 border-t border-primary/5">
              <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="font-display text-3xl md:text-4xl font-black text-primary">50+</span>
                <span className="font-sans text-xs font-semibold text-secondary">Shopify Stores Launched</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="font-display text-3xl md:text-4xl font-black text-primary">7+</span>
                <span className="font-sans text-xs font-semibold text-secondary">Years in Shopify Ecosystem</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="font-display text-3xl md:text-4xl font-black text-primary">₹10Cr+</span>
                <span className="font-sans text-xs font-semibold text-secondary">Revenue Enabled</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="font-display text-3xl md:text-4xl font-black text-primary">2hr</span>
                <span className="font-sans text-xs font-semibold text-secondary">Response Guarantee</span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-on-surface-variant italic mt-8 max-w-md border-l-2 border-primary/20 pl-4">
              Every number here belongs to a real brand — one we were trusted to build, migrate, or grow.
            </p>
          </div>
        </div>
      </section>

      {/* Right Fit Section */}
      <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#181818] right-fit-section fade-up">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description & Bullets */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-forest-light text-primary px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none border border-primary/5">
              <span className="material-symbols-outlined text-[16px] text-primary">target</span>
              Right Fit
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-none">
              For Leaders
              <br />
              Who Need Certainty
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              We work best with founders past the early stage, digital heads accountable for revenue, and brands where ecommerce isn't optional — it's the business.
            </p>
            <div className="space-y-3 select-none">
              {["Scaling Founders", "Heads of Digital", "Core-Channel Brands"].map((fit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <span className="font-sans text-sm font-semibold text-on-surface">{fit}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-[#5c5f5e] italic border-l-2 border-primary pl-4 pt-1">
              If your business depends on ecommerce working every day — we're built for you.
            </p>
          </div>

          {/* Right Column: Image with 3 floating badges */}
          <div className="lg:col-span-7 relative flex justify-center items-center py-8">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[36px] overflow-hidden border border-primary/10 dark:border-white/5 shadow-lg image-container">
              <img
                className="w-full h-full object-cover"
                alt="Beyond Be Bella E-Commerce Store Showcase"
                src="/projects/beyond-be-bella.webp"
              />
            </div>

            {/* Badge 1 (Top-Left): Team Status: Responding in < 2hr */}
            <div className="badge-left-1 absolute top-[15%] -left-4 md:-left-8 z-30 flex">
              <div className="animate-float-slow bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ Team Status: Responding in &lt; 2hr</span>
              </div>
            </div>

            {/* Badge 2 (Middle-Right): Project Status: Delivered in 3w */}
            <div className="badge-right absolute top-[48%] -right-4 md:-right-8 z-30 flex">
              <div className="animate-float-medium bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ Project Status: Delivered in 3w</span>
              </div>
            </div>

            {/* Badge 3 (Bottom-Left): SLA Status: 100% Up-Time */}
            <div className="badge-left-2 absolute bottom-[18%] -left-6 md:-left-12 z-30 flex">
              <div className="animate-float-fast bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ SLA Status: 100% Up-Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build & Platform Services */}
      <section className="py-[120px] px-6 md:px-12 bg-surface build-platform-section fade-up relative overflow-hidden">
        {/* Soft background ambient blur glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#22c55e]/15 via-primary/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-0" />

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Interactive Image Showcase with Animated Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 order-last lg:order-first">
            
            {/* Ambient Card Shadow / Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#22c55e]/25 via-primary/15 to-transparent blur-2xl rounded-[40px] opacity-75 pointer-events-none" />

            {/* Main Interactive Showcase Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[32px] md:rounded-[40px] overflow-hidden border border-primary/10 dark:border-white/10 shadow-2xl bg-surface-container group">
              <img
                key={activePlatformTab}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                alt={platformFeatures[activePlatformTab].title}
                src={platformFeatures[activePlatformTab].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Active Label Indicator */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white select-none pointer-events-none">
                <span className="font-sans text-xs font-semibold tracking-wide drop-shadow-md">
                  {platformFeatures[activePlatformTab].title}
                </span>
                <span className="font-mono text-[10px] uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Interactive Preview
                </span>
              </div>
            </div>

            {/* Badge 1 (Top-Left): Primary Advantage */}
            <div className="absolute top-[10%] -left-3 md:-left-6 z-30 flex animate-float-slow select-none">
              <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md text-on-surface p-2.5 pr-4 rounded-full flex items-center gap-2.5 shadow-xl border border-primary/10">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-white text-base">verified</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface dark:text-white leading-tight">
                  {platformFeatures[activePlatformTab].badge1}
                </span>
              </div>
            </div>

            {/* Badge 2 (Bottom-Left): Speed & Performance */}
            <div className="absolute bottom-[16%] -left-4 md:-left-8 z-30 flex animate-float-fast select-none">
              <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md text-on-surface p-2.5 pr-4 rounded-full flex items-center gap-2.5 shadow-xl border border-primary/10">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-white text-base">speed</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface dark:text-white leading-tight">
                  {platformFeatures[activePlatformTab].badge2}
                </span>
              </div>
            </div>

            {/* Badge 3 (Middle-Right): Live Pulsing Status */}
            <div className="absolute top-[40%] -right-3 md:-right-6 z-30 flex animate-float-medium select-none">
              <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md text-on-surface p-2.5 pr-4 rounded-full flex items-center gap-2.5 shadow-xl border border-primary/10">
                <div className="relative flex items-center justify-center w-3 h-3 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface dark:text-white leading-tight">
                  {platformFeatures[activePlatformTab].badge3}
                </span>
              </div>
            </div>

            {/* Badge 4 (Bottom-Right): Architecture Metric */}
            <div className="badge-right-2 absolute bottom-[8%] right-[8%] z-30 flex animate-float-slow select-none">
              <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md text-on-surface p-2.5 pr-4 rounded-full flex items-center gap-2.5 shadow-xl border border-primary/10">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface dark:text-white leading-tight">
                  {platformFeatures[activePlatformTab].badge4}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Title & Interactive Capsules List */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 fade-up">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none text-primary">
                <span>✦</span>
                <span className="font-semibold">Platform Build</span>
              </div>
              <h2 className="font-sans text-3xl md:text-5xl font-bold text-on-surface dark:text-white tracking-tight leading-tight">
                Build &amp; Platform
              </h2>
              <p className="font-sans text-base text-on-surface-variant dark:text-white/70 mt-4 leading-relaxed">
                We build stable platforms that are ready to grow with your business.
              </p>
            </div>

            {/* Interactive Capsules List */}
            <div className="space-y-4">
              {platformFeatures.map((item, idx) => {
                const isActive = activePlatformTab === idx;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onMouseEnter={() => setActivePlatformTab(idx)}
                    className={`flex items-center gap-4 p-3.5 pr-6 rounded-full transition-all duration-300 group cursor-pointer border ${
                      isActive
                        ? "bg-white dark:bg-white/10 border-primary/30 dark:border-white/25 shadow-lg scale-[1.02]"
                        : "bg-white/60 dark:bg-white/5 border-primary/5 dark:border-white/5 hover:border-primary/20 hover:bg-white dark:hover:bg-white/10 hover:shadow-md hover:scale-[1.01]"
                    } active:scale-[0.99]`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm ${
                        isActive
                          ? "bg-[#22c55e] text-white"
                          : "bg-[#f2f4f2] dark:bg-white/5 text-on-surface-variant dark:text-white group-hover:bg-[#22c55e] group-hover:text-white"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <h4
                        className={`font-sans text-sm md:text-base font-bold transition-colors leading-tight ${
                          isActive
                            ? "text-[#22c55e]"
                            : "text-on-surface dark:text-white group-hover:text-[#22c55e]"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-secondary dark:text-white/60 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                    <span
                      className={`material-symbols-outlined text-[18px] ml-auto transition-all duration-300 ${
                        isActive
                          ? "text-[#22c55e] translate-x-1 opacity-100"
                          : "text-on-surface-variant/40 dark:text-white/40 group-hover:text-[#22c55e] group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      arrow_forward
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>

      {/* Growth Optimization Services */}
      <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#181818]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">trending_up</span>
              <span className="text-primary font-semibold">Growth Optimization</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              Growth Optimization
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              We improve journeys, insights, and decisions to drive better growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            <Link href="/conversion-rate-optimisation" className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mb-6">
                <span className="material-symbols-outlined">track_changes</span>
              </div>
              <h3 className="font-sans text-base font-bold text-on-surface mb-2">Conversion Optimization</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Better journeys that improve revenue.
              </p>
            </Link>
            <Link href="/ecommerce-analytics" className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mb-6">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="font-sans text-base font-bold text-on-surface mb-2">Ecommerce Analytics</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Clear insights for confident decisions.
              </p>
            </Link>
            <Link href="/ecommerce-consultation" className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mb-6">
                <span className="material-symbols-outlined">forum</span>
              </div>
              <h3 className="font-sans text-base font-bold text-on-surface mb-2">Strategic Consulting</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Guidance for complex ecommerce decisions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-[120px] px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">settings</span>
              <span className="text-primary font-semibold">Our Process</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              How We Work Together
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              We plan, build, and optimize your store for growth and conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 fade-up">
            {/* Step 1 */}
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold bg-forest-light px-2.5 py-1 rounded-md">01</span>
                <h4 className="font-sans text-base font-bold text-on-surface mt-6 mb-3">Listen &amp; Understand</h4>
                <ul className="space-y-1.5 text-xs text-on-surface-variant list-disc pl-4">
                  <li>Business context</li>
                  <li>Growth goals</li>
                  <li>Risk awareness</li>
                </ul>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold bg-forest-light px-2.5 py-1 rounded-md">02</span>
                <h4 className="font-sans text-base font-bold text-on-surface mt-6 mb-3">Design &amp; Plan</h4>
                <ul className="space-y-1.5 text-xs text-on-surface-variant list-disc pl-4">
                  <li>Site architecture</li>
                  <li>User flows</li>
                  <li>Clear priorities</li>
                </ul>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold bg-forest-light px-2.5 py-1 rounded-md">03</span>
                <h4 className="font-sans text-base font-bold text-on-surface mt-6 mb-3">Build &amp; Validate</h4>
                <ul className="space-y-1.5 text-xs text-on-surface-variant list-disc pl-4">
                  <li>Quality builds</li>
                  <li>Performance testing</li>
                  <li>Release checkpoints</li>
                </ul>
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary font-bold bg-forest-light px-2.5 py-1 rounded-md">04</span>
                <h4 className="font-sans text-base font-bold text-on-surface mt-6 mb-3">Support &amp; Improve</h4>
                <ul className="space-y-1.5 text-xs text-on-surface-variant list-disc pl-4">
                  <li>Ongoing support</li>
                  <li>Conversion optimisation</li>
                  <li>Strategic guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Meeting / Fit Assessment Section with 3D Abstract Background & Form Card */}
      <section
        id="contact"
        className="relative py-[100px] md:py-[140px] px-6 md:px-12 overflow-hidden bg-[#faf8f5] dark:bg-[#111111] border-t border-primary/5"
      >
        {/* 3D Abstract Blob Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src="/aniamted_videos_of_this_image.mp4" type="video/mp4" />
          </video>
          {/* Subtle contrast overlay for crystal-clear readability */}
          <div className="absolute inset-0 bg-black/5 dark:bg-black/40 pointer-events-none" />
        </div>

        {/* Centered Main Content Container */}
        <div className="max-w-[1200px] mx-auto text-center relative z-20">
          
          {/* Header Title & Subtitle */}
          <div className="max-w-[800px] mx-auto text-center space-y-4 mb-10 fade-up">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/15 text-gray-800 dark:text-white font-sans text-xs font-semibold select-none shadow-sm">
              <span>✦</span> Next Steps
            </div>
            <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
              Let&apos;s See If We&apos;re a Good Fit
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto font-normal">
              A short conversation to understand your goals and assess alignment—no sales pitch.
            </p>
          </div>

          {/* Centered Pure White Fit Assessment Form Card */}
          <div className="max-w-[540px] w-full mx-auto bg-white dark:bg-[#1a1a1a] rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.14)] border border-gray-100 dark:border-white/10 relative z-20 fade-up">
            <div className="text-center mb-6">
              <span className="font-sans text-xs sm:text-sm font-semibold text-gray-800 dark:text-white/90">
                ✦ Share a few details so we can <span className="font-bold">assess fit.</span>
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-[#b3e620]/20 text-primary dark:text-[#b3e620] rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-sans text-xl font-bold text-gray-900 dark:text-white">Request Received!</h3>
                <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
                  Thank you for reaching out. We&apos;ll review your details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono font-semibold text-primary dark:text-[#b3e620] underline mt-4 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4 text-left"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f6f6f6] dark:bg-white/5 border border-transparent focus:border-primary/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-on-surface dark:text-white placeholder:text-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f6f6f6] dark:bg-white/5 border border-transparent focus:border-primary/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-on-surface dark:text-white placeholder:text-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone No & Current Platform */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Phone No
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f6f6f6] dark:bg-white/5 border border-transparent focus:border-primary/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-on-surface dark:text-white placeholder:text-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Current Platform
                    </label>
                    <input
                      type="text"
                      placeholder="Shopify"
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full bg-[#f6f6f6] dark:bg-white/5 border border-transparent focus:border-primary/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-on-surface dark:text-white placeholder:text-gray-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Primary Challenge */}
                <div className="space-y-1.5">
                  <label className="block font-sans text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Primary Challenge
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your main challenge or goal"
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full bg-[#f6f6f6] dark:bg-white/5 border border-transparent focus:border-primary/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-on-surface dark:text-white placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Cloudflare Turnstile Human Check Mockup */}
                <div
                  onClick={() => setIsHumanVerified(!isHumanVerified)}
                  className="flex items-center justify-between p-3.5 bg-[#fbfbfb] dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl cursor-pointer select-none hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
                        isHumanVerified
                          ? "bg-[#22c55e] border-[#22c55e] text-white shadow-sm"
                          : "border-gray-300 dark:border-white/20 bg-white dark:bg-black/20"
                      }`}
                    >
                      {isHumanVerified && (
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      )}
                    </div>
                    <span className="font-sans text-xs font-medium text-gray-700 dark:text-gray-300">
                      Verify you are human
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-right">
                    <div className="flex flex-col items-end">
                      <span className="font-sans text-[10px] font-bold text-orange-600 tracking-wider">
                        CLOUDFLARE
                      </span>
                      <span className="text-[8px] text-gray-400">Privacy • Terms</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#b3e620] hover:bg-[#9ccc1c] active:scale-[0.99] text-gray-900 font-sans text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-center select-none"
                  >
                    Start the Conversation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Blogs & News Section */}
      <section className="py-[120px] px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 fade-up">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
                <span className="material-symbols-outlined text-primary text-[14px]">feed</span>
                <span className="text-primary font-semibold">Latest Updates</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
                Blogs &amp; News
              </h2>
              <p className="font-sans text-base text-on-surface-variant mt-2">
                Stay ahead of trends, updates, and growth strategies with our expert-written insights.
              </p>
            </div>
            <Link
              href="/blogs"
              className="border border-primary text-primary px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2 w-max select-none cursor-pointer"
            >
              All Articles
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 fade-up">
            {/* Blog Post 1 */}
            <Link
              href="/blogs"
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-surface-container shadow-sm border border-primary/5">
                <img
                  src="https://www.maydayinternet.com/wp-content/uploads/2026/07/Why-Shopify-Transaction.png"
                  alt="Why Shopify Transaction Fees Don’t Apply"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-sans text-secondary dark:text-white/60 mb-2">
                  July 27, 2026 • 8 min Read
                </span>
                <h3 className="font-sans text-sm md:text-[15px] font-semibold text-on-surface dark:text-white group-hover:text-primary transition-colors leading-snug line-clamp-3 mb-3">
                  Why Shopify Transaction Fees Don’t Apply to Quick Checkouts Like GoKwik, Razorpay Magic Checkout &amp; Shopflo in India — and How Long This Will Last
                </h3>
                <div className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f2f4f2] dark:bg-white/5 text-on-surface/80 dark:text-white/80 border border-primary/5">
                  Checkouts • Shopify
                </div>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link
              href="/blogs"
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-surface-container shadow-sm border border-primary/5">
                <img
                  src="https://www.maydayinternet.com/wp-content/uploads/2026/06/Payment-Gateway-Reconciliation-scaled.jpeg"
                  alt="Payment Gateway Reconciliation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-sans text-secondary dark:text-white/60 mb-2">
                  June 11, 2026 • 8 min Read
                </span>
                <h3 className="font-sans text-sm md:text-[15px] font-semibold text-on-surface dark:text-white group-hover:text-primary transition-colors leading-snug line-clamp-3 mb-3">
                  Payment Gateway Reconciliation for Indian E-commerce: Methods, Software, GST &amp; Best Practices
                </h3>
                <div className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f2f4f2] dark:bg-white/5 text-on-surface/80 dark:text-white/80 border border-primary/5">
                  Ecommerce • Payment Gateway
                </div>
              </div>
            </Link>

            {/* Blog Post 3 */}
            <Link
              href="/blogs"
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-surface-container shadow-sm border border-primary/5">
                <img
                  src="https://www.maydayinternet.com/wp-content/uploads/2026/05/magnific_photorealistic-indian-eco_2938431220-e1780911927429.png"
                  alt="Engineering Greener Ecosystems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-sans text-secondary dark:text-white/60 mb-2">
                  June 8, 2026 • 8 min Read
                </span>
                <h3 className="font-sans text-sm md:text-[15px] font-semibold text-on-surface dark:text-white group-hover:text-primary transition-colors leading-snug line-clamp-3 mb-3">
                  Engineering Greener Ecosystems: The Mayday Internet Sustainability Framework
                </h3>
                <div className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f2f4f2] dark:bg-white/5 text-on-surface/80 dark:text-white/80 border border-primary/5">
                  Shopify
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
