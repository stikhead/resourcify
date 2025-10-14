import { Book, Doc, Youtuber } from "@/types/resources";

export const youtubers: Youtuber[] = [
  {
    name: "freeCodeCamp.org (Recomended)",
    description: "Full introduction into all of the core concepts in python",
    playlistId: "PLoiSiM7anHlGdjIkOnKRl6QInCVAoXLZs",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    playlistUrl: "https://www.youtube.com/playlist?list=PLoiSiM7anHlGdjIkOnKRl6QInCVAoXLZs",
    language: "English",
    difficulty: "Beginner",
    duration: "5-15 hours",
    subscribers: "~11.18M"
  },
  {
    name: "Corey Schafer (Recomended)",
    description: "Comprehensive Python programming course from basics to intermediate topics with practical examples and projects.",
    playlistId: "PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7",
    channelUrl: "https://www.youtube.com/@coreyms",
    playlistUrl: "https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7",
    language: "English",
    difficulty: "Beginner to Intermediate",
    duration: "~9 hours",
    subscribers: "~1.5M"
  },
  {
    name: "CodeWithHarry",
    description: "Complete Python programming course in Hindi for beginners, covering all fundamental concepts with practical examples.",
    playlistId: "PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    channelUrl: "https://www.youtube.com/@CodeWithHarry",
    playlistUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    language: "Hindi",
    difficulty: "Beginner",
    duration: "~15 hours",
    subscribers: "9M"
  }
];

export const books: Book[] = [
    {
    title: "Python for Everybody",
    author: "Eric Matthes",
    description: "Exploring Data Using Python 3",
    url: "https://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf",
    type: "PDF",
    pages: "220 pages",
    level: "Beginner",
    year: "-"
  },
  {
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    description: "Practical programming for total beginners, focusing on automating everyday tasks with Python. Available free online.",
    url: "https://automatetheboringstuff.com/#:~:text=on%20YouTube.-,Table%20of%20Contents,-Introduction",
    type: "PDF/Website",
    pages: "24 Chapters",
    level: "Beginner",
    year: "2019"
  },
  {
    title: "Think Python: How to Think Like a Computer Scientist",
    author: "Allen Downey",
    description: "Introduction to Python programming with focus on problem-solving and computational thinking. Free online version available.",
    url: "https://greenteapress.com/wp/think-python-2e/",
    type: "Free Online/PDF",
    pages: "292 pages",
    level: "Beginner",
    year: "2015"
  },
  {
    title: "Python Programming: An Introduction to Computer Science",
    author: "John Zelle",
    description: "Comprehensive introduction to programming and computer science using Python as the teaching language.",
    url: "#",
    type: "PDF",
    pages: "552 pages",
    level: "Beginner",
    year: "2016"
  }
];

export const officialDocs: Doc[] = [
  {
    title: "Python Official Tutorial",
    organization: "Python Software Foundation",
    description: "Official Python tutorial covering language basics, data structures, modules, and standard library.",
    url: "https://docs.python.org/3/tutorial/",
    type: "Official Tutorial",
    year: "2024"
  },
  {
    title: "Python Documentation",
    organization: "Python Software Foundation",
    description: "Complete Python documentation with language reference, library documentation, and guides.",
    url: "https://docs.python.org/3/",
    type: "Official Documentation",
    year: "2024"
  },
  {
    title: "Python Standard Library",
    organization: "Python Software Foundation",
    description: "Documentation for Python's extensive standard library with built-in modules and functions.",
    url: "https://docs.python.org/3/library/",
    type: "Library Reference",
    year: "2024"
  },
  {
    title: "Python Package Index (PyPI)",
    organization: "Python Software Foundation",
    description: "Repository of third-party Python packages with over 400,000 packages for extending Python functionality.",
    url: "https://pypi.org/",
    type: "Package Repository",
    year: "2024"
  },
  {
    title: "Beginner's Guide to Python",
    organization: "Python Software Foundation",
    description: "Design documents describing Python features, processes, and guidelines for beginners.",
    url: "https://wiki.python.org/moin/BeginnersGuide",
    type:"-",
    year: "-"
  }
];