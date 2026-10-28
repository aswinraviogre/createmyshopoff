import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce & Shopify Development Services | Create My Shop",
  description:
    "Explore our professional Shopify services including custom store development, Liquid theme coding, CRO optimization, and e-commerce app integrations.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
