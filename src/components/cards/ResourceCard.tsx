import Link from "next/link";
import { ExternalLink, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ResourceCardProps {
  title: string;
  description: string;
  type: "Article" | "Video" | "Project" | "Course";
  level: "Beginner" | "Intermediate" | "Advanced";
  href: string;
  icon?: LucideIcon;
}

const getTypeColor = (type: ResourceCardProps['type']) => {
  const colors = {
    Article: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Video: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200", 
    Project: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Course: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
  };
  return colors[type];
};

const getLevelColor = (level: ResourceCardProps['level']) => {
  const colors = {
    Beginner: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };
  return colors[level];
};

export default function ResourceCard({ 
  title, 
  description, 
  type, 
  level, 
  href,
  icon: Icon 
}: ResourceCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 h-full dark:hover:shadow-lg dark:hover:shadow-indigo-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
                <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            )}
            
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(type)}`}>
                    {type}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(level)}`}>
                    {level}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-indigo-500 transition-colors" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}