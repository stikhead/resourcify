import { Book, BookOpen, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

interface Books {
    title: string,
    author: string,
    description: string,
    url: string,
    type: string,
    pages: string,
    level: string,
    year: string
}
export default function BookCard({ 
    title,
    author,
    description,
    url,
    type,
    pages,
    level,
    year }: Books) {
    return (
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 dark:hover:shadow-lg dark:hover:scale-105 h-full dark:hover:shadow-slate-400">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">by {author}</p>
                    </div>
                </div>
                <CardDescription className="text-sm mt-3">{description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                        <span className="font-medium">Pages: </span>
                        {pages}
                    </div>
                    <div>
                        <span className="font-medium">Year: </span>
                        {year}
                    </div>
                    <div className="col-span-2">
                        <span className="font-medium">Level: </span>
                        {level}
                    </div>
                </div>
                <div className="flex gap-2">
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                        <Button className="flex-1 hover:scale-105 h-full dark:hover:shadow-lg dark:hover:shadow-slate-500">
                            <Download className="w-4 h-4 mr-2 " />
                            Download PDF
                        </Button>
                    </Link>
                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full self-center">
                        {type}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}