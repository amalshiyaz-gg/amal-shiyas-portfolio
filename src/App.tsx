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
                Mechanical Engineering Graduate | CAD & Manufacturing Specialist<br/>
                Email: amalshiyazabdulrahman@gmail.com | Phone: +91 9037101027 | Location: Kollam, India
              </div>

              <h2>Profile</h2>
              <p style="font-size: 12px;">
                Mechanical Engineering graduate with hands-on exposure to manufacturing operations, assembly processes, inspection, and industrial practices. Experienced in mechanical CAD modeling and engineering documentation through academic and personal projects. Proficient in Autodesk Fusion 360 and familiar with SolidWorks, AutoCAD, engineering drawings, and basic engineering analysis. Seeking opportunities to apply mechanical engineering fundamentals in automotive, product design, manufacturing, and related engineering roles.
              </p>

              <h2>Industrial Experience</h2>
              <div class="job-title">Apprentice Engineer — Wipro Infrastructure Engineering (06/2026 – 07/2026)</div>
              <div class="job-meta">Chennai, India</div>
              <ul>
                <li>Worked in the Hydraulics division supporting assembly and manufacturing operations.</li>
                <li>Assisted in the assembly, inspection, and testing of hydraulic components and systems.</li>
                <li>Followed industrial quality standards and safety procedures during production activities.</li>
              </ul>

              <div class="job-title">Intern — United Electrical Industries Limited (04/2025 – 05/2025)</div>
              <div class="job-meta">Kollam, Kerala</div>
              <ul>
                <li>Gained hands-on exposure to industrial manufacturing processes, including machining, assembly, welding and electroplating.</li>
                <li>Learned quality control and testing methods for electrical components, strengthening skills in inspection and compliance.</li>
              </ul>

              <div class="job-title">Intern — Kerala Minerals & Metals Ltd (08/2024 – 09/2024)</div>
              <div class="job-meta">Kollam, India</div>
              <ul>
                <li>Gained hands-on experience in titanium dioxide manufacturing from mineral separation to final product.</li>
              </ul>

              <div class="job-title">Intern — Kerala Electrical & Allied Engineering Co. Ltd (10/2023 – 11/2023)</div>
              <div class="job-meta">Kollam, India</div>
              <ul>
                <li>Applied mechanical engineering concepts in practical industrial settings at KEL.</li>
              </ul>

              <h2>Core Engineering Projects</h2>
              <div class="job-title">Toyota Corolla Front Brake Rotor — Autodesk Fusion 360</div>
              <ul>
                <li>Designed a reference-based parametric CAD model incorporating hub geometry, center bore, 5-lug bolt pattern, chamfers, and fillets in Fusion 360.</li>
                <li>Developed a dimensioned 2D engineering drawing (FDBR-001) and photorealistic CAD renders for technical documentation.</li>
              </ul>

              <div class="job-title">Real-Time Spatio-Temporal Pressure Mapping in Contact Mechanics</div>
              <ul>
                <li>Designed and assembled a mechanical prototype integrating a 3D-printed enclosure, Velostat sensing matrix, Arduino, and electronics.</li>
                <li>Investigated ghost readings and sensor interference; contributed to redesigning it as a scalable Velostat-based system.</li>
              </ul>

              <div class="job-title">Hand Gesture Control Wheelchair Prototype</div>
              <ul>
                <li>Built a gesture-controlled wheelchair prototype translating hand movements into real-time directional control.</li>
              </ul>

              <h2>Education & Credentials</h2>
              <div class="job-title">B.Tech in Mechanical Engineering — Amrita Vishwa Vidyapeetham (2022 – 2026)</div>
              <div class="job-meta">CGPA: 6.82 / 10.0 | Amritapuri Campus, Kollam</div>

              <h2>Core Competency Stack</h2>
              <div class="skills-grid">
                <div><strong>Mechanical Design:</strong> Fusion 360, SolidWorks, AutoCAD, 3D Printing, GD&T</div>
                <div><strong>Testing & Validation:</strong> Experimental Testing, Sensor Integration, Arduino</div>
                <div><strong>Analysis & Software:</strong> ANSYS (CFD), MATLAB, Python</div>
                <div><strong>Manufacturing:</strong> Mechanical Assembly, Machining, Quality Control</div>
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
