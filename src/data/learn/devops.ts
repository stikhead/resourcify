import { Book, Doc, PracticeResource, Youtuber } from "@/types/resources";
import { Cloud, Code2, Container, Settings } from "lucide-react";

export const youtubers: Youtuber[] = [
  {
    name: "TechWorld with Nana",
    description: "Comprehensive DevOps tutorials covering Docker, Kubernetes, CI/CD, and cloud technologies with practical examples.",
    playlistId: "PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb",
    channelUrl: "https://www.youtube.com/@TechWorldwithNana",
    playlistUrl: "https://www.youtube.com/playlist?list=PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb",
    language: "English",
    difficulty: "Beginner to Advanced",
    duration: "~15 hours",
    subscribers: "1.1M"
  },
  {
    name: "Hitesh Choudhary",
    description: "Complete Go programming course perfect for DevOps engineers learning infrastructure automation and tooling.",
    playlistId: "PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
    channelUrl: "https://www.youtube.com/@HiteshChoudharydotcom",
    playlistUrl: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
    language: "Hindi/English",
    difficulty: "Beginner",
    duration: "~12 hours",
    subscribers: "1.3M"
  },
  {
    name: "Cloud Native DevOps",
    description: "Jenkins CI/CD pipeline tutorials covering automation, deployment strategies, and DevOps best practices.",
    playlistId: "PL6XT0grm_Tfi21F8O0TvHmb78P2uEmhDq",
    channelUrl: "https://www.youtube.com/@CloudNativeDevOps",
    playlistUrl: "https://www.youtube.com/playlist?list=PL6XT0grm_Tfi21F8O0TvHmb78P2uEmhDq",
    language: "English",
    difficulty: "Intermediate",
    duration: "~8 hours",
    subscribers: "156K"
  },
  {
    name: "DevOps Journey",
    description: "Kubernetes deep dive tutorials covering cluster management, deployments, and production best practices.",
    playlistId: "PLxzKY3wu0_FJdJd3IKv5BUtda8rtNpOvx",
    channelUrl: "https://www.youtube.com/@DevOpsJourney",
    playlistUrl: "https://www.youtube.com/playlist?list=PLxzKY3wu0_FJdJd3IKv5BUtda8rtNpOvx",
    language: "English",
    difficulty: "Intermediate to Advanced",
    duration: "~20 hours",
    subscribers: "425K"
  }
];

export const books: Book[] = [
  {
    title: "The DevOps Handbook",
    author: "Gene Kim, Jez Humble, Patrick Debois",
    description: "Comprehensive guide to transforming your organization through DevOps practices and cultural change.",
    url: "#",
    type: "PDF",
    pages: "480 pages",
    level: "All Levels",
    year: "2021"
  },
  {
    title: "90 Days of DevOps",
    author: "Michael Cade",
    description: "Free comprehensive DevOps learning journey covering all essential tools and practices. Available on GitHub.",
    url: "https://github.com/MichaelCade/90DaysOfDevOps",
    type: "GitHub Repository",
    pages: "90 Days Course",
    level: "Beginner to Advanced",
    year: "2024"
  },
  {
    title: "Docker Deep Dive",
    author: "Nigel Poulton",
    description: "Complete guide to Docker containerization covering development, deployment, and orchestration.",
    url: "#",
    type: "PDF",
    pages: "368 pages",
    level: "Beginner to Intermediate",
    year: "2023"
  },
  {
    title: "Kubernetes in Action",
    author: "Marko Lukša",
    description: "Comprehensive Kubernetes guide covering deployment, scaling, and management of containerized applications.",
    url: "#",
    type: "PDF",
    pages: "624 pages",
    level: "Intermediate to Advanced",
    year: "2022"
  },
  {
    title: "Site Reliability Engineering",
    author: "Google SRE Team",
    description: "Google's approach to production systems, monitoring, and maintaining reliable services at scale.",
    url: "https://sre.google/books/",
    type: "Free Online",
    pages: "550 pages",
    level: "Advanced",
    year: "2023"
  }
];

export const officialDocs: Doc[] = [
  {
    title: "DevOps Roadmap",
    organization: "roadmap.sh",
    description: "Comprehensive DevOps learning path covering all essential technologies, tools, and practices for 2024.",
    url: "https://roadmap.sh/devops",
    type: "Learning Roadmap",
    year: "2024"
  },
  {
    title: "Docker Documentation",
    organization: "Docker Inc.",
    description: "Official Docker documentation covering containerization, orchestration, and deployment strategies.",
    url: "https://docs.docker.com/",
    type: "Official Documentation",
    year: "Updated"
  },
  {
    title: "Kubernetes Documentation",
    organization: "CNCF",
    description: "Official Kubernetes documentation with comprehensive guides for container orchestration.",
    url: "https://kubernetes.io/docs/",
    type: "Official Documentation",
    year: "Updated"
  },
  {
    title: "AWS Documentation",
    organization: "Amazon Web Services",
    description: "Complete AWS cloud services documentation covering compute, storage, networking, and DevOps tools.",
    url: "https://docs.aws.amazon.com/",
    type: "Cloud Documentation",
    year: "Updated"
  },
  {
    title: "Jenkins Documentation",
    organization: "Jenkins Project",
    description: "Official Jenkins CI/CD documentation covering pipeline creation, plugins, and automation.",
    url: "https://www.jenkins.io/doc/",
    type: "CI/CD Documentation",
    year: "Updated"
  },
  {
    title: "Terraform Documentation",
    organization: "HashiCorp",
    description: "Infrastructure as Code documentation covering provisioning and managing cloud resources.",
    url: "https://developer.hashicorp.com/terraform/docs",
    type: "IaC Documentation",
    year: "Updated"
  }
];

export const practiceResources: PracticeResource[] = [
  {
    name: "KodeKloud",
    description: "Hands-on labs for Kubernetes, Docker, and cloud technologies with CKA/CKAD certification prep.",
    url: "https://kodekloud.com/",
    type: "Interactive Labs",
    icon: Container
  },
  {
    name: "Killer.sh",
    description: "Kubernetes certification practice exams and challenging scenarios for CKA, CKAD, and CKS prep.",
    url: "https://killer.sh/",
    type: "Practice Exams",
    icon: Settings
  },
  {
    name: "Gophercises",
    description: "Go programming exercises perfect for DevOps engineers learning automation and tooling development.",
    url: "https://gophercises.com/",
    type: "Coding Practice",
    icon: Code2
  },
  {
    name: "AWS Free Tier",
    description: "Free AWS resources to practice cloud services, EC2, S3, Lambda, and other DevOps tools.",
    url: "https://aws.amazon.com/free/",
    type: "Cloud Practice",
    icon: Cloud
  }
];