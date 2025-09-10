import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
interface ButtonValues{
    href: string,
    title: string,
}
export default function CustomButton({
    href,
    title,
}: ButtonValues){
    return (
        <Link href={href} target="" rel="">  
            <Button variant="outline" size="sm">
                {title}<ChevronRight className="w-4 h-4 mr-2" />
            </Button>
        </Link>
    )
}