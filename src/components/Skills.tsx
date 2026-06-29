import { DraftingCompass, Hammer, Laptop, Wrench } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "CAD & DESIGN",
      icon: DraftingCompass,
      items: [
        { name: "Fusion 360", level: 95 },
        { name: "Mechanical Design", level: 90 },
        { name: "Product Development", level: 85 },
        { name: "Engineering Drawings (GD&T)", level: 88 },
      ],
    },
    {
      category: "ENGINEERING",
      icon: Hammer,
      items: [
        { name: "Manufacturing Processes", level: 85 },
        { name: "Assembly Operations", level: 92 },
        { name: "Design Thinking", level: 88 },
        { name: "Problem Solving", level: 90 },
      ],
    },
    {
      category: "PROGRAMMING",
      icon: Laptop,
      items: [
        { name: "Python", level: 80 },
        { name: "MATLAB", level: 75 },
      ],
    },
    {
      category: "TOOLS",
      icon: Wrench,
      items: [
        { name: "Arduino", level: 85 },
        { name: "GitHub", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0F0F0F] border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#D32F2F]" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#D32F2F]">
            04 / Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((categoryGroup, index) => {
            const Icon = categoryGroup.icon;
            
            return (
              <div
                key={index}
                className="p-6 md:p-8 rounded-lg bg-[#181818] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 relative group"
              >
                {/* Visual coordinate locator */}
                <div className="absolute top-3 right-3 font-mono text-[8px] text-gray-500">
                  REF_LOC_0{index + 1}
                </div>

                <div className="flex items-center gap-3 mb-6 border-b border-white/[0.05] pb-4">
                  <div className="p-2.5 rounded bg-black border border-white/[0.05] text-[#D32F2F] group-hover:text-[#EF5350] transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-widest font-semibold text-white">
                    {categoryGroup.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categoryGroup.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      
                      {/* Interactive Visual Bar */}
                      <div className="h-1 w-full bg-[#202020] rounded-sm overflow-hidden border border-white/[0.01]">
                        <div
                          className="h-full bg-gradient-to-r from-[#D32F2F] to-[#EF5350] rounded-sm transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
