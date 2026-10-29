export interface SoftwareProduct {
  id: "postbus" | "vachat";
  name: string;
  badge: string;
  category: string;
  tagline: string;
  summary: string;
  description: string;
  url: string;
  displayUrl: string;
  logo: string;
  logoDark?: string;
  dashboardImage: string;
  accentColor: string;
  accentBg: string;
  stats: {
    value: string;
    label: string;
  }[];
  features: {
    title: string;
    desc: string;
    icon: string;
  }[];
  integrations: string[];
  builtByNote: string;
}

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    id: "postbus",
    name: "PostBus",
    badge: "India Post Shipping SaaS",
    category: "Logistics & Shipping Automation",
    tagline: "India Post Shipping Software for Ecommerce",
    summary:
      "Connect your existing India Post Customer ID to manage orders, print shipping labels, auto-generate manifests, and track consignments from one unified dashboard.",
    description:
      "Engineered by Create My Shop for ecommerce merchants who ship with India Post. PostBus eliminates the manual portal grind by syncing Shopify & custom orders, auto-allocating CEPT barcodes, generating bulk thermal labels, and providing live AWB tracking.",
    url: "https://www.postbus.in/",
    displayUrl: "postbus.in",
    logo: "/software/postbus-logo.webp",
    dashboardImage: "/software/postbus-dashboard.webp",
    accentColor: "#E11D48",
    accentBg: "rgba(225, 29, 72, 0.08)",
    stats: [
      { value: "1-Click", label: "CEPT Booking" },
      { value: "100%", label: "Shopify Sync" },
      { value: "Sub-1s", label: "Label Generation" },
      { value: "Live", label: "AWB Tracking" },
    ],
    features: [
      {
        title: "India Post Customer ID Integration",
        desc: "Direct integration using your existing CEPT credentials, barcode series, and pickup office.",
        icon: "local_shipping",
      },
      {
        title: "Shopify & Manual Order Sync",
        desc: "Seamless order flow from your Shopify store, plus manual shipment entry for phone or WhatsApp sales.",
        icon: "sync_alt",
      },
      {
        title: "Bulk Shipping Labels & Barcodes",
        desc: "Generate compliant Speed Post labels, barcodes, and dispatch manifests with zero manual re-entry.",
        icon: "receipt_long",
      },
      {
        title: "Consolidated AWB Tracking",
        desc: "Real-time India Post tracking status updates without jumping between separate carrier portals.",
        icon: "track_changes",
      },
    ],
    integrations: ["Shopify", "India Post Speed Post", "CEPT", "Manual Orders", "WooCommerce (Upcoming)"],
    builtByNote: "Proudly built, maintained, and scaled by Create My Shop",
  },
  {
    id: "vachat",
    name: "VaChat",
    badge: "AI WhatsApp Marketing & CRM",
    category: "Conversational Commerce & AI CRM",
    tagline: "Turn WhatsApp Conversations into Real Shopify Sales",
    summary:
      "All-in-one WhatsApp Business CRM powered by official Meta APIs: deploy 24/7 AI sales agents, broadcast marketing campaigns, sync Shopify catalogs, and take in-chat payments.",
    description:
      "Engineered in-house to bridge WhatsApp and Shopify commerce. VaChat empowers high-growth D2C brands with AI agents that talk to customers in multiple languages, recommend products from live inventory, make AI voice calls, and close sales on autopilot.",
    url: "https://vachat.in/",
    displayUrl: "vachat.in",
    logo: "/software/vachat-logo.svg",
    dashboardImage: "/software/vachat-dashboard.png",
    accentColor: "#03cf65",
    accentBg: "rgba(3, 207, 101, 0.08)",
    stats: [
      { value: "98%", label: "Open Rates" },
      { value: "5X", label: "Meta Ad Conversions" },
      { value: "24/7", label: "AI Sales Agents" },
      { value: "1-Click", label: "In-Chat Payments" },
    ],
    features: [
      {
        title: "Autonomous 24/7 AI Sales Agents",
        desc: "Human-like conversational agents that answer queries, qualify buyer intent, and guide shoppers to purchase.",
        icon: "smart_toy",
      },
      {
        title: "Live Shopify Catalog Integration",
        desc: "Direct synchronization of products, variants, and real-time inventory inside WhatsApp chat windows.",
        icon: "storefront",
      },
      {
        title: "AI Voice Calling & Call Recording",
        desc: "Lifelike conversational voice calls and automated recording transcripts to elevate VIP sales closures.",
        icon: "call",
      },
      {
        title: "Zero-Friction In-Chat Payments",
        desc: "Seamless UPI and card checkout embedded directly inside WhatsApp for frictionless purchase completion.",
        icon: "credit_card",
      },
    ],
    integrations: ["Shopify", "Meta Official WABA", "WhatsApp Payments", "Razorpay / UPI", "Multi-Agent Inbox"],
    builtByNote: "Proudly built, maintained, and scaled by Create My Shop",
  },
];
