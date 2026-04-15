import { NavItem } from "@/types/nav";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const SITE_CONFIG = {
  name: "Satrya Putra",
  description:
    "I'm Satrya, a Backend Engineer. I build things run smoothly behind the scenes.",
  url: baseUrl,
  ogImage: `${baseUrl}/images/opengraph-image.png`,
  links: {
    // twitter: "https://x.com/ratneshchipre",
    github: "https://github.com/satryaputra",
  },
  keywords: [
    "Satrya",
    "Satrya Eka",
    "satrya eka",
    "satrya dev",
    "satrya backend engineer",
    "satrya backend",
    "satrya putra backend",
    "backend developer",
    "backend developer portofolio",
    "satrya dev portfolio",
    "satrya portfolio",
    "satrya developer portfolio",
    "Eka",
    "Eka Satrya",
    "Eka Satrya Putra",
    "M Eka Satrya Putra",
    "Mohammad Eka Satrya Putra",
    "eka",
    "eka satrya",
    "eka satrya putra",
    "m eka satrya putra",
    "Satrya Putra",
    "satrya putra",
    "satryaputra",
    "mohammad eka satrya putra",
    "web developer",
    "typescript",
    "react",
    "next.js",
  ],
  author: "Satrya Putra",
};

export type SiteConfig = typeof SITE_CONFIG;

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Collection",
  //   href: "/collection",
  // },
];

export const X_USERNAME = "";
export const GITHUB_USERNAME = "";
export const SOURCE_CODE_GITHUB_REPO = "";
export const SOURCE_CODE_GITHUB_URL = "";

export const UTM_PARAMS = {
  utm_source: "satryaputra.com",
};
