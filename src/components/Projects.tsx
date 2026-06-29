import { useState } from "react";
import { ChevronLeft, ChevronRight, Settings, Sliders, Layers, Eye, Code, DraftingCompass } from "lucide-react";

import velostatTop from "../assets/images/velostat_top_1781816294339.jpg";
import fsr1 from "../assets/images/fsr_applications.png";
import wheelchairImage from "../assets/images/wc.jpg";
export default function Projects() {
  // Slider states for projects
  const [velostatIndex, setVelostatIndex] = useState(0);
  const [fsrIndex, setFsrIndex] = useState(0);

  // Modal or Inspector tab states for each project
  const [activeTab1, setActiveTab1] = useState<"viewer" | "blueprint">("viewer");
  const [activeTab2, setActiveTab2] = useState<"viewer" | "blueprint">("viewer");

  // Project 1: Velostat Pressuring Mapping Enclosure slideshow data
  const velostatSlides = [
    {
      type: "image",
      src: velostatTop,
      alt: "Fusion 360 Velostat Top Enclosure Render",
      label: "ISO-Metric Assembly Render",
    },
    {
      type: "schematic-bottom",
      label: "Bottom Base Enclosure & Mounts Draft (CAD SVG)",
    },
    {
      type: "schematic-side",
      label: "Cross-Sectional Velostat Sensor Array Stackup Draft (CAD SVG)",
    },
  ];

  // Project 2: FSR sensor mounting enclosure slideshow data
  const fsrSlides = [
    {
      type: "image",
      src: fsr1,
      alt: "Fusion 360 FSR Mount render",
      label: "Isometric Assembly Concept",
    },
    {
      type: "schematic-wiring",
      label: "FSR Sensor Array Internal Wiring & Pin Alignment (CAD SVG)",
    },
    {
      type: "schematic-exploded",
      label: "Mechanical Part Tolerancing & Mating Clearances (CAD SVG)",
    },
  ];

  const handleNextVelostat = () => {
    setVelostatIndex((prev) => (prev + 1) % velostatSlides.length);
  };
  const handlePrevVelostat = () => {
    setVelostatIndex((prev) => (prev - 1 + velostatSlides.length) % velostatSlides.length);
  };

  const handleNextFsr = () => {
    setFsrIndex((prev) => (prev + 1) % fsrSlides.length);
  };
  const handlePrevFsr = () => {
    setFsrIndex((prev) => (prev - 1 + fsrSlides.length) % fsrSlides.length);
  };

  return (
    <section id="projects" className="py-24 bg-[#0F0F0F] border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-[#D32F2F]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#D32F2F]">
            02 / Engineering Projects
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-sans font-bold text-white tracking-tight">
            Featured CAD & Systems Portfolios
          </h3>
          <p className="text-gray-400 text-sm mt-1 max-w-2xl">
            Surgical physical integration projects displaying assembly-first design methodologies, strict dimension control, robust wiring routes, and realistic physical prototypes.
          </p>
        </div>

        {/* ========================================================== */}
        {/* PROJECT 1 CARD: Velostat Pressuring Mapping System */}
        {/* ========================================================== */}
        <div className="p-6 md:p-8 rounded-lg bg-[#181818] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Slider Display Frame */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B0B0B0]">
                  Project Viewport: {velostatSlides[velostatIndex].label}
                </span>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setActiveTab1("viewer")}
                  className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase border ${activeTab1 === "viewer"
                    ? "text-[#D32F2F] bg-white/[0.03] border-[#D32F2F]/40"
                    : "text-gray-500 border-transparent hover:text-white"
                    }`}
                >
                  3D View
                </button>
                <button
                  onClick={() => setActiveTab1("blueprint")}
                  className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase border ${activeTab1 === "blueprint"
                    ? "text-[#D32F2F] bg-white/[0.03] border-[#D32F2F]/40"
                    : "text-gray-500 border-transparent hover:text-white"
                    }`}
                >
                  Standards
                </button>
              </div>
            </div>

            {activeTab1 === "viewer" ? (
              <div className="relative aspect-[4/3] bg-[#0A0A0A] rounded overflow-hidden border border-white/[0.05] flex items-center justify-center group">
                {velostatSlides[velostatIndex].type === "image" ? (
                  <img
                    src={velostatSlides[velostatIndex].src}
                    alt={velostatSlides[velostatIndex].alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : velostatSlides[velostatIndex].type === "schematic-bottom" ? (
                  // Custom Vector Drawing Vector representation of Bottom Base CAD Enclosure
                  <svg className="w-full h-full p-4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid Lines */}
                    <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="rgba(211,47,47,0.03)" strokeWidth="1" />
                    <path d="M50 0 V300 M100 0 V300 M150 0 V300 M200 0 V300 M250 0 V300 M300 0 V300 M350 0 V300" stroke="rgba(211,47,47,0.03)" strokeWidth="1" />

                    {/* Outer Frame with Drafting lines */}
                    <rect x="80" y="40" width="240" height="220" rx="12" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                    <rect x="84" y="44" width="232" height="212" rx="8" stroke="#D32F2F" strokeWidth="1.5" />

                    {/* Mounting Bosses in Corners */}
                    <circle cx="100" cy="64" r="10" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="100" cy="64" r="3" fill="#D32F2F" />
                    <circle cx="300" cy="64" r="10" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="300" cy="64" r="3" fill="#D32F2F" />
                    <circle cx="100" cy="236" r="10" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="100" cy="236" r="3" fill="#D32F2F" />
                    <circle cx="300" cy="236" r="10" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="300" cy="236" r="3" fill="#D32F2F" />

                    {/* Sensor Array Grid Lines Placeholder inside CAD */}
                    <rect x="120" y="84" width="160" height="132" rx="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <line x1="160" y1="84" x2="160" y2="216" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="200" y1="84" x2="200" y2="216" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="240" y1="84" x2="240" y2="216" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />

                    <line x1="120" y1="117" x2="280" y2="117" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="120" y1="150" x2="280" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="120" y1="183" x2="280" y2="183" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Wire Harness Outlet Router */}
                    <path d="M200 44 L200 24 L220 24" stroke="#EF5350" strokeWidth="1.5" />
                    <circle cx="220" cy="24" r="2.5" fill="#EF5350" />

                    {/* Blueprint Text Overlay */}
                    <text x="90" y="25" fill="#EF5350" fontSize="8" fontFamily="monospace">BASE_BOX: FULLSCALE [1:1]</text>
                    <text x="240" y="285" fill="#B0B0B0" fontSize="8" fontFamily="monospace">DRAWN BY: A. SHIYAS</text>

                    {/* Custom dimension arrows */}
                    <line x1="70" y1="44" x2="70" y2="236" stroke="#FFFFFF" strokeWidth="0.8" />
                    <polygon points="70,44 68,49 72,49" fill="#FFFFFF" />
                    <polygon points="70,236 68,231 72,231" fill="#FFFFFF" />
                    <text x="48" y="145" fill="#FFFFFF" fontSize="8" fontFamily="monospace" transform="rotate(-90 48 145)">192.00 mm</text>
                  </svg>
                ) : (
                  // Custom Vector Drawing representing Cross-Sectional stack layers for Velostat sensor
                  <svg className="w-full h-full p-4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid */}
                    <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                    {/* Solid Base Plate Layer */}
                    <rect x="50" y="180" width="300" height="20" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
                    <text x="60" y="193" fill="#B0B0B0" fontSize="7" fontFamily="monospace">Acrylic Base Substrate [3.0mm]</text>

                    {/* Bottom Electrode Strip Layer */}
                    <rect x="80" y="170" width="240" height="4" fill="rgba(211, 47, 47, 0.15)" stroke="#D32F2F" strokeWidth="1" />
                    <text x="90" y="167" fill="#EF5350" fontSize="7" fontFamily="monospace">Copper Bus Tracks [X-Axis, 0.1mm]</text>

                    {/* Velostat sheet active layer */}
                    <rect x="70" y="138" width="260" height="24" fill="rgba(32, 32, 32, 0.9)" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="80" y="153" fill="#FFFFFF" fontSize="8" fontFamily="monospace">Velostat Piezoresistive Film Layer (0.5mm)</text>

                    {/* Top Electrode Strip Layer */}
                    <rect x="80" y="126" width="240" height="4" fill="rgba(211, 47, 47, 0.15)" stroke="#D32F2F" strokeWidth="1" />
                    <text x="90" y="121" fill="#EF5350" fontSize="7" fontFamily="monospace">Copper Bus Tracks [Y-Axis, 0.1mm]</text>

                    {/* Protective Cover Top Layer */}
                    <rect x="50" y="98" width="300" height="20" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
                    <text x="60" y="111" fill="#B0B0B0" fontSize="7" fontFamily="monospace">Top Protective PET Plate [2.0mm]</text>

                    {/* Contact Pressure Arrows */}
                    <path d="M200 30 L200 80" stroke="#EF5350" strokeWidth="2" strokeDasharray="2 2" />
                    <polygon points="200,80 196,72 204,72" fill="#EF5350" />
                    <text x="210" y="50" fill="#EF5350" fontSize="9" fontFamily="monospace">DYNAMIC FORCE (N)</text>

                    <text x="50" y="250" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">STACK ASSY TRACE v1.4</text>
                  </svg>
                )}

                {/* Left/Right Slider Manual Controls */}
                <button
                  onClick={handlePrevVelostat}
                  className="absolute left-3 p-1.5 rounded bg-black/70 border border-white/10 hover:border-[#D32F2F] text-[#B0B0B0] hover:text-white transition-all pointer-events-auto"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNextVelostat}
                  className="absolute right-3 p-1.5 rounded bg-black/70 border border-white/10 hover:border-[#D32F2F] text-[#B0B0B0] hover:text-white transition-all pointer-events-auto"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            ) : (
              // Standards & Tolerances display mode
              <div className="aspect-[4/3] bg-[#0A0A0A] p-5 rounded border border-white/[0.05] flex flex-col justify-between font-mono text-xs">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#D32F2F] border-b border-white/[0.05] pb-2">
                    <DraftingCompass size={14} />
                    <span>CAD SPECIFICATION METADATA</span>
                  </div>
                  <div className="space-y-2 text-[#B0B0B0]">
                    <div className="flex justify-between"><span className="text-gray-500">File Name:</span> <span className="text-white">VEL_SENSING_GRID_X32.F3D</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Coordinate origin:</span> <span className="text-white">CENTER_OF_MASS</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Primary Tolerance:</span> <span className="text-white">±0.05 mm (CNC limits)</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Material Selection:</span> <span className="text-white">Polycarbonate & PET</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Assembly Screws:</span> <span className="text-white">M3x12 Socket Head (Hex)</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Gaskets Selected:</span> <span className="text-white">0.5mm Nitrile Rubber O-ring</span></div>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-white/[0.01] border border-white/[0.05] text-[10px] text-[#EF5350]">
                  * Designed with specific relief ports for the electrical wiring harness, ensuring no stress is transferred directly to the copper ribbon joints during mechanical deflection.
                </div>
              </div>
            )}

            {/* Slider Dots Indicator */}
            <div className="flex justify-center gap-1.5 pt-1">
              {velostatSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setVelostatIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-150 ${velostatIndex === idx ? "w-6 bg-[#D32F2F]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>

          </div>

          {/* Project Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#D32F2F] uppercase block">
                Project 01 / Sensor Integration
              </span>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Real-Time Spatio-Temporal Pressure Mapping in Contact Mechanics
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Developed a fully customized, ultra-low-cost physical pressure distribution analyzer using responsive **Velostat piezoresistive sheets** mapped across row-column copper strip coordinates.
              </p>

              {/* Functional bullets */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">
                  Enclosure Design Focus (Fusion 360):
                </span>
                <ul className="text-xs text-[#B0B0B0] space-y-1.5 list-inside list-disc">
                  <li>Incorporated precise column-grid constraints to secure parallel electrode alignments.</li>
                  <li>Drafted customized channels for seamless matrix wire-routing and stress relief points.</li>
                  <li>Modeled the structural casing for 3D printing and sheet-metal tooling processes.</li>
                  <li>Allowed for simple mechanical assembly using recess fastener pockets.</li>
                </ul>
              </div>
            </div>

            {/* Technology Chips and Stats Code */}
            <div className="pt-4 border-t border-white/[0.05] space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {["Fusion 360", "Arduino", "Python", "Velostat", "CAD Modeling"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-sm bg-black text-gray-400 text-[10px] font-mono border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* PROJECT 2 CARD: FSR Pressure Mapping Enclosure Design */}
        {/* ========================================================== */}
        <div className="p-6 md:p-8 rounded-lg bg-[#181818] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Project Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#D32F2F] uppercase block">
                Project 02 / Enclosure Design
              </span>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                FSR Pressure Mapping Enclosure Design
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Authored an industrial enclosure for discrete Force-Sensitive Register (FSR) configurations, ensuring durable sensor contact and minimizing mechanical pre-load deflection.
              </p>

              {/* Functional Bullets */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">
                  Key Deliverables & Analysis:
                </span>
                <ul className="text-xs text-[#B0B0B0] space-y-1.5 list-inside list-disc">
                  <li>Correct mechanical mounting with exact FSR active-area seating constraints.</li>
                  <li>Integrated micro-wire guides to eliminate connector bending moments.</li>
                  <li>Engineered press-fit fasteners for swift manual repair and inspection.</li>
                  <li>Validated flat tolerances for absolute planar contact across operations.</li>
                </ul>
              </div>
            </div>

            {/* Technology Chips */}
            <div className="pt-4 border-t border-white/[0.05] space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {["Fusion 360", "Arduino", "FSR Sensors", "Enclosure Design", "Prototypes"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-sm bg-black text-gray-400 text-[10px] font-mono border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Display Frame */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 order-1 lg:order-2">
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B0B0B0]">
                  Project Viewport: {fsrSlides[fsrIndex].label}
                </span>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setActiveTab2("viewer")}
                  className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase border ${activeTab2 === "viewer"
                    ? "text-[#D32F2F] bg-white/[0.03] border-[#D32F2F]/40"
                    : "text-gray-500 border-transparent hover:text-white"
                    }`}
                >
                  3D View
                </button>
                <button
                  onClick={() => setActiveTab2("blueprint")}
                  className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase border ${activeTab2 === "blueprint"
                    ? "text-[#D32F2F] bg-white/[0.03] border-[#D32F2F]/40"
                    : "text-gray-500 border-transparent hover:text-white"
                    }`}
                >
                  Standards
                </button>
              </div>
            </div>

            {activeTab2 === "viewer" ? (
              <div className="relative aspect-[4/3] bg-[#0A0A0A] rounded overflow-hidden border border-white/[0.05] flex items-center justify-center group">
                {fsrSlides[fsrIndex].type === "image" ? (
                  <img
                    src={fsrSlides[fsrIndex].src}
                    alt={fsrSlides[fsrIndex].alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : fsrSlides[fsrIndex].type === "schematic-wiring" ? (
                  // Custom Vector Drawing representing FSR Array Internal Wiring Setup
                  <svg className="w-full h-full p-4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />

                    {/* Six discrete FSR ports */}
                    <circle cx="100" cy="100" r="24" stroke="#D32F2F" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="100" cy="100" r="18" fill="rgba(211,47,47,0.05)" stroke="#D32F2F" strokeWidth="1.5" />
                    <text x="100" y="103" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif" textAnchor="middle">FSR 01</text>

                    <circle cx="300" cy="100" r="24" stroke="#D32F2F" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="300" cy="100" r="18" fill="rgba(211,47,47,0.05)" stroke="#D32F2F" strokeWidth="1.5" />
                    <text x="300" y="103" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif" textAnchor="middle">FSR 02</text>

                    <circle cx="200" cy="200" r="24" stroke="#D32F2F" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="200" cy="200" r="18" fill="rgba(211,47,47,0.05)" stroke="#D32F2F" strokeWidth="1.5" />
                    <text x="200" y="203" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif" textAnchor="middle">FSR 03</text>

                    {/* Integrated Wire Traces */}
                    <path d="M100 118 V150 H180 V182" stroke="#EF5350" strokeWidth="1" />
                    <path d="M300 118 V150 H220 V182" stroke="#EF5350" strokeWidth="1" />

                    {/* Common Ground Bus */}
                    <path d="M100 82 V60 H300 V82" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="200" y="55" fill="#B0B0B0" fontSize="8" fontFamily="monospace" textAnchor="middle">COMMON GND LINE (0V)</text>

                    {/* Analog Read Pin arrows */}
                    <path d="M200 218 V250" stroke="#EF5350" strokeWidth="1.5" />
                    <circle cx="200" cy="250" r="2.5" fill="#EF5350" />
                    <text x="210" y="248" fill="#EF5350" fontSize="8" fontFamily="monospace">TO ARDUINO [A0..A2]</text>

                    <text x="35" y="285" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">FSR_PINOUT_PLAN_REV_02</text>
                  </svg>
                ) : (
                  // Custom Vector Drawing representing Exploded schematic assembly layers showing screws
                  <svg className="w-full h-full p-4" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Isometric Exploded drafting lines */}
                    <line x1="200" y1="50" x2="200" y2="250" stroke="#EF5350" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Top M3 Fasteners */}
                    <rect x="185" y="45" width="30" height="8" rx="2" fill="rgba(255,255,255,0.1)" stroke="#FFFFFF" strokeWidth="1" />
                    <line x1="200" y1="53" x2="200" y2="70" stroke="#FFFFFF" strokeWidth="1" />
                    <text x="225" y="51" fill="#FFFFFF" fontSize="8" fontFamily="monospace">M3 Socket Capscrews (x4)</text>

                    {/* Top Enclosure Lid Plate */}
                    <polygon points="200,80 320,105 200,130 80,105" fill="rgba(211,47,47,0.04)" stroke="#D32F2F" strokeWidth="1.5" />
                    <text x="200" y="110" fill="#EF5350" fontSize="8" fontFamily="monospace" textAnchor="middle">ABS Top Capping Plate (thickness: 2.2mm)</text>

                    {/* Contact Puck array */}
                    <polygon points="200,140 280,155 200,170 120,155" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    <circle cx="200" cy="155" r="8" fill="rgba(211,47,47,0.3)" stroke="#D32F2F" strokeWidth="1" />
                    <text x="220" y="152" fill="#B0B0B0" fontSize="8" fontFamily="monospace">Sensor Contact Pucks (Elastomer)</text>

                    {/* Bottom Chamber Housing Body */}
                    <polygon points="200,195 320,220 200,245 80,220" fill="rgba(255,255,255,0.03)" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="200" y="225" fill="#FFFFFF" fontSize="8" fontFamily="monospace" textAnchor="middle">Main Housing Base Frame</text>

                    <text x="240" y="285" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">EXPLODED ASSEMBLY TRACE</text>
                  </svg>
                )}

                {/* Left/Right Slider Controls */}
                <button
                  onClick={handlePrevFsr}
                  className="absolute left-3 p-1.5 rounded bg-black/70 border border-white/10 hover:border-[#D32F2F] text-[#B0B0B0] hover:text-white transition-all pointer-events-auto"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNextFsr}
                  className="absolute right-3 p-1.5 rounded bg-black/70 border border-white/10 hover:border-[#D32F2F] text-[#B0B0B0] hover:text-white transition-all pointer-events-auto"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            ) : (
              // Standards Drawer
              <div className="aspect-[4/3] bg-[#0A0A0A] p-5 rounded border border-white/[0.05] flex flex-col justify-between font-mono text-xs">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#D32F2F] border-b border-white/[0.05] pb-2">
                    <DraftingCompass size={14} />
                    <span>ENCLOSURE SYSTEM METRICS</span>
                  </div>
                  <div className="space-y-2 text-[#B0B0B0]">
                    <div className="flex justify-between"><span className="text-gray-500">File Name:</span> <span className="text-white">FSR_HOUSING_REV2.F3D</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Fastening Method:</span> <span className="text-white">Threaded Brass Inserts (Heated)</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Mating Clearance:</span> <span className="text-white">0.15mm default</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Contact Force limit:</span> <span className="text-white">100 N maximum</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Material Type:</span> <span className="text-white">Formlabs Draft Resin / ABS ESD</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Minimum Wall Thk:</span> <span className="text-white">2.50 mm (structural safety)</span></div>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-white/[0.01] border border-white/[0.05] text-[10px] text-[#EF5350]">
                  * Integrated an internal heat-set insert pocket pattern (M3 size) to allow continuous re-assembly without wearing out plastic threads.
                </div>
              </div>
            )}

            {/* Slider Dots */}
            <div className="flex justify-center gap-1.5 pt-1">
              {fsrSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFsrIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-150 ${fsrIndex === idx ? "w-6 bg-[#D32F2F]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* PROJECT 3 CARD: Hand gesture control Wheelchair prototype */}
        {/* ========================================================== */}
        <div className="p-6 md:p-8 rounded-lg bg-[#181818] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Static Top-tier Render Viewport */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2 border-b border-white/[0.05] pb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B0B0B0]">
                Hand Gesture Controlled Wheelchair Viewport
              </span>
            </div>

            <div className="relative aspect-[16/9] bg-[#0A0A0A] rounded overflow-hidden border border-white/[0.05] flex items-center justify-center group">
              <img
                src={wheelchairImage}
                alt="Smart Blind Spot Ultrasonic bumper integration render"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-2 right-2 bg-black/60 px-2 py-0.5 rounded border border-white/10 font-mono text-[8px] text-[#EF5350]">
                GESTURE_CHAIR_V1.DWG
              </div>
            </div>

            <div className="p-3 bg-[#0A0A0A] rounded border border-white/[0.03] font-mono text-[10px] text-[#B0B0B0] flex items-center justify-between">
              <span>Control Method: Hand Gesture Recognition</span>
              <span className="text-[#EF5350]">Response Time: &lt;150 ms</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#D32F2F] uppercase block">
                Project 03 / Embedded Systems
              </span>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Hand gesture control Wheelchair prototype
              </h4>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Built a gesture-controlled wheelchair prototype that translates hand movements into real-time directional control,
                enabling intuitive mobility without traditional input devices.
              </p>

              {/* Functional highlights */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">
                  System Features:
                </span>
                <ul className="text-xs text-[#B0B0B0] space-y-1.5 list-inside list-disc">
                  <li>Real-time hand gesture recognition using computer vision and machine learning.</li>
                  <li>Directional control (forward, backward, left, right, stop) via intuitive hand movements.</li>
                  <li>Obstacle detection using ultrasonic sensors for safe navigation.</li>
                  <li>Smooth and responsive motor control for precise movement.</li>
                </ul>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="pt-4 border-t border-white/[0.05]">
              <div className="flex flex-wrap gap-1.5">
                {["Arduino", "Python", "Ultrasonic Sensors", "Embedded Code"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-sm bg-black text-gray-400 text-[10px] font-mono border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
