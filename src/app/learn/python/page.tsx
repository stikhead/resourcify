"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, Code, ExternalLink, BookOpen, FileText, Video, FileWarning } from "lucide-react";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";
import YoutuberCard from "@/components/cards/YoutuberCard";
import VideoGallery from "@/components/VideoGallery";
import BookCard from "@/components/cards/BookCard";
import DocCard from "@/components/cards/DocCard";
import { DefaultPlaylistCard } from "@/components/cards/DefaultTextNoPlaylist";
import BackToHome from "@/components/buttons/backtohome";
import CustomButton from "@/components/buttons/customButton";

// Type definitions
interface Youtuber {
  name: string;
  description: string;
  playlistId: string;
  channelUrl: string;
  playlistUrl: string;
  language: string;
  difficulty: string;
  duration: string;
  subscribers: string;
}

interface Book {
  title: string;
  author: string;
  description: string;
  url: string;
  type: string;
  pages: string;
  level: string;
  year: string;
}

interface OfficialDoc {
  title: string;
  organization: string;
  description: string;
  url: string;
  type: string;
  year: string;
}

// Python learning content for beginners
const youtubers: Youtuber[] = [
  {
    name: "Python Tutorial for Beginners",
    description: "Complete Python course covering fundamentals, data structures, and object-oriented programming concepts from scratch.",
    playlistId: "PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
    channelUrl: "https://www.youtube.com/@navinreddy20",
    playlistUrl: "https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
    language: "English",
    difficulty: "Beginner",
    duration: "~18 hours",
    subscribers: "2.8M"
  },
  {
    name: "Python Programming Tutorial",
    description: "Comprehensive Python programming course from basics to intermediate topics with practical examples and projects.",
    playlistId: "PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7",
    channelUrl: "https://www.youtube.com/@coreyms",
    playlistUrl: "https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~15 hours",
    subscribers: "1.1M"
  },
  {
    name: "Python Full Course for Beginners",
    description: "Complete Python programming tutorial covering syntax, functions, modules, and programming best practices.",
    playlistId: "PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    playlistUrl: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB",
    language: "English",
    difficulty: "Beginner",
    duration: "~12 hours",
    subscribers: "8.5M"
  },
  {
    name: "Learn Python in Hindi",
    description: "Complete Python programming course in Hindi for beginners, covering all fundamental concepts with practical examples.",
    playlistId: "PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    channelUrl: "https://www.youtube.com/@CodeWithHarry",
    playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    language: "Hindi",
    difficulty: "Beginner",
    duration: "~20 hours",
    subscribers: "5.7M"
  }
];

const books: Book[] = [
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    description: "Fast-paced, thorough introduction to Python that will have you writing programs, solving problems, and making things that work.",
    url: "#",
    type: "PDF",
    pages: "544 pages",
    level: "Beginner",
    year: "2023"
  },
  {
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    description: "Practical programming for total beginners, focusing on automating everyday tasks with Python. Available free online.",
    url: "https://automatetheboringstuff.com/",
    type: "Free Online",
    pages: "592 pages",
    level: "Beginner",
    year: "2019"
  },
  {
    title: "Think Python: How to Think Like a Computer Scientist",
    author: "Allen Downey",
    description: "Introduction to Python programming with focus on problem-solving and computational thinking. Free online version available.",
    url: "https://greenteapress.com/wp/think-python-2e/",
    type: "Free Online/PDF",
    pages: "292 pages",
    level: "Beginner",
    year: "2015"
  },
  {
    title: "Python Programming: An Introduction to Computer Science",
    author: "John Zelle",
    description: "Comprehensive introduction to programming and computer science using Python as the teaching language.",
    url: "#",
    type: "PDF",
    pages: "552 pages",
    level: "Beginner",
    year: "2016"
  }
];

const officialDocs: OfficialDoc[] = [
  {
    title: "Python Official Tutorial",
    organization: "Python Software Foundation",
    description: "Official Python tutorial covering language basics, data structures, modules, and standard library.",
    url: "https://docs.python.org/3/tutorial/",
    type: "Official Tutorial",
    year: "2024"
  },
  {
    title: "Python Documentation",
    organization: "Python Software Foundation",
    description: "Complete Python documentation with language reference, library documentation, and guides.",
    url: "https://docs.python.org/3/",
    type: "Official Documentation",
    year: "2024"
  },
  {
    title: "Python Standard Library",
    organization: "Python Software Foundation",
    description: "Documentation for Python's extensive standard library with built-in modules and functions.",
    url: "https://docs.python.org/3/library/",
    type: "Library Reference",
    year: "2024"
  },
  {
    title: "Python Package Index (PyPI)",
    organization: "Python Software Foundation",
    description: "Repository of third-party Python packages with over 400,000 packages for extending Python functionality.",
    url: "https://pypi.org/",
    type: "Package Repository",
    year: "2024"
  },
  {
    title: "Python Enhancement Proposals (PEPs)",
    organization: "Python Software Foundation",
    description: "Design documents describing new Python features, processes, and guidelines for the Python community.",
    url: "https://www.python.org/dev/peps/",
    type: "Language Specifications",
    year: "2024"
  }
];

const aboutPython = {
  title: "Python Programming",
  description: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability with its notable use of significant whitespace and clean syntax. Key features include dynamic typing, automatic memory management, a comprehensive standard library, and support for multiple programming paradigms including procedural, object-oriented, and functional programming. Python's philosophy, outlined in 'The Zen of Python,' emphasizes beautiful, explicit, and simple code. It's an excellent first programming language due to its beginner-friendly syntax and extensive learning resources. Python is widely used across many domains including web development, data science, artificial intelligence, automation, scientific computing, and game development. Major companies like Google, Netflix, Instagram, and Spotify use Python in their technology stacks."
};

function TabNavigation({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'videos', label: 'Video Lectures', icon: Video },
    { id: 'books', label: 'Books & PDFs', icon: BookOpen },
    { id: 'docs', label: 'Official Documents', icon: FileText },
    { id: 'about', label: "About Python", icon: FileWarning}
  ];

  return (
    <div className="border-b bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function PythonPage() {
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
          setVideos([]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [selectedPlaylist]);

  const selectedYoutuber = selectedPlaylist ? youtubers.find(y => y.playlistId === selectedPlaylist) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-b">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <BackToHome/>
            <CustomButton href="/learn/devops" title="Continue With DevOps"/> 
            <CustomButton href="/learn/ml" title="Continue With Machine Learning"/>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn Python Programming
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start your programming journey with Python - a beginner-friendly language that's powerful, versatile, and in high demand.
            </p>
          </div>
        </div>
      </header>

      {/* What You'll Learn Section */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What You'll Learn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Python Basics</h3>
              <p className="text-sm text-muted-foreground">
                Variables, data types, operators, and basic input/output operations
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Control Flow</h3>
              <p className="text-sm text-muted-foreground">
                If statements, loops, and decision-making structures
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Functions & Modules</h3>
              <p className="text-sm text-muted-foreground">
                Creating functions, importing modules, and code organization
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Object-Oriented Programming</h3>
              <p className="text-sm text-muted-foreground">
                Classes, objects, inheritance, and advanced Python concepts
              </p>
            </div>
          </div>
        </div>
      </section>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Area */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {activeTab === 'videos' && (
            <>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-4">Choose Your Instructor</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Select a course to start learning Python programming from scratch
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

              {/* Selected Playlist Videos */}
              {selectedPlaylist && (
                <div className="border-t pt-12">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedYoutuber?.name}
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
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="text-muted-foreground mt-4">Loading playlist videos...</p>
                    </div>
                  ) : (
                    <VideoGallery videos={videos} />
                  )}
                </div>
              )}

              {/* Default message when no playlist selected */}
              {!selectedPlaylist && (
                <DefaultPlaylistCard/>
              )}
            </>
          )}

          {activeTab === 'books' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">Books & Resources</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Essential books for learning Python programming from beginner to intermediate level
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
                Official Python resources, documentation, and references
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

          {activeTab === 'about' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">About Python</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Learn about Python programming language and why it's perfect for beginners
              </p>

              <div className="max-w-4xl mx-auto">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">{aboutPython.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {aboutPython.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}