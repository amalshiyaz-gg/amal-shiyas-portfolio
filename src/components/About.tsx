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
            Mechanical Engineering Graduate with Hands-On Manufacturing & Assembly Exposure.
          </h3>

          <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            Mechanical Engineering graduate with hands-on exposure to manufacturing operations, assembly processes, inspection, and industrial practices across <span className="text-white font-semibold">Wipro Infrastructure Engineering</span>, <span className="text-white font-semibold">United Electrical Industries</span>, <span className="text-white font-semibold">KMML</span>, and <span className="text-white font-semibold">KEL</span>.
          </p>

          <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
            Proficient in <span className="text-white font-semibold">Autodesk Fusion 360</span>, SolidWorks, AutoCAD, engineering drawings (GD&T), and physical prototyping. Seeking opportunities to apply mechanical engineering fundamentals in automotive, product design, manufacturing, and related engineering roles.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 font-mono text-center md:text-left">
            <div className="border-l border-[#D32F2F]/40 pl-4 py-2">
              <span className="block text-xl font-bold text-white">6.82 / 10</span>
              <span className="text-[10px] text-[#B0B0B0] uppercase block mt-1">B.Tech CGPA (Amrita)</span>
            </div>
            <div className="border-l border-[#D32F2F]/40 pl-4 py-2">
              <span className="block text-xl font-bold text-white">4 Facilities</span>
              <span className="text-[10px] text-[#B0B0B0] uppercase block mt-1">Industrial Internships</span>
            </div>
            <div className="border-l border-[#D32F2F]/40 pl-4 py-2">
              <span className="block text-xl font-bold text-white">Rank 13</span>
              <span className="text-[10px] text-[#B0B0B0] uppercase block mt-1">IKR 2025 Kart Racing</span>
            </div>
            <div className="border-l border-[#D32F2F]/40 pl-4 py-2">
              <span className="block text-xl font-bold text-[#D32F2F]">Fusion 360</span>
              <span className="text-[10px] text-[#B0B0B0] uppercase block mt-1">CAD & Drafting</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

