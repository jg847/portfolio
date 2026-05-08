import Image from "next/image";
import type { SiteData } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";
import { withBasePath } from "@/lib/utils";

type HeroBandProps = {
  site: SiteData;
};

export function HeroBand({ site }: HeroBandProps) {
  const workSectionHref = "#project-newark-housing";
  const emailHref = `mailto:${site.email}`;

  return (
    <section id="work" className="pb-16 lg:pb-24">
      <div className="max-w-[1040px] space-y-8 lg:space-y-10">
        <p className="eyebrow">AI product engineer</p>
        <h1 className="max-w-[10ch] text-[clamp(3.4rem,8.8vw,6.2rem)] leading-[0.93] font-semibold tracking-[-0.05em] text-ink">
          {site.roleStatement}
        </h1>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-12">
          <div className="space-y-8">
            <p className="max-w-[52rem] text-[1.25rem] leading-[1.7] text-body sm:text-[1.45rem] sm:leading-[1.62]">
              {site.aboutParagraph}
            </p>

            <nav
              aria-label="Project quick links"
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              {site.quickLinks.map((link, index) => (
                <div key={link.href} className="flex items-center gap-3">
                  <TextLink href={link.href} mono download={link.download}>
                    {link.label}
                  </TextLink>
                  {index < site.quickLinks.length - 1 ? (
                    <span aria-hidden="true" className="type-mono text-muted">
                      ·
                    </span>
                  ) : null}
                </div>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a href={workSectionHref} className="btn-primary">
                See the work
              </a>
              <a href={emailHref} className="btn-secondary">
                Email me
              </a>
              <p className="type-mono text-muted">{site.displayName} · Newark, NJ</p>
            </div>
          </div>

          <aside
            className="card-lg overflow-hidden p-5 lg:sticky lg:top-24"
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 248, 241, 0.98) 0%, rgba(247, 234, 220, 0.9) 52%, rgba(240, 223, 205, 0.9) 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 20px 60px rgba(110, 73, 47, 0.1)",
            }}
          >
            <Image
              src={withBasePath("/aiheadshot.png")}
              alt={`Portrait of ${site.displayName}`}
              width={752}
              height={940}
              sizes="(min-width: 1024px) 300px, 50vw"
              className="aspect-[4/5] w-full rounded-[24px] object-cover object-center"
              priority
            />
            <div className="mt-4 space-y-2">
              <p className="eyebrow-dark">{site.displayName}</p>
              <p className="type-body text-body">{site.currentStatus}</p>
              <p className="type-mono text-muted">TypeScript, Next.js, Python</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}