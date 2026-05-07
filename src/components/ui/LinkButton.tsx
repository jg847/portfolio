import Link from "next/link";
import type { ReactNode } from "react";
import { cx, isExternalHref, isPlaceholderValue } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  showPlaceholderValue?: boolean;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  showPlaceholderValue = false,
}: LinkButtonProps) {
  const className = cx(
    "inline-flex min-h-12 items-center justify-center rounded-full border px-4 py-3 text-small font-semibold no-underline transition-colors",
    variant === "primary"
      ? "border-ink bg-ink text-bg hover:border-accent hover:bg-accent"
      : "border-hairline bg-bg text-ink hover:bg-hover",
  );

  if (isPlaceholderValue(href)) {
    return (
      <span className={cx(className, "cursor-default flex-wrap gap-2 opacity-70")}>
        <span>{children}</span>
        {showPlaceholderValue ? <span className="type-mono text-current">{href}</span> : null}
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