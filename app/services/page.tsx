"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Services() {
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

  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-36 pb-[160px]">
        {/* Section 1: Professional Shopify Services (Split Layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-[160px]">
          <div className="pr-0 lg:pr-12 fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-6 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">star</span>
              <span className="text-primary font-semibold">Shopify Services</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-on-surface mb-6 uppercase tracking-tight">
              Professional Shopify Services Tailored For Modern Retail
            </h1>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant mb-10 max-w-xl">
              Whether you are migrating from another platform, launching a brand-new DTC brand, or scaling an enterprise catalog, our engineering team delivers precision-built solutions.
            </p>
            <div className="space-y-4">
              {/* Service Card 1 */}
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white dark:bg-surface-dark border border-primary/10 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-mono font-bold text-xs text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-0.5">
                  01
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-on-surface mb-1">Custom Shopify Store Development</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Complete store architecture setup, payment gateway integration, multi-currency/multi-language configuration, tax rules, and automated shipping profiles.
                  </p>
                </div>
              </div>
              {/* Service Card 2 */}
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white dark:bg-surface-dark border border-primary/10 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-mono font-bold text-xs text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-0.5">
                  02
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-on-surface mb-1">Custom Liquid Theme Development &amp; Modification</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Custom section building, dynamic checkout blocks, flexible product detail pages (PDP), and optimized collection filters built natively into Shopify Liquid.
                  </p>
                </div>
              </div>
              {/* Service Card 3 */}
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white dark:bg-surface-dark border border-primary/10 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-mono font-bold text-xs text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-0.5">
                  03
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-on-surface mb-1">E-Commerce Migration Services</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Seamless data migration from WooCommerce, Magento, or Custom platforms to Shopify with zero downtime and zero loss of SEO authority or customer history.
                  </p>
                </div>
              </div>
              {/* Service Card 4 */}
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white dark:bg-surface-dark border border-primary/10 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-mono font-bold text-xs text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-0.5">
                  04
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-on-surface mb-1">Performance &amp; Core Web Vitals Optimization</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Comprehensive code audits, script optimization, lazy loading, and image compression to achieve elite Google Lighthouse scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] md:h-[650px] rounded-3xl overflow-hidden mt-12 lg:mt-0 shadow-sm border border-primary/10 fade-up">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Professional consulting and strategy analytics workspace."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoJiqdOWgvWZt3oZWvKECwVSTmSR1rPgj3ORJFCnTSGt8FrPxOyPOIk_Ako62xFmDnEbF98mSXEjv07IW5oAMSygTDxUlJIaaVD9_9HUtrxn2hJtQBCmKzoD1W4QcUS1jTnQF7vFnxxNG2_EehNAw9iSl4MZ9hVZrq6DEGBvnuTLYOuEBsJ21-wboY7h3uqZu1thM2jl2jJjVxYs0zkE8Cvud-EFtq39IyZsBEyvUZ7eITC7X1mcQt"
            />
          </div>
        </section>

        {/* Section 2: Proven Results (Split Layout Reversed) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden order-2 lg:order-1 bg-white dark:bg-surface-dark shadow-sm border border-primary/10 fade-up">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Smartphone displaying a premium fashion app."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOhmoUVr2S9kk6i3bwzM2MqHlHyoBW3W6SNAbY6FP8m4D-zi0Sztvu76y_QyKrej-7IYx8dQUPzp14dMkyJBvnIDENbphh5bUt0hSJrzPByeIiq6hnr4qYg9lMzWt1nljW33wMIVPPMV-UTQTTSwnzNhVLHSK8Lm5A9rKvkxT8pEp2JYxv8-0qNkhqiyhoJiCtkfZvCsl27TqZ5q2QfoFfm7PpHIcDO8VsXlWd8kNg4E8_gPFVbwaw"
            />
            {/* Floating Badges */}
            <div className="absolute top-[15%] -left-4 bg-white/95 dark:bg-surface-dark/95 rounded-full py-3 px-5 shadow-lg border border-primary/10 flex items-center gap-4 animate-[bounce_4s_infinite] select-none">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
              </div>
              <div>
                <div className="font-sans text-xs md:text-sm font-bold text-on-surface">-20% Bounce Rate</div>
                <div className="text-[10px] text-on-surface-variant">Better engagement</div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-4 lg:-right-8 bg-white/95 dark:bg-surface-dark/95 rounded-full py-3 px-5 shadow-lg border border-primary/10 flex items-center gap-4 animate-[bounce_5s_infinite_0.5s] select-none">
              <div className="w-10 h-10 rounded-full bg-[#b3e620] flex items-center justify-center text-on-surface shrink-0">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </div>
              <div>
                <div className="font-sans text-xs md:text-sm font-bold text-on-surface">+45% Conversion Boost</div>
                <div className="text-[10px] text-on-surface-variant">Higher conversions</div>
              </div>
            </div>
            <div className="absolute bottom-[15%] -left-2 bg-white/95 dark:bg-surface-dark/95 rounded-full py-3 px-5 shadow-lg border border-primary/10 flex items-center gap-4 animate-[bounce_4.5s_infinite_1s] select-none">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
              </div>
              <div>
                <div className="font-sans text-xs md:text-sm font-bold text-on-surface">+40% Faster Load</div>
                <div className="text-[10px] text-on-surface-variant">Improved speed</div>
              </div>
            </div>
          </div>

          <div className="pl-0 lg:pl-12 order-1 lg:order-2 fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-6 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">verified</span>
              <span className="text-primary font-semibold">Proven Results</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface mb-6 uppercase">
              What Careful Work Looks Like
            </h2>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant mb-12 max-w-lg">
              When you do ecommerce work properly and without shortcuts, the outcomes tend to take care of themselves.
            </p>
            {/* Stats List */}
            <div className="space-y-8 border-t border-primary/10 pt-8 select-none">
              <div className="flex justify-between items-baseline border-b border-primary/5 pb-4">
                <div className="font-display text-4xl md:text-6xl font-black text-primary">50+</div>
                <div className="font-mono text-xs uppercase tracking-wider bg-surface-container px-3 py-1 rounded-md text-on-surface-variant">
                  Shopify stores launched
                </div>
              </div>
              <div className="flex justify-between items-baseline border-b border-primary/5 pb-4">
                <div className="font-display text-4xl md:text-6xl font-black text-primary">7+</div>
                <div className="font-mono text-xs uppercase tracking-wider bg-surface-container px-3 py-1 rounded-md text-on-surface-variant">
                  Years in Shopify ecosystem
                </div>
              </div>
              <div className="flex justify-between items-baseline border-b border-primary/5 pb-4">
                <div className="font-display text-4xl md:text-6xl font-black text-primary">₹10Cr+</div>
                <div className="font-mono text-xs uppercase tracking-wider bg-surface-container px-3 py-1 rounded-md text-on-surface-variant">
                  Revenue enabled
                </div>
              </div>
              <div className="flex justify-between items-baseline border-b border-primary/5 pb-4">
                <div className="font-display text-4xl md:text-6xl font-black text-primary">2hr</div>
                <div className="font-mono text-xs uppercase tracking-wider bg-surface-container px-3 py-1 rounded-md text-on-surface-variant">
                  Response guarantee
                </div>
              </div>
            </div>
            <p className="font-sans text-sm text-on-surface-variant italic mt-8 max-w-md border-l-2 border-primary pl-4">
              Every number here belongs to a real brand — one we were trusted to build, migrate, or grow.
            </p>
          </div>
        </section>
      </main>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
