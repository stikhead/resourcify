"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/DarkMode";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-600 dark:bg-indigo-800 text-yellow-50 shadow-lg">
      <Link 
        href="/" 
        className="font-bold text-xl hover:text-indigo-200 transition-colors"
      >
        Resourcify
      </Link>
      <div className="flex items-center gap-4">
        <DarkModeToggle />

        <SignedIn>
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-8 h-8"
              }
            }}
          />
        </SignedIn>
        
        <SignedOut>
          <SignInButton mode="modal">
            <Button 
              variant="outline" 
              className="text-black dark:text-white hover:text-indigo-600 dark:"
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}