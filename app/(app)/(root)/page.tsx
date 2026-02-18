import Experience from "@/components/portfolio/experience";
import Overview from "@/components/portfolio/overview";
import ProfileHeader from "@/components/portfolio/profile-header";
import Projects from "@/components/portfolio/projects";
import TechStack from "@/components/portfolio/tech-stack";

export default function Page() {
  return (
    <div>
      <ProfileHeader />
      <Overview />
      <Projects />
      <Experience />
      <TechStack />
    </div>
  );
}
