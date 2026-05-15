import type { ProjectContent } from "@/content/projects";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { withBasePath } from "@/lib/utils";

type ProjectFeatureBlockProps = {
  project: ProjectContent;
  index: number;
};

export function ProjectFeatureBlock({ project, index }: ProjectFeatureBlockProps) {
  const reverse = index % 2 === 0;
  const sectionLabel =
    project.slug === "study-guide-generator"
      ? "study guide creator - project 2"
      : project.slug === "toolmatch-ai"
        ? "toolmatch ai - project 3"
        : project.slug === "personal-ai-consultant"
          ? "personal ai consultant - midterm"
      : `project 0${index + 1}`;

  return (
    <section
      id={project.homeAnchorId}
      className="grid gap-10 border-t border-hairline py-16 lg:grid-cols-12 lg:gap-6 lg:py-24"
    >
      <div className={reverse ? "space-y-8 lg:col-span-5 lg:col-start-8" : "space-y-8 lg:col-span-5"}>
        <div className="space-y-3">
          <SectionLabel>{sectionLabel}</SectionLabel>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="type-h2">{project.title}</h2>
            {project.statusLabel === "in progress" ? (
              <span className="type-mono text-muted">in progress</span>
            ) : null}
          </div>
          <p className="type-body max-w-[30rem] text-ink">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <LinkButton href={project.liveUrl} showPlaceholderValue>
            {project.homePrimaryCtaLabel}
          </LinkButton>
          <LinkButton href={project.route} variant="secondary">
            See the case study
          </LinkButton>
        </div>
        <div className="space-y-4 border-t border-hairline pt-6">
          <p className="type-body text-ink">{project.proofLine}</p>
          <p className="type-mono text-muted">{project.sourceUrl}</p>
        </div>
      </div>
      <div className={reverse ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6 lg:col-start-7"}>
        <ImageFrame>
  {project.image ? (
    <img
      src={withBasePath(project.image)}
      alt={project.heroAlt}
      className="aspect-[16/10] w-full rounded-md object-cover"
    />
  ) : (
    <div className="flex aspect-[16/10] flex-col justify-between gap-6">
      <SectionLabel>proof frame</SectionLabel>
      <div className="space-y-3">
        <p className="type-h3 max-w-[18ch] text-ink">{project.heroAlt}</p>
        <p className="type-mono text-muted">
          This block holds the final screenshot or demo preview without changing the layout.
        </p>
      </div>
    </div>
  )}
</ImageFrame>
      </div>
    </section>
  );
}