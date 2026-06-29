import { useState } from "react";
import { Terminal, Copy, Check, FileCode, Github, ExternalLink } from "lucide-react";

export default function ExportPanel() {
  const [activeCodeTab, setActiveCodeTab] = useState<"html" | "css" | "js">("html");
  const [copied, setCopied] = useState(false);

  // Static HTML template generated for raw deploy
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amal Shiyas | Mechanical Engineer</title>
    <!-- Tailwind CSS CDN for styling -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>
<body class="bg-gray-900 text-gray-200">
    <!-- Navbar Header -->
    <nav class="sticky top-0 bg-gray-950 border-b border-gray-800 z-50">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <span class="text-red-500 font-mono font-bold tracking-widest text-lg">AS</span>
            <div class="space-x-4">
                <a href="#home" class="hover:text-red-500">Home</a>
                <a href="#about" class="hover:text-red-500">About</a>
                <a href="#projects" class="hover:text-red-500">Projects</a>
                <a href="#experience" class="hover:text-red-500">Experience</a>
                <a href="#skills" class="hover:text-red-500">Skills</a>
                <a href="#contact" class="hover:text-red-500">Contact</a>
            </div>
        </div>
    </nav>
    <!-- Hero / Render, projects and contact follow -->
</body>
</html>`;

  const cssCode = `/* styles.css (Pure Vanilla CSS) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

body {
    background-color: #0F0F0F;
    font-family: 'Inter', sans-serif;
    color: #FFFFFF;
}

/* Red accents */
.accent-border {
    border: 2px solid #D32F2F;
}

/* Custom interactive CAD background effect */
#cad-mesh-fallback {
    background-size: 40px 40px;
    background-image: 
        linear-gradient(to right, rgba(211, 47, 47, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(211, 47, 47, 0.03) 1px, transparent 1px);
}

.hover-red:hover {
    color: #EF5350;
    transition: color 0.2s ease-in-out;
}`;

  const jsCode = `/* script.js (Vanilla Slide Mechanics) */
document.addEventListener("DOMContentLoaded", () => {
    // Gallery Sliders Initialization
    const setupSlider = (sliderId, nextId, prevId) => {
        const slider = document.getElementById(sliderId);
        const nextBtn = document.getElementById(nextId);
        const prevBtn = document.getElementById(prevId);
        if (!slider) return;
        
        let index = 0;
        const slides = slider.children;
        
        nextBtn.addEventListener("click", () => {
            slides[index].classList.add("hidden");
            index = (index + 1) % slides.length;
            slides[index].classList.remove("hidden");
        });
        
        prevBtn.addEventListener("click", () => {
            slides[index].classList.add("hidden");
            index = (index - 1 + slides.length) % slides.length;
            slides[index].classList.remove("hidden");
        });
    };
    setupSlider("slider-velostat", "btn-velostat-next", "btn-velostat-prev");
});`;

  const handleCopy = () => {
    const textToCopy = activeCodeTab === "html" ? htmlCode : activeCodeTab === "css" ? cssCode : jsCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#0F0F0F] border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#D32F2F]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#D32F2F]">
            06 / Static Code Export & Deployment
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Deployment instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-sans text-white tracking-tight">
                Static Engine Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                As a Mechanical Engineer, I build systems with raw efficiency. This portfolio contains a fully optimized, static-ready distribution. It operates completely offline, relies on **zero heavy framework runtimes**, and loads instantly.
              </p>
            </div>

            {/* Instruction Tabs */}
            <div className="space-y-4 font-mono text-xs">
              
              <div className="p-4 rounded bg-[#181818] border border-white/[0.04] space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Github size={14} className="text-[#D32F2F]" />
                  <span>GitHub Pages Deployment</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-gray-400 pl-1 leading-relaxed">
                  <li>Create a new public repository labeled <code className="text-white bg-black px-1 py-0.5 rounded">portfolio</code> on GitHub.</li>
                  <li>Commit <code className="text-[#EF5350]">index.html</code>, <code className="text-[#EF5350]">style.css</code>, and <code className="text-[#EF5350]">script.js</code> to the root.</li>
                  <li>Create a folder labeled <code className="text-white bg-black px-1 py-0.5 rounded">images/</code> and place your technical diagrams inside.</li>
                  <li>Navigate to Settings → Pages → Select your main branch → Deploy!</li>
                </ol>
              </div>

              <div className="p-4 rounded bg-[#181818] border border-white/[0.04] space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                  <ExternalLink size={14} className="text-[#D32F2F]" />
                  <span>Vercel Deployments</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Drag and drop the folder containing your static project files directly onto the <a href="https://vercel.com/deploy" target="_blank" rel="noreferrer" className="text-[#EF5350] underline hover:text-[#D32F2F]">Vercel Dashboard</a> web terminal for instant, free SSL hosting.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Code Viewport panel */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-black/90 border border-white/[0.08] shadow-2xl overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#111] border-b border-white/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-[#D32F2F]" />
                  <span className="font-mono text-[10px] uppercase text-gray-400 tracking-wider">
                    Source Code Viewer: static_build/
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
              </div>

              {/* File selectors */}
              <div className="flex bg-[#161616] border-b border-white/[0.03] text-xs font-mono">
                <button
                  onClick={() => setActiveCodeTab("html")}
                  className={`px-4 py-2 border-r border-[#1e1e1e] flex items-center gap-1.5 ${
                    activeCodeTab === "html" ? "text-white bg-black font-semibold border-b-2 border-b-[#D32F2F]" : "text-gray-500 hover:text-white"
                  }`}
                >
                  <FileCode size={12} /> index.html
                </button>
                <button
                  onClick={() => setActiveCodeTab("css")}
                  className={`px-4 py-2 border-r border-[#1e1e1e] flex items-center gap-1.5 ${
                    activeCodeTab === "css" ? "text-white bg-black font-semibold border-b-2 border-b-[#D32F2F]" : "text-gray-500 hover:text-white"
                  }`}
                >
                  <FileCode size={12} /> style.css
                </button>
                <button
                  onClick={() => setActiveCodeTab("js")}
                  className={`px-4 py-2 border-r border-[#1e1e1e] flex items-center gap-1.5 ${
                    activeCodeTab === "js" ? "text-white bg-black font-semibold border-b-2 border-b-[#D32F2F]" : "text-gray-500 hover:text-white"
                  }`}
                >
                  <FileCode size={12} /> script.js
                </button>
              </div>

              {/* Code display frame */}
              <div className="relative">
                <pre className="p-4 overflow-x-auto font-mono text-[10px] leading-relaxed text-gray-400 h-64 max-h-64 select-all">
                  <code>{activeCodeTab === "html" ? htmlCode : activeCodeTab === "css" ? cssCode : jsCode}</code>
                </pre>
                
                {/* Copy overlay */}
                <button
                  onClick={handleCopy}
                  className="absolute bottom-3 right-3 p-2 bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.05] rounded-sm transition-all flex items-center gap-1 cursor-pointer font-mono text-[9px]"
                  title="Copy Code"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-green-500" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy Code
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
