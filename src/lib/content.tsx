import type { ComponentType } from "react";
import type { Metadata } from "next";
import NewarkHousingBody from "@/content/projects/newark-housing.mdx";
import StudyGuideGeneratorBody from "@/content/projects/study-guide-generator.mdx";
import VoiceConsultantBody from "@/content/projects/voice-consultant.mdx";
import { projectOrder, projects, projectsBySlug, type ProjectContent, type ProjectSlug } from "@/content/projects";
import { siteData } from "@/content/site";

const projectBodies: Record<ProjectSlug, ComponentType<Record<string, never>>> = {
  "newark-housing": NewarkHousingBody,
  "study-guide-generator": StudyGuideGeneratorBody,
  "voice-consultant": VoiceConsultantBody,
};

export type ProjectWithBody = ProjectContent & {
  Body: ComponentType<Record<string, never>>;
};

export function getProject(slug: ProjectSlug): ProjectWithBody {
  return {
    ...projectsBySlug[slug],
    Body: projectBodies[slug],
  };
}

export function getProjectFromPathname(pathname: string) {
  return projects.find((project) => project.route === pathname) ?? null;
}

export function getNextProject(pathname: string) {
  const currentProject = getProjectFromPathname(pathname);

  if (!currentProject) {
    return null;
  }

  return projectsBySlug[currentProject.nextSlug];
}

export function buildProjectMetadata(slug: ProjectSlug): Metadata {
  const project = projectsBySlug[slug];

  return {
    title: project.title,
    description: project.summary,
  };
}

export { projectOrder, projects, siteData };