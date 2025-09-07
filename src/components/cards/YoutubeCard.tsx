"use client";

import { Play, Users, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function YouTuberCard({ youtuber, onSelectPlaylist }: { 
  youtuber: any, 
  onSelectPlaylist: (playlistId: string) => void 
}) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <img 
            src={youtuber.avatar} 
            alt={youtuber.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
              {youtuber.name}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {youtuber.subscribers}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {youtuber.duration}
              </div>
            </div>
          </div>
        </div>
        
        <CardDescription className="text-sm mt-3">
          {youtuber.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
            {youtuber.language}
          </span>
          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
            {youtuber.difficulty}
          </span>
        </div>
        
        <div className="flex gap-2">
          <a href={youtuber.playlistUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
  <Button className="w-full">
    <Play className="w-4 h-4 mr-2" />
    Watch Playlist
  </Button>
</a>

          <Link href={youtuber.channelUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
