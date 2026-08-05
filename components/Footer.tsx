"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "./ContactModal";
import FitForm from "./FitForm";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Dynamic Bottom Contact Form CTA (Present on all pages) */}
      <section className="py-[100px] px-6 md:px-12 bg-white dark:bg-[#151515] border-t border-primary/5 select-none">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-forest-light text-primary px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider border border-primary/5">
              <span className="material-symbols-outlined text-[14px]">explore</span>
              Start Today
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-none">
              Got a project in mind?
              <br />
              Let's build it together
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              We help ambitious brands launch, rebuild, and optimize Shopify ecosystems. Share your challenges and let's assess alignment.
            </p>
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                No sales calls • 2-Hour Response guaranteed
              </span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <FitForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-20 pb-10 bg-surface dark:bg-surface-dark border-t border-primary/5 dark:border-white/5 select-none">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Link
                href="/"
                className="flex items-center gap-2.5 mb-4 select-none"
              >
                <img
                  src="https://www.maydayinternet.com/wp-content/uploads/2021/11/mayday-logo-minimal.png"
                  alt="Mayday Internet Logo"
                  className="h-8 object-contain dark:invert"
                />
                <span className="font-display text-2xl font-black text-on-surface tracking-tight">Mayday Internet</span>
              </Link>
              <p className="font-sans text-sm text-on-surface-variant max-w-sm">
                We build stable, scalable, and operationally sound e-commerce experiences. Evolving with the digital landscape.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4">
              <div>
                <h5 className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold mb-1">Panampilly Nagar Office</h5>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  9th Cross Rd, Avenue Road, above Starbucks, Panampilly Nagar, Kochi, Kerala 682036
                </p>
              </div>
              <div>
                <h5 className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold mb-1">Indira Nagar Office</h5>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  279, 5th Main Road, 6th Cross Rd, Indira Nagar II Stage, Bengaluru, Karnataka 560038
                </p>
              </div>
            </div>

            <p className="font-sans text-[11px] text-on-surface-variant opacity-75">
              © {new Date().getFullYear()} Mayday Internet. All rights reserved.
            </p>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Nav Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold mb-2">
                Navigation
              </h4>
              <Link href="/" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/contact-us" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Contact Us
              </Link>
              <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Careers
              </a>
            </div>

            {/* Showcase Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold mb-2">
                Showcase
              </h4>
              <Link href="/recent-projects" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Recent Projects
              </Link>
              <Link href="/case-studies" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link href="/blogs" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Blogs & News
              </Link>
            </div>

            {/* Builds Column */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold mb-2">
                Services
              </h4>
              <Link href="/ecommerce-website-development" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Store Builds
              </Link>
              <Link href="/shopify-ecommerce-development" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Shopify Builds
              </Link>
              <Link href="/platform-migration" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                Safe Migration
              </Link>
              <Link href="/conversion-rate-optimisation" className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors">
                CRO Growth
              </Link>
            </div>
          </div>

          {/* Contact & Profiles Column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-on-surface font-semibold">
              Get in Touch
            </h4>
            
            {/* Team Roster */}
            <div className="space-y-4">
              <div>
                <a
                  href="https://in.linkedin.com/in/alex-babuofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-bold text-on-surface hover:text-primary flex items-center gap-1 transition-colors"
                >
                  Alex Babu
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
                <span className="font-sans text-[11px] text-on-surface-variant">Founder & CEO</span>
              </div>
              <div>
                <a
                  href="#"
                  className="font-sans text-sm font-bold text-on-surface hover:text-primary transition-colors"
                >
                  Ashwin Thomas
                </a>
                <br />
                <span className="font-sans text-[11px] text-on-surface-variant">Strategy and Growth Consultant</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2 border-t border-primary/5">
              <a
                href="mailto:hello@maydayinternet.com"
                className="flex items-center gap-2 font-sans text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                hello@maydayinternet.com
              </a>
              <a
                href="tel:+918129410168"
                className="flex items-center gap-2 font-sans text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">phone</span>
                +91 81294 10168
              </a>
              <a
                href="https://wa.me/+918089001603"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">forum</span>
                +91 80890 01603 (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (WhatsApp Simulator) */}
      <a
        href="https://wa.me/+918089001603"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] hover:bg-[#1ebd58] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform z-40 cursor-pointer"
        title="Start WhatsApp Chat"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
