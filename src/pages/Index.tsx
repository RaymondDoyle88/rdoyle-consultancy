import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Users, Laptop, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RDoyle Consultancy
            </h1>
            <Button onClick={scrollToContact} className="shadow-soft">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                20+ Years of IT Excellence
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Expert IT Solutions for{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Every Challenge
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From personal IT problems to complex enterprise needs, RDoyle Consultancy delivers 
                tailored solutions backed by decades of industry experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToContact} className="shadow-medium">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
              <img 
                src={heroImage} 
                alt="Professional IT workspace with technology"
                className="rounded-2xl shadow-medium relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive IT Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for individuals and organizations of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-medium transition-shadow">
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personal IT Support</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expert help with personal technology challenges. Whether it's troubleshooting, 
                setup, or optimization, get professional support for your individual IT needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Computer setup and configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Software installation and troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Network and connectivity solutions</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-medium transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Strategic IT consulting for large organizations. Navigate complex business needs 
                with proven expertise in stakeholder management and enterprise systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>IT strategy and planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>System integration and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Stakeholder communication and management</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                About RDoyle Consultancy
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Two Decades of IT Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 20 years of experience in the IT industry, I bring a wealth of 
                knowledge and practical expertise to every project. My career spans work 
                with numerous large organizations, where I've successfully managed both 
                internal and external stakeholders.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My diverse skill set allows me to tackle challenges across the IT spectrum, 
                from individual technical problems to enterprise-wide strategic initiatives. 
                I pride myself on clear communication, reliable service, and results-driven solutions.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <Laptop className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Wide Range of Skills</h3>
                <p className="text-muted-foreground">
                  From infrastructure to software, security to cloud solutions—comprehensive expertise 
                  across all IT domains.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-accent">
                <Users className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">Stakeholder Management</h3>
                <p className="text-muted-foreground">
                  Proven track record of effective communication and collaboration with internal 
                  teams and external partners.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary">
                <Building2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">Enterprise Experience</h3>
                <p className="text-muted-foreground">
                  Extensive background working within large organizations, understanding complex 
                  business environments.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="container mx-auto text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Move Forward with Your IT Challenges?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how RDoyle Consultancy can help you achieve your technology goals. 
            Contact me today for a consultation.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="shadow-medium"
            asChild
          >
            <a href="mailto:contact@rdoyle.info" className="inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              contact@rdoyle.info
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RDoyle Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
