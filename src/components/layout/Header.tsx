"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/content/site";
import { TextLink } from "@/components/ui/TextLink";
import { cx } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const workHref = pathname === "/" ? "#project-newark-housing" : "/#project-newark-housing";
  const aboutHref = pathname === "/" ? "#about" : "/#about";
  const workIsActive = pathname === "/" || pathname.startsWith("/projects/");

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg">
      <div className="mx-auto flex min-h-16 w-full max-w-[1120px] items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link href="/" className="inline-flex min-h-11 items-center type-small font-semibold text-ink no-underline">
          {siteData.displayName}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 md:gap-6">
          <Link
            href={workHref}
            aria-current={workIsActive ? "page" : undefined}
            className={cx(
              "inline-flex min-h-11 items-center px-2 type-small no-underline",
              workIsActive ? "text-ink" : "text-muted hover:text-ink",
            )}
          >
            Work
          </Link>
          <Link
            href={aboutHref}
            className="inline-flex min-h-11 items-center px-2 type-small text-muted no-underline hover:text-ink"
          >
            About
          </Link>
          <TextLink href={`mailto:${siteData.email}`}>Email me</TextLink>
        </nav>
      </div>
    </header>
  );
}