import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[680px] flex-col gap-6 px-6 py-16 md:px-8 lg:py-24">
      <SectionLabel>404</SectionLabel>
      <h1 className="type-h2">That page is not here.</h1>
      <p className="type-body text-muted">
        The route is missing or the page has not landed yet. The useful path is the work.
      </p>
      <TextLink href="/#work">Home</TextLink>
    </div>
  );
}