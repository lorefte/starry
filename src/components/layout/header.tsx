"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WalletButton } from "@/components/auth/wallet-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { User, Search } from "lucide-react"

const navigation = [
  { name: "Deals", href: "/deals" },
  { name: "Groups", href: "/groups" },
  { name: "Portfolio", href: "/portfolio" },
]

export function Header() {
  const pathname = usePathname()
  const [isWalletConnected] = useState(false) // Will be replaced with Privy integration
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-background">Starry</span>
              <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                BETA
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-background/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-background/60" />
              <input
                type="text"
                placeholder="Q Search for an asset or category"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Wallet, Theme & User */}
          <div className="flex items-center space-x-2">
            <WalletButton />
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="text-background hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
