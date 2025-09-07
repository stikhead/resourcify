"use client";

import { Play } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VideoCardProps {
  title: string;
  videoId: string;
  description?: string;
  onPlay: (title: string, videoId: string, description?: string) => void;
}

export default function VideoCard({ title, videoId, description, onPlay }: VideoCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
      <CardContent className="p-0">
        <div 
          className="aspect-video bg-muted rounded-t-xl overflow-hidden relative group"
          onClick={() => onPlay(title, videoId, description)}
        >
          {/* Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback to medium resolution thumbnail if maxres fails
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transform group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <CardTitle className="text-base mb-2 line-clamp-2">
            {title}
          </CardTitle>
          
          {description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onPlay(title, videoId, description);
            }}
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Video
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}