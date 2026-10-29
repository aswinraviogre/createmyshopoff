"use client";

import { useEffect } from "react";
import FitForm from "@/components/FitForm";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_RAW,
  getWhatsAppUrl,
  DEFAULT_WHATSAPP_MESSAGE,
} from "@/data/contact";

export default function ContactUs() {
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
      <main className="pt-36 pb-20 w-full max-w-[1050px] mx-auto px-6 md:px-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-5 space-y-6 fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider select-none border border-primary/10">
              <span className="material-symbols-outlined text-[14px]">forum</span>
              Get in Touch
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-tight">
              Let’s Build Something Exceptional Together
            </h1>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Have a project in mind, need a custom Shopify theme, or want to scale your online store? Drop us a message, and our engineering team will get back to you promptly.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              We respond to all verified requests within 2 hours.
            </p>

            {/* Direct Contact & WhatsApp Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-secondary leading-none">
                    WhatsApp Chat
                  </div>
                  <div className="text-sm font-bold text-on-surface mt-0.5 group-hover:text-[#128C7E] dark:group-hover:text-[#25D366] transition-colors">
                    {CONTACT_PHONE}
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-[#25D366] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE_RAW}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-surface-dark border border-primary/10 hover:border-primary/30 transition-all group shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-light text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">phone</span>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-secondary leading-none">
                    Direct Phone Line
                  </div>
                  <div className="text-sm font-bold text-on-surface mt-0.5 group-hover:text-primary transition-colors">
                    {CONTACT_PHONE}
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-transform">
                  call
                </span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 fade-up">
            <FitForm />
          </div>
        </section>
      </main>
    </div>
  );
}
