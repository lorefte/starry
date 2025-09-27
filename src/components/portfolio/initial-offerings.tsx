"use client"

import { Button } from "@/components/ui/button"
import { cn, formatCurrency } from "@/lib/utils"

interface Offering {
  id: string
  name: string
  image: string
  pricePerShare: number
  status: "ACCEPTING ORDERS" | "SOLD OUT" | "COMING SOON"
  fundedPercent?: number
  totalValue?: number
}

// Mock data based on Rally's offerings
const offerings: Offering[] = [
  {
    id: "1",
    name: "'96 FERRARI F355 GTB",
    image: "🏎️",
    pricePerShare: 10.00,
    status: "ACCEPTING ORDERS",
    totalValue: 500000
  },
  {
    id: "2",
    name: "1860 LINCOLN CHECK",
    image: "📄",
    pricePerShare: 10.00,
    status: "ACCEPTING ORDERS",
    totalValue: 250000
  },
  {
    id: "3",
    name: "GEORGE ORWELL: 1984",
    image: "📚",
    pricePerShare: 10.00,
    status: "ACCEPTING ORDERS",
    totalValue: 150000
  },
  {
    id: "4",
    name: "2022 KARUIZAWA",
    image: "🍶",
    pricePerShare: 30.50,
    status: "SOLD OUT",
    fundedPercent: 100
  }
]

export function InitialOfferings() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Initial Offerings</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          View All &gt;
        </Button>
      </div>

      <div className="space-y-4">
        {offerings.map((offering) => (
          <div key={offering.id} className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg flex items-center justify-center text-2xl">
              {offering.image}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="text-sm font-semibold text-card-foreground truncate">
                  {offering.name}
                </h4>
                <span className={cn(
                  "text-xs px-2 py-1 rounded-full font-medium",
                  offering.status === "ACCEPTING ORDERS" ? "bg-green-100 text-green-800" :
                  offering.status === "SOLD OUT" ? "bg-gray-100 text-gray-800" :
                  "bg-yellow-100 text-yellow-800"
                )}>
                  {offering.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {formatCurrency(offering.pricePerShare)} / share
              </p>
              {offering.fundedPercent && (
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{offering.fundedPercent}% Funded</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${offering.fundedPercent}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
            <Button 
              variant={offering.status === "SOLD OUT" ? "outline" : "default"}
              size="sm"
              disabled={offering.status === "SOLD OUT"}
            >
              {offering.status === "SOLD OUT" ? "Sold Out" : "Invest"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
