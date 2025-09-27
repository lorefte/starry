import { MainLayout } from "@/components/layout/main-layout"

export default function DealsPage() {
  return (
    <MainLayout showSubNavigation={false}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Deals</h1>
          <p className="text-muted-foreground mt-2">
            Browse available investment opportunities and deals
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">Coming Soon</h3>
          <p className="text-muted-foreground">
            Deals page is under development. Check back soon for investment opportunities.
          </p>
        </div>
      </div>
    </MainLayout>
  )
}
