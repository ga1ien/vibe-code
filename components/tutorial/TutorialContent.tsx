"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TutorialAccordion } from "./TutorialAccordion";
import { TutorialSection } from "@/lib/parseTutorial";

interface TutorialContentProps {
  sections: TutorialSection[];
}

export function TutorialContent({ sections }: TutorialContentProps) {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );
  const [completedSections, setCompletedSections] = useState<Set<string>>(
    new Set()
  );

  const handleSectionComplete = (id: string) => {
    setCompletedSections((prev) => new Set(prev).add(id));
  };

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        completedSections={completedSections}
        onSectionClick={handleSectionClick}
      />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The Complete Beginner's Guide to Vibe Coding
          </h1>
          <p className="text-xl text-slate-400">
            Learn to build websites and apps with AI as your coding partner.
            Follow these steps to go from zero to deployed app.
          </p>
        </div>

        <TutorialAccordion
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onSectionComplete={handleSectionComplete}
        />
      </main>
    </div>
  );
}
