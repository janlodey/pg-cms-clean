export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Fuel Storage",
      description: "Methanol (mixed with water) stored in standard tank—no high-pressure systems needed",
      icon: "🏭"
    },
    {
      step: "02", 
      title: "Reforming",
      description: "Inside the fuel cell, hydrogen is extracted from the methanol using internal reforming",
      icon: "⚗️"
    },
    {
      step: "03",
      title: "Electrochemical Conversion", 
      description: "Hydrogen reacts with oxygen across a membrane, producing clean electricity",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Clean Output",
      description: "Electrical power flows out; water vapor and minimal CO₂ are the only byproducts",
      icon: "🔌"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-[#002850] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The process is elegantly simple: methanol goes in, clean electricity comes out. 
            No combustion, no complex machinery—just reliable electrochemical conversion.
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <svg width="40" height="20" viewBox="0 0 40 20" className="text-[#058CFA]">
                      <path 
                        d="M30 10 L40 10 M35 5 L40 10 L35 15" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="text-5xl mb-6">{step.icon}</div>
                    <div className="text-[#058CFA] font-bold text-sm mb-2">STEP {step.step}</div>
                    <h3 className="text-xl font-bold text-[#002850] mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Methanol callout */}
        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#002850] mb-4">Why Methanol?</h3>
            <p className="text-gray-600">Methanol is sometimes called "liquid hydrogen" because it combines the best of both worlds</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">💧</div>
              <div className="font-bold text-[#002850]">Easy to Handle</div>
              <div className="text-sm text-gray-600">Liquid at normal temperatures</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📦</div>
              <div className="font-bold text-[#002850]">Easy to Store</div>
              <div className="text-sm text-gray-600">Standard tanks, no pressure</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚛</div>
              <div className="font-bold text-[#002850]">Easy to Transport</div>
              <div className="text-sm text-gray-600">Existing fuel networks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-bold text-[#002850]">Energy Dense</div>
              <div className="text-sm text-gray-600">More energy per litre</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}