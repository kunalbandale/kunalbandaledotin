import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, FileDown } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Kunal Bandale
        </motion.h1>
        
        <motion.h2
          className="text-xl md:text-2xl text-foreground/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          📊 Data Science Enthusiast | Passionate About ML & Analytics
        </motion.h2>

        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { Icon: Github, href: 'https://github.com/kunalbandale' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/kunalbandale' }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          target="_blank"
          href="https://drive.google.com/drive/folders/1kVsPqbug97MVxplCv4E8fd6oIZ2E-EUn"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FileDown size={20} />
          Download Resume
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;