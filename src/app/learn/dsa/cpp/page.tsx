import { ChevronLeft, ExternalLink, Clock, BookOpen, Code, Trophy, Target } from "lucide-react";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BackToHome from "@/components/buttons/backtohome";
import CustomButton from "@/components/buttons/customButton";

const platforms = [
  {
    name: "Striver's A2Z DSA Course",
    description: "Complete DSA course from basics to advanced with structured learning path, detailed explanations, and coding problems.",
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
    type: "Course",
    practice_url: "",
    difficulty: "Beginner to Advanced",
    topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "DP"],
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    name: "NeetCode",
    description: "Curated list of 150 LeetCode problems with video explanations, patterns, and optimal solutions for coding interviews.",
    url: "https://neetcode.io/",
    practice_url: "",
    type: "Problem Set",
    difficulty: "Interview Focused",
    topics: ["Arrays", "Two Pointers", "Sliding Window", "Trees", "Backtracking"],
    icon: Target,
    color: "bg-green-500"
  },
  {
    name: "LeetCode",
    description: "World's leading platform for technical interview preparation with thousands of coding problems and contests.",
    url: "https://leetcode.com/",
    type: "Practice Platform",
    practice_url: "https://leetcode.com/problemset/",
    difficulty: "Easy to Hard",
    topics: ["All DSA Topics", "System Design", "Concurrency"],
    icon: Code,
    color: "bg-orange-500",
  },
  {
    name: "Codeforces",
    description: "Competitive programming platform with regular contests, extensive problem set, and global rankings.",
    url: "https://codeforces.com/",
    type: "Competitive Programming",
    practice_url: "https://codeforces.com/problemset",
    difficulty: "Beginner to Expert",
    topics: ["Math", "Greedy", "DP", "Graph Theory", "Data Structures"],
    icon: Trophy,
    color: "bg-red-500",
  },
];

const learningPath = [
  {
    phase: "Foundation",
    duration: "2-3 weeks",
    topics: ["Time Complexity", "Arrays", "Strings", "Basic Math"],
    description: "Build strong fundamentals with basic data structures and complexity analysis"
  },
  {
    phase: "Core DSA",
    duration: "6-8 weeks",
    topics: ["Linked Lists", "Stacks & Queues", "Trees", "Hashing", "Recursion"],
    description: "Master essential data structures and problem-solving techniques"
  },
  {
    phase: "Advanced Topics",
    duration: "4-6 weeks",
    topics: ["Graphs", "Dynamic Programming", "Greedy", "Backtracking"],
    description: "Tackle complex algorithms and optimization problems"
  },
  {
    phase: "Interview Prep",
    duration: "4-5 weeks",
    topics: ["Common Patterns", "System Design", "Mock Interviews", "Practice"],
    description: "Prepare for technical interviews with focused practice"
  }
];

const quickLinks = [
  { name: "Striver's SDE Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/", type: "Problem List" },
  { name: "Blind 75", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions", type: "Curated List" },
  { name: "InterviewBit Question Set", url: "https://www.interviewbit.com/courses/programming/", type: "Interview Focused" },
  { name: "CP-31 Sheet ( For Codeforces )", url: "https://www.tle-eliminators.com/cp-sheet", type: "Problem Set" }
];

function PlatformButtons({ platform }: { platform: typeof platforms[0] }) {
  return (
    <div className="flex flex-col gap-2 min-h-[80px] justify-end">


      {platform.practice_url ? (

        <div>
          <Link href={platform.practice_url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full">
              Practice Problems
              <Code className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href={platform.url} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              Visit Platform
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      ) : (
        <Link href={platform.url} target="_blank" rel="noopener noreferrer">
          <Button className="w-full">
            Visit Platform
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      )}
    </div>
  );
}

function ResourceCard({ platform }: { platform: typeof platforms[0] }) {
  return (
    <Card className="justify-center h-full hover:shadow-lg transition-all duration-300 border-l-4 "
      style={{ borderLeftColor: platform.color.replace('bg-', '#').replace('-500', '') }}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={`p-2 rounded-lg ${platform.color} text-white`}>
            <platform.icon className="w-6 h-6" />
          </div>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-muted rounded-full">{platform.type}</span>
            <span className="text-xs px-2 py-1 bg-muted rounded-full">{platform.difficulty}</span>
          </div>
        </div>

        <div>
          <CardTitle className="text-lg mb-2">{platform.name}</CardTitle>
          <CardDescription className="text-sm">{platform.description}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2">Key Topics:</h4>
          <div className="flex flex-wrap gap-1">
            {platform.topics.slice(0, 3).map((topic, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                {topic}
              </span>
            ))}
            {platform.topics.length > 3 && (
              <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                +{platform.topics.length - 3} more
              </span>
            )}
          </div>
        </div>

        <PlatformButtons platform={platform} />
      </CardContent>
    </Card>
  );
}

export default function DSACppPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="bg-muted/30 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <BackToHome />
            <CustomButton href={"/learn/cpp"} title={"Learn C++ Language"}/>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Data Structures & Algorithms in C++
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Master DSA with curated resources from top platforms. From structured courses to practice problems,
              everything you need to excel in coding interviews and competitive programming.
            </p>
          </div>
        </div>
      </header>


      {/* Learning Path */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Suggested Learning Path</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {phase.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.topics.map((topic, i) => (
                      <div key={i} className="text-xs px-2 py-1 bg-muted rounded">
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>

                {index < learningPath.length - 1 && (
                  //<div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-indigo-600 rounded-full items-center justify-center">
                    <div className="">
                      <ChevronLeft className="bg-center textbf-white rotate-180 hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full items-center justify-center" />
                    </div>
                 // </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Top Learning Platforms</h2>

          <div className="justify-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {platforms.map((platform, index) => (
              <ResourceCard key={index} platform={platform} />
            ))}
          </div>
        </div>
      </main>

      {/* Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Problem Lists</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{link.name}</h3>
                      <span className="text-sm text-muted-foreground">{link.type}</span>
                    </div>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for DSA Success</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold">Consistent Practice</h3>
              <p className="text-sm text-muted-foreground">
                Solve 2-3 problems daily rather than cramming. Consistency beats intensity.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold">Understand Patterns</h3>
              <p className="text-sm text-muted-foreground">
                Focus on understanding problem patterns rather than memorizing solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold">Code Quality</h3>
              <p className="text-sm text-muted-foreground">
                Write clean, readable code with proper variable names and comments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}