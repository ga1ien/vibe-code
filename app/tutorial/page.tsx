import TutorialPageClient from "@/components/tutorial/TutorialPageClient";
import { parseTutorial } from "@/lib/parseTutorial";

export default function TutorialPage() {
  const sections = parseTutorial();

  return <TutorialPageClient sections={sections} />;
}
