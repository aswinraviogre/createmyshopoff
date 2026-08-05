"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";

interface Project {
  title: string;
  category: string;
  tag: "Shopify" | "WooCommerce" | "Shopify Redesign";
  href: string;
  imageIndex: number;
}

export default function RecentProjects() {
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

  const projects: Project[] = [
    { title: "Popees Baby Care", category: "Redesign", tag: "Shopify Redesign", href: "https://popees.com/", imageIndex: 1 },
    { title: "Kalyan Silks India", category: "Redesign", tag: "Shopify Redesign", href: "https://kalyansilks.com/", imageIndex: 2 },
    { title: "iBell Home Appliances", category: "Redesign", tag: "Shopify Redesign", href: "https://ibellstore.com/", imageIndex: 3 },
    { title: "Dötch Leather UK", category: "Build", tag: "Shopify", href: "https://dotchleather.com/", imageIndex: 4 },
    { title: "Kalyan Silks UAE", category: "Build", tag: "Shopify", href: "https://kalyansilks.ae/", imageIndex: 2 },
    { title: "Fazyo", category: "Build", tag: "Shopify", href: "https://www.fazyo.com", imageIndex: 5 },
    { title: "Basmat Saudi Arabia", category: "Build", tag: "WooCommerce", href: "https://www.basmatksa.com/", imageIndex: 6 },
    { title: "Topco Silver", category: "Build", tag: "Shopify", href: "https://topcosilver.com/", imageIndex: 7 },
    { title: "Herary", category: "Build", tag: "Shopify", href: "https://www.herary.com/", imageIndex: 8 },
    { title: "Thinking Threads", category: "Build", tag: "Shopify", href: "https://thinkingthreads.in/", imageIndex: 9 },
    { title: "Ecoair Group", category: "Build", tag: "Shopify", href: "https://www.ecoairgroup.com", imageIndex: 1 },
    { title: "The Banyan Studio", category: "Build", tag: "Shopify", href: "https://www.thebanyanstudio.com/", imageIndex: 3 },
    { title: "Loomroot", category: "Build", tag: "Shopify", href: "https://loomroot.com/", imageIndex: 4 },
    { title: "Warelux", category: "Build", tag: "Shopify", href: "https://thinkingthreads.in/", imageIndex: 5 },
  ];

  // Curated premium e-commerce design mockup images matching target site aesthetics
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZxwohiYg8ZgdBSaTaHiFGP9_L9MxcbdmImPbCdhc6eflWc4dxvlwvguUKAh7nv0DG5e9LDSWjAzYSeuNZojRTq3G72zw9qRlFQotfIN-YvDunO2SuJBp2F74FelqrC_WGiPVSg6NBUWsb-ql99Rsv7TEfx4Z2um4T4tjGJw0vyv0P4qPjBThKQz7DoaYPGGqzCW6Trvfd7aFBKUrPDYY2T6vfio-nkkuWufEG6YcFxYUZgItXVF66",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0hSBZLdZED1L5sm8ECvHbqgf3k8HWmQ_F-tHG3ox5-n54G8xfB47tu5qK4b37lfHaQ6RmubU5_F9DZkveoLr-BatRZVoxVzvIMqH0mGJzoEmE9Y3YlgZK_TS-mCDGbY35nVwG_-ysI6-BMj94MEwqVJDWH8eRLGb-DYflgMoHQoCSTr9LuPLOEoq_xCawu8RAmqHp6-xFACiyAxaspjWbMDbxv2ramcd2FqJBfrZUOQlWBOKK0jzy",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAv3g64max3sCY0GzAfVgHewxjW2gKr412jAZDOztGYT0bEbQLAOt9_gjibeGc75kEF2nxPRS8h4Isr4viHlwKJQ9u2K6qjPtX4uHkGDP2fSMYNDo-PkVQiNrPDvjLDUfMhdeyb1i8QWnbnOOphbxuvmfUJ7QDjDVhI4WiCkFO07e5EA5f7WxyV7McSx2zsHWcZN7-xTkY66F-P5VfNhfUpwUhwMt4u6w5blLmeiNooy6R63Xd1Kz1B",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCaScbkagc4rKDV2-bz_aCGS0hcI1KtlTrq7k6Om5E58I8rbvG-bTiH-JY9k_I7O76Ecu2qjyMwHNZlKqfoaIuno18nf93ZTytP55PU1nXEFXLboesIrfwpeU8eM14xBttUGI33Le10oovbj0LajdJIrPqzPx8xxVYMUX7ne4KQ0rnIsNz7GZXAfVBN7pTDn8roKQfCLmoiRrrlRaHluaXe5x3drMM6jWxT_RyTZAfLydBJ3sDpf3X0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpfYXvMb4O_LRnRR_OpH4sxQKE3ddgEVwSm3uOiYPwv4vaeqOCpb9wOmpbIDsLYo99w-MScE-xrKoIKTGXh9k_0Z4S7BGbWFsTBFqZ5LKc0L3T5Bb_q6PUBcv3kVpjedSBiqVafgDAvm_jpdK5ArvAeY89BtFABV2uz0WQO5mjil1Rm3vtju76ULAVeTQjP3jMkYmeIxuGMQ4hOdyCsNHoKKqkJ-iyFpf5Kr-CaHHlB_VHIx7y3oVYYdptRdH1jly06A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDczYFqFqhPU3US2kwHES4q7fwJWY_GQ0prCmffCdU-I93ivetPDISl1BV9Hr52JWXd-vkS9IOneRZwqPzK-vkZBXa0lyxKCIXMoJ_Ahz1yzgG8nnzN7hX3qikO3ol-mu7ihgEmHtxFNf2n8Oxn6FOPsDvd12_YIVpwrxU2SEJNe27-HCyCVP-UgEfkyH3BXNh0B38VPs0ZIe015z8IXspvkKNLqexPUnnq_FnGopu4bMahX5qbDb57jJ1Ug4tq7aVYwA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOhmoUVr2S9kk6i3bwzM2MqHlHyoBW3W6SNAbY6FP8m4D-zi0Sztvu76y_QyKrej-7IYx8dQUPzp14dMkyJBvnIDENbphh5bUt0hSJrzPByeIiq6hnr4qYg9lMzWt1nljW33wMIVPPMV-UTQTTSwnzNhVLHSK8Lm5A9rKvkxT8pEp2JYxv8-0qNkhqiyhoJiCtkfZvCsl27TqZ5q2QfoFfm7PpHIcDO8VsXlWd8kNg4E8_gPFVbwaw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD50fZY0v5sPIAd2JP4l7-MsHjXlQqSRjjdnKYMCO9lf94BzD4mxxWt8Abc1XVuXFpa6vBasKYxfDzAoLq3l0jvOMeAFQ5HxqE-BbcWYjzQ2ThLt52jLp_4KzgiXq61ncRMtt8-3pUwT7gUSYJxc0GPaFNUk6SyquqWOJVq3m1kamp66abScxxUh5vHtzHAmrj2UfHQAOpGmXJB5d-JfcAuYbnYWu5je7m-pFQryFHoFI3XOJZCwJJp_8Eo-bsaj7dUYw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCoJiqdOWgvWZt3oZWvKECwVSTmSR1rPgj3ORJFCnTSGt8FrPxOyPOIk_Ako62xFmDnEbF98mSXEjv07IW5oAMSygTDxUlJIaaVD9_9HUtrxn2hJtQBCmKzoD1W4QcUS1jTnQF7vFnxxNG2_EehNAw9iSl4MZ9hVZrq6DEGBvnuTLYOuEBsJ21-wboY7h3uqZu1thM2jl2jJjVxYs0zkE8Cvud-EFtq39IyZsBEyvUZ7eITC7X1mcQt"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-36 pb-[160px] w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <section className="mb-20 fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider mb-6 select-none border border-primary/10">
              <span className="material-symbols-outlined text-[14px]">star</span>
              Selected Works
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-on-surface mb-6 uppercase leading-tight">
              Recent Projects
            </h1>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant">
              Real-world projects delivering measurable digital impact. Check out our high-performance custom builds, migrations, and redesigns.
            </p>
          </div>
        </section>

        {/* Selected Works Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article key={idx} className="group bg-white dark:bg-surface-dark rounded-[24px] border border-primary/10 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:shadow-lg fade-up">
              <div>
                <div className="h-[200px] relative bg-surface-container overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${images[project.imageIndex % images.length]}')` }}
                    aria-label={project.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-surface-dark/90 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-primary border border-primary/5 select-none shadow-sm font-semibold">
                    {project.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[20px] font-extrabold text-on-surface mb-2 uppercase line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant opacity-80 leading-relaxed">
                    Custom e-commerce experience structured for conversion, speed, and seamless checkout funnel optimization.
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
        </section>

        {/* Selected Works CTA */}
        <section className="mt-[120px] bg-forest-light dark:bg-primary-container/10 rounded-[24px] p-10 md:p-16 border border-primary/10 fade-up text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-black text-on-surface uppercase">Let's build it together</h2>
            <p className="font-sans text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Consult a Shopify expert — free, no obligation call. We help brands launch, migrate, and scale.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-forest-deep text-white px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-md select-none active:scale-95 duration-150"
            >
              Start a Conversation
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
