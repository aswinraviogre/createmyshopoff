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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZxwohiYg8ZgdBSaTaHiFGP9_L9MxcbdmImPbCdhc6eflWc4dxvlwvguUKAh7nv0DG5e9LDSWjAzYSeuNZojRTq3G72zw9qRlFQotfIN-YvDunO2SuJBp2F74FelqrC_WGiPVSg6NBUWsb-ql99Rsv7TEfx4Z2um4T4tjGJw0vyv0P4qPjBThKQz7DoaYPGGqzCW6Trvfd7aFBKUrPDYY2T6vfio-nkkuWufEG6YcFxYUZgItXVF66",
      href: "https://popees.com/",
    },
    {
      title: "Kalyan Silks India",
      tag: "Shopify Redesign",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0hSBZLdZED1L5sm8ECvHbqgf3k8HWmQ_F-tHG3ox5-n54G8xfB47tu5qK4b37lfHaQ6RmubU5_F9DZkveoLr-BatRZVoxVzvIMqH0mGJzoEmE9Y3YlgZK_TS-mCDGbY35nVwG_-ysI6-BMj94MEwqVJDWH8eRLGb-DYflgMoHQoCSTr9LuPLOEoq_xCawu8RAmqHp6-xFACiyAxaspjWbMDbxv2ramcd2FqJBfrZUOQlWBOKK0jzy",
      href: "https://kalyansilks.com/",
    },
    {
      title: "iBell Home Appliances",
      tag: "Shopify Redesign",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv3g64max3sCY0GzAfVgHewxjW2gKr412jAZDOztGYT0bEbQLAOt9_gjibeGc75kEF2nxPRS8h4Isr4viHlwKJQ9u2K6qjPtX4uHkGDP2fSMYNDo-PkVQiNrPDvjLDUfMhdeyb1i8QWnbnOOphbxuvmfUJ7QDjDVhI4WiCkFO07e5EA5f7WxyV7McSx2zsHWcZN7-xTkY66F-P5VfNhfUpwUhwMt4u6w5blLmeiNooy6R63Xd1Kz1B",
      href: "https://ibellstore.com/",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-[160px] pb-12 px-6 md:px-12 max-w-[1400px] mx-auto fade-up relative z-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-light text-primary font-mono text-[12px] font-medium uppercase tracking-widest mb-8 border border-primary/10 select-none">
            <span className="material-symbols-outlined text-[14px]">diamond</span>
            Premium Shopify Developers
          </div>
          <h1 className="font-display text-[44px] md:text-[80px] font-black text-on-surface mb-8 tracking-tighter leading-[1.05] uppercase">
            Build e-commerce
            <br />
            that scales with confidence
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pl-0 md:pl-12 mt-8">
            <p className="font-sans text-[18px] leading-[30px] text-secondary max-w-sm">
              Trusted e-commerce solutions designed to scale with your brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto select-none">
              <button
                onClick={() => setContactOpen(true)}
                className="w-full sm:w-auto bg-[#b3e620] hover:bg-[#9ccc1c] text-on-surface px-8 py-4 rounded-full font-sans text-sm font-semibold transition-colors cursor-pointer shadow-sm active:scale-95 duration-150"
              >
                Start a Conversation
              </button>
              <Link
                href="/recent-projects"
                className="w-full sm:w-auto text-center bg-white border border-outline-variant hover:border-primary text-on-surface px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all active:scale-95 duration-150"
              >
                View Works
              </Link>
            </div>
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
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
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
            <p className="font-sans text-sm text-on-surface-variant italic mt-8 max-w-md border-l-2 border-primary pl-4">
              Every number here belongs to a real brand — one we were trusted to build, migrate, or grow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 select-none fade-up">
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-primary">50+</div>
              <div className="font-sans text-xs font-semibold text-secondary mt-2">Shopify Stores Launched</div>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-primary">7+</div>
              <div className="font-sans text-xs font-semibold text-secondary mt-2">Years in Shopify Ecosystem</div>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-primary">₹10Cr+</div>
              <div className="font-sans text-xs font-semibold text-secondary mt-2">Revenue Enabled</div>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-primary">2hr</div>
              <div className="font-sans text-xs font-semibold text-secondary mt-2">Response Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Fit Section */}
      <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#181818]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 fade-up">
            <div className="inline-flex items-center gap-2 bg-forest-light text-primary-container px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-[16px]">target</span>
              Right Fit
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              For Leaders Who Need Certainty
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              We work best with founders past the early stage, digital heads accountable for revenue, and brands where ecommerce isn't optional — it's the business.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 select-none">
              {["Scaling Founders", "Heads of Digital", "Core-Channel Brands"].map((fit, idx) => (
                <span key={idx} className="flex items-center gap-1.5 bg-forest-light text-primary border border-primary/10 rounded-full px-4 py-1.5 text-xs font-semibold">
                  <span className="material-symbols-outlined text-xs">emergency</span>
                  {fit}
                </span>
              ))}
            </div>
            <p className="font-sans text-sm text-on-surface-variant italic border-l-2 border-primary pl-4 pt-1">
              If your business depends on ecommerce working every day — we're built for you.
            </p>
          </div>
          <div className="lg:col-span-7 relative h-[450px] rounded-3xl overflow-hidden shadow-md border border-primary/10 fade-up">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Satisfied eCommerce Leaders Work Culture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZxwohiYg8ZgdBSaTaHiFGP9_L9MxcbdmImPbCdhc6eflWc4dxvlwvguUKAh7nv0DG5e9LDSWjAzYSeuNZojRTq3G72zw9qRlFQotfIN-YvDunO2SuJBp2F74FelqrC_WGiPVSg6NBUWsb-ql99Rsv7TEfx4Z2um4T4tjGJw0vyv0P4qPjBThKQz7DoaYPGGqzCW6Trvfd7aFBKUrPDYY2T6vfio-nkkuWufEG6YcFxYUZgItXVF66"
            />
          </div>
        </div>
      </section>

      {/* Build & Platform Services */}
      <section className="py-[120px] px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">architecture</span>
              <span className="text-primary font-semibold">Platform Build</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              Build &amp; Platform
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              We build stable platforms that are ready to grow with your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            <Link href="/ecommerce-website-development" className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mb-6">
                <span className="material-symbols-outlined">web</span>
              </div>
              <h3 className="font-sans text-base font-bold text-on-surface mb-2">Ecommerce Builds</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Stable ecommerce foundations for growth.
              </p>
            </Link>
            <Link href="/shopify-ecommerce-development" className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mb-6">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <h3 className="font-sans text-base font-bold text-on-surface mb-2">Shopify Development</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Clean Shopify systems built to scale.
              </p>
            </Link>
            <Link href="/platform-migration" className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mb-6">
                <span className="material-symbols-outlined">swap_horiz</span>
              </div>
              <h3 className="font-sans text-base font-bold text-on-surface mb-2">Platform Migration</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Safe migrations protecting revenue and SEO.
              </p>
            </Link>
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
