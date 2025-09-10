"use client";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";

import { useState, useEffect } from "react";
import { ExternalLink, BookOpen, FileText, Video, Github } from "lucide-react";
import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DocCard from "@/components/cards/DocCard";
import BookCard from "@/components/cards/BookCard";
import YoutuberCard from "@/components/cards/YoutuberCard";
import BackToHome from "@/components/buttons/backtohome";
import TabNavigation, { TabItem } from "@/components/TabNavigation";
import { DefaultPlaylistCard } from "@/components/cards/DefaultTextNoPlaylist";
import { git } from "@/data/learn";



const tabs: TabItem[] = [
    { id: 'videos', label: 'Video Tutorials', icon: Video },
    { id: 'books', label: 'Books & Guides', icon: BookOpen },
    { id: 'docs', label: 'Documentation & Resources', icon: FileText },
    { id: 'about', label: 'Information & Commands', icon: Github }
];

export default function GitGitHubPage() {
    const {youtubers, officialDocs, books} = git;
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
                    <div className="flex flex-wrap items-center gap-4 mb-6">
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
                                            key={index}  name={youtuber.name?? ""}  description={youtuber.description?? ""}  playlistId={youtuber.playlistId?? ""}  channelUrl={youtuber.channelUrl?? ""}  playlistUrl={youtuber.playlistUrl?? ""}  language={youtuber.language?? ""}  difficulty={youtuber.difficulty?? ""}  duration={youtuber.duration?? ""}  subscribers={youtuber.subscribers?? ""}  isSelected={selectedPlaylist === youtuber.playlistId}  onSelect={handleSelectPlaylist}
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
                                <DefaultPlaylistCard/>
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
                                        key={index}  title={book.title?? ""}  author={book.author?? ""}  description={book.description?? ""}  url={book.url?? ""}  type={book.type?? ""}  pages={book.pages?? ""}  level={book.level?? ""}  year={book.year?? ""}
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
                                        key={index}  title={doc.title?? ""}  description={doc.description?? ""}  organization={doc.organization?? ""}  type={doc.type?? ""}  url={doc.url?? ""}  year={doc.year?? ""}
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