"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";

interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
}

export default function AboutUs() {
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

  const team: TeamMember[] = [
    {
      name: "Alex Babu",
      role: "Founder & CEO",
      linkedin: "https://in.linkedin.com/in/alex-babuofficial",
    },
    {
      name: "Ashwin Thomas",
      role: "Strategy and Growth Consultant",
      linkedin: "#",
    },
    {
      name: "Christy Andrews",
      role: "Senior Software Engineer",
      linkedin: "#",
    },
    {
      name: "Thejus N.V.",
      role: "Frontend Developer",
      linkedin: "#",
    },
    {
      name: "Arjun K. Ajish",
      role: "Software Engineer",
      linkedin: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-[160px] pb-12 px-6 md:px-12 max-w-[1200px] mx-auto fade-up relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-light text-primary font-mono text-[12px] font-medium uppercase tracking-widest mb-8 border border-primary/10 select-none">
            <span className="material-symbols-outlined text-[14px]">groups</span>
            Digital Partner
          </div>
          <h1 className="font-display text-[44px] md:text-[68px] font-black text-on-surface mb-8 tracking-tighter leading-tight uppercase">
            We design digital platforms
            <br />
            that prioritize people
          </h1>
          <p className="font-sans text-[18px] leading-[30px] text-secondary max-w-2xl pl-0 md:pl-8 border-l-2 border-primary">
            We engineer high-performance ecosystems and CRO strategies to maximize profit and scale your brand globally while remaining robust, scalable, and operationally sound.
          </p>
        </div>
      </section>

      {/* Shaped by Experience Section */}
      <section className="py-[80px] px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6 fade-up">
            <div className="inline-flex items-center gap-2 bg-forest-light text-primary-container px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-[16px]">history</span>
              Shaped by Experience
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              Our Journey
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Founded in 2020, Mayday Internet was built on a simple principle: digital work should be clear, dependable, and human. What began as a small team focused on solving practical problems grew steadily through consistent delivery, careful thinking, and earned trust.
            </p>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              In 2021, Mayday Internet took shape as a long-term digital partner rather than a conventional agency. By specialising within the Shopify ecosystem, the team chose depth over breadth — focusing on structure, clarity, and sustainable growth.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 select-none fade-up">
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm">
              <span className="material-symbols-outlined text-primary text-2xl mb-4">search</span>
              <h4 className="font-sans text-sm font-bold text-on-surface mb-2">Clarity First</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Complex problems, structured simply.</p>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm">
              <span className="material-symbols-outlined text-primary text-2xl mb-4">handshake</span>
              <h4 className="font-sans text-sm font-bold text-on-surface mb-2">Built on Trust</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Consistent delivery, transparent collaboration.</p>
            </div>
            <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm">
              <span className="material-symbols-outlined text-primary text-2xl mb-4">trending_up</span>
              <h4 className="font-sans text-sm font-bold text-on-surface mb-2">Designed to Scale</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Strong foundations for sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#181818]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">psychology</span>
              <span className="text-primary font-semibold">Our Principles</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              What Drives Us
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              Clear principles guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-2xl p-8">
              <h3 className="font-sans text-base font-bold text-on-surface mb-3 uppercase">Design That Sells</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Clear, conversion-focused design that respects the user and serves the business.
              </p>
            </div>
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-2xl p-8">
              <h3 className="font-sans text-base font-bold text-on-surface mb-3 uppercase">Infrastructure That Lasts</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Systems built thoughtfully — strong enough for today and adaptable for tomorrow.
              </p>
            </div>
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-2xl p-8">
              <h3 className="font-sans text-base font-bold text-on-surface mb-3 uppercase">Strategy Rooted in Reality</h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Decisions guided by data, context, and lived business understanding — not assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-[120px] px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between fade-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-forest-light text-primary-container px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none mb-6">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                Our Vision
              </div>
              <h3 className="font-display text-2xl font-bold text-on-surface mb-4 uppercase">Partnership that Grows</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                To create a workspace rooted in quality of life — where people thrive, teams feel supported, and growth happens naturally.
              </p>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mt-4">
                We believe the most meaningful progress comes when we grow alongside our clients, not ahead of them. We are proud to be part of our clients’ journeys, working shoulder-to-shoulder as they build, evolve, and achieve what matters most to them.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white dark:bg-surface-dark border border-primary/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between fade-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-forest-light text-primary-container px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none mb-6">
                <span className="material-symbols-outlined text-[16px]">explore</span>
                Our Mission
              </div>
              <h3 className="font-display text-2xl font-bold text-on-surface mb-4 uppercase">Future of Excellence</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                We are committed to shaping a future where digital excellence is not a one-time achievement, but a continuous process driven by learning, adaptability, and innovation.
              </p>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed mt-4">
                By evolving with technology and investing in knowledge, we build solutions that remain relevant, scalable, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-[120px] px-6 md:px-12 bg-primary-container text-white relative overflow-hidden select-none">
        <div className="max-w-[900px] mx-auto text-center relative z-10 space-y-8 fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">format_quote</span>
            Founder Message
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold leading-relaxed tracking-tight italic">
            "Built on Purpose, Grown Through Partnership: The Mayday Internet Philosophy of Enduring Digital Craftsmanship"
          </h2>
          <div className="text-center">
            <p className="font-sans text-base leading-relaxed text-white/90 max-w-2xl mx-auto">
              When we chose the name Mayday, inspired by May Day—Labour Day, it reflected our belief that meaningful work is built by people who care, collaborate, and take pride in what they create. That principle continues to guide us.
            </p>
            <p className="font-sans text-base leading-relaxed text-white/90 max-w-2xl mx-auto mt-4">
              Mayday Internet has grown through clarity, consistency, and long-term partnership—listening carefully, building intentionally, and earning the trust of organizations across industries through dependable, high-impact digital work.
            </p>
          </div>
          <div className="pt-4">
            <h4 className="font-display text-lg font-bold text-[#b3e620] uppercase">Alex Babu</h4>
            <span className="text-xs text-white/70 font-mono uppercase tracking-wider">Founder & CEO</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-deep/20 to-transparent pointer-events-none"></div>
      </section>

      {/* Growing & Staying True */}
      <section className="py-[80px] px-6 md:px-12 bg-white dark:bg-[#181818]">
        <div className="max-w-[900px] mx-auto text-center space-y-6 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light text-primary font-mono text-[10px] uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px]">school</span>
            Learning Forward
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-black text-on-surface uppercase font-bold">Growing &amp; Staying True</h3>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            We continue to learn every day. The digital world shifts fast, and we welcome that pace — not as pressure, but as possibility. We experiment, refine, improve, and grow — with our team and with our clients.
          </p>
          <p className="font-sans text-xs text-on-surface-variant italic max-w-2xl mx-auto opacity-75">
            And yes — this very page was shaped through conversation, rewrites, reflection, feedback, and a few helpful nudges from ChatGPT. Because we’re not pretending to be finished. We’re building — with care, intention, and momentum.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-[120px] px-6 md:px-12 bg-surface border-t border-primary/5">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">groups</span>
              <span className="text-primary font-semibold">Team behind Mayday</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              Our Team
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              A multidisciplinary team building stable, high-performance digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 fade-up">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark border border-primary/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-center hover:scale-102 transition-transform duration-300">
                <div>
                  <div className="w-14 h-14 rounded-full bg-forest-light text-primary flex items-center justify-center mx-auto mb-4 select-none shadow-sm">
                    <span className="material-symbols-outlined text-2xl font-bold">person</span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-on-surface leading-tight">{member.name}</h4>
                  <p className="font-sans text-[11px] text-on-surface-variant mt-1">{member.role}</p>
                </div>
                {member.linkedin && member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-primary hover:text-forest-deep mt-4 block font-bold transition-colors select-none"
                  >
                    LinkedIn Profile
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
