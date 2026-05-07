import { ProjectPageScaffold } from "@/components/projects/ProjectPageScaffold";
import { buildProjectMetadata, getProject } from "@/lib/content";

const slug = "voice-consultant" as const;

export const metadata = buildProjectMetadata(slug);

export default function VoiceConsultantPage() {
  return <ProjectPageScaffold project={getProject(slug)} />;
}