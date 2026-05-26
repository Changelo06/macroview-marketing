import { BOOKING_EMAIL } from "./config";

export interface ServicePackage {
  id: string;
  name: string;
  badge: string;
  priceLabel: string;
  timeline: string;
  summary: string;
  idealFor: string;
  highlights: Array<{ label: string; value: string }>;
  paymentLink: string;
  featured?: boolean;
}

const makeInquiryUrl = (tierName: string) =>
  `https://mail.google.com/mail/?view=cm&to=${BOOKING_EMAIL}&su=${encodeURIComponent(`Package Inquiry - ${tierName}`)}`;

export const servicePackages: ServicePackage[] = [
  {
    id: "basic",
    name: "Basic Tier",
    badge: "Starter Sprint",
    priceLabel: "PHP 8,500",
    timeline: "5 business days",
    summary: "The lightest lane for creators who mainly need reliable editing polish.",
    idealFor: "Best for solo creators testing a cleaner content workflow.",
    highlights: [
      { label: "Output", value: "4 short-form edits" },
      { label: "Planning", value: "Light polish only" },
      { label: "Delivery", value: "Standard queue" },
    ],
    paymentLink: "",
  },
  {
    id: "content",
    name: "Content Tier",
    badge: "Most Practical",
    priceLabel: "PHP 18,000",
    timeline: "3-5 business days",
    summary: "The balanced lane for creators who want consistency plus a bit more direction.",
    idealFor: "Best for creators who want weekly momentum and stronger content planning.",
    highlights: [
      { label: "Output", value: "12 shorts + 1 long cut" },
      { label: "Planning", value: "Checkpoint included" },
      { label: "Delivery", value: "Faster working lane" },
    ],
    paymentLink: "",
    featured: true,
  },
  {
    id: "premium",
    name: "Premium Tier",
    badge: "Scale Mode",
    priceLabel: "PHP 35,000",
    timeline: "48-72 hours priority lane",
    summary: "The highest-touch lane for brands that need speed, volume, and support together.",
    idealFor: "Best for personal brands turning content into a serious acquisition channel.",
    highlights: [
      { label: "Output", value: "20 shorts + 2 long edits" },
      { label: "Planning", value: "Weekly sync summary" },
      { label: "Delivery", value: "Priority turnaround" },
    ],
    paymentLink: "",
  },
];

export const packageInquiryLinks = Object.fromEntries(
  servicePackages.map((pkg) => [pkg.id, makeInquiryUrl(pkg.name)]),
) as Record<ServicePackage["id"], string>;

export const hasLivePaymentLink = (paymentLink: string) => paymentLink.trim().length > 0;
