import { MainLayout } from "@/components/layout/main-layout"
import { PortfolioCard } from "@/components/portfolio/portfolio-card"
import { RecentActivity } from "@/components/activity/recent-activity"
import { PopularAssets } from "@/components/portfolio/popular-assets"
import { InitialOfferings } from "@/components/portfolio/initial-offerings"

// Mock data - in a real app, this would come from your database
const mockPortfolios = [
  {
    name: "Stonk Citadel",
    creator: "@zoomerfied",
    category: "Automotive",
    description: "We primarily invest in classic automobiles from the 90s-00s. Our portfolio includes JDM and European classics.",
    marketCap: 1289746,
    sharePrice: 649,
    performance: {
      "1M": 10,
      "6M": 50,
      "12M": 120
    },
    recentDeals: 2,
    icon: "🏰",
    status: "TRADING" as const
  },
  {
    name: "Aquatic Club",
    creator: "@icebergy_",
    category: "Wine",
    description: "A collection of rare wines dating back to the 1920s from all over the globe",
    marketCap: 584245,
    sharePrice: 38.4,
    performance: {
      "1M": -5,
      "6M": 15,
      "12M": 0
    },
    recentDeals: 6,
    icon: "🌊",
    status: "OFFERING SOON" as const
  },
  {
    name: "199x Capital",
    creator: "@devops199fan",
    category: "Stamps",
    description: "We collect stamps from all time periods with varying degrees of rarity.",
    marketCap: 1852435,
    sharePrice: 110.45,
    performance: {
      "1M": -7.5,
      "6M": -3,
      "12M": 2
    },
    recentDeals: 2,
    icon: "📮",
    status: "VOTING COMPLETED" as const
  }
]

export default function GroupsPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Browse Investment Groups</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Discover and invest in fractional ownership of alternative assets
          </p>
        </div>

        {/* Three-column layout like Rally */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - All Assets */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">All Assets</h2>
              <p className="text-sm text-muted-foreground">466 Assets</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {mockPortfolios.map((portfolio, index) => (
                <PortfolioCard
                  key={index}
                  {...portfolio}
                />
              ))}
            </div>
          </div>

          {/* Middle Column - Popular Assets & Offerings */}
          <div className="lg:col-span-4 space-y-6">
            <PopularAssets />
            <InitialOfferings />
          </div>

          {/* Right Column - Recent Activity */}
          <div className="lg:col-span-3">
            <RecentActivity />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
