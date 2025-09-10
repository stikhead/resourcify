"use client";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";

import { useState, useEffect } from "react";
import { ChevronLeft, ExternalLink, BookOpen, FileText, Video } from "lucide-react";
import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DocCard from "@/components/cards/DocCard";
import BookCard from "@/components/cards/BookCard";
import YoutuberCard from "@/components/cards/YoutuberCard";
import BackToHome from "@/components/buttons/backtohome";
import CustomButton from "@/components/buttons/customButton";
import TabNavigation, { TabItem } from "@/components/TabNavigation";


// Fallback video data for when API fails or no playlist selected


const youtubers = [
  {
    name: "Code with Harry",
    description: "Comprehensive C programming course in Hindi/English. Great for beginners with practical examples and projects.",
    playlistId: "PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",
    channelUrl: "https://www.youtube.com/@CodeWithHarry",
    playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",
    language: "Hindi/English",
    difficulty: "Beginner",
    duration: "~8 hours",
    subscribers: "5.7M"
  },
  {
    name: "Jenny's Lectures CS IT",
    description: "Detailed C programming tutorials with focus on concepts and problem-solving. Perfect for computer science students.",
    playlistId: "PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S",
    channelUrl: "https://www.youtube.com/@JennyslecturesCSIT",
    playlistUrl: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~15 hours",
    subscribers: "1.8M"
  },
  {
    name: "Neso Academy",
    description: "In-depth C programming course with theoretical concepts and practical implementation. University-level content.",
    playlistId: "PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
    channelUrl: "https://www.youtube.com/@nesoacademy",
    playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
    language: "English",
    difficulty: "Beginner to Advanced",
    duration: "~25 hours",
    subscribers: "2.1M"
  }
];

const books = [
  {
    title: "The C Programming Language",
    author: "Brian Kernighan & Dennis Ritchie",
    description: "The definitive guide to C programming by its creators. Essential reading for serious C programmers.",
    url: "https://kremlin.cc/k&r.pdf",
    type: "PDF",
    pages: "272 pages",
    level: "Intermediate to Advanced",
    year: "1988"
  },
  {
    title: "C Programming: A Modern Approach",
    author: "K. N. King",
    description: "Comprehensive modern approach to C programming with excellent examples and exercises.",
    url: "#",
    type: "PDF",
    pages: "832 pages",
    level: "Beginner to Advanced",
    year: "2008"
  },
  {
    title: "Head First C",
    author: "David Griffiths & Dawn Griffiths",
    description: "Beginner-friendly approach to learning C with engaging visuals and practical examples.",
    url: "#",
    type: "PDF",
    pages: "632 pages",
    level: "Beginner",
    year: "2012"
  },
  {
    title: "C Programming Absolute Beginner's Guide",
    author: "Greg Perry & Dean Miller",
    description: "Perfect starting point for complete beginners with step-by-step instructions and practical examples.",
    url: "#",
    type: "PDF",
    pages: "352 pages",
    level: "Beginner",
    year: "2013"
  }
];

const officialDocs = [
  {
    title: "ISO C Standard (C11)",
    organization: "ISO/IEC",
    description: "Official C programming language standard specification. The authoritative reference for C language features.",
    url: "https://www.iso.org/standard/57853.html",
    type: "Official Standard",
    year: "2011"
  },
  {
    title: "GNU C Library Documentation",
    organization: "GNU Project",
    description: "Complete documentation for the GNU C Library (glibc) including all standard C functions.",
    url: "https://www.gnu.org/software/libc/manual/",
    type: "Library Documentation",
    year: "2023"
  },
  {
    title: "C Reference - cppreference.com",
    organization: "cppreference.com",
    description: "Comprehensive online reference for C standard library functions, operators, and language features.",
    url: "https://en.cppreference.com/w/c",
    type: "Online Reference",
    year: "Updated"
  },
  {
    title: "GCC C Compiler Documentation",
    organization: "GNU Project",
    description: "Official documentation for the GNU Compiler Collection C compiler, including language extensions.",
    url: "https://gcc.gnu.org/onlinedocs/gcc/C-Extensions.html",
    type: "Compiler Documentation",
    year: "2023"
  },
  {
    title: "POSIX C API Reference",
    organization: "IEEE",
    description: "POSIX standard C API functions for system programming and cross-platform development.",
    url: "https://pubs.opengroup.org/onlinepubs/9699919799/",
    type: "API Reference",
    year: "2018"
  }
];

const tabs: TabItem[] = [
  { id: 'videos', label: 'Video Lectures', icon: Video },
  { id: 'books', label: 'Books & PDFs', icon: BookOpen },
  { id: 'docs', label: 'Official Documents', icon: FileText }
];

export default function LearnCPage() {
  const [activeTab, setActiveTab] = useState('videos');
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSelectPlaylist = (playlistId: string) => {
    setSelectedPlaylist(playlistId);
  };
  // page.tsx (client)

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

      {/* Header Section */}
      <header className="bg-muted/30 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-6">
            <BackToHome />
            <CustomButton href="/learn/web-dev/adv" title="Learn Advance Web Development"/>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Learn C Programming
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Master the fundamentals of C programming language with comprehensive resources including video tutorials,
              essential books, and official documentation.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                Video Lectures
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                Books & PDFs
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
                Official Docs
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="py-12 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What You'll Learn</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">C Basics</h3>
              <p className="text-sm text-muted-foreground">
                Syntax, variables, data types, and basic I/O operations
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Control Flow</h3>
              <p className="text-sm text-muted-foreground">
                Conditionals, loops, and decision-making structures
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Functions</h3>
              <p className="text-sm text-muted-foreground">
                Function definition, parameters, return values, and scope
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Advanced Topics</h3>
              <p className="text-sm text-muted-foreground">
                Pointers, arrays, structures, and memory management
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tab Navigation */}
      <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Content based on active tab */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {activeTab === 'videos' && (
            <>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-4">Choose Your Instructor</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Select a YouTuber to load their complete C programming playlist below
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

              {/* Selected Playlist Videos */}
              {selectedPlaylist && (
                <div className="border-t pt-12">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedYoutuber?.name} - C Programming Course
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

              {/* Default message when no playlist selected */}
              {!selectedPlaylist && (
                <div className="text-center py-16 border-t">
                  <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select a Playlist to Get Started</h3>
                  <p className="text-muted-foreground">
                    Choose one of the instructors above to load their complete C programming video series
                  </p>
                </div>
              )}
            </>
          )}

          {activeTab === 'books' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">Books & PDFs</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Essential books for mastering C programming from beginner to advanced level
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
                Authoritative references and standards for C programming language
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
        </div>
      </main>
    </div>
  );
}