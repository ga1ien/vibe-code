"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="h-6 w-6 text-purple-400" />
              </motion.div>
              <span className="text-lg font-semibold text-slate-200">
                Learn to Vibe Code
              </span>
            </Link>
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

          {/* Navigation Links */}
          <div className="flex items-center">
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
      </div>
    </motion.nav>
  );
}
