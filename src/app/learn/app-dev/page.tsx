"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, Smartphone, Layers, ExternalLink, BookOpen, FileText, Video, LucideFileWarning } from "lucide-react";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";
import YoutuberCard from "@/components/cards/YoutuberCard";
import VideoGallery from "@/components/VideoGallery";
import BookCard from "@/components/cards/BookCard";
import DocCard from "@/components/cards/DocCard";
import FrameworkDiffBox from "@/components/cards/FrameWorkCard";
import { exitCode } from "process";
import BackToHome from "@/components/buttons/backtohome";

interface Platform {
  id: string;
  name: string;
  language: string;
  ide: string;
  description: string;
}

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
interface AboutLang {
  title: string;
  description: string;
}

interface PlatformContent {
  youtubers: Youtuber[];
  books: Book[];
  docs: OfficialDoc[];
  about: AboutLang[];
}


const platforms: Platform[] = [
  {
    id: "android",
    name: "Android (Kotlin/Java)",
    language: "Kotlin/Java",
    ide: "Android Studio",
    description: "Build native Android applications with Kotlin or Java. Learn the Android SDK, UI components, and platform-specific features for optimal performance and user experience."
  },
  {
    id: "ios",
    name: "iOS (Swift)",
    language: "Swift",
    ide: "Xcode",
    description: "Create native iOS applications using Swift and Xcode. Master UIKit, SwiftUI, and iOS-specific design patterns for App Store quality applications."
  },
  {
    id: "react-native",
    name: "React Native",
    language: "JavaScript/TypeScript",
    ide: "VS Code / Expo",
    description: "Build cross-platform mobile apps with React Native. Write once, deploy to both iOS and Android using JavaScript and React concepts."
  },
  {
    id: "flutter",
    name: "Flutter",
    language: "Dart",
    ide: "VS Code / Android Studio",
    description: "Develop beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Google's Flutter framework and Dart language."
  }
];

const platformContent: Record<string, PlatformContent> = {
  android: {
    youtubers: [
      {
        name: `Place Holder for ${platforms[0].id}`,
        description: "null",
        playlistId: "null",
        channelUrl: "null",
        playlistUrl: "null",
        language: "null",
        difficulty: "null",
        duration: "null",
        subscribers: "null"
      }
    ],
    books: [
      {
        title: `Place Holder for ${platforms[0].id}`,
        author: "null",
        description: "null",
        url: "null",
        type: "null",
        pages: "null",
        level: "null",
        year: "null"
      },
    ],
    docs: [
      {
        title: `Place Holder for ${platforms[0].id}`,
        organization: "null",
        description: "null",
        url: "null",
        type: "null",
        year: "null"
      },
    ],
    about: [
      {
        title: "Kotlin",
        description: ``     },
    ],
  },
  "ios": {
    youtubers: [
      {
        name: `Place Holder for ${platforms[1].id}`,
        description: "null",
        playlistId: "null",
        channelUrl: "null",
        playlistUrl: "null",
        language: "null",
        difficulty: "null",
        duration: "null",
        subscribers: "null"
      }
    ],
    books: [
      {
        title: `Place Holder for ${platforms[1].id}`,
        author: "null",
        description: "null",
        url: "null",
        type: "null",
        pages: "null",
        level: "null",
        year: "null"
      },
    ],
    docs: [
      {
        title: `Place Holder for ${platforms[1].id}`,
        organization: "null",
        description: "null",
        url: "null",
        type: "null",
        year: "null"
      },
    ],
    about: [
      {
        title: "Kotlin",
        description: ``
      },
    ],
  },
  "react-native":{
    youtubers: [
      {
        name: `Place Holder for ${platforms[2].id}`,
        description: "null",
        playlistId: "null",
        channelUrl: "null",
        playlistUrl: "null",
        language: "null",
        difficulty: "null",
        duration: "null",
        subscribers: "null"
      }
    ],
    books: [
      {
        title: `Place Holder for ${platforms[2].id}`,
        author: "null",
        description: "null",
        url: "null",
        type: "null",
        pages: "null",
        level: "null",
        year: "null"
      },
    ],
    docs: [
      {
        title: `Place Holder for ${platforms[2].id}`,
        organization: "null",
        description: "null",
        url: "null",
        type: "null",
        year: "null"
      },
    ],
     about: [
      {
        title: "Kotlin",
        description: ``},
    ]
    
  },
  flutter: {
    youtubers: [
      {
        name: `Place Holder for ${platforms[3].id}`,
        description: "null",
        playlistId: "null",
        channelUrl: "null",
        playlistUrl: "null",
        language: "null",
        difficulty: "null",
        duration: "null",
        subscribers: "null"
      }
    ],
    books: [
      {
        title: `Place Holder for ${platforms[3].id}`,
        author: "null",
        description: "null",
        url: "null",
        type: "null",
        pages: "null",
        level: "null",
        year: "null"
      },
    ],
    docs: [
      {
        title: `Place Holder for ${platforms[3].id}`,
        organization: "null",
        description: "null",
        url: "null",
        type: "null",
        year: "null"
      },
    ],
    about: [
      {
        title: "Kotlin",
        description: ``,
      },
    ]
  },
};

function TabNavigation({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'videos', label: 'Video Lectures', icon: Video },
    { id: 'books', label: 'Books & PDFs', icon: BookOpen },
    { id: 'docs', label: 'Official Documents', icon: FileText },
    { id: 'about', label: "Information", icon: LucideFileWarning}
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
                  ? 'border-indigo-500 text-indigo-600'
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

export default function AppDevPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("android");
  const [activeTab, setActiveTab] = useState('videos');
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectPlaylist = (playlistId: string) => {
    setSelectedPlaylist(playlistId);
  };

  useEffect(() => {
    setSelectedPlaylist(null);
    setVideos([]);
  }, [selectedPlatform]);

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

  const currentPlatform = platforms.find(p => p.id === selectedPlatform);
  const currentContent = platformContent[selectedPlatform];
  const selectedYoutuber = selectedPlaylist ? currentContent?.youtubers.find(y => y.playlistId === selectedPlaylist) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-b">
        <div>
        <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="flex items-center gap-4 mb-6">
            <BackToHome/>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              App Development Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master mobile app development with comprehensive resources for native, cross-platform, and hybrid solutions.
            </p>
            
          </div>
          <FrameworkDiffBox/>
        </div>
        
      </div>
      </header>
      <section className="py-8 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Choose your platform:</span>
            </div>
            
            <div className="min-w-[280px]">
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform.id} value={platform.id}>
                      {platform.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{currentPlatform?.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {currentPlatform?.language} • {currentPlatform?.ide}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">{currentPlatform?.description}</p>
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
                  Select a YouTuber to load their complete {currentPlatform?.name} playlist below
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentContent?.youtubers.map((youtuber, index) => (
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
                        {selectedYoutuber?.name} - {currentPlatform?.name} Course
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {isLoading ? 'Loading videos...' : `{videos.length} videos • ${selectedYoutuber?.duration}`}
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
                    Choose one of the instructors above to load their complete {currentPlatform?.name} video series
                  </p>
                </div>
              )}
            </>
          )}

          {activeTab === 'books' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">Books & PDFs</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Essential books for mastering {currentPlatform?.name} development
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentContent?.books.map((book, index) => (
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
                Authoritative references and documentation for {currentPlatform?.name} development
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentContent?.docs.map((doc, index) => (
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
              <h2 className="text-3xl font-bold text-center mb-4">{}</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Authoritative references and documentation for {currentPlatform?.name} development
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}