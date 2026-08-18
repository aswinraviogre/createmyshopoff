"use client";

import { useEffect, useState, useRef } from "react";

interface WhatsAppAutomationProps {
  onContactClick: () => void;
}

export default function WhatsAppAutomation({ onContactClick }: WhatsAppAutomationProps) {
  const [chatStep, setChatStep] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Conversational Commerce Animation Sequence Loop
  useEffect(() => {
    if (reducedMotion) return;

    const sequence = [
      { step: 0, delay: 0 },       // Initial: Customer msg 1
      { step: 1, delay: 2000 },    // Bot replies
      { step: 2, delay: 4000 },    // Bot offers buttons
      { step: 3, delay: 6500 },    // Customer replies (clicks)
      { step: 4, delay: 8500 },    // Bot shows product card
      { step: 5, delay: 11000 },   // Customer clicks Add to Cart
      { step: 6, delay: 13000 },   // Bot sends order confirmation
      { step: 7, delay: 16000 },   // Reset pulse/loop
    ];

    let timers: NodeJS.Timeout[] = [];

    const runSequence = () => {
      // Loop pulse connection triggers
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 2000);

      sequence.forEach((item) => {
        const timer = setTimeout(() => {
          setChatStep(item.step);
        }, item.delay);
        timers.push(timer);
      });
    };

    runSequence();
    const interval = setInterval(runSequence, 18000);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  // Scroll chat window to bottom on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatStep]);

  const useCases = [
    { name: "Abandoned Cart", desc: "Recover lost sales automatically", icon: "shopping_cart" },
    { name: "Order Confirmation", desc: "Send immediate order summaries", icon: "check_circle" },
    { name: "Delivery Updates", desc: "Real-time shipping notifications", icon: "local_shipping" },
    { name: "Customer Support", desc: "Instant answers for common FAQs", icon: "support_agent" },
    { name: "Product Recommendations", desc: "Share tailored lists and offers", icon: "featured_play_list" },
    { name: "Offers & Campaigns", desc: "Broadcast broadcasts to target lists", icon: "campaign" },
    { name: "Customer Follow-ups", desc: "Trigger surveys and reviews", icon: "rate_review" },
    { name: "Repeat Purchases", desc: "Reminders based on buy cycle", icon: "replay" },
  ];

  return (
    <section className="py-[120px] px-6 md:px-12 bg-[#F5FAF6] dark:bg-[#111913] overflow-hidden relative border-b border-[#25D366]/10 select-none text-[#172117] dark:text-white">
      
      {/* Visual Bridge Section Connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none z-20">
        {/* Dash transition line */}
        <div className="w-[1px] h-10 border-l border-dashed border-gradient-green opacity-40" />
        
        {/* Bridging Pill */}
        <div className="flex items-center gap-1 bg-white dark:bg-[#18181b] px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-white/10 shadow-sm font-mono text-[9px] font-bold text-secondary dark:text-white/60 tracking-wider">
          <span className="text-[#5E8E3E] dark:text-[#95BF47]">SHOPIFY</span>
          <span className="material-symbols-outlined text-[10px] text-gray-400">arrow_forward</span>
          <span className="text-secondary dark:text-white/40">AUTOMATION</span>
          <span className="material-symbols-outlined text-[10px] text-gray-400">arrow_forward</span>
          <span className="text-[#25D366]">WHATSAPP</span>
        </div>
        
        {/* Dash transition line */}
        <div className="w-[1px] h-10 border-l border-dashed border-[#25D366]/20" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#25D366]/5 blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#128C7E]/5 blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1200px] mx-auto relative z-10 pt-10">
        
        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-5 space-y-6 fade-up visible">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f7ed] dark:bg-[#152a1c] border border-[#25D366]/20 text-[#128C7E] dark:text-[#25D366] font-mono text-[11px] font-bold uppercase tracking-wider select-none">
              <svg className="w-3.5 h-3.5 fill-[#128C7E] dark:fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.709 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Conversational Commerce</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] dark:text-white">
              WhatsApp
              <br />
              <span className="text-[#128C7E] dark:text-[#25D366]">Automation</span>
            </h2>

            <h3 className="font-sans text-[20px] md:text-[22px] font-bold text-[#172117] dark:text-[#cbd5e1] leading-tight">
              Turn Every WhatsApp Conversation Into an Ecommerce Opportunity.
            </h3>

            <p className="font-sans text-sm md:text-base leading-relaxed text-[#172117]/80 dark:text-white/70 max-w-lg">
              Automate customer conversations, order updates, product discovery, abandoned carts and support — all through a powerful WhatsApp commerce workflow connected to your store.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row pt-4 sm:items-center">
              <button
                onClick={onContactClick}
                className="bg-[#128C7E] hover:bg-[#075E54] text-white px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 duration-150 cursor-pointer shrink-0 text-center"
              >
                Automate Your WhatsApp →
              </button>
              
              <a
                href="#automation-flows"
                className="text-center bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-white/5 hover:border-[#128C7E]/60 text-secondary dark:text-white/80 px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all hover:shadow-sm active:scale-95 duration-150 shrink-0 cursor-pointer"
              >
                See How It Works
              </a>
            </div>

            <p className="font-sans text-xs text-[#172117]/60 dark:text-white/50 italic border-l-2 border-[#25D366] pl-4 py-0.5">
              Shopify + WhatsApp + Automation — connected into one seamless customer journey.
            </p>
          </div>

          {/* Right Column: Hero Visual + Interactive Node Animation */}
          <div className="lg:col-span-7 flex justify-center items-center relative py-6 select-none group">
            
            {/* Interactive Canvas Container */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-[36px] bg-white dark:bg-[#1a231a]/10 border border-[#25D366]/15 dark:border-[#25D366]/5 p-8 shadow-sm overflow-visible flex items-center justify-center">
              
              {/* Circular Guides */}
              <div className="absolute inset-16 rounded-full border border-dashed border-[#25D366]/10 pointer-events-none" />
              <div className="absolute inset-28 rounded-full border border-dashed border-[#25D366]/15 pointer-events-none" />

              {/* Connecting Lines Canvas */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100">
                <path d="M 50 50 Q 30 30, 20 20" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 Q 70 30, 80 20" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 Q 74 50, 86 50" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 Q 70 70, 78 78" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 L 50 86" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 Q 30 70, 22 78" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 Q 26 50, 12 50" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 Q 42 24, 38 12" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />
                <path d="M 50 50 Q 58 24, 62 12" className={`stroke-[#25D366]/30 dark:stroke-[#25D366]/10 transition-all duration-1000 ${isLinesDrawn(chatStep, reducedMotion) ? "stroke-dasharray-0" : "stroke-dasharray-100"}`} strokeWidth="0.75" fill="none" />

                {/* Pulse travel signals */}
                {(reducedMotion || pulseActive || chatStep > 0) && (
                  <>
                    <path d="M 50 50 Q 30 30, 20 20" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 70 30, 80 20" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 74 50, 86 50" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 70 70, 78 78" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 L 50 86" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 30 70, 22 78" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 26 50, 12 50" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 42 24, 38 12" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                    <path d="M 50 50 Q 58 24, 62 12" className="stroke-[#25D366] stroke-dasharray-pulse stroke-dashoffset-pulse" strokeWidth="1.25" fill="none" />
                  </>
                )}
              </svg>

              {/* Floating Automation Nodes */}
              {/* Shopify Store */}
              <div 
                className={`absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-[#F5FAF6] dark:bg-[#1a231a] border border-[#25D366]/20 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#5E8E3E] dark:text-[#95BF47]">shopping_bag</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Shopify</span>
              </div>
              {/* WhatsApp */}
              <div 
                className={`absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-[#F5FAF6] dark:bg-[#1a231a] border border-[#25D366]/20 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.709 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-mono text-[9px] font-bold ml-1 text-[#25D366]">WhatsApp</span>
              </div>
              {/* Customers */}
              <div 
                className={`absolute top-[50%] left-[86%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#128C7E] dark:text-[#25D366]">person</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Customers</span>
              </div>
              {/* Products */}
              <div 
                className={`absolute top-[78%] left-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#128C7E] dark:text-[#25D366]">shopping_bag</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Products</span>
              </div>
              {/* Orders */}
              <div 
                className={`absolute top-[86%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 6 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#128C7E] dark:text-[#25D366]">task_alt</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Orders</span>
              </div>
              {/* Payments */}
              <div 
                className={`absolute top-[78%] left-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 5 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#128C7E] dark:text-[#25D366]">payments</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Payments</span>
              </div>
              {/* Abandoned Cart */}
              <div 
                className={`absolute top-[50%] left-[12%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#128C7E] dark:text-[#25D366]">remove_shopping_cart</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Carts</span>
              </div>
              {/* Order Tracking */}
              <div 
                className={`absolute top-[12%] left-[38%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 6 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#128C7E] dark:text-[#25D366]">local_shipping</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Tracking</span>
              </div>
              {/* Customer Support */}
              <div 
                className={`absolute top-[12%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/10 shadow-sm transition-all duration-700 ${reducedMotion || chatStep >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              >
                <span className="material-symbols-outlined text-[15px] text-[#128C7E] dark:text-[#25D366]">support_agent</span>
                <span className="font-mono text-[9px] font-bold ml-1 text-secondary dark:text-white/60">Support</span>
              </div>

              {/* Central Custom Smartphone Chat Interface */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[290px] bg-white dark:bg-[#121214] rounded-[28px] border-4 border-[#172117] dark:border-white/15 shadow-2xl flex flex-col overflow-hidden group-hover:-translate-y-[52%] transition-all duration-700 select-none">
                
                {/* Chat Header */}
                <div className="bg-[#075E54] text-white px-3 py-2 flex items-center gap-1.5 shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.709 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-sans text-[10px] font-bold leading-none">Commerce Bot</h5>
                    <span className="font-mono text-[7px] opacity-70">Online</span>
                  </div>
                </div>

                {/* Chat Log Viewport */}
                <div ref={chatContainerRef} className="flex-1 p-3 space-y-2.5 overflow-y-auto bg-[#efeae2] dark:bg-[#0c0f0d] scrollbar-none relative flex flex-col justify-start">
                  
                  {/* Message 1: Customer */}
                  {(reducedMotion || chatStep >= 0) && (
                    <div className="bg-white dark:bg-[#1a1a1c] max-w-[85%] self-end rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm text-[9px] text-[#172117] dark:text-white leading-tight animate-fade-in animate-once">
                      "Hi! Is this product available?"
                    </div>
                  )}

                  {/* Message 2: Bot */}
                  {(reducedMotion || chatStep >= 1) && (
                    <div className="bg-[#e1f3db] dark:bg-[#163820] max-w-[85%] self-start rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm text-[9px] text-[#172117] dark:text-white leading-tight animate-fade-in animate-once">
                      "Hi 👋 Yes! It's available."
                    </div>
                  )}

                  {/* Message 3: Bot buttons */}
                  {(reducedMotion || chatStep >= 2) && (
                    <div className="space-y-1.5 self-start w-[85%] animate-fade-in animate-once">
                      <div className="bg-[#e1f3db] dark:bg-[#163820] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm text-[9px] text-[#172117] dark:text-white leading-tight">
                        "Would you like to see today's offers?"
                      </div>
                      <div className="flex flex-col gap-1 select-none">
                        <button className={`w-full py-1.5 text-center bg-white dark:bg-[#1a1a1c] rounded-md border border-gray-100 dark:border-white/5 font-sans text-[9px] font-bold text-[#128C7E] dark:text-[#25D366] transition-all ${chatStep === 3 ? "scale-95 bg-gray-50 border-emerald-500" : ""}`}>
                          View Products
                        </button>
                        <button className="w-full py-1.5 text-center bg-white dark:bg-[#1a1a1c] rounded-md border border-gray-100 dark:border-white/5 font-sans text-[9px] font-bold text-secondary dark:text-white/60">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Message 4: Customer Order request */}
                  {(reducedMotion || chatStep >= 3) && (
                    <div className="bg-white dark:bg-[#1a1a1c] max-w-[85%] self-end rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm text-[9px] text-[#172117] dark:text-white leading-tight animate-fade-in animate-once">
                      "I want to order."
                    </div>
                  )}

                  {/* Message 5: Bot Product card */}
                  {(reducedMotion || chatStep >= 4) && (
                    <div className="space-y-1.5 self-start w-[85%] animate-fade-in animate-once">
                      <div className="bg-[#e1f3db] dark:bg-[#163820] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm text-[9px] text-[#172117] dark:text-white leading-tight">
                        "Great! Here's your cart."
                      </div>
                      
                      {/* Product Card */}
                      <div className="bg-white dark:bg-[#1a1a1c] rounded-lg overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm">
                        <div className="h-16 bg-[#e6ece7] dark:bg-[#202022] flex items-center justify-center">
                          <span className="material-symbols-outlined text-3xl text-secondary opacity-30">shopping_bag</span>
                        </div>
                        <div className="p-2.5 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-[9px] font-bold text-[#172117] dark:text-white">Premium Product</span>
                            <span className="font-sans text-[8px] font-extrabold text-[#128C7E] dark:text-[#25D366]">₹2,499</span>
                          </div>
                          <button className={`w-full py-1 bg-[#128C7E] hover:bg-[#075E54] text-white rounded font-sans text-[8px] font-bold transition-all ${chatStep === 5 ? "scale-95 bg-emerald-600" : ""}`}>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message 6: Bot confirmation */}
                  {(reducedMotion || chatStep >= 6) && (
                    <div className="space-y-1.5 self-start w-[85%] animate-fade-in animate-once">
                      <div className="bg-[#e1f3db] dark:bg-[#163820] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm text-[9px] text-[#172117] dark:text-white leading-tight">
                        "Your order has been confirmed 🎉"
                      </div>
                      <div className="bg-white dark:bg-[#1a1a1c] p-2.5 rounded-lg border border-gray-100 dark:border-white/5 shadow-sm space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[8px] text-secondary dark:text-white/60">Order #SS10284</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <button className="w-full py-1 text-center bg-[#F5FAF6] dark:bg-[#1c271c] hover:bg-[#e8f7ed] border border-[#25D366]/20 text-[#128C7E] dark:text-[#25D366] rounded font-sans text-[8px] font-bold">
                          Track Order
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Clicking Indicator overlays */}
              {chatStep === 3 && !reducedMotion && (
                <div className="absolute top-[48%] left-[45%] w-4 h-4 rounded-full bg-[#25D366]/60 border border-white animate-ping pointer-events-none z-30" />
              )}
              {chatStep === 5 && !reducedMotion && (
                <div className="absolute bottom-[24%] left-[43%] w-4 h-4 rounded-full bg-[#25D366]/60 border border-white animate-ping pointer-events-none z-30" />
              )}

            </div>
          </div>
          
        </div>

        {/* Conversation Automation Flow Timeline */}
        <div id="automation-flows" className="space-y-12 mb-28">
          <div className="text-center max-w-xl mx-auto space-y-4 fade-up visible">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f7ed] dark:bg-[#152a1c] border border-[#25D366]/20 rounded-full font-mono text-[10px] uppercase tracking-wider text-[#128C7E] dark:text-[#25D366]">
              Timeline
            </div>
            <h3 className="font-display text-3xl font-extrabold uppercase dark:text-white">Automation Lifecycle</h3>
            <p className="font-sans text-sm text-secondary dark:text-white/60">
              The customer journey seamlessly flows from message discovery to order confirmation in real time.
            </p>
          </div>

          {/* Timeline flow */}
          <div className="relative border-l border-gray-200 dark:border-white/5 md:border-l-0 md:border-t pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-6 gap-8 select-none">
            {[
              { title: "1. Customer Message", desc: '"Hi, I want to know more about this product."', icon: "chat" },
              { title: "2. Intelligent Response", desc: '"Sure! Here is everything you need."', icon: "bolt" },
              { title: "3. Product Recommendation", desc: "Product image + price + CTA", icon: "category" },
              { title: "4. Add to Cart", desc: '"Add to Cart" directly in chat', icon: "shopping_cart" },
              { title: "5. Order Confirmation", desc: '"Your order has been confirmed 🎉"', icon: "check_circle" },
              { title: "6. Delivery Updates", desc: '"Your order is on the way 🚚"', icon: "local_shipping" },
            ].map((step, idx) => (
              <div key={idx} className="relative pl-6 md:pl-0">
                {/* Timeline node dot */}
                <div className="absolute -left-[29px] top-1 md:left-1/2 md:-translate-x-1/2 md:-top-[41px] w-6 h-6 rounded-full bg-white dark:bg-[#18181b] border-2 border-[#25D366] flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[12px] text-[#128C7E] dark:text-[#25D366]">{step.icon}</span>
                </div>
                <div className="space-y-2 text-left md:text-center md:pt-2">
                  <h5 className="font-sans text-xs font-black text-[#172117] dark:text-white uppercase">{step.title}</h5>
                  <p className="font-sans text-[11px] text-secondary dark:text-white/60 leading-relaxed max-w-[140px] md:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Can We Automate? Section */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-xl mx-auto space-y-4 fade-up visible">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f7ed] dark:bg-[#152a1c] border border-[#25D366]/20 rounded-full font-mono text-[10px] uppercase tracking-wider text-[#128C7E] dark:text-[#25D366]">
              Workflows
            </div>
            <h3 className="font-display text-3xl font-extrabold uppercase dark:text-white">What Can We Automate?</h3>
            <p className="font-sans text-sm text-secondary dark:text-white/60">
              Turn recurring operations into low-friction, high-converting customer dialogues.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-[#18181b] border border-gray-100 dark:border-white/5 hover:border-[#25D366] rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#e8f7ed] dark:bg-[#16271c] text-[#128C7E] dark:text-[#25D366] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-lg">{useCase.icon}</span>
                  </div>
                  <h5 className="font-sans text-xs font-bold text-[#172117] dark:text-white mb-1">{useCase.name}</h5>
                  <p className="font-sans text-[10px] text-secondary dark:text-white/55 leading-relaxed">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Capabilities / Features */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-xl mx-auto space-y-4 fade-up visible">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8f7ed] dark:bg-[#152a1c] border border-[#25D366]/20 rounded-full font-mono text-[10px] uppercase tracking-wider text-[#128C7E] dark:text-[#25D366]">
              Features
            </div>
            <h3 className="font-display text-3xl font-extrabold uppercase dark:text-white">Automation Features</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "WhatsApp Product Discovery", desc: "Let customers discover products, categories and offers directly through WhatsApp conversations.", icon: "manage_search" },
              { title: "Automated Order Updates", desc: "Send automated order confirmations, shipping updates and delivery notifications.", icon: "circle_notifications" },
              { title: "Abandoned Cart Recovery", desc: "Automatically reconnect with customers who leave products in their cart.", icon: "local_mall" },
              { title: "WhatsApp Customer Support", desc: "Automate common customer questions while keeping conversations natural and useful.", icon: "chat_bubble" },
              { title: "Conversational Commerce", desc: "Help customers discover products, make decisions and complete purchases through WhatsApp.", icon: "forum" },
              { title: "Shopify + WhatsApp Integration", desc: "Connect your Shopify store with WhatsApp workflows for a seamless ecommerce experience.", icon: "sync_saved_locally" },
            ].map((cap, idx) => (
              <div 
                key={idx}
                className="group bg-white dark:bg-[#18181b] border border-gray-100 dark:border-white/5 hover:border-[#25D366] rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,211,102,0.08)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#e8f7ed] dark:bg-[#16271c] text-[#128C7E] dark:text-[#25D366] flex items-center justify-center transition-colors group-hover:bg-[#128C7E] group-hover:text-white">
                    <span className="material-symbols-outlined text-[24px]">{cap.icon}</span>
                  </div>
                  <h4 className="font-sans text-base font-bold text-[#172117] dark:text-white group-hover:text-[#128C7E] dark:group-hover:text-[#25D366] transition-colors">{cap.title}</h4>
                  <p className="font-sans text-xs md:text-sm text-[#172117]/70 dark:text-white/60 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Row & Stack Badges */}
        <div className="pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 mb-28">
          <div className="flex items-center gap-1.5">
            <span className="font-sans text-xs font-bold text-secondary dark:text-white/60 uppercase">Ecosystem:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Shopify", "WhatsApp", "WhatsApp Business Platform", "APIs", "Webhooks", "Automation"].map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-[#25D366]/50 font-mono text-[10px] text-secondary dark:text-white/60 select-none hover:text-[#128C7E] dark:hover:text-[#25D366] transition-all cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Store ➔ WhatsApp", "API-driven", "High-retention", "Instant Checkout"].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 select-none">
                <span className="material-symbols-outlined text-[14px] text-[#25D366]">check_circle</span>
                <span className="font-sans text-[11px] font-bold text-[#172117]/75 dark:text-white/70">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block with Whatsapp Radial Glow */}
        <div className="bg-[#128C7E]/95 dark:bg-[#132317]/80 rounded-[32px] p-8 md:p-16 border border-[#25D366]/20 relative overflow-hidden text-center text-white">
          {/* Radial animated glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.12)_0%,transparent_70%)] animate-whatsapp-glow pointer-events-none" />
          
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h3 className="font-display text-2xl md:text-4xl font-extrabold uppercase leading-tight">
              Your Store. Your Customers. One Automated Conversation.
            </h3>
            <p className="font-sans text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Connect your ecommerce store with WhatsApp and turn repetitive customer interactions into automated, scalable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-4">
              <button
                onClick={onContactClick}
                className="bg-white hover:bg-gray-100 text-[#128C7E] px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 duration-150 cursor-pointer shrink-0"
              >
                Build WhatsApp Automation →
              </button>
              <button
                onClick={onContactClick}
                className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all active:scale-95 duration-150 shrink-0 cursor-pointer"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Inline Helper logic to determine line visibility triggers based on loops
function isLinesDrawn(chatStep: number, reducedMotion: boolean): boolean {
  if (reducedMotion) return true;
  return chatStep >= 2;
}
