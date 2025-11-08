"use client";

import { useState, useEffect } from "react";
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

  // Load completed sections from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("vibe-code-completed");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompletedSections(new Set(parsed));
      } catch (e) {
        console.error("Failed to parse saved progress", e);
      }
    }
  }, []);

  const handleSectionComplete = (id: string) => {
    setCompletedSections((prev) => {
      const newSet = new Set(prev).add(id);
      // Save to localStorage
      localStorage.setItem(
        "vibe-code-completed",
        JSON.stringify(Array.from(newSet))
      );
      return newSet;
    });
  };

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    // Mark as completed when opened
    handleSectionComplete(id);
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
            The Complete Beginner's<br />Guide to Vibe Coding
          </h1>
          <p className="text-xl text-slate-400">
            Learn to build websites and apps with AI as your coding partner.<br />
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
