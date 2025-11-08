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
      <main id="tutorial-start" className="flex-1 p-6 lg:p-12 max-w-4xl mx-auto scroll-mt-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Your Journey to Building<br />Anything Starts Here
          </h1>
          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            Welcome! You're about to discover something incredible:<br />
            building real apps and websites without needing to be a programmer.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            In this step-by-step guide, you'll learn how to use AI as your personal coding partner. You describe what you want in plain English, and AI writes the code for you. By the end, you'll have a live website on the internet—built entirely by you, with AI's help.
          </p>
          <p className="text-lg text-slate-400 mt-4 leading-relaxed">
            <span className="text-purple-400 font-semibold">No coding experience needed.</span><br />
            Just follow along, one step at a time. Let's build something amazing together!
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
