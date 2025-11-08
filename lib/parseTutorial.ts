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

  // Split by PART headings (e.g., "## PART 1:", "## PART 2:", etc.)
  const partRegex = /## PART (\d+): (.+?)(?=## PART \d+:|$)/gs;
  const sections: TutorialSection[] = [];

  let match;
  while ((match = partRegex.exec(fileContent)) !== null) {
    const partNumber = parseInt(match[1], 10);
    const fullContent = match[0];

    // Extract title from the first line
    const titleMatch = fullContent.match(/## PART \d+: (.+)/);
    const title = titleMatch ? titleMatch[1].trim() : `Part ${partNumber}`;

    sections.push({
      id: `part-${partNumber}`,
      title,
      content: fullContent,
      partNumber,
    });
  }

  return sections.sort((a, b) => a.partNumber - b.partNumber);
}
