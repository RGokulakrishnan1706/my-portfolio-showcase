import { GraduationCap, Code, BarChart3, Brain } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Python Expert",
      description: "Proficient in Python-based data analysis and automation"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating compelling visual stories with matplotlib"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and AI solutions"
    },
    {
      icon: GraduationCap,
      title: "AI & DS Student",
      description: "B.Tech in AI & Data Science (2023-2027)"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            ABOUT ME
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Passionate about turning
            <span className="text-gradient"> data into decisions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I'm a motivated Data Analyst with strong proficiency in Python-based data analysis, 
            statistical methods, and data visualization using NumPy, pandas, and matplotlib. 
            Experienced in cleaning, analyzing, and interpreting datasets to extract actionable 
            insights and support data-driven decision-making. I'm skilled in applying analytical 
            thinking and structured problem-solving to real-world data scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 card-gradient border-glow rounded-xl transition-all duration-300 hover:glow-subtle hover:scale-[1.02]"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;