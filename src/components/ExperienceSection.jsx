import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Developer and Cloud Engineer",
    company: "Student at Regional Maritime University",
    period: "Aug 2022 - Present",
    location: "Accra, Ghana",
    description: [
      "Led the development of a scalable e-commerce platform, resulting in a 30% increase in conversion rates.",
      "Mentored junior developers, fostering a collaborative and high-performing team environment.",
      "Led the development of a scalable Elitefit platform, resulting in a 30% increase in conversion rates.",
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "PHP", "Git"]
  },
  {
    role: "Fullstack Developer and Cloud Engineer",
    company: "Student at Regional Maritime University",
    period: "Aug 2022 - Present",
    location: "Accra, Ghana",
    description: [
      "Developed and maintained responsive Python CGPA calculator for students.",
      "Developing an Expense Tracker application for students.",
      "Contributed to the development of a Talent Hiring Platform.",
    ],
    technologies: ["Python", "Node.js", "Flask", "MySQL", "Tailwind CSS", "Git"]
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-8 border-l-2 border-blue-500 dark:border-purple-500 group"
    >
      <div className="absolute -left-[1.35rem] top-0 bg-blue-500 dark:bg-purple-500 text-white p-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 dark:group-hover:bg-purple-600">
        <Briefcase size={20} />
      </div>
      <div className="ml-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">{experience.role}</h3>
        <p className="text-lg font-medium text-blue-600 dark:text-purple-400 mb-2">{experience.company}</p>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1.5" />
            <span>{experience.location}</span>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
          {experience.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span key={i} className="skill-pill bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 group-hover:bg-blue-100 dark:group-hover:bg-purple-900/50 transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tracing my path through impactful roles and contributions in the tech industry. Each step has been a learning experience, shaping my skills and approach to development.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;