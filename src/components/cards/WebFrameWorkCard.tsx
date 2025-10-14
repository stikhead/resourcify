"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Code, Package, Zap } from "lucide-react";

const frameworks = [
  {
    id: "react",
    name: "React.js",
    icon: Code,
    bullets: [
      "Component-based architecture with reusable UI",
      "Large ecosystem & job market demand",
      "Virtual DOM for efficient updates"
    ],
    pros: "Most popular, flexible",
  },
  {
    id: "vue",
    name: "Vue.js", 
    icon: Globe,
    bullets: [
      "Progressive framework — easy to adopt incrementally",
      "Template syntax similar to HTML",
      "Great developer experience with Vue DevTools"
    ],
    pros: "Beginner-friendly, gentle learning curve",
  },
  {
    id: "angular",
    name: "Angular",
    icon: Package,
    bullets: [
      "Full framework with everything included",
      "TypeScript-first with strong typing",
      "Powerful CLI and enterprise features"
    ],
    pros: "Complete solution, enterprise-ready",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: Zap,
    bullets: [
      "React with SSR/SSG out of the box",
      "API routes for full-stack development", 
      "Automatic optimizations & great performance"
    ],
    pros: "SEO-friendly, production-ready",
  }
];

export default function WebFrameworkDiffBox() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
      <h3 className="text-lg font-semibold mb-3">Which web framework should I learn?</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Quick comparison of modern web frameworks — choose based on your project needs and experience level.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {frameworks.map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.id} className="p-4 hover:shadow-md transition-shadow">
              <CardContent className="space-y-3 p-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">{f.name}</CardTitle>
                    <div className="text-xs text-muted-foreground">{f.pros}</div>
                  </div>
                </div>

                <ul className="text-sm space-y-1">
                  {f.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          💡 Start with React if you're new to modern web dev, Vue for easiest learning curve, Angular for enterprise projects, Next.js for full-stack React apps.
        </p>
      </div>
    </section>
  );
}