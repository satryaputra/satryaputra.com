import { NavItem } from "@/types/nav";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const SITE_CONFIG = {
  name: "Ratnesh",
  description:
    "I'm Ratnesh, a Full-Stack Web Developer. I love to build products.",
  url: baseUrl,
  ogImage: `${baseUrl}/images/opengraph-image.png`,
  links: {
    twitter: "https://x.com/ratneshchipre",
    github: "https://github.com/ratneshchipre",
  },
  keywords: [
    "Ratnesh",
    "Ratnesh Chipre",
    "ratnesh chipre",
    "ratnesh dev",
    "ratnesh full stack developer",
    "ratnesh dev portfolio",
    "ratnesh portfolio",
    "ratnesh developer portfolio",
    "web developer",
    "typescript",
    "react",
    "next.js",
  ],
  author: "Ratnesh",
};

export type SiteConfig = typeof SITE_CONFIG;

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Collection",
    href: "/collection",
  },
];
