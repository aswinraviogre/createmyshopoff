"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";
import { CLIENT_PROJECTS, PROJECT_CATEGORIES, ProjectCategory } from "@/data/projects";

export default function RecentProjects() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

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
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === "All"
      ? CLIENT_PROJECTS
      : CLIENT_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-36 pb-[160px] w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <section className="mb-12 fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider mb-6 select-none border border-primary/10">
              <span className="material-symbols-outlined text-[14px]">star</span>
              Our Recent Work
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-on-surface mb-6 uppercase leading-tight">
              Selected Client Projects
            </h1>
            <p className="font-sans text-[18px] leading-[30px] text-on-surface-variant">
              A selection of 16 live brands we've helped build, transform, and grow across fashion, jewellery, wellness, food, and gifting.
            </p>
          </div>
        </section>

        {/* Category Filters Bar */}
        <section className="mb-12 fade-up">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none select-none">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === "All" ? CLIENT_PROJECTS.length : CLIENT_PROJECTS.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface-container/60 hover:bg-surface-container text-on-surface/80 hover:text-on-surface border border-primary/5"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-black/5 dark:bg-white/10 text-on-surface-variant"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected Works Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-surface-dark rounded-[24px] border border-primary/10 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:shadow-lg fade-up"
            >
              <div>
                <div className="aspect-[16/10] relative bg-surface-container overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                    aria-label={project.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 left-4 bg-white/95 dark:bg-surface-dark/95 font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-primary border border-primary/5 select-none shadow-sm font-semibold flex items-center gap-1">
                    <span>{project.category}</span>
                    {project.location && (
                      <span className="text-on-surface-variant/70">· {project.location}</span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[20px] font-extrabold text-on-surface mb-2 uppercase line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant opacity-80 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 select-none">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-primary hover:text-forest-deep transition-colors"
                >
                  Visit Website
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                    open_in_new
                  </span>
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Selected Works CTA */}
        <section className="mt-[120px] bg-forest-light dark:bg-primary-container/10 rounded-[24px] p-10 md:p-16 border border-primary/10 fade-up text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-black text-on-surface uppercase">
              Let's build it together
            </h2>
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
