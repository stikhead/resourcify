"use client"
import { CheckCircle, Clock, ExternalLink, Play, Users, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button";
import Link from "next/link";

interface Youtubers {
    name: string,
    description: string,
    playlistId: string,
    channelUrl: string,
    playlistUrl: string,
    language: string,
    difficulty: string,
    duration: string,
    subscribers: string
    isSelected: boolean,
    onSelect: (playlistId: string) => void
}
export default function YoutuberCard({
    name,
    description,
    playlistId,
    channelUrl,
    language,
    difficulty,
    duration,
    subscribers,
    isSelected,
    onSelect
}: Youtubers
) {
    return (
        <Card className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${isSelected ? 'ring-2 ring-indigo-500 bg-indigo-50 dark:bg-indigo-950' : 'cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 h-full dark:hover:shadow-lg dark:hover:shadow-slate-500'
            }`}
            onClick={() => onSelect(playlistId)}
        >
            <CardHeader className="pb-4">
                <div className="flex items-start gap-4 ">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-100 dark:bg-indigo-900'
                        }`}>
                        {isSelected ? (
                            <CheckCircle className="w-6 h-6" />
                        ) : (
                            <Video className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        )}
                    </div>
                    <div className="flex-1">
                        <CardTitle className={`text-lg ${isSelected ? 'text-indigo-700 dark:text-indigo-300' : ''}`}>
                            {name}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {subscribers}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {duration}
                            </div>
                        </div>
                    </div>
                </div>
                <CardDescription className="text-sm mt-3">{description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                        {language}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                        {difficulty}
                    </span>
                </div>

                <div className="flex gap-2">
                    <Button
                        className={`flex-1 ${isSelected ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(playlistId);
                        }}
                    >
                        <Play className="w-4 h-4 mr-2" />
                        {isSelected ? 'Selected' : 'Select Playlist'}
                    </Button>
                    <Link href={channelUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}