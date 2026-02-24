'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 99609 11311',
      link: 'tel:+919960911311',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@prajapativsteel.com',
      link: 'mailto:info@prajapativsteel.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      link: 'https://maps.app.goo.gl/BRXW7JRFrK6rANTW9',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent mx-auto"></div>
          <p className="text-lg text-foreground/70 mt-6">
            Have questions? We'd love to hear from you. Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                target={info.title === 'Location' ? '_blank' : undefined}
                rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                className="group bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-lg p-6 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                <p className="text-sm text-foreground/70 break-words">{info.value}</p>
              </a>
            );
          })}
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-xl border border-border/30 p-8 hover:border-accent/50 transition-all duration-300 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-foreground placeholder:text-foreground/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-foreground placeholder:text-foreground/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-foreground placeholder:text-foreground/40"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 text-foreground placeholder:text-foreground/40 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {isSubmitted && (
                <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-accent text-center font-medium animate-fade-in-up">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Map Container */}
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-xl border border-border/30 overflow-hidden hover:border-accent/50 transition-all duration-300 animate-slide-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5480435425617!2d72.83383977619078!3d19.076092982140395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sMumbai%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-border/30 p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-primary mb-3">Ready to Transform Your Space?</h3>
          <p className="text-foreground/70 mb-6">Call us today for a free consultation and quote.</p>
          <a
            href="tel:+919960911311"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Phone size={20} />
            Call Now: +91 99609 11311
          </a>
        </div>
      </div>
    </section>
  );
}
