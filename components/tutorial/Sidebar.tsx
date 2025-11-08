"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TutorialSection } from "@/lib/parseTutorial";

interface SidebarProps {
  sections: TutorialSection[];
  activeSection: string;
  completedSections: Set<string>;
  onSectionClick: (id: string) => void;
}

export function Sidebar({
  sections,
  activeSection,
  completedSections,
  onSectionClick,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const progress = (completedSections.size / sections.length) * 100;

  const SidebarContent = () => (
    <>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-300">Progress</span>
          <span className="text-sm font-bold text-purple-400">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isCompleted = completedSections.has(section.id);

          return (
            <motion.button
              key={section.id}
              onClick={() => {
                onSectionClick(section.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-start gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                isActive
                  ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30"
                  : "hover:bg-white/5"
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mt-0.5">
                {isCompleted ? (
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                ) : (
                  <Circle className="h-5 w-5 text-slate-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="text-xs text-slate-500 mb-1">
                  Part {section.partNumber}
                </div>
                <div
                  className={`text-sm font-medium ${
                    isActive ? "text-purple-300" : "text-slate-300"
                  }`}
                >
                  {section.title}
                </div>
              </div>
            </motion.button>
          );
        })}
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 lg:hidden glass-card"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile sidebar */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="w-80 h-full glass-dark p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent />
          </motion.div>
        </motion.div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-80 h-[calc(100vh-4rem)] sticky top-16 p-6 glass-dark border-r border-white/10 overflow-y-auto">
        <SidebarContent />
      </aside>
    </>
  );
}
