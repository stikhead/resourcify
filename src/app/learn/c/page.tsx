import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPlaylistItems } from "@/lib/Youtube";

export default async function LearnCPage() {
  let videos;
  
  try {
    videos = await getPlaylistItems("PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR");
  } catch (error) {
    console.error("Failed to fetch YouTube playlist:", error);
    videos = [
      { 
        title: "Failed to fetch playlist", 
        videoId: "blank",
        description: "Please try again later.."
      }
    ];
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <header className="bg-muted/30 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Learn C Programming Language
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Master the fundamentals of C programming language with comprehensive video tutorials 
              covering everything from basic syntax to advanced concepts like pointers and memory management.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                Beginner Friendly
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                {videos.length} Videos
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
                Hands-on Practice
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What You'll Learn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">C Basics</h3>
              <p className="text-sm text-muted-foreground">
                Syntax, variables, data types, and basic I/O operations
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Control Flow</h3>
              <p className="text-sm text-muted-foreground">
                Conditionals, loops, and decision-making structures
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Functions</h3>
              <p className="text-sm text-muted-foreground">
                Function definition, parameters, return values, and scope
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Advanced Topics</h3>
              <p className="text-sm text-muted-foreground">
                Pointers, arrays, structures, and memory management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">C Programming Video Tutorials</h2>
            <Link 
              href="https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                View Full Playlist
              </Button>
            </Link>
          </div>
          
          <VideoGallery videos={videos} />
        </div>
      </main>
    </div>
  );
}