const skills = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "NumPy", level: 85, category: "Data Analysis" },
  { name: "pandas", level: 85, category: "Data Analysis" },
  { name: "matplotlib", level: 80, category: "Visualization" },
  { name: "MySQL", level: 75, category: "Database" },
  { name: "Machine Learning", level: 70, category: "AI/ML" },
  { name: "Statistical Analysis", level: 80, category: "Analytics" },
  { name: "Data Structures & Algorithms", level: 75, category: "CS Fundamentals" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-4 card-gradient border-glow rounded-xl transition-all duration-300 hover:glow-subtle"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="px-2 py-1 text-xs font-mono text-primary/70 bg-primary/10 rounded">
                    {skill.category}
                  </span>
                </div>
                <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
              </div>
              
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:glow"
                  style={{ 
                    width: `${skill.level}%`,
                    animation: `slideIn 1s ease-out ${index * 0.1}s both`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { width: 0%; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;