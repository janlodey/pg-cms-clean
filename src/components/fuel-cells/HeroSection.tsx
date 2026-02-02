export function HeroSection() {
  return (
    <section className="bg-[#002850] text-white relative py-32 lg:py-40 overflow-hidden">
      {/* Background abstract pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#058CFA] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#00B000] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen">
          <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-20">
            <path d="M200,500 Q500,200 800,500 Q500,800 200,500" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1"/>
            <circle cx="300" cy="400" r="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <circle cx="700" cy="600" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="text-[#058CFA] text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
            Methanol Fuel Cells
          </div>
          <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8 animate-fade-in-up animation-delay-200">
            The Future of
            <span className="block text-[#058CFA] mt-2">Clean Power</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-400">
            Silent, reliable energy that replaces diesel generators. 
            Zero noise, zero harmful emissions, 51-100% less CO₂.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in-up animation-delay-600">
            <button className="bg-[#058CFA] hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Discover How It Works
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#002850] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              See Applications
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-12 text-4xl opacity-60 animate-float">⚡</div>
      <div className="absolute bottom-1/4 right-1/4 text-2xl opacity-40 animate-float animation-delay-1000">🔋</div>
      <div className="absolute top-1/3 left-12 text-3xl opacity-50 animate-float animation-delay-500">🌱</div>
    </section>
  )
}