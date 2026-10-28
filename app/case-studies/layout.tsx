import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Shopify Case Studies | Create My Shop",
  description:
    "Explore our portfolio of high-performing Shopify stores built for leading fashion, jewellery, wellness, and lifestyle brands across India and the globe.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
