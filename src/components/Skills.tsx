import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Terminal, Cpu, Cloud, Network, Lock } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Languages',
    icon: Code2,
    skills: [
      'Python', 'TypeScript', 'JavaScript', 'R', 'SQL', 'Java', 'C++',
      'HTML/CSS', 'Shell Scripting'
    ]
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Computer Vision',
      'Natural Language Processing', 'Reinforcement Learning', 'GANs'
    ]
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: [
      'Apache Spark', 'Hadoop', 'ETL Pipelines', 'Data Warehousing',
      'Stream Processing', 'Data Modeling', 'MongoDB', 'PostgreSQL'
    ]
  },
  {
    title: 'MLOps & DevOps',
    icon: Cpu,
    skills: [
      'Docker', 'Kubernetes', 'CI/CD', 'MLflow', 'DVC', 'Git',
      'Jenkins', 'Terraform'
    ]
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      'AWS SageMaker', 'Google Cloud AI', 'Azure ML', 'AWS Lambda',
      'Cloud Functions', 'S3', 'EC2', 'Kubernetes Engine'
    ]
  },
  {
    title: 'Deep Learning',
    icon: Network,
    skills: [
      'CNN', 'RNN', 'LSTM', 'Transformers', 'BERT', 'GPT',
      'Object Detection', 'Semantic Segmentation'
    ]
  },
  {
    title: 'Data Science',
    icon: Terminal,
    skills: [
      'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn',
      'Statistical Analysis', 'A/B Testing', 'Feature Engineering'
    ]
  },
  {
    title: 'Security & Ethics',
    icon: Lock,
    skills: [
      'Model Security', 'Data Privacy', 'Ethical AI', 'Bias Detection',
      'Model Interpretability', 'GDPR Compliance'
    ]
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section-spacing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto container-padding">
        <h2 className="section-heading text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + skillIndex * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'hsl(var(--primary) / 0.1)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;