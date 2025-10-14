"use client";

import { useState, useEffect } from "react";
import { ExternalLink, BookOpen, FileText, Video, FileWarning } from "lucide-react";
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
import { py } from "@/data/learn";
import TabNavigation from "@/components/TabNavigation";


const aboutPython = {
  title: "Python Programming",
  description: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability with its notable use of significant whitespace and clean syntax. Key features include dynamic typing, automatic memory management, a comprehensive standard library, and support for multiple programming paradigms including procedural, object-oriented, and functional programming. Python's philosophy, outlined in 'The Zen of Python,' emphasizes beautiful, explicit, and simple code. It's an excellent first programming language due to its beginner-friendly syntax and extensive learning resources. Python is widely used across many domains including web development, data science, artificial intelligence, automation, scientific computing, and game development. Major companies like Google, Netflix, Instagram, and Spotify use Python in their technology stacks."
};

  const tabs = [
    { id: 'videos', label: 'Video Lectures', icon: Video },
    { id: 'books', label: 'Books & PDFs', icon: BookOpen },
    { id: 'docs', label: 'Official Documents', icon: FileText },
    { id: 'about', label: "About Python", icon: FileWarning}
  ];

export default function PythonPage() {
  const { youtubers, books,officialDocs} = py;
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
      <header className="bg-muted/30 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 ">
            <BackToHome/>
          <div className="flex gap-2">
            <CustomButton href="/learn/devops" title="Continue With DevOps"/> 
            <CustomButton href="/learn/ml" title="Continue With Machine Learning"/>
          </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Learn Python Programming
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Start your programming journey with Python - a beginner-friendly language that's powerful, versatile, and in high demand.
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

      <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Content Area */}
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
                       key={index}  name={youtuber.name?? ""}  description={youtuber.description?? ""}  playlistId={youtuber.playlistId?? ""} 
                       channelUrl={youtuber.channelUrl?? ""}  playlistUrl={youtuber.playlistUrl?? ""}  language={youtuber.language?? ""}  difficulty={youtuber.difficulty?? ""}
                       duration={youtuber.duration?? ""}  subscribers={youtuber.subscribers?? ""}  isSelected={selectedPlaylist === youtuber.playlistId}  onSelect={handleSelectPlaylist}

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
                        {selectedYoutuber?.name} - Python For Beginners
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
                    key={index}  title={book.title?? ""}  author={book.author?? ""}  description={book.description?? ""}  url={book.url?? ""} 
                    type={book.type?? ""}  pages={book.pages?? ""}  level={book.level?? ""}  year={book.year?? ""}

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
                    key={index}  title={doc.title?? ""}  description={doc.description?? ""}  organization={doc.organization?? ""}
                    type={doc.type?? ""}  url={doc.url?? ""}  year={doc.year?? ""}

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