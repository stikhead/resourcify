import Navbar from "@/components/NavBar";
import VideoGallery from "@/components/VideoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPlaylistItems } from "@/lib/Youtube";
import BackToHome from "@/components/buttons/backtohome";
import CustomButton from "@/components/buttons/customButton";

export default async function LearnCPage() {
  let videos;

  try {
    videos = await getPlaylistItems("PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi");
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
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <BackToHome />
          <div className="flex gap-2">
            <CustomButton href={"/learn/c"} title={"Learn C Language"}/>
            <CustomButton href={"/learn/cpp"} title={"Learn C++ Language"}/>
          </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Learn Data Structure & Algorithms in C Programming Language
            </h1>
            <p className="text-lg text-muted-foreground mb-6">

            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-medium">
                Intermediate
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
              <h3 className="font-semibold mb-2">Basics</h3>
              <p className="text-sm text-muted-foreground">
                DSA Intro, Time Complexity, Big O/G/Θ, Case analysis
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Fundamental Structures</h3>
              <p className="text-sm text-muted-foreground">
                Arrays, Linked Lists (all types), Stacks, Queues, Deques
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Sorting Algorithms</h3>
              <p className="text-sm text-muted-foreground">
                Bubble, Insertion, Selection, QuickSort, MergeSort, Counting
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Advanced Topics</h3>
              <p className="text-sm text-muted-foreground">
                Binary Tree, BST, AVL Trees (with rotations) & Graph representations, BFS, DFS, Spanning Trees, Prim’s MST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">DSA in C Programming Language Video Tutorials</h2>
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