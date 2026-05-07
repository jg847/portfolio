import { ProjectPageScaffold } from "@/components/projects/ProjectPageScaffold";
import { buildProjectMetadata, getProject } from "@/lib/content";

const slug = "study-guide-generator" as const;

export const metadata = buildProjectMetadata(slug);

export default function StudyGuideGeneratorPage() {
  return <ProjectPageScaffold project={getProject(slug)} />;
}