"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/NavBar";


export default function LearnMLUnbuilt() {
  return (
    <div className="min-h-screen bg-[#0f1724] text-slate-100">
      <Navbar />

      <header className="border-b bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8 flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-2xl font-bold ml-2">CV Resources — Work in progress</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-4xl">
          {/* Message box */}
          <div className="rounded-lg border border-slate-700 bg-gradient-to-b from-slate-900/40 to-slate-900/20 p-8 text-center mb-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-2">Oops — this page is under construction 🛠️</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
                Come back soon or explore other learning tracks for now.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/learn/python"><Button size="sm" variant="ghost">Explore Python</Button></Link>
              <Link href="/learn/devops"><Button size="sm" variant="outline">Explore DevOps</Button></Link>
            </div>
          </div>

          {/* Animated construction tape scene */}
          <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-b from-yellow-50/5 to-transparent border border-slate-700">
            {/* background subtle grid / work area */}
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" preserveAspectRatio="none" className="opacity-10">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.08" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* diagonal tape band (repeating stripes) */}
            <div
              aria-hidden
              className="absolute left-[-40%] top-1/3 w-[180%] h-20 transform rotate-[-12deg] tape tape-animate"
              role="presentation"
            />

            {/* cat walking along tape (SVG) */}
            <div className="absolute left-0 right-0 top-[28%] flex justify-center pointer-events-none">
              <div className="relative w-48 h-20">
                <div className="cat-track">
                  {/* Cat SVG (simple) */}
                  <svg className="cat cat-walk" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="construction cat">
                    <g transform="translate(0,0)">
                      {/* body */}
                      <ellipse cx="60" cy="34" rx="24" ry="12" fill="#111827" />
                      {/* head */}
                      <circle cx="34" cy="26" r="10" fill="#111827" />
                      {/* ear left */}
                      <polygon points="29,16 33,8 36,18" fill="#111827" />
                      {/* ear right */}
                      <polygon points="39,16 43,8 46,18" fill="#111827" />
                      {/* eyes */}
                      <circle cx="31" cy="26" r="1.6" fill="#f8fafc" />
                      <circle cx="37" cy="26" r="1.6" fill="#f8fafc" />
                      {/* tail */}
                      <path d="M78 30 q14 -6 22 -2" stroke="#111827" strokeWidth="4" strokeLinecap="round" fill="none" />
                      {/* safety vest */}
                      <rect x="48" y="28" width="22" height="10" rx="2" fill="#f59e0b" />
                      <rect x="42" y="25" width="8" height="6" rx="1" fill="#f97316" opacity="0.9" />
                      {/* hardhat */}
                      <ellipse cx="34" cy="18" rx="12" ry="6" fill="#f43f5e" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* construction cones or signs bottom-left for visual balance */}
            <div className="absolute left-6 bottom-6 flex items-end gap-4">
              <div className="w-10 h-14 bg-orange-500 rounded-sm transform rotate-2 shadow-md" />
              <div className="w-8 h-10 bg-amber-500 rounded-sm transform -rotate-2 shadow-sm" />
            </div>
          </div>

        </div>
      </main>

      {/* Inline CSS for tape + animation */}
      <style>{`
        /* tape stripe look */
        .tape {
          background-image: repeating-linear-gradient(
            135deg,
            #fca311 0px,
            #fca311 24px,
            #0f1724 24px,
            #0f1724 48px
          );
          box-shadow: 0 6px 18px rgba(2,6,23,0.6), inset 0 -6px 8px rgba(0,0,0,0.15);
          border-radius: 6px;
          border: 2px solid rgba(0,0,0,0.25);
          opacity: 0.95;
        }

        /* slide the tape stripes to give 'movement' */
        @keyframes slideTape {
          from { background-position: 0 0; }
          to { background-position: 240px 0; }
        }
        .tape-animate {
          animation: slideTape 6s linear infinite;
        }

        /* cat walk track: translate left->right and back */
        .cat-track {
          width: 220%;
          height: 100%;
          display: flex;
          align-items: center;
          transform-origin: left center;
          overflow: visible;
          animation: catWalk 8s ease-in-out infinite;
        }
        @keyframes catWalk {
          0% { transform: translateX(-40%); }
          50% { transform: translateX(10%); }
          100% { transform: translateX(-40%); }
        }

        /* subtle bobbing so cat looks alive */
        .cat-walk {
          animation: catBob 1.6s ease-in-out infinite;
          transform-origin: center;
          filter: drop-shadow(0 6px 8px rgba(2,6,23,0.6));
        }
        @keyframes catBob {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }

        /* prefer-reduced-motion handling */
        @media (prefers-reduced-motion: reduce) {
          .tape-animate { animation: none; }
          .cat-track { animation: none; }
          .cat-walk { animation: none; }
        }
      `}</style>
    </div>
  );
}
