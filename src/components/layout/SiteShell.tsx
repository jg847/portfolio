import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return <div className="flex min-h-screen flex-col bg-bg text-ink">{children}</div>;
}