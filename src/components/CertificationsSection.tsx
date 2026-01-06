import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning",
    issuer: "Saiket Systems",
    description: "Proficient in Python-based data science, including data cleaning, exploratory data analysis, statistical analysis, and data visualization using NumPy, pandas, and matplotlib.",
    link: "https://bit.ly/4975uCW"
  },
  {
    title: "Artificial Intelligence",
    issuer: "NoviTech",
    description: "Completed an intensive AI bootcamp, gaining foundational knowledge in AI concepts, applications, and real-world problem-solving approaches.",
    link: "https://bit.ly/4aRhtG9"
  },
  {
    title: "MongoDB",
    issuer: "MongoDB University",
    description: "Hands-on knowledge of MongoDB, including document data modeling, aggregation pipelines, indexing strategies, and sharding.",
    link: "https://bit.ly/49k1f5J"
  },
  {
    title: "Azure ML",
    issuer: "Microsoft",
    description: "Completed Microsoft Learn training on Azure governance and compliance, gaining foundational knowledge of Azure features and cloud resource management.",
    link: "https://bit.ly/4pu2epX"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            CERTIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Credentials</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 card-gradient border-glow rounded-xl transition-all duration-300 hover:glow-subtle hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-primary font-mono mb-3">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;