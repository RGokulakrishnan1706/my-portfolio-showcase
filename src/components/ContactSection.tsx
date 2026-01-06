import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            CONTACT
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, data projects, or just having a conversation about tech and analytics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:gokulrajesekar@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:glow hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>gokulrajesekar@gmail.com</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/rgokulakrishnan1706"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center border border-primary/30 rounded-xl text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:glow-subtle hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://bit.ly/45GnmSS"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center border border-primary/30 rounded-xl text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:glow-subtle hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;