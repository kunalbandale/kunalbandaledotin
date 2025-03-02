import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    title: "🐍 Python 3 Cheatsheet",
    excerpt: "Python is one of the most versatile and beginner-friendly programming languages out there. Whether you’re new to coding or an experienced developer, this cheatsheet is designed to help you quickly reference key concepts, syntax, and best practices....",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60",
    link: "https://medium.com/@bandalekunal/python-3-cheatsheet-192f89dfc20b"
  },
  {
    title: "Introduction to APIs 🧩",
    excerpt: "Wikipedia defines an API is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software....",
    image: "https://images.unsplash.com/photo-1607877361964-bf792b65e593?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://medium.com/@bandalekunal/introduction-to-apis-53f381909368"
  },
  {
    title: "Learn CSS — I",
    excerpt: "HTML stands for Hypertext Markup Language and is used to structure web pages. CSS, which stands for Cascading Style Sheets, is utilized for styling and designing websites. It helps in making websites responsive and giving them a premium look. Simply put, CSS is used for styling web content.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60",
    link: "https://medium.com/@bandalekunal/learn-css-i-98fbba1e377f"
  }
];

const Blog = () => {
  return (
    <motion.section
      id="blog"
      className="py-20 px-4 md:px-8 bg-secondary/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest Blog Posts
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              className="bg-background rounded-xl overflow-hidden hover-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-foreground/80 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <motion.a
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-primary font-medium"
                  whileHover={{ gap: '0.75rem' }}
                  transition={{ duration: 0.3 }}
                >
                  Read More
                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
