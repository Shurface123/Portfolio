
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3/SASS", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React", level: 88 },
      { name: "Vue.js", level: 75 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "Python", level: 70 },
      { name: "Django", level: 65 },
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 75 },
      { name: "GraphQL", level: 72 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Performance Optimization", level: 85 },
      { name: "SEO", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
        ></motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my journey as a developer. Here's a glimpse of my technical expertise and proficiency levels.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                {skillGroup.category}
              </h3>
              <div>
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js", "Redux", "Jest", "Webpack", "Vite", "Storybook", 
              "Firebase", "Netlify", "Vercel", "Stripe", "Material UI", 
              "Bootstrap", "Sass", "Less", "Styled Components", "Framer Motion"
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#ffffff" }}
                className="skill-pill bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
