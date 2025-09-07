import { Code, Book, Gamepad2, Globe, Database, Smartphone } from "lucide-react";
import Navbar from "@/components/NavBar";
import ResourceCard from "@/components/cards/ResourceCard";
import { Button } from "@/components/ui/button";

const allResources = [
  // Programming Languages
  {
    title: "Learn C Programming",
    description: "Master C programming from basics to advanced concepts including pointers, memory management, and data structures implementation",
    type: "Course" as const,
    level: "Beginner" as const,
    href: "/learn/c",
    icon: Code,
    category: "Programming Languages"
  },
  {
    title: "Learn C++ Programming",
    description: "Object-oriented programming, STL, templates, and modern C++ features for building robust and efficient applications",
    type: "Course" as const,
    level: "Beginner" as const,
    href: "/learn/cpp",
    icon: Code,
    category: "Programming Languages"
  },
  {
    title: "Python for Beginners",
    description: "Learn Python programming from scratch with practical examples, data structures, and object-oriented programming concepts",
    type: "Course" as const,
    level: "Beginner" as const,
    href: "/learn/python",
    icon: Code,
    category: "Programming Languages"
  },
  
  // Data Structures & Algorithms
  {
    title: "Data Structures in C",
    description: "Understand low-level implementation of arrays, linked lists, stacks, queues, trees, and graphs with practical examples",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa/c",
    icon: Book,
    category: "Data Structures & Algorithms"
  },
  {
    title: "Data Structures in C++",
    description: "Advanced data structures using C++ STL, custom implementations, algorithm optimization, and competitive programming techniques",
    type: "Article" as const,
    level: "Intermediate" as const,
    href: "/learn/dsa/cpp",
    icon: Book,
    category: "Data Structures & Algorithms"
  },
  {
    title: "Algorithms Masterclass",
    description: "Comprehensive guide to sorting, searching, graph algorithms, dynamic programming, and algorithmic problem-solving strategies",
    type: "Course" as const,
    level: "Advanced" as const,
    href: "/learn/algorithms",
    icon: Book,
    category: "Data Structures & Algorithms"
  },

  // Web Development
  {
    title: "Web Development Fundamentals",
    description: "HTML5, CSS3, JavaScript ES6+, responsive design, and modern web development practices with hands-on projects",
    type: "Course" as const,
    level: "Beginner" as const,
    href: "/learn/web-dev",
    icon: Globe,
    category: "Web Development"
  },
  {
    title: "React.js Complete Guide",
    description: "Build modern web applications with React, including hooks, context, routing, state management, and best practices",
    type: "Course" as const,
    level: "Intermediate" as const,
    href: "/learn/react",
    icon: Globe,
    category: "Web Development"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web development with Node.js, Express, databases, authentication, deployment, and production considerations",
    type: "Course" as const,
    level: "Advanced" as const,
    href: "/learn/fullstack",
    icon: Globe,
    category: "Web Development"
  },

  // Projects
  {
    title: "Python Mini Projects",
    description: "Hands-on Python projects including calculators, games, web scrapers, automation tools, and GUI applications for beginners",
    type: "Project" as const,
    level: "Beginner" as const,
    href: "/projects/python",
    icon: Gamepad2,
    category: "Projects"
  },
  {
    title: "C++ Game Development",
    description: "Build console games and learn game development concepts using C++ with graphics libraries and game engine basics",
    type: "Project" as const,
    level: "Intermediate" as const,
    href: "/projects/cpp-games",
    icon: Gamepad2,
    category: "Projects"
  },
  {
    title: "Web Development Projects",
    description: "Real-world web projects including e-commerce sites, social media apps, portfolio websites, and API integrations",
    type: "Project" as const,
    level: "Intermediate" as const,
    href: "/projects/web",
    icon: Gamepad2,
    category: "Projects"
  },

  // Database & Backend
  {
    title: "Database Design & SQL",
    description: "Relational database concepts, SQL queries, normalization, indexes, and database optimization techniques",
    type: "Course" as const,
    level: "Intermediate" as const,
    href: "/learn/databases",
    icon: Database,
    category: "Database & Backend"
  },
  {
    title: "API Development",
    description: "RESTful API design, authentication, documentation, testing, and best practices for backend development",
    type: "Course" as const,
    level: "Intermediate" as const,
    href: "/learn/api-dev",
    icon: Database,
    category: "Database & Backend"
  },

  // Mobile Development
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile development with React Native, Flutter, or native development for iOS and Android",
    type: "Course" as const,
    level: "Intermediate" as const,
    href: "/learn/mobile",
    icon: Smartphone,
    category: "Mobile Development"
  }
];

const categories = [
  "All",
  "Programming Languages", 
  "Data Structures & Algorithms",
  "Web Development",
  "Projects",
  "Database & Backend",
  "Mobile Development"
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learning Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of programming courses, tutorials, projects, and articles 
            designed to accelerate your learning journey from beginner to expert.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Video Tutorials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allResources.map((resource, index) => (
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

          {/* Load More */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline">
              Load More Resources
            </Button>
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get notified when we add new courses, projects, and learning resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}