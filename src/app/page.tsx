import { Code, Book, Gamepad2, Globe } from "lucide-react";
import Navbar from "@/components/NavBar";
import ResourceCard from "@/components/cards/ResourceCard";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Learn C Programming",
    description: "Master C programming from basics to advanced concepts including pointers, memory management, and data structures",
    type: "Course" as const,
    level: "Beginner" as const,
    href: "/learn/c",
    icon: Code
  },
  {
    title: "Learn C++ Programming",
    description: "Object-oriented programming, STL, templates, and modern C++ features for building robust applications",
    type: "Course" as const,
    level: "Beginner" as const,
    href: "/learn/cpp",
    icon: Code
  },
  {
    title: "Data Structures in C",
    description: "Understand low-level implementation of arrays, linked lists, stacks, queues, trees, and graphs",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa/c",
    icon: Book
  },
  {
    title: "Data Structures in C++",
    description: "Advanced data structures using C++ STL, custom implementations, and algorithm optimization",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa/cpp",
    icon: Book
  },
  {
    title: "Python Mini Projects",
    description: "Hands-on Python projects including calculators, games, web scrapers, and automation tools",
    type: "Project" as const,
    level: "Beginner" as const,
    href: "/projects/python",
    icon: Gamepad2
  },
{
  title: "Basic Web Development",
  description: "Learn HTML, CSS and JavaScript fundamentals with hands-on mini-projects: semantic HTML, responsive layouts (Flexbox & Grid), basic DOM scripting, and a small live site.",
  type: "Course" as const,
  level: "Beginner" as const,
  href: "/learn/web-dev/basic",
  icon: Globe
},
{
  title: "Advanced Web Development",
  description: "Level up to modern frontend & full-stack workflows: React + Next.js, TypeScript, component patterns, state management, API integration, SSR/SSG, testing, performance and deployment.",
  type: "Course" as const,
  level: "Intermediate" as const,
  href: "/learn/web-dev/adv",
  icon: Globe
},

  {
    title: "About Git & Github",
    description: "Learn about git version control, github usage, cli commands, branching, merging, pull requests etc",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/git",
    icon: Book
  },
  {
    title: "CV/Resume Resources",
    description: "Everything related to resume making — whether for internships, placements, off-campus jobs, or research positions",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa-cpp",
    icon: Book
  },
  {
    title: "Machine Learning",
    description: "Advanced data structures using C++ STL, custom implementations, and algorithm optimization",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa-cpp",
    icon: Book
  },
    {
    title: "App Development",
    description: "Learn different tech stacks for app development",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/app-dev/",
    icon: Book
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Simple Header */}
            <header className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learning Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Resources for C, C++, DSA, Python, Web and App Developement
          </p>
        </div>
      </header>


      {/* Resources Grid */}
      <main className="py-16 max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              type={resource.type}
              level={resource.level}
              href={resource.href}
              icon={resource.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
}