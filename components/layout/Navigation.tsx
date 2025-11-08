"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <div className="top-navigation fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-dark border border-white/10 rounded-full px-6 shadow-lg shadow-black/20"
      >
        <div className="flex items-center justify-between h-14 sm:h-14">
          {/* Logo */}
          <div className="flex items-center space-x-2 relative">
            <Link href="/" className="flex items-center space-x-2 group -mt-[16px] sm:mt-0">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="mt-[11px] sm:mt-0"
              >
                <Code2 className="h-6 w-6 text-purple-400 shrink-0" />
              </motion.div>
              {/* Desktop Layout */}
              <span className="hidden sm:inline text-lg font-semibold text-slate-200">
                Learn to Vibe Code
              </span>
              {/* Mobile Layout - Just the title */}
              <span className="sm:hidden text-base font-semibold text-slate-200">
                Learn to Vibe Code
              </span>
            </Link>
            {/* Desktop separator and braintied link */}
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-slate-500">|</span>
              <a
                href="https://braintied.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-slate-300 transition-colors"
              >
                powered by Braintied
              </a>
            </div>
            {/* Mobile braintied link - below the title */}
            <a
              href="https://braintied.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden text-xs text-slate-400 hover:text-slate-300 transition-colors absolute top-[8px] left-[2.5rem]"
            >
              powered by Braintied
            </a>
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <div className="hidden sm:flex items-center">
            <a
              href="https://github.com/ga1ien/vibe-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
