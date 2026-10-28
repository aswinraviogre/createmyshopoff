"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";

interface SubLink {
  name: string;
  href: string;
  desc?: string;
}

interface NavCategory {
  title: string;
  links: SubLink[];
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const softwareDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (softwareDropdownRef.current && !softwareDropdownRef.current.contains(event.target as Node)) {
        setSoftwareDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const serviceCategories: NavCategory[] = [
    {
      title: "Shopify & Ecommerce",
      links: [
        { name: "Store Builds", href: "/ecommerce-website-development", desc: "Ecommerce Development" },
        { name: "Shopify Builds", href: "/shopify-ecommerce-development", desc: "Ecommerce Development" },
        { name: "Enterprise Shopify", href: "/shopify-plus-enterprise", desc: "Shopify Plus / Enterprise" },
        { name: "Smart Automation", href: "/integrations-ecommerce-automation", desc: "Integrations & Automation" },
      ],
    },
    {
      title: "Migrations & Rebuilds",
      links: [
        { name: "Brand Rebuilds", href: "/ecommerce-rebuilds-for-legacy-brands", desc: "For Legacy Brands" },
        { name: "Safe Migration", href: "/platform-migration", desc: "Platform Migration" },
        { name: "Data Integrity", href: "/conversion-rate-optimisation", desc: "SEO, Data & Order Integrity" },
      ],
    },
    {
      title: "CRO & Revenue Growth",
      links: [
        { name: "CRO Growth", href: "/conversion-rate-optimisation", desc: "Conversion Rate Optimisation" },
        { name: "Funnel Optimisation", href: "/checkout-funnel-optimisation", desc: "Checkout & Funnel" },
        { name: "Revenue Expansion", href: "/retention-ltv-revenue-expansion", desc: "Retention, LTV & Expansion" },
      ],
    },
    {
      title: "Strategy & Intelligence",
      links: [
        { name: "Commerce Insights", href: "/ecommerce-analytics", desc: "Ecommerce Analytics" },
        { name: "Strategic Advisory", href: "/ecommerce-consultation", desc: "Ecommerce Consultation" },
      ],
    },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setSoftwareDropdownOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-40px)] max-w-[1200px] rounded-full z-50 transition-all duration-300 border border-primary/10 dark:border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center ${scrolled
          ? "bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-md nav-scrolled"
          : "bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-sm"
          }`}
      >
        {/* Brand & In-Header Software Logos */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 select-none shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 select-none shrink-0"
          >
            <span className="font-display text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-on-surface tracking-tight whitespace-nowrap">Create my shop</span>
          </Link>

          {/* PostBus & VaChat Senior UI/UX Ecosystem Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 border-l border-primary/15 dark:border-white/10">
            {/* Contextual beacon on wide screens */}
            <div className="hidden 2xl:flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-on-surface-variant/70 font-bold select-none mr-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span>SaaS:</span>
            </div>

            {/* PostBus Lockup */}
            <a
              href="https://www.postbus.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PostBus — India Post Shipping Software (postbus.in)"
              className="group relative inline-flex items-center gap-1.5 h-8 pl-1.5 pr-2.5 rounded-full bg-white/95 dark:bg-[#1c1c1c] border border-primary/10 dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_10px_rgba(225,29,72,0.22)] hover:border-[#E11D48]/60 hover:bg-white dark:hover:bg-[#222222] transition-all duration-200 cursor-pointer"
              title="PostBus — India Post Shipping Software (postbus.in)"
            >
              <img
                src="/software/postbus-mark.svg"
                alt="PostBus Icon"
                className="w-5 h-5 rounded-[6px] object-contain shadow-xs shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex items-center gap-1">
                <span className="font-display text-[12px] font-black text-on-surface tracking-tight group-hover:text-[#E11D48] transition-colors leading-none">
                  PostBus
                </span>
                <span className="hidden xl:inline-block text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#E11D48] bg-[#E11D48]/10 px-1 py-0.5 rounded leading-none">
                  Shipping
                </span>
              </div>
              <span className="material-symbols-outlined text-[12px] text-on-surface-variant/50 group-hover:text-[#E11D48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                north_east
              </span>
            </a>

            {/* VaChat Lockup */}
            <a
              href="https://vachat.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VaChat — AI WhatsApp Marketing & CRM (vachat.in)"
              className="group relative inline-flex items-center gap-1.5 h-8 pl-1.5 pr-2.5 rounded-full bg-white/95 dark:bg-[#1c1c1c] border border-primary/10 dark:border-white/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_10px_rgba(3,207,101,0.22)] hover:border-[#03cf65]/60 hover:bg-white dark:hover:bg-[#222222] transition-all duration-200 cursor-pointer"
              title="VaChat — AI WhatsApp Marketing & CRM (vachat.in)"
            >
              <img
                src="/software/vachat-mark.svg"
                alt="VaChat Icon"
                className="w-5 h-5 rounded-[6px] object-contain shadow-xs shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex items-center gap-1">
                <span className="font-display text-[12px] font-black text-on-surface tracking-tight group-hover:text-[#03cf65] transition-colors leading-none">
                  VaChat
                </span>
                <span className="hidden xl:inline-block text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#00a84d] bg-[#03cf65]/10 px-1 py-0.5 rounded leading-none">
                  AI CRM
                </span>
              </div>
              <span className="material-symbols-outlined text-[12px] text-on-surface-variant/50 group-hover:text-[#03cf65] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                north_east
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`font-sans text-[14px] font-medium transition-colors ${pathname === "/" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              onClick={handleLinkClick}
              className={`font-sans text-[14px] font-medium transition-colors ${pathname === "/about-us" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              About us
            </Link>
          </li>

          {/* Dropdown triggers */}
          <li className="relative" ref={dropdownRef}>
            <button
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="font-sans text-[14px] font-medium text-on-surface-variant hover:text-primary flex items-center gap-1 cursor-pointer transition-colors"
            >
              What We Do
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                keyboard_arrow_down
              </span>
            </button>

            {/* Dropdown Menu Container */}
            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[750px] bg-white dark:bg-surface-dark border border-primary/10 dark:border-white/10 rounded-3xl shadow-xl p-8 grid grid-cols-2 gap-x-8 gap-y-6 z-50 animate-[fadeIn_0.15s_ease-out]"
              >
                {serviceCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-primary dark:text-primary-fixed-dim font-bold border-b border-primary/5 pb-1">
                      {cat.title}
                    </h4>
                    <div className="space-y-2">
                      {cat.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={handleLinkClick}
                          className="block group hover:bg-forest-light dark:hover:bg-primary-container/10 p-2 rounded-xl transition-all"
                        >
                          <div className="font-sans text-xs font-semibold text-on-surface group-hover:text-primary transition-colors">
                            {link.name}
                          </div>
                          {link.desc && (
                            <div className="font-sans text-[10px] text-on-surface-variant group-hover:text-on-surface-variant/80 transition-colors mt-0.5">
                              {link.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* Software Built by Us Dropdown */}
          <li className="relative" ref={softwareDropdownRef}>
            <button
              onMouseEnter={() => setSoftwareDropdownOpen(true)}
              onClick={() => setSoftwareDropdownOpen(!softwareDropdownOpen)}
              className="font-sans text-[14px] font-medium text-on-surface-variant hover:text-primary flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Software</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              <span
                className="material-symbols-outlined text-[16px] transition-transform duration-200"
                style={{ transform: softwareDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                keyboard_arrow_down
              </span>
            </button>

            {softwareDropdownOpen && (
              <div
                onMouseLeave={() => setSoftwareDropdownOpen(false)}
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[440px] bg-white dark:bg-surface-dark border border-primary/10 dark:border-white/10 rounded-3xl shadow-xl p-5 z-50 animate-[fadeIn_0.15s_ease-out] space-y-3"
              >
                <div className="flex items-center justify-between border-b border-primary/5 pb-2 px-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">
                    Software Built by Us
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant/70 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-full">
                    2 In-House Products
                  </span>
                </div>

                <a
                  href="https://www.postbus.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-forest-light dark:hover:bg-white/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#202020] border border-primary/10 flex items-center justify-center p-1.5 shrink-0 shadow-xs">
                    <img src="/software/postbus-logo.webp" alt="PostBus" className="max-h-6 w-auto object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                        PostBus
                      </span>
                      <span className="text-[10px] font-mono text-[#E11D48] font-semibold flex items-center gap-0.5">
                        postbus.in <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                      India Post shipping & order management software for ecommerce
                    </p>
                  </div>
                </a>

                <a
                  href="https://vachat.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-forest-light dark:hover:bg-white/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#202020] border border-primary/10 flex items-center justify-center p-1 shrink-0 shadow-xs">
                    <img src="/software/vachat-logo.svg" alt="VaChat" className="max-h-6 w-auto object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                        VaChat
                      </span>
                      <span className="text-[10px] font-mono text-[#03cf65] font-semibold flex items-center gap-0.5">
                        vachat.in <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                      AI WhatsApp marketing, CRM & automated sales platform
                    </p>
                  </div>
                </a>

                <div className="pt-1 border-t border-primary/5">
                  <Link
                    href="/#software-built-by-us"
                    onClick={handleLinkClick}
                    className="block text-center py-2 text-[11px] font-mono font-bold text-primary hover:underline"
                  >
                    View Software Ecosystem →
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/recent-projects"
              onClick={handleLinkClick}
              className={`font-sans text-[14px] font-medium transition-colors ${pathname === "/recent-projects" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Recent Projects
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              onClick={handleLinkClick}
              className={`font-sans text-[14px] font-medium transition-colors ${pathname === "/case-studies" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Case studies
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              onClick={handleLinkClick}
              className={`font-sans text-[14px] font-medium transition-colors ${pathname === "/blogs" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Blogs
            </Link>
          </li>
        </ul>

        {/* Action Button (Desktop) */}
        <button
          onClick={() => setContactOpen(true)}
          className="bg-primary hover:bg-forest-deep text-white px-6 py-2.5 rounded-full font-mono text-[12px] font-medium uppercase tracking-widest transition-colors scale-95 active:scale-90 hidden md:flex items-center gap-2 cursor-pointer shadow-sm"
        >
          Let's Talk
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>

        {/* Mobile Action & Menu Controls */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2 select-none shrink-0">
          <button
            onClick={() => setContactOpen(true)}
            className="bg-white dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary/30 text-on-surface px-2.5 sm:px-3.5 py-1.5 rounded-full font-sans text-[10px] sm:text-[11px] font-bold shadow-xs flex items-center gap-1 active:scale-95 duration-150 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Let's Talk</span>
            <span className="material-symbols-outlined text-[11px] sm:text-[12px] font-bold">arrow_forward</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f2f4f2] dark:bg-white/5 flex items-center justify-center text-on-surface border border-primary/5 hover:bg-[#e2e8f0] dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <span className="material-symbols-outlined text-base sm:text-lg">close</span>
            ) : (
              <div className="flex flex-col gap-[2.5px] items-center justify-center">
                <div className="w-4 h-[1.5px] sm:w-4.5 sm:h-[2px] bg-on-surface rounded-full" />
                <div className="w-4 h-[1.5px] sm:w-4.5 sm:h-[2px] bg-on-surface rounded-full" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[310px] bg-white dark:bg-surface-dark z-50 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-6 mt-16">
          <div className="flex flex-col gap-3 mb-2 select-none">
            <span className="font-display text-[20px] font-bold text-on-surface tracking-tight">Create my shop</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.postbus.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1.5 h-7.5 pl-1.5 pr-2.5 rounded-full bg-surface dark:bg-white/5 border border-primary/10 hover:border-[#E11D48] transition-all"
                title="PostBus (postbus.in)"
              >
                <img src="/software/postbus-mark.svg" alt="PostBus" className="w-4.5 h-4.5 rounded-[5px]" />
                <span className="font-display text-[11px] font-black text-on-surface">PostBus</span>
                <span className="material-symbols-outlined text-[11px] text-[#E11D48]">north_east</span>
              </a>
              <a
                href="https://vachat.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1.5 h-7.5 pl-1.5 pr-2.5 rounded-full bg-surface dark:bg-white/5 border border-primary/10 hover:border-[#03cf65] transition-all"
                title="VaChat (vachat.in)"
              >
                <img src="/software/vachat-mark.svg" alt="VaChat" className="w-4.5 h-4.5 rounded-[5px]" />
                <span className="font-display text-[11px] font-black text-on-surface">VaChat</span>
                <span className="material-symbols-outlined text-[11px] text-[#03cf65]">north_east</span>
              </a>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`font-sans text-[16px] font-bold block py-1.5 ${pathname === "/" ? "text-primary border-l-4 border-primary pl-2" : "text-on-surface pl-3"
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={handleLinkClick}
                className={`font-sans text-[16px] font-bold block py-1.5 ${pathname === "/about-us" ? "text-primary border-l-4 border-primary pl-2" : "text-on-surface pl-3"
                  }`}
              >
                About us
              </Link>
            </li>

            {/* Mobile Dropdown Category Accordion */}
            <li className="pl-3">
              <button
                onClick={() => setActiveMobileSection(activeMobileSection === "services" ? null : "services")}
                className="w-full text-left font-sans text-[16px] font-bold py-1.5 flex justify-between items-center text-on-surface"
              >
                What We Do
                <span className="material-symbols-outlined text-[18px]">
                  {activeMobileSection === "services" ? "expand_less" : "expand_more"}
                </span>
              </button>
              {activeMobileSection === "services" && (
                <div className="mt-2 pl-3 space-y-4 border-l border-primary/20">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-primary/80 font-bold">
                        {cat.title}
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {cat.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="font-sans text-xs text-on-surface-variant hover:text-primary pl-2 block"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Mobile Software Accordion */}
            <li className="pl-3">
              <button
                onClick={() => setActiveMobileSection(activeMobileSection === "software" ? null : "software")}
                className="w-full text-left font-sans text-[16px] font-bold py-1.5 flex justify-between items-center text-on-surface"
              >
                <span className="flex items-center gap-1.5">
                  Software
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                </span>
                <span className="material-symbols-outlined text-[18px]">
                  {activeMobileSection === "software" ? "expand_less" : "expand_more"}
                </span>
              </button>
              {activeMobileSection === "software" && (
                <div className="mt-2 pl-3 space-y-3 border-l border-primary/20">
                  <a
                    href="https://www.postbus.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between font-sans text-xs text-on-surface-variant hover:text-primary py-1"
                  >
                    <span className="font-semibold text-on-surface">PostBus (Shipping SaaS)</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                  <a
                    href="https://vachat.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between font-sans text-xs text-on-surface-variant hover:text-primary py-1"
                  >
                    <span className="font-semibold text-on-surface">VaChat (WhatsApp AI CRM)</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                  <Link
                    href="/#software-built-by-us"
                    onClick={handleLinkClick}
                    className="block font-mono text-[10px] text-primary font-bold pt-1"
                  >
                    View All In-House Software →
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/recent-projects"
                onClick={handleLinkClick}
                className={`font-sans text-[16px] font-bold block py-1.5 ${pathname === "/recent-projects" ? "text-primary border-l-4 border-primary pl-2" : "text-on-surface pl-3"
                  }`}
              >
                Recent Projects
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                onClick={handleLinkClick}
                className={`font-sans text-[16px] font-bold block py-1.5 ${pathname === "/case-studies" ? "text-primary border-l-4 border-primary pl-2" : "text-on-surface pl-3"
                  }`}
              >
                Case studies
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                onClick={handleLinkClick}
                className={`font-sans text-[16px] font-bold block py-1.5 ${pathname === "/blogs" ? "text-primary border-l-4 border-primary pl-2" : "text-on-surface pl-3"
                  }`}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            setContactOpen(true);
          }}
          className="w-full bg-primary hover:bg-forest-deep text-white px-6 py-3.5 rounded-xl font-mono text-[12px] font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer mt-8"
        >
          Let's Talk
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
