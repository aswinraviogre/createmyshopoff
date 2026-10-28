import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Create My Shop | Expert Shopify Development Agency",
  description:
    "Meet Create My Shop. We are a specialized team of front-end engineers and e-commerce developers building high-performance Shopify stores for global brands.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
