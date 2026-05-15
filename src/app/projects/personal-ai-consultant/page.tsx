import { ProjectPageScaffold } from "@/components/projects/ProjectPageScaffold";
import { buildProjectMetadata, getProject } from "@/lib/content";

const slug = "personal-ai-consultant" as const;

export const metadata = buildProjectMetadata(slug);

export default function PersonalAiConsultantPage() {
  return <ProjectPageScaffold project={getProject(slug)} />;
}