import { Briefcase, Factory, ShieldCheck, Calendar, MapPin, Building, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Wipro Infrastructure Engineering",
      role: "Apprentice Engineer",
      period: "06/2026 – 07/2026",
      location: "Chennai, India",
      bullets: [
        "Worked in the Hydraulics division supporting assembly and manufacturing operations.",
        "Assisted in the assembly, inspection, and testing of hydraulic components and systems.",
        "Followed industrial quality standards and safety procedures during production activities."
      ],
      tag: "Hydraulics & Assembly",
      isPrimary: true,
    },
    {
      company: "United Electrical Industries Limited",
      role: "Intern",
      period: "04/2025 – 05/2025",
      location: "Kollam, Kerala",
      bullets: [
        "Gained hands-on exposure to industrial manufacturing processes, including machining, assembly, welding and electroplating.",
        "Learned quality control and testing methods for electrical components, strengthening skills in inspection and standards compliance."
      ],
      tag: "Machining & Quality Control",
      isPrimary: false,
    },
    {
      company: "Kerala Minerals & Metals Ltd (KMML)",
      role: "Intern",
      period: "08/2024 – 09/2024",
      location: "Kollam, India",
      bullets: [
        "Gained hands-on experience in titanium dioxide manufacturing, from mineral separation to final product.",
        "Studied the chloride route process for TiO2 production and synthetic rutile manufacturing.",
        "Observed industrial-scale mineral processing operations and quality control procedures."
      ],
      tag: "Mineral Processing & Chemical Ops",
      isPrimary: false,
    },
    {
      company: "Kerala Electrical & Allied Engineering Co. Ltd (KEL)",
      role: "Intern",
      period: "10/2023 – 11/2023",
      location: "Kollam, India",
      bullets: [
        "Applied mechanical engineering concepts in practical industrial settings at KEL.",
        "Collaborated with industry professionals on day-to-day operations and maintenance procedures.",
        "Gained practical exposure to industrial electrical and mechanical systems."
      ],
      tag: "Heavy Engineering & Maintenance",
      isPrimary: false,
    }
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

        <div className="space-y-6">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-sans font-bold text-white tracking-tight">
              Industrial Training & Operations Timeline
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Hands-on plant exposure across hydraulic assembly operations, manufacturing processes, mineral processing, and quality control systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg bg-[#202020] border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  exp.isPrimary
                    ? "border-[#D32F2F]/40 hover:border-[#D32F2F] shadow-lg"
                    : "border-white/[0.03] hover:border-white/[0.08]"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#D32F2F] block font-semibold">
                        {exp.tag}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight mt-0.5">
                        {exp.company}
                      </h4>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-black text-[#EF5350] border border-white/[0.05] font-mono text-[9px] shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400 border-b border-white/[0.05] pb-3">
                    <span className="text-white font-semibold flex items-center gap-1">
                      <Briefcase size={12} className="text-[#D32F2F]" />
                      {exp.role}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1 text-xs text-[#B0B0B0]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 size={12} className="text-[#D32F2F] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/[0.03] flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>FACILITY_ID_0{idx + 1}</span>
                  <span className="text-gray-400">VERIFIED INDUSTRIAL LOG</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
