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
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-20px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1240px] rounded-full z-50 transition-all duration-300 border border-primary/10 dark:border-white/10 px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex justify-between items-center ${scrolled
          ? "bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-md nav-scrolled"
          : "bg-surface/85 dark:bg-surface-dark/85 backdrop-blur-md shadow-sm"
          }`}
      >
        {/* Brand & In-Header Software Logos */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 select-none shrink-0 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 select-none shrink-0"
          >
            <span className="font-display text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] font-bold text-on-surface tracking-tight whitespace-nowrap">
              Create my shop
            </span>
          </Link>

          {/* PostBus & VaChat Senior UI/UX Ecosystem Badges - Visible on XL screens (1280px+) where horizontal space allows */}
          <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-primary/15 dark:border-white/10">
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
                <span className="hidden 2xl:inline-block text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#E11D48] bg-[#E11D48]/10 px-1 py-0.5 rounded leading-none">
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
                <span className="hidden 2xl:inline-block text-[8.5px] font-mono font-bold uppercase tracking-wider text-[#00a84d] bg-[#03cf65]/10 px-1 py-0.5 rounded leading-none">
                  AI CRM
                </span>
              </div>
              <span className="material-symbols-outlined text-[12px] text-on-surface-variant/50 group-hover:text-[#03cf65] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                north_east
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Menu - Active on LG (1024px+) */}
        <ul className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7">
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`font-sans text-[13px] xl:text-[14px] font-medium transition-colors ${pathname === "/" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              onClick={handleLinkClick}
              className={`font-sans text-[13px] xl:text-[14px] font-medium transition-colors ${pathname === "/about-us" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
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
              className="font-sans text-[13px] xl:text-[14px] font-medium text-on-surface-variant hover:text-primary flex items-center gap-1 cursor-pointer transition-colors"
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
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[700px] max-w-[90vw] bg-white dark:bg-surface-dark border border-primary/10 dark:border-white/10 rounded-3xl shadow-xl p-7 grid grid-cols-2 gap-x-8 gap-y-6 z-50 animate-[fadeIn_0.15s_ease-out]"
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
              className="font-sans text-[13px] xl:text-[14px] font-medium text-on-surface-variant hover:text-primary flex items-center gap-1.5 cursor-pointer transition-colors"
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
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[440px] max-w-[90vw] bg-white dark:bg-surface-dark border border-primary/10 dark:border-white/10 rounded-3xl shadow-xl p-5 z-50 animate-[fadeIn_0.15s_ease-out] space-y-3"
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
              className={`font-sans text-[13px] xl:text-[14px] font-medium transition-colors ${pathname === "/recent-projects" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Recent Projects
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              onClick={handleLinkClick}
              className={`font-sans text-[13px] xl:text-[14px] font-medium transition-colors ${pathname === "/case-studies" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Case studies
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              onClick={handleLinkClick}
              className={`font-sans text-[13px] xl:text-[14px] font-medium transition-colors ${pathname === "/blogs" ? "text-primary dark:text-primary-fixed font-semibold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              Blogs
            </Link>
          </li>
        </ul>

        {/* Action Button (Desktop - LG and up) */}
        <button
          onClick={() => setContactOpen(true)}
          className="bg-primary hover:bg-forest-deep text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-mono text-[11px] xl:text-[12px] font-semibold uppercase tracking-wider transition-all scale-95 hover:scale-100 active:scale-90 hidden lg:flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
        >
          Let's Talk
          <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
        </button>

        {/* Mobile & Tablet Action & Menu Controls - Visible on screens < LG (1024px) */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2.5 select-none shrink-0">
          <button
            onClick={() => setContactOpen(true)}
            className="bg-primary hover:bg-forest-deep text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-sans text-[11px] sm:text-xs font-bold shadow-xs flex items-center gap-1 active:scale-95 duration-150 cursor-pointer whitespace-nowrap shrink-0 transition-colors"
          >
            <span>Let's Talk</span>
            <span className="material-symbols-outlined text-[12px] sm:text-[13px] font-bold">arrow_forward</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface dark:bg-white/10 flex items-center justify-center text-on-surface border border-primary/10 hover:bg-forest-light dark:hover:bg-white/15 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <span className="material-symbols-outlined text-[18px]">close</span>
            ) : (
              <div className="flex flex-col gap-[3px] items-center justify-center">
                <div className="w-3.5 sm:w-4 h-[1.5px] sm:h-[2px] bg-on-surface rounded-full" />
                <div className="w-3.5 sm:w-4 h-[1.5px] sm:h-[2px] bg-on-surface rounded-full" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[310px] sm:w-[350px] bg-white dark:bg-surface-dark z-50 shadow-2xl p-5 sm:p-6 overflow-y-auto flex flex-col justify-between transition-transform duration-300 lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-5">
          {/* Header row inside drawer with Logo and Close button */}
          <div className="flex items-center justify-between pb-3 border-b border-primary/10 select-none">
            <span className="font-display text-[18px] sm:text-[20px] font-bold text-on-surface tracking-tight">Create my shop</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-surface dark:bg-white/10 flex items-center justify-center text-on-surface border border-primary/10 hover:bg-forest-light transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Software Quick Badges */}
          <div className="bg-surface dark:bg-white/5 p-3 rounded-2xl border border-primary/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-primary font-bold">
                In-House Software
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://www.postbus.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-[#202020] border border-primary/10 hover:border-[#E11D48] transition-all shadow-xs group"
                title="PostBus (postbus.in)"
              >
                <img src="/software/postbus-mark.svg" alt="PostBus" className="w-5 h-5 rounded-[5px] shrink-0" />
                <div className="min-w-0">
                  <div className="font-display text-[11px] font-bold text-on-surface group-hover:text-[#E11D48] truncate leading-tight">PostBus</div>
                  <div className="font-mono text-[8px] text-[#E11D48] font-semibold leading-tight">Shipping →</div>
                </div>
              </a>
              <a
                href="https://vachat.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center gap-1.5 p-2 rounded-xl bg-white dark:bg-[#202020] border border-primary/10 hover:border-[#03cf65] transition-all shadow-xs group"
                title="VaChat (vachat.in)"
              >
                <img src="/software/vachat-mark.svg" alt="VaChat" className="w-5 h-5 rounded-[5px] shrink-0" />
                <div className="min-w-0">
                  <div className="font-display text-[11px] font-bold text-on-surface group-hover:text-[#03cf65] truncate leading-tight">VaChat</div>
                  <div className="font-mono text-[8px] text-[#03cf65] font-semibold leading-tight">AI CRM →</div>
                </div>
              </a>
            </div>
          </div>

          <ul className="flex flex-col gap-1.5 pt-1">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`font-sans text-[15px] font-bold block py-2 px-3 rounded-xl transition-colors ${pathname === "/" ? "bg-primary/10 text-primary" : "text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={handleLinkClick}
                className={`font-sans text-[15px] font-bold block py-2 px-3 rounded-xl transition-colors ${pathname === "/about-us" ? "bg-primary/10 text-primary" : "text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                About us
              </Link>
            </li>

            {/* Mobile Dropdown Category Accordion */}
            <li>
              <button
                onClick={() => setActiveMobileSection(activeMobileSection === "services" ? null : "services")}
                className="w-full text-left font-sans text-[15px] font-bold py-2 px-3 rounded-xl flex justify-between items-center text-on-surface hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                <span>What We Do</span>
                <span className="material-symbols-outlined text-[18px]">
                  {activeMobileSection === "services" ? "expand_less" : "expand_more"}
                </span>
              </button>
              {activeMobileSection === "services" && (
                <div className="mt-1 pl-4 pr-2 py-2 space-y-3 bg-surface/50 dark:bg-white/5 rounded-xl border border-primary/10">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">
                        {cat.title}
                      </div>
                      <div className="flex flex-col gap-1 pl-1">
                        {cat.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="font-sans text-xs text-on-surface-variant hover:text-primary py-1 block"
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
            <li>
              <button
                onClick={() => setActiveMobileSection(activeMobileSection === "software" ? null : "software")}
                className="w-full text-left font-sans text-[15px] font-bold py-2 px-3 rounded-xl flex justify-between items-center text-on-surface hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
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
                <div className="mt-1 pl-4 pr-3 py-2 space-y-2 bg-surface/50 dark:bg-white/5 rounded-xl border border-primary/10">
                  <a
                    href="https://www.postbus.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between font-sans text-xs text-on-surface-variant hover:text-primary py-1"
                  >
                    <span className="font-semibold text-on-surface">PostBus (Shipping SaaS)</span>
                    <span className="material-symbols-outlined text-[14px] text-[#E11D48]">open_in_new</span>
                  </a>
                  <a
                    href="https://vachat.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between font-sans text-xs text-on-surface-variant hover:text-primary py-1"
                  >
                    <span className="font-semibold text-on-surface">VaChat (WhatsApp AI CRM)</span>
                    <span className="material-symbols-outlined text-[14px] text-[#03cf65]">open_in_new</span>
                  </a>
                  <Link
                    href="/#software-built-by-us"
                    onClick={handleLinkClick}
                    className="block font-mono text-[10px] text-primary font-bold pt-1.5 border-t border-primary/10"
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
                className={`font-sans text-[15px] font-bold block py-2 px-3 rounded-xl transition-colors ${pathname === "/recent-projects" ? "bg-primary/10 text-primary" : "text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                Recent Projects
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                onClick={handleLinkClick}
                className={`font-sans text-[15px] font-bold block py-2 px-3 rounded-xl transition-colors ${pathname === "/case-studies" ? "bg-primary/10 text-primary" : "text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                Case studies
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                onClick={handleLinkClick}
                className={`font-sans text-[15px] font-bold block py-2 px-3 rounded-xl transition-colors ${pathname === "/blogs" ? "bg-primary/10 text-primary" : "text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
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
          className="w-full bg-primary hover:bg-forest-deep text-white px-6 py-3 rounded-full font-mono text-[12px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer mt-6 active:scale-95"
        >
          Let's Talk
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
