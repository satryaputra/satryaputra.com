import { Project } from "@/features/portfolio/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "draftlogo",
    title: "draftlogo - Generate professional logos in seconds",
    logo: "/images/project-logos/draftlogo.svg",
    description:
      "draftlogo is an AI-powered logo generator built for founders and startups to create professional, modern logos in seconds without designers, long revisions, or expensive tools.",
    features: [
      "Instantly generates professional logo variations from brand name, industry, and description.",
      "Supports text-based and lettermark logo styles tailored for modern startups.",
      "Simple one-time payment system with no subscriptions or hidden commitments.",
      "Generates multiple logo variations per request for better choice and flexibility.",
      "Implements secure login using Better Auth with Google authentication support.",
      "Stores generated logos securely using cloud storage for easy access and downloads.",
      "Clean and intuitive interface optimized for fast logo generation and management.",
    ],
    link: "https://www.draftlogo.com",
    skills: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Prisma",
      "Better-Auth",
    ],
    isExpanded: true,
  },
];
