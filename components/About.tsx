'use client';

import { Award, Users, Zap, Shield, TrendingUp, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'Premium materials and expert craftsmanship in every product',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority and mission',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Cutting-edge designs and modern manufacturing techniques',
  },
  {
    icon: Shield,
    title: 'Durability',
    description: 'Products built to last for generations',
  },
  {
    icon: TrendingUp,
    title: 'Reliability',
    description: '40+ years of consistent excellence in the industry',
  },
  {
    icon: Lightbulb,
    title: 'Expertise',
    description: 'Expert team ready to help with custom solutions',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Prajapati Steel
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent mx-auto"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-3xl mx-auto">
            Since 1985, we have been delivering premium stainless steel solutions to Mumbai and beyond.
            Leading the industry with innovation, quality, and customer excellence.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Our Legacy</h3>
              <p className="text-foreground/70 leading-relaxed">
                PRAJAPATI STEEL has been a trusted name in stainless steel products for over 40 years. 
                We specialize in creating premium solutions for furniture, hotel equipment, and modular kitchens 
                that combine functionality with contemporary design.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To provide exceptional stainless steel products and services that exceed customer expectations. 
                We believe in sustainable practices, innovative designs, and uncompromising quality in every project.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-accent font-semibold mb-2">Certified & Trusted</p>
              <p className="text-foreground/70">Leading supplier of Jindal stainless steel in Mumbai</p>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <p className="text-3xl font-bold text-accent mb-2">40+</p>
              <p className="text-foreground/70 text-sm">Years in Business</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <p className="text-3xl font-bold text-accent mb-2">1000+</p>
              <p className="text-foreground/70 text-sm">Satisfied Clients</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <p className="text-3xl font-bold text-accent mb-2">500+</p>
              <p className="text-foreground/70 text-sm">Projects Delivered</p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <p className="text-3xl font-bold text-accent mb-2">24/7</p>
              <p className="text-foreground/70 text-sm">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-lg p-6 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
