import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import ExportPanel from "./components/ExportPanel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Dynamically highlight sections based on scroll offset
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "skills", "resume", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleDownloadResume = () => {
    // Elegant system resume simulation which opens print panel,
    // or offers direct custom offline PDF reference
    const checkFile = confirm(
      "Direct action requested: Would you like to view/print the custom optimized Engineering sheet-layout resume? (You can also save as PDF via your browser's Print utility)."
    );
    if (checkFile) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Amal Shiyas | Mechanical Engineering Resume</title>
              <style>
                body {
                  font-family: 'Courier New', Courier, monospace;
                  padding: 40px;
                  color: #000;
                  line-height: 1.5;
                  background: #fff;
                }
                h1 { margin-bottom: 5px; text-transform: uppercase; font-size: 24px; border-bottom: 2px solid #000; padding-bottom: 5px; }
                h2 { margin-top: 30px; text-transform: uppercase; font-size: 16px; border-bottom: 1px dashed #000; padding-bottom: 3px; }
                .meta { font-size: 12px; margin-bottom: 20px; font-weight: bold; }
                .job-title { font-weight: bold; font-size: 14px; margin-top: 15px; }
                .job-meta { font-style: italic; font-size: 12px; margin-bottom: 10px; }
                ul { margin-top: 5px; padding-left: 20px; font-size: 12px; }
                li { margin-bottom: 5px; }
                .skills-grid { display: grid; grid-template-cols: repeat(2, 1fr); gap: 10px; font-size: 12px; margin-top: 10px; }
              </style>
            </head>
            <body>
              <h1>Amal Shiyas</h1>
              <div class="meta">
                Mechanical Engineer | CAD Specialist | Chennai, India<br/>
                Email: amalgotbusiness@gmail.com | LinkedIn: linkedin.com/in/amalshiyas
              </div>

              <h2>Career Objective</h2>
              <p style="font-size: 12px;">
                Mechanical Engineering graduate with hand-on experience in manufacturing and assembly operations at Wipro Infrastructure Engineering. Passionate about transitioning into Automotive Design, CAD modeling, product development, and engineering leadership.
              </p>

              <h2>Professional Experience</h2>
              <div class="job-title">Apprentice Engineer - Assembly Operations</div>
              <div class="job-meta">Wipro Infrastructure Engineering, Chennai (Active)</div>
              <ul>
                <li>Acquiring immersive assembly exposure of advanced plant components & industrial machinery.</li>
                <li>Audited process sheets, mechanical torque limits, and tolerance constraints on active production lines.</li>
                <li>Coordinated alongside Senior leads to resolve shopfloor layouts and ergonomics.</li>
              </ul>

              <h2>Core Engineering Projects</h2>
              <div class="job-title">Toyota Corolla Front Brake Rotor</div>
              <ul>
                <li>Reverse-engineered & parametrically modeled Toyota Corolla front brake rotor with 5-lug PCD pattern in Fusion 360.</li>
                <li>Authored 2D engineering drawing (FDBR-001), GD&T tolerancing, section views, and grey cast iron material specs.</li>
              </ul>

              <div class="job-title">Real-Time Spatio-Temporal Pressure Mapping in Contact Mechanics</div>
              <ul>
                <li>Developed low-cost pressure matrix mapping array using Velostat piezoresistive foil.</li>
                <li>Engineered complete custom Fusion 360 sensor enclosure, wire harnesses, and structural bases.</li>
              </ul>
              
              <div class="job-title">FSR Pressure Mapping Enclosure Design</div>
              <ul>
                <li>Authored structural housing for force-sensitive resistors maintaining clean wire clearance channels.</li>
              </ul>

              <div class="job-title">Smart Blind Spot Detection System</div>
              <ul>
                <li>Configured automotive ADAS safety systems matching ultrasonic sensors to integrated Arduino models.</li>
              </ul>

              <h2>Core Competency Stack</h2>
              <div class="skills-grid">
                <div><strong>CAD:</strong> Fusion 360, Product Development, Engineering Drafting, GD&T</div>
                <div><strong>Engineering:</strong> Manufacturing, Assembly Ops, DFA, DFM</div>
                <div><strong>Software:</strong> Python, Arduino Controller, MATLAB, GitHub, Workspace</div>
              </div>

              <script>window.print();</script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen selection:bg-[#D32F2F] selection:text-white">
      {/* Scroll to Top Marker */}
      <div id="top" className="absolute top-0 w-full h-[0.5px] pointer-events-none" />

      {/* Nav Link Bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content sections layout */}
      <main>

        {/* 1. Hero Section */}
        <Hero
          onViewProjects={() => handleScrollTo("projects")}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Featured Projects section */}
        <Projects />

        {/* 4. Experience timeline section */}
        <Experience />

        {/* 5. Categorized Skills section */}
        <Skills />

        {/* 6. Resume view/download controls */}
        <Resume onDownloadResume={handleDownloadResume} />

        {/* 7. Contact Info & Interactive Inquiry Sheet */}
        <Contact />

      </main>

      {/* Footer controls */}
      <Footer />

    </div>
  );
}
