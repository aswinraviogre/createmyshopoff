"use client";

import React, { useState } from "react";
import {
  CONTACT_PHONE,
  getWhatsAppUrl,
  buildFitFormMessage,
} from "@/data/contact";

export default function FitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "New Store Build",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = buildFitFormMessage(formData);
    const waUrl = getWhatsAppUrl(msg);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    }, 400);
  };

  if (submitted) {
    const waUrl = getWhatsAppUrl(buildFitFormMessage(formData));
    return (
      <div className="border-0 p-8 text-center flex flex-col items-center justify-center space-y-5 animate-[fadeIn_0.3s_ease-out]">
        <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow-sm animate-bounce">
          <span className="material-symbols-outlined text-3xl font-black">chat</span>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-xl font-extrabold text-on-surface uppercase tracking-tight">
            Redirecting to WhatsApp
          </h3>
          <p className="font-sans text-xs text-on-surface-variant max-w-sm leading-relaxed">
            Thank you, <span className="font-semibold text-on-surface">{formData.name}</span>. Your enquiry details have been pre-filled for our team at{" "}
            <span className="font-bold text-primary font-mono">{CONTACT_PHONE}</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Open WhatsApp Chat</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                projectType: "New Store Build",
                details: "",
              });
            }}
            className="text-xs font-sans text-on-surface-variant hover:text-on-surface underline py-2 cursor-pointer"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-left w-full"
    >
      {/* Row 1: Full Name and Business Email Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Full Name"
          className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
        />
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Business Email Address"
          className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
        />
      </div>

      {/* Row 2: Phone Number / WhatsApp */}
      <input
        type="tel"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Phone Number / WhatsApp"
        className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
      />

      {/* Row 3: Project Type select dropdown */}
      <div className="relative">
        <select
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full bg-[#f2f4f2]/70 dark:bg-white/5 border-0 rounded-2xl px-5 py-4 font-sans text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer text-on-surface-variant/70"
        >
          <option value="New Store Build">New Store Build</option>
          <option value="Theme Customization">Theme Customization</option>
          <option value="Migration">Migration</option>
          <option value="Performance Optimization">Performance Optimization</option>
        </select>
        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 pointer-events-none text-lg">
          keyboard_arrow_down
        </span>
      </div>

      {/* Row 4: Project Details / Budget Range */}
      <textarea
        required
        rows={4}
        value={formData.details}
        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
        placeholder="Project Details / Budget Range"
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
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#b3e620] hover:bg-[#9ccc1c] disabled:bg-[#b3e620]/60 text-on-surface px-8 py-4 rounded-full font-sans text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 duration-150 select-none w-fit"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-on-surface border-t-transparent rounded-full animate-spin"></span>
              Connecting to WhatsApp...
            </>
          ) : (
            <>
              <span>Get Started via WhatsApp</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </>
          )}
        </button>
        <span className="font-sans text-[11px] text-on-surface-variant/70">
          Direct WhatsApp routing: <strong className="font-mono text-primary font-semibold">{CONTACT_PHONE}</strong>
        </span>
      </div>
    </form>
  );
}
