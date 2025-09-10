"use client";
import { useState, useEffect } from "react";
import { ExternalLink, BookOpen, FileText, Video, GitBranch, Cloud, Container, Settings, Code2 } from "lucide-react";
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
const tabs: TabItem[] = [
  { id: "videos", label: "Video Tutorials", icon: Video },
  { id: "books", label: "Books & Resources", icon: BookOpen },
  { id: "docs", label: "Documentation", icon: FileText },
];
const youtubers = [
  {
    name: "TechWorld with Nana",
    description: "Comprehensive DevOps tutorials covering Docker, Kubernetes, CI/CD, and cloud technologies with practical examples.",
    playlistId: "PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb",
    channelUrl: "https://www.youtube.com/@TechWorldwithNana",
    playlistUrl: "https://www.youtube.com/playlist?list=PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb",
    language: "English",
    difficulty: "Beginner to Advanced",
    duration: "~15 hours",
    subscribers: "1.1M"
  },
  {
    name: "Hitesh Choudhary",
    description: "Complete Go programming course perfect for DevOps engineers learning infrastructure automation and tooling.",
    playlistId: "PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
    channelUrl: "https://www.youtube.com/@HiteshChoudharydotcom",
    playlistUrl: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
    language: "Hindi/English",
    difficulty: "Beginner",
    duration: "~12 hours",
    subscribers: "1.3M"
  },
  {
    name: "Cloud Native DevOps",
    description: "Jenkins CI/CD pipeline tutorials covering automation, deployment strategies, and DevOps best practices.",
    playlistId: "PL6XT0grm_Tfi21F8O0TvHmb78P2uEmhDq",
    channelUrl: "https://www.youtube.com/@CloudNativeDevOps",
    playlistUrl: "https://www.youtube.com/playlist?list=PL6XT0grm_Tfi21F8O0TvHmb78P2uEmhDq",
    language: "English",
    difficulty: "Intermediate",
    duration: "~8 hours",
    subscribers: "156K"
  },
  {
    name: "DevOps Journey",
    description: "Kubernetes deep dive tutorials covering cluster management, deployments, and production best practices.",
    playlistId: "PLxzKY3wu0_FJdJd3IKv5BUtda8rtNpOvx",
    channelUrl: "https://www.youtube.com/@DevOpsJourney",
    playlistUrl: "https://www.youtube.com/playlist?list=PLxzKY3wu0_FJdJd3IKv5BUtda8rtNpOvx",
    language: "English",
    difficulty: "Intermediate to Advanced",
    duration: "~20 hours",
    subscribers: "425K"
  }
];

const books = [
  {
    title: "The DevOps Handbook",
    author: "Gene Kim, Jez Humble, Patrick Debois",
    description: "Comprehensive guide to transforming your organization through DevOps practices and cultural change.",
    url: "#",
    type: "PDF",
    pages: "480 pages",
    level: "All Levels",
    year: "2021"
  },
  {
    title: "90 Days of DevOps",
    author: "Michael Cade",
    description: "Free comprehensive DevOps learning journey covering all essential tools and practices. Available on GitHub.",
    url: "https://github.com/MichaelCade/90DaysOfDevOps",
    type: "GitHub Repository",
    pages: "90 Days Course",
    level: "Beginner to Advanced",
    year: "2024"
  },
  {
    title: "Docker Deep Dive",
    author: "Nigel Poulton",
    description: "Complete guide to Docker containerization covering development, deployment, and orchestration.",
    url: "#",
    type: "PDF",
    pages: "368 pages",
    level: "Beginner to Intermediate",
    year: "2023"
  },
  {
    title: "Kubernetes in Action",
    author: "Marko Lukša",
    description: "Comprehensive Kubernetes guide covering deployment, scaling, and management of containerized applications.",
    url: "#",
    type: "PDF",
    pages: "624 pages",
    level: "Intermediate to Advanced",
    year: "2022"
  },
  {
    title: "Site Reliability Engineering",
    author: "Google SRE Team",
    description: "Google's approach to production systems, monitoring, and maintaining reliable services at scale.",
    url: "https://sre.google/books/",
    type: "Free Online",
    pages: "550 pages",
    level: "Advanced",
    year: "2023"
  }
];

const officialDocs = [
  {
    title: "DevOps Roadmap",
    organization: "roadmap.sh",
    description: "Comprehensive DevOps learning path covering all essential technologies, tools, and practices for 2024.",
    url: "https://roadmap.sh/devops",
    type: "Learning Roadmap",
    year: "2024"
  },
  {
    title: "Docker Documentation",
    organization: "Docker Inc.",
    description: "Official Docker documentation covering containerization, orchestration, and deployment strategies.",
    url: "https://docs.docker.com/",
    type: "Official Documentation",
    year: "Updated"
  },
  {
    title: "Kubernetes Documentation",
    organization: "CNCF",
    description: "Official Kubernetes documentation with comprehensive guides for container orchestration.",
    url: "https://kubernetes.io/docs/",
    type: "Official Documentation",
    year: "Updated"
  },
  {
    title: "AWS Documentation",
    organization: "Amazon Web Services",
    description: "Complete AWS cloud services documentation covering compute, storage, networking, and DevOps tools.",
    url: "https://docs.aws.amazon.com/",
    type: "Cloud Documentation",
    year: "Updated"
  },
  {
    title: "Jenkins Documentation",
    organization: "Jenkins Project",
    description: "Official Jenkins CI/CD documentation covering pipeline creation, plugins, and automation.",
    url: "https://www.jenkins.io/doc/",
    type: "CI/CD Documentation",
    year: "Updated"
  },
  {
    title: "Terraform Documentation",
    organization: "HashiCorp",
    description: "Infrastructure as Code documentation covering provisioning and managing cloud resources.",
    url: "https://developer.hashicorp.com/terraform/docs",
    type: "IaC Documentation",
    year: "Updated"
  }
];

const practiceResources = [
  {
    name: "KodeKloud",
    description: "Hands-on labs for Kubernetes, Docker, and cloud technologies with CKA/CKAD certification prep.",
    url: "https://kodekloud.com/",
    type: "Interactive Labs",
    icon: Container
  },
  {
    name: "Killer.sh",
    description: "Kubernetes certification practice exams and challenging scenarios for CKA, CKAD, and CKS prep.",
    url: "https://killer.sh/",
    type: "Practice Exams",
    icon: Settings
  },
  {
    name: "Gophercises",
    description: "Go programming exercises perfect for DevOps engineers learning automation and tooling development.",
    url: "https://gophercises.com/",
    type: "Coding Practice",
    icon: Code2
  },
  {
    name: "AWS Free Tier",
    description: "Free AWS resources to practice cloud services, EC2, S3, Lambda, and other DevOps tools.",
    url: "https://aws.amazon.com/free/",
    type: "Cloud Practice",
    icon: Cloud
  }
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
      <header className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex items-center gap-4 mb-6">
                    <BackToHome/>
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

      {/* Learning Path */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">DevOps Learning Path</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Follow this structured path to become a proficient DevOps engineer
          </p>
          
          <div className="space-y-6">
            {learningPath.map((phase, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full font-bold text-lg">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">{phase.phase}</h3>
                        <span className="text-sm text-muted-foreground">{phase.duration}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Core Topics:</h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.topics.map((topic, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-muted rounded-full">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Key Resources:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {phase.resources.map((resource, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                                {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Hands-on Practice</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Practice makes perfect. Use these platforms to get hands-on experience
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
                  Select a YouTuber to load their complete DevOps tutorial playlist below
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
                <div className="text-center py-16 border-t">
                  <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select a Playlist to Get Started</h3>
                  <p className="text-muted-foreground">
                    Choose one of the instructors above to load their complete DevOps tutorial series
                  </p>
                </div>
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
                Official documentation and authoritative resources for DevOps tools and platforms
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