import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { ContactSection } from "@/components/sections/contact-section"
import portfolioData from "@/data/portfolioData.json"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection data={portfolioData.about} contact={portfolioData.contact} />
        <EducationSection data={portfolioData.education} />
        <ExperienceSection data={portfolioData.internships} />
        <AchievementsSection data={portfolioData.achievements} />
        <ProjectsSection data={portfolioData.projects} />
        <SkillsSection data={portfolioData.skills} />
        <LeadershipSection data={portfolioData.leadership} />
        <ContactSection data={portfolioData.contact} />
      </main>
    </div>
  )
}
