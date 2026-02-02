export function VsDieselSection() {
  const comparisons = [
    {
      category: "Emissions",
      diesel: {
        value: "High CO₂, NOx, particulates, SOx",
        icon: "💨",
        negative: true
      },
      fuelCell: {
        value: "51-100% less CO₂, zero other pollutants",
        icon: "🌱",
        negative: false
      }
    },
    {
      category: "Noise Level",
      diesel: {
        value: "80-100 dB (Very loud)",
        icon: "📢",
        negative: true
      },
      fuelCell: {
        value: "<65 dB (Near-silent)",
        icon: "🔇",
        negative: false
      }
    },
    {
      category: "Maintenance",
      diesel: {
        value: "Frequent oil, filters, overhauls",
        icon: "🔧",
        negative: true
      },
      fuelCell: {
        value: "80-91% fewer service visits",
        icon: "✅",
        negative: false
      }
    },
    {
      category: "Operating Cost",
      diesel: {
        value: "~$0.22/kWh",
        icon: "💰",
        negative: true
      },
      fuelCell: {
        value: "~$0.18/kWh (19% lower)",
        icon: "💵",
        negative: false
      }
    },
    {
      category: "Fuel Theft Risk",
      diesel: {
        value: "High (black market value)",
        icon: "🚨",
        negative: true
      },
      fuelCell: {
        value: "Low (no demand for methanol)",
        icon: "🛡️",
        negative: false
      }
    },
    {
      category: "Environmental Permits",
      diesel: {
        value: "Often requires permits",
        icon: "📋",
        negative: true
      },
      fuelCell: {
        value: "Generally compliant by default",
        icon: "✓",
        negative: false
      }
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#002850] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Methanol Fuel Cells vs. Diesel Generators
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how methanol fuel cells outperform diesel generators across every metric that matters for modern power generation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-400">Diesel Generator</h3>
              <p className="text-orange-200 text-sm">Traditional power</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-300">Comparison</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#058CFA]">Methanol Fuel Cell</h3>
              <p className="text-blue-200 text-sm">Clean power</p>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-4">
            {comparisons.map((comparison, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                <div className="grid grid-cols-3 gap-4 items-center">
                  {/* Diesel */}
                  <div className="text-center p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                    <div className="text-2xl mb-2">{comparison.diesel.icon}</div>
                    <div className="text-orange-200 text-sm font-medium">{comparison.diesel.value}</div>
                  </div>
                  
                  {/* Category */}
                  <div className="text-center">
                    <h4 className="font-bold text-white text-lg">{comparison.category}</h4>
                  </div>
                  
                  {/* Fuel Cell */}
                  <div className="text-center p-4 bg-[#058CFA]/10 rounded-xl border border-[#058CFA]/20">
                    <div className="text-2xl mb-2">{comparison.fuelCell.icon}</div>
                    <div className="text-blue-200 text-sm font-medium">{comparison.fuelCell.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-16 bg-gradient-to-r from-[#058CFA]/20 to-[#00B000]/20 rounded-2xl p-8 text-center border border-[#058CFA]/30">
            <h3 className="text-2xl font-bold mb-4">The Clear Winner</h3>
            <p className="text-blue-100 text-lg">
              Methanol fuel cells deliver lower costs, better performance, and dramatically reduced environmental impact. 
              The choice is clear for forward-thinking organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}