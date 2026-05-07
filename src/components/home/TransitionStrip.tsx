import { SectionLabel } from "@/components/ui/SectionLabel";

type TransitionStripProps = {
  label: string;
  line: string;
};

export function TransitionStrip({ label, line }: TransitionStripProps) {
  return (
    <section className="border-y border-hairline py-6 lg:py-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-baseline lg:gap-6">
        <SectionLabel>{label}</SectionLabel>
        <p className="type-body text-ink">{line}</p>
      </div>
    </section>
  );
}