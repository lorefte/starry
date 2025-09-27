"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { usePrivy } from '@privy-io/react-auth'
import { UserProfile } from "@/components/auth/user-profile"

export default function PortfolioPage() {
  const { authenticated, user } = usePrivy()

  return (
    <MainLayout showSubNavigation={false}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Portfolio</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            View your investment portfolio and track performance
          </p>
        </div>

        {authenticated && user ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <UserProfile />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Your Investments</h3>
                <p className="text-muted-foreground">
                  Your investment portfolio will appear here once you start investing in alternative assets.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Connect Your Wallet</h3>
            <p className="text-muted-foreground">
              Connect your wallet to view your investment portfolio and start investing in alternative assets.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
