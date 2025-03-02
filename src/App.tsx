import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>

      <div className="min-h-screen bg-background transition-colors duration-500 flex flex-col">
        <Navbar />
        
        <motion.main
          className="flex-grow"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={sectionVariants}><Hero /></motion.div>
          <motion.div variants={sectionVariants}><About /></motion.div>
          <motion.div variants={sectionVariants}><Projects /></motion.div>
          <motion.div variants={sectionVariants}><Research /></motion.div>
          <motion.div variants={sectionVariants}><Blog /></motion.div>
          <motion.div variants={sectionVariants}><Skills /></motion.div>
          <motion.div variants={sectionVariants}><Certifications /></motion.div>
          <motion.div variants={sectionVariants}><Contact /></motion.div>
        </motion.main>

        <Footer />
      </div>
      
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
    </>
  );
}

export default App;