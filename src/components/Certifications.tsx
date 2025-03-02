import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Medal } from 'lucide-react';

const certificates = [
  {
    title: 'Git For Beginners',
    issuer: 'Udemy',
    date: 'Feb 2025',
    verifyLink: 'https://www.udemy.com/certificate/UC-6e514c57-44d0-4696-93f9-c09e66809173/',
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'Cognitive Class',
    date: 'Jan 2025',
    verifyLink: 'https://courses.cognitiveclass.ai/certificates/dfb680be6d6b45aa8a0595c0935f01bc',
  },
  {
    title: 'The Complete Python Developer',
    issuer: 'Udemy',
    date: 'Aug 2024',
    verifyLink: 'https://www.udemy.com/certificate/UC-a4fc488c-f536-45df-8894-e02ff595e078/',
  },
  {
    title: 'Linux CLI Basics',
    issuer: 'Cybrary',
    date: 'Jan 2024',
    verifyLink: 'https://app.cybrary.it/profile/TheoreticalNightingale5560?tab=cert-completion&cert=CC-1af5d53f-0cf2-4b44-a3fd-6ce4501fbadd',
  },
  {
    title: 'Version Control',
    issuer: 'Meta',
    date: 'Oct 2023',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/3LE557LVAYWW',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    date: 'Aug 2023',
    verifyLink: 'https://coursera.org/share/87a5acddd4a9636a94cd7e28be9e9418',
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="section-spacing bg-secondary/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto container-padding">
        <div className="flex items-center gap-3 mb-6">
          <Medal className="w-8 h-8 text-primary" />
          <h2 className="section-heading mb-0">Certifications</h2>
        </div>
        
        <ul className="list-disc list-inside space-y-3 text-muted-foreground">
          {certificates.map((cert, index) => (
            <li key={index} className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="font-semibold text-white">{cert.title}</span> — {cert.issuer} ({cert.date})
              <motion.a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                whileHover={{ x: 5 }}
              >
                Verify <ExternalLink size={14} />
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Certifications;