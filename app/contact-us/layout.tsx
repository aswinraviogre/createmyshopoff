import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Shopify Experts | Create My Shop",
  description:
    "Ready to scale your e-commerce store? Get in touch with the Shopify development experts at Create My Shop today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
