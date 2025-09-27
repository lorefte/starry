import { Button } from "@/components/ui/button"
import { cn, formatCurrency, formatPercentage } from "@/lib/utils"

interface PortfolioCardProps {
  name: string
  creator: string
  category: string
  description: string
  marketCap: number
  sharePrice: number
  performance: {
    "1M": number
    "6M": number
    "12M": number
  }
  recentDeals: number
  icon: string
  status?: "TRADING" | "OFFERING SOON" | "VOTING COMPLETED" | "EXITED" | "ACCEPTING ORDERS"
  className?: string
}

export function PortfolioCard({
  name,
  creator,
  category,
  description,
  marketCap,
  sharePrice,
  performance,
  recentDeals,
  icon,
  status = "TRADING",
  className
}: PortfolioCardProps) {
  return (
    <div className={cn(
      "bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow",
      className
    )}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-bold" 
               style={{ 
                 background: icon === "🏰" ? "linear-gradient(135deg, #8B5CF6, #EC4899)" :
                           icon === "🌊" ? "linear-gradient(135deg, #1E40AF, #0EA5E9)" :
                           "linear-gradient(135deg, #000000, #374151)"
               }}>
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">by {creator}</p>
          </div>
        </div>
        <span className={cn(
          "text-xs px-2 py-1 rounded-full font-medium",
          status === "TRADING" ? "bg-blue-100 text-blue-800" :
          status === "OFFERING SOON" ? "bg-yellow-100 text-yellow-800" :
          status === "VOTING COMPLETED" ? "bg-green-100 text-green-800" :
          status === "EXITED" ? "bg-gray-100 text-gray-800" :
          "bg-purple-100 text-purple-800"
        )}>
          {status}
        </span>
      </div>

      {/* Performance Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
          {category}
        </span>
        <span className={cn(
          "px-3 py-1 text-xs rounded-full font-medium",
          performance["1M"] >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        )}>
          1M {formatPercentage(performance["1M"])}
        </span>
        <span className={cn(
          "px-3 py-1 text-xs rounded-full font-medium",
          performance["6M"] >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        )}>
          6M {formatPercentage(performance["6M"])}
        </span>
        <span className={cn(
          "px-3 py-1 text-xs rounded-full font-medium",
          performance["12M"] >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        )}>
          12M {formatPercentage(performance["12M"])}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
        {description}
      </p>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Marketcap</p>
          <p className="font-semibold text-card-foreground text-lg">{formatCurrency(marketCap)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Recent Deals</p>
          <div className="flex space-x-1">
            {Array.from({ length: recentDeals }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  background: i === 0 ? "#3B82F6" : 
                             i === 1 ? "#000000" :
                             i === 2 ? "#10B981" :
                             i === 3 ? "#F59E0B" :
                             i === 4 ? "#8B5CF6" :
                             "#EC4899"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Share Price Button */}
      <Button className="w-full font-medium py-3 rounded-lg">
        {formatCurrency(sharePrice)} / Share
      </Button>
    </div>
  )
}
