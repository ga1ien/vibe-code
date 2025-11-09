"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const examples = [
  {
    prompt: "Create a recipe organizer where I can save my family's favorite meals",
    app: "Recipe Keeper"
  },
  {
    prompt: "Build a birthday tracker so I never forget my friends' birthdays again",
    app: "Birthday Reminder"
  },
  {
    prompt: "Make a workout tracker to log my gym sessions and track progress",
    app: "Fitness Logger"
  },
  {
    prompt: "Design a budget planner to help me manage my monthly expenses",
    app: "Budget Buddy"
  },
  {
    prompt: "Build a reading list where I can track books I want to read",
    app: "Reading Tracker"
  }
];

export function Hero() {
  const [currentExample, setCurrentExample] = useState(0);
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [displayedApp, setDisplayedApp] = useState("");
  const [isTypingPrompt, setIsTypingPrompt] = useState(true);
  const [isTypingApp, setIsTypingApp] = useState(false);

  // Type out the prompt
  useEffect(() => {
    if (!isTypingPrompt) return;

    const targetText = examples[currentExample].prompt;
    if (displayedPrompt.length < targetText.length) {
      const timeout = setTimeout(() => {
        setDisplayedPrompt(targetText.slice(0, displayedPrompt.length + 1));
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Finished typing prompt, wait then start typing app
      const timeout = setTimeout(() => {
        setIsTypingPrompt(false);
        setIsTypingApp(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayedPrompt, currentExample, isTypingPrompt]);

  // Type out the app name
  useEffect(() => {
    if (!isTypingApp) return;

    const targetText = examples[currentExample].app;
    if (displayedApp.length < targetText.length) {
      const timeout = setTimeout(() => {
        setDisplayedApp(targetText.slice(0, displayedApp.length + 1));
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Finished typing, wait then move to next example
      const timeout = setTimeout(() => {
        setIsTypingApp(false);
        setDisplayedPrompt("");
        setDisplayedApp("");
        setCurrentExample((prev) => (prev + 1) % examples.length);
        setIsTypingPrompt(true);
      }, 3000); // Pause before next example
      return () => clearTimeout(timeout);
    }
  }, [displayedApp, currentExample, isTypingApp]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center -mt-[66px] sm:mt-0 lg:-mt-[200px]">
        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Mobile Layout - "by Just Describing It" smaller and on one line */}
          <span className="sm:hidden bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Build Anything<br />
            <span className="text-3xl -mt-[11px] inline-block">by Just Describing It</span>
          </span>
          {/* Desktop Layout - Original */}
          <span className="hidden sm:inline bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Build Anything by<br />Just Describing It
          </span>
        </motion.h1>

        {/* Subheading with Typewriter Effect */}
        <motion.p
          className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          No coding experience? No problem. With{" "}
          <span className="text-purple-400 font-semibold">Vibe Coding</span>, you tell AI<br />
          what you want in plain English, and it writes the code for you.
        </motion.p>

        {/* Typing Example showcase */}
        <motion.div
          className="glass-card p-6 rounded-2xl mb-12 max-w-2xl mx-auto text-left relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-sm text-slate-500 mb-2">You say:</div>
          <div className="text-lg text-slate-200 mb-4 italic min-h-[3.5rem] flex items-start">
            <span>"{displayedPrompt}</span>
            {isTypingPrompt && <span className="inline-block w-0.5 h-5 bg-purple-400 ml-1 animate-pulse"></span>}
            {!isTypingPrompt && <span>"</span>}
          </div>
          <div className="text-sm text-slate-500 mb-2">AI builds it:</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <div className="text-purple-400 font-mono text-sm flex items-center">
              <span>Creating {displayedApp}</span>
              {isTypingApp && <span className="inline-block w-0.5 h-4 bg-purple-400 ml-1 animate-pulse"></span>}
              {displayedApp && !isTypingApp && <span>...</span>}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex flex-col items-center -mt-[22px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="text-lg text-slate-300 mb-6">
            <span className="text-cyan-400 font-semibold">Build websites, apps, and tools, today</span>
          </p>
          <div className="flex flex-row gap-3 sm:gap-4 items-center">
            <a href="https://join.slack.com/t/sentigen/shared_invite/zt-3ej3q69om-~acz4A639DNiq_LeYcf_Ag" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-[150px] sm:w-[220px] bg-gradient-to-r from-blue-900 to-purple-900 hover:from-blue-800 hover:to-purple-800 text-white px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-xl shadow-lg shadow-blue-900/50 transition-all"
                >
                  <span className="hidden sm:inline">Join the Community</span>
                  <span className="sm:hidden">Join Community</span>
                </Button>
              </motion.div>
            </a>
            <Link href="/tutorial#tutorial-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-[150px] sm:w-[220px] bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-xl shadow-lg shadow-purple-500/50"
                >
                  <span className="hidden sm:inline">Get Started Now</span>
                  <span className="sm:hidden">Get Started</span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-[calc(3rem+33px)] left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ChevronDown className="h-8 w-8 text-purple-400/60" />
        </motion.div>
      </div>
    </section>
  );
}
