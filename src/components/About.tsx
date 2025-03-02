import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="prose prose-lg dark:prose-invert">
          <p className="mb-4">
            Hello, I'm Kunal Bandale. I have a passion for solving everyday problems through technology, with the goal of making a positive impact on people's lives. I completed a diploma in Computer Engineering, and later pursued a B.Tech in Information Technology at Shri Guru Gobind Singhji Institute of Engineering and Technology.
          </p>
          <p className="mb-4">
            I have explored fields such as Web Development, Data Science, and Machine Learning. I enjoy working with data, finding patterns, and building models to extract meaningful insights. I am also skilled in developing web applications that help streamline processes and improve user experiences.
          </p>
          <p>
            Currently, I am looking for opportunities in Data Science and Machine Learning roles where I can apply my skills and contribute to innovative projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
