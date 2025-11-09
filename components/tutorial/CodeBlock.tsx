"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-3 sm:my-4">
      {/* Language badge and copy button */}
      <div className="flex items-center justify-between mb-2">
        <Badge variant="secondary" className="text-xs">
          {language}
        </Badge>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity text-xs sm:text-sm"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </Button>
      </div>

      {/* Code block */}
      <div className="glass-card rounded-lg overflow-x-auto w-full max-w-full min-w-0">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            fontSize: "0.75rem",
            maxWidth: "100%",
            width: "100%",
          }}
          wrapLongLines={true}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
