"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Floating Code Icon */}
        <motion.div
          className="mb-8 inline-block"
          initial={{ opacity: 0, y: -50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{
              rotateY: [0, 360],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
              rotateZ: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="glass-card p-8 rounded-2xl inline-block">
              <Sparkles className="h-16 w-16 text-purple-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Start Vibe Coding
          </span>
        </motion.h1>

        {/* Subheading with Typewriter Effect */}
        <motion.p
          className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Build beautiful websites and apps with{" "}
          <span className="text-purple-400 font-semibold">AI as your coding partner</span>.
          Zero experience required.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/tutorial">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/50"
              >
                Begin Tutorial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="glass border-purple-500/30 hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                View on GitHub
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
