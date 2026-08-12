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
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
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
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] rounded-full z-50 transition-all duration-300 border border-primary/10 dark:border-white/10 px-6 py-3 flex justify-between items-center ${scrolled
          ? "bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-md nav-scrolled"
          : "bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md shadow-sm"
          }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 select-none"
        >
          <img
            src="https://www.maydayinternet.com/wp-content/uploads/2021/11/mayday-logo-minimal.png"
            alt="Mayday Internet Logo"
            className="h-8 md:h-9 object-contain dark:invert"
          />
          <span className="font-display text-[20px] md:text-[22px] font-medium text-on-surface tracking-tight">Create my shop</span>
        </Link>

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
        <div className="flex md:hidden items-center gap-2 select-none">
          <button
            onClick={() => setContactOpen(true)}
            className="bg-white dark:bg-white/5 border border-primary/5 hover:border-primary/20 text-on-surface px-4 py-2 rounded-full font-sans text-[11px] font-bold shadow-sm flex items-center gap-1 active:scale-95 duration-150 cursor-pointer"
          >
            Let's Talk
            <span className="material-symbols-outlined text-[12px] font-black">arrow_forward</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-[#f2f4f2] dark:bg-white/5 flex items-center justify-center text-on-surface border border-primary/5 hover:bg-[#e2e8f0] dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <span className="material-symbols-outlined text-lg">close</span>
            ) : (
              <div className="flex flex-col gap-[3px] items-center justify-center">
                <div className="w-4.5 h-[2px] bg-on-surface rounded-full" />
                <div className="w-4.5 h-[2px] bg-on-surface rounded-full" />
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
          <div className="flex items-center gap-2 mb-4 select-none">
            <img
              src="https://www.maydayinternet.com/wp-content/uploads/2021/11/mayday-logo-minimal.png"
              alt="Mayday Internet Logo"
              className="h-8 object-contain dark:invert"
            />
            <span className="font-display text-[20px] font-medium text-on-surface tracking-tight">Create my shop</span>
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
