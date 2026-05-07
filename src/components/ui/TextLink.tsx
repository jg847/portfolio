import Link from "next/link";
import type { ReactNode } from "react";
import { cx, isExternalHref, isPlaceholderValue } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  mono?: boolean;
  showPlaceholderValue?: boolean;
};

export function TextLink({
  href,
  children,
  mono = false,
  showPlaceholderValue = false,
}: TextLinkProps) {
  const className = cx(
    mono ? "type-mono" : "type-small",
    "inline-flex min-h-11 items-center text-accent-dk no-underline hover:underline",
  );

  if (isPlaceholderValue(href)) {
    return (
      <span className={cx(className, "flex-wrap gap-2 opacity-80")}>
        <span>{children}</span>
        {showPlaceholderValue ? <span className="type-mono text-muted">{href}</span> : null}
      </span>
    );
  }

  if (isExternalHref(href)) {
    const isHttp = href.startsWith("http://") || href.startsWith("https://");

    return (
      <a
        href={href}
        className={className}
        rel={isHttp ? "noreferrer" : undefined}
        target={isHttp ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}