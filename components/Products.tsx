'use client';

import { useState, useEffect } from 'react';
import { ChefHat, Sofa, UtensilsCrossed, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Modular Kitchen',
    description: 'Premium stainless steel kitchen solutions with modern design and durability. Perfect for residential and commercial spaces.',
    icon: ChefHat,
    color: 'from-accent/20 to-accent/5',
    features: ['Corrosion Resistant', 'Custom Designs', 'Easy Maintenance'],
  },
  {
    id: 2,
    title: 'Hotel Equipment',
    description: 'Professional-grade stainless steel equipment for hospitality industry. Reliable, hygienic, and long-lasting.',
    icon: UtensilsCrossed,
    color: 'from-primary/20 to-primary/5',
    features: ['Food Safe', 'Commercial Grade', 'Hygienic Design'],
  },
  {
    id: 3,
    title: 'Furniture',
    description: 'Elegant stainless steel furniture for homes and offices. Combines functionality with contemporary aesthetics.',
    icon: Sofa,
    color: 'from-accent/20 to-primary/10',
    features: ['Modern Design', 'Durable', 'Space Saving'],
  },
];

export default function Products() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const timers = products.map((_, index) =>
      setTimeout(() => {
        setVisibleCards(prev => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * 150)
    );
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Premium Products
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent mx-auto"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality stainless steel solutions crafted for every need
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isVisible = visibleCards[index];
            
            return (
              <div
                key={product.id}
                className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-xl border border-border/50 p-8 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{product.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-4 border-t border-border/30">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button className="inline-flex items-center gap-2 text-accent font-semibold group/btn hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Border Animation */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-accent/30 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-foreground/70 mb-4">Ready to elevate your space?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1"
          >
            Request a Quote
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
