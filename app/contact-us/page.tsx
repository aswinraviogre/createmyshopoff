"use client";

import { useEffect } from "react";
import FitForm from "@/components/FitForm";

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
      <main className="pt-36 pb-20 w-full max-w-[1000px] mx-auto px-6 md:px-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-5 space-y-6 fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider select-none border border-primary/10">
              <span className="material-symbols-outlined text-[14px]">forum</span>
              Get in Touch
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-tight">
              Start a Conversation
            </h1>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Have an idea? Or an e-commerce bottleneck? Fill out the assessment questionnaire.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              We respond to all verified requests within 2 hours.
            </p>
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
