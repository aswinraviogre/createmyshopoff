"use client";

import { useEffect, useState } from "react";

interface ShopifyAppDevProps {
  onContactClick: () => void;
}

export default function ShopifyAppDev({ onContactClick }: ShopifyAppDevProps) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [orders, setOrders] = useState(1248);
  const [customers, setCustomers] = useState(8421);
  const [revenue, setRevenue] = useState(1284520);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Animation Loop State Machine
  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setAnimationPhase((prev) => {
        const next = (prev + 1) % 8;
        
        // Handle stats adjustments based on phase
        if (next === 5 || next === 6) {
          // Subtle numbers update
          setOrders(1254);
          setCustomers(8425);
          setRevenue(1285910);
        } else if (next === 0 || next === 7) {
          // Reset to initial values
          setOrders(1248);
          setCustomers(8421);
          setRevenue(1284520);
        }
        
        return next;
      });
    }, 2500); // Step every 2.5 seconds (full cycle ~20 seconds)

    return () => clearInterval(interval);
  }, [reducedMotion]);

  // Determine visibility states based on phase
  const isLogoVisible = reducedMotion || animationPhase >= 1 && animationPhase <= 6;
  const isDashboardVisible = reducedMotion || animationPhase >= 2 && animationPhase <= 6;
  const isLinesDrawn = reducedMotion || animationPhase >= 3 && animationPhase <= 6;
  const isNodesActive = reducedMotion || animationPhase >= 4 && animationPhase <= 6;
  const isPulseActive = reducedMotion || animationPhase >= 5 && animationPhase <= 6;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const capabilities = [
    {
      title: "Custom Shopify Apps",
      desc: "Build custom applications tailored to specific business workflows.",
      icon: "extension",
    },
    {
      title: "Shopify API Integration",
      desc: "Connect Shopify with external platforms, ERP, CRM, payment systems and business tools.",
      icon: "sync_alt",
    },
    {
      title: "Shopify Admin Extensions",
      desc: "Create powerful tools and experiences directly inside the Shopify admin.",
      icon: "dashboard_customize",
    },
    {
      title: "Checkout Extensions",
      desc: "Build customized checkout functionality and experiences.",
      icon: "shopping_cart_checkout",
    },
    {
      title: "Shopify Automation",
      desc: "Automate repetitive ecommerce processes and workflows.",
      icon: "bolt",
    },
    {
      title: "Webhooks & Integrations",
      desc: "Create real-time connections between Shopify and external systems.",
      icon: "webhook",
    },
  ];

  return (
    <section className="py-[120px] px-6 md:px-12 bg-white dark:bg-[#121212] overflow-hidden relative border-b border-primary/5 select-none text-[#172217] dark:text-white">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#95BF47]/5 dark:bg-[#95BF47]/2 blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#5E8E3E]/5 dark:bg-[#5E8E3E]/2 blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-5 space-y-6 fade-up visible">
            {/* Custom Brand Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F8ED] dark:bg-[#1c271c] border border-[#95BF47]/20 text-[#5E8E3E] dark:text-[#95BF47] font-mono text-[11px] font-bold uppercase tracking-wider select-none">
              <svg className="w-3.5 h-3.5 fill-[#5E8E3E] dark:fill-[#95BF47]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.65 3.447-1.719 14.156-1.719 14.156s-.664-.176-.798-.21c-.135-.034-.17-.134-.15-.226l2.42-17.653c.02-.136.142-.194.275-.194h2.075zM8.077 4.954c-.114.156-.251.308-.415.441-.122.1-.219.066-.252-.089L6.52 1.348C6.5.952 6.643.687 6.945.545c.241-.113.513-.075.76.1.378.271.605.811.566 1.48-.023.385-.098.818-.194 2.829z" />
              </svg>
              <span>Shopify Technology Partner</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] dark:text-white">
              Shopify App
              <br />
              <span className="text-[#5E8E3E] dark:text-[#95BF47]">Development</span>
            </h2>

            <h3 className="font-sans text-[20px] md:text-[22px] font-bold text-[#172217] dark:text-[#cbd5e1] leading-tight">
              Build Powerful Shopify Apps. Extend What’s Possible.
            </h3>

            <p className="font-sans text-sm md:text-base leading-relaxed text-[#172217]/80 dark:text-white/70 max-w-lg">
              We build custom Shopify apps, integrations and automation that help ecommerce businesses create better experiences, streamline operations and scale faster.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row pt-4 sm:items-center">
              <button
                onClick={onContactClick}
                className="bg-[#5E8E3E] hover:bg-[#4d7532] text-white px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 duration-150 cursor-pointer shrink-0 text-center"
              >
                Build Your Shopify App →
              </button>
              
              <a
                href="#solutions"
                className="text-center bg-transparent border border-gray-200 dark:border-white/10 hover:border-[#5E8E3E]/60 text-secondary dark:text-white/80 px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all hover:shadow-sm active:scale-95 duration-150 shrink-0 cursor-pointer"
              >
                Explore Our Shopify Solutions
              </a>
            </div>

            <p className="font-sans text-xs text-[#172217]/60 dark:text-white/50 italic border-l-2 border-[#95BF47] pl-4 py-0.5">
              From idea to production — we build Shopify solutions around the way your business actually works.
            </p>

            {/* Optional Mini Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 dark:border-white/5">
              <div>
                <div className="font-sans text-xs font-bold text-[#5E8E3E] dark:text-[#95BF47] uppercase tracking-wider">Custom Apps</div>
                <div className="text-[11px] text-[#172217]/60 dark:text-white/50 mt-1">Tailored logic</div>
              </div>
              <div>
                <div className="font-sans text-xs font-bold text-[#5E8E3E] dark:text-[#95BF47] uppercase tracking-wider">API Syncs</div>
                <div className="text-[11px] text-[#172217]/60 dark:text-white/50 mt-1">Real-time flows</div>
              </div>
              <div>
                <div className="font-sans text-xs font-bold text-[#5E8E3E] dark:text-[#95BF47] uppercase tracking-wider">Automation</div>
                <div className="text-[11px] text-[#172217]/60 dark:text-white/50 mt-1">No manual steps</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual + Interactive Node Animation */}
          <div className="lg:col-span-7 flex justify-center items-center relative py-6 select-none group">
            
            {/* Interactive Canvas container */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-[36px] bg-[#F4F8ED]/40 dark:bg-[#1a231a]/10 border border-[#95BF47]/15 dark:border-[#95BF47]/5 p-8 shadow-sm overflow-visible flex items-center justify-center">
              
              {/* Background circular guides */}
              <div className="absolute inset-16 rounded-full border border-dashed border-[#95BF47]/10 pointer-events-none" />
              <div className="absolute inset-28 rounded-full border border-dashed border-[#95BF47]/15 pointer-events-none" />

              {/* Connecting Lines Canvas */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100">
                {/* Store Connection */}
                <path d="M 50 50 L 50 12" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                {/* Products Connection */}
                <path d="M 50 50 Q 70 40, 80 22" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                {/* Orders Connection */}
                <path d="M 50 50 Q 76 50, 88 46" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                {/* Customers Connection */}
                <path d="M 50 50 Q 72 62, 82 72" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                {/* Checkout Connection */}
                <path d="M 50 50 L 50 86" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                {/* Analytics Connection */}
                <path d="M 50 50 Q 28 62, 18 72" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                {/* Payments Connection */}
                <path d="M 50 50 Q 24 50, 12 46" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                {/* Automation Connection */}
                <path d="M 50 50 Q 30 40, 20 22" className={`stroke-[#95BF47]/30 dark:stroke-[#95BF47]/10 transition-all duration-1000 ${isLinesDrawn ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />

                {/* Animated traveling pulses */}
                {isPulseActive && (
                  <>
                    <path d="M 50 50 L 50 12" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 70 40, 80 22" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 76 50, 88 46" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 72 62, 82 72" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 L 50 86" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 28 62, 18 72" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 24 50, 12 46" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 30 40, 20 22" className="stroke-[#95BF47] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                  </>
                )}
              </svg>

              {/* Floating API Nodes */}
              {/* Store */}
              <div 
                className={`absolute top-[12%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "100ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">storefront</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Store</span>
              </div>
              {/* Products */}
              <div 
                className={`absolute top-[22%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">inventory_2</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Products</span>
              </div>
              {/* Orders */}
              <div 
                className={`absolute top-[46%] left-[88%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "300ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">shopping_bag</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Orders</span>
              </div>
              {/* Customers */}
              <div 
                className={`absolute top-[72%] left-[82%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "400ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">group</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Customers</span>
              </div>
              {/* Checkout */}
              <div 
                className={`absolute top-[86%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "500ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">shopping_cart_checkout</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Checkout</span>
              </div>
              {/* Analytics */}
              <div 
                className={`absolute top-[72%] left-[18%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "600ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">bar_chart</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Analytics</span>
              </div>
              {/* Payments */}
              <div 
                className={`absolute top-[46%] left-[12%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "700ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">credit_card</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Payments</span>
              </div>
              {/* Automation */}
              <div 
                className={`absolute top-[22%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${isNodesActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: "800ms" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E]">settings_suggest</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Automation</span>
              </div>

              {/* Central Custom Shopify App Dashboard */}
              <div 
                className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[270px] bg-white/95 dark:bg-[#18181b]/95 rounded-[24px] border border-[#95BF47]/20 dark:border-white/10 p-5 shadow-2xl backdrop-blur-sm transition-all duration-700 flex flex-col justify-between group-hover:-translate-y-[53%] group-hover:shadow-[0_20px_50px_rgba(149,191,71,0.15)] ${isDashboardVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              >
                
                {/* App Header */}
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                  <div className="flex items-center gap-1.5">
                    {/* Tiny glowing logo */}
                    <div className={`p-1 bg-[#F4F8ED] dark:bg-[#2c3d2c] rounded-md transition-all duration-700 ${isLogoVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                      <svg className="w-3.5 h-3.5 fill-[#5E8E3E] dark:fill-[#95BF47]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.65 3.447-1.719 14.156-1.719 14.156s-.664-.176-.798-.21c-.135-.034-.17-.134-.15-.226l2.42-17.653c.02-.136.142-.194.275-.194h2.075zM8.077 4.954c-.114.156-.251.308-.415.441-.122.1-.219.066-.252-.089L6.52 1.348C6.5.952 6.643.687 6.945.545c.241-.113.513-.075.76.1.378.271.605.811.566 1.48-.023.385-.098.818-.194 2.829z" />
                      </svg>
                    </div>
                    <span className="font-sans text-[11px] font-black tracking-tight text-[#172217] dark:text-white uppercase">Shopify App</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#95BF47] animate-ping" />
                    <span className="font-mono text-[8px] text-[#5E8E3E] dark:text-[#95BF47] font-bold">LIVE</span>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="space-y-3.5 my-3">
                  <div>
                    <span className="text-[10px] text-secondary dark:text-white/50 block">Today's Revenue</span>
                    <span className="font-sans text-lg font-black text-[#172217] dark:text-white tracking-tight transition-all duration-500">
                      {formatCurrency(revenue)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[9px] text-secondary dark:text-white/50 block">Orders</span>
                      <span className="font-sans text-xs font-extrabold text-[#172217] dark:text-white transition-all duration-500">
                        {orders}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-secondary dark:text-white/50 block">Customers</span>
                      <span className="font-sans text-xs font-extrabold text-[#172217] dark:text-white transition-all duration-500">
                        {customers}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-[9px] text-secondary dark:text-white/50 block">Products Sync</span>
                    <span className="font-sans text-xs font-extrabold text-[#172217] dark:text-white">
                      384 <span className="text-[9px] text-[#5E8E3E] font-bold">100%</span>
                    </span>
                  </div>
                </div>

                {/* Status indicators */}
                <div className="space-y-1.5 border-t border-gray-100 dark:border-white/5 pt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" />
                    <span className="font-mono text-[9px] text-[#172217]/70 dark:text-white/70">Store Connected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" />
                    <span className="font-mono text-[9px] text-[#172217]/70 dark:text-white/70">API Connected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#95BF47]" />
                    <span className="font-mono text-[9px] text-[#172217]/70 dark:text-white/70">Webhooks Active</span>
                  </div>
                </div>

              </div>

              {/* Floating UI Elements */}
              {/* API status badge */}
              <div 
                className={`absolute top-[40%] right-[3%] bg-[#F4F8ED] dark:bg-[#202c20] text-[#5E8E3E] dark:text-[#95BF47] border border-[#95BF47]/30 px-2 py-1 rounded-md font-mono text-[8px] font-bold shadow-md select-none transform rotate-[6deg] group-hover:rotate-0 transition-all duration-700 ${isNodesActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                style={{ transitionDelay: "600ms" }}
              >
                API 200 OK
              </div>

              {/* Syncing indicator */}
              <div 
                className={`absolute bottom-[35%] left-[2%] bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 px-2 py-1 rounded-md font-mono text-[8px] text-[#172217]/60 dark:text-white/60 shadow-md select-none transform -rotate-[5deg] group-hover:rotate-0 transition-all duration-700 flex items-center gap-1 ${isNodesActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                style={{ transitionDelay: "700ms" }}
              >
                <span className="material-symbols-outlined text-[10px] animate-spin text-[#5E8E3E] dark:text-[#95BF47]">sync</span>
                <span>Webhooks active</span>
              </div>

            </div>
          </div>
          
        </div>

        {/* Section Capabilities / Services */}
        <div id="solutions" className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-4 fade-up visible">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F8ED] dark:bg-[#1c271c] border border-[#95BF47]/20 rounded-full font-mono text-[10px] uppercase tracking-wider text-[#5E8E3E] dark:text-[#95BF47]">
              Capabilities
            </div>
            <h3 className="font-display text-3xl font-extrabold uppercase dark:text-white">Shopify Engine Capabilities</h3>
            <p className="font-sans text-sm text-secondary dark:text-white/60">
              We specialize in custom engineering that connects your Shopify backend to any business process, layout or database.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-[#18181b] border border-gray-100 dark:border-white/5 hover:border-[#95BF47] rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(149,191,71,0.08)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F8ED] dark:bg-[#202c20] text-[#5E8E3E] dark:text-[#95BF47] flex items-center justify-center transition-colors group-hover:bg-[#5E8E3E] group-hover:text-white">
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  
                  <h4 className="font-sans text-base font-bold text-[#172217] dark:text-white group-hover:text-[#5E8E3E] dark:group-hover:text-[#95BF47] transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="font-sans text-xs md:text-sm text-[#172217]/70 dark:text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Badges */}
        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1.5">
            <span className="font-sans text-xs font-bold text-secondary dark:text-white/60 uppercase">App Tech Stack:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Shopify", "Shopify APIs", "GraphQL", "Webhooks", "Shopify CLI", "Node.js"].map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-[#95BF47]/50 font-mono text-[10px] text-secondary dark:text-white/60 select-none hover:text-[#5E8E3E] dark:hover:text-[#95BF47] transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Custom-built", "Scalable", "Secure", "API-first", "Performance-focused"].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 select-none">
                <span className="material-symbols-outlined text-[14px] text-[#5E8E3E] dark:text-[#95BF47]">check_circle</span>
                <span className="font-sans text-[11px] font-bold text-[#172217]/75 dark:text-white/70">{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
