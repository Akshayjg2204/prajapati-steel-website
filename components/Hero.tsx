'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">Leading Steel Supplier Since 1985</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Premium Stainless{' '}
                <span className="relative">
                  <span className="text-accent">Steel</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q25,0 50,10 T100,10" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
                {' '}Solutions
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-md">
                Transform your spaces with our premium stainless steel products. Furniture, Hotel Equipment, Modular Kitchens - crafted for excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://maps.app.goo.gl/BRXW7JRFrK6rANTW9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300"
              >
                Visit Our Location
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-accent">40+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">1000+</p>
                <p className="text-sm text-foreground/60">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-foreground/60">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative h-96 md:h-full flex items-center justify-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative w-full h-96">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-accent/20 animate-glow"></div>

              {/* Steel Icon Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full border border-accent/20"></div>

                  {/* Inner Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">⬡</div>
                    <p className="text-center text-sm font-semibold text-accent mt-4 px-4">Steel Excellence</p>
                  </div>

                  {/* Rotating Elements */}
                  <div className="absolute inset-0 rounded-full border border-accent/30 opacity-50" style={{
                    animation: 'spin 20s linear infinite'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent/50 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
