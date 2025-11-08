import { TutorialContent } from "@/components/tutorial/TutorialContent";
import { parseTutorial } from "@/lib/parseTutorial";

export default function TutorialPage() {
  const sections = parseTutorial();

  return (
    <div className="pt-16">
      <TutorialContent sections={sections} />
    </div>
  );
}
