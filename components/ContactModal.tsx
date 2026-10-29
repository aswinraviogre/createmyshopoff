"use client";

import { useState } from "react";
import {
  CONTACT_PHONE,
  getWhatsAppUrl,
  buildModalInquiryMessage,
} from "@/data/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    details: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = buildModalInquiryMessage(formData);
    const waUrl = getWhatsAppUrl(msg);

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    }, 400);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", website: "", details: "" });
    setFormSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-surface-dark border border-primary/10 dark:border-white/10 rounded-3xl w-full max-w-[550px] overflow-hidden shadow-2xl p-8 md:p-10 z-10 transition-transform duration-300 scale-100 animate-[fadeIn_0.2s_ease-out]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-surface-container transition-colors text-on-surface cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest-light text-primary rounded-full font-mono text-[10px] uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-[12px]">forum</span>
                Let's Partner Up
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
                Tell Us About Your Project
              </h2>
              <p className="text-sm text-secondary mt-2">
                Have a migration, build, or growth puzzle? We are ready to help you solve it carefully.
              </p>

              {/* Instant WhatsApp Quick Button */}
              <a
                href={getWhatsAppUrl("Hello Create My Shop Team! I would like to quickly chat about an e-commerce project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] dark:text-[#25D366] font-sans text-xs font-bold transition-all mt-4 select-none"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Or Chat Directly on WhatsApp: {CONTACT_PHONE}</span>
              </a>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  What is your name?
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 px-3 text-sm transition-colors text-on-surface"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  Your email address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@company.com"
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 px-3 text-sm transition-colors text-on-surface"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  Current website (optional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="e.g. https://yoursite.com"
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 px-3 text-sm transition-colors text-on-surface"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us what you'd like to build, migrate or optimize..."
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 px-3 text-sm transition-colors text-on-surface resize-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                    Connecting to WhatsApp...
                  </>
                ) : (
                  <>
                    Submit Inquiry via WhatsApp
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-on-surface-variant/70 font-sans">
                Opens directly in WhatsApp with <strong>{CONTACT_PHONE}</strong>
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-3xl font-bold">chat</span>
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-extrabold text-on-surface">
                Thank you, {formData.name}!
              </h2>
              <p className="text-sm text-secondary max-w-sm mx-auto leading-relaxed">
                Your inquiry has been formatted and redirected to our WhatsApp team at{" "}
                <strong className="font-mono text-primary">{CONTACT_PHONE}</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl(buildModalInquiryMessage(formData))}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>Open WhatsApp Chat</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <button
                onClick={handleReset}
                className="bg-surface-container hover:bg-surface-container-high text-on-surface px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
