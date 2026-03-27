import { Experience } from "@/features/portfolio/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "united-tractors",
    companyName: "PT United Tractors Tbk",
    companyLogo: "/images/company-logos/united-tractors.webp",
    companyWebsite: "https://www.unitedtractors.com/en/",
    positions: [
      {
        id: "2",
        title: "Backend Engineer",
        employmentPeriod: {
          start: "Feb 2024",
        },
        employmentType: "Contract",
        description: [],
        skills: [
          "ASP.NET Core",
          "Microsoft SQL Server",
          "Docker",
          "Kubernetes",
          "Azure DevOps",
        ],
        isExpanded: true,
      },
      {
        id: "1",
        title: "Full-Stack Web Developer",
        employmentPeriod: {
          start: "Sep 2023",
          end: "Jan 2024",
        },
        employmentType: "Internship",
        description: [],
        skills: ["React", "Tanstack Query", "ASP.NET Core", "PostgreSQL"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "hologram-indonesia",
    companyName: "Hologram Indonesia",
    companyLogo: "/images/company-logos/hologram-indonesia.png",
    companyWebsite: "https://hologramindonesia.com/",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: {
          start: "Aug 2023",
          end: "Sep 2023",
        },
        employmentType: "Contract",
        description: [],
        skills: ["React", "Tailwind CSS", "Node.js"],
        isExpanded: true,
      },
    ],
  },
];
