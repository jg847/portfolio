import type { SiteData } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

type AboutBandProps = {
  site: SiteData;
};

export function AboutBand({ site }: AboutBandProps) {
  return (
    <section
      id="about"
      className="mt-16 grid gap-6 lg:grid-cols-[0.66fr_0.34fr] lg:items-start"
    >
      <div className="card-lg p-7">
        <p className="eyebrow">{site.aboutEyebrow}</p>
        <p className="mt-5 type-body text-body max-w-[40rem]">{site.aboutParagraph}</p>
      </div>
      <aside className="card-lg p-7">
        <p className="eyebrow">Contact</p>
        <dl className="mt-5 space-y-4">
          <div>
            <dt className="eyebrow-dark">Email</dt>
            <dd className="mt-1">
              <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
            </dd>
          </div>
          <div>
            <dt className="eyebrow-dark">GitHub</dt>
            <dd className="mt-1">
              <TextLink href={site.githubUrl} showPlaceholderValue>
                GitHub profile
              </TextLink>
            </dd>
          </div>
          <div>
            <dt className="eyebrow-dark">LinkedIn</dt>
            <dd className="mt-1">
              <TextLink href={site.linkedInUrl} showPlaceholderValue>
                LinkedIn profile
              </TextLink>
            </dd>
          </div>
          <div>
            <dt className="eyebrow-dark">Location</dt>
            <dd className="mt-1 type-body text-body">Newark, NJ</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}