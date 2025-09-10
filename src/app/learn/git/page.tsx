"use client";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";

import { useState, useEffect } from "react";
import { ChevronLeft, ExternalLink, BookOpen, FileText, Video, Github } from "lucide-react";
import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DocCard from "@/components/cards/DocCard";
import BookCard from "@/components/cards/BookCard";
import YoutuberCard from "@/components/cards/YoutuberCard";
import BackToHome from "@/components/buttons/backtohome";
import TabNavigation, { TabItem } from "@/components/TabNavigation";

const youtubers = [
    {
        name: "Kunal Kushwaha",
        description: "Complete Git and GitHub tutorial covering version control, branching, collaboration, and open source contribution.",
        playlistId: "PLyzOVJj3bHQuloKGG59rS43e29ro7I57J",
        channelUrl: "https://www.youtube.com/@KunalKushwaha",
        playlistUrl: "https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J",
        language: "English",
        difficulty: "Beginner to Intermediate",
        duration: "~4 hours",
        subscribers: "394K"
    },
    {
        name: "Programming with Mosh",
        description: "Comprehensive Git tutorial covering essential commands, workflows, and best practices for developers.",
        playlistId: "PLTjRvDozrdlzukFVnlZ9RLMfgABTEA6cj",
        channelUrl: "https://www.youtube.com/@programmingwithmosh",
        playlistUrl: "https://www.youtube.com/playlist?list=PLTjRvDozrdlzukFVnlZ9RLMfgABTEA6cj",
        language: "English",
        difficulty: "Beginner",
        duration: "~3 hours",
        subscribers: "3.2M"
    },
    {
        name: "Traversy Media",
        description: "Git crash course covering basic commands, GitHub workflow, and practical version control for web developers.",
        playlistId: "PLillGF-RfqbYZty73_PHBqKRDnv7ikh68",
        channelUrl: "https://www.youtube.com/@TraversyMedia",
        playlistUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68",
        language: "English",
        difficulty: "Beginner",
        duration: "~2 hours",
        subscribers: "2.2M"
    },
    {
        name: "Corey Schafer",
        description: "In-depth Git tutorials covering advanced topics, workflows, and collaboration techniques for professional development.",
        playlistId: "PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx",
        channelUrl: "https://www.youtube.com/@coreyms",
        playlistUrl: "https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx",
        language: "English",
        difficulty: "Intermediate to Advanced",
        duration: "~6 hours",
        subscribers: "1.1M"
    }
];

const books = [
    {
        title: "Pro Git",
        author: "Scott Chacon & Ben Straub",
        description: "The official Git book covering everything from basics to advanced Git internals. Available for free online.",
        url: "https://git-scm.com/book",
        type: "PDF/Web",
        pages: "574 pages",
        level: "Beginner to Advanced",
        year: "2023"
    },
    {
        title: "Learn Git in a Month of Lunches",
        author: "Rick Umali",
        description: "Practical approach to learning Git with daily lessons covering essential version control concepts.",
        url: "#",
        type: "PDF",
        pages: "376 pages",
        level: "Beginner to Intermediate",
        year: "2015"
    },
    {
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        description: "Concise reference guide covering Git commands, workflows, and troubleshooting common issues.",
        url: "#",
        type: "PDF",
        pages: "234 pages",
        level: "Intermediate",
        year: "2013"
    },
    {
        title: "Version Control with Git",
        author: "Jon Loeliger & Matthew McCullough",
        description: "Comprehensive guide to Git covering distributed version control, branching strategies, and collaboration.",
        url: "#",
        type: "PDF",
        pages: "456 pages",
        level: "Intermediate to Advanced",
        year: "2012"
    },
    {
        title: "GitHub Essentials",
        author: "Achilleas Pipinellis",
        description: "Complete guide to GitHub covering repositories, pull requests, issues, and project management features.",
        url: "#",
        type: "PDF",
        pages: "168 pages",
        level: "Beginner to Intermediate",
        year: "2018"
    }
];

const officialDocs = [
    {
        title: "Git Documentation",
        organization: "Git SCM",
        description: "Official Git documentation covering all commands, configuration options, and advanced usage patterns.",
        url: "https://git-scm.com/docs",
        type: "Official Documentation",
        year: "Updated"
    },
    {
        title: "GitHub Docs",
        organization: "GitHub",
        description: "Comprehensive GitHub documentation covering repositories, actions, pages, and collaboration features.",
        url: "https://docs.github.com/",
        type: "Platform Documentation",
        year: "Updated"
    },
    {
        title: "Git Reference Manual",
        organization: "Git Community",
        description: "Complete reference manual for all Git commands with detailed usage examples and options.",
        url: "https://git-scm.com/docs/git",
        type: "Reference Manual",
        year: "Updated"
    },
    {
        title: "Atlassian Git Tutorials",
        organization: "Atlassian",
        description: "Comprehensive Git tutorials covering workflows, commands, and best practices for teams.",
        url: "https://www.atlassian.com/git/tutorials",
        type: "Tutorial Series",
        year: "2024"
    },
    {
        title: "GitHub Skills",
        organization: "GitHub",
        description: "Interactive learning platform for Git and GitHub with hands-on exercises and projects.",
        url: "https://skills.github.com/",
        type: "Interactive Learning",
        year: "2024"
    },
    {
        title: "Git Branching Model",
        organization: "Vincent Driessen",
        description: "Popular Git workflow model for managing feature branches, releases, and hotfixes.",
        url: "https://nvie.com/posts/a-successful-git-branching-model/",
        type: "Workflow Guide",
        year: "2010"
    }
];

const tabs: TabItem[] = [
    { id: 'videos', label: 'Video Tutorials', icon: Video },
    { id: 'books', label: 'Books & Guides', icon: BookOpen },
    { id: 'docs', label: 'Documentation & Resources', icon: FileText },
    { id: 'about', label: 'Information & Commands', icon: Github }
];

export default function GitGitHubPage() {
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
            <header className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950 border-b">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="flex items-center gap-4 mb-6">
                        <BackToHome />
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-4">
                            Learn Git & GitHub
                        </h1>
                        <p className="text-lg text-muted-foreground mb-6">
                            Master version control, collaboration, and open source contribution with comprehensive Git and GitHub tutorials
                            from industry experts and experienced developers.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                                Version Control
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                                Collaboration
                            </span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
                                Open Source
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Master Git & GitHub</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-background rounded-lg border">
                            <h3 className="font-semibold mb-2">Version Control</h3>
                            <p className="text-sm text-muted-foreground">
                                Track changes, manage versions, and maintain project history
                            </p>
                        </div>
                        <div className="p-6 bg-background rounded-lg border">
                            <h3 className="font-semibold mb-2">Branching & Merging</h3>
                            <p className="text-sm text-muted-foreground">
                                Feature branches, merge strategies, and conflict resolution
                            </p>
                        </div>
                        <div className="p-6 bg-background rounded-lg border">
                            <h3 className="font-semibold mb-2">Collaboration</h3>
                            <p className="text-sm text-muted-foreground">
                                Pull requests, code reviews, and team workflows
                            </p>
                        </div>
                        <div className="p-6 bg-background rounded-lg border">
                            <h3 className="font-semibold mb-2">Open Source</h3>
                            <p className="text-sm text-muted-foreground">
                                Contributing to projects, issues, and community involvement
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

            <main className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {activeTab === 'videos' && (
                        <>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-center mb-4">Choose Your Instructor</h2>
                                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                                    Select a YouTuber to load their complete Git & GitHub tutorial playlist below
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
                                                {selectedYoutuber?.name} - Git & GitHub Course
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
                                        Choose one of the instructors above to load their complete Git & GitHub tutorial series
                                    </p>
                                </div>
                            )}
                        </>
                    )}

                    {activeTab === 'books' && (
                        <>
                            <h2 className="text-3xl font-bold text-center mb-4">Books & Guides</h2>
                            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                                Essential books and guides for mastering Git version control and GitHub collaboration
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
                            <h2 className="text-3xl font-bold text-center mb-4">Documentation & Resources</h2>
                            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                                Official documentation, tutorials, and community resources for Git and GitHub
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
                            {/* <div> */}
                            <div>
                                <div className="max-w-6xl mx-auto px-4">
                                    <h2 className="text-3xl font-bold text-center mb-8">Essential Git Commands</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="p-6 bg-background rounded-lg border">

                                            <h3 className="font-semibold mb-4 text-green-600">Basic Commands</h3>
                                            <div className="space-y-2 text-sm font-mono">
                                                <div><span className="text-muted-foreground">git init</span></div>
                                                <div><span className="text-muted-foreground">git add .</span></div>
                                                <div><span className="text-muted-foreground">git commit -m "message"</span></div>
                                                <div><span className="text-muted-foreground">git status</span></div>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-background rounded-lg border">
                                            <h3 className="font-semibold mb-4 text-blue-600">Branching</h3>
                                            <div className="space-y-2 text-sm font-mono">
                                                <div><span className="text-muted-foreground">git branch</span></div>
                                                <div><span className="text-muted-foreground">git checkout -b branch-name</span></div>
                                                <div><span className="text-muted-foreground">git merge branch-name</span></div>
                                                <div><span className="text-muted-foreground">git branch -d branch-name</span></div>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-background rounded-lg border">
                                            <h3 className="font-semibold mb-4 text-purple-600">Remote Operations</h3>
                                            <div className="space-y-2 text-sm font-mono">
                                                <div><span className="text-muted-foreground">git clone url</span></div>
                                                <div><span className="text-muted-foreground">git push origin main</span></div>
                                                <div><span className="text-muted-foreground">git pull origin main</span></div>
                                                <div><span className="text-muted-foreground">git remote -v</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div />
                        </>
                    )}
                </div>
            </main>

            {/* Quick Commands Reference */}
            <section className="py-16 bg-muted/30">

            </section>
        </div>
    );
}