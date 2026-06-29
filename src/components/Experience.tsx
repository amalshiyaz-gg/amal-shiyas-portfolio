import { Briefcase, Factory, ShieldCheck, Cpu, GitBranch, Users } from "lucide-react";

export default function Experience() {
  const highlights = [
    {
      title: "Manufacturing Exposure",
      desc: "Immersed directly within high-capacity hydraulic cylinder production, understanding raw material feeds, CNC machining interfaces, and precision surface treatments.",
      icon: Factory,
    },
    {
      title: "Assembly Processes",
      desc: "Analyzed advanced product pipelines including sealing joints, custom torque setups, structural fits, and mechanical alignment procedures.",
      icon: GitBranch,
    },
    {
      title: "Quality Awareness",
      desc: "Maintained rigorous conformance standards by inspecting sealing profiles, verifying sliding tolerances, and mapping post-operational defect ratios.",
      icon: ShieldCheck,
    },
    {
      title: "Team Collaboration",
      desc: "Partnered alongside senior assembly leads, quality managers, and floor operators to resolve production constraints and optimize plant schedules.",
      icon: Users,
    },
    {
      title: "Industrial Engineering",
      desc: "Studied lean factory layouts, continuous cycle time limits, 5S floor protocols, and workplace ergonomic safety paradigms of a world-class manufacturing plant.",
      icon: Cpu,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#181818] border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#D32F2F]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#D32F2F]">
            03 / Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Experience Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-lg bg-[#202020] border border-white/[0.03] space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Technical Grid Overlay */}
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-[#D32F2F]/40 border-l border-b border-white/[0.03]">
                OPERATIONS__WIPRO
              </div>

              <div className="flex items-start gap-4 pb-6 border-b border-white/[0.05]">
                <div className="p-3 rounded bg-black border border-white/[0.05] text-[#D32F2F]">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
                    Wipro Infrastructure Engineering
                  </h3>
                  <p className="text-[#B0B0B0] font-mono text-xs uppercase tracking-wider mt-1">
                    Chennai, India
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="block font-mono text-[10px] text-[#B0B0B0] uppercase">Position Title</span>
                  <span className="text-white text-base font-semibold">Apprentice Engineer</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#B0B0B0] uppercase">Assigned Department</span>
                  <span className="text-[#EF5350] text-sm font-semibold">Assembly Operations</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#B0B0B0] uppercase">Core Tenet</span>
                  <span className="text-white text-xs leading-relaxed block mt-1 text-gray-400">
                    Acquiring top-tier hands-on plant exposure, auditing advanced assembly lines, and implementing structural optimization loops for industrial hydraulic systems.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Highlights Breakdown Right Column */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-[10px] text-[#B0B0B0] uppercase tracking-wider block mb-2 px-1">
              Industrial Competence Acquired
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className={`p-5 rounded-lg bg-[#1F1F1F]/60 border border-white/[0.02] hover:border-[#D32F2F]/30 transition-all duration-300 ${
                      i === highlights.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#181818] border border-white/[0.05] text-[#D32F2F]">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-xs sm:text-sm text-white">
                          {h.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed mt-1">
                          {h.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
