"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

export default function Home() {
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

  const logos = [
    "Popees",
    "Kalyan Silks",
    "iBell",
    "Dötch Leather",
    "Basmat",
    "Herary",
    "Fazyo",
  ];

  const featuredProjects = [
    {
      title: "Popees Baby Care",
      tag: "Shopify Redesign",
      image: "/mockup1.png",
      href: "https://popees.com/",
    },
    {
      title: "Kalyan Silks India",
      tag: "Shopify Redesign",
      image: "/mockup2.png",
      href: "https://kalyansilks.com/",
    },
    {
      title: "iBell Home Appliances",
      tag: "Shopify Redesign",
      image: "/mockup4.png",
      href: "https://ibellstore.com/",
    },
  ];

  const mockups = [
    {
      src: "/mockup3.png",
      alt: "Dötch Leather Store Bag Showcase",
      title: "DÖTCH",
      label: "Dotch Leather UK",
      isSerif: true,
    },
    {
      src: "/mockup2.png",
      alt: "Kalyan Silks India Showcase",
      title: "KALYAN",
      label: "Kalyan Silks India",
      isSerif: false,
      hasWhatsapp: true,
    },
    {
      src: "/mockup1.png",
      alt: "Popees Baby Care Showcase",
      title: "POPEES",
      label: "Popees Baby Care",
      isSerif: false,
    },
    {
      src: "/mockup4.png",
      alt: "iBell Home Appliances Showcase",
      title: "iBELL",
      label: "iBell Home Appliances",
      isSerif: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] md:pt-[180px] pb-12 px-6 md:px-12 max-w-[1400px] mx-auto fade-up relative z-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f4f2] dark:bg-white/5 text-primary font-mono text-[11px] font-semibold uppercase tracking-wider mb-8 border border-primary/5 select-none">
            <span>✦</span>
            Premium Shopify Developers
          </div>
          <h1 className="font-display text-[42px] md:text-[80px] font-black text-on-surface mb-8 tracking-tighter leading-[1.05] uppercase">
            Build e-commerce
            <br />
            that scales with confidence
          </h1>
          <div className="flex flex-col items-start gap-6 mt-8 pl-0 md:pl-4">
            <p className="font-sans text-base md:text-[18px] leading-relaxed md:leading-[30px] text-secondary max-w-sm">
              Trusted e-commerce solutions designed to scale with your brand.
            </p>
            <div className="flex flex-row items-center gap-3 w-full sm:w-auto select-none">
              <button
                onClick={() => setContactOpen(true)}
                className="bg-[#b3e620] hover:bg-[#9ccc1c] text-on-surface px-5 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm active:scale-95 duration-150 shrink-0"
              >
                Start a Conversation
              </button>
              <Link
                href="/recent-projects"
                className="text-center bg-white border border-outline-variant hover:border-primary text-on-surface px-5 sm:px-8 py-3.5 sm:py-4 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all active:scale-95 duration-150 shrink-0"
              >
                View Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Image Marquee */}
      <section className="py-8 bg-white dark:bg-[#181818] overflow-hidden relative z-20 fade-up">
        {/* Soft edge gradients */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent dark:from-[#181818] z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent dark:from-[#181818] z-10 pointer-events-none" />
        
        <div className="w-full overflow-hidden relative">
          <div className="flex animate-marquee-images gap-6 whitespace-nowrap animate-once">
            {[...mockups, ...mockups, ...mockups, ...mockups].map((mockup, idx) => (
              <div 
                key={idx}
                className="w-[280px] sm:w-[380px] md:w-[460px] aspect-[16/10] bg-surface-container rounded-2xl md:rounded-[28px] overflow-hidden border border-primary/10 dark:border-white/5 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-500 shrink-0 inline-block relative select-none"
              >
                {/* Background Image */}
                <img 
                  src={mockup.src} 
                  alt={mockup.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                {/* Center text overlay */}
                {mockup.title && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className={`text-white tracking-widest text-3xl md:text-5xl font-black uppercase select-none opacity-90 drop-shadow-md ${mockup.isSerif ? 'font-serif' : 'font-display'}`}>
                      {mockup.title}
                    </span>
                  </div>
                )}

                {/* Bottom Left tag/badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {mockup.hasWhatsapp && (
                    <div className="w-9 h-9 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-md animate-bounce shrink-0">
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515.003 10.002-4.482 10.005-9.999.002-2.673-1.04-5.186-2.936-7.086-1.896-1.9-4.41-2.946-7.08-2.948-5.52 0-10.008 4.484-10.01 10.002-.001 1.747.502 3.447 1.461 4.969L1.082 22.9l6.566-1.746zm11.758-6.173c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                  <span className="bg-white/95 text-on-surface px-3 py-1.5 rounded-[10px] font-sans text-[10px] font-bold shadow-sm select-none border border-primary/5">
                    {mockup.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Logo Marquee Ticker */}
      <section className="py-12 bg-white dark:bg-[#181818] border-y border-primary/5 select-none overflow-hidden relative fade-up">
        <div className="max-w-[1200px] mx-auto px-6 mb-4 text-center">
          <p className="font-sans text-[11px] font-bold tracking-widest text-secondary uppercase">
            Trusted by growing brands across industries
          </p>
        </div>
        <div className="w-full overflow-hidden relative mt-6">
          <div className="flex animate-marquee gap-16 md:gap-24 whitespace-nowrap">
            {logos.map((logo, idx) => (
              <span
                key={idx}
                className="font-display text-lg md:text-2xl font-black text-on-surface/40 dark:text-white/20 select-none uppercase tracking-wider inline-block hover:text-primary transition-colors"
              >
                {logo}
              </span>
            ))}
            {logos.map((logo, idx) => (
              <span
                key={`dup-${idx}`}
                className="font-display text-lg md:text-2xl font-black text-on-surface/40 dark:text-white/20 select-none uppercase tracking-wider inline-block hover:text-primary transition-colors"
              >
                {logo}
              </span>
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

      {/* Selected Works - Rebuilt with image visual cards */}
      <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#181818] border-b border-primary/5">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 fade-up">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
                <span className="material-symbols-outlined text-primary text-[14px]">star</span>
                <span className="text-primary font-semibold">Showcase</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
                Featured Projects
              </h2>
              <p className="font-sans text-base text-on-surface-variant mt-2">
                Careful engineering delivering high-performance commerce results.
              </p>
            </div>
            <Link
              href="/recent-projects"
              className="border border-primary text-primary px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2 w-max select-none cursor-pointer"
            >
              All Projects
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
            {featuredProjects.map((project, idx) => (
              <article key={idx} className="group bg-surface dark:bg-surface-dark rounded-[24px] border border-primary/10 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <div>
                  <div className="h-[220px] relative bg-surface-container overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-surface-dark/90 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-primary border border-primary/5 select-none shadow-sm font-bold">
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[20px] font-extrabold text-on-surface mb-2 uppercase line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-on-surface-variant opacity-80 leading-relaxed">
                      Custom Shopify frontend integration optimized for speed, engagement, and conversion rates.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 select-none">
                  <a
                    href={project.href}
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
                alt="eCommerce Leader working on a phone in workspace"
                src="/mockup2.png"
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
      <section className="py-[120px] px-6 md:px-12 bg-surface build-platform-section fade-up">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with 4 floating badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 order-last lg:order-first">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[36px] overflow-hidden border border-primary/10 dark:border-white/5 shadow-lg image-container">
              <img
                className="w-full h-full object-cover"
                alt="Product developer working on a premium laptop"
                src="/mockup1.png"
              />
            </div>

            {/* Badge 1 (Top-Left): Interactive mockup check */}
            <div className="badge-left-1 absolute top-[15%] -left-4 md:-left-8 z-30 flex">
              <div className="animate-float-slow bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ Interactive mockup check</span>
              </div>
            </div>

            {/* Badge 2 (Bottom-Left): Built to scale with growth */}
            <div className="badge-left-2 absolute bottom-[18%] -left-6 md:-left-12 z-30 flex">
              <div className="animate-float-fast bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ Built to scale with growth</span>
              </div>
            </div>

            {/* Badge 3 (Middle-Right): Stable during traffic spikes */}
            <div className="badge-right-1 absolute top-[48%] -right-4 md:-right-8 z-30 flex">
              <div className="animate-float-medium bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ Stable during traffic spikes</span>
              </div>
            </div>

            {/* Badge 4 (Bottom-Right): SEO-safe migrations */}
            <div className="badge-right-2 absolute bottom-[8%] right-[10%] z-30 flex">
              <div className="animate-float-slow bg-white text-on-surface p-2 pr-5 rounded-full flex items-center gap-2 shadow-lg select-none border border-primary/5">
                <div className="w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-white text-base">check_circle</span>
                </div>
                <span className="font-sans text-[11px] font-bold text-on-surface leading-tight">✦ SEO-safe migrations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title & Capsules List */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 fade-up">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none text-primary">
                <span>✦</span>
                <span className="font-semibold">Platform Build</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-none">
                Build &amp; Platform
              </h2>
              <p className="font-sans text-base text-on-surface-variant mt-4 leading-relaxed">
                We build stable platforms that are ready to grow with your business.
              </p>
            </div>

            {/* Capsules List */}
            <div className="space-y-4">
              <Link href="/ecommerce-website-development" className="flex items-center gap-4 bg-white/60 dark:bg-white/5 border border-primary/5 hover:border-primary/20 p-3 pr-6 rounded-full hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#f2f4f2] dark:bg-white/5 text-on-surface-variant dark:text-white flex items-center justify-center shrink-0 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-sans text-sm md:text-base font-bold text-on-surface group-hover:text-[#22c55e] transition-colors leading-tight">Ecommerce Builds</h4>
                  <p className="font-sans text-xs text-secondary mt-0.5">Stable ecommerce foundations for growth.</p>
                </div>
              </Link>

              <Link href="/shopify-ecommerce-development" className="flex items-center gap-4 bg-white/60 dark:bg-white/5 border border-primary/5 hover:border-primary/20 p-3 pr-6 rounded-full hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#f2f4f2] dark:bg-white/5 text-on-surface-variant dark:text-white flex items-center justify-center shrink-0 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">paid</span>
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-sans text-sm md:text-base font-bold text-on-surface group-hover:text-[#22c55e] transition-colors leading-tight">Shopify Development</h4>
                  <p className="font-sans text-xs text-secondary mt-0.5">Clean Shopify systems built to scale.</p>
                </div>
              </Link>

              <Link href="/platform-migration" className="flex items-center gap-4 bg-white/60 dark:bg-white/5 border border-primary/5 hover:border-primary/20 p-3 pr-6 rounded-full hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-[#f2f4f2] dark:bg-white/5 text-on-surface-variant dark:text-white flex items-center justify-center shrink-0 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">dns</span>
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-sans text-sm md:text-base font-bold text-on-surface group-hover:text-[#22c55e] transition-colors leading-tight">Platform Migration</h4>
                  <p className="font-sans text-xs text-secondary mt-0.5">Safe migrations protecting revenue and SEO.</p>
                </div>
              </Link>
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

      {/* Book a Meeting / Fit Assessment Section */}
      <section id="contact" className="py-[80px] px-6 md:px-12 bg-white dark:bg-[#181818] border-t border-primary/5">
        <div className="max-w-[1200px] mx-auto text-center space-y-6 fade-up">
          <div className="inline-flex items-center gap-2 bg-forest-light text-primary px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none border border-primary/5">
            <span className="material-symbols-outlined text-[16px]">forum</span>
            Let's Talk
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight">
            Book a Conversation
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed max-w-xl mx-auto">
            Not a sales call. An honest 30-minute conversation to understand where you are, what's not working, and whether we're the right fit.
          </p>
          <div className="pt-4 select-none">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-forest-deep text-white px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md select-none active:scale-95 duration-150"
            >
              Start Assessing Fit
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            {/* Blog Post 1 */}
            <Link
              href="/blogs"
              className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-shadow p-6 group"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-on-surface-variant mb-4 select-none">
                  <span>July 27, 2026 • 8 min</span>
                  <span className="bg-forest-light px-2 py-0.5 rounded text-primary">Checkouts</span>
                </div>
                <h3 className="font-sans text-sm md:text-base font-bold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-4">
                  Why Shopify Transaction Fees Don’t Apply to Quick Checkouts Like GoKwik, Razorpay Magic Checkout &amp; Shopflo in India — and How Long This Will Last
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-primary flex items-center gap-1 mt-6">
                Read Article
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </Link>

            {/* Blog Post 2 */}
            <Link
              href="/blogs"
              className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-shadow p-6 group"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-on-surface-variant mb-4 select-none">
                  <span>June 11, 2026 • 8 min</span>
                  <span className="bg-forest-light px-2 py-0.5 rounded text-primary">Payment Gateways</span>
                </div>
                <h3 className="font-sans text-sm md:text-base font-bold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-4">
                  Payment Gateway Reconciliation for Indian E-commerce: Methods, Software, GST &amp; Best Practices
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-primary flex items-center gap-1 mt-6">
                Read Article
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </Link>

            {/* Blog Post 3 */}
            <Link
              href="/blogs"
              className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl overflow-hidden flex flex-col justify-between h-full hover:shadow-md transition-shadow p-6 group"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-on-surface-variant mb-4 select-none">
                  <span>June 8, 2026 • 8 min</span>
                  <span className="bg-forest-light px-2 py-0.5 rounded text-primary">Shopify</span>
                </div>
                <h3 className="font-sans text-sm md:text-base font-bold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-4">
                  Engineering Greener Ecosystems: The Mayday Internet Sustainability Framework
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-primary flex items-center gap-1 mt-6">
                Read Article
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
