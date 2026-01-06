import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-mono text-primary border border-primary/30 rounded-full glow-subtle">
            DATA ANALYST
          </span>
        </div>
        
        <h1 className="animate-slide-up animate-delay-100 text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">R. Gokula</span>
          <br />
          <span className="text-gradient">Krishnan</span>
        </h1>
        
        <p className="animate-slide-up animate-delay-200 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          Transforming raw data into actionable insights through Python, statistical analysis, and compelling visualizations.
        </p>
        
        <div className="animate-slide-up animate-delay-300 flex items-center justify-center gap-4 mb-16">
          <a
            href="mailto:gokulrajesekar@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:glow hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/rgokulakrishnan1706"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground rounded-lg font-medium transition-all duration-300 hover:border-primary hover:glow-subtle hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://bit.ly/45GnmSS"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground rounded-lg font-medium transition-all duration-300 hover:border-primary hover:glow-subtle hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>

        <a
          href="#about"
          className="animate-slide-up animate-delay-400 inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm font-mono mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;