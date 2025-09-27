"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, TrendingUp, TrendingDown } from "lucide-react"

interface ActivityItem {
  id: string
  assetName: string
  assetImage: string
  action: "bid" | "ask"
  price: number
  time: string
}

// Mock data - in a real app, this would come from your API
const mockActivities: ActivityItem[] = [
  {
    id: "1",
    assetName: "Cryptopunk #2981",
    assetImage: "🎨",
    action: "ask",
    price: 3.30,
    time: "Just now"
  },
  {
    id: "2",
    assetName: "Tornek-Rayville TR-900",
    assetImage: "⌚",
    action: "ask",
    price: 2.30,
    time: "a few moments ago"
  },
  {
    id: "3",
    assetName: "'76 Apple 1 (Wozniak Signed)",
    assetImage: "💻",
    action: "bid",
    price: 9.40,
    time: "a few moments ago"
  },
  {
    id: "4",
    assetName: "'56 Showcase #4 (Silver Age)",
    assetImage: "📚",
    action: "ask",
    price: 4.90,
    time: "a few moments ago"
  }
]

export function RecentActivity() {
  const [activities] = useState<ActivityItem[]>(mockActivities)
  const [marketStatus] = useState("ACCEPTING ORDERS - MARKET CLOSED")

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Recent Activity</h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Moon className="h-4 w-4" />
          <span>{marketStatus}</span>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center text-lg">
              {activity.assetImage}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground truncate">
                {activity.assetName}
              </p>
              <p className="text-xs text-muted-foreground">
                Someone just placed an {activity.action} of ${activity.price.toFixed(2)}.
              </p>
            </div>
            <div className="flex items-center space-x-1">
              {activity.action === "bid" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <Button variant="outline" className="w-full">
          View All Activity
        </Button>
      </div>
    </div>
  )
}
