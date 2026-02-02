export function MethanolTypesSection() {
  const methanolTypes = [
    {
      type: "Grey Methanol",
      source: "Natural gas (fossil fuel)",
      co2Reduction: "51-57%",
      status: "Most common today, widely available",
      color: "gray",
      bgColor: "bg-gray-100",
      textColor: "text-gray-700",
      iconColor: "text-gray-500"
    },
    {
      type: "Blue Methanol", 
      source: "Natural gas with carbon capture",
      co2Reduction: "60-75%",
      status: "Growing production capacity",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      iconColor: "text-blue-500"
    },
    {
      type: "Green Methanol",
      source: "Green hydrogen + captured CO₂",
      co2Reduction: "90-100%",
      status: "Emerging, rapid growth expected",
      color: "green", 
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      iconColor: "text-green-500"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-[#002850] mb-6">
            The Path to Net-Zero
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Not all methanol is created equal. The source determines the environmental benefit. 
            Start with immediate CO₂ reduction, then transition to net-zero as supply scales—no equipment changes needed.
          </p>
        </div>

        {/* Progression Flow */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
            {methanolTypes.map((methanol, index) => (
              <div key={index} className="relative">
                {/* Arrow between cards */}
                {index < methanolTypes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="bg-[#058CFA] rounded-full p-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                        <path 
                          d="M13 7L18 12L13 17M6 12H18" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                <div className={`${methanol.bgColor} rounded-2xl p-8 h-full border-2 ${
                  methanol.color === 'gray' ? 'border-gray-200' : 
                  methanol.color === 'blue' ? 'border-blue-200' : 
                  'border-green-200'
                } hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  
                  {/* Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold mb-6 ${
                    methanol.color === 'gray' ? 'bg-gray-200 text-gray-700' : 
                    methanol.color === 'blue' ? 'bg-blue-200 text-blue-700' : 
                    'bg-green-200 text-green-700'
                  }`}>
                    {index === 0 ? 'Available Now' : index === 1 ? 'Scaling Up' : 'Future Ready'}
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${methanol.textColor}`}>
                    {methanol.type}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Made from
                      </div>
                      <div className={`text-lg ${methanol.textColor}`}>
                        {methanol.source}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        CO₂ Reduction vs Diesel
                      </div>
                      <div className={`text-3xl font-black ${methanol.textColor}`}>
                        {methanol.co2Reduction}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Status
                      </div>
                      <div className="text-sm text-gray-600">
                        {methanol.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Callout */}
        <div className="mt-20 bg-gradient-to-r from-[#002850] to-[#058CFA] rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Smart Transition Strategy</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">1️⃣</div>
                <div className="font-bold mb-2">Start Today</div>
                <div className="text-blue-100 text-sm">Deploy with grey methanol for immediate 51% CO₂ reduction</div>
              </div>
              <div>
                <div className="text-4xl mb-4">2️⃣</div>
                <div className="font-bold mb-2">Scale with Supply</div>
                <div className="text-blue-100 text-sm">Transition to blue and green as production increases</div>
              </div>
              <div>
                <div className="text-4xl mb-4">3️⃣</div>
                <div className="font-bold mb-2">Achieve Net-Zero</div>
                <div className="text-blue-100 text-sm">Reach 100% CO₂ reduction with no equipment changes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}