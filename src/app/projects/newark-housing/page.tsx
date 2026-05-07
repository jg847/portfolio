import { ProjectPageScaffold } from "@/components/projects/ProjectPageScaffold";
import { buildProjectMetadata, getProject } from "@/lib/content";

const slug = "newark-housing" as const;

export const metadata = buildProjectMetadata(slug);

export default function NewarkHousingPage() {
  return <ProjectPageScaffold project={getProject(slug)} />;
}