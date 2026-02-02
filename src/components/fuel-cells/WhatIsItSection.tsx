import { SpeakerXMarkIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export function WhatIsItSection() {
  const valueProps = [
    {
      icon: SpeakerXMarkIcon,
      title: "Silent Operation",
      description: "Near-silent power generation (<65 dB vs 80-100 dB for diesel). Perfect for urban environments, events, and noise-sensitive locations."
    },
    {
      icon: SparklesIcon,
      title: "Zero Harmful Emissions",
      description: "Zero NOx, SOx, and particulate matter. Only water vapor and minimal CO₂ output. Clean air for workers and communities."
    },
    {
      icon: ShieldCheckIcon,
      title: "Proven Reliability",
      description: "Fewer moving parts than diesel generators. 80-91% fewer service visits. Proven technology with decades of development."
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-[#002850] mb-6">
            What Is a Methanol Fuel Cell?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A methanol fuel cell converts methanol (a simple alcohol) directly into electricity through an electrochemical reaction. 
            Think of it as a <strong className="text-[#002850]">silent, clean power station</strong> that runs on liquid fuel you can store in a tank, 
            just like diesel—but without the pollution, noise, or maintenance headaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              <prop.icon className="w-12 h-12 text-[#058CFA] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-[#002850] mb-4">
                {prop.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 bg-[#002850] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-[#058CFA] mb-2">51-100%</div>
              <div className="text-sm uppercase tracking-wider">Less CO₂</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#058CFA] mb-2">Zero</div>
              <div className="text-sm uppercase tracking-wider">NOx, SOx, PM</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#058CFA] mb-2">&lt;65 dB</div>
              <div className="text-sm uppercase tracking-wider">Noise Level</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#058CFA] mb-2">91%</div>
              <div className="text-sm uppercase tracking-wider">Fewer Service Visits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
