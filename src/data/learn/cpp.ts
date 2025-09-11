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
    title: "C++ Primer ( 5th Edition )",
    author: "Stanley B. Lippman ,Josée Lajoie & Barbara E. Moo",
    description: "This is a very thorough introduction into C++ that covers just about everything in the language in a very accessible format and in great detail",
    url: "https://zhjwpku.com/assets/pdf/books/C++.Primer.5th.Edition_2013.pdf",
    type: "PDF",
    pages: "969 pages",
    level: "Beginner",
    year: "2013"
  },
  {
    title: "Programming: Principles and Practice Using C++",
    author: "Bjarne Stroustrup ( Creator Of C++ )",
    description: "Comprehensive modern approach to C programming with excellent examples and exercises.",
    url: "http://103.203.175.90:81/fdScript/RootOfEBooks/E%20Book%20collection%20-%202024%20-%20D/CSE%20%20IT%20AIDS%20ML/Programming%20%20Principles%20and%20Practice%20Using%20C++%20(2024).pdf",
    type: "PDF",
    pages: "2035 pages",
    level: "Beginner to Advanced",
    year: "2024 (3rd Edition)"
  },
  {
    title: "A Tour of C++",
    author: "Bjarne Stroustrup",
    description: "The “tour” is a quick (about 180 pages and 14 chapters) tutorial overview of all of standard C++ (language and standard library, and using C++11) at a moderately high level for people who already know C++ or at least are experienced programmers.",
    url: "https://elhacker.info/manuales/Lenguajes%20de%20Programacion/C++/A%20Tour%20of%20C++%20-%20Bjarne%20Stroustrup%20%28Addison-Wesley,%202014%29%28193p%29.pdf",
    type: "PDF",
    pages: "189 pages",
    level: "Intermediate",
    year: "-"
  },
  {
    title: "C++ Concurrency in Action",
    author: "Anthony Williams",
    description: "A book covering C++11 concurrency support including the thread library, the atomics library, the C++ memory model, locks and mutexes, as well as issues of designing and debugging multithreaded applications",
    url: "https://www.bogotobogo.com/cplusplus/files/CplusplusConcurrencyInAction_PracticalMultithreading.pdf",
    type: "PDF",
    pages: "530 pages",
    level: "Advanced",
    year: "-"
  }
];

export const officialDocs: Doc[] = [
  {
    title: "Learncpp",
    organization: "learncpp.comm",
    description: "The lessons on this site will walk you through all the steps needed to write, compile, and debug your C++ programs.",
    url: "https://www.learncpp.com/",
    type: "Community",
    year: "Updated"
  },
  {
    title: "C++ Reference",
    organization: "cppreference.com",
    description: "Online reference for the C++ language and standard libraries, i.e. a more convenient version of the C++ standards",
    url: "https://en.cppreference.com/w/cpp.html",
     type: "Community",
    year: "Updated"
  },
];
