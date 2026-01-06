import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ExternalLink, Github, X as CloseIcon, Maximize2, Minimize2 } from "lucide-react";

const initialProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "Full-featured online store with product management and secure checkout.",
    longDescription: "A robust e-commerce solution built from the ground up, featuring comprehensive product and inventory management, a seamless user shopping cart experience, and secure payment integration with Stripe. Optimized for performance and scalability, providing a smooth experience for thousands of users.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "AWS S3"],
    liveLink: "https://example-ecommerce.com",
    githubLink: "https://github.com/Shurface123/ecommerce-platform",
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Stripe Payments", "Admin Dashboard", "Order Management"],
    challenges: "Ensuring PCI compliance for payments and optimizing database queries for large product catalogs."
  },
  {
    id: 2,
    title: "Elitefit Gym Portal",
    shortDescription: "Productivity app with drag-and-drop and team collaboration.",
    longDescription: "A Kanban-style task management application designed for individuals and teams. Features intuitive drag-and-drop functionality for task prioritization, real-time collaboration, due date reminders, and progress tracking. Built with a focus on simplicity and efficiency.",
    image: "https://images.unsplash.com/photo-1529310399805-ed360d549394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "web",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "Context API"],
    liveLink: "https://elitefit-gym-portal.vercel.app",
    githubLink: "https://github.com/Shurface123/elitefit-gym-portal",
    features: ["Drag & Drop Interface", "Real-time Updates", "User Accounts", "Notifications", "File Attachments"],
    challenges: "Implementing real-time synchronization across multiple users efficiently using Firebase."
  },
  {
    id: 3,
    title: "Expense Tracker ",
    shortDescription: "An app for tracking day to day expenses of individuals.",
    longDescription: "A cross-platform mobile application that helps users monitor their expenses activities and visualize progress through interactive charts and graphs.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "mobile",
    technologies: ["Python", "Flask", "React Native", "MySQL"],
    liveLink: "https://expense-tracker-app.vercel.app",
    githubLink: "https://github.com/Shurface123/expense-tracker-app",
    features: ["Expense Logging", "Budget Tracking", "Limit Setting", "Progress Charts"],
    challenges: "Optimizing performance for diverse mobile devices and accurately tracking expenses."
  },
  {
    id: 4,
    title: "AI Powered Content Generator",
    shortDescription: "Web application generating creative text using advanced AI models.",
    longDescription: "An innovative platform that leverages state-of-the-art AI language models (like GPT-3/4) to generate various forms of text content, including articles, marketing copy, and creative stories. Features customizable prompts and tone adjustments.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjBjb250ZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "web",
    technologies: ["Python", "Flask", "React", "OpenAI API", "Celery", "Redis"],
    liveLink: "https://ai-content-generator.vercel.app",
    githubLink: "https://github.com/Shurface123/ai-content-generator",
    features: ["Multiple Content Types", "Tone & Style Customization", "Prompt Engineering Tools", "Usage Analytics"],
    challenges: "Managing API rate limits and costs, and ensuring responsible AI usage and content filtering."
  },
  {
    id: 5,
    title: "Interactive Data Visualization Dashboard",
    shortDescription: "Dashboard for visualizing complex datasets with interactive charts.",
    longDescription: "A dynamic data visualization dashboard that transforms raw data into insightful and interactive charts and graphs. Built using D3.js for custom visualizations, allowing users to explore data patterns, filter information, and export reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "web",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://data-visualization-dashboard.vercel.app",
    githubLink: "https://github.com/Shurface123/data-visualization-dashboard",
    features: ["Custom Charts (Bar, Line, Pie, Scatter)", "Data Filtering", "Real-time Updates Option", "Report Export (PDF/CSV)"],
    challenges: "Handling large datasets efficiently in the browser and creating highly customizable yet user-friendly chart components."
  },
  {
    id: 6,
    title: "VR Educational Experience",
    shortDescription: "Immersive VR application for interactive learning modules.",
    longDescription: "A virtual reality educational platform offering interactive modules across various subjects. Designed to make learning more engaging and memorable through immersive simulations and gamified content. Developed using Unity and C#.",
    image: "https://images.unsplash.com/photo-1593352008695-856e9d9ac1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dnIlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "vr/ar",
    technologies: ["Unity", "C#", "Oculus SDK", "Blender", "SteamVR"],
    liveLink: "https://vr-educational-experience.vercel.app",
    githubLink: "https://github.com/Shurface123/vr-educational-experience",
    features: ["Interactive Simulations", "Gamified Quizzes", "Multi-user Collaboration (future)", "Progress Tracking"],
    challenges: "Optimizing graphics for smooth VR performance on target hardware and designing intuitive VR interactions."
  },
];

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl card-hover flex flex-col"
    >
      <div className="relative overflow-hidden group aspect-video">
        <img  alt={`Visual representation of ${project.title}, showcasing its primary interface or concept.`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <Button
              onClick={() => onOpenModal(project)}
              variant="secondary"
              className="w-full bg-white/90 text-gray-800 hover:bg-white backdrop-blur-sm"
            >
              View Details
            </Button>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="skill-pill bg-blue-100 text-blue-800 dark:bg-blue-900/70 dark:text-blue-200 text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
             <span className="skill-pill bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <div className="mt-auto flex space-x-3">
           <motion.a href={project.liveLink} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.05}} className="flex-1">
            <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30">
              <ExternalLink size={16} className="mr-2" /> Live Demo
            </Button>
          </motion.a>
          <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.05}} className="flex-1">
             <Button variant="outline" className="w-full border-gray-500 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700/30">
              <Github size={16} className="mr-2" /> Source Code
            </Button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose, isMaximized, toggleMaximize }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
    {isOpen && (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent 
            className={`bg-white dark:bg-gray-800 p-0 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-out
            ${isMaximized ? 'max-w-full w-full h-full m-0 sm:m-0' : 'max-w-3xl w-[90vw] sm:w-full'}`}
            onInteractOutside={(e) => e.preventDefault()}
        >
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.9}}>
            <DialogHeader className="p-6 pb-4 border-b dark:border-gray-700 flex flex-row justify-between items-center">
              <div>
                <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</DialogTitle>
                <DialogDescription className="text-gray-500 dark:text-gray-400 mt-1">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project
                </DialogDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={toggleMaximize} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  {isMaximized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </Button>
                <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <CloseIcon size={24} />
                </Button>
              </div>
            </DialogHeader>
            
            <div className={`overflow-y-auto ${isMaximized ? 'h-[calc(100vh-150px)]' : 'max-h-[70vh]'}`}>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                    <img  alt={`Detailed screenshot of ${project.title}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-pill bg-blue-100 text-blue-800 dark:bg-blue-900/70 dark:text-blue-200 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Full Description:</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>

                  {project.challenges && (
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Challenges & Solutions:</h4>
                      <p className="text-gray-700 dark:text-gray-300 italic">{project.challenges}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <DialogFooter className="p-6 border-t dark:border-gray-700 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
              <motion.a href={project.liveLink} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.05}}>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <ExternalLink size={18} className="mr-2" /> Visit Live Site
                </Button>
              </motion.a>
              <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.05}}>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Github size={18} className="mr-2" /> View on GitHub
                </Button>
              </motion.a>
            </DialogFooter>
          </motion.div>
        </DialogContent>
      </Dialog>
    )}
    </AnimatePresence>
  );
};


const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMaximized, setIsModalMaximized] = useState(false);

  const categories = ["all", "web", "mobile", "vr/ar"];
  
  const filteredProjects = activeTab === "all" 
    ? initialProjects 
    : initialProjects.filter(project => project.category === activeTab);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsModalMaximized(false); // Reset maximization state on new modal open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); 
  };

  const toggleModalMaximize = () => {
    setIsModalMaximized(!isModalMaximized);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A curated collection of my most impactful and innovative projects. Each one reflects my commitment to quality, user experience, and cutting-edge technology.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-200 dark:bg-gray-800 p-1.5 rounded-full shadow-inner">
              {categories.map((category) => (
                 <TabsTrigger 
                  key={category}
                  value={category} 
                  className="capitalize rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 
                             data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 
                             data-[state=active]:text-white data-[state=active]:shadow-md
                             hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={handleOpenModal} />
          ))}
        </div>
         {filteredProjects.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 col-span-full text-lg"
          >
            No projects found in this category yet. Stay tuned!
          </motion.p>
        )}
      </div>
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        isMaximized={isModalMaximized}
        toggleMaximize={toggleModalMaximize}
      />
    </section>
  );
};

export default ProjectsSection;