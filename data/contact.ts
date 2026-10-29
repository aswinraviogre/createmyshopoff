/**
 * Centralized Contact & WhatsApp Configuration
 * Single source of truth for official company contact information.
 */

export const CONTACT_PHONE = "+91 8848772371";
export const CONTACT_PHONE_RAW = "+918848772371";
export const WHATSAPP_NUMBER = "918848772371";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = "office@createmyshop.com";

/**
 * Generate a valid WhatsApp deep link with optional pre-filled text
 */
export function getWhatsAppUrl(message?: string): string {
  if (!message || !message.trim()) {
    return WHATSAPP_BASE_URL;
  }
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Open WhatsApp in a new tab/window safely, returning the URL used
 */
export function openWhatsApp(message?: string): string {
  const url = getWhatsAppUrl(message);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return url;
}

/**
 * FitForm submission WhatsApp message builder
 */
export function buildFitFormMessage(data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
}): string {
  return [
    `*✦ New Project Enquiry | Create My Shop*`,
    ``,
    `*Full Name:* ${data.name.trim()}`,
    `*Email:* ${data.email.trim()}`,
    `*Phone / WhatsApp:* ${data.phone.trim()}`,
    `*Project Type:* ${data.projectType.trim()}`,
    `*Project Details & Budget:* ${data.details.trim()}`,
    ``,
    `_Sent via createmyshop.com contact form_`,
  ].join("\n");
}

/**
 * ContactModal submission WhatsApp message builder
 */
export function buildModalInquiryMessage(data: {
  name: string;
  email: string;
  website?: string;
  details: string;
}): string {
  return [
    `*✦ New Client Inquiry | Create My Shop*`,
    ``,
    `*Full Name:* ${data.name.trim()}`,
    `*Email:* ${data.email.trim()}`,
    `*Current Website:* ${data.website && data.website.trim() ? data.website.trim() : "None / New Store"}`,
    `*Project Details:* ${data.details.trim()}`,
    ``,
    `_Sent via createmyshop.com project inquiry modal_`,
  ].join("\n");
}

/**
 * Homepage Consultation Form WhatsApp message builder
 */
export function buildConsultationMessage(data: {
  name: string;
  email: string;
  phone?: string;
  platform?: string;
  challenge?: string;
}): string {
  return [
    `*✦ Consultation Request | Create My Shop*`,
    ``,
    `*Name:* ${data.name.trim()}`,
    `*Email:* ${data.email.trim()}`,
    `*Phone / WhatsApp:* ${data.phone && data.phone.trim() ? data.phone.trim() : "Not provided"}`,
    `*Current Platform:* ${data.platform && data.platform.trim() ? data.platform.trim() : "Shopify"}`,
    `*Primary Challenge / Goal:* ${data.challenge && data.challenge.trim() ? data.challenge.trim() : "N/A"}`,
    ``,
    `_Sent via createmyshop.com home consultation form_`,
  ].join("\n");
}

/**
 * Software product inquiry WhatsApp message builder
 */
export function buildSoftwareInquiryMessage(softwareName: string, softwareUrl?: string): string {
  return [
    `*✦ Product Inquiry — ${softwareName} | Create My Shop*`,
    ``,
    `Hello Create My Shop Team,`,
    `I would like to inquire about *${softwareName}*${softwareUrl ? ` (${softwareUrl})` : ""}.`,
    `We want to discuss integration with our Shopify store, features, and setup.`,
  ].join("\n");
}

/**
 * Default floating WhatsApp action message
 */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Create My Shop Team! I would like to make an enquiry regarding your Shopify development, Liquid themes, and e-commerce solutions.";
