import { 
  CurrencyDollarIcon, 
  WrenchScrewdriverIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline'

export function EconomicsSection() {
  const keyStats = [
    {
      value: "19%",
      label: "Fuel Savings",
      description: "Lower cost per kWh vs diesel",
      icon: CurrencyDollarIcon
    },
    {
      value: "91%",
      label: "Fewer Service Visits", 
      description: "Over 50,000 operating hours",
      icon: WrenchScrewdriverIcon
    },
    {
      value: "0%",
      label: "Fuel Theft Risk",
      description: "No black market for methanol",
      icon: ShieldCheckIcon
    },
    {
      value: "100%",
      label: "Future-Proof",
      description: "Path to net-zero with same equipment",
      icon: SparklesIcon
    }
  ]

  const costBreakdown = [
    {
      category: "Fuel Costs",
      diesel: "$0.22/kWh",
      methanol: "$0.18/kWh",
      saving: "-19%",
      trend: "down"
    },
    {
      category: "Maintenance",
      diesel: "33 interventions",
      methanol: "5 interventions", 
      saving: "-91%",
      trend: "down"
    },
    {
      category: "Security Costs",
      diesel: "High (fuel theft)",
      methanol: "Minimal",
      saving: "-80%+",
      trend: "down"
    },
    {
      category: "Permit Costs",
      diesel: "Complex/expensive",
      methanol: "Generally compliant",
      saving: "-70%+",
      trend: "down"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#002850] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            The Economics Are Clear
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Lower fuel costs, dramatically reduced maintenance, and eliminated security risks add up to 
            superior total cost of ownership—even before considering sustainability benefits.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {keyStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-10 h-10 text-[#058CFA] mx-auto mb-4" />
              <div className="text-4xl lg:text-5xl font-black text-[#058CFA] mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Total Cost of Ownership</h3>
          
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              {costBreakdown.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-6 bg-white/5 rounded-xl">
                  <div className="font-bold text-lg">
                    {item.category}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-orange-300 mb-1">Diesel</div>
                    <div className="text-orange-200">{item.diesel}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-blue-300 mb-1">Methanol FC</div>
                    <div className="text-blue-200">{item.methanol}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                      item.trend === 'down' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      <ArrowTrendingDownIcon className="w-4 h-4" />
                      {item.saving}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-20 bg-gradient-to-r from-[#058CFA]/20 to-[#00B000]/20 rounded-2xl p-8 lg:p-12 border border-[#058CFA]/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Calculate Your ROI</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-[#058CFA] text-2xl font-black mb-2">Year 1</div>
                <div className="text-blue-100">19% fuel savings + reduced maintenance begins</div>
              </div>
              <div>
                <div className="text-[#058CFA] text-2xl font-black mb-2">Year 2-3</div>
                <div className="text-blue-100">Security & permit savings compound benefits</div>
              </div>
              <div>
                <div className="text-[#058CFA] text-2xl font-black mb-2">Year 5+</div>
                <div className="text-blue-100">Lower replacement costs deliver long-term value</div>
              </div>
            </div>
            
            <button className="bg-[#058CFA] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Get Custom ROI Analysis
            </button>
          </div>
        </div>

        {/* Sustainability Value */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Beyond Cost Savings</h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Carbon pricing, sustainability reporting, and ESG requirements are making clean power 
            a competitive necessity. Methanol fuel cells deliver both financial and environmental returns.
          </p>
        </div>
      </div>
    </section>
  )
}
