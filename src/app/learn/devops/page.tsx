"use client";
import { useState, useEffect } from "react";
import { ExternalLink, BookOpen, FileText, Video} from "lucide-react";
import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DocCard from "@/components/cards/DocCard";
import BookCard from "@/components/cards/BookCard";
import YoutuberCard from "@/components/cards/YoutuberCard";
import { Card, CardContent } from "@/components/ui/card";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";
import BackToHome from "@/components/buttons/backtohome";
import TabNavigation, { TabItem } from "@/components/TabNavigation";
import { devops } from "@/data/learn";
import { DefaultPlaylistCard } from "@/components/cards/DefaultTextNoPlaylist";
import CustomButton from "@/components/buttons/customButton";
const tabs: TabItem[] = [
  { id: "videos", label: "Video Tutorials", icon: Video },
  { id: "books", label: "Books & Resources", icon: BookOpen },
  { id: "docs", label: "Documentation", icon: FileText },
  { id: "platf", label: "Practice Platforms", icon: ExternalLink }
];

const learningPath = [
  {
    phase: "Foundations",
    duration: "4-6 weeks",
    topics: ["Linux", "Bash Scripting", "Networking", "Git"],
    description: "Master the fundamental skills every DevOps engineer needs",
    resources: ["Linux command line", "Shell scripting", "Git workflows"]
  },
  {
    phase: "Programming",
    duration: "6-8 weeks",
    topics: ["Python", "Go", "APIs", "Infrastructure as Code"],
    description: "Learn programming languages essential for automation and tooling",
    resources: ["Python scripting", "Go for DevOps", "REST APIs"]
  },
  {
    phase: "Containerization",
    duration: "4-5 weeks",
    topics: ["Docker", "Container Security", "Registry Management"],
    description: "Master containerization technology and best practices",
    resources: ["Docker fundamentals", "Multi-stage builds", "Security scanning"]
  },
  {
    phase: "Orchestration",
    duration: "8-10 weeks",
    topics: ["Kubernetes", "Helm", "Service Mesh", "Monitoring"],
    description: "Learn container orchestration and cluster management",
    resources: ["K8s architecture", "Deployment strategies", "Observability"]
  },
  {
    phase: "Cloud & CI/CD",
    duration: "8-12 weeks",
    topics: ["AWS/Azure/GCP", "Jenkins", "GitLab CI", "GitHub Actions"],
    description: "Master cloud platforms and continuous integration/deployment",
    resources: ["Cloud services", "Pipeline design", "Infrastructure automation"]
  }
];


export default function DevOpsPage() {
  const { youtubers, books, officialDocs, practiceResources } = devops;
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
      <header className="bg-gradient-to-r from-white to-red-50 dark:from-black dark:to-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <BackToHome/>
                    <div className="flex gap-2">
                      <CustomButton title="Start With Python" href="/learn/python"/>
                    </div>
                  </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Learn DevOps Engineering
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Master DevOps practices, tools, and methodologies with curated resources from industry experts. 
              Learn containerization, orchestration, CI/CD, and cloud technologies.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm font-medium">
                Containerization
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                Cloud Platforms
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                CI/CD Pipelines
              </span>
            </div>
          </div>
        </div>
      </header>

    


       <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Content Area */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {activeTab === 'videos' && (
            <>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-4">Choose Your Instructor</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Select a YouTuber to load their complete DevOps tutorial playlist below
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {youtubers.map((youtuber, index) => (
                    <YoutuberCard
                      key={index}
                      name={youtuber.name?? ""}
                      description={youtuber.description?? ""}
                      playlistId={youtuber.playlistId?? ""}
                      channelUrl={youtuber.channelUrl?? ""}
                      playlistUrl={youtuber.playlistUrl?? ""}
                      language={youtuber.language?? ""}
                      difficulty={youtuber.difficulty?? ""}
                      duration={youtuber.duration?? ""}
                      subscribers={youtuber.subscribers?? ""}
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
                        {selectedYoutuber?.name} - DevOps Course
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
                <DefaultPlaylistCard/>
              )}
            </>
          )}

          {activeTab === 'books' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">Books & Learning Resources</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Essential books and comprehensive resources for mastering DevOps engineering
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {books.map((book, index) => (
                  <BookCard
                    key={index?? ""}
                    title={book.title?? ""}
                    author={book.author?? ""}
                    description={book.description?? ""}
                    url={book.url?? ""}
                    type={book.type?? ""}
                    pages={book.pages?? ""}
                    level={book.level?? ""}
                    year={book.year?? ""}
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === 'docs' && (
            <>
              <h2 className="text-3xl font-bold text-center mb-4">Official Documentation</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Official documentation and authoritative resources for DevOps tools and platforms
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {officialDocs.map((doc, index) => (
                  <DocCard
                    key={index}
                    title={doc.title?? ""}
                    description={doc.description?? ""}
                    organization={doc.organization?? ""}
                    type={doc.type?? ""}
                    url={doc.url?? ""}
                    year={doc.year?? ""}
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
            Interactive platforms and tools to practice and gain experience
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
                  
                  <Link href={resource.url!} target="_blank" rel="noopener noreferrer" className="mt-4 block">
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