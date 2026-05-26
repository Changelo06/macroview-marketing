import { PACKAGE_TIERS_PATH } from "./config";

export const SECTIONS = [
  { id: "hero",      label: "Home" },
  { id: "problem",   label: "Problem" },
  { id: "solution",  label: "System" },
  { id: "portfolio", label: "Portfolio" },
  { id: "results",   label: "Results" },
  { id: "why",       label: "Why MVM" },
  { id: "who",       label: "Who" },
  { id: "faq",       label: "FAQ" },
  { id: "book",      label: "Book" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
export type NavLink =
  | { kind: "section"; id: SectionId; label: string }
  | { kind: "route"; to: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { kind: "section", id: "problem",   label: "Problem" },
  { kind: "section", id: "solution",  label: "System" },
  { kind: "section", id: "portfolio", label: "Portfolio" },
  { kind: "section", id: "results",   label: "Results" },
  { kind: "section", id: "faq",       label: "FAQ" },
  { kind: "route",   to: PACKAGE_TIERS_PATH, label: "Packages" },
];

export type CtaBandVariant = "intro" | "pivot" | "portfolio" | "why" | "faq";

export const CTA_BANDS: Record<
  CtaBandVariant,
  | { headline: string; cta: string; kind: "section"; href: string }
  | { headline: string; cta: string; kind: "route"; href: string }
> = {
  intro: {
    headline: "YOUR AUDIENCE IS WATCHING.",
    cta: "Start Scaling",
    kind: "section",
    href: "#solution",
  },
  pivot: {
    headline: "WHAT WOULD 10X MORE CONTENT DO FOR YOUR BRAND?",
    cta: "See The System",
    kind: "section",
    href: "#solution",
  },
  portfolio: {
    headline: "YOUR NEXT VIRAL PIECE STARTS HERE.",
    cta: "See Package Tiers",
    kind: "route",
    href: PACKAGE_TIERS_PATH,
  },
  why: {
    headline: "THERE IS NO SECOND TAKE IN CONTENT.",
    cta: "See Why MVM",
    kind: "section",
    href: "#why",
  },
  faq: {
    headline: "STILL HAVE QUESTIONS?",
    cta: "See Package Tiers",
    kind: "route",
    href: PACKAGE_TIERS_PATH,
  },
};
