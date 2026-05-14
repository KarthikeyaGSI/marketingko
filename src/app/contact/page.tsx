import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute revenue audit with Marketing Ko. We'll identify your growth leaks and map out a custom autonomous infrastructure strategy.",
  openGraph: {
    title: "Book Free Revenue Audit | Marketing Ko",
    description: "Start with a free 30-minute audit. No obligation. No pitch. Just clarity on your systems engineering.",
    url: "https://marketingko.vercel.app/contact",
    images: ["/og-contact.png"],
  },
  twitter: {
    title: "Book Free Revenue Audit | Marketing Ko",
    description: "Initialize your growth architecture audit today.",
    images: ["/og-contact.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
