import type { Youtuber, Book, Doc } from "@/types/resources";

export const youtubers: Youtuber[] = [
  {
    name: "Code with Harry",
    description: "Complete C++ course covering OOP, STL, and practical projects. Perfect for beginners transitioning from C.",
    playlistId: "PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
    channelUrl: "https://www.youtube.com/@CodeWithHarry",
    playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
    language: "Hindi/English",
    difficulty: "Beginner to Intermediate",
    duration: "~20 hours",
    subscribers: "8.9M",
  },
  {
    name: "Jenny's Lectures CS IT",
    description: "",
    playlistId: "PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee",
    channelUrl: "https://www.youtube.com/@JennyslecturesCSIT",
    playlistUrl: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~25 hours",
    subscribers: "2M"
  }
];

export const books: Book[] = [
  {
    title: "The C Programming Language",
    author: "Brian Kernighan & Dennis Ritchie",
    description: "The definitive guide to C programming by its creators. Essential reading for serious C programmers.",
    url: "https://kremlin.cc/k&r.pdf",
    type: "PDF",
    pages: "272 pages",
    level: "Intermediate to Advanced",
    year: "1988"
  },
  {
    title: "C Programming: A Modern Approach",
    author: "K. N. King",
    description: "Comprehensive modern approach to C programming with excellent examples and exercises.",
    url: "#",
    type: "PDF",
    pages: "832 pages",
    level: "Beginner to Advanced",
    year: "2008"
  },
  {
    title: "Head First C",
    author: "David Griffiths & Dawn Griffiths",
    description: "Beginner-friendly approach to learning C with engaging visuals and practical examples.",
    url: "#",
    type: "PDF",
    pages: "632 pages",
    level: "Beginner",
    year: "2012"
  },
  {
    title: "C Programming Absolute Beginner's Guide",
    author: "Greg Perry & Dean Miller",
    description: "Perfect starting point for complete beginners with step-by-step instructions and practical examples.",
    url: "#",
    type: "PDF",
    pages: "352 pages",
    level: "Beginner",
    year: "2013"
  }
];

export const officialDocs: Doc[] = [
  {
    title: "ISO C Standard (C11)",
    organization: "ISO/IEC",
    description: "Official C programming language standard specification. The authoritative reference for C language features.",
    url: "https://www.iso.org/standard/57853.html",
    type: "Official Standard",
    year: "2011"
  },
  {
    title: "GNU C Library Documentation",
    organization: "GNU Project",
    description: "Complete documentation for the GNU C Library (glibc) including all standard C functions.",
    url: "https://www.gnu.org/software/libc/manual/",
    type: "Library Documentation",
    year: "2023"
  },
  {
    title: "C Reference - cppreference.com",
    organization: "cppreference.com",
    description: "Comprehensive online reference for C standard library functions, operators, and language features.",
    url: "https://en.cppreference.com/w/c",
    type: "Online Reference",
    year: "Updated"
  },
  {
    title: "GCC C Compiler Documentation",
    organization: "GNU Project",
    description: "Official documentation for the GNU Compiler Collection C compiler, including language extensions.",
    url: "https://gcc.gnu.org/onlinedocs/gcc/C-Extensions.html",
    type: "Compiler Documentation",
    year: "2023"
  },
  {
    title: "POSIX C API Reference",
    organization: "IEEE",
    description: "POSIX standard C API functions for system programming and cross-platform development.",
    url: "https://pubs.opengroup.org/onlinepubs/9699919799/",
    type: "API Reference",
    year: "2018"
  }
];
