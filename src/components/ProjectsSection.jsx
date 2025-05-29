
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and secure checkout process.",
    image: "ecommerce-project",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    image: "task-management-app",
    category: "web",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "Mobile application for tracking workouts, nutrition, and fitness progress with data visualization.",
    image: "fitness-tracker",
    category: "mobile",
    technologies: ["React Native", "Redux", "Express", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather application with forecast data, location search, and interactive maps.",
    image: "weather-dashboard",
    category: "web",
    technologies: ["JavaScript", "OpenWeatherMap API", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media platforms with data visualization and reporting features.",
    image: "social-media-dashboard",
    category: "web",
    technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 6,
    title: "Travel Companion App",
    description: "Mobile application for travelers with itinerary planning, location bookmarking, and travel recommendations.",
    image: "travel-app",
    category: "mobile",
    technologies: ["React Native", "GraphQL", "MongoDB", "Google Maps API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover"
    >
      <div className="relative overflow-hidden group">
        <img  alt={`Screenshot of ${project.title} project showing the main interface and key features`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1582110331670-c5878f53bd3c" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-end space-x-2">
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="skill-pill bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my recent work and projects that showcase my skills and expertise in creating beautiful, functional digital experiences.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="flex justify-center">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              <TabsTrigger 
                value="all" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
              >
                Web
              </TabsTrigger>
              <TabsTrigger 
                value="mobile" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
              >
                Mobile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
