"use client";

import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VideoSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoId: string;
  description?: string;
}

export default function VideoSheet({ isOpen, onClose, title, videoId, description }: VideoSheetProps) {
  if (!isOpen) return null;

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-[150vh] max-h-[100vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold pr-8 line-clamp-2">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t space-y-4">
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          
          <div className="flex gap-2">
            <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in YouTube
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}