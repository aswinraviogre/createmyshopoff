"use client";

import React, { useState } from "react";

export default function FitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    niche: "Fashion",
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
      <div className="border-0 p-8 text-center flex flex-col items-center justify-center space-y-4 animate-[fadeIn_0.3s_ease-out]">
        <div className="w-16 h-16 bg-forest-light text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm animate-bounce">
          <span className="material-symbols-outlined text-3xl font-black">done</span>
        </div>
        <h3 className="font-display text-xl font-extrabold text-on-surface uppercase tracking-tight">Assessment Received!</h3>
        <p className="font-sans text-xs text-on-surface-variant max-w-xs leading-relaxed">
          Thank you, {formData.name}. We will review your e-commerce challenges and get back to you within 2 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-left w-full"
    >
      {/* Row 1: Full name and Email address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Full name"
          className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
        />
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email address"
          className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
        />
      </div>

      {/* Row 2: Phone number */}
      <input
        type="tel"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Phone number"
        className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
      />

      {/* Row 3: Niche select dropdown */}
      <div className="relative">
        <select
          value={formData.niche}
          onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
          className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer text-on-surface-variant/70"
        >
          <option value="Fashion">Fashion</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Food & Beverages">Food &amp; Beverages</option>
          <option value="Other D2C">Other D2C</option>
        </select>
        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 pointer-events-none text-lg">
          keyboard_arrow_down
        </span>
      </div>

      {/* Row 4: Share project idea */}
      <textarea
        required
        rows={4}
        value={formData.challenge}
        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
        placeholder="Share your project idea..."
        className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-on-surface-variant/40"
      />

      {/* Cloudflare Turnstile Mockup */}
      <div className="flex items-center justify-between border border-[#e2e8f0] dark:border-white/10 rounded-xl p-3 bg-white dark:bg-surface-dark select-none max-w-xs shadow-sm">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="turnstile-check"
            className="w-5 h-5 accent-orange-500 rounded border-gray-300 cursor-pointer"
            required
          />
          <label htmlFor="turnstile-check" className="font-sans text-xs text-on-surface-variant cursor-pointer select-none">
            Verify you are human
          </label>
        </div>
        <div className="flex flex-col items-end text-[9px] text-[#4a5568] dark:text-[#a0aec0]">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.19 18.2L6.19 13.2L7.61 11.78L11.19 15.37L16.39 10.17L17.81 11.59L11.19 18.2Z" fill="#F48120" />
            </svg>
            <span className="font-bold text-on-surface dark:text-white">CLOUDFLARE</span>
          </div>
          <span className="opacity-60 mt-0.5">
            <a href="#" className="hover:underline">Privacy</a> • <a href="#" className="hover:underline">Terms</a>
          </span>
        </div>
      </div>

      {/* Row 5: Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#b3e620] hover:bg-[#9ccc1c] disabled:bg-[#b3e620]/60 text-on-surface px-8 py-4 rounded-full font-sans text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 duration-150 select-none w-fit"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-on-surface border-t-transparent rounded-full animate-spin"></span>
            Starting...
          </>
        ) : (
          <>
            Get Started
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </>
        )}
      </button>
    </form>
  );
}
