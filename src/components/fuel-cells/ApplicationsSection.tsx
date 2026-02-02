export function ApplicationsSection() {
  const applications = [
    {
      title: "Telecommunications",
      description: "Silent power for cell towers and remote infrastructure. No noise complaints, reduced fuel theft, minimal maintenance.",
      icon: "📡",
      features: ["Silent operation", "No fuel theft risk", "Reduced site visits"]
    },
    {
      title: "Data Centers", 
      description: "Clean backup power without emissions permits. Fast response to outages, quiet operation for urban locations.",
      icon: "🏢",
      features: ["Fast response", "Urban compliant", "Lower carbon footprint"]
    },
    {
      title: "Events & Hospitality",
      description: "Power for hotels, outdoor events, and temporary installations without noise, fumes, or complex permitting.",
      icon: "🎪",
      features: ["No noise/fumes", "Simple permitting", "Guest-friendly"]
    },
    {
      title: "Mining & Construction",
      description: "Reliable power for remote sites. Easier transport than diesel, lower security costs, cleaner air for workers.",
      icon: "⛏️",
      features: ["Easy transport", "Lower security costs", "Worker health"]
    },
    {
      title: "Remote Infrastructure",
      description: "Traffic systems, rail signaling, pipeline monitoring—any infrastructure far from the grid.",
      icon: "🚦",
      features: ["Long-duration power", "Weather independent", "Minimal maintenance"]
    },
    {
      title: "Marine & Islands",
      description: "Clean power for harbors, islands, and maritime operations where diesel logistics are expensive.",
      icon: "🚢",
      features: ["Reduced logistics", "Port compliant", "Marine suitable"]
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-[#002850] mb-6">
            Where Clean Power Makes the Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From bustling cities to remote outposts, methanol fuel cells deliver reliable, clean power 
            wherever noise, emissions, or maintenance are concerns.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {app.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#002850] mb-4">
                {app.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {app.description}
              </p>
              
              <div className="space-y-2">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-[#058CFA]">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Size Guide */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-[#002850] mb-8 text-center">Right-Size Your System</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-[#058CFA] font-black text-2xl mb-2">500W - 2kW</div>
              <div className="font-semibold text-[#002850] mb-2">Small Sites</div>
              <div className="text-sm text-gray-600">Monitoring stations, small telecom sites</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-[#058CFA] font-black text-2xl mb-2">5kW - 15kW</div>
              <div className="font-semibold text-[#002850] mb-2">Standard Sites</div>
              <div className="text-sm text-gray-600">Telecom towers, commercial backup</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-[#058CFA] font-black text-2xl mb-2">15kW - 30kW</div>
              <div className="font-semibold text-[#002850] mb-2">Large Sites</div>
              <div className="text-sm text-gray-600">Construction, events, industrial</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-[#058CFA] font-black text-2xl mb-2">30kW - 60kW</div>
              <div className="font-semibold text-[#002850] mb-2">Enterprise</div>
              <div className="text-sm text-gray-600">Data centers, large events</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Battery sizing</strong> determines peak load handling: 4-hour (standard), 6-hour (extended), 10-hour (maximum autonomy)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}