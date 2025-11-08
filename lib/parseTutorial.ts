import fs from "fs";
import path from "path";

export interface TutorialSection {
  id: string;
  title: string;
  content: string;
  partNumber: number;
}

export function parseTutorial(): TutorialSection[] {
  const filePath = path.join(process.cwd(), "content", "tutorial.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Split content by ## PART headings
  const lines = fileContent.split('\n');
  const sections: TutorialSection[] = [];
  let currentSection: { partNumber: number; title: string; content: string[] } | null = null;

  for (const line of lines) {
    const partMatch = line.match(/^## PART (\d+):\s*(.+)$/);

    if (partMatch) {
      // Save previous section if exists
      if (currentSection) {
        sections.push({
          id: `part-${currentSection.partNumber}`,
          title: currentSection.title,
          content: currentSection.content.join('\n'),
          partNumber: currentSection.partNumber,
        });
      }

      // Start new section
      currentSection = {
        partNumber: parseInt(partMatch[1], 10),
        title: partMatch[2].trim(),
        content: [line],
      };
    } else if (currentSection) {
      // Add line to current section
      currentSection.content.push(line);
    }
  }

  // Don't forget the last section
  if (currentSection) {
    sections.push({
      id: `part-${currentSection.partNumber}`,
      title: currentSection.title,
      content: currentSection.content.join('\n'),
      partNumber: currentSection.partNumber,
    });
  }

  return sections.sort((a, b) => a.partNumber - b.partNumber);
}
