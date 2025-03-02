import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Image Classification',
    description: 'Developed a deep learning model using TensorFlow for multi-class image classification with 95% accuracy.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Natural Language Processing Pipeline',
    description: 'Built an NLP pipeline for sentiment analysis and text classification using BERT and transformers.',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI'],
    github: 'https://github.com',
  },
  {
    title: 'Time Series Forecasting System',
    description: 'Implemented a forecasting system using LSTM networks for predicting stock market trends.',
    technologies: ['Python', 'Keras', 'Pandas', 'Plotly'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-4 md:px-8 bg-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-foreground/80 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;