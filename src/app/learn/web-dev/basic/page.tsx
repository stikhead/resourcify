"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ExternalLink, BookOpen, FileText, Video, Globe, Code, Layout, Palette, Zap, FileWarning } from "lucide-react";
import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DocCard from "@/components/cards/DocCard";
import BookCard from "@/components/cards/BookCard";
import YoutuberCard from "@/components/cards/YoutuberCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";
import TabNavigation from "@/components/TabNavigation";

const youtubers = [
  {
    name: "freeCodeCamp",
    description: "Comprehensive web development bootcamp covering HTML, CSS, JavaScript from basics to advanced projects.",
    playlistId: "PLoiSiM7anHlHVwcrnfhEPXjeLdz3T9Z6l",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    playlistUrl: "https://www.youtube.com/playlist?list=PLoiSiM7anHlHVwcrnfhEPXjeLdz3T9Z6l",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~8 hours",
    subscribers: "8.7M"
  },
  {
    name: "Traversy Media",
    description: "Practical web development tutorials focusing on modern HTML5, CSS3, and JavaScript ES6+ features.",
    playlistId: "PLillGF-RfqbYeckUaD1z6nviTp31GLTH8",
    channelUrl: "https://www.youtube.com/@TraversyMedia",
    playlistUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~25 hours",
    subscribers: "2.2M"
  },
  {
    name: "The Net Ninja",
    description: "Step-by-step web development series covering HTML, CSS, JavaScript with clean explanations and projects.",
    playlistId: "PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
    channelUrl: "https://www.youtube.com/@NetNinja",
    playlistUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
    language: "English",
    difficulty: "Beginner",
    duration: "~20 hours",
    subscribers: "1.1M"
  },
  {
    name: "Web Dev Simplified",
    description: "Modern web development tutorials with focus on best practices, performance, and clean code.",
    playlistId: "PLZlA0Gpn_vH9xx-RRVNG187ETT2ekWFsq",
    channelUrl: "https://www.youtube.com/@WebDevSimplified",
    playlistUrl: "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9xx-RRVNG187ETT2ekWFsq",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~15 hours",
    subscribers: "1.3M"
  },
  {
    name: "Code with Harry",
    description: "Complete web development course in Hindi covering HTML, CSS, JavaScript with practical projects.",
    playlistId: "PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
    channelUrl: "https://www.youtube.com/@CodeWithHarry",
    playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
    language: "Hindi/English",
    difficulty: "Beginner",
    duration: "~30 hours",
    subscribers: "5.7M"
  }
];

const books = [
  {
    title: "HTML and CSS: Design and Build Websites",
    author: "Jon Duckett",
    description: "Visual guide to HTML and CSS with beautiful examples and clear explanations for beginners.",
    url: "#",
    type: "PDF",
    pages: "490 pages",
    level: "Beginner",
    year: "2011"
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    description: "Classic JavaScript book focusing on the language's best features and avoiding problematic parts.",
    url: "#",
    type: "PDF",
    pages: "176 pages",
    level: "Intermediate",
    year: "2008"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description: "Modern introduction to programming with JavaScript. Available for free online.",
    url: "https://eloquentjavascript.net/",
    type: "Free Online/PDF",
    pages: "472 pages",
    level: "Beginner to Intermediate",
    year: "2024"
  },
  {
    title: "CSS: The Definitive Guide",
    author: "Eric Meyer & Estelle Weyl",
    description: "Comprehensive guide to CSS covering layout, typography, animations, and modern features.",
    url: "#",
    type: "PDF",
    pages: "1090 pages",
    level: "Intermediate to Advanced",
    year: "2023"
  },
  {
    title: "You Don't Know JS (Book Series)",
    author: "Kyle Simpson",
    description: "Deep dive into JavaScript fundamentals, scope, closures, prototypes, and advanced concepts.",
    url: "https://github.com/getify/You-Dont-Know-JS",
    type: "Free GitHub",
    pages: "6 Book Series",
    level: "Intermediate to Advanced",
    year: "2022"
  }
];

const officialDocs = [
  {
    title: "MDN Web Docs",
    organization: "Mozilla",
    description: "The most comprehensive web development documentation covering HTML, CSS, JavaScript, and Web APIs.",
    url: "https://developer.mozilla.org/",
    type: "Documentation Hub",
    year: "Updated"
  },
  {
    title: "HTML Living Standard",
    organization: "WHATWG",
    description: "Official HTML specification defining the latest HTML5 features and semantic elements.",
    url: "https://html.spec.whatwg.org/",
    type: "Official Specification",
    year: "Living Standard"
  },
  {
    title: "CSS Specifications",
    organization: "W3C",
    description: "Official CSS specifications covering all CSS modules, properties, and latest features.",
    url: "https://www.w3.org/Style/CSS/specs.en.html",
    type: "Official Specification",
    year: "Updated"
  },
  {
    title: "JavaScript Language Specification",
    organization: "Ecma International",
    description: "ECMAScript specification defining JavaScript language features and standards.",
    url: "https://www.ecma-international.org/ecma-262/",
    type: "Language Specification",
    year: "ES2024"
  },
  {
    title: "Web.dev",
    organization: "Google",
    description: "Modern web development guides covering performance, accessibility, and best practices.",
    url: "https://web.dev/",
    type: "Learning Platform",
    year: "Updated"
  },
  {
    title: "Can I Use",
    organization: "Alexis Deveria",
    description: "Browser compatibility tables for HTML5, CSS3, and JavaScript features across all browsers.",
    url: "https://caniuse.com/",
    type: "Compatibility Reference",
    year: "Updated"
  }
];

const practiceResources = [
  {
    name: "CodePen",
    description: "Online code editor for HTML, CSS, and JavaScript with live preview and community sharing.",
    url: "https://codepen.io/",
    type: "Code Playground",
    icon: Code
  },
  {
    name: "freeCodeCamp",
    description: "Interactive coding curriculum with projects and certifications for web development.",
    url: "https://www.freecodecamp.org/",
    type: "Interactive Learning",
    icon: Globe
  },
  {
    name: "CSS-Tricks",
    description: "CSS techniques, tips, and tricks with practical examples and problem solutions.",
    url: "https://css-tricks.com/",
    type: "Tutorial Site",
    icon: Palette
  },
  {
    name: "JavaScript30",
    description: "30-day vanilla JavaScript coding challenge with 30 different projects.",
    url: "https://javascript30.com/",
    type: "Coding Challenge",
    icon: Zap
  }
];

const learningPath = [
  {
    phase: "HTML Fundamentals",
    duration: "2-3 weeks",
    topics: ["Semantic HTML", "Forms", "Tables", "Multimedia"],
    description: "Learn the structure and markup language of the web",
    projects: ["Personal portfolio page", "Recipe website", "Survey form"]
  },
  {
    phase: "CSS Styling",
    duration: "4-6 weeks",
    topics: ["Selectors", "Box Model", "Flexbox", "Grid", "Responsive Design"],
    description: "Master styling, layout, and responsive web design",
    projects: ["Responsive landing page", "CSS animations", "Mobile-first design"]
  },
  {
    phase: "JavaScript Basics",
    duration: "6-8 weeks",
    topics: ["Variables", "Functions", "DOM Manipulation", "Events", "Async/Await"],
    description: "Learn programming fundamentals and web interactivity",
    projects: ["Calculator app", "To-do list", "Weather app"]
  },
  {
    phase: "Advanced Concepts",
    duration: "4-6 weeks",
    topics: ["ES6+ Features", "APIs", "Local Storage", "Error Handling"],
    description: "Modern JavaScript features and data handling",
    projects: ["API-driven app", "Shopping cart", "Browser game"]
  },
  {
    phase: "Real Projects",
    duration: "4-8 weeks",
    topics: ["Project Planning", "Version Control", "Deployment", "Performance"],
    description: "Build complete web applications and deploy them",
    projects: ["E-commerce site", "Blog platform", "Portfolio website"]
  }
];

const webFeatures = [
  {
    title: "HTML5 Semantic Elements",
    description: "Structure content with semantic meaning",
    icon: Layout,
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
  },
  {
    title: "CSS Grid & Flexbox",
    description: "Modern layout systems for responsive design",
    icon: Palette,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  },
  {
    title: "JavaScript ES6+",
    description: "Modern JavaScript features and syntax",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
  },
  {
    title: "Responsive Design",
    description: "Mobile-first, cross-device compatibility",
    icon: Globe,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
  }
];

  const tabs = [
    { id: 'videos', label: 'Video Lectures', icon: Video },
    { id: 'books', label: 'Books & PDFs', icon: BookOpen },
    { id: 'docs', label: 'Official Documents', icon: FileText },
    { id: 'platf', label: "Practice Platforms", icon: ExternalLink},
  ];
  
export default function WebDevPage() {
  const [activeTab, setActiveTab] = useState('videos');
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectPlaylist = (playlistId: string) => {
    setSelectedPlaylist(playlistId);
  };

  useEffect(() => {
    if (selectedPlaylist) {
      setIsLoading(true);
      getPlaylistItemsClient(selectedPlaylist)
        .then(setVideos)
        .catch((e) => {
          console.error(e);
        })
        .finally(() => setIsLoading(false));
    }
  }, [selectedPlaylist]);

  const selectedYoutuber = selectedPlaylist ? youtubers.find(y => y.playlistId === selectedPlaylist) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Web Development Fundamentals
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Master the core technologies of web development: HTML for structure, CSS for styling, 
              and JavaScript for interactivity. Build responsive, modern websites from scratch.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm font-medium">
                HTML5
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                CSS3
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Core Technologies */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Core Web Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-background rounded-lg border">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



            <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Content Area */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {activeTab === 'videos' && (
            <>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-4">Choose Your Instructor</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Select a YouTuber to load their complete web development tutorial playlist below
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {youtubers.map((youtuber, index) => (
                    <YoutuberCard
                      key={index}
                      name={youtuber.name}
                      description={youtuber.description}
                      playlistId={youtuber.playlistId}
                      channelUrl={youtuber.channelUrl}
                      playlistUrl={youtuber.playlistUrl}
                      language={youtuber.language}
                      difficulty={youtuber.difficulty}
                      duration={youtuber.duration}
                      subscribers={youtuber.subscribers}
                      isSelected={selectedPlaylist === youtuber.playlistId}
                      onSelect={handleSelectPlaylist}
                    />
                  ))}
                </div>
              </div>

              {selectedPlaylist && (
                <div className="border-t pt-12">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedYoutuber?.name} - Web Development Course
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {isLoading ? 'Loading videos...' : `${videos.length} videos • ${selectedYoutuber?.duration}`}
                      </p>
                    </div>
                    <Link
                      href={selectedYoutuber?.playlistUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on YouTube
                      </Button>
                    </Link>
                  </div>

                  {isLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                      <p className="text-muted-foreground mt-4">Loading playlist videos...</p>
                    </div>
                  ) : (
                    <VideoGallery videos={videos} />
                  )}
                </div>
              )}

              {!selectedPlaylist && (
                <div className="text-center py-16 border-t">
                  <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select a Playlist to Get Started</h3>
                  <p className="text-muted-foreground">
                    Choose one of the instructors above to load their complete web development tutorial series
                  </p>
                </div>
              )}
            </>
          )}

          {activeTab === 'books' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">Books & Learning Resources</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Essential books for mastering HTML, CSS, and JavaScript fundamentals
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {books.map((book, index) => (
                  <BookCard
                    key={index}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    url={book.url}
                    type={book.type}
                    pages={book.pages}
                    level={book.level}
                    year={book.year}
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === 'docs' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">Official Documentation</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Official references and comprehensive guides for web development technologies
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {officialDocs.map((doc, index) => (
                  <DocCard
                    key={index}
                    title={doc.title}
                    description={doc.description}
                    organization={doc.organization}
                    type={doc.type}
                    url={doc.url}
                    year={doc.year}
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === 'platf' && (
            <>
                  {/* Practice Resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Practice Platforms</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interactive platforms and tools to practice and improve your web development skills
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
                    <resource.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-bold mb-2">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <span className="text-xs px-2 py-1 bg-muted rounded-full">{resource.type}</span>
                  
                  <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="mt-4 block">
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Visit Platform
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section></>
          )}
        </div>
      </main>
    </div>
  );
}