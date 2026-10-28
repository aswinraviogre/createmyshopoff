import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Insights, Logistics & Automation Blogs | Create My Shop",
  description:
    "Explore in-depth engineering breakdowns, Shopify CRO guides, India Post shipping with PostBus, and WhatsApp AI automation with VaChat.",
  keywords: [
    "Shopify blog",
    "PostBus India Post shipping",
    "VaChat WhatsApp marketing",
    "Shopify checkout optimization",
    "D2C logistics India",
    "Shopify developer insights",
  ],
  openGraph: {
    title: "E-Commerce Insights, Logistics & Automation Blogs | Create My Shop",
    description:
      "Explore in-depth engineering breakdowns, Shopify CRO guides, India Post shipping with PostBus, and WhatsApp AI automation with VaChat.",
    siteName: "Create My Shop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Insights, Logistics & Automation Blogs | Create My Shop",
    description:
      "Explore in-depth engineering breakdowns, Shopify CRO guides, India Post shipping with PostBus, and WhatsApp AI automation with VaChat.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
