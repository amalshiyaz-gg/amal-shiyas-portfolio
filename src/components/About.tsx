export default function About() {
  return (
    <section id="about" className="py-24 bg-[#181818] border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#D32F2F]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#D32F2F]">
            01 / Professional Profile
          </h2>
        </div>

        {/* Main Statement Card */}
        <div className="max-w-4xl space-y-6">
          <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
            Bridging Creative Automotive Vision with Production-Ready Mechanical Precision.
          </h3>

          <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            I am a Mechanical Engineering graduate with practical, active floor experience in assembly and manufacturing operations at <span className="text-white hover:text-[#EF5350] transition-colors font-semibold">Wipro Infrastructure Engineering</span>. This immersive experience gives me direct awareness of tolerances, assembly ergonomics, structural integrity, and shop-floor reality.
          </p>

          <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            Using advanced <span className="text-white font-semibold">Fusion 360</span> workflows, I turn concepts into structurally sound, fully integrated physical prototypes. My goal is to leverage my mechanical foundations to design the next generation of safe, high-performance physical systems.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 font-mono text-center md:text-left">
            <div className="border-l border-[#D32F2F]/40 pl-4 py-2">
              <span className="block text-xl font-bold text-white">100%</span>
              <span className="text-[10px] text-[#B0B0B0] uppercase block mt-1">CAD Native (Fusion 360)</span>
            </div>
            <div className="border-l border-[#D32F2F]/40 pl-4 py-2">
              <span className="block text-xl font-bold text-white">Apprenticeship</span>
              <span className="text-[10px] text-[#B0B0B0] uppercase block mt-1">Wipro Infrastructure</span>
            </div>
            <div className="col-span-2 md:col-span-1 border-l border-[#D32F2F]/40 pl-4 py-2">
              <span className="block text-xl font-bold text-[#D32F2F]">Automotive</span>
              <span className="text-[10px] text-[#B0B0B0] uppercase block mt-1">End Target Goal</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

