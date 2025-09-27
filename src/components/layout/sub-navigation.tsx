"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Lock } from "lucide-react"

const subNavigation = [
  { name: "Browse groups", count: 53, href: "/groups" },
  { name: "Pending applications", count: 11, href: "/groups/pending" },
  { name: "My groups", count: 10, href: "/groups/my" },
]

export function SubNavigation() {
  const [activeTab, setActiveTab] = useState("Browse groups")
  const [hideInviteOnly, setHideInviteOnly] = useState(false)

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Tabs */}
          <div className="flex space-x-8">
            {subNavigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "text-sm font-medium transition-colors pb-4 border-b-2",
                  activeTab === item.name
                    ? "text-foreground border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                )}
              >
                {item.name} • {item.count}
              </button>
            ))}
          </div>

          {/* Filter */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setHideInviteOnly(!hideInviteOnly)}
            className={cn(
              "text-sm text-muted-foreground hover:text-foreground",
              hideInviteOnly && "bg-accent"
            )}
          >
            <Lock className="h-4 w-4 mr-2" />
            Hide invite-only groups
          </Button>
        </div>
      </div>
    </div>
  )
}
