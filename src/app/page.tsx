import { FeaturedProject } from "@/components/home/FeaturedProject";
import { HeroBand } from "@/components/home/HeroBand";
import { LookingForCard } from "@/components/home/LookingForCard";
import { PrinciplesCard } from "@/components/home/PrinciplesCard";
import { ProjectFeatureBlock } from "@/components/home/ProjectFeatureBlock";
import { TransitionStrip } from "@/components/home/TransitionStrip";
import { projects } from "@/content/projects";
import { siteData } from "@/content/site";

export default function HomePage() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <div className="page-wash">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col px-6 py-12 md:px-8 lg:py-16">
        <HeroBand site={siteData} />
        <PrinciplesCard
          principles={siteData.principles}
          testimonial={siteData.testimonial}
        />
        <TransitionStrip
          label={siteData.transitionLabel}
          line={siteData.transitionLine}
        />
        <FeaturedProject project={featuredProject} />
        {secondaryProjects.map((project, index) => (
          <ProjectFeatureBlock
            key={project.slug}
            project={project}
            index={index + 1}
          />
        ))}
        <LookingForCard
          lookingFor={siteData.lookingFor}
          skills={siteData.skills}
          email={siteData.email}
          githubUrl={siteData.githubUrl}
          linkedInUrl={siteData.linkedInUrl}
        />
      </div>
    </div>
  );
}