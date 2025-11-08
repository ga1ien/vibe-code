"use client";

import { Zap, Sparkles, Rocket } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Zero Experience Required",
    description:
      "Start coding without any prior knowledge. Our step-by-step guide walks you through every single detail, from installing tools to deploying your app.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Development",
    description:
      "Work with Claude AI as your coding partner. Describe what you want to build, and AI writes the code for you - it's like having an expert developer by your side.",
  },
  {
    icon: Rocket,
    title: "Deploy in Minutes",
    description:
      "Go from idea to live website in under an hour. Learn to build with modern tools like Next.js, Supabase, and Vercel - the same stack used by top companies.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Why Vibe Coding?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The fastest way to turn your ideas into real, working applications
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
