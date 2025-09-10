"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ExternalLink, BookOpen, FileText, Video } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import YoutuberCard from "@/components/cards/YoutuberCard";
import BookCard from "@/components/cards/BookCard";
import DocCard from "@/components/cards/DocCard";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";
import BackToHome from "@/components/buttons/backtohome";

const youtubers = [
    {
        name: "Corey Schafer",
        description: "Practical Python tutorials covering fundamentals, web (Flask), and useful libraries.",
        playlistId: "", // add playlist id if you want auto-load
        channelUrl: "https://www.youtube.com/@CoreySchafer",
        playlistUrl: "",
        language: "English",
        difficulty: "Beginner to Intermediate",
        duration: "Varies",
        subscribers: "1M+",
        avatar: ""
    },
    {
        name: "freeCodeCamp.org",
        description: "Full-length courses and crash-courses on Python, data science and web development.",
        playlistId: "",
        channelUrl: "https://www.youtube.com/@freecodecamp",
        playlistUrl: "",
        language: "English",
        difficulty: "Beginner to Advanced",
        duration: "Many hours",
        subscribers: "10M+"
    },
    {
        name: "Tech With Tim",
        description: "Project-based Python tutorials, game dev with Pygame, and web tutorials.",
        playlistId: "",
        channelUrl: "https://www.youtube.com/@TechWithTim",
        playlistUrl: "",
        language: "English",
        difficulty: "Beginner to Intermediate",
        duration: "Varies",
        subscribers: "1M+"
    }
];

const books = [
    { title: "Automate the Boring Stuff with Python", author: "Al Sweigart", description: "Hands-on Python for practical automation tasks.", url: "#", type: "Book", pages: "300+", level: "Beginner", year: "2015" },
    { title: "Fluent Python", author: "Luciano Ramalho", description: "Deep-dive into Pythonic patterns and advanced features.", url: "#", type: "Book", pages: "700+", level: "Intermediate to Advanced", year: "2015" },
    { title: "Python Crash Course", author: "Eric Matthes", description: "Fast-paced intro with projects.", url: "#", type: "Book", pages: "500+", level: "Beginner", year: "2019" }
];

const officialDocs = [
    { title: "Python Official Documentation", organization: "Python.org", description: "Language reference and stdlib docs.", url: "https://docs.python.org/3/", type: "Official Documentation", year: "Updated" },
    { title: "PyPI", organization: "Python Packaging", description: "Package index and publishing docs.", url: "https://pypi.org/", type: "Package Index", year: "Updated" },
    { title: "PEPs", organization: "Python.org", description: "Design docs and standards.", url: "https://peps.python.org/", type: "Standards", year: "Updated" }
];

function Tabs({ active, setActive }: { active: string; setActive: (s: string) => void }) {
    const tabs = [
        { id: "videos", label: "Video Lectures", icon: Video },
        { id: "books", label: "Books & PDFs", icon: BookOpen },
        { id: "docs", label: "Official Docs", icon: FileText }
    ];
    return (
        <div className="border-b bg-background">
            <div className="max-w-6xl mx-auto px-4">
                <nav className="flex space-x-8">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setActive(t.id)}
                            className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${active === t.id ? "border-indigo-500 text-indigo-600" : "border-transparent text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <t.icon className="w-4 h-4" />
                            {t.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default function LearnPythonPage() {
    const [activeTab, setActiveTab] = useState("videos");
    const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
    const [videos, setVideos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (selectedPlaylist) {
            setIsLoading(true);
            getPlaylistItemsClient(selectedPlaylist)
                .then((res) => setVideos(res))
                .catch((e) => {
                    console.error(e);
                    setVideos([]);
                })
                .finally(() => setIsLoading(false));
        } else {
            setVideos([]);
        }
    }, [selectedPlaylist]);

    const selectedYoutuber = selectedPlaylist ? youtubers.find((y) => y.playlistId === selectedPlaylist) : null;

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <header className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-b">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <BackToHome />
                            <Link href="/learn/cv"><Button size="sm" variant="ghost">CV & Resume →</Button></Link>
                        </div>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-4">Learn Python</h1>
                        <p className="text-lg text-muted-foreground mb-6">Resources for core Python, web, data science, and automation.</p>
                    </div>
                </div>
            </header>

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Python Learning Tracks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-background rounded-lg border"><h3 className="font-semibold mb-2">Core Python</h3><p className="text-sm text-muted-foreground">Syntax, data structures, OOP, stdlib.</p></div>
                        <div className="p-6 bg-background rounded-lg border"><h3 className="font-semibold mb-2">Web Development</h3><p className="text-sm text-muted-foreground">Flask/Django, REST APIs, deployment.</p></div>
                        <div className="p-6 bg-background rounded-lg border"><h3 className="font-semibold mb-2">Data Science</h3><p className="text-sm text-muted-foreground">NumPy, Pandas, scikit-learn basics.</p></div>
                        <div className="p-6 bg-background rounded-lg border"><h3 className="font-semibold mb-2">Automation</h3><p className="text-sm text-muted-foreground">Scripting, scraping, CLI tools.</p></div>
                    </div>
                </div>
            </section>

            <Tabs active={activeTab} setActive={setActiveTab} />

            <main className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {activeTab === "videos" && (
                        <>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-center mb-4">Choose Your Instructor</h2>
                                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Select a YouTuber to load their Python playlist below</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                    {youtubers.map((y, i) => (
                                        <YoutuberCard key={i} {...y} isSelected={selectedPlaylist === y.playlistId} onSelect={(id) => setSelectedPlaylist(id)} />
                                    ))}
                                </div>
                            </div>

                            {selectedPlaylist && (
                                <div className="border-t pt-12">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold">{selectedYoutuber?.name} - Python Course</h3>
                                            <p className="text-muted-foreground mt-2">{isLoading ? "Loading videos..." : `${videos.length} videos • ${selectedYoutuber?.duration}`}</p>
                                        </div>
                                        <Link href={selectedYoutuber?.playlistUrl || "#"} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline"><ExternalLink className="w-4 h-4 mr-2" />View on YouTube</Button>
                                        </Link>
                                    </div>

                                    {isLoading ? (
                                        <div className="text-center py-8"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto" /><p className="text-muted-foreground mt-4">Loading playlist videos...</p></div>
                                    ) : (
                                        <VideoGallery videos={videos} />
                                    )}
                                </div>
                            )}

                            {!selectedPlaylist && (
                                <div className="text-center py-16 border-t">
                                    <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Select a Playlist to Get Started</h3>
                                    <p className="text-muted-foreground">Choose an instructor above to load their Python video series</p>
                                </div>
                            )}
                        </>
                    )}

                    {activeTab === "books" && (
                        <>
                            <h2 className="text-3xl font-bold text-center mb-4">Books & PDFs</h2>
                            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Essential books for mastering Python</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {books.map((b, i) => <BookCard key={i} {...b} />)}
                            </div>
                        </>
                    )}

                    {activeTab === "docs" && (
                        <>
                            <h2 className="text-3xl font-bold text-center mb-4">Official Documentation</h2>
                            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Authoritative references for Python</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {officialDocs.map((d, i) => <DocCard key={i} {...d} />)}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
