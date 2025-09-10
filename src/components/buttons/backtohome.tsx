import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function BackToHome(){
    return (
        <Link href="/">
            <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4 mr-2" />Back to Home
            </Button>
        </Link>
    )
}