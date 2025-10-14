"use client";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";
import { useState, useEffect } from "react";
import { ExternalLink, BookOpen, FileText, Video } from "lucide-react";
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
import { c } from "@/data/learn";
import { DefaultPlaylistCard } from "@/components/cards/DefaultTextNoPlaylist";

const tabs: TabItem[] = [
  { id: 'videos', label: 'Video Lectures', icon: Video },
  { id: 'books', label: 'Books & PDFs', icon: BookOpen },
  { id: 'docs', label: 'Official Documents', icon: FileText }
];


export default function LearnCPage() {
  const { youtubers, officialDocs, books } = c;
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

      {/* Header Section */}
      <header className="bg-muted/30 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 ">
            <BackToHome />
            <div className="flex gap-2">
              <CustomButton href={"/learn/cpp"} title={"Learn C++"} />
              <CustomButton href={"/learn/dsa/c"} title={"Data Structures in C"} />
            </div>
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
                      key={index}  name={youtuber.name?? ""}  description={youtuber.description?? ""}  playlistId={youtuber.playlistId?? ""}  channelUrl={youtuber.channelUrl?? ""}  playlistUrl={youtuber.playlistUrl?? ""}  language={youtuber.language?? ""}  difficulty={youtuber.difficulty?? ""}  duration={youtuber.duration?? ""}  subscribers={youtuber.subscribers?? ""}  isSelected={selectedPlaylist === youtuber.playlistId}  onSelect={handleSelectPlaylist}
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
                <DefaultPlaylistCard/>
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
                    key={index}  title={book.title?? ""}  author={book.author?? ""}  description={book.description?? ""}  url={book.url?? ""}  type={book.type?? ""}  pages={book.pages?? ""}  level={book.level?? ""}  year={book.year?? ""}
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
                    key={index}  title={doc.title?? ""}  description={doc.description?? ""}  organization={doc.organization?? ""}  type={doc.type?? ""}  url={doc.url?? ""}  year={doc.year?? ""}
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