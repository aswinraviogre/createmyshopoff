"use client";

import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
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
      name: "Goutham",
      role: "Founder&CEO",
      image: "/team/arjun-k-ajish.jpg",

    },
    {
      name: "Anu Krishnan",
      role: "Offline marketing co head",
      image: "/team/ashwin-thomas.jpg",
    },
    {
      name: "Rimple Rai",
      role: "Marketing head",
      image: "/team/christy-andrews.jpg",
    },
    {
      name: "Aswin ravi",
      role: "Frontend Developer",
      image: "/team/thejus-nv.jpg",
    },
    {
      name: "Srilakshmi",
      role: "Api Tester",
      image: "/team/alex-babu.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-[160px] pb-12 px-6 md:px-12 max-w-[1200px] mx-auto fade-up relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-light text-primary font-mono text-[12px] font-medium uppercase tracking-widest mb-8 border border-primary/10 select-none">
            <span className="material-symbols-outlined text-[14px]">groups</span>
            About Create My Shop
          </div>
          <h1 className="font-display text-[44px] md:text-[68px] font-black text-on-surface mb-8 tracking-tighter leading-tight uppercase">
            We Build Digital Storefronts That Mean Business
          </h1>
          <p className="font-sans text-[18px] leading-[30px] text-secondary max-w-3xl pl-0 md:pl-8 border-l-2 border-primary">
            At Create My Shop, we don’t just build websites—we architect high-performing e-commerce ecosystems. Specializing exclusively in Shopify, our technical team combines clean code, stunning UI/UX design, and robust backend integrations to help brands scale without technical limits.
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
              Founded in 2020, Create My Shop was built on a simple principle: digital work should be clear, dependable, and human. What began as a small team focused on solving practical problems grew steadily through consistent delivery, careful thinking, and earned trust.
            </p>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Today, Create My Shop operates as a long-term technical partner rather than a conventional agency. By specialising exclusively within the Shopify ecosystem, our team chooses depth over breadth — focusing on structure, clarity, and sustainable growth.
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
              The Principles That Drive Our Code
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              Clear engineering standards and performance benchmarks guide every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-4 font-mono">01</span>
                <h3 className="font-sans text-base font-bold text-on-surface mb-3 uppercase">Speed is Revenue</h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  A one-second delay can cost millions in lost sales. We build lightning-fast storefronts optimized for maximum performance.
                </p>
              </div>
            </div>
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-4 font-mono">02</span>
                <h3 className="font-sans text-base font-bold text-on-surface mb-3 uppercase">Tailored Over Template</h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  Every brand is unique. We craft custom Liquid themes and unique user journeys rather than forcing your business into rigid templates.
                </p>
              </div>
            </div>
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-4 font-mono">03</span>
                <h3 className="font-sans text-base font-bold text-on-surface mb-3 uppercase">Ecosystem Thinking</h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  Beyond the cart, we integrate powerful logistics (PostBus) and automated AI marketing (VaChat) to supercharge your brand operations.
                </p>
              </div>
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
            "Built on Purpose, Grown Through Partnership: The Create My Shop Philosophy of Enduring Digital Craftsmanship"
          </h2>
          <div className="text-center">
            <p className="font-sans text-base leading-relaxed text-white/90 max-w-2xl mx-auto">
              When we chose the name Create My Shop, it reflected our singular mission: empowering ambitious brands and founders to build, launch, and scale world-class digital storefronts. We believe that meaningful commerce is built by people who care, collaborate, and take pride in what they create. That principle continues to guide us.
            </p>
            <p className="font-sans text-base leading-relaxed text-white/90 max-w-2xl mx-auto mt-4">
              Create My Shop has grown through clarity, consistency, and long-term partnership—listening carefully, building intentionally, and earning the trust of organizations across industries through dependable, high-impact digital work.
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

      {/* Proprietary Software Built by Us Section */}
      <section className="py-[100px] px-6 md:px-12 bg-white dark:bg-[#181818] border-t border-primary/5">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">code_blocks</span>
              <span className="text-primary font-semibold">Our In-House Products</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-on-surface uppercase">
              Software Built by Us
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">
              We don’t just consult and design for clients. We invent, engineer, and operate proprietary SaaS platforms that solve fundamental logistics and conversational commerce bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-up">
            {/* PostBus Card */}
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-14 px-3 py-2 bg-white dark:bg-[#202020] rounded-xl border border-primary/10 flex items-center justify-center">
                    <img src="/software/postbus-logo.webp" alt="PostBus Logo" className="max-h-8 w-auto object-contain" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-bold">
                    Shipping SaaS
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-on-surface mb-2">PostBus</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    India Post shipping software for ecommerce brands. Connect your existing Customer ID to manage orders, print compliant labels, and track shipments in one dashboard.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center pt-2">
                  <div className="bg-white dark:bg-white/5 p-2.5 rounded-xl border border-primary/5">
                    <div className="font-bold text-sm text-[#E11D48]">1-Click</div>
                    <div className="text-[10px] text-on-surface-variant">CEPT Booking</div>
                  </div>
                  <div className="bg-white dark:bg-white/5 p-2.5 rounded-xl border border-primary/5">
                    <div className="font-bold text-sm text-[#E11D48]">100%</div>
                    <div className="text-[10px] text-on-surface-variant">Shopify Sync</div>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-primary/5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-on-surface-variant/70 font-semibold">Live Production</span>
                <a
                  href="https://www.postbus.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#E11D48] hover:underline"
                >
                  Visit postbus.in
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            {/* VaChat Card */}
            <div className="bg-surface dark:bg-surface-dark border border-primary/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-14 px-3 py-2 bg-white dark:bg-[#202020] rounded-xl border border-primary/10 flex items-center justify-center">
                    <img src="/software/vachat-logo.svg" alt="VaChat Logo" className="max-h-8 w-auto object-contain" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#03cf65]/10 text-[#03cf65] font-bold">
                    AI WhatsApp CRM
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-on-surface mb-2">VaChat</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    Official Meta WhatsApp Business CRM with autonomous 24/7 AI sales agents, live Shopify product catalog sync, AI voice calling, and seamless in-chat checkout.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center pt-2">
                  <div className="bg-white dark:bg-white/5 p-2.5 rounded-xl border border-primary/5">
                    <div className="font-bold text-sm text-[#03cf65]">98%</div>
                    <div className="text-[10px] text-on-surface-variant">Open Rates</div>
                  </div>
                  <div className="bg-white dark:bg-white/5 p-2.5 rounded-xl border border-primary/5">
                    <div className="font-bold text-sm text-[#03cf65]">24/7</div>
                    <div className="text-[10px] text-on-surface-variant">AI Sales Agents</div>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-primary/5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-on-surface-variant/70 font-semibold">Live Production</span>
                <a
                  href="https://vachat.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#03cf65] hover:underline"
                >
                  Visit vachat.in
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-[120px] px-6 md:px-12 bg-surface border-t border-primary/5">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-light border border-primary/10 mb-4 font-mono text-[10px] uppercase tracking-wider select-none">
              <span className="material-symbols-outlined text-primary text-[14px]">groups</span>
              <span className="text-primary font-semibold">Team behind Create My Shop</span>
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
                  <div className="w-16 h-16 rounded-full bg-forest-light text-primary flex items-center justify-center mx-auto mb-4 select-none shadow-sm overflow-hidden border border-primary/10">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-2xl font-bold">person</span>
                    )}
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
