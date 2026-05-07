import type { ReactNode } from "react";

type MetadataListProps = {
  items: Array<{
    label: string;
    value: ReactNode;
  }>;
};

export function MetadataList({ items }: MetadataListProps) {
  return (
    <dl className="space-y-3 border-t border-hairline pt-4">
      {items.map((item) => (
        <div key={item.label} className="grid gap-1 md:grid-cols-[7rem_1fr] md:gap-4">
          <dt className="type-mono text-muted">{item.label}</dt>
          <dd className="type-small text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}