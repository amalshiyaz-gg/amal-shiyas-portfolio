import { Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0F0F0F] border-t border-white/[0.05] text-center font-mono text-[10px] text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand Copyright */}
        <div>
          © {currentYear} Amal Shiyas. All Rights Reserved.
        </div>

        {/* Dynamic Telemetry Status */}
        <div className="flex items-center gap-2">
          <Clock size={11} className="text-[#D32F2F]" />
          <span>PORTFOLIO_STATE_LATENCY: 12ms</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500 uppercase font-bold text-[9px]">SYSTEMS_OK</span>
        </div>

        {/* Small Aesthetic signature */}
        <div>
          DESIGNED FOR AUTOMOTIVE RECRUITS
        </div>

      </div>
    </footer>
  );
}
