import type { ReactNode } from "react";

type QuoteBlockProps = {
  children: ReactNode;
};

export function QuoteBlock({ children }: QuoteBlockProps) {
  return <blockquote className="border-l border-hairline pl-4">{children}</blockquote>;
}