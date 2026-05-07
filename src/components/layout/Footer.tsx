"use client";

import { usePathname } from "next/navigation";
import { TextLink } from "@/components/ui/TextLink";
import { getNextProject, siteData } from "@/lib/content";

export function Footer() {
  const pathname = usePathname();
  const nextProject = getNextProject(pathname);

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-6 py-8 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="type-small text-ink">{siteData.displayName}</span>
          <span className="type-mono text-muted">{new Date().getFullYear()}</span>
          <TextLink href={siteData.footerSourceUrl} mono showPlaceholderValue>
            Source on GitHub
          </TextLink>
        </div>
        {nextProject ? (
          <TextLink href={nextProject.route} mono>
            Next: {nextProject.title}
          </TextLink>
        ) : null}
      </div>
    </footer>
  );
}