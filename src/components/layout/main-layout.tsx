"use client"

import { Header } from "./header"
import { SubNavigation } from "./sub-navigation"

interface MainLayoutProps {
  children: React.ReactNode
  showSubNavigation?: boolean
}

export function MainLayout({ children, showSubNavigation = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {showSubNavigation && <SubNavigation />}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
