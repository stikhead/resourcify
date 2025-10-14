"use client"
import { BookOpen, FileText, Video } from "lucide-react";
import React from "react";
export type TabItem = {
  id: string;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface TabNavigationProperties{
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}
export default function TabNavigation({ 
  tabs,
  activeTab,
  onChange,
  className = "",
}: TabNavigationProperties) {

   return (
    <div className={`border-b bg-background ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex overflow-x-auto space-x-8" role="tablist" aria-label="Section tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => onChange(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  isActive
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:scale-105 h-full"
                }`}
              >
                {tab.icon ? <tab.icon className="w-4 h-4" /> : null}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}