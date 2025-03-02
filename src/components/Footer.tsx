import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kunalbandale', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kunalbandale', label: 'LinkedIn' }
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>bandalekunal@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-foreground/80">
                <MapPin size={16} />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Research', 'Blog', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 text-foreground/80 hover:text-primary 
                           hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-foreground/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
             🚀 Innovate. Build. Repeat.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;