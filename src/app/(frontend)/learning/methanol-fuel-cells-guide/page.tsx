import { HeroSection } from '@/components/fuel-cells/HeroSection'
import { WhatIsItSection } from '@/components/fuel-cells/WhatIsItSection'
import { HowItWorksSection } from '@/components/fuel-cells/HowItWorksSection'
import { VsDieselSection } from '@/components/fuel-cells/VsDieselSection'
import { MethanolTypesSection } from '@/components/fuel-cells/MethanolTypesSection'
import { ApplicationsSection } from '@/components/fuel-cells/ApplicationsSection'
import { EconomicsSection } from '@/components/fuel-cells/EconomicsSection'
import { CTASection } from '@/components/fuel-cells/CTASection'

export const metadata = {
  title: 'Methanol Fuel Cells Guide | Pacific Green',
  description: 'The complete beginner\'s guide to methanol fuel cells - clean power generation for a world beyond diesel.',
}

export default function FuelCellsGuide() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WhatIsItSection />
      <HowItWorksSection />
      <VsDieselSection />
      <MethanolTypesSection />
      <ApplicationsSection />
      <EconomicsSection />
      <CTASection />
    </main>
  )
}
