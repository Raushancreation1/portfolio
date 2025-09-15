'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: '90%' },
  { name: 'React', level: '85%' },
  { name: 'Node.js', level: '80%' },
  { name: 'TypeScript', level: '80%' },
  { name: 'Next.js', level: '85%' },
  { name: 'Tailwind CSS', level: '90%' },
  { name: 'MongoDB', level: '75%' },
  { name: 'PostgreSQL', level: '70%' },
];

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Developing and maintaining web applications using React, Node.js, and MongoDB.'
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Creations',
    period: '2019 - 2021',
    description: 'Built responsive web interfaces and collaborated with the design team to implement UI/UX best practices.'
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with expertise in modern web technologies.
            I love turning ideas into reality through clean, efficient, and maintainable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1"></div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-800">{exp.role}</h4>
                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
