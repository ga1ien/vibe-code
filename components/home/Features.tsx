"use client";

import { MessageSquare, Sparkles, Rocket, Code2, Lightbulb, Zap } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: MessageSquare,
    title: "Talk to AI, Build Instantly",
    description:
      'Type "Make me a weather app" and watch AI create it in seconds. No syntax, no errors—just describe what you want in plain English.',
  },
  {
    icon: Lightbulb,
    title: "Zero Experience Needed",
    description:
      "Never written a line of code? Perfect. Our guide walks you through setting up AI tools and building your first project in under an hour.",
  },
  {
    icon: Code2,
    title: "Real Code, Real Skills",
    description:
      "You're not just using a no-code tool—you're building actual websites and apps with React, Next.js, and modern tech that developers use daily.",
  },
  {
    icon: Sparkles,
    title: "AI Does the Heavy Lifting",
    description:
      "AI handles the complex code while you focus on ideas. Need changes? Just ask. Want it styled differently? Tell it. It's like having a developer on speed dial.",
  },
  {
    icon: Rocket,
    title: "Live in Minutes, Not Months",
    description:
      "Deploy your app to the internet instantly with one click. Share it with friends, add it to your portfolio, or start your own business—same day.",
  },
  {
    icon: Zap,
    title: "Build Anything You Can Imagine",
    description:
      "Todo apps, portfolios, e-commerce stores, social networks—if you can describe it, AI can build it. Start small or go big.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            What is Vibe Coding?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            It's the revolutionary way to build software by<br />describing what you want instead of writing code.
            <span className="block mt-2 text-slate-300">
              Think of it as <span className="text-purple-400 font-semibold">ChatGPT for building apps</span>.
            </span>
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Community Section */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-16 border border-purple-500/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              You're Not Alone on This Journey
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Our Slack community brings together<br />
              <span className="text-purple-400 font-semibold">artists</span>, <span className="text-blue-400 font-semibold">creatives</span>, <span className="text-cyan-400 font-semibold">builders</span>, <span className="text-purple-400 font-semibold">entrepreneurs</span>, the <span className="text-blue-400 font-semibold">AI-curious</span>, and <span className="text-cyan-400 font-semibold">AI-native</span> alike.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Share what you're building, learn from each other, get unstuck when things break, and celebrate wins together. From your first "Hello World" to shipping production apps, you'll find encouragement, answers, and people who get it.
            </p>
            <a href="https://join.slack.com/t/sentigen/shared_invite/zt-3ej3q69om-~acz4A639DNiq_LeYcf_Ag" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-blue-900 to-purple-900 hover:from-blue-800 hover:to-purple-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg shadow-blue-900/50 transition-all hover:scale-105 whitespace-nowrap">
                Join the Community
              </button>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-100 mb-4">
            Ready to Start Building?
          </h3>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Follow our complete step-by-step guide and build your first app in under an hour.
          </p>
          <a href="/tutorial#tutorial-start">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg shadow-purple-500/50 transition-all hover:scale-105">
              Get Started Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
