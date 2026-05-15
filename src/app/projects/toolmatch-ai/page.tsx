import { ProjectPageScaffold } from "@/components/projects/ProjectPageScaffold";
import { buildProjectMetadata, getProject } from "@/lib/content";

const slug = "toolmatch-ai" as const;

export const metadata = buildProjectMetadata(slug);

export default function ToolmatchAiPage() {
  return <ProjectPageScaffold project={getProject(slug)} />;
}