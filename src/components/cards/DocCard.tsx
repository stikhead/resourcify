"use client"

import { ExternalLink, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"

interface OfficialDocs {
    title: string,
    organization: string,
    description: string,
    url: string,
    type: string,
    year: string
}
export default function DocCard({ 
    title,
    organization,
    description,
    url,
    type,
    year }: OfficialDocs) {
    return (
        <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">by {organization}</p>
                    </div>
                </div>
                <CardDescription className="text-sm mt-3">{description}</CardDescription>
            </CardHeader>
            <div className="flex flex-col gap-2 justify-end">

            <CardContent className="space-y-4 ">
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-xs">
                        {type}
                    </span>
                    <span>{year}</span>
                </div>
                
                <Link href={url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Documentation
                    </Button>
                </Link>
            </CardContent>
            </div>
        </Card>

    );

}