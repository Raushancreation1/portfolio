'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/project1.jpg',
    github: 'https://github.com/raushancreation1',
    demo: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: '/project2.jpg',
    github: 'https://github.com/raushancreation1',
    demo: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern and responsive portfolio website built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/project3.jpg',
    github: 'https://github.com/raushancreation1',
    demo: '#',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-lg">Project Image</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="View on GitHub"
          >
            <FiGithub className="mr-1" /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Live Demo"
          >
            <FiExternalLink className="mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
