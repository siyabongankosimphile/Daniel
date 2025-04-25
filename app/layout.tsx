import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/use-toast"
import Link from "next/link"
import { Home, GitBranch, Settings, FileText } from "lucide-react"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flow - Workflow Automation",
  description: "Workflow automation platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} h-full`}>
        <ThemeProvider defaultTheme="dark">
          <div className="flex min-h-screen">
            <div className="w-14 border-r flex flex-col items-center py-4">
              <Link href="/" className="p-2 rounded-md hover:bg-accent mb-6">
                <Image
                  src="/images/flowbank-logo.png"
                  alt="FlowBank Logo"
                  width={65}
                  height={65}
                  style={{ width: "80px !important", height: "80px !important" }}
                />
              </Link>
              <nav className="flex flex-col items-center gap-4">
                <Link href="/" className="p-2 rounded-md hover:bg-accent" title="Home">
                  <Home className="h-5 w-5" />
                </Link>
                <Link href="/environments" className="p-2 rounded-md hover:bg-accent" title="Environments">
                  <GitBranch className="h-5 w-5" />
                </Link>
                <Link href="/documentation" className="p-2 rounded-md hover:bg-accent" title="Documentation">
                  <FileText className="h-5 w-5" />
                </Link>
                <Link href="/settings" className="p-2 rounded-md hover:bg-accent" title="Settings">
                  <Settings className="h-5 w-5" />
                </Link>
              </nav>
            </div>
            <div className="flex-1 flex flex-col">{children}</div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'