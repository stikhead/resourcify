"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code, Apple, Layers } from "lucide-react";

const frameworks = [
  {
    id: "android",
    name: "Android (Kotlin/Java)",
    icon: Smartphone,
    bullets: [
      "Native Android performance & full platform APIs",
      "Official Google support with modern Kotlin language",
      "Best integration with Android ecosystem & services"
    ],
    pros: "Maximum performance on Android",
    cons: "Android-only; no code reuse for iOS",
    platform: "Android Only",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
  },
  {
    id: "react-native",
    name: "React Native",
    icon: Code,
    bullets: [
      "JavaScript + React — leverage existing web skills",
      "Large ecosystem with extensive third-party libraries",
      "Hot reload for fast development cycles"
    ],
    pros: "Cross-platform with web dev skills",
    cons: "May need native bridges for complex features",
    platform: "iOS & Android",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  },
  {
    id: "ios",
    name: "iOS (Swift)",
    icon: Apple,
    bullets: [
      "Native iOS performance & seamless platform integration",
      "Access to latest iOS features and Apple frameworks",
      "Best user experience following Apple design guidelines"
    ],
    pros: "Premium iOS UX & latest Apple APIs",
    cons: "iOS-only; requires Mac for development",
    platform: "iOS Only",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  },
  {
    id: "flutter",
    name: "Flutter (Dart)",
    icon: Layers,
    bullets: [
      "Single codebase compiles to native iOS & Android",
      "Consistent UI across platforms with custom widgets",
      "Fast development with hot reload & rich tooling"
    ],
    pros: "True cross-platform with consistent UI",
    cons: "Learn Dart language; larger app size",
    platform: "iOS, Android, Web, Desktop",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
  }
];

export default function AppFrameworkDiffBox() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
      <h3 className="text-lg font-semibold mb-3">Which mobile framework should I learn?</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Compare mobile development approaches — choose based on target platforms and your existing skills.
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
                  <div className="flex-1">
                    <CardTitle className="text-sm font-semibold">{f.name}</CardTitle>
                    <div className="text-xs text-muted-foreground">{f.pros}</div>
                  </div>
                </div>

                <ul className="text-sm space-y-1">
                  {f.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <Badge className={`text-xs ${f.color} border-0`}>
                    {f.platform}
                  </Badge>
                  <div className="text-xs text-amber-600 dark:text-amber-400 leading-tight">
                    <span className="font-medium">Trade-off:</span> {f.cons}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-background/50 rounded-lg border">
        <h4 className="font-medium mb-2">Quick Decision Guide:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-green-600">Choose Native (Android/iOS)</span> if you need maximum performance, platform-specific features, or are targeting one platform primarily.
          </div>
          <div>
            <span className="font-medium text-blue-600">Choose Cross-platform (React Native/Flutter)</span> if you want code reuse, have limited resources, or need to target multiple platforms quickly.
          </div>
        </div>
      </div>
    </section>
  );
}