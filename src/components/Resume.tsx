import {
  FileDown,
  Calendar,
  GraduationCap,
  Award,
  FileText,
} from "lucide-react";

interface ResumeProps {
  onDownloadResume: () => void;
}

export default function Resume({ onDownloadResume }: ResumeProps) {
  return (
    <section
      id="resume"
      className="py-24 bg-[#181818] border-b border-white/[0.03]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#D32F2F]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#D32F2F]">
            05 / Academic & Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 md:p-8 rounded-lg bg-[#202020] border border-white/[0.03] space-y-6">

              <div className="flex items-center gap-2 pb-4 border-b border-white/[0.05]">
                <GraduationCap
                  className="text-[#D32F2F]"
                  size={20}
                />
                <h3 className="font-sans font-bold text-lg text-white">
                  Education & Foundations
                </h3>
              </div>

              <div className="relative border-l border-white/[0.05] pl-6 ml-3 space-y-8">

                {/* Education */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border border-[#D32F2F] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-sans font-bold text-sm text-white">
                      Bachelor of Technology in Mechanical Engineering
                    </h4>

                    <span className="font-mono text-[10px] text-[#EF5350] bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded flex items-center gap-1 w-max">
                      <Calendar size={10} />
                      2022 - 2026
                    </span>
                  </div>

                  <p className="text-xs text-[#B0B0B0] mt-2">
                    Amrita Vishwa Vidyapeetham, Amritapuri Campus, Kollam.
                    Graduated with a CGPA of 6.73/10. Coursework included
                    Machine Design, Manufacturing Processes, Fluid Power
                    Systems, CAD Modeling, Engineering Drawing and Automotive
                    Engineering.
                  </p>
                </div>

                {/* Internships */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border border-[#D32F2F] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-sans font-bold text-sm text-white">
                      Industrial Training & Internships
                    </h4>

                    <span className="font-mono text-[10px] text-gray-500">
                      2024 - 2025
                    </span>
                  </div>

                  <div className="space-y-3 mt-2">

                    <p className="text-xs text-[#B0B0B0]">
                      <span className="text-white font-semibold">
                        Kerala Minerals & Metals Ltd (KMML)
                      </span>
                      {" "}– Studied Titanium Dioxide manufacturing,
                      chloride-route processing, synthetic rutile production,
                      and large-scale industrial operations.
                    </p>

                    <p className="text-xs text-[#B0B0B0]">
                      <span className="text-white font-semibold">
                        United Electrical Industries Ltd (UEL)
                      </span>
                      {" "}– Gained practical exposure to machining,
                      fabrication, welding, assembly processes, quality
                      inspection, and production workflows.
                    </p>

                    <p className="text-xs text-[#B0B0B0]">
                      <span className="text-white font-semibold">
                        Kerala Electrical & Allied Engineering Co. Ltd (KEL)
                      </span>
                      {" "}– Observed heavy engineering manufacturing,
                      industrial maintenance practices, quality assurance,
                      and production management systems.
                    </p>

                  </div>
                </div>

              </div>

              {/* Academic Focus */}
              <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-2">
                <div className="flex items-center gap-2 text-[#EF5350]">
                  <Award size={14} />
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                    Core Engineering Academic Focus
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  Conducted research and development work in pressure sensing,
                  contact mechanics, embedded systems, sensor integration,
                  CAD-based enclosure design, and real-time data acquisition
                  for engineering applications.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4">
            <div className="h-full p-6 md:p-8 rounded-lg bg-[#202020] border border-[#D32F2F]/20 hover:border-[#D32F2F] transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group">

              <div className="absolute inset-0 bg-gradient-to-b from-[#D32F2F]/5 via-transparent to-transparent opacity-30 pointer-events-none" />

              <div className="absolute top-2 left-2 text-[9px] font-mono text-gray-500">
                PORT_DOCS
              </div>

              <div className="space-y-6 pt-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#181818] border border-white/[0.05] group-hover:border-[#D32F2F]/30 flex items-center justify-center text-[#D32F2F] transition-all duration-300">
                  <FileText size={28} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg text-white">
                    Resume Download
                  </h3>

                  <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                    Download the latest version of my resume including
                    education, internships, technical projects and work
                    experience.
                  </p>
                </div>
              </div>

              <a
                href="/resume/Amal_Shiyas_Resume.pdf"
                download
                className="w-full mt-8 py-3 bg-[#D32F2F] hover:bg-[#EF5350] text-white font-mono text-sm flex items-center justify-center gap-2 rounded-md transition-all duration-300 cursor-pointer"
              >
                <FileDown size={14} />
                Download Resume
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}