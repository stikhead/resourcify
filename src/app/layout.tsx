import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resourcify - Learn Programming",
  description: "Comprehensive resources for C, C++, Python, Web Development, and more. Start your programming journey today.",
  keywords: "programming, C, C++, Python, web development, learning resources, tutorials",
  authors: [{ name: "Resourcify Team" }],
  openGraph: {
    title: "Resourcify - Learn Programming",
    description: "Comprehensive resources for C, C++, Python, Web Development, and more.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}