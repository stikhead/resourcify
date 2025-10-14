"use client";

import { useState, useEffect } from "react";
import { Globe, Layers, ExternalLink, BookOpen, FileText, Video, FileWarning } from "lucide-react";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { getPlaylistItemsClient } from "@/lib/clientYoutube";
import YoutuberCard from "@/components/cards/YoutuberCard";
import VideoGallery from "@/components/VideoGallery";
import BookCard from "@/components/cards/BookCard";
import DocCard from "@/components/cards/DocCard";
import WebFrameworkDiffBox from "@/components/cards/WebFrameWorkCard";
import BackToHome from "@/components/buttons/backtohome";
import CustomButton from "@/components/buttons/customButton";
import TabNavigation, { TabItem } from "@/components/TabNavigation";
import { DefaultPlaylistCard } from "@/components/cards/DefaultTextNoPlaylist";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";

// Type definitions
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

interface AboutFramework {
    title: string;
    description: string;
}

interface PlatformContent {
    youtubers: Youtuber[];
    books: Book[];
    docs: OfficialDoc[];
    about: AboutFramework[];
}


const platforms: Platform[] = [
    {
        id: "react",
        name: "React.js",
        language: "JavaScript/TypeScript",
        ide: "VS Code / WebStorm",
        description: "Build modern, interactive user interfaces with React. Master component-based architecture, hooks, state management, and the entire React ecosystem for scalable web applications."
    },
    {
        id: "vue",
        name: "Vue.js",
        language: "JavaScript/TypeScript",
        ide: "VS Code / WebStorm",
        description: "Create progressive web applications with Vue.js. Learn the approachable framework that combines the best of React and Angular with an intuitive template syntax and excellent developer experience."
    },
    {
        id: "angular",
        name: "Angular",
        language: "TypeScript",
        ide: "VS Code / WebStorm",
        description: "Develop enterprise-scale applications with Angular. Master TypeScript, dependency injection, RxJS, and Angular's opinionated architecture for building robust, maintainable web applications."
    },
    {
        id: "nextjs",
        name: "Next.js",
        language: "JavaScript/TypeScript",
        ide: "VS Code / WebStorm",
        description: "Build full-stack React applications with Next.js. Learn server-side rendering, static site generation, API routes, and advanced optimizations for production-ready web applications."
    }
];

const platformContent: Record<string, PlatformContent> = {
    react: {
        youtubers: [
            {
                name: "React - The Complete Guide",
                description: "Comprehensive React course covering hooks, context, Redux, and modern React patterns for building production applications.",
                playlistId: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
                channelUrl: "https://www.youtube.com/@NetNinja",
                playlistUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
                language: "English",
                difficulty: "Beginner to Advanced",
                duration: "~20 hours",
                subscribers: "1.1M"
            },
            {
                name: "React Tutorial Series",
                description: "Modern React development with hooks, custom hooks, context API, and best practices for scalable applications.",
                playlistId: "PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK",
                channelUrl: "https://www.youtube.com/@WebDevSimplified",
                playlistUrl: "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK",
                language: "English",
                difficulty: "Intermediate",
                duration: "~15 hours",
                subscribers: "1.2M"
            },
            {
                name: "React Crash Course",
                description: "Fast-paced introduction to React fundamentals, perfect for developers transitioning from other frameworks.",
                playlistId: "PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb",
                channelUrl: "https://www.youtube.com/@TraversyMedia",
                playlistUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb",
                language: "English",
                difficulty: "Beginner",
                duration: "~12 hours",
                subscribers: "1.8M"
            }
        ],
        books: [
            {
                title: "Learning React: Modern Patterns for Developing React Apps",
                author: "Alex Banks & Eve Porcello",
                description: "Comprehensive guide to modern React development with hooks, context, and advanced patterns.",
                url: "#",
                type: "PDF",
                pages: "350 pages",
                level: "Intermediate",
                year: "2020"
            },
            {
                title: "React: Up & Running",
                author: "Stoyan Stefanov",
                description: "Practical guide to building user interfaces with React, covering JSX, components, and state management.",
                url: "#",
                type: "PDF",
                pages: "222 pages",
                level: "Beginner to Intermediate",
                year: "2021"
            },
            {
                title: "Fullstack React: The Complete Guide",
                author: "Anthony Accomazzo & Nate Murray",
                description: "Complete resource for learning React from basics to advanced topics with real-world projects.",
                url: "#",
                type: "PDF",
                pages: "836 pages",
                level: "Beginner to Advanced",
                year: "2022"
            }
        ],
        docs: [
            {
                title: "React Official Documentation",
                organization: "Meta",
                description: "Official React documentation with comprehensive guides, API references, and best practices.",
                url: "https://react.dev/",
                type: "Official Documentation",
                year: "2024"
            },
            {
                title: "React DevTools",
                organization: "Meta",
                description: "Browser extension for debugging React applications with component tree inspection and performance profiling.",
                url: "https://react.dev/learn/react-developer-tools",
                type: "Development Tools",
                year: "2024"
            },
            {
                title: "Create React App",
                organization: "Meta",
                description: "Official toolchain for creating React applications with zero configuration and modern build setup.",
                url: "https://create-react-app.dev/",
                type: "Development Tooling",
                year: "2024"
            }
        ],
        about: [
            {
                title: "React.js",
                description: "React is a JavaScript library for building user interfaces, particularly web applications. Developed by Meta (Facebook), React uses a component-based architecture where UIs are broken down into reusable components. Key features include the virtual DOM for efficient updates, JSX syntax that combines HTML with JavaScript, hooks for state management and lifecycle methods, and a unidirectional data flow. React's ecosystem includes tools like Redux for state management, React Router for navigation, and Next.js for full-stack applications. It's widely adopted by companies like Netflix, Airbnb, and Instagram for building scalable, maintainable user interfaces."
            }
        ]
    },
    vue: {
        youtubers: [
            {
                name: "Vue.js Complete Course",
                description: "Comprehensive Vue.js tutorial covering Vue 3, Composition API, Vuex, and Vue Router for modern web development.",
                playlistId: "PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1",
                channelUrl: "https://www.youtube.com/@NetNinja",
                playlistUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1",
                language: "English",
                difficulty: "Beginner to Advanced",
                duration: "~18 hours",
                subscribers: "1.1M"
            },
            {
                name: "Vue 3 Tutorial Series",
                description: "Modern Vue.js development with Vue 3, covering composition API, reactive data, and component architecture.",
                playlistId: "PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f",
                channelUrl: "https://www.youtube.com/@Codevolution",
                playlistUrl: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f",
                language: "English",
                difficulty: "Intermediate",
                duration: "~14 hours",
                subscribers: "800K"
            },
            {
                name: "Vue.js Crash Course",
                description: "Fast introduction to Vue.js fundamentals, perfect for developers coming from other JavaScript frameworks.",
                playlistId: "PLillGF-RfqbYeckUaD1z6nviTp31GLTH8",
                channelUrl: "https://www.youtube.com/@TraversyMedia",
                playlistUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8",
                language: "English",
                difficulty: "Beginner",
                duration: "~10 hours",
                subscribers: "1.8M"
            }
        ],
        books: [
            {
                title: "Vue.js: Up and Running",
                author: "Callum Macrae",
                description: "Practical guide to building modern web applications with Vue.js, covering components, routing, and state management.",
                url: "#",
                type: "PDF",
                pages: "190 pages",
                level: "Beginner to Intermediate",
                year: "2018"
            },
            {
                title: "Vue.js 3 Cookbook",
                author: "Heitor Ramon Ribeiro",
                description: "Collection of practical recipes for building Vue.js applications with modern patterns and best practices.",
                url: "#",
                type: "PDF",
                pages: "562 pages",
                level: "Intermediate to Advanced",
                year: "2020"
            },
            {
                title: "Testing Vue.js Applications",
                author: "Edd Yerburgh",
                description: "Comprehensive guide to testing Vue.js applications with unit tests, integration tests, and end-to-end testing.",
                url: "#",
                type: "PDF",
                pages: "280 pages",
                level: "Advanced",
                year: "2019"
            }
        ],
        docs: [
            {
                title: "Vue.js Official Documentation",
                organization: "Vue Team",
                description: "Official Vue.js documentation with guides, API reference, and examples for Vue 3 development.",
                url: "https://vuejs.org/guide/",
                type: "Official Documentation",
                year: "2024"
            },
            {
                title: "Vue Router Documentation",
                organization: "Vue Team",
                description: "Official routing library for Vue.js with documentation for single-page application navigation.",
                url: "https://router.vuejs.org/",
                type: "Library Documentation",
                year: "2024"
            },
            {
                title: "Vuex State Management",
                organization: "Vue Team",
                description: "Centralized state management pattern and library for Vue.js applications.",
                url: "https://vuex.vuejs.org/",
                type: "State Management",
                year: "2024"
            }
        ],
        about: [
            {
                title: "Vue.js",
                description: "Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications. Created by Evan You, Vue is designed to be incrementally adoptable, meaning you can use it for small parts of a project or build entire applications with it. Key features include reactive data binding, component-based architecture, template syntax that's easy to learn, the Composition API for better code organization, and excellent developer tools. Vue strikes a balance between React's flexibility and Angular's structure, making it beginner-friendly while still powerful for complex applications. It's used by companies like GitLab, Adobe, and BMW for building modern web interfaces."
            }
        ]
    },
    angular: {
        youtubers: [
            {
                name: "Angular Complete Course",
                description: "Comprehensive Angular tutorial covering TypeScript, components, services, routing, and advanced Angular concepts.",
                playlistId: "PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF",
                channelUrl: "https://www.youtube.com/@programmingwithmosh",
                playlistUrl: "https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF",
                language: "English",
                difficulty: "Beginner to Advanced",
                duration: "~25 hours",
                subscribers: "3.1M"
            },
            {
                name: "Angular Tutorial Series",
                description: "Modern Angular development covering the latest features, best practices, and enterprise application patterns.",
                playlistId: "PLC3y8-rFHvwhBRAgFinJR8-2P96HkQ6M0",
                channelUrl: "https://www.youtube.com/@Codevolution",
                playlistUrl: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwhBRAgFinJR8-2P96HkQ6M0",
                language: "English",
                difficulty: "Intermediate",
                duration: "~20 hours",
                subscribers: "800K"
            },
            {
                name: "Angular Crash Course",
                description: "Fast-paced introduction to Angular fundamentals for developers familiar with JavaScript and TypeScript.",
                playlistId: "PLillGF-RfqbZllkgxcKp7G5z_drBs-8nn",
                channelUrl: "https://www.youtube.com/@TraversyMedia",
                playlistUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbZllkgxcKp7G5z_drBs-8nn",
                language: "English",
                difficulty: "Beginner",
                duration: "~12 hours",
                subscribers: "1.8M"
            }
        ],
        books: [
            {
                title: "Angular: Up and Running",
                author: "Shyam Seshadri",
                description: "Practical guide to building scalable web applications with Angular, covering architecture and best practices.",
                url: "#",
                type: "PDF",
                pages: "300 pages",
                level: "Intermediate",
                year: "2018"
            },
            {
                title: "Pro Angular",
                author: "Adam Freeman",
                description: "Comprehensive guide to professional Angular development with advanced patterns and real-world examples.",
                url: "#",
                type: "PDF",
                pages: "680 pages",
                level: "Advanced",
                year: "2020"
            },
            {
                title: "Angular Design Patterns",
                author: "Mathieu Nayrolles",
                description: "Learn design patterns and architectural approaches for building maintainable Angular applications.",
                url: "#",
                type: "PDF",
                pages: "180 pages",
                level: "Advanced",
                year: "2018"
            }
        ],
        docs: [
            {
                title: "Angular Documentation",
                organization: "Google",
                description: "Official Angular documentation with comprehensive guides, tutorials, and API reference for Angular development.",
                url: "https://angular.io/docs",
                type: "Official Documentation",
                year: "2024"
            },
            {
                title: "Angular CLI",
                organization: "Google",
                description: "Command-line interface for Angular development with project scaffolding, building, and testing tools.",
                url: "https://angular.io/cli",
                type: "Development Tools",
                year: "2024"
            },
            {
                title: "RxJS Documentation",
                organization: "ReactiveX",
                description: "Reactive programming library used extensively in Angular for handling asynchronous operations.",
                url: "https://rxjs.dev/guide/overview",
                type: "Library Documentation",
                year: "2024"
            }
        ],
        about: [
            {
                title: "Angular",
                description: "Angular is a TypeScript-based framework for building scalable web applications and single-page applications (SPAs). Developed and maintained by Google, Angular provides a complete solution with a powerful CLI, dependency injection system, declarative templates, and a component-based architecture. Key features include two-way data binding, powerful directives, services and dependency injection, RxJS for reactive programming, and a comprehensive testing framework. Angular is opinionated and provides structure for large-scale applications, making it popular for enterprise development. Companies like Microsoft, Deutsche Bank, and Samsung use Angular for building complex, maintainable web applications."
            }
        ]
    },
    nextjs: {
        youtubers: [
            {
                name: "Next.js Complete Tutorial",
                description: "Full Next.js course covering SSG, SSR, API routes, dynamic routing, and deployment for production applications.",
                playlistId: "PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH",
                channelUrl: "https://www.youtube.com/@Codevolution",
                playlistUrl: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH",
                language: "English",
                difficulty: "Intermediate to Advanced",
                duration: "~22 hours",
                subscribers: "800K"
            },
            {
                name: "Next.js Tutorial Series",
                description: "Modern Next.js development with App Router, Server Components, and full-stack application patterns.",
                playlistId: "PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw",
                channelUrl: "https://www.youtube.com/@NetNinja",
                playlistUrl: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw",
                language: "English",
                difficulty: "Intermediate",
                duration: "~18 hours",
                subscribers: "1.1M"
            },
            {
                name: "Next.js Crash Course",
                description: "Fast introduction to Next.js for React developers, covering routing, data fetching, and deployment.",
                playlistId: "PLillGF-RfqbYisLa-rLw1-D-1b4wGJO8V",
                channelUrl: "https://www.youtube.com/@TraversyMedia",
                playlistUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbYisLa-rLw1-D-1b4wGJO8V",
                language: "English",
                difficulty: "Beginner to Intermediate",
                duration: "~14 hours",
                subscribers: "1.8M"
            }
        ],
        books: [
            {
                title: "Real-World Next.js",
                author: "Michele Riva",
                description: "Practical guide to building production-ready applications with Next.js, covering performance and deployment.",
                url: "#",
                type: "PDF",
                pages: "270 pages",
                level: "Intermediate to Advanced",
                year: "2022"
            },
            {
                title: "Next.js Quick Start Guide",
                author: "Kirill Konshin",
                description: "Fast-paced introduction to Next.js for developers wanting to quickly build React applications with SSR.",
                url: "#",
                type: "PDF",
                pages: "170 pages",
                level: "Beginner to Intermediate",
                year: "2021"
            },
            {
                title: "Full-Stack React Projects",
                author: "Shama Hoque",
                description: "Build complete applications using React, Next.js, and modern full-stack development practices.",
                url: "#",
                type: "PDF",
                pages: "470 pages",
                level: "Advanced",
                year: "2020"
            }
        ],
        docs: [
            {
                title: "Next.js Documentation",
                organization: "Vercel",
                description: "Official Next.js documentation with guides for App Router, Pages Router, and advanced features.",
                url: "https://nextjs.org/docs",
                type: "Official Documentation",
                year: "2024"
            },
            {
                title: "Vercel Platform Docs",
                organization: "Vercel",
                description: "Deployment platform documentation for hosting Next.js applications with automatic optimizations.",
                url: "https://vercel.com/docs",
                type: "Platform Documentation",
                year: "2024"
            },
            {
                title: "Next.js Examples",
                organization: "Vercel",
                description: "Collection of example Next.js projects demonstrating various patterns and integrations.",
                url: "https://github.com/vercel/next.js/tree/canary/examples",
                type: "Code Examples",
                year: "2024"
            }
        ],
        about: [
            {
                title: "Next.js",
                description: "Next.js is a React framework that provides infrastructure and developer experience for production-ready web applications. Created by Vercel, Next.js extends React with features like server-side rendering (SSR), static site generation (SSG), API routes, automatic code splitting, and built-in performance optimizations. Key features include the App Router for modern routing patterns, Server Components for improved performance, automatic image optimization, built-in CSS support, and seamless deployment integration. Next.js is ideal for building everything from static websites to complex web applications, and it's used by companies like Netflix, Hulu, and TikTok for building fast, SEO-friendly web applications."
            }
        ]
    }
};

const tabs: TabItem[] = [
    { id: 'videos', label: 'Video Lectures', icon: Video },
    { id: 'books', label: 'Books & PDFs', icon: BookOpen },
    { id: 'docs', label: 'Official Documents', icon: FileText },
    { id: 'about', label: "Framework Info", icon: FileWarning }
];


export default function WebDevPage() {
    const [selectedPlatform, setSelectedPlatform] = useState<string>("react");
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

            <header className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-b">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="flex flex-wrap justify-between gap-4 mb-6">
                        <BackToHome />
                        <div className="flex gap-2">
                            <CustomButton href="/learn/web-dev/basic" title="Learn Basic Web Development" />
                            <CustomButton href="/learn/app-dev" title="Continue With App Development"/>
                        </div>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-4">
                            Advanced Web Development
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Master modern web development with comprehensive resources for React, Vue, Angular, and Next.js frameworks.
                        </p>
                    </div>
                    <WebFrameworkDiffBox />
                </div>
            </header>

           
            <section className="py-8 bg-muted/30 border-b hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                        <div className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-muted-foreground" />
                            <span className="font-medium">Choose your framework:</span>
                        </div>

                        <div className="min-w-[280px] hover:shadow-lg hover:border-blue-200 transition-all duration-200">
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
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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

            <TabNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

            <main className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {activeTab === 'videos' && (
                        <>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-center mb-4">Choose Your Instructor</h2>
                                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                                    Select a course to load their complete {currentPlatform?.name} playlist below
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

                            {selectedPlaylist && (
                                <div className="border-t pt-12">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold">
                                                {selectedYoutuber?.name} - {currentPlatform?.name} Course
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

                            {!selectedPlaylist && (
                                <DefaultPlaylistCard />
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
                            <h2 className="text-3xl font-bold text-center mb-4">About {currentPlatform?.name}</h2>
                            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                                Learn about the {currentPlatform?.name} framework and its key features
                            </p>

                            <div className="max-w-4xl mx-auto">
                                {currentContent?.about.map((info, index) => (
                                    <div key={index} className="bg-card border rounded-lg p-8 mb-6">
                                        <h3 className="text-2xl font-bold mb-4">{info.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-lg">
                                            {info.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}