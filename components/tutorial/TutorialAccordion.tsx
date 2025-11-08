"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { TutorialSection } from "@/lib/parseTutorial";
import { CodeBlock } from "./CodeBlock";

interface TutorialAccordionProps {
  sections: TutorialSection[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  onSectionComplete: (id: string) => void;
}

export function TutorialAccordion({
  sections,
  activeSection,
  setActiveSection,
  onSectionComplete,
}: TutorialAccordionProps) {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip scroll on initial mount to prevent auto-scrolling to Part 1
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (activeSection && sectionRefs.current[activeSection]) {
      // Wait for accordion animation to complete before scrolling
      setTimeout(() => {
        sectionRefs.current[activeSection]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 400); // Matches accordion + content animation duration
    }
  }, [activeSection]);

  // Helper function to convert markdown to HTML with consistent formatting
  const formatMarkdown = (text: string): string => {
    return text
      // Convert markdown headers
      .replace(/^### (.+)$/gm, "<h3 class='text-xl font-bold text-slate-100 mt-6 mb-3'>$1</h3>")
      .replace(/^#### (.+)$/gm, "<h4 class='text-lg font-bold text-slate-200 mt-4 mb-2'>$1</h4>")
      // Convert bold text
      .replace(/\*\*(.+?)\*\*/g, "<strong class='text-purple-300'>$1</strong>")
      // Convert inline code
      .replace(/`(.+?)`/g, "<code class='px-1.5 py-0.5 bg-slate-700 rounded text-sm'>$1</code>")
      // Convert markdown links [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 font-medium transition-colors">$1</a>')
      // Convert plain URLs (http:// or https://)
      .replace(/(https?:\/\/[^\s<]+[^\s<.,;!?)])/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 font-medium transition-colors">$1</a>')
      // Convert bare domain names to clickable links
      .replace(/\b(claude\.ai|supabase\.com|github\.com|vercel\.com|godaddy\.com|cursor\.sh|nodejs\.org)\b(?![^<]*<\/a>)/gi, '<a href="https://$1" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 font-medium transition-colors">$1</a>')
      // Convert numbered lists
      .replace(/^\d+\. (.+)$/gm, "<li class='ml-4'>$1</li>")
      // Convert bulleted lists
      .replace(/^- (.+)$/gm, "<li class='ml-4'>$1</li>")
      // Handle line breaks
      .replace(/\n\n/g, "<br /><br />")
      .replace(/\n/g, "<br />");
  };

  const renderContent = (content: string, isActive: boolean) => {
    // Remove the first ## header (PART X: title) since it's already in the accordion trigger
    const contentWithoutTitle = content.replace(/^##\s+PART\s+\d+:.*?\n+/i, '');

    const parts = [];
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(contentWithoutTitle)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        const text = contentWithoutTitle.substring(lastIndex, match.index);
        parts.push(
          <div
            key={`text-${lastIndex}`}
            className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatMarkdown(text),
            }}
          />
        );
      }

      // Add code block - only render when section is active (lazy load on expansion)
      const language = match[1] || "bash";
      const code = match[2].trim();
      if (isActive) {
        parts.push(
          <CodeBlock key={`code-${match.index}`} code={code} language={language} />
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < contentWithoutTitle.length) {
      const text = contentWithoutTitle.substring(lastIndex);
      parts.push(
        <div
          key={`text-${lastIndex}`}
          className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: formatMarkdown(text),
          }}
        />
      );
    }

    return parts;
  };

  return (
    <div className="space-y-4">
      <Accordion
        type="single"
        collapsible
        value={activeSection}
        onValueChange={(value) => {
          setActiveSection(value);
          if (value) {
            onSectionComplete(value);
          }
        }}
        className="space-y-4"
      >
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ scrollMarginTop: "5rem" }}
          >
            <AccordionItem
              value={section.id}
              className="glass-card border-purple-500/20 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5">
                <div className="flex items-center gap-4 text-left">
                  <Badge variant="outline" className="shrink-0">
                    Part {section.partNumber}
                  </Badge>
                  <span className="text-lg font-semibold text-slate-100">
                    {section.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {renderContent(section.content, activeSection === section.id)}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
