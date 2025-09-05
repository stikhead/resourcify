"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/DarkMode";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-600 dark:bg-indigo-800 text-white shadow-lg">
      <Link 
        href="/" 
        className="font-bold text-xl hover:text-indigo-200 transition-colors"
      >
        Resourcify
      </Link>
      
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        
        <Link 
          href="/resources" 
          className="hover:text-indigo-200 transition-colors hidden sm:block"
        >
          Resources
        </Link>
        
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
              className="text-white border-white hover:bg-white hover:text-indigo-600"
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}