import { Video } from "lucide-react";

export function DefaultPlaylistCard() {
    return (
        <div className="text-center py-16 border-t">
            <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Select a Playlist to Get Started</h3>
            <p className="text-muted-foreground">
                Choose one of the instructors above to load their complete C programming video series
            </p>
        </div>
    )
}