import { Linkedin, Github, ArrowRight } from "lucide-react";
import CADCanvas from "./CADCanvas";
import profileImg from "../assets/images/amal.jpeg";

interface HeroProps {
  onViewProjects: () => void;
}

export default function Hero({ onViewProjects }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0F0F0F] pt-16 overflow-hidden"
    >
      <CADCanvas />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl border border-dashed border-[#D32F2F]/30 animate-[spin_50s_linear_infinite]" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D32F2F] to-[#EF5350] opacity-30 blur-sm group-hover:opacity-60 transition duration-300" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#D32F2F] shadow-2xl bg-[#181818]">
                <img
                  src={profileImg}
                  alt="Amal Shiyas"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
                />

                <span className="absolute top-2 left-2 text-[8px] font-mono text-[#D32F2F]/60">
                  ISO PROJ v1.0
                </span>

                <span className="absolute bottom-2 right-2 text-[8px] font-mono text-[#D32F2F]/60">
                  AMAL_SHIYAS.IGS
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-8 space-y-6 order-2 lg:order-2 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.02] border border-white/[0.05]">
              <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B0B0B0]">
                Mechanical Engineering Graduate
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Amal Shiyas
              </h1>

              <p className="text-lg sm:text-2xl font-mono text-[#D32F2F] font-semibold">
                Mechanical Engineer
              </p>
            </div>

            <p className="max-w-xl text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
              Mechanical Engineering graduate with practical exposure to manufacturing, assembly, inspection, and testing. Interested in automotive design, CAD modeling, product development, and mechanical engineering.
            </p>

            {/* Technical Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-t border-b border-white/[0.05] max-w-xl font-mono">
              <div>
                <span className="block text-[10px] text-[#B0B0B0] uppercase">
                  CAD Platform
                </span>
                <span className="text-white text-xs font-semibold">
                  Fusion 360
                </span>
              </div>

              <div>
                <span className="block text-[10px] text-[#B0B0B0] uppercase">
                  Focus
                </span>
                <span className="text-white text-xs font-semibold">
                  Automotive Design
                </span>
              </div>

              <div>
                <span className="block text-[10px] text-[#B0B0B0] uppercase">
                  Industrial Exposure
                </span>
                <span className="text-[#EF5350] text-xs font-semibold">
                  Manufacturing & Hydraulics
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button
                onClick={onViewProjects}
                className="px-6 py-3 bg-[#D32F2F] hover:bg-[#EF5350] text-white font-mono rounded-md flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight size={14} />
              </button>

              <a
                href="/resume/Amal_Shiyas_Resume.pdf"
                download
                className="px-6 py-3 bg-[#181818] border border-[#D32F2F] text-white rounded-md font-mono text-center hover:bg-[#D32F2F]/10 transition-all duration-300"
              >
                Download Resume
              </a>

            </div>

            {/* Socials */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs font-mono text-[#B0B0B0]">
                Connect:
              </span>

              <a
                href="https://linkedin.com/in/amalshiyas"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-white/[0.03] text-[#B0B0B0] hover:text-[#D32F2F] transition-all"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/amalgotbusiness"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-white/[0.03] text-[#B0B0B0] hover:text-[#D32F2F] transition-all"
              >
                <Github size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}