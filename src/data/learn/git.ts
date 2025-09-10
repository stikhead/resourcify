import { Book, Doc, Youtuber } from "@/types/resources";

export const youtubers: Youtuber[] = [
    {
        name: "Kunal Kushwaha",
        description: "Complete Git and GitHub tutorial covering version control, branching, collaboration, and open source contribution.",
        playlistId: "PLyzOVJj3bHQuloKGG59rS43e29ro7I57J",
        channelUrl: "https://www.youtube.com/@KunalKushwaha",
        playlistUrl: "https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J",
        language: "English",
        difficulty: "Beginner to Intermediate",
        duration: "~4 hours",
        subscribers: "394K"
    },
    {
        name: "Programming with Mosh",
        description: "Comprehensive Git tutorial covering essential commands, workflows, and best practices for developers.",
        playlistId: "PLTjRvDozrdlzukFVnlZ9RLMfgABTEA6cj",
        channelUrl: "https://www.youtube.com/@programmingwithmosh",
        playlistUrl: "https://www.youtube.com/playlist?list=PLTjRvDozrdlzukFVnlZ9RLMfgABTEA6cj",
        language: "English",
        difficulty: "Beginner",
        duration: "~3 hours",
        subscribers: "3.2M"
    },
    {
        name: "Traversy Media",
        description: "Git crash course covering basic commands, GitHub workflow, and practical version control for web developers.",
        playlistId: "PLillGF-RfqbYZty73_PHBqKRDnv7ikh68",
        channelUrl: "https://www.youtube.com/@TraversyMedia",
        playlistUrl: "https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68",
        language: "English",
        difficulty: "Beginner",
        duration: "~2 hours",
        subscribers: "2.2M"
    },
    {
        name: "Corey Schafer",
        description: "In-depth Git tutorials covering advanced topics, workflows, and collaboration techniques for professional development.",
        playlistId: "PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx",
        channelUrl: "https://www.youtube.com/@coreyms",
        playlistUrl: "https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx",
        language: "English",
        difficulty: "Intermediate to Advanced",
        duration: "~6 hours",
        subscribers: "1.1M"
    }
];

export const books:  Book[] = [
    {
        title: "Pro Git",
        author: "Scott Chacon & Ben Straub",
        description: "The official Git book covering everything from basics to advanced Git internals. Available for free online.",
        url: "https://git-scm.com/book",
        type: "PDF/Web",
        pages: "574 pages",
        level: "Beginner to Advanced",
        year: "2023"
    },
    {
        title: "Learn Git in a Month of Lunches",
        author: "Rick Umali",
        description: "Practical approach to learning Git with daily lessons covering essential version control concepts.",
        url: "#",
        type: "PDF",
        pages: "376 pages",
        level: "Beginner to Intermediate",
        year: "2015"
    },
    {
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        description: "Concise reference guide covering Git commands, workflows, and troubleshooting common issues.",
        url: "#",
        type: "PDF",
        pages: "234 pages",
        level: "Intermediate",
        year: "2013"
    },
    {
        title: "Version Control with Git",
        author: "Jon Loeliger & Matthew McCullough",
        description: "Comprehensive guide to Git covering distributed version control, branching strategies, and collaboration.",
        url: "#",
        type: "PDF",
        pages: "456 pages",
        level: "Intermediate to Advanced",
        year: "2012"
    },
    {
        title: "GitHub Essentials",
        author: "Achilleas Pipinellis",
        description: "Complete guide to GitHub covering repositories, pull requests, issues, and project management features.",
        url: "#",
        type: "PDF",
        pages: "168 pages",
        level: "Beginner to Intermediate",
        year: "2018"
    }
];

export const officialDocs: Doc[] = [
    {
        title: "Git Documentation",
        organization: "Git SCM",
        description: "Official Git documentation covering all commands, configuration options, and advanced usage patterns.",
        url: "https://git-scm.com/docs",
        type: "Official Documentation",
        year: "Updated"
    },
    {
        title: "GitHub Docs",
        organization: "GitHub",
        description: "Comprehensive GitHub documentation covering repositories, actions, pages, and collaboration features.",
        url: "https://docs.github.com/",
        type: "Platform Documentation",
        year: "Updated"
    },
    {
        title: "Git Reference Manual",
        organization: "Git Community",
        description: "Complete reference manual for all Git commands with detailed usage examples and options.",
        url: "https://git-scm.com/docs/git",
        type: "Reference Manual",
        year: "Updated"
    },
    {
        title: "Atlassian Git Tutorials",
        organization: "Atlassian",
        description: "Comprehensive Git tutorials covering workflows, commands, and best practices for teams.",
        url: "https://www.atlassian.com/git/tutorials",
        type: "Tutorial Series",
        year: "2024"
    },
    {
        title: "GitHub Skills",
        organization: "GitHub",
        description: "Interactive learning platform for Git and GitHub with hands-on exercises and projects.",
        url: "https://skills.github.com/",
        type: "Interactive Learning",
        year: "2024"
    },
    {
        title: "Git Branching Model",
        organization: "Vincent Driessen",
        description: "Popular Git workflow model for managing feature branches, releases, and hotfixes.",
        url: "https://nvie.com/posts/a-successful-git-branching-model/",
        type: "Workflow Guide",
        year: "2010"
    }
];