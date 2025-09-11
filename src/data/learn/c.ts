import { Book, Doc, Youtuber } from "@/types/resources";

export const youtubers: Youtuber[] = [
  {
    name: "Code with Harry",
    description: "Comprehensive C programming course in Hindi/English. Great for beginners with practical examples and projects.",
    playlistId: "PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",
    channelUrl: "https://www.youtube.com/@CodeWithHarry",
    playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",
    language: "Hindi/English",
    difficulty: "Beginner",
    duration: "~22 hours",
    subscribers: "~8.9M"
  },
  {
    name: "Jenny's Lectures CS IT",
    description: "Detailed C programming tutorials with focus on concepts and problem-solving. Perfect for computer science students.",
    playlistId: "PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S",
    channelUrl: "https://www.youtube.com/@JennyslecturesCSIT",
    playlistUrl: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~64 hours",
    subscribers: "`2M"
  },
  {
    name: "Neso Academy",
    description: "In-depth C programming course with theoretical concepts and practical implementation. University-level content.",
    playlistId: "PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
    channelUrl: "https://www.youtube.com/@nesoacademy",
    playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR",
    language: "English",
    difficulty: "Beginner to Advanced",
    duration: "~20 hours",
    subscribers: "3M"
  }
];

export const books:Book[] = [
  {
    title: "The C Programming Language",
    author: "Brian Kernighan & Dennis Ritchie",
    description: "The definitive guide to C programming by its creators. Essential reading for serious C programmers.",
    url: "https://colorcomputerarchive.com/repo/Documents/Books/The%20C%20Programming%20Language%20%28Kernighan%20Ritchie%29.pdf",
    type: "PDF",
    pages: "220 pages",
    level: "Intermediate to Advanced",
    year: "1988"
  },
  {
    title: "C Programming: A Modern Approach",
    author: "K. N. King",
    description: "Comprehensive modern approach to C programming with excellent examples and exercises.",
    url: "https://archive.org/details/c-programming-a-modern-approach-2nd-ed-c-89-c-99-king-by/page/iii/mode/2up",
    type: "PDF",
    pages: "832 pages",
    level: "Beginner to Advanced",
    year: "2008"
  },
  {
    title: "Head First C",
    author: "David Griffiths & Dawn Griffiths",
    description: "Beginner-friendly approach to learning C with engaging visuals and practical examples.",
    url: "https://drive.google.com/file/d/1E4KJNUIm9c7zIhCZvftS0D-q5kKppKPj/view?usp=sharing",
    type: "PDF",
    pages: "632 pages",
    level: "Beginner",
    year: "2012"
  },
  {
    title: "Programming in C",
    author: "Stephen G. Kochan",
    description: "Perfect starting point for complete beginners.",
    url: "https://scs.dypvp.edu.in/documents/e-books/C/Stephen-G-Kochan-Programming-in-C-2005.pdf",
    type: "PDF",
    pages: "551 pages",
    level: "Beginner",
    year: "2005"
  }
];

export const officialDocs: Doc[] = [
  {
    title: "GNU C Library Documentation",
    organization: "GNU Project",
    description: "Complete documentation for the GNU C Library (glibc) including all standard C functions.",
    url: "https://sourceware.org/glibc/manual/latest/pdf/libc.pdf",
    type: "Library Documentation",
    year: "2025 (v2.42)"
  },
  {
    title: "C Reference - cppreference.com",
    organization: "cppreference.com",
    description: "Online reference for the C languages and standard libraries, i.e. a more convenient version of the C standards",
    url: "https://en.cppreference.com/w/c",
    type: "Community",
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
    url: "https://pubs.opengroup.org/onlinepubs/9799919799/",
    type: "API Reference",
    year: "2024"
  }
];