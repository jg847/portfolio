import type { ProjectWithBody } from "@/lib/content";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { LinkButton } from "@/components/ui/LinkButton";
import { MetadataList } from "@/components/ui/MetadataList";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { projectsBySlug } from "@/content/projects";

type ProjectPageScaffoldProps = {
  project: ProjectWithBody;
};

export function ProjectPageScaffold({ project }: ProjectPageScaffoldProps) {
  const Body = project.Body;
  const nextProject = projectsBySlug[project.nextSlug];

  return (
    <article>
      <section className="border-b border-hairline">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-6 py-16 md:px-8 lg:grid-cols-12 lg:gap-6 lg:py-24">
          <div className="space-y-8 lg:col-span-5 lg:pt-4">
            <SectionLabel>{project.statusLabel}</SectionLabel>
            <h1 className="type-h1 max-w-[12ch]">{project.title}</h1>
            <p className="type-body max-w-[36rem] text-muted">{project.summary}</p>
            <div className="flex flex-wrap gap-4">
              <LinkButton href={project.liveUrl} showPlaceholderValue>
                {project.caseStudyCtaLabel}
              </LinkButton>
              <TextLink href={project.sourceUrl} showPlaceholderValue>
                Source on GitHub
              </TextLink>
            </div>
            <div className="max-w-[36rem] space-y-4 border-t border-hairline pt-6">
              <SectionLabel>proof</SectionLabel>
              <p className="type-body text-ink">{project.proofLine}</p>
              {project.quote ? (
                <QuoteBlock>
                  <p className="type-body text-ink">{project.quote.text}</p>
                  <p className="type-mono mt-3 text-muted">{project.quote.attribution}</p>
                </QuoteBlock>
              ) : null}
            </div>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <ImageFrame contentClassName="flex aspect-[16/10] flex-col justify-between gap-8 p-8 md:p-10">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.heroAlt}
                  className="aspect-[16/10] w-full rounded-md object-cover"
                />
              ) : (
                <>
                  <SectionLabel>hero media</SectionLabel>
                  <div className="space-y-4">
                    <p className="type-h3 max-w-[18ch] text-ink">{project.heroAlt}</p>
                    <p className="type-mono max-w-[28rem] text-muted">
                      Final screenshot or demo media drops into this frame in Phase 04 without changing the composition.
                    </p>
                  </div>
                </>
              )}
            </ImageFrame>
            <MetadataList
              items={[
                { label: "Live", value: project.liveUrl },
                { label: "Source", value: project.sourceUrl },
                { label: "Proof", value: project.proofLine },
              ]}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[680px] px-6 py-16 md:px-8 lg:py-24">
          <div className="mdx-content">
            <Body />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto w-full max-w-[680px] px-6 py-12 md:px-8">
          <SectionLabel>next project</SectionLabel>
          <div className="mt-6 space-y-4">
            <h2 className="type-h3">{nextProject.title}</h2>
            <p className="type-body text-muted">{nextProject.summary}</p>
            <TextLink href={nextProject.route}>See the case study</TextLink>
          </div>
        </div>
      </section>
    </article>
  );
}