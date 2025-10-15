"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Smartphone, Code, Apple, Layers, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";

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
    pros: "Maximum performance on Android"
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
    pros: "Cross-platform with web dev skills"
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
    pros: "Premium iOS UX & latest Apple APIs"
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
    pros: "Cross-platform with consistent UI"
  }
];

export default function AppFrameworkDiffBox() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <section className="max-w-7xl mx-auto bg-background border-b  rounded-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <HoverCard openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <CollapsibleTrigger asChild>
              <button 
                className="w-full text-left py-4 hover:bg-muted/50 rounded-lg transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-expanded={isOpen}
                aria-controls="framework-chooser-content"
              >
                <div className="flex items-center justify-between gap-3 px-4">
                  <div className="flex items-center gap-3">
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                    <h2 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      Which app framework should I learn?
                    </h2>
                  </div>
        
                </div>
              </button>
            </CollapsibleTrigger>
          </HoverCardTrigger>
          <HoverCardContent 
            className="w-auto px-3 py-2"
            side="bottom"
            align="start"
            sideOffset={5}
          >
            <p className="text-sm font-medium">
              {isOpen ? null : 'Click to expand'}
            </p>
          </HoverCardContent>
        </HoverCard>

        <CollapsibleContent id="framework-chooser-content">
          <div className="px-4 pb-6 pt-2">
            <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
              Quick comparison of modern web frameworks — choose based on your project needs and experience level.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {frameworks.map((f) => {
                const Icon = f.icon;
                return (
                  <Card 
                    key={f.id} 
                    className="p-4 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
                  >
                    <CardContent className="space-y-3 p-0">
                      <div className="flex items-start gap-3">
                        <div 
                          className="p-2 bg-muted rounded-lg flex-shrink-0" 
                          aria-hidden="true"
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-base font-semibold mb-1">
                            {f.name}
                          </CardTitle>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {f.pros}
                          </p>
                        </div>
                      </div>

                      <ul className="text-sm space-y-2 mt-3" role="list">
                        {f.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span 
                              className="text-blue-500 font-bold flex-shrink-0 mt-0.5" 
                              aria-hidden="true"
                            >
                              •
                            </span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

    
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
}