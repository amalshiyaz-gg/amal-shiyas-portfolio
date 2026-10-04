import {
  FileDown,
  Calendar,
  GraduationCap,
  Award,
  FileText,
  Briefcase,
  CheckCircle2,
  Trophy,
  Globe,
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
            <div className="p-6 md:p-8 rounded-lg bg-[#202020] border border-white/[0.03] space-y-8">

              {/* 1. EDUCATION */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-white/[0.05]">
                  <GraduationCap className="text-[#D32F2F]" size={20} />
                  <h3 className="font-sans font-bold text-lg text-white">
                    Education & Academic Qualifications
                  </h3>
                </div>

                <div className="relative border-l border-white/[0.05] pl-6 ml-3 space-y-6">
                  {/* B.Tech Mechanical */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border border-[#D32F2F] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-sans font-bold text-sm text-white">
                        B.Tech in Mechanical Engineering
                      </h4>

                      <span className="font-mono text-[10px] text-[#EF5350] bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded flex items-center gap-1 w-max">
                        <Calendar size={10} />
                        10/2022 - 2026
                      </span>
                    </div>

                    <p className="text-xs text-[#B0B0B0] mt-1.5 leading-relaxed">
                      <span className="text-white font-semibold">Amrita Vishwa Vidyapeetham</span>, Amritapuri Campus, Kollam.
                      <br />
                      <span className="text-[#D32F2F] font-mono text-[11px]">CGPA: 6.82 / 10.0</span> — Specializing in Machine Design, Manufacturing Processes, Fluid Power Systems, CAD Modeling, GD&T, and Automotive Systems.
                    </p>
                  </div>

                  {/* High School */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-sans font-bold text-sm text-white">
                        High School & Higher Secondary Education
                      </h4>

                      <span className="font-mono text-[10px] text-gray-400">
                        2022
                      </span>
                    </div>

                    <p className="text-xs text-[#B0B0B0] mt-1.5">
                      <span className="text-white font-semibold">Stratford Public School</span>, Kollam, India.
                      <br />
                      <span className="text-gray-300 font-mono text-[11px]">12th Grade: 78.9%</span> | <span className="text-gray-300 font-mono text-[11px]">10th Grade: 89.8%</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. INDUSTRIAL EXPERIENCE & INTERNSHIPS */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-2 pb-3 border-b border-white/[0.05]">
                  <Briefcase className="text-[#D32F2F]" size={20} />
                  <h3 className="font-sans font-bold text-lg text-white">
                    Industrial Training & Experience
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Wipro */}
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-sans font-bold text-sm text-white">
                        Wipro Infrastructure Engineering — Apprentice Engineer
                      </h4>
                      <span className="font-mono text-[10px] text-[#EF5350]">06/2026 – 07/2026 | Chennai</span>
                    </div>
                    <ul className="text-xs text-[#B0B0B0] space-y-1 list-disc list-inside">
                      <li>Worked in Hydraulics division supporting assembly and manufacturing operations.</li>
                      <li>Assisted in assembly, inspection, and testing of hydraulic components and systems.</li>
                      <li>Followed industrial quality standards and safety procedures during production.</li>
                    </ul>
                  </div>

                  {/* UEIL */}
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-sans font-bold text-sm text-white">
                        United Electrical Industries Limited — Intern
                      </h4>
                      <span className="font-mono text-[10px] text-gray-400">04/2025 – 05/2025 | Kollam</span>
                    </div>
                    <ul className="text-xs text-[#B0B0B0] space-y-1 list-disc list-inside">
                      <li>Gained hands-on exposure to machining, assembly, welding, and electroplating.</li>
                      <li>Learned quality control and testing methods for electrical/mechanical components.</li>
                    </ul>
                  </div>

                  {/* KMML */}
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-sans font-bold text-sm text-white">
                        Kerala Minerals & Metals Ltd (KMML) — Intern
                      </h4>
                      <span className="font-mono text-[10px] text-gray-400">08/2024 – 09/2024 | Kollam</span>
                    </div>
                    <ul className="text-xs text-[#B0B0B0] space-y-1 list-disc list-inside">
                      <li>Gained hands-on experience in titanium dioxide manufacturing and chloride route processing.</li>
                      <li>Observed industrial-scale mineral processing operations and quality control procedures.</li>
                    </ul>
                  </div>

                  {/* KEL */}
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-sans font-bold text-sm text-white">
                        Kerala Electrical & Allied Engineering Co. Ltd (KEL) — Intern
                      </h4>
                      <span className="font-mono text-[10px] text-gray-400">10/2023 – 11/2023 | Kollam</span>
                    </div>
                    <ul className="text-xs text-[#B0B0B0] space-y-1 list-disc list-inside">
                      <li>Applied mechanical engineering concepts in heavy engineering operations and maintenance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. CERTIFICATIONS & ACHIEVEMENTS */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 pb-3 border-b border-white/[0.05]">
                  <Award className="text-[#D32F2F]" size={20} />
                  <h3 className="font-sans font-bold text-lg text-white">
                    Certifications & Extracurricular Leadership
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-1.5">
                    <span className="font-mono text-[10px] text-[#EF5350]">Google Cloud / Udacity (10/2023)</span>
                    <h4 className="font-bold text-xs text-white">Introduction to Generative AI</h4>
                    <p className="text-[11px] text-gray-400">Mastered fundamental AI and machine learning concepts through Google Cloud certification.</p>
                  </div>

                  <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-1.5">
                    <span className="font-mono text-[10px] text-[#EF5350]">Coursera (07/2025)</span>
                    <h4 className="font-bold text-xs text-white">CFD — Airflow Around a Spoiler</h4>
                    <p className="text-[11px] text-gray-400">Incompressible fluid flow simulation and aerodynamic post-processing.</p>
                  </div>

                  <div className="p-4 rounded bg-[#181818] border border-white/[0.03] space-y-1.5 sm:col-span-2">
                    <span className="font-mono text-[10px] text-[#EF5350]">IKR 2025 — Indian Kart Racing</span>
                    <h4 className="font-bold text-xs text-white">Team Asphalt Racing — All-India Rank 13</h4>
                    <p className="text-[11px] text-gray-400">Contributed to design, fabrication, and racing at Coastt Speedway under ISIE. Secured award in Lightest Weight Category.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 md:p-8 rounded-lg bg-[#202020] border border-[#D32F2F]/20 hover:border-[#D32F2F] transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group">

              <div className="absolute inset-0 bg-gradient-to-b from-[#D32F2F]/5 via-transparent to-transparent opacity-30 pointer-events-none" />

              <div className="space-y-6 pt-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#181818] border border-white/[0.05] group-hover:border-[#D32F2F]/30 flex items-center justify-center text-[#D32F2F] transition-all duration-300">
                  <FileText size={28} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg text-white">
                    Official Resume Sheet
                  </h3>

                  <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                    Download the latest version of my resume including
                    education, industrial training, CAD projects, and core skills.
                  </p>
                </div>
              </div>

              <a
                href="/resume/Amal_Shiyas_Resume.pdf"
                download="Amal_Shiyas_Resume.pdf"
                className="w-full mt-8 py-3 bg-[#D32F2F] hover:bg-[#EF5350] text-white font-mono text-sm flex items-center justify-center gap-2 rounded-md transition-all duration-300 cursor-pointer shadow-lg"
              >
                <FileDown size={14} />
                Download Resume PDF
              </a>

            </div>

            {/* Quick Skills Summary Box */}
            <div className="p-6 rounded-lg bg-[#202020] border border-white/[0.03] space-y-3 font-mono text-xs">
              <span className="text-[#EF5350] text-[10px] uppercase font-bold tracking-wider block border-b border-white/[0.05] pb-2">
                Languages & Services
              </span>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between"><span className="text-gray-500">English:</span> <span>Professional Fluency</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Malayalam:</span> <span>Native</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Volunteering:</span> <span>Exam Scribe, Amritavarsham</span></div>
                <div className="flex justify-between"><span className="text-gray-500">ASME AVV:</span> <span>Executive Member</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}