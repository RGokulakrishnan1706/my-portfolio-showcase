import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            EDUCATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 card-gradient border-glow rounded-2xl glow-subtle">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Bachelor of Artificial Intelligence and Data Science
                  </h3>
                  
                  <p className="text-lg text-primary font-medium mb-4">
                    Anand Institute of Higher Technology
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">2023 - 2027</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="font-mono text-sm">India</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                    <span className="text-sm text-muted-foreground">CGPA:</span>
                    <span className="text-2xl font-bold text-primary">8.29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;