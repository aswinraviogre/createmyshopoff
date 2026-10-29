import type { Metadata, Viewport } from "next";
import { Inter, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://createmyshop.com"),
  title: "Custom Shopify Store Development & Design Agency | Create My Shop",
  description:
    "Scale your e-commerce brand with Create My Shop. We build lightning-fast custom Shopify stores, bespoke Liquid themes, and high-performance retail experiences.",
  keywords: [
    "Shopify web development agency",
    "custom Shopify store design",
    "Shopify developers",
    "e-commerce web design",
    "Shopify Liquid experts",
    "custom Shopify themes",
    "Shopify CRO",
    "Shopify migration",
  ],
  openGraph: {
    title: "Custom Shopify Store Development & Design Agency | Create My Shop",
    description:
      "Scale your e-commerce brand with Create My Shop. We build lightning-fast custom Shopify stores, bespoke Liquid themes, and high-performance retail experiences.",
    siteName: "Create My Shop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Shopify Store Development & Design Agency | Create My Shop",
    description:
      "Scale your e-commerce brand with Create My Shop. We build lightning-fast custom Shopify stores, bespoke Liquid themes, and high-performance retail experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#fcf9f8",
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://createmyshop.com/#organization",
      name: "Create My Shop",
      url: "https://createmyshop.com",
      description:
        "High-performance Shopify development agency building custom storefronts, bespoke Liquid themes, PostBus shipping software, and VaChat AI WhatsApp automation.",
      sameAs: ["https://www.postbus.in", "https://vachat.in"],
    },
    {
      "@type": "SoftwareApplication",
      name: "PostBus",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.postbus.in",
      description:
        "India Post Speed Post & Business Parcel shipping and barcode label automation software for Shopify merchants.",
    },
    {
      "@type": "SoftwareApplication",
      name: "VaChat",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://vachat.in",
      description:
        "AI WhatsApp marketing, abandoned checkout recovery, and automated COD verification platform for Shopify stores.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

