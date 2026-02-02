export function CTASection() {
  const nextSteps = [
    {
      step: "Assessment",
      description: "Site survey, load analysis, fuel logistics review",
      icon: "📋"
    },
    {
      step: "Design", 
      description: "System sizing, hybrid configuration if needed",
      icon: "📐"
    },
    {
      step: "Deployment",
      description: "Equipment delivery, installation, and commissioning",
      icon: "🚀"
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-[#002850] mb-6">
            Ready for Clean Power?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join forward-thinking organizations already benefiting from methanol fuel cell technology. 
            Lower costs, zero emissions, proven reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-[#058CFA] hover:bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:shadow-xl hover:scale-105">
              Get Custom Quote
            </button>
            <button className="border-2 border-[#002850] text-[#002850] hover:bg-[#002850] hover:text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300">
              Download Technical Guide
            </button>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-[#002850] text-center mb-12">Your Path to Clean Power</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#058CFA] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  {step.icon}
                </div>
                <div className="bg-[#058CFA] text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  STEP {index + 1}
                </div>
                <h4 className="text-xl font-bold text-[#002850] mb-3">{step.step}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Immediate Support */}
          <div className="bg-[#002850] text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Support?</h3>
            <p className="text-blue-100 mb-6">
              Speak with our energy experts about your specific requirements and get personalized recommendations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-[#058CFA] mr-3">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#058CFA] mr-3">✉️</span>
                <span>energy@pacificgreen.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#058CFA] mr-3">🌐</span>
                <span>Available 24/7 for emergency power needs</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-[#002850] mb-4">Technical Resources</h3>
            <p className="text-gray-600 mb-6">
              Dive deeper into the technology with our comprehensive resources and case studies.
            </p>
            <div className="space-y-4">
              <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium">Complete Technical Specification Sheet</span>
                <span className="text-[#058CFA]">↓</span>
              </a>
              <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium">ROI Calculator Spreadsheet</span>
                <span className="text-[#058CFA]">↓</span>
              </a>
              <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium">Installation Case Studies</span>
                <span className="text-[#058CFA]">↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#058CFA]/10 to-[#00B000]/10 rounded-2xl p-8 border border-[#058CFA]/20">
            <h4 className="text-xl font-bold text-[#002850] mb-4">Trusted by Industry Leaders</h4>
            <p className="text-gray-600 mb-6">
              Already deployed across telecommunications, data centers, mining, and remote infrastructure worldwide.
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="font-bold">TELECOM OPERATORS</div>
              <div>•</div>
              <div className="font-bold">DATA CENTERS</div>
              <div>•</div>
              <div className="font-bold">MINING COMPANIES</div>
              <div>•</div>
              <div className="font-bold">GOVERNMENT AGENCIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}