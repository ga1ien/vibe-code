"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        z: 50,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="glass-card p-8 rounded-2xl hover:border-purple-500/40 transition-all duration-300 h-full">
        {/* Icon */}
        <motion.div
          className="mb-6 inline-block"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl">
            <Icon className="h-8 w-8 text-purple-400" />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-slate-100">{title}</h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}
