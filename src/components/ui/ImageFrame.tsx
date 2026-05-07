import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type ImageFrameProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function ImageFrame({
  children,
  className,
  contentClassName,
}: ImageFrameProps) {
  return (
    <div className={cx("overflow-hidden rounded-lg border border-hairline bg-bg", className)}>
      <div className={cx("p-6", contentClassName)}>{children}</div>
    </div>
  );
}