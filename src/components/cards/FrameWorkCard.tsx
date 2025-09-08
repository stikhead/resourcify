"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { Album , Code, Apple, Layers } from "lucide-react";

const frameworks = [
  {
    id: "kotlin",
    name: "Kotlin (Android)",
    icon: Album ,
    bullets: [
      "Native Android performance & full platform APIs",
      "Official Android support; modern language",
      "Best when targeting Android-first apps"
    ],
    pros: "Best performance on Android",
    cons: "Android-only; less code reuse"
  },
  {
    id: "react",
    name: "React Native",
    icon: Code,
    bullets: [
      "JavaScript + React — easy if you know web dev",
      "Large ecosystem, many libraries",
      "Good for rapid cross-platform development"
    ],
    pros: "Fast to learn for React devs",
    cons: "May need native modules for complex features"
  },
  {
    id: "swift",
    name: "Swift (iOS)",
    icon: Apple,
    bullets: [
      "Native iOS with best UX & platform integration",
      "Apple tooling (Xcode) & latest iOS features",
      "Preferred for App Store polished experiences"
    ],
    pros: "Best iOS UX & access to newest APIs",
    cons: "iOS-only; Mac required for development"
  },
  {
    id: "flutter",
    name: "Flutter (Dart)",
    icon: Layers,
    bullets: [
      "Single codebase for Android + iOS",
      "Highly customizable & consistent UI with widgets",
      "Fast dev workflow with hot reload"
    ],
    pros: "Great for pixel-perfect cross-platform UI",
    cons: "Learn Dart; slightly bigger binary sizes"
  }
];

export default function FrameworkDiffBox() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-6">
      <h3 className="text-lg font-semibold mb-3">Which framework should I learn?</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Quick comparison to help you choose — pick the one that matches your goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {frameworks.map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.id} className="p-4">
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm">{f.name}</CardTitle>
                    <div className="text-xs text-muted-foreground">{f.pros}</div>
                  </div>
                </div>

                <ul className="text-sm list-disc ml-5 space-y-1">
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="flex items-center justify-between text-xs">
                     <span className={`text-xs px-2 py-1 rounded-full }`}>
                    {f.id === "react" ? "Android & iOS" : f.id === "flutter" ? "Windows, Web, Android & iOS" : f.id === "kotlin" ? "Android only" : "iOS only"}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
