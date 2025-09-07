"use client";

import { useState } from "react";
import VideoCard from "@/components/cards/VideoCard";
import VideoSheet from "@/components/VideoSheet";

interface VideoData {
  title: string;
  videoId: string;
  description?: string;
  thumbnail?: string;
}

interface VideoGalleryProps {
  videos: VideoData[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [videoSheet, setVideoSheet] = useState<{
    isOpen: boolean;
    title: string;
    videoId: string;
    description?: string;
  }>({
    isOpen: false,
    title: "",
    videoId: "",
    description: ""
  });

  const handlePlayVideo = (title: string, videoId: string, description?: string) => {
    setVideoSheet({
      isOpen: true,
      title,
      videoId,
      description
    });
  };

  const closeVideoSheet = () => {
    setVideoSheet({
      isOpen: false,
      title: "",
      videoId: "",
      description: ""
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard 
            key={index} 
            title={video.title} 
            videoId={video.videoId}
            description={video.description}
            onPlay={handlePlayVideo}
          />
        ))}
      </div>

      {/* Video Sheet Modal */}
      <VideoSheet
        isOpen={videoSheet.isOpen}
        onClose={closeVideoSheet}
        title={videoSheet.title}
        videoId={videoSheet.videoId}
        description={videoSheet.description}
      />
    </>
  );
}