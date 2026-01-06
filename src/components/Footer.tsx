const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} R. Gokula Krishnan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Built with <span className="text-primary">❤</span> and data
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;