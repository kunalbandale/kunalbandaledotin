import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'EffortEase - Task Assignment WebApp',
    description: 'Designed a task management system enabling employers to assign tasks and employees to accept, reject, complete, or fail tasks for seamless workflow tracking. Integrated local storage to manage and persist task data efficiently without requiring a backend.',
    technologies: ['React', 'Local-Storage'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Movie Search Engine',
    description: 'Developed a movie search engine web app using React, integrating a third-party API for real-time movie data retrieval. Implemented dynamic search functionality with an intuitive UI, enabling users to find movies efficiently',
    technologies: ['React', 'API'],
    github: '#',
  },
  {
    title: 'Email/SMS Spam Detection ',
    description: 'Developed and compared multiple machine learning algorithms for SMS and email spam detection, achieving an average accuracy of 98%.Implemented Naïve Bayes and ensemble methods to enhance detection rates and improve classification performance.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib' , 'Streamlit'],
    github: 'https://github.com/kunalbandale/SMS-Email-Spam-Classifier'
  },

  {
    title: 'Personal Finance Tracker',
    description: 'Personal Finance Tracker is a Python-based CLI application designed to help users efficiently manage their personal finances. It allows users to track income, expenses, and savings, providing insights into their financial health.',
    technologies: ['Python', 'CLI' ],
    github: 'https://github.com/kunalbandale/Personal-Finance-Tracker'
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