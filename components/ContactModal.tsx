"use client";

import { useState } from "react";

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
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-forest-deep text-white py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                  Sending Details...
                </>
              ) : (
                <>
                  Submit Inquiry
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-forest-light text-primary rounded-full flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-3xl font-bold">check</span>
            </div>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-on-surface">
                Thank you, {formData.name}!
              </h2>
              <p className="text-sm text-secondary mt-2 max-w-sm mx-auto">
                We've received your request. A partner will review your details and reach out within 2 hours.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="bg-primary hover:bg-forest-deep text-white px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Back to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
