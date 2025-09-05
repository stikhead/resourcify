import { Code, Book, Gamepad2, Globe } from "lucide-react";
import Navbar from "@/components/NavBar";
import ResourceCard from "@/components/ResourceCard";

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
    href: "/learn/dsa-c",
    icon: Book
  },
  {
    title: "Data Structures in C++",
    description: "Advanced data structures using C++ STL, custom implementations, and algorithm optimization",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa-cpp",
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
    title: "Web Development Basics",
    description: "HTML, CSS, JavaScript fundamentals with hands-on projects and modern web development practices",
    type: "Course" as const,
    level: "Beginner" as const,
    href: "/learn/web-dev",
    icon: Globe
  },
  {
    title: "About Git & Github",
    description: "Advanced data structures using C++ STL, custom implementations, and algorithm optimization",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa-cpp",
    icon: Book
  },
  {
    title: "CV/Resume Resources",
    description: "Advanced data structures using C++ STL, custom implementations, and algorithm optimization",
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
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Simple Header */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn. Build. Grow.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Resources for C, C++, Python, Web, App & Game Development
        </p>
      </header>

      {/* Resources Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
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