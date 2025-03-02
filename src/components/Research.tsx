import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Spam Detection: A Binary Classification Approach in Machine Learning',
    journal: '3rd International Conference on PCEMS 2024, VNIT Nagpur',
    year: 2024,
    link: '', // Replace with actual link if available
  },
];

const Research = () => {
  return (
    <motion.section
      id="research"
      className="py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Research & Publications</h2>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Research Papers</h3>
          <div className="space-y-6">
            {publications.map((paper, index) => (
              <motion.div
                key={index}
                className="border rounded-lg p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium mb-2">{paper.title}</h4>
                    <p className="text-foreground/80">
                      {paper.journal} • {paper.year}
                    </p>
                  </div>
                  <motion.a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Research;
