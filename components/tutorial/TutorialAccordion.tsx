"use client";

import { useRef, useEffect, useState } from "react";
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
  const [expandedExamples, setExpandedExamples] = useState<Set<number>>(new Set());
  const [expandedLearnMore, setExpandedLearnMore] = useState<Set<string>>(new Set());

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

    // Reset expanded examples when switching away from Part 17
    if (activeSection !== 'part-17') {
      setExpandedExamples(new Set());
    }
    // Reset expanded Learn More sections when switching sections
    setExpandedLearnMore(new Set());
  }, [activeSection]);

  // Helper function to convert markdown to HTML with consistent formatting
  const formatMarkdown = (text: string): string => {
    return text
      // Convert markdown headers
      .replace(/^### (.+)$/gm, "<h3 class='text-xl font-bold text-slate-100 mt-4 mb-2'>$1</h3>")
      .replace(/^#### (.+)$/gm, "<h4 class='text-lg font-bold text-slate-200 mt-3 mb-1.5'>$1</h4>")
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
      // Handle line breaks - reduce double line breaks
      .replace(/\n\n/g, "<br />")
      .replace(/\n/g, " ");
  };

  const toggleExample = (exampleNumber: number) => {
    setExpandedExamples(prev => {
      const newSet = new Set(prev);
      if (newSet.has(exampleNumber)) {
        newSet.delete(exampleNumber);
      } else {
        newSet.add(exampleNumber);
      }
      return newSet;
    });
  };

  const toggleLearnMore = (identifier: string) => {
    setExpandedLearnMore(prev => {
      const newSet = new Set(prev);
      if (newSet.has(identifier)) {
        newSet.delete(identifier);
      } else {
        newSet.add(identifier);
      }
      return newSet;
    });
  };

  const renderContent = (content: string, isActive: boolean, sectionId: string) => {
    // Remove the first ## header (PART X: title) since it's already in the accordion trigger
    const contentWithoutTitle = content.replace(/^##\s+PART\s+\d+:.*?\n+/i, '');

    // For Part 17, handle expandable examples
    const isPart17 = sectionId === 'part-17';

    if (isPart17) {
      // Special handling for Part 17 with collapsible examples
      return renderPart17Content(contentWithoutTitle, isActive);
    }

    // Process Learn More sections throughout the content
    return renderContentWithLearnMore(contentWithoutTitle, isActive, sectionId);
  };

  const renderContentWithLearnMore = (content: string, isActive: boolean, sectionId: string) => {
    const parts = [];

    // Find all Learn More sections and their positions
    const learnMoreRegex = /^#### 💡 Learn More: (.+?)$\n([\s\S]*?)(?=^### |\Z)/gm;
    let lastIndex = 0;
    let learnMoreIndex = 0;

    // Find all matches first to know their positions
    const matches = Array.from(content.matchAll(learnMoreRegex));

    // Process content, inserting Learn More sections at the right positions
    matches.forEach((match, idx) => {
      const matchStart = match.index || 0;

      // Add content before this Learn More section
      if (matchStart > lastIndex) {
        const beforeContent = content.substring(lastIndex, matchStart);
        parts.push(...processTextAndCodeBlocks(beforeContent, isActive, `before-lm-${idx}`));
      }

      // Add the Learn More collapsible section
      const learnMoreTitle = match[1];
      const learnMoreContent = match[2];
      const identifier = `${sectionId}-lm-${learnMoreIndex++}`;
      const isExpanded = expandedLearnMore.has(identifier);

      parts.push(
        <div key={`learn-more-${identifier}`} className="mb-3">
          {/* Toggle button with Learn More title */}
          <button
            onClick={() => toggleLearnMore(identifier)}
            className="w-full text-left px-4 py-2.5 bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-500/30 rounded-lg transition-all duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-bold text-base group-hover:scale-110 transition-transform">
                {isExpanded ? '▼' : '▶'}
              </span>
              <span className="text-base font-semibold text-slate-100">
                💡 Learn More: {learnMoreTitle}
              </span>
            </div>
          </button>

          {/* Collapsible content */}
          {isExpanded && isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 pl-3 border-l-2 border-cyan-500/30"
            >
              {processTextAndCodeBlocks(learnMoreContent, isActive, identifier)}
            </motion.div>
          )}
        </div>
      );

      lastIndex = matchStart + match[0].length;
    });

    // Add any remaining content after the last Learn More section
    if (lastIndex < content.length) {
      const remainingContent = content.substring(lastIndex);
      parts.push(...processTextAndCodeBlocks(remainingContent, isActive, 'after-lm'));
    }

    return parts;
  };

  const processTextAndCodeBlocks = (content: string, isActive: boolean, keyPrefix: string) => {
    const parts = [];
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        const text = content.substring(lastIndex, match.index);
        parts.push(
          <div
            key={`${keyPrefix}-text-${lastIndex}`}
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
          <CodeBlock key={`${keyPrefix}-code-${match.index}`} code={code} language={language} />
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      const text = content.substring(lastIndex);
      parts.push(
        <div
          key={`${keyPrefix}-text-${lastIndex}`}
          className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: formatMarkdown(text),
          }}
        />
      );
    }

    return parts;
  };

  const renderPart17Content = (content: string, isActive: boolean) => {
    const parts = [];

    // Split content by #### Example headers
    const exampleSplitRegex = /^#### (Example \d+: .+)$/gm;
    const sections = content.split(exampleSplitRegex);

    // First section is everything before the first example - process code blocks here too
    if (sections[0]) {
      const introContent = sections[0];
      const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
      const introParts = [];
      let lastIndex = 0;
      let match;

      while ((match = codeBlockRegex.exec(introContent)) !== null) {
        // Add text before code block
        if (match.index > lastIndex) {
          const text = introContent.substring(lastIndex, match.index);
          introParts.push(
            <div
              key={`intro-text-${lastIndex}`}
              className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: formatMarkdown(text),
              }}
            />
          );
        }

        // Add code block
        const language = match[1] || "bash";
        const code = match[2].trim();
        if (isActive) {
          introParts.push(
            <CodeBlock key={`intro-code-${match.index}`} code={code} language={language} />
          );
        }

        lastIndex = match.index + match[0].length;
      }

      // Add remaining text after last code block
      if (lastIndex < introContent.length) {
        const text = introContent.substring(lastIndex);
        introParts.push(
          <div
            key={`intro-text-${lastIndex}`}
            className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatMarkdown(text),
            }}
          />
        );
      }

      parts.push(...introParts);
    }

    // Process each example (odd indices are titles, even indices are content)
    for (let i = 1; i < sections.length; i += 2) {
      const exampleTitle = sections[i];
      const exampleContent = sections[i + 1] || '';

      // Extract example number
      const exampleNumMatch = exampleTitle.match(/Example (\d+):/);
      const exampleNum = exampleNumMatch ? parseInt(exampleNumMatch[1]) : 0;

      const isExpanded = expandedExamples.has(exampleNum);

      // Extract code block from example content
      const codeBlockMatch = exampleContent.match(/```(\w+)?\n([\s\S]*?)```/);
      const language = codeBlockMatch?.[1] || "bash";
      const code = codeBlockMatch?.[2]?.trim() || '';

      // Get text before and after code block
      const beforeCode = codeBlockMatch ? exampleContent.substring(0, codeBlockMatch.index) : exampleContent;
      const afterCode = codeBlockMatch
        ? exampleContent.substring((codeBlockMatch.index || 0) + codeBlockMatch[0].length)
        : '';

      parts.push(
        <div key={`example-${exampleNum}`} className="mb-3">
          {/* Toggle button with example title */}
          <button
            onClick={() => toggleExample(exampleNum)}
            className="w-full text-left px-4 py-2.5 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/30 rounded-lg transition-all duration-200 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <span className="text-purple-400 font-bold text-base group-hover:scale-110 transition-transform">
                {isExpanded ? '▼' : '▶'}
              </span>
              <span className="text-base font-semibold text-slate-100">{exampleTitle}</span>
            </div>
          </button>

          {/* Collapsible content */}
          {isExpanded && isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 pl-3 border-l-2 border-purple-500/30"
            >
              {beforeCode && (
                <div
                  className="prose prose-invert prose-slate max-w-none text-slate-300 leading-snug mb-2"
                  dangerouslySetInnerHTML={{
                    __html: formatMarkdown(beforeCode),
                  }}
                />
              )}

              {code && <CodeBlock code={code} language={language} />}

              {afterCode && (
                <div
                  className="prose prose-invert prose-slate max-w-none text-slate-300 leading-snug mt-2"
                  dangerouslySetInnerHTML={{
                    __html: formatMarkdown(afterCode),
                  }}
                />
              )}
            </motion.div>
          )}
        </div>
      );
    }

    return parts;
  };

  return (
    <div className="space-y-3">
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
        className="space-y-3"
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
              <AccordionContent className="px-6 py-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  {renderContent(section.content, activeSection === section.id, section.id)}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
