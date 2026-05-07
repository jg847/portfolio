import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <p className="type-mono text-muted">{children}</p>;
}