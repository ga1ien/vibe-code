"use client";

import { TutorialContent } from "@/components/tutorial/TutorialContent";
import { TutorialSection } from "@/lib/parseTutorial";

interface TutorialPageClientProps {
  sections: TutorialSection[];
}

export default function TutorialPageClient({ sections }: TutorialPageClientProps) {
  return (
    <>
      {/* Hide top navigation on desktop, show on mobile */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          .top-navigation {
            display: none !important;
          }
        }
      `}</style>
      <div className="tutorial-page pt-16 lg:pt-0">
        <TutorialContent sections={sections} />
      </div>
    </>
  );
}
