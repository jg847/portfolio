import type { LookingFor, SiteData, Skill } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";

type LookingForCardProps = {
  lookingFor: LookingFor;
  skills: Skill[];
  email: string;
  githubUrl: string;
  linkedInUrl: string;
};

export function LookingForCard({
  lookingFor,
  skills,
  email,
  githubUrl,
  linkedInUrl,
}: LookingForCardProps) {
  return (
    <section className="mt-16 space-y-6">
      <div className="card-gradient px-6 py-8 sm:px-8">
        <p className="eyebrow">{lookingFor.eyebrow}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <div>
            <h2 className="type-h2 text-ink sm:text-4xl">{lookingFor.headline}</h2>
            <p className="mt-4 max-w-2xl type-body text-body">{lookingFor.body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href={`mailto:${email}`} className="btn-primary">
              Email me
            </a>
            <TextLink href={githubUrl} showPlaceholderValue>
              GitHub
            </TextLink>
            <TextLink href={linkedInUrl} showPlaceholderValue>
              LinkedIn
            </TextLink>
          </div>
        </div>
      </div>

      <div
        className="card-lg px-6 py-8 sm:px-8"
        style={{
          background:
            "linear-gradient(145deg, rgba(255, 249, 243, 0.98) 0%, rgba(245, 234, 220, 0.92) 48%, rgba(238, 223, 204, 0.9) 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 20px 60px rgba(110, 73, 47, 0.08)",
        }}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-[18rem]">
            <p className="eyebrow">Skills</p>
            <p className="mt-2 type-body text-body">
              Capabilities already visible in the shipped work above.
            </p>
          </div>
          <div className="grid gap-4 lg:flex-1 lg:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.label}
                className="card border border-hairline-soft px-5 py-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 252, 248, 0.94) 0%, rgba(250, 241, 230, 0.88) 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255, 255, 255, 0.65), 0 12px 32px rgba(110, 73, 47, 0.05)",
                }}
              >
                <p className="type-mono text-muted">{group.label}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={`${group.label}-${skill}`}
                      className="rounded-full border border-hairline bg-[rgba(255,251,247,0.82)] px-4 py-2 text-small font-medium text-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export type { SiteData };