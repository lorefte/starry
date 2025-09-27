"use client"

import { Button } from "@/components/ui/button"
import { cn, formatCurrency, formatPercentage } from "@/lib/utils"

interface PopularAsset {
  id: string
  name: string
  image: string
  price: number
  change: number
  changePercent: number
}

// Mock data based on Rally's popular assets
const popularAssets: PopularAsset[] = [
  {
    id: "1",
    name: "DUNE (1ST ED.)",
    image: "📖",
    price: 26.40,
    change: 13.15,
    changePercent: 99.25
  },
  {
    id: "2",
    name: "'99 POKEMON BOX",
    image: "📦",
    price: 4.00,
    change: -6.00,
    changePercent: -60.00
  },
  {
    id: "3",
    name: "'83 FERRARI 512 BBI",
    image: "🏎️",
    price: 47.50,
    change: -22.50,
    changePercent: -32.14
  },
  {
    id: "4",
    name: "HONUS WAGNER CARD",
    image: "⚾",
    price: 146.00,
    change: 94.00,
    changePercent: 180.77
  },
  {
    id: "5",
    name: "DECLARATION",
    image: "📜",
    price: 31.00,
    change: 6.00,
    changePercent: 24.00
  }
]

export function PopularAssets() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Popular Trading Assets</h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {popularAssets.map((asset) => (
          <div key={asset.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center text-xl">
              {asset.image}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground truncate">
                {asset.name}
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-card-foreground">
                  {formatCurrency(asset.price)}
                </span>
                <span className={cn(
                  "text-xs font-medium",
                  asset.changePercent >= 0 ? "text-green-600" : "text-red-600"
                )}>
                  ({formatPercentage(asset.changePercent)})
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Trade
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <Button variant="outline" className="w-full">
          View All Popular Assets
        </Button>
      </div>
    </div>
  )
}
