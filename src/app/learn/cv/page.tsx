"use client";

import Link from "next/link";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import BackToHome from "@/components/buttons/backtohome";

const cvTemplates = [
  { title: "Simple Markdown Resume", description: "Markdown-first resume ideal for GitHub and ATS.", url: "#", type: "Template" },
  { title: "One-page Technical Resume (PDF)", description: "Concise one-page resume to highlight projects & impact.", url: "#", type: "Template" },
  { title: "Portfolio + Resume", description: "Resume with links to live projects and GitHub.", url: "#", type: "Template" }
];

const resumeTips = [
  "Put projects first if you have less work experience — show links and concise tech stacks.",
  "Quantify achievements (e.g., 'Reduced processing time by 40% using vectorized NumPy code').",
  "Use bullet points with tech keywords (Python, Flask/Django, NumPy, Pandas, Docker).",
  "Keep it one page for early-career developers; two pages only if necessary.",
  "Include a short 1–2 line summary describing what you build and the value you bring."
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-b">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-6">
            <BackToHome/>
            <Link href="/learn/python"><Button size="sm" variant="ghost">Learn Python →</Button></Link>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">CV & Resume Resources</h1>
            <p className="text-lg text-muted-foreground mb-6">Templates, tips and example bullet points tailored for developers.</p>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {cvTemplates.map((t, i) => (
              <div key={i} className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.description}</p>
                <div className="flex gap-2">
                  <Link href={t.url || "#"} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline">Open Template</Button></Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Resume Quick Checklist</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>One-line summary at top (role + 1–2 strengths).</li>
                <li>Projects first (links to GitHub / live demos).</li>
                <li>Technologies used as short tags (Python, Flask, Pandas, Docker).</li>
                <li>Quantified results where possible.</li>
                <li>Contact + GitHub + portfolio link in header.</li>
              </ul>
            </div>

            <div className="p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Sample Bullet Points (Python Developer)</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Built a Flask API serving 10k monthly requests with Redis caching and automated tests.</li>
                <li>Reduced data processing time by 45% using vectorized Pandas operations and parallelization.</li>
                <li>Designed and deployed CI/CD pipeline with GitHub Actions and Docker, enabling zero-downtime releases.</li>
                <li>Implemented end-to-end tests and increased test coverage from 40% to 85%.</li>
              </ul>
            </div>

            <div className="p-6 bg-background rounded-lg border col-span-full">
              <h3 className="font-semibold mb-2">Resume Writing Tips</h3>
              <ol className="list-decimal pl-5 text-sm text-muted-foreground">
                {resumeTips.map((tip, i) => <li key={i} className="mb-2">{tip}</li>)}
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Want a downloadable template?</h3>
            <p className="text-sm text-muted-foreground mb-4">I can generate a Markdown / PDF resume template you can edit — tell me which format you want and I’ll create it now.</p>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => { /* placeholder, interaction handled in app */ }}>Generate Markdown</Button>
              <Button size="sm" variant="outline" onClick={() => { /* placeholder */ }}>Generate PDF</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
