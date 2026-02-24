'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/prajapativsteel', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Modular Kitchen Design',
    'Hotel Equipment Solutions',
    'Furniture Manufacturing',
    'Custom Design Services',
    'Installation Support',
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.jpg"
                  alt="Prajapati Steel"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">PRAJAPATI STEEL</h3>
                <p className="text-xs text-white/70">Est. 1985</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Leading premium stainless steel solutions provider in Mumbai. Trusted by 1000+ clients for quality and innovation.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent text-white/70 hover:text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 hover:text-accent transition-colors duration-300 cursor-pointer flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+919960911311"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-300"
              >
                <Phone size={18} />
                <span>+91 99609 11311</span>
              </a>
              <a
                href="mailto:info@prajapativsteel.com"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-300"
              >
                <Mail size={18} />
                <span>Info@prajapativsteel.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/BRXW7JRFrK6rANTW9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/70 hover:text-accent transition-colors duration-300"
              >
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Mumbai, India</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © {currentYear} Prajapati Steel. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-110 opacity-0 hover:opacity-100 z-40"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 300 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 300 ? 'auto' : 'none',
        }}
      >
        ↑
      </button>
    </footer>
  );
}
