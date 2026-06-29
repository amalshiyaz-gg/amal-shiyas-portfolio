import { useEffect, useState } from "react";
import { User, Layers, Briefcase, Cpu, FileText, Mail, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-white/[0.05]">
      {/* Red Scroll Progress Indicator */}
      <div
        className="h-[2px] bg-[#D32F2F] absolute top-0 left-0 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand Accent */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-8 h-8 rounded-sm bg-[#D32F2F] flex items-center justify-center font-mono font-bold text-white tracking-widest text-sm">
              AS
            </div>
            <span className="font-sans font-medium tracking-tight text-white hover:text-[#EF5350] transition-colors leading-none">
              Amal Shiyas
              <span className="block font-mono text-[9px] text-[#B0B0B0] uppercase mt-0.5">
                Mechanical Design
              </span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-sm font-mono text-xs tracking-wider uppercase transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#D32F2F] bg-white/[0.02] border-b-2 border-[#D32F2F]"
                      : "text-[#B0B0B0] hover:text-white hover:bg-white/[0.01]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#B0B0B0] hover:text-white"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#181818] border-b border-white/[0.05] py-2 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-sm font-mono text-xs tracking-wider uppercase block ${
                  isActive
                    ? "text-[#D32F2F] bg-[#202020] border-l-4 border-[#D32F2F]"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
