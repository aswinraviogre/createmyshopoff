"use client";

import React, { useState } from "react";

export default function FitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "Shopify",
    challenge: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-surface-dark border border-primary/15 rounded-3xl p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-sm animate-[fadeIn_0.3s_ease-out]">
        <div className="w-16 h-16 bg-forest-light text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm animate-bounce">
          <span className="material-symbols-outlined text-3xl font-black">done</span>
        </div>
        <h3 className="font-display text-xl font-extrabold text-on-surface uppercase tracking-tight">Assessment Received!</h3>
        <p className="font-sans text-xs text-on-surface-variant max-w-xs leading-relaxed">
          Thank you, {formData.name}. We will review your ecommerce challenges and get back to you within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-surface-dark border border-primary/10 rounded-3xl p-6 md:p-8 space-y-5 shadow-sm text-left"
    >
      <div>
        <label htmlFor="form-name" className="block font-mono text-[10px] uppercase tracking-wider text-primary font-bold mb-1.5 select-none">
          Your Name
        </label>
        <input
          id="form-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. John Doe"
          className="w-full bg-surface dark:bg-surface-dark-container border border-primary/10 rounded-xl px-4 py-3 font-sans text-xs text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:opacity-50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="form-email" className="block font-mono text-[10px] uppercase tracking-wider text-primary font-bold mb-1.5 select-none">
            Work Email
          </label>
          <input
            id="form-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. john@brand.com"
            className="w-full bg-surface dark:bg-surface-dark-container border border-primary/10 rounded-xl px-4 py-3 font-sans text-xs text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="form-phone" className="block font-mono text-[10px] uppercase tracking-wider text-primary font-bold mb-1.5 select-none">
            Phone Number
          </label>
          <input
            id="form-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98765 43210"
            className="w-full bg-surface dark:bg-surface-dark-container border border-primary/10 rounded-xl px-4 py-3 font-sans text-xs text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:opacity-50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-platform" className="block font-mono text-[10px] uppercase tracking-wider text-primary font-bold mb-1.5 select-none">
          Current E-commerce Platform
        </label>
        <div className="relative">
          <select
            id="form-platform"
            value={formData.platform}
            onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
            className="w-full bg-surface dark:bg-surface-dark-container border border-primary/10 rounded-xl px-4 py-3 font-sans text-xs text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
          >
            <option value="Shopify">Shopify / Shopify Plus</option>
            <option value="WooCommerce">WooCommerce</option>
            <option value="Magento">Magento / Adobe Commerce</option>
            <option value="Custom">Custom / Headless</option>
            <option value="None">None / Starting Out</option>
          </select>
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-base">
            unfold_more
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="form-challenge" className="block font-mono text-[10px] uppercase tracking-wider text-primary font-bold mb-1.5 select-none">
          Primary E-commerce Challenge
        </label>
        <textarea
          id="form-challenge"
          required
          rows={3}
          value={formData.challenge}
          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
          placeholder="What's the main bottleneck or issue you are facing today?"
          className="w-full bg-surface dark:bg-surface-dark-container border border-primary/10 rounded-xl px-4 py-3 font-sans text-xs text-on-surface focus:outline-none focus:border-primary transition-colors resize-none placeholder:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-forest-deep disabled:bg-primary/50 text-white py-3.5 rounded-xl font-mono text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] duration-150 select-none"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Assessing...
          </>
        ) : (
          <>
            Start the Conversation
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </>
        )}
      </button>
    </form>
  );
}
