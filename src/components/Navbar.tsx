import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navItems = ['About', 'Projects', 'Research', 'Blog', 'Skills', 'Contact'];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Portfolio | Kunal Bandale
        
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar