"use client";

import { Play } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  videoId: string;
  description?: string;
  thumbnail?: string;
  onPlay: (title: string, videoId: string, description?: string) => void;
}

export default function VideoCard({ title, videoId, description, thumbnail, onPlay }: VideoCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePlay = () => {
    onPlay(title, videoId, description);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlay();
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Use custom thumbnail if provided, otherwise use YouTube thumbnails
  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail;
    if (imageError) return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      tabIndex={0}
      role="button"
      aria-label={`Play video: ${title}`}
      onClick={handlePlay}
      onKeyDown={handleKeyDown}
    >
      <CardContent className="p-0">
        <div className="aspect-video bg-muted rounded-t-xl overflow-hidden relative group">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-muted-foreground/40" />
              </div>
            </div>
          )}

          {/* Thumbnail */}
          <img
            src={getThumbnailUrl()}
            alt={`Video thumbnail for ${title}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-focus:bg-black/40 transition-colors flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transform group-hover:scale-110 group-focus:scale-110 transition-transform shadow-lg">
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
          </div>

          {/* Video duration badge (optional - you'd need to pass duration as prop) */}
          {/* <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div> */}
        </div>
        
        <div className="p-4">
          <CardTitle className="text-base mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
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
            className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            aria-label={`Watch ${title}`}
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Video
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}