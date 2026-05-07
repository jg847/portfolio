import type { ProjectContent } from "@/content/projects";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { LinkButton } from "@/components/ui/LinkButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionLabel } from "@/components/ui/SectionLabel";

type FeaturedProjectProps = {
  project: ProjectContent;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section
      id={project.homeAnchorId}
      className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-6 lg:py-24"
    >
      <div className="lg:col-span-7">
        <ImageFrame>
          {project.image ? (
            <img
              src={project.image}
              alt={project.heroAlt}
              className="aspect-[16/10] w-full rounded-md object-cover"
              />
            ) : (
            <div className="flex aspect-[16/10] flex-col justify-between gap-6">
            <SectionLabel>featured proof</SectionLabel>
            <div className="space-y-3">
            <p className="type-h3 max-w-[18ch] text-ink">{project.heroAlt}</p>
              <p className="type-mono text-muted">
          Final screenshot drops into this frame in Phase 04.
        </p>
      </div>
    </div>
  )}
</ImageFrame>
      </div>
      <div className="space-y-8 lg:col-span-4 lg:col-start-9">
        <div className="space-y-3">
          <SectionLabel>{project.statusLabel}</SectionLabel>
          <h2 className="type-h2 max-w-[12ch]">{project.title}</h2>
          <p className="type-body text-ink">{project.summary}</p>
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
          {project.quote ? (
            <QuoteBlock>
              <p className="type-body text-ink">{project.quote.text}</p>
              <p className="type-mono mt-3 text-muted">{project.quote.attribution}</p>
            </QuoteBlock>
          ) : null}
        </div>
      </div>
    </section>
  );
}